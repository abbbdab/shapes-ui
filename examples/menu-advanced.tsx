import {
  BellRingIcon,
  CreditCardIcon,
  LogOutIcon,
  TargetIcon,
  UserPenIcon,
  FolderIcon,
  FileTextIcon,
} from "lucide-react";
import { useState } from "react";

import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Menu,
  MenuTrigger,
  MenuPopup,
  MenuGroup,
  MenuLabel,
  MenuSeparator,
  MenuItem,
  MenuSub,
  MenuSubTrigger,
  MenuCheckboxItem,
  MenuRadioGroup,
  MenuRadioItem,
  MenuSubPopup,
} from "@/components/ui/menu";

export default function MenuAdvancedDemo() {
  const [showHidden, setShowHidden] = useState(true);
  const [compact, setCompact] = useState(false);
  const [view, setView] = useState<"list" | "grid" | "compact">("list");

  return (
    <Menu>
      <MenuTrigger>
        <Button variant="outline">Advanced menu</Button>
      </MenuTrigger>

      <MenuPopup>
        <div className="flex items-center gap-2 p-3">
          <Avatar size="sm">
            <AvatarFallback>TA</AvatarFallback>
          </Avatar>
          <div className="flex flex-col">
            <p className="text-sm font-medium">Tim Apple</p>
            <p className="text-xs text-muted-foreground">tim.apple@example.com</p>
          </div>
        </div>

        <MenuSeparator />

        <MenuGroup>
          <MenuLabel>View</MenuLabel>
          <MenuRadioGroup value={view} onValueChange={(v) => setView(v as any)}>
            <MenuRadioItem value="list">List</MenuRadioItem>
            <MenuRadioItem value="grid">Grid</MenuRadioItem>
            <MenuRadioItem value="compact">Compact</MenuRadioItem>
          </MenuRadioGroup>
        </MenuGroup>

        <MenuSeparator />

        <MenuGroup>
          <MenuLabel>Files</MenuLabel>
          <MenuItem>
            <TargetIcon />
            New file
          </MenuItem>
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
        </MenuGroup>

        <MenuSeparator />

        <MenuGroup>
          <MenuLabel>Preferences</MenuLabel>
          <MenuCheckboxItem checked={showHidden} onCheckedChange={(v) => setShowHidden(Boolean(v))}>
            Show hidden files
          </MenuCheckboxItem>
          <MenuCheckboxItem checked={compact} onCheckedChange={(v) => setCompact(Boolean(v))}>
            Compact mode
          </MenuCheckboxItem>
        </MenuGroup>

        <MenuSeparator />

        <MenuItem>
          <BellRingIcon />
          Notifications
          <Badge variant="info" className="ml-auto">
            2
          </Badge>
        </MenuItem>

        <MenuItem>
          <CreditCardIcon />
          Billing
        </MenuItem>

        <MenuSeparator />

        <MenuItem>
          <UserPenIcon />
          Profile
        </MenuItem>

        <MenuItem>
          <LogOutIcon />
          Sign out
        </MenuItem>
      </MenuPopup>
    </Menu>
  );
}
