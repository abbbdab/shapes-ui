import { Search } from "lucide-react";

import { Toggle } from "@/components/ui/toggle";
import {
  Toolbar,
  ToolbarButton,
  ToolbarInput,
  ToolbarLink,
  ToolbarSeparator,
} from "@/components/ui/toolbar";

export default function ToolbarInputLink() {
  return (
    <Toolbar className="w-full max-w-md justify-start rounded-lg">
      <ToolbarButton
        render={
          <Toggle aria-label="Search" size={"sm"}>
            <Search className="size-4" />
          </Toggle>
        }
      />

      <ToolbarSeparator orientation="vertical" />

      <ToolbarInput aria-label="Search query" placeholder="Search in document" className={"w-72"} />

      <ToolbarLink
        href="#"
        className="ml-auto rounded px-2 py-1 text-xs text-muted-foreground no-underline hover:text-foreground"
      >
        Edited 2m ago
      </ToolbarLink>
    </Toolbar>
  );
}
