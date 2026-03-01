import os from "node:os";
import path from "node:path";

import fs from "fs-extra";

const CACHE_VERSION = 1;
const TAILWIND_COLORS_URL = "https://tailwindcss.com/docs/colors";
const MARKER_START = "/* shapes-ui:tokens:start v1 */";
const MARKER_END = "/* shapes-ui:tokens:end */";
const SHADE_STEPS = [
  "50",
  "100",
  "200",
  "300",
  "400",
  "500",
  "600",
  "700",
  "800",
  "900",
  "950",
] as const;

const DEFAULT_BRAND_PALETTES = [
  "red",
  "orange",
  "amber",
  "yellow",
  "lime",
  "green",
  "emerald",
  "teal",
  "cyan",
  "sky",
  "blue",
  "indigo",
  "violet",
  "purple",
  "fuchsia",
  "pink",
  "rose",
] as const;

const DEFAULT_NEUTRAL_PALETTES = ["slate", "gray", "zinc", "neutral", "stone"] as const;

type ShadeStep = (typeof SHADE_STEPS)[number];
type ColorScale = Record<ShadeStep, string>;
type PaletteMap = Record<string, ColorScale>;
type ThemeMode = "light" | "dark";

type TokenRole =
  | "background"
  | "foreground"
  | "card"
  | "card-foreground"
  | "popup"
  | "popup-foreground"
  | "primary"
  | "primary-foreground"
  | "secondary"
  | "secondary-foreground"
  | "muted"
  | "muted-foreground"
  | "accent"
  | "accent-foreground"
  | "destructive"
  | "destructive-foreground"
  | "success"
  | "success-foreground"
  | "warning"
  | "warning-foreground"
  | "info"
  | "info-foreground"
  | "border"
  | "input"
  | "ring";

type TokenTheme = Record<TokenRole, string>;

type SemanticAssignments = {
  light: TokenTheme;
  dark: TokenTheme;
};

type TokenRef = {
  family: string;
  shade: ShadeStep;
};

type CachePayload = {
  version: number;
  fetchedAt: string;
  palettes: PaletteMap;
};

export type ContrastMode = "deterministic" | "dynamic";

export type PaletteWriteResult = {
  source: "remote" | "cache" | "package";
  paletteName: string;
  neutralPalette: string;
  contrastMode: ContrastMode;
};

const FOREGROUND_PAIRS: Array<{ background: TokenRole; foreground: TokenRole }> = [
  { background: "card", foreground: "card-foreground" },
  { background: "popup", foreground: "popup-foreground" },
  { background: "primary", foreground: "primary-foreground" },
  { background: "secondary", foreground: "secondary-foreground" },
  { background: "muted", foreground: "muted-foreground" },
  { background: "accent", foreground: "accent-foreground" },
  { background: "destructive", foreground: "destructive-foreground" },
  { background: "success", foreground: "success-foreground" },
  { background: "warning", foreground: "warning-foreground" },
  { background: "info", foreground: "info-foreground" },
];

const DETERMINISTIC_FOREGROUND_SHADE: Record<ThemeMode, Record<TokenRole, ShadeStep>> = {
  light: {
    background: "950",
    foreground: "950",
    card: "950",
    "card-foreground": "950",
    popup: "950",
    "popup-foreground": "950",
    primary: "50",
    "primary-foreground": "50",
    secondary: "900",
    "secondary-foreground": "900",
    muted: "500",
    "muted-foreground": "500",
    accent: "900",
    "accent-foreground": "900",
    destructive: "50",
    "destructive-foreground": "50",
    success: "50",
    "success-foreground": "50",
    warning: "950",
    "warning-foreground": "950",
    info: "50",
    "info-foreground": "50",
    border: "900",
    input: "900",
    ring: "50",
  },
  dark: {
    background: "50",
    foreground: "50",
    card: "100",
    "card-foreground": "100",
    popup: "100",
    "popup-foreground": "100",
    primary: "950",
    "primary-foreground": "950",
    secondary: "100",
    "secondary-foreground": "100",
    muted: "400",
    "muted-foreground": "400",
    accent: "100",
    "accent-foreground": "100",
    destructive: "950",
    "destructive-foreground": "950",
    success: "950",
    "success-foreground": "950",
    warning: "950",
    "warning-foreground": "950",
    info: "950",
    "info-foreground": "950",
    border: "100",
    input: "100",
    ring: "950",
  },
};

