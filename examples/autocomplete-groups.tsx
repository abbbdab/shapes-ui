import { useState } from "react";

import {
  Autocomplete,
  AutocompleteEmpty,
  AutocompleteGroup,
  AutocompleteGroupLabel,
  AutocompleteItem,
  AutocompleteList,
  AutocompletePopup,
  AutocompleteSeparator,
} from "@/components/ui/autocomplete";

const frameworks = ["React", "Vue", "Svelte", "Solid"];
const metaFrameworks = ["Next.js", "Nuxt", "Remix", "Astro"];

export default function AutocompleteGroups() {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");

  const query = value.toLowerCase();
  const filteredFrameworks = frameworks.filter((item) => item.toLowerCase().includes(query));
  const filteredMeta = metaFrameworks.filter((item) => item.toLowerCase().includes(query));
  const hasResults = filteredFrameworks.length > 0 || filteredMeta.length > 0;

  return (
    <Autocomplete
      open={open}
      onOpenChange={setOpen}
      value={value}
      onValueChange={setValue}
      placeholder="Search frameworks..."
    >
      <AutocompletePopup>
        <AutocompleteList>
          {!hasResults && <AutocompleteEmpty>No results found</AutocompleteEmpty>}

          {filteredFrameworks.length > 0 && (
            <AutocompleteGroup>
              <AutocompleteGroupLabel>Frameworks</AutocompleteGroupLabel>
              {filteredFrameworks.map((item) => (
                <AutocompleteItem key={item} value={item}>
                  {item}
                </AutocompleteItem>
              ))}
            </AutocompleteGroup>
          )}

          {filteredFrameworks.length > 0 && filteredMeta.length > 0 && <AutocompleteSeparator />}

          {filteredMeta.length > 0 && (
            <AutocompleteGroup>
              <AutocompleteGroupLabel>Meta Frameworks</AutocompleteGroupLabel>
              {filteredMeta.map((item) => (
                <AutocompleteItem key={item} value={item}>
                  {item}
                </AutocompleteItem>
              ))}
            </AutocompleteGroup>
          )}
        </AutocompleteList>
      </AutocompletePopup>
    </Autocomplete>
  );
}
