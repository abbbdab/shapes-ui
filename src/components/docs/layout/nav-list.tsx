import { Link } from "@tanstack/react-router";
import { allComponents } from "content-collections";
import { ComponentProps } from "react";

import { DocsButton } from "@/components/docs/docs-button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { cn } from "@/lib/utils";

function NavSection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="flex min-h-0 flex-1 flex-col gap-2">
      <h4 className=" pl-2 font-heading text-xs font-medium text-muted-foreground">{title}</h4>
      {children}
    </div>
  );
}

export function NavSidebar({ className, ...props }: ComponentProps<"nav">) {
  return (
    <nav className={cn("hidden h-full min-h-0 w-64 flex-col p-4 lg:flex", className)} {...props}>
      <NavSection title="Components">
        <ScrollArea className="h-[98%]">
          <ul>
            {[...allComponents]
              .sort((a, b) => a.title.localeCompare(b.title))
              .map((component) => (
                <li key={component.slug}>
                  <Link to="/components/$slug" params={{ slug: component.slug }}>
                    {({ isActive }) => (
                      <DocsButton
                        variant={"ghost"}
                        size={"sm"}
                        className={cn(
                          "w-fit justify-start rounded-none",
                          isActive ? "bg-muted" : "",
                        )}
                      >
                        {component.title}
                      </DocsButton>
                    )}
                  </Link>
                </li>
              ))}
          </ul>
        </ScrollArea>
      </NavSection>
    </nav>
  );
}