function normalizeName(value: string) {
  return value.trim().toLowerCase();
}

function normalizeColorValue(value: string) {
  const trimmed = value.trim();
  if (trimmed.startsWith("oklch(")) {
    return trimmed.slice(6, -1).trim();
  }
  return trimmed;
}

function isValidScale(value: unknown): value is ColorScale {
  if (!value || typeof value !== "object") return false;
  return SHADE_STEPS.every((step) => typeof (value as Record<string, unknown>)[step] === "string");
}

function getCacheFilePath() {
  return path.join(os.homedir(), ".shapes-ui", "cache", "tailwind-colors-v4.json");
}

async function readCache(): Promise<PaletteMap | null> {
  const cachePath = getCacheFilePath();
  if (!(await fs.pathExists(cachePath))) return null;

  const payload = (await fs.readJSON(cachePath)) as CachePayload;
  if (
    payload.version !== CACHE_VERSION ||
    !payload.palettes ||
    typeof payload.palettes !== "object"
  ) {
    return null;
  }

  const validated: PaletteMap = {};
  for (const [name, scale] of Object.entries(payload.palettes)) {
    if (isValidScale(scale)) {
      validated[normalizeName(name)] = scale;
    }
  }

  return Object.keys(validated).length > 0 ? validated : null;
}

async function writeCache(palettes: PaletteMap) {
  const cachePath = getCacheFilePath();
  await fs.ensureDir(path.dirname(cachePath));
  const payload: CachePayload = {
    version: CACHE_VERSION,
    fetchedAt: new Date().toISOString(),
    palettes,
  };
  await fs.writeJSON(cachePath, payload, { spaces: 2 });
}

async function loadFromTailwindPackage(): Promise<PaletteMap | null> {
  try {
    const colorsModule = await import("tailwindcss/colors");
    const source = (colorsModule.default ?? colorsModule) as Record<string, unknown>;
    const palettes: PaletteMap = {};

    for (const [familyName, rawScale] of Object.entries(source)) {
      if (!rawScale || typeof rawScale !== "object") continue;
      const family = normalizeName(familyName);

      const scale = rawScale as Record<string, unknown>;
      const next: Partial<ColorScale> = {};
      for (const step of SHADE_STEPS) {
        const value = scale[step];
        if (typeof value !== "string") {
          next[step] = undefined;
          continue;
        }
        next[step] = normalizeColorValue(value);
      }

      if (isValidScale(next)) {
        palettes[family] = next;
      }
    }

    return Object.keys(palettes).length > 0 ? palettes : null;
  } catch {
    return null;
  }
}

function parseTailwindColorsFromDocs(markup: string): PaletteMap {
  const regex =
    /--color-([a-z]+)-(50|100|200|300|400|500|600|700|800|900|950)\s*:\s*(oklch\([^)]+\))/g;
  const palettes: Record<string, Partial<ColorScale>> = {};

  let match: RegExpExecArray | null = regex.exec(markup);
  while (match) {
    const family = normalizeName(match[1]);
    const shade = match[2] as ShadeStep;
    const value = normalizeColorValue(match[3]);

    palettes[family] ??= {};
    palettes[family][shade] = value;
    match = regex.exec(markup);
  }

  const validated: PaletteMap = {};
  for (const [family, scale] of Object.entries(palettes)) {
    if (isValidScale(scale)) {
      validated[family] = scale;
    }
  }

  return validated;
}

async function loadFromRemote(): Promise<PaletteMap | null> {
  try {
    const response = await fetch(TAILWIND_COLORS_URL);
    if (!response.ok) return null;
    const markup = await response.text();
    const palettes = parseTailwindColorsFromDocs(markup);
    if (Object.keys(palettes).length === 0) return null;
    return palettes;
  } catch {
    return null;
  }
}

async function resolvePaletteSource(
  refresh = false,
): Promise<{ source: "remote" | "cache" | "package"; palettes: PaletteMap }> {
  if (!refresh) {
    const fromCache = await readCache();
    if (fromCache) {
      return { source: "cache", palettes: fromCache };
    }
  }

  const fromRemote = await loadFromRemote();
  if (fromRemote) {
    await writeCache(fromRemote);
    return { source: "remote", palettes: fromRemote };
  }

  const fromCache = await readCache();
  if (fromCache) {
    return { source: "cache", palettes: fromCache };
  }

  const fromPackage = await loadFromTailwindPackage();
  if (fromPackage) {
    return { source: "package", palettes: fromPackage };
  }

  throw new Error("Could not load Tailwind color palettes from docs, cache, or local package.");
}

