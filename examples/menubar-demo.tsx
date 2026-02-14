import { useState } from "react";
import {
  Menubar,
  Menu,
  MenuTrigger,
  MenuPopup,
  MenuItem,
  MenuSeparator,
  MenuCheckboxItem,
} from "@/components/ui/menubar";

export default function MenubarDemo() {
  const [autosave, setAutosave] = useState(true);

  return (
    <Menubar>
      <Menu>
        <MenuTrigger>File</MenuTrigger>
        <MenuPopup>
          <MenuItem>New</MenuItem>
          <MenuItem>Open</MenuItem>
          <MenuSeparator />
          <MenuItem>Exit</MenuItem>
        </MenuPopup>
      </Menu>
      <Menu>
        <MenuTrigger>Edit</MenuTrigger>
        <MenuPopup>
          <MenuItem>Undo</MenuItem>
          <MenuItem>Redo</MenuItem>
          <MenuSeparator />
          <MenuItem>Cut</MenuItem>
          <MenuItem>Copy</MenuItem>
          <MenuItem>Paste</MenuItem>
        </MenuPopup>
      </Menu>
      <Menu>
        <MenuTrigger>View</MenuTrigger>
        <MenuPopup>
          <MenuCheckboxItem
            checked={autosave}
            onCheckedChange={setAutosave}
          >
            Auto Save
          </MenuCheckboxItem>
          <MenuItem>Full Screen</MenuItem>
        </MenuPopup>
      </Menu>
    </Menubar>
  );
}
