import { useState } from "react";

import {
  Autocomplete,
  AutocompleteEmpty,
  AutocompleteItem,
  AutocompleteList,
  AutocompletePopup,
} from "@/components/ui/autocomplete";

const tags = ["Design", "Frontend", "Backend", "DevOps", "Testing"];

export default function AutocompleteNoClear() {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");

  const filtered = tags.filter((item) => item.toLowerCase().includes(value.toLowerCase()));

  return (
    <Autocomplete
      open={open}
      onOpenChange={setOpen}
      value={value}
      onValueChange={setValue}
      placeholder="Pick a tag..."
      showClearButton={false}
    >
      <AutocompletePopup>
        <AutocompleteList>
          {filtered.map((item) => (
            <AutocompleteItem key={item} value={item}>
              {item}
            </AutocompleteItem>
          ))}
          {filtered.length === 0 && <AutocompleteEmpty>No tags found</AutocompleteEmpty>}
        </AutocompleteList>
      </AutocompletePopup>
    </Autocomplete>
  );
}
