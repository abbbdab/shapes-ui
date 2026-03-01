import { detect } from "detect-package-manager";

export async function getPackageManager(cwd = process.cwd()) {
  try {
    return await detect({ cwd });
  } catch {
    return "npm";
  }
}

export async function getInstallCommand(deps: string[], dev = false, cwd = process.cwd()) {
  const pm = await getPackageManager(cwd);

  if (pm === "yarn") {
    return ["yarn", "add", ...(dev ? ["-D"] : []), ...deps];
  }

  if (pm === "pnpm") {
    return ["pnpm", "add", ...(dev ? ["-D"] : []), ...deps];
  }

  if (pm === "bun") {
    return ["bun", "add", ...(dev ? ["-d"] : []), ...deps];
  }

  return ["npm", "install", ...(dev ? ["--save-dev"] : []), ...deps];
}