function resolveFamily(palettes: PaletteMap, familyName: string) {
  const family = normalizeName(familyName);
  const scale = palettes[family];
  if (!scale) {
    const available = Object.keys(palettes).sort().join(", ");
    throw new Error(`Palette "${familyName}" is not available. Available palettes: ${available}`);
  }
  return { family, scale };
}

function parseLightness(value: string) {
  const first = value.split(/\s+/)[0]?.trim() ?? "";
  if (!first) return Number.NaN;
  if (first.endsWith("%")) {
    return Number.parseFloat(first.slice(0, -1));
  }

  const numeric = Number.parseFloat(first);
  if (Number.isNaN(numeric)) return Number.NaN;
  return numeric <= 1 ? numeric * 100 : numeric;
}

function pickDynamicForegroundShade(scale: ColorScale, backgroundShade: ShadeStep) {
  const backgroundValue = scale[backgroundShade];
  const backgroundLightness = parseLightness(backgroundValue);

  if (!Number.isFinite(backgroundLightness)) {
    return backgroundShade === "950" ? "50" : "950";
  }

  let bestShade: ShadeStep = "950";
  let bestDelta = -1;

  for (const shade of SHADE_STEPS) {
    const delta = Math.abs(parseLightness(scale[shade]) - backgroundLightness);
    if (delta > bestDelta) {
      bestDelta = delta;
      bestShade = shade;
    }
  }

  return bestShade;
}

function buildAssignments(
  brandFamily: string,
  neutralFamily: string,
): Record<ThemeMode, Record<TokenRole, TokenRef>> {
  return {
    light: {
      background: { family: neutralFamily, shade: "50" },
      foreground: { family: neutralFamily, shade: "950" },
      card: { family: neutralFamily, shade: "50" },
      "card-foreground": { family: neutralFamily, shade: "950" },
      popup: { family: neutralFamily, shade: "50" },
      "popup-foreground": { family: neutralFamily, shade: "950" },
      primary: { family: brandFamily, shade: "600" },
      "primary-foreground": { family: brandFamily, shade: "50" },
      secondary: { family: neutralFamily, shade: "100" },
      "secondary-foreground": { family: neutralFamily, shade: "900" },
      muted: { family: neutralFamily, shade: "100" },
      "muted-foreground": { family: neutralFamily, shade: "500" },
      accent: { family: brandFamily, shade: "100" },
      "accent-foreground": { family: brandFamily, shade: "900" },
      destructive: { family: "red", shade: "600" },
      "destructive-foreground": { family: "red", shade: "50" },
      success: { family: "green", shade: "600" },
      "success-foreground": { family: "green", shade: "50" },
      warning: { family: "amber", shade: "500" },
      "warning-foreground": { family: "amber", shade: "950" },
      info: { family: brandFamily, shade: "600" },
      "info-foreground": { family: brandFamily, shade: "50" },
      border: { family: neutralFamily, shade: "200" },
      input: { family: neutralFamily, shade: "300" },
      ring: { family: brandFamily, shade: "500" },
    },
    dark: {
      background: { family: neutralFamily, shade: "950" },
      foreground: { family: neutralFamily, shade: "50" },
      card: { family: neutralFamily, shade: "900" },
      "card-foreground": { family: neutralFamily, shade: "100" },
      popup: { family: neutralFamily, shade: "900" },
      "popup-foreground": { family: neutralFamily, shade: "100" },
      primary: { family: brandFamily, shade: "500" },
      "primary-foreground": { family: brandFamily, shade: "950" },
      secondary: { family: neutralFamily, shade: "800" },
      "secondary-foreground": { family: neutralFamily, shade: "100" },
      muted: { family: neutralFamily, shade: "800" },
      "muted-foreground": { family: neutralFamily, shade: "400" },
      accent: { family: brandFamily, shade: "800" },
      "accent-foreground": { family: brandFamily, shade: "100" },
      destructive: { family: "red", shade: "500" },
      "destructive-foreground": { family: "red", shade: "950" },
      success: { family: "green", shade: "500" },
      "success-foreground": { family: "green", shade: "950" },
      warning: { family: "amber", shade: "500" },
      "warning-foreground": { family: "amber", shade: "950" },
      info: { family: brandFamily, shade: "500" },
      "info-foreground": { family: brandFamily, shade: "950" },
      border: { family: neutralFamily, shade: "800" },
      input: { family: neutralFamily, shade: "700" },
      ring: { family: brandFamily, shade: "400" },
    },
  };
}

