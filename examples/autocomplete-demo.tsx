import { useState } from "react";

import {
  Autocomplete,
  AutocompleteInput,
  AutocompletePopup,
  AutocompleteList,
  AutocompleteItem,
  AutocompleteEmpty,
} from "@/components/ui/autocomplete";

const fruits = ["Apple", "Banana", "Blueberry", "Carrot", "Cherry"];

export default function AutocompleteDemo() {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");

  return (
    <Autocomplete open={open} onOpenChange={setOpen} value={value} onValueChange={setValue}>
      <AutocompleteInput placeholder="Select a fruit..." />
      <AutocompletePopup>
        <AutocompleteList>
          {fruits
            .filter((fruit) => fruit.toLowerCase().includes(value.toLowerCase()))
            .map((fruit) => (
              <AutocompleteItem key={fruit} value={fruit}>
                {fruit}
              </AutocompleteItem>
            ))}
          {value && !fruits.some((f) => f.toLowerCase().includes(value.toLowerCase())) && (
            <AutocompleteEmpty>No results found</AutocompleteEmpty>
          )}
        </AutocompleteList>
      </AutocompletePopup>
    </Autocomplete>
  );
}
