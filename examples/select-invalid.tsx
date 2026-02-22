import { Field, FieldError, FieldLabel } from "@/components/ui/field";
import {
  Select,
  SelectPopup,
  SelectGroup,
  SelectItem,
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

export default function SelectInvalid() {
  return (
    <Field invalid data-invalid className="w-full max-w-48">
      <FieldLabel>Provider</FieldLabel>
      <Select items={items}>
        <SelectTrigger aria-invalid>
          <SelectValue />
        </SelectTrigger>
        <SelectPopup>
          <SelectGroup>
            {items.map((item) => (
              <SelectItem key={item.value} value={item.value}>
                {item.label}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectPopup>
      </Select>
      <FieldError> Please select a provider.</FieldError>
    </Field>
  );
}
