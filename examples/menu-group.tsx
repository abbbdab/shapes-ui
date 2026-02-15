import { UserIcon, SettingsIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Menu,
  MenuTrigger,
  MenuPopup,
  MenuGroup,
  MenuLabel,
  MenuItem,
  MenuSeparator,
} from "@/components/ui/menu";

export default function MenuGroupDemo() {
  return (
    <Menu>
      <MenuTrigger>
        <Button variant="outline">Group menu</Button>
      </MenuTrigger>
      <MenuPopup>
        <MenuGroup>
          <MenuLabel>Account</MenuLabel>
          <MenuItem>
            <UserIcon />
            Profile
          </MenuItem>
          <MenuItem>
            <SettingsIcon />
            Settings
          </MenuItem>
        </MenuGroup>
        <MenuSeparator />
        <MenuGroup>
          <MenuLabel>Actions</MenuLabel>
          <MenuItem>Export</MenuItem>
          <MenuItem>Duplicate</MenuItem>
        </MenuGroup>
      </MenuPopup>
    </Menu>
  );
}
