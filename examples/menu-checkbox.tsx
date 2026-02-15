import { useState } from "react";

import { Button } from "@/components/ui/button";
import { Menu, MenuTrigger, MenuPopup, MenuCheckboxItem } from "@/components/ui/menu";

export default function MenuCheckboxDemo() {
  const [showHidden, setShowHidden] = useState(true);
  const [compact, setCompact] = useState(false);

  return (
    <Menu>
      <MenuTrigger>
        <Button variant="outline">Checkbox items</Button>
      </MenuTrigger>
      <MenuPopup>
        <MenuCheckboxItem
          checked={showHidden}
          onCheckedChange={(val) => setShowHidden(Boolean(val))}
        >
          Show hidden files
        </MenuCheckboxItem>
        <MenuCheckboxItem checked={compact} onCheckedChange={(val) => setCompact(Boolean(val))}>
          Compact mode
        </MenuCheckboxItem>
      </MenuPopup>
    </Menu>
  );
}
