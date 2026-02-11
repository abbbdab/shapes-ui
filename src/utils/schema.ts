import fs from "fs-extra";
import { z } from "zod";
import { zodToJsonSchema } from "zod-to-json-schema";

export const configSchema = z.object({
  $schema: z.string().optional(),
  style: z.enum(["default", "brutalist", "minimal"]).default("default"),
  tailwind: z.object({
    config: z.string().optional(),
    css: z.string().default("src/styles/globals.css"),
    baseColor: z.string().default("zinc"),
  }),
  paths: z.object({
    ui: z.string().default("./src/components/ui"),
    lib: z.string().default("./src/lib"),
  }),
});

export type Config = z.infer<typeof configSchema>;

export function generateSchemaJson() {
  const jsonSchema = zodToJsonSchema(configSchema as any, "ShapesUIConfig");
  fs.writeJSONSync("./public/schema.json", jsonSchema, { spaces: 2 });
  console.log("✅ Schema generated at ./public/schema.json");
}
