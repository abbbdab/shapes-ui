import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/commands/cli.ts"],
  format: ["esm"],
  clean: true,
  dts: true,
  external: ["commander", "execa", "fs-extra", "@clack/prompts", "detect-package-manager"],
  banner: {
    js: "import { createRequire } from 'module';const require = createRequire(import.meta.url);",
  },
});
