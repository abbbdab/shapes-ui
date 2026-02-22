import {
  Select,
  SelectPopup,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const items = [
  { label: "Select a provider", value: null },
  { label: "Google Cloud", value: "google-cloud" },
  { label: "Amazon Web Services", value: "aws" },
  { label: "Microsoft Azure", value: "azure" },
  { label: "IBM Cloud", value: "ibm-cloud" },
  { label: "Oracle Cloud", value: "oracle-cloud" },
];

export default function SelectDisabled() {
  return (
    <Select items={items} disabled>
      <SelectTrigger className="w-full max-w-48">
        <SelectValue />
      </SelectTrigger>
      <SelectPopup>
        <SelectGroup>
          <SelectLabel>Cloud Providers</SelectLabel>
          {items.map((item) => (
            <SelectItem key={item.value} value={item.value}>
              {item.label}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectPopup>
    </Select>
  );
}
