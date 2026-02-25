import { StarIcon } from "lucide-react";

import { Toggle } from "@/components/ui/toggle";

export default function ToggleIconFill() {
  return (
    <Toggle aria-label="Toggle favourite">
      <StarIcon data-slot="fill" />
      Favourite
    </Toggle>
  );
}
