import { useState } from "react";

import {
  Autocomplete,
  AutocompleteEmpty,
  AutocompleteItem,
  AutocompleteList,
  AutocompletePopup,
} from "@/components/ui/autocomplete";

const languages = ["TypeScript", "JavaScript", "Rust", "Go", "Python"];

export default function AutocompleteAlign() {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");

  const filtered = languages.filter((item) => item.toLowerCase().includes(value.toLowerCase()));

  return (
    <Autocomplete
      open={open}
      onOpenChange={setOpen}
      value={value}
      onValueChange={setValue}
      placeholder="Search language..."
    >
      <AutocompletePopup align="start" sideOffset={4} className="max-w-64">
        <AutocompleteList>
          {filtered.map((item) => (
            <AutocompleteItem key={item} value={item}>
              {item}
            </AutocompleteItem>
          ))}
          {filtered.length === 0 && <AutocompleteEmpty>No results found</AutocompleteEmpty>}
        </AutocompleteList>
      </AutocompletePopup>
    </Autocomplete>
  );
}
