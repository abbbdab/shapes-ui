import { BellRingIcon, CreditCardIcon, LogOutIcon, TargetIcon, UserPenIcon } from "lucide-react";

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
} from "@/components/ui/menu";

export default function MenuDemo() {
  return (
    <Menu>
      <MenuTrigger>
        <Button variant="outline">Open Menu</Button>
      </MenuTrigger>
      <MenuPopup>
        <div className="flex items-center justify-between gap-2 p-3">
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
          <MenuLabel>My account</MenuLabel>
          <MenuItem>
            <TargetIcon />
            Set status
          </MenuItem>
          <MenuSeparator />
          <MenuItem>
            <UserPenIcon />
            Profile
          </MenuItem>
          <MenuItem>
            <BellRingIcon />
            Notifications{" "}
            <Badge variant={"info"} className="ml-auto">
              2
            </Badge>
          </MenuItem>
          <MenuItem>
            <CreditCardIcon />
            Subscription settings
          </MenuItem>
        </MenuGroup>
        <MenuSeparator />
        <MenuItem>
          <LogOutIcon />
          Sign out
        </MenuItem>
      </MenuPopup>
    </Menu>
  );
}
