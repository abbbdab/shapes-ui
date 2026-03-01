import { ComponentProps, useState } from "react";

import { ScrollArea } from "@/components/ui/scroll-area";
import { cn } from "@/lib/utils";

import { NavSidebar } from "./nav-list";
import { TableOfContent } from "./table-of-content";

export function SplitLayout({ children, className, ...props }: ComponentProps<"div">) {
  const [contentViewport, setContentViewport] = useState<HTMLDivElement | null>(null);

  return (
    <div className={cn("flex h-full min-h-0 w-full border", className)} {...props}>
      <NavSidebar />
      <main className="min-w-0 flex-1 bg-card ">
        <ScrollArea viewportRef={setContentViewport} className="h-full">
          <div className="min-h-full">{children}</div>
        </ScrollArea>
      </main>
      <TableOfContent contentViewport={contentViewport} />
    </div>
  );
}
