import path from "node:path";

import { intro, note, outro } from "@clack/prompts";
import fs from "fs-extra";
import pc from "picocolors";

import { getConfig } from "@/utils/cli-utils";
import { normalizeContrastMode, writePaletteTokens } from "@/utils/palette";

type PaletteSetOptions = {
  cssPath?: string;
  contrastMode?: string;
  refresh?: boolean;
};

export async function paletteSetCommand(name: string, options: PaletteSetOptions = {}) {
  intro(pc.bgCyan(pc.black(" Update Shapes palette ")));

  const config = await getConfig();
  if (!config) {
    throw new Error("Could not find shapes.json. Run `shapes-ui init` first.");
  }

  const contrastMode = normalizeContrastMode(options.contrastMode ?? config.palette?.contrastMode);
  const cssPath = options.cssPath ?? config.tailwind.css;
  const neutralPalette = config.tailwind.baseColor;

  const result = await writePaletteTokens({
    cssPath,
    paletteName: name,
    neutralPalette,
    contrastMode,
    refresh: options.refresh,
  });

  const updatedConfig = {
    ...config,
    palette: {
      name: result.paletteName,
      contrastMode: result.contrastMode,
    },
    tailwind: {
      ...config.tailwind,
      css: cssPath,
    },
  };

  await fs.writeJSON(path.join(process.cwd(), "shapes.json"), updatedConfig, { spaces: 2 });

  note(
    `palette=${result.paletteName} neutral=${result.neutralPalette} contrast=${result.contrastMode} source=${result.source}`,
    "Palette updated",
  );
  outro(pc.green("Shapes UI palette updated."));
}
