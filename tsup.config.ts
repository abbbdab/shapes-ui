import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/commands/cli.ts"],
  format: ["esm"],
  clean: true,
  dts: true,
  banner: {
    js: "import { createRequire } from 'module';const require = createRequire(import.meta.url);",
  },
});
