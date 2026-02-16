import { FolderIcon, FileTextIcon, FileCode2Icon } from "lucide-react";
import { useState } from "react";

import {
  Menubar,
  Menu,
  MenuTrigger,
  MenuPopup,
  MenuItem,
  MenuSeparator,
  MenuCheckboxItem,
  MenuShortcut,
  MenuSub,
  MenuSubPopup,
  MenuSubTrigger,
} from "@/components/ui/menubar";

export default function MenubarDemo() {
  const [autosave, setAutosave] = useState(true);

  return (
    <Menubar>
      <Menu>
        <MenuTrigger>File</MenuTrigger>
        <MenuPopup>
          <MenuItem>
            New <MenuShortcut>⌘N</MenuShortcut>
          </MenuItem>
          <MenuItem>
            Open <MenuShortcut>⌘O</MenuShortcut>{" "}
          </MenuItem>
          <MenuSeparator />
          <MenuItem>
            Exit <MenuShortcut>⌘Q</MenuShortcut>
          </MenuItem>
        </MenuPopup>
      </Menu>
      <Menu>
        <MenuTrigger>Edit</MenuTrigger>
        <MenuPopup>
          <MenuItem>
            Undo <MenuShortcut>⌘N</MenuShortcut>
          </MenuItem>
          <MenuItem>
            Redo <MenuShortcut>⇧⌘R</MenuShortcut>
          </MenuItem>
          <MenuSeparator />
          <MenuItem>
            Cut <MenuShortcut>⌘X</MenuShortcut>
          </MenuItem>
          <MenuItem>
            Copy <MenuShortcut>⌘C</MenuShortcut>
          </MenuItem>
          <MenuItem>
            Paste <MenuShortcut>⌘V</MenuShortcut>
          </MenuItem>
          <MenuSeparator />
          <MenuSub>
            <MenuSubTrigger>
              <FolderIcon />
              Open recent
            </MenuSubTrigger>
            <MenuSubPopup>
              <MenuItem>
                <FileCode2Icon />
                button.tsx
              </MenuItem>
              <MenuItem>
                <FileCode2Icon />
                build-script.ts
              </MenuItem>
              <MenuItem>
                <FileTextIcon />
                feature-spec.md
              </MenuItem>
            </MenuSubPopup>
          </MenuSub>
        </MenuPopup>
      </Menu>
      <Menu>
        <MenuTrigger>View</MenuTrigger>
        <MenuPopup>
          <MenuCheckboxItem checked={autosave} onCheckedChange={setAutosave}>
            Auto Save
          </MenuCheckboxItem>
          <MenuItem>Full Screen</MenuItem>
        </MenuPopup>
      </Menu>
    </Menubar>
  );
}
