import { spinner } from "@clack/prompts";
import { execa } from "execa";

import { getInstallCommand } from "@/utils/package-manager";

type InstallDependenciesOptions = {
  dev?: boolean;
  label?: string;
  successMessage?: string;
  cwd?: string;
};

export async function installDependencies(
  deps: string[],
  options: InstallDependenciesOptions = {},
) {
  if (!deps.length) return;

  const spin = spinner();
  const label =
    options.label ?? (options.dev ? "Installing dev dependencies" : "Installing dependencies");

  spin.start(label);

  const cwd = options.cwd ?? process.cwd();
  const [command, ...args] = await getInstallCommand(deps, options.dev ?? false, cwd);
  await execa(command, args, { cwd });

  spin.stop(options.successMessage ?? "Dependencies installed");
}
