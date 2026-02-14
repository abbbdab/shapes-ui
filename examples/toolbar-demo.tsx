import { Toolbar, ToolbarButton, ToolbarGroup, ToolbarSeparator } from "@/components/ui/toolbar";
import { Bold, Italic, Underline, List, Quote } from "lucide-react";

export const toolbarDemo = () => {
  return (
    <Toolbar>
      <ToolbarGroup>
        <ToolbarButton aria-label="Bold">
          <Bold className="size-4" />
        </ToolbarButton>
        <ToolbarButton aria-label="Italic">
          <Italic className="size-4" />
        </ToolbarButton>
        <ToolbarButton aria-label="Underline">
          <Underline className="size-4" />
        </ToolbarButton>
      </ToolbarGroup>

      <ToolbarSeparator />

      <ToolbarGroup>
        <ToolbarButton aria-label="List">
          <List className="size-4" />
        </ToolbarButton>
        <ToolbarButton aria-label="Quote">
          <Quote className="size-4" />
        </ToolbarButton>
      </ToolbarGroup>
    </Toolbar>
  );
};
