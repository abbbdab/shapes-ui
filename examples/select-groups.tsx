import {
  Select,
  SelectPopup,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function SelectGroups() {
  const frameworks = [
    { label: "React", value: "react" },
    { label: "Vue", value: "vue" },
    { label: "Angular", value: "angular" },
    { label: "Svelte", value: "svelte" },
    { label: "Ember", value: "ember" },
  ];
  const metaFrameworks = [
    { label: "Tanstack Start", value: "tanstack-start" },
    { label: "Remix", value: "remix" },
    { label: "React Router", value: "react-router" },
    { label: "Next.js", value: "nextjs" },
  ];
  const allItems = [{ label: "Select a framework", value: null }, ...frameworks, ...metaFrameworks];

  return (
    <Select items={allItems}>
      <SelectTrigger className="w-full max-w-48">
        <SelectValue />
      </SelectTrigger>
      <SelectPopup>
        <SelectGroup>
          <SelectLabel>Frameworks</SelectLabel>
          {frameworks.map((item) => (
            <SelectItem key={item.value} value={item.value}>
              {item.label}
            </SelectItem>
          ))}
        </SelectGroup>
        <SelectSeparator />
        <SelectGroup>
          <SelectLabel>Meta Frameworks</SelectLabel>
          {metaFrameworks.map((item) => (
            <SelectItem key={item.value} value={item.value}>
              {item.label}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectPopup>
    </Select>
  );
}