function assignForegrounds(
  palettes: PaletteMap,
  assignments: Record<ThemeMode, Record<TokenRole, TokenRef>>,
  contrastMode: ContrastMode,
) {
  if (contrastMode === "deterministic") {
    for (const mode of ["light", "dark"] as const) {
      for (const pair of FOREGROUND_PAIRS) {
        const bg = assignments[mode][pair.background];
        assignments[mode][pair.foreground] = {
          family: bg.family,
          shade: DETERMINISTIC_FOREGROUND_SHADE[mode][pair.background],
        };
      }
    }
    return;
  }

  for (const mode of ["light", "dark"] as const) {
    for (const pair of FOREGROUND_PAIRS) {
      const background = assignments[mode][pair.background];
      const scale = palettes[background.family];
      if (!scale) continue;
      assignments[mode][pair.foreground] = {
        family: background.family,
        shade: pickDynamicForegroundShade(scale, background.shade),
      };
    }
  }
}

function resolveTokenThemes(
  palettes: PaletteMap,
  brandFamily: string,
  neutralFamily: string,
  contrastMode: ContrastMode,
): SemanticAssignments {
  const assignments = buildAssignments(brandFamily, neutralFamily);
  assignForegrounds(palettes, assignments, contrastMode);

  const result: SemanticAssignments = {
    light: {} as TokenTheme,
    dark: {} as TokenTheme,
  };

  for (const mode of ["light", "dark"] as const) {
    for (const [role, ref] of Object.entries(assignments[mode]) as [TokenRole, TokenRef][]) {
      const scale = palettes[ref.family];
      if (!scale) {
        throw new Error(`Palette "${ref.family}" is missing required shades.`);
      }
      result[mode][role] = scale[ref.shade];
    }
  }

  return result;
}

function formatThemeBlock(theme: TokenTheme) {
  return [
    `  --background: oklch(${theme.background});`,
    `  --foreground: oklch(${theme.foreground});`,
    `  --card: oklch(${theme.card});`,
    `  --card-foreground: oklch(${theme["card-foreground"]});`,
    `  --popup: oklch(${theme.popup});`,
    `  --popup-foreground: oklch(${theme["popup-foreground"]});`,
    `  --primary: oklch(${theme.primary});`,
    `  --primary-foreground: oklch(${theme["primary-foreground"]});`,
    `  --secondary: oklch(${theme.secondary});`,
    `  --secondary-foreground: oklch(${theme["secondary-foreground"]});`,
    `  --muted: oklch(${theme.muted});`,
    `  --muted-foreground: oklch(${theme["muted-foreground"]});`,
    `  --accent: oklch(${theme.accent});`,
    `  --accent-foreground: oklch(${theme["accent-foreground"]});`,
    `  --destructive: oklch(${theme.destructive});`,
    `  --destructive-foreground: oklch(${theme["destructive-foreground"]});`,
    `  --success: oklch(${theme.success});`,
    `  --success-foreground: oklch(${theme["success-foreground"]});`,
    `  --warning: oklch(${theme.warning});`,
    `  --warning-foreground: oklch(${theme["warning-foreground"]});`,
    `  --info: oklch(${theme.info});`,
    `  --info-foreground: oklch(${theme["info-foreground"]});`,
    `  --border: oklch(${theme.border});`,
    `  --input: oklch(${theme.input});`,
    `  --ring: oklch(${theme.ring});`,
  ].join("\n");
}

