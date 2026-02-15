import path from "node:path";

import { confirm, intro, note, outro, select, text, spinner } from "@clack/prompts";
import { execa } from "execa";
import figlet from "figlet";
import fs from "fs-extra";
import gradient from "gradient-string";
import pc from "picocolors";

import { pickComponents, installComponent } from "@/commands/add";
import {
  exitIfCancelled,
  getMissingDeps,
  isTailwindV4Installed,
  isViteProject,
  readPackageJson,
} from "@/utils/cli-utils";
import { getInstallCommand } from "@/utils/package-manager";
import { type Config } from "@/utils/schema";

const BASE_DEPS = [
  "@base-ui/react",
  "class-variance-authority",
  "clsx",
  "lucide-react",
  "tailwind-merge",
  "tw-animate-css",
];

async function installDeps(deps: string[], dev = false) {
  if (!deps.length) return;
  const spin = spinner();
  const label = dev ? "Installing dev dependencies" : "Installing dependencies";
  spin.start(label);

  const [command, ...args] = await getInstallCommand(deps, dev);
  await execa(command, args);

  spin.stop(pc.green("Dependencies installed"));
}

async function ensureTailwindStyles(cssPath: string) {
  const template = '@import "tailwindcss";\n';
  const absPath = path.join(process.cwd(), cssPath);
  await fs.ensureDir(path.dirname(absPath));

  if (await fs.pathExists(absPath)) {
    const current = await fs.readFile(absPath, "utf-8");
    if (current.includes("tailwindcss") || current.includes("@tailwind")) return;
    await fs.writeFile(absPath, `${current.trimEnd()}\n\n${template}`);
    return;
  }

  await fs.writeFile(absPath, template);
}

function renderTitle() {
  const text = figlet.textSync("Shapes UI", { font: "Standard" });
  console.log(gradient.pastel.multiline(text));
}

export async function initCommand() {
  console.clear();
  renderTitle();
  intro(pc.bgCyan(pc.black(" Welcome to Shapes UI ")));

  const configPath = path.join(process.cwd(), "shapes.json");
  if (await fs.pathExists(configPath)) {
    const overwrite = exitIfCancelled(
      await confirm({ message: "shapes.json already exists. Overwrite it?" }),
    );
    if (!overwrite) {
      outro(pc.yellow("Init cancelled."));
      return;
    }
  }

  const style = exitIfCancelled(
    await select({
      message: "Which style do you want to use?",
      options: [
        { label: "Default", value: "default" },
        { label: "Brutalist", value: "brutalist" },
      ],
    }),
  );

  const uiPath = exitIfCancelled(
    await text({
      message: "Where should we install components?",
      initialValue: "./src/components/ui",
    }),
  );

  const pkg = await readPackageJson();
  const hasTailwindV4 = isTailwindV4Installed(pkg);
  const isVite = await isViteProject();

  const hasExistingCss = exitIfCancelled(
    await confirm({ message: "Do you already have a CSS file?" }),
  );

  const cssPath = hasExistingCss
    ? exitIfCancelled(
        await text({
          message: "Path to your CSS file",
          initialValue: "src/styles/globals.css",
        }),
      )
    : "src/styles/globals.css";

  if (!hasTailwindV4) {
    const tailwindDeps = ["tailwindcss"];
    if (isVite) {
      tailwindDeps.push("@tailwindcss/vite");
    }
    await installDeps(tailwindDeps, true);
  }

  const missingBaseDeps = getMissingDeps(pkg, BASE_DEPS);
  await installDeps(missingBaseDeps, false);
  await ensureTailwindStyles(cssPath);

  const config: Config = {
    $schema: "https://shapes-ui.com/schema.json",
    style: style as Config["style"],
    tailwind: { css: cssPath as string, baseColor: "zinc" },
    paths: { ui: uiPath as string, lib: "./src/lib" },
  };

  await fs.writeJSON("shapes.json", config, { spaces: 2 });
  note("Created shapes.json", "Configuration");

  const addNow = exitIfCancelled(await confirm({ message: "Add components now?" }));
  if (addNow) {
    const selected = await pickComponents();
    if (selected.length > 0) {
      for (const name of selected) {
        await installComponent(name, config);
      }
    }
  }

  outro(pc.green("Shapes UI is ready."));
}
