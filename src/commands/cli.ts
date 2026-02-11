#!/usr/bin/env node
import { Command } from "commander";

import { getConfig } from "@/utils/cli-utils";

import { addCommand } from "./add";
import { initCommand } from "./init";

const program = new Command();

program.name("shapes").description("Shapes UI CLI").version("0.0.1");

program.command("init").description("Configure Shapes UI for your project").action(initCommand);

program
  .command("add [components...]")
  .description("Add components to your project")
  .action(async (components) => {
    const config = await getConfig();
    if (!config) {
      console.error("Please run 'init' first.");
      return;
    }
    await addCommand(components, config);
  });

program.parse();
