import { useState } from "react";

import { Button } from "@/components/ui/button";
import { Menu, MenuTrigger, MenuPopup, MenuRadioGroup, MenuRadioItem } from "@/components/ui/menu";

export default function MenuRadioDemo() {
  const [view, setView] = useState<"list" | "grid" | "compact">("list");

  return (
    <Menu>
      <MenuTrigger>
        <Button variant="outline">Radio items</Button>
      </MenuTrigger>
      <MenuPopup>
        <MenuRadioGroup value={view} onValueChange={(v) => setView(v as any)}>
          <MenuRadioItem value="list">List view</MenuRadioItem>
          <MenuRadioItem value="grid">Grid view</MenuRadioItem>
          <MenuRadioItem value="compact">Compact</MenuRadioItem>
        </MenuRadioGroup>
      </MenuPopup>
    </Menu>
  );
}
