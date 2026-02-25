import { Bold, Italic, Underline, List, Quote } from "lucide-react";

import { Toggle } from "@/components/ui/toggle";
import { Toolbar, ToolbarButton, ToolbarGroup, ToolbarSeparator } from "@/components/ui/toolbar";

export default function ToolbarDemo() {
  return (
    <Toolbar className="w-full max-w-md justify-start rounded-lg">
      <ToolbarGroup>
        <ToolbarButton
          render={
            <Toggle aria-label="Bold" size={"sm"}>
              <Bold />
            </Toggle>
          }
        />
        <ToolbarButton
          aria-label="Italic"
          render={
            <Toggle aria-label="Italic" size={"sm"}>
              <Italic />
            </Toggle>
          }
        />

        <ToolbarButton
          render={
            <Toggle aria-label="Underline" size={"sm"}>
              <Underline />
            </Toggle>
          }
        />
      </ToolbarGroup>
      <ToolbarSeparator orientation="vertical" />
      <ToolbarGroup>
        <ToolbarButton
          aria-label="List"
          render={
            <Toggle aria-label="List" size={"sm"}>
              <List className="size-4" />
            </Toggle>
          }
        />

        <ToolbarButton
          aria-label="Quote"
          render={
            <Toggle aria-label="Quote" size={"sm"}>
              <Quote className="size-4" />
            </Toggle>
          }
        />
      </ToolbarGroup>
    </Toolbar>
  );
}
