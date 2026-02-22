import { ComponentProps } from "react";

import { ScrollArea } from "@/components/ui/scroll-area";
import { cn } from "@/lib/utils";

import { NavSidebar } from "./nav-list";

export function SplitLayout({
  children,
  className,

  ...props
}: ComponentProps<"div">) {
  return (
    <div className={cn("flex h-full min-h-0 w-full", className)} {...props}>
      <NavSidebar />
      <main className="min-w-0 flex-1">
        <ScrollArea className="h-full">
          <div className="min-h-full lg:border-l">{children}</div>
        </ScrollArea>
      </main>
    </div>
  );
}
