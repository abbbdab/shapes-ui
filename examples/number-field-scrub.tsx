import { ChevronsLeftRightEllipsis } from "lucide-react";
import * as React from "react";

import {
  NumberField,
  NumberFieldGroup,
  NumberFieldInput,
  NumberFieldIncrement,
  NumberFieldDecrement,
  NumberFieldScrubArea,
  NumberFieldScrubAreaCursor,
} from "@/components/ui/number-field";

export default function NumberFieldScrubExample() {
  const id = React.useId();
  const [value, setValue] = React.useState<number | null>(120);

  return (
    <div className="flex flex-col gap-2">
      <NumberField id={id} value={value} onValueChange={(v) => setValue(v)}>
        <NumberFieldScrubArea>
          <label htmlFor={id} className="text-sm font-medium">
            Amount
          </label>
          <NumberFieldScrubAreaCursor>
            <ChevronsLeftRightEllipsis className="size-4" />
          </NumberFieldScrubAreaCursor>

          <NumberFieldGroup>
            <NumberFieldDecrement data-align="start" />
            <NumberFieldInput />
            <NumberFieldIncrement data-align="end" />
          </NumberFieldGroup>
        </NumberFieldScrubArea>
      </NumberField>
    </div>
  );
}
