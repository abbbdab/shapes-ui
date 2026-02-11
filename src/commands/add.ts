import path from "node:path";

import { cancel, multiselect, note, spinner } from "@clack/prompts";
import { execa } from "execa";
import fs from "fs-extra";

import type { RegistryItem } from "@/types/registry-item";
import { exitIfCancelled } from "@/utils/cli-utils";
import { getInstallCommand } from "@/utils/package-manager";
import type { Config } from "@/utils/schema";

const REGISTRY_URL = "https://shapes-ui.com/r";

export async function loadRegistryIndex() {
  const localRegistryDir = path.resolve(process.cwd(), "public/r");
  if (await fs.pathExists(localRegistryDir)) {
    const files = await fs.readdir(localRegistryDir);
    const entries: RegistryItem[] = [];

    for (const file of files) {
      if (!file.endsWith(".json") || file === "index.json") continue;
      const data = await fs.readJSON(path.join(localRegistryDir, file));
      if (data?.name) entries.push(data);
    }

    return entries.map((entry) => entry.name).sort();
  }

  const res = await fetch(`${REGISTRY_URL}/index.json`);
  if (!res.ok) throw new Error("Registry index not found.");
  const data = await res.json();

  if (Array.isArray(data) && data.every((item) => typeof item === "string")) {
    return data.sort();
  }

  if (Array.isArray(data)) {
    return data
      .map((item) => item?.name)
      .filter((name) => typeof name === "string")
      .sort();
  }

  return [];
}

export async function pickComponents() {
  let components: string[] = [];
  try {
    components = await loadRegistryIndex();
  } catch (error) {
    cancel(error instanceof Error ? error.message : "Failed to load registry.");
    process.exit(1);
  }

  if (!components.length) {
    note("No components found in the registry.");
    return [] as string[];
  }

  const selected = exitIfCancelled(
    await multiselect({
      message: "Select components to add",
      options: components.map((name) => ({ label: name, value: name })),
    }),
  );

  return selected as string[];
}

export async function installComponent(name: string, config: Config) {
  const spin = spinner();
  spin.start(`Fetching ${name}`);

  let data: RegistryItem;

  const localFile = path.resolve(process.cwd(), `public/r/${name}.json`);
  if (await fs.pathExists(localFile)) {
    data = await fs.readJSON(localFile);
  } else {
    const res = await fetch(`${REGISTRY_URL}/${name}.json`);
    if (!res.ok) {
      spin.stop("Fetch failed");
      throw new Error(`Component ${name} not found in registry.`);
    }
    data = await res.json();
  }

  spin.stop(`Fetched ${name}`);

  // 1. Recursive Install of Registry Dependencies
  if (data.registryDependencies) {
    for (const dep of data.registryDependencies) {
      const depPath = path.join(process.cwd(), config.paths.ui, `${dep}.tsx`);
      if (!fs.existsSync(depPath)) {
        await installComponent(dep, config);
      }
    }
  }

  // 2. Install NPM Dependencies
  if (data.dependencies?.length) {
    const [command, ...args] = await getInstallCommand(data.dependencies);
    await execa(command, args);
  }

  // 3. Write Files
  for (const file of data.files) {
    const target = path.join(process.cwd(), config.paths.ui, file.path);
    await fs.ensureDir(path.dirname(target));
    await fs.writeFile(target, file.content);
  }
  note(`Added ${name}`);
}

export async function addCommand(components: string[], config: Config) {
  let selections = components;
  if (!selections?.length) {
    selections = await pickComponents();
  }

  for (const name of selections) {
    await installComponent(name, config);
  }
}
