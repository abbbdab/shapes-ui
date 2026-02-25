import { ChevronDown, Type, PencilRuler } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Menu, MenuItem, MenuPopup, MenuSeparator, MenuTrigger } from "@/components/ui/menu";
import { Toggle } from "@/components/ui/toggle";
import { Toolbar, ToolbarButton, ToolbarGroup, ToolbarSeparator } from "@/components/ui/toolbar";

export default function ToolbarMenu() {
  return (
    <Toolbar className="w-full max-w-md justify-start rounded-lg">
      <ToolbarGroup>
        <ToolbarButton
          render={
            <Toggle aria-label="Bold" size={"sm"}>
              B
            </Toggle>
          }
        />
        <ToolbarButton
          render={
            <Toggle aria-label="Italic" size={"sm"}>
              I
            </Toggle>
          }
        />
      </ToolbarGroup>

      <ToolbarSeparator orientation="vertical" className="mx-1 h-5" />

      <Menu>
        <ToolbarButton
          render={<MenuTrigger render={<Button variant="ghost" size="sm" />} />}
          className="h-7 min-w-24 justify-between rounded-md px-2"
        >
          Insert
          <ChevronDown className="size-3.5" />
        </ToolbarButton>
        <MenuPopup>
          <MenuItem>
            <Type />
            Heading
          </MenuItem>
          <MenuItem>
            <PencilRuler />
            Code Block
          </MenuItem>
          <MenuSeparator />
          <MenuItem>Divider</MenuItem>
        </MenuPopup>
      </Menu>
    </Toolbar>
  );
}
