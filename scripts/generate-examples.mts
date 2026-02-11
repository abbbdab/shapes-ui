import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const workspaceRoot = path.resolve(__dirname, "..");
const examplesDir = path.join(workspaceRoot, "examples");
const uiDir = path.join(workspaceRoot, "src", "components", "ui");
const indexFile = path.join(examplesDir, "__index.tsx");

function toTitle(input: string) {
  return input
    .split(/[-_]/g)
    .filter(Boolean)
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(" ");
}

const dirEntries = await fs.readdir(examplesDir, { withFileTypes: true });
const exampleFiles = dirEntries
  .filter((entry: fs.Dirent) => entry.isFile() && entry.name.endsWith(".tsx") && entry.name !== "__index.tsx")
  .map((entry: fs.Dirent) => entry.name);

const registry = new Map<
  string,
  {
    title: string;
    examples: Array<{ baseName: string; title: string }>;
  }
>();

for (const fileName of exampleFiles) {
  const baseName = fileName.replace(/\.tsx$/, "");
  const dashIndex = baseName.indexOf("-");
  if (dashIndex === -1) {
    console.warn(`Skipping ${fileName}: expected component-variant naming format.`);
    continue;
  }

  const component = baseName.slice(0, dashIndex);
  const variant = baseName.slice(dashIndex + 1);
  if (!variant) {
    console.warn(`Skipping ${fileName}: variant name is missing.`);
    continue;
  }

  if (!registry.has(component)) {
    registry.set(component, {
      title: toTitle(component),
      examples: [],
    });
  }

  registry.get(component)!.examples.push({
    baseName,
    title: toTitle(variant),
  });
}

const sortedComponents = Array.from(registry.entries()).sort((a, b) => a[0].localeCompare(b[0]));

const lines: string[] = [];
lines.push('import type React from "react";');
lines.push('import { lazy } from "react";\n');
lines.push("type ExampleRegistry = Record<string, Example>;\n");
lines.push("type Example = {");
lines.push("  title: string;");
lines.push("  code: React.LazyExoticComponent<React.FC>;");
lines.push("  examples: Array<{");
lines.push("    name: string;");
lines.push("    title: string;");
lines.push("    code: React.LazyExoticComponent<React.FC>;");
lines.push("  }>;");
lines.push("};\n");
lines.push("export const examples: ExampleRegistry = {");

for (const [component, data] of sortedComponents) {
  const sortedExamples = data.examples.slice().sort((a, b) => b.baseName.localeCompare(a.baseName));

  const rootImport = `../src/components/ui/${component}`;
  const rootPath = path.join(uiDir, `${component}.tsx`);
  let hasRoot = false;

  try {
    await fs.access(rootPath);
    hasRoot = true;
  } catch {
    console.warn(`Missing root component file: src/components/ui/${component}.tsx`);
  }

  const primaryImport = hasRoot ? rootImport : `./${sortedExamples[0].baseName}`;
  const componentName = toTitle(component).replace(/\s/g, "");

  lines.push(`  ${component}: {`);
  lines.push(`    title: "${data.title}",`);
  lines.push(
    `    code: lazy(() => import("${primaryImport}").then(m => ({ default: m.${componentName} || m.default }))),`,
  );
  lines.push("    examples: [");

  for (const example of sortedExamples) {
    lines.push("      {");
    lines.push(`        name: "${example.baseName}",`);
    lines.push(`        title: "${example.title}",`);
    lines.push(`        code: lazy(() => import("./${example.baseName}")),`);
    lines.push("      },");
  }

  lines.push("    ],");
  lines.push("  },");
}

lines.push("};\n");

await fs.writeFile(indexFile, lines.join("\n"));
console.log(`Wrote ${path.relative(workspaceRoot, indexFile)}`);