function buildTokenBlock(assignments: SemanticAssignments, result: PaletteWriteResult) {
  return [
    MARKER_START,
    `/* source=${result.source} palette=${result.paletteName} neutral=${result.neutralPalette} contrast=${result.contrastMode} */`,
    ":root {",
    formatThemeBlock(assignments.light),
    "}",
    "",
    ".dark {",
    formatThemeBlock(assignments.dark),
    "}",
    "",
    "@theme inline {",
    "  --color-background: var(--background);",
    "  --color-foreground: var(--foreground);",
    "  --color-card: var(--card);",
    "  --color-card-foreground: var(--card-foreground);",
    "  --color-popup: var(--popup);",
    "  --color-popup-foreground: var(--popup-foreground);",
    "  --color-primary: var(--primary);",
    "  --color-primary-foreground: var(--primary-foreground);",
    "  --color-secondary: var(--secondary);",
    "  --color-secondary-foreground: var(--secondary-foreground);",
    "  --color-muted: var(--muted);",
    "  --color-muted-foreground: var(--muted-foreground);",
    "  --color-accent: var(--accent);",
    "  --color-accent-foreground: var(--accent-foreground);",
    "  --color-destructive: var(--destructive);",
    "  --color-destructive-foreground: var(--destructive-foreground);",
    "  --color-success: var(--success);",
    "  --color-success-foreground: var(--success-foreground);",
    "  --color-warning: var(--warning);",
    "  --color-warning-foreground: var(--warning-foreground);",
    "  --color-info: var(--info);",
    "  --color-info-foreground: var(--info-foreground);",
    "  --color-border: var(--border);",
    "  --color-input: var(--input);",
    "  --color-ring: var(--ring);",
    "}",
    MARKER_END,
  ].join("\n");
}

function upsertGeneratedBlock(current: string, generatedBlock: string) {
  const hasStart = current.includes(MARKER_START);
  const hasEnd = current.includes(MARKER_END);

  if (hasStart !== hasEnd) {
    throw new Error("Found an incomplete generated token block. Please fix it manually and retry.");
  }

  if (!hasStart) {
    const trimmed = current.trimEnd();
    return `${trimmed}\n\n${generatedBlock}\n`;
  }

  const startIndex = current.indexOf(MARKER_START);
  const endIndex = current.indexOf(MARKER_END);
  if (startIndex === -1 || endIndex === -1 || endIndex < startIndex) {
    throw new Error("Could not safely update generated token block.");
  }

  const endMarkerIndex = endIndex + MARKER_END.length;
  const before = current.slice(0, startIndex).trimEnd();
  const after = current.slice(endMarkerIndex).trimStart();

  if (!before && !after) {
    return `${generatedBlock}\n`;
  }
  if (!after) {
    return `${before}\n\n${generatedBlock}\n`;
  }
  if (!before) {
    return `${generatedBlock}\n\n${after}`;
  }

  return `${before}\n\n${generatedBlock}\n\n${after}`;
}

export function getDefaultBrandPaletteOptions() {
  return [...DEFAULT_BRAND_PALETTES];
}

export function getDefaultNeutralPaletteOptions() {
  return [...DEFAULT_NEUTRAL_PALETTES];
}

export function normalizeContrastMode(value: string | null | undefined): ContrastMode {
  const normalized = value ? value.trim().toLowerCase() : "deterministic";
  if (normalized === "deterministic" || normalized === "dynamic") {
    return normalized;
  }
  throw new Error(`Invalid contrast mode "${value}". Use deterministic or dynamic.`);
}

export async function getAvailablePalettes(refresh = false) {
  const resolved = await resolvePaletteSource(refresh);
  return {
    source: resolved.source,
    names: Object.keys(resolved.palettes).sort(),
  };
}

export async function writePaletteTokens(options: {
  cwd?: string;
  cssPath: string;
  paletteName: string;
  neutralPalette: string;
  contrastMode: ContrastMode;
  refresh?: boolean;
}) {
  const cwd = options.cwd ?? process.cwd();
  const cssFilePath = path.join(cwd, options.cssPath);

  const resolved = await resolvePaletteSource(options.refresh);
  const brand = resolveFamily(resolved.palettes, options.paletteName);
  const neutral = resolveFamily(resolved.palettes, options.neutralPalette);
  resolveFamily(resolved.palettes, "red");
  resolveFamily(resolved.palettes, "green");
  resolveFamily(resolved.palettes, "amber");

  const result: PaletteWriteResult = {
    source: resolved.source,
    paletteName: brand.family,
    neutralPalette: neutral.family,
    contrastMode: options.contrastMode,
  };

  const assignments = resolveTokenThemes(
    resolved.palettes,
    brand.family,
    neutral.family,
    options.contrastMode,
  );
  const generatedBlock = buildTokenBlock(assignments, result);

  const current = (await fs.pathExists(cssFilePath)) ? await fs.readFile(cssFilePath, "utf-8") : "";
  const updated = upsertGeneratedBlock(current, generatedBlock);
  await fs.ensureDir(path.dirname(cssFilePath));
  await fs.writeFile(cssFilePath, updated);

  return result;
}
