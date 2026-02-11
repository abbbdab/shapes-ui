import { ComponentProps } from "react";

import { cn } from "@/lib/utils";

import { NavSidebar } from "./nav-list";

export function SplitLayout({
  children,
  className,

  ...props
}: ComponentProps<"div">) {
  return (
    <div className={cn("flex h-full w-full", className)} {...props}>
      <NavSidebar />
      <main className="min-w-0 flex-1 overflow-auto">
        <div className="min-h-full lg:border-l">{children}</div>
      </main>
    </div>
  );
}
