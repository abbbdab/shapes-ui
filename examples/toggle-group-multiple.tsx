import { Bold, Italic, Underline } from "lucide-react";

import { Toggle, ToggleGroup } from "@/components/ui/toggle";

export default function ToggleGroupMultiple() {
  return (
    <ToggleGroup multiple defaultValue={["bold"]}>
      <Toggle value="bold" aria-label="Bold">
        <Bold />
      </Toggle>
      <Toggle value="italic" aria-label="Italic">
        <Italic />
      </Toggle>
      <Toggle value="underline" aria-label="Underline">
        <Underline />
      </Toggle>
    </ToggleGroup>
  );
}
