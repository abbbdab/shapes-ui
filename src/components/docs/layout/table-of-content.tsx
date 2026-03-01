import { Link, useRouterState } from "@tanstack/react-router";
import { allComponents, allDocs } from "content-collections";
import { useEffect, useMemo, useState } from "react";

import { ScrollArea } from "@/components/ui/scroll-area";
import type { TocHeading } from "@/lib/docs-headings";
import { cn } from "@/lib/utils";

function getRouteContent(pathname: string): TocHeading[] {
  const [section, slug] = pathname.split("/").filter(Boolean);

  if (!slug) {
    return [];
  }

  if (section === "components") {
    const current = allComponents.find((component) => component.slug === slug) as
      | { toc?: TocHeading[] }
      | undefined;

    return current?.toc ?? [];
  }

  if (section === "docs") {
    const current = allDocs.find((doc) => doc.slug === slug) as { toc?: TocHeading[] } | undefined;

    return current?.toc ?? [];
  }

  return [];
}

type TableOfContentProps = {
  contentViewport: HTMLDivElement | null;
};

export const TableOfContent = ({ contentViewport }: TableOfContentProps) => {
  const pathname = useRouterState({ select: (state) => state.location.pathname });
  const toc = useMemo(() => getRouteContent(pathname), [pathname]);
  const [activeId, setActiveId] = useState<string>(toc[0]?.id ?? "");

  useEffect(() => {
    if (!toc.length) {
      setActiveId("");
      return;
    }

    let frameId = 0;
    let warmupInterval: number | undefined;

    const computeActiveHeading = () => {
      const topOffset = contentViewport ? contentViewport.getBoundingClientRect().top + 96 : 120;

      const renderedHeadings = toc
        .map((heading) => ({
          id: heading.id,
          element: document.getElementById(heading.id),
        }))
        .filter((item) => item.element);

      if (!renderedHeadings.length) {
        return;
      }

      let nextActive = renderedHeadings[0]?.id ?? "";

      for (const item of renderedHeadings) {
        if ((item.element?.getBoundingClientRect().top ?? Number.POSITIVE_INFINITY) <= topOffset) {
          nextActive = item.id;
          continue;
        }

        break;
      }

      setActiveId((prev) => (prev === nextActive ? prev : nextActive));
    };

    const scheduleActiveUpdate = () => {
      if (frameId) {
        cancelAnimationFrame(frameId);
      }

      frameId = requestAnimationFrame(() => {
        computeActiveHeading();
        frameId = 0;
      });
    };

    contentViewport?.addEventListener("scroll", scheduleActiveUpdate, { passive: true });
    window.addEventListener("resize", scheduleActiveUpdate);

    scheduleActiveUpdate();
    warmupInterval = window.setInterval(scheduleActiveUpdate, 80);
    window.setTimeout(() => {
      if (warmupInterval) {
        window.clearInterval(warmupInterval);
      }
    }, 1500);

    return () => {
      if (frameId) {
        cancelAnimationFrame(frameId);
      }

      if (warmupInterval) {
        window.clearInterval(warmupInterval);
      }

      contentViewport?.removeEventListener("scroll", scheduleActiveUpdate);
      window.removeEventListener("resize", scheduleActiveUpdate);
    };
  }, [contentViewport, pathname, toc]);

  return (
    <aside className="hidden h-full min-h-0 w-64 flex-col p-4 xl:flex">
      <h4 className="pl-2 font-heading text-xs font-medium text-muted-foreground">On this page</h4>
      <ScrollArea className="mt-2 h-[98%]">
        <ul className="space-y-1">
          {toc.map((heading) => {
            const isActive = activeId === heading.id;

            return (
              <li key={heading.id}>
                <Link
                  to="."
                  hash={heading.id}
                  style={{ paddingLeft: `${(heading.level - 1) * 10}px` }}
                  className={cn(
                    "block truncate rounded px-2 py-1.5 text-xs transition-colors",
                    isActive
                      ? "bg-muted text-foreground"
                      : "text-muted-foreground hover:bg-muted/50 hover:text-foreground",
                  )}
                >
                  {heading.title}
                </Link>
              </li>
            );
          })}
        </ul>
      </ScrollArea>
    </aside>
  );
};
