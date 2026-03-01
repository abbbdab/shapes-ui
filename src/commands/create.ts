import path from "node:path";

import { confirm, intro, note, outro, spinner, text } from "@clack/prompts";
import { execa } from "execa";
import fs from "fs-extra";
import pc from "picocolors";

import { addAllComponents } from "@/commands/add";
import {
  exitIfCancelled,
  getMissingDeps,
  isTailwindV4Installed,
  isViteProject,
  readPackageJson,
} from "@/utils/cli-utils";
import { installDependencies } from "@/utils/dependency-installer";
import { getPackageManager } from "@/utils/package-manager";
import {
  type ContrastMode,
  getDefaultBrandPaletteOptions,
  normalizeContrastMode,
  writePaletteTokens,
} from "@/utils/palette";
import type { Config } from "@/utils/schema";

type CreateOptions = {
  install?: boolean;
  force?: boolean;
  full?: boolean;
  style?: Config["style"];
  palette?: string;
  contrastMode?: ContrastMode | string;
  uiPath?: string;
  cssPath?: string;
};

const BASE_DEPS = [
  "@base-ui/react",
  "class-variance-authority",
  "clsx",
  "lucide-react",
  "tailwind-merge",
  "tw-animate-css",
];

async function ensureTailwindStyles(cwd: string, cssPath: string) {
  const template = '@import "tailwindcss";\n';
  const absPath = path.join(cwd, cssPath);
  await fs.ensureDir(path.dirname(absPath));

  if (await fs.pathExists(absPath)) {
    const current = await fs.readFile(absPath, "utf-8");
    if (current.includes("tailwindcss") || current.includes("@tailwind")) return;
    await fs.writeFile(absPath, `${current.trimEnd()}\n\n${template}`);
    return;
  }

  await fs.writeFile(absPath, template);
}

async function setupShapesFull(projectDir: string, options: CreateOptions) {
  const setupSpin = spinner();
  setupSpin.start("Configuring Shapes UI");

  const cssPath = options.cssPath ?? "src/index.css";
  const uiPath = options.uiPath ?? "./src/components/ui";
  const style = options.style ?? "default";
  const palette = options.palette ?? "blue";
  const contrastMode = options.contrastMode ?? "deterministic";
  const pkg = await readPackageJson(projectDir);
  const hasTailwindV4 = isTailwindV4Installed(pkg);
  const isVite = await isViteProject(projectDir);

  if (!hasTailwindV4) {
    const tailwindDeps = ["tailwindcss"];
    if (isVite) {
      tailwindDeps.push("@tailwindcss/vite");
    }

    await installDependencies(tailwindDeps, {
      dev: true,
      label: "Installing Tailwind dependencies",
      successMessage: "Tailwind dependencies installed",
      cwd: projectDir,
    });
  }

  const latestPkg = await readPackageJson(projectDir);
  const missingBaseDeps = getMissingDeps(latestPkg, BASE_DEPS);
  await installDependencies(missingBaseDeps, {
    label: "Installing Shapes base dependencies",
    successMessage: "Shapes base dependencies installed",
    cwd: projectDir,
  });

  await ensureTailwindStyles(projectDir, cssPath);

  const paletteResult = await writePaletteTokens({
    cwd: projectDir,
    cssPath,
    paletteName: palette,
    neutralPalette: "zinc",
    contrastMode,
  });

  const config: Config = {
    $schema: "https://shapes-ui.com/schema.json",
    style,
    palette: {
      name: paletteResult.paletteName,
      contrastMode: paletteResult.contrastMode,
    },
    tailwind: { css: cssPath, baseColor: "zinc" },
    paths: { ui: uiPath, lib: "./src/lib" },
  };

  await fs.writeJSON(path.join(projectDir, "shapes.json"), config, { spaces: 2 });
  await addAllComponents(config, projectDir);

  setupSpin.stop("Shapes UI configured with all components");
}

function getCreateCommand(packageManager: string, projectName: string) {
  if (packageManager === "pnpm") {
    return ["pnpm", ["create", "vite", projectName, "--template", "react-ts"]] as const;
  }

  if (packageManager === "yarn") {
    return ["yarn", ["create", "vite", projectName, "--template", "react-ts"]] as const;
  }

  if (packageManager === "bun") {
    return ["bun", ["create", "vite", projectName, "--template", "react-ts"]] as const;
  }

  return ["npm", ["create", "vite@latest", projectName, "--", "--template", "react-ts"]] as const;
}

