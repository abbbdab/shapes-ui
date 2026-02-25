import { AlignCenter, AlignLeft, AlignRight } from "lucide-react";

import { Toggle, ToggleGroup } from "@/components/ui/toggle";

export default function ToggleGroupDemo() {
  return (
    <ToggleGroup defaultValue={["left"]}>
      <Toggle value="left" aria-label="Align left" size="sm">
        <AlignLeft />
      </Toggle>
      <Toggle value="center" aria-label="Align center" size="sm">
        <AlignCenter />
      </Toggle>
      <Toggle value="right" aria-label="Align right" size="sm">
        <AlignRight />
      </Toggle>
    </ToggleGroup>
  );
}
