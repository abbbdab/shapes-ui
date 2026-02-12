import { ChevronDown } from "lucide-react";

import { Button } from "@/components/ui/button";
import { ButtonGroup, ButtonGroupSeparator } from "@/components/ui/button-group";

export default function ButtonGroupVerticalDemo() {
  return (
    <ButtonGroup>
      <Button variant={"outline"}>Save</Button>
      <ButtonGroupSeparator />
      <Button variant="outline">
        <ChevronDown />
      </Button>
    </ButtonGroup>
  );
}
