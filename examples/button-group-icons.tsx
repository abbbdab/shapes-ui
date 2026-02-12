import { Bold, Italic, Underline } from "lucide-react";

import { Button } from "@/components/ui/button";
import { ButtonGroup } from "@/components/ui/button-group";

export default function ButtonGroupVerticalDemo() {
  return (
    <ButtonGroup>
      <Button variant="outline" size={"icon"}>
        <Bold />
      </Button>
      <Button variant="outline" size={"icon"}>
        <Italic />
      </Button>
      <Button variant="outline" size={"icon"}>
        <Underline />
      </Button>
    </ButtonGroup>
  );
}