function getProjectInstallCommand(packageManager: string) {
  if (packageManager === "pnpm") {
    return ["pnpm", ["install"]] as const;
  }

  if (packageManager === "yarn") {
    return ["yarn", ["install"]] as const;
  }

  if (packageManager === "bun") {
    return ["bun", ["install"]] as const;
  }

  return ["npm", ["install"]] as const;
}

export async function createCommand(projectNameArg?: string, options: CreateOptions = {}) {
  intro(pc.bgCyan(pc.black(" Create a Shapes UI app ")));

  const allowedStyles = new Set<Config["style"]>(["default", "brutalist", "minimal"]);
  if (options.style && !allowedStyles.has(options.style)) {
    throw new Error(`Invalid style "${options.style}". Use one of: default, brutalist, minimal.`);
  }

  if (options.palette) {
    const normalizedPalette = options.palette.toLowerCase();
    const allowedPalettes = new Set<string>(getDefaultBrandPaletteOptions());
    if (!allowedPalettes.has(normalizedPalette)) {
      throw new Error(
        `Invalid palette "${options.palette}". Use one of: ${getDefaultBrandPaletteOptions().join(", ")}.`,
      );
    }
    options.palette = normalizedPalette;
  }

  if (options.contrastMode) {
    options.contrastMode = normalizeContrastMode(options.contrastMode);
  }

  if (options.uiPath !== undefined && !options.uiPath.trim()) {
    throw new Error("Invalid ui path. Please provide a non-empty value.");
  }

  if (options.cssPath !== undefined && !options.cssPath.trim()) {
    throw new Error("Invalid css path. Please provide a non-empty value.");
  }

  const projectName =
    projectNameArg && projectNameArg.trim().length > 0
      ? projectNameArg.trim()
      : (
          exitIfCancelled(
            await text({
              message: "Project name",
              initialValue: "my-shapes-app",
              validate(value) {
                if (!value || !value.trim()) return "Project name is required.";
                return undefined;
              },
            }),
          ) as string
        ).trim();

  const projectDir = path.resolve(process.cwd(), projectName);
  const exists = await fs.pathExists(projectDir);

  if (exists) {
    const overwrite =
      options.force ??
      exitIfCancelled(
        await confirm({
          message: `${projectName} already exists. Overwrite it?`,
          initialValue: false,
        }),
      );

    if (!overwrite) {
      outro(pc.yellow("Create cancelled."));
      return;
    }

    await fs.remove(projectDir);
  }

  const packageManager = await getPackageManager();
  const [createCommandName, createArgs] = getCreateCommand(packageManager, projectName);

  const createSpin = spinner();
  createSpin.start(`Scaffolding ${projectName}`);

  await execa(createCommandName, createArgs, { stdio: "ignore" });
  createSpin.stop(`Created ${projectName}`);

  note(`Project scaffolded with ${packageManager} + Vite (React + TypeScript).`, "Create");

  const shouldInstallProjectDeps = options.install || options.full;

  if (shouldInstallProjectDeps) {
    const [installCommand, installArgs] = getProjectInstallCommand(packageManager);
    const installSpin = spinner();
    installSpin.start("Installing project dependencies");

    await execa(installCommand, installArgs, {
      cwd: projectDir,
      stdio: "ignore",
    });

    installSpin.stop("Dependencies installed");
  }

  if (options.full) {
    await setupShapesFull(projectDir, options);
  }

  const runShapesInit = `${packageManager === "npm" ? "npx" : packageManager === "pnpm" ? "pnpm dlx" : packageManager === "yarn" ? "yarn dlx" : "bunx"} shapes-ui init`;

  outro(
    `${pc.green(options.full ? "Project ready with Shapes UI." : "Project ready.")}\n\n` +
      `${pc.bold("Next steps:")}\n` +
      `  cd ${projectName}\n` +
      `  ${shouldInstallProjectDeps ? "" : `${packageManager} install\n  `}${options.full ? "" : `${runShapesInit}\n  `}` +
      `  ${packageManager} run dev`,
  );
}
