#!/usr/bin/env node
import { Command } from "commander";

import { getConfig } from "@/utils/cli-utils";

import { addAllComponents, addCommand } from "./add";
import { createCommand } from "./create";
import { initCommand } from "./init";
import { paletteSetCommand } from "./palette";

const program = new Command();

program.name("shapes-ui").description("Shapes UI CLI").version("0.0.1");

program.command("init").description("Configure Shapes UI for your project").action(initCommand);

program
  .command("create [project-name]")
  .description("Create a new Vite React TypeScript app ready for Shapes UI")
  .option("-i, --install", "Install project dependencies")
  .option("--full", "Configure Shapes UI and install all components")
  .option("--style <style>", "Shapes style for --full (default|brutalist|minimal)")
  .option("--palette <name>", "Brand palette for --full (e.g. blue, emerald, rose)")
  .option("--contrast-mode <mode>", "Foreground contrast mode for --full (deterministic|dynamic)")
  .option("--ui-path <path>", "UI components path for --full (e.g. ./src/components/ui)")
  .option("--css-path <path>", "Tailwind CSS file path for --full (e.g. src/index.css)")
  .option("-f, --force", "Overwrite target directory if it already exists")
  .action(async (projectName, options) => {
    await createCommand(projectName, {
      install: options.install,
      full: options.full,
      style: options.style,
      palette: options.palette,
      contrastMode: options.contrastMode,
      uiPath: options.uiPath,
      cssPath: options.cssPath,
      force: options.force,
    });
  });

program
  .command("add [components...]")
  .description("Add components to your project")
  .option("-a, --all", "Add all available components")
  .action(async (components, options) => {
    const config = await getConfig();
    if (!config) {
      console.error("Please run 'init' first.");
      return;
    }
    if (options.all) {
      await addAllComponents(config);
      return;
    }
    await addCommand(components, config);
  });

program
  .command("palette")
  .description("Manage color palettes")
  .command("set <name>")
  .description("Set brand palette and regenerate semantic tokens")
  .option("--css-path <path>", "Override Tailwind CSS file path")
  .option("--contrast-mode <mode>", "Foreground contrast mode (deterministic|dynamic)")
  .option("--refresh", "Refresh Tailwind palette data from docs")
  .action(async (name, options) => {
    await paletteSetCommand(name, {
      cssPath: options.cssPath,
      contrastMode: options.contrastMode,
      refresh: options.refresh,
    });
  });

program.parse();
