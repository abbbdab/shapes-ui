import { useState } from "react";

import { Button } from "@/components/ui/button";
import { ButtonGroup } from "@/components/ui/button-group";
import { Menu, MenuTrigger, MenuPopup, MenuItem } from "@/components/ui/menu";

export default function MenuDemo() {
  const [side, setSide] = useState<"bottom" | "top" | "left" | "right">("bottom");

  return (
    <Menu>
      <MenuTrigger>
        <ButtonGroup>
          <Button variant="outline" onClick={() => setSide("bottom")}>
            Bottom
          </Button>
          <Button variant="outline" onClick={() => setSide("top")}>
            Top
          </Button>
          <Button variant="outline" onClick={() => setSide("left")}>
            Left
          </Button>
          <Button variant="outline" onClick={() => setSide("right")}>
            Right
          </Button>
        </ButtonGroup>
      </MenuTrigger>
      <MenuPopup side={side}>
        <MenuItem>{side.charAt(0).toUpperCase() + side.slice(1)}</MenuItem>
      </MenuPopup>
    </Menu>
  );
}
