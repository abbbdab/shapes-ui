import { FileTextIcon, FolderIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Menu,
  MenuTrigger,
  MenuPopup,
  MenuSub,
  MenuSubTrigger,
  MenuSubPopup,
  MenuItem,
} from "@/components/ui/menu";

export default function MenuSubmenuDemo() {
  return (
    <Menu>
      <MenuTrigger render={<Button variant="outline">Submenu</Button>} />

      <MenuPopup>
        <MenuItem>New file</MenuItem>
        <MenuItem>Open…</MenuItem>
        <MenuSub>
          <MenuSubTrigger>
            <FolderIcon />
            Open recent
          </MenuSubTrigger>
          <MenuSubPopup>
            <MenuItem>
              <FileTextIcon />
              project-a.docx
            </MenuItem>
            <MenuItem>
              <FileTextIcon />
              project-b.pdf
            </MenuItem>
          </MenuSubPopup>
        </MenuSub>
        <MenuItem>Save</MenuItem>
      </MenuPopup>
    </Menu>
  );
}
