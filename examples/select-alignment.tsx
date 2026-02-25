import React from "react";

import { Checkbox } from "@/components/ui/checkbox";
import { Field, FieldLabel } from "@/components/ui/field";
import { Fieldset } from "@/components/ui/fieldset";
import {
  Select,
  SelectGroup,
  SelectItem,
  SelectPopup,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const items = [
  { label: "Select a framework", value: null },
  { label: "React", value: "react" },
  { label: "Vue", value: "vue" },
  { label: "Angular", value: "angular" },
  { label: "Svelte", value: "svelte" },
  { label: "Ember", value: "ember" },
];

export default function SelectAlignItem() {
  const [alignItemWithTrigger, setAlignItemWithTrigger] = React.useState(true);

  return (
    <Fieldset className="w-full max-w-xs">
      <Field name="alignment-trigger" className="flex-row items-center *:w-auto">
        <Checkbox checked={alignItemWithTrigger} onCheckedChange={setAlignItemWithTrigger} />
        <FieldLabel>Toggle to align the item with the trigger.</FieldLabel>
      </Field>
      <Field>
        <Select items={items} defaultValue={"react"}>
          <SelectTrigger>
            <SelectValue />
          </SelectTrigger>
          <SelectPopup alignItemWithTrigger={alignItemWithTrigger}>
            <SelectGroup>
              {items.map((item) => (
                <SelectItem key={item.value} value={item.value}>
                  {item.label}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectPopup>
        </Select>
      </Field>
    </Fieldset>
  );
}
