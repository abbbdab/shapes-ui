import path from "node:path";

import { cancel, isCancel } from "@clack/prompts";
import fs from "fs-extra";

import { configSchema, type Config } from "@/utils/schema";

export function exitIfCancelled<T>(value: T): Exclude<T, symbol> {
  if (isCancel(value)) {
    cancel("Operation cancelled.");
    process.exit(0);
  }
  return value as Exclude<T, symbol>;
}

export async function getConfig(cwd = process.cwd()): Promise<Config | null> {
  const configPath = path.join(cwd, "shapes.json");
  if (!fs.existsSync(configPath)) return null;
  return configSchema.parse(await fs.readJSON(configPath));
}

export async function readPackageJson(cwd = process.cwd()) {
  const pkgPath = path.join(cwd, "package.json");
  if (!(await fs.pathExists(pkgPath))) return null;
  return fs.readJSON(pkgPath);
}

export function getDepVersion(pkg: Record<string, any> | null, name: string) {
  return pkg?.dependencies?.[name] ?? pkg?.devDependencies?.[name] ?? null;
}

export function parseMajor(version: string | null) {
  if (!version) return null;
  const match = version.match(/\d+/);
  return match ? Number.parseInt(match[0], 10) : null;
}

export function isTailwindV4Installed(pkg: Record<string, any> | null) {
  const major = parseMajor(getDepVersion(pkg, "tailwindcss"));
  return major === 4;
}

export function getMissingDeps(pkg: Record<string, any> | null, deps: string[]) {
  if (!pkg) return deps;
  return deps.filter((dep) => !pkg.dependencies?.[dep] && !pkg.devDependencies?.[dep]);
}

export async function isViteProject(cwd = process.cwd()) {
  const viteConfigTs = path.join(cwd, "vite.config.ts");
  const viteConfigJs = path.join(cwd, "vite.config.js");
  const viteConfigMjs = path.join(cwd, "vite.config.mjs");

  return (
    (await fs.pathExists(viteConfigTs)) ||
    (await fs.pathExists(viteConfigJs)) ||
    (await fs.pathExists(viteConfigMjs))
  );
}
