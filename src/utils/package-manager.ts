import { detect } from "detect-package-manager";

export async function getPackageManager() {
  try {
    return await detect();
  } catch {
    return "npm";
  }
}

export async function getInstallCommand(deps: string[], dev = false) {
  const pm = await getPackageManager();

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
