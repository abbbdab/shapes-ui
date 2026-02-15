import { useState } from "react";

import { Button } from "@/components/ui/button";
import {
  Menu,
  MenuTrigger,
  MenuPopup,
  MenuItem,
  MenuSeparator,
  MenuCheckboxItem,
} from "@/components/ui/menu";

export default function MenuDemo() {
  const [checked, setChecked] = useState(false);

  return (
    <Menu>
      <MenuTrigger asChild>
        <Button variant="outline">Open Menu</Button>
      </MenuTrigger>
      <MenuPopup>
        <MenuItem>New Tab</MenuItem>
        <MenuItem>New Window</MenuItem>
        <MenuSeparator />
        <MenuCheckboxItem checked={checked} onCheckedChange={setChecked}>
          Dark Mode
        </MenuCheckboxItem>
        <MenuSeparator />
        <MenuItem variant="destructive">Close All Tabs</MenuItem>
      </MenuPopup>
    </Menu>
  );
}
