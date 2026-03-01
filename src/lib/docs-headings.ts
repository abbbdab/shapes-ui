export type TocHeading = {
  id: string;
  title: string;
  level: number;
};

export function slugifyHeading(value: string) {
  return value
    .trim()
    .toLowerCase()
    .replace(/`/g, "")
    .replace(/\[(.*?)\]\((.*?)\)/g, "$1")
    .replace(/<[^>]+>/g, "")
    .replace(/&[a-z0-9#]+;/gi, "")
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "");
}

function sanitizeHeadingTitle(value: string) {
  return value
    .replace(/\s+#+\s*$/, "")
    .replace(/`/g, "")
    .replace(/\[(.*?)\]\((.*?)\)/g, "$1")
    .replace(/[*_~]/g, "")
    .replace(/<[^>]+>/g, "")
    .replace(/&[a-z0-9#]+;/gi, "")
    .trim();
}

export function extractHeadingsFromMarkdown(content: string): TocHeading[] {
  const headings: TocHeading[] = [];
  const lines = content.split("\n");
  let inCodeFence = false;

  for (const rawLine of lines) {
    const line = rawLine.trim();

    if (line.startsWith("```")) {
      inCodeFence = !inCodeFence;
      continue;
    }

    if (inCodeFence) {
      continue;
    }

    const match = line.match(/^(#{1,6})\s+(.+)$/);

    if (!match) {
      continue;
    }

    const level = match[1]?.length ?? 0;
    const title = sanitizeHeadingTitle(match[2] ?? "");

    if (!title) {
      continue;
    }

    const id = slugifyHeading(title);

    if (!id) {
      continue;
    }

    headings.push({ id, title, level });
  }

  return headings;
}
