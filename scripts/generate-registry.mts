import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

import ts from "typescript";

import type { RegistryItem } from "../src/types/registry-item";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const workspaceRoot = path.resolve(__dirname, "..");
const uiDir = path.join(workspaceRoot, "src", "components", "ui");
const outputDir = path.join(workspaceRoot, "public", "r");

type DependencyInfo = {
  dependencies: string[];
  registryDependencies: string[];
};

export function inferDependencies(options: {
  name: string;
  content: string;
  filePath: string;
  uiDir: string;
}): DependencyInfo {
  const { name, content, filePath, uiDir } = options;
  const sourceFile = ts.createSourceFile(
    filePath,
    content,
    ts.ScriptTarget.ESNext,
    true,
    ts.ScriptKind.TSX,
  );

  const importSpecifiers = new Set<string>();
  sourceFile.forEachChild((node) => {
    if (ts.isImportDeclaration(node) && ts.isStringLiteral(node.moduleSpecifier)) {
      importSpecifiers.add(node.moduleSpecifier.text);
    }
  });

  const dependencies = new Set<string>();
  const registryDependencies = new Set<string>();

  for (const spec of importSpecifiers) {
    if (spec.startsWith("@/")) {
      if (spec.startsWith("@/components/ui/")) {
        const depName = spec.replace("@/components/ui/", "").split("/")[0];
        if (depName && depName !== name) registryDependencies.add(depName);
      }
      continue;
    }

    if (spec.startsWith("./") || spec.startsWith("../")) {
      const resolved = path.resolve(path.dirname(filePath), spec);
      if (resolved.startsWith(uiDir)) {
        const depName = path.basename(resolved).replace(/\.(t|j)sx?$/, "");
        if (depName && depName !== name && depName !== "index") {
          registryDependencies.add(depName);
        }
      }
      continue;
    }

    const packageName = spec.startsWith("@")
      ? spec.split("/").slice(0, 2).join("/")
      : spec.split("/")[0];

    if (packageName && packageName !== "react" && packageName !== "react-dom") {
      dependencies.add(packageName);
    }
  }

  return {
    dependencies: Array.from(dependencies),
    registryDependencies: Array.from(registryDependencies),
  };
}

async function generate() {
  await fs.mkdir(outputDir, { recursive: true });

  const files = await fs.readdir(uiDir);
  const componentFiles = files.filter((f) => f.endsWith(".tsx"));

  const registryIndex: string[] = [];

  for (const file of componentFiles) {
    const name = file.replace(".tsx", "");
    const content = await fs.readFile(path.join(uiDir, file), "utf-8");

    const { dependencies, registryDependencies } = inferDependencies({
      name,
      content,
      filePath: path.join(uiDir, file),
      uiDir,
    });

    const registryItem: RegistryItem = {
      name,
      type: "registry:ui",
      dependencies,
      registryDependencies,
      files: [
        {
          path: `${name}.tsx`,
          content,
          type: "registry:ui",
        },
      ],
    };

    await fs.writeFile(path.join(outputDir, `${name}.json`), JSON.stringify(registryItem, null, 2));

    registryIndex.push(name);
    console.log(`✅ Generated ${name}.json`);
  }

  await fs.writeFile(path.join(outputDir, "index.json"), JSON.stringify(registryIndex, null, 2));
  console.log("✅ Generated index.json");
}

const entryFile = process.argv[1] ? path.resolve(process.argv[1]) : "";
const isDirectRun = fileURLToPath(import.meta.url) === entryFile;

if (isDirectRun) {
  generate().catch(console.error);
}
