import { useState } from "react";

import {
  Autocomplete,
  AutocompleteEmpty,
  AutocompleteItem,
  AutocompleteList,
  AutocompletePopup,
} from "@/components/ui/autocomplete";

const options = ["Apple", "Banana", "Blueberry", "Cherry", "Orange"];

export default function AutocompleteControlled() {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");

  const filtered = options.filter((item) => item.toLowerCase().includes(value.toLowerCase()));

  return (
    <div className="space-y-3">
      <Autocomplete
        open={open}
        onOpenChange={setOpen}
        value={value}
        onValueChange={setValue}
        placeholder="Select a fruit..."
      >
        <AutocompletePopup>
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
      <p className="text-sm text-muted-foreground">
        Selected value: <span className="font-medium text-foreground">{value || "—"}</span>
      </p>
    </div>
  );
}
