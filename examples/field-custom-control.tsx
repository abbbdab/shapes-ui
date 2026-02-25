import { Field, FieldLabel, FieldDescription } from "@/components/ui/field";
import {
  Select,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectPopup,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function FieldCustomControl() {
  return (
    <Field name="color" className="max-w-md">
      <FieldLabel>Favourite Color</FieldLabel>
      <Select items={colors}>
        <SelectTrigger className="w-full max-w-48">
          <SelectValue />
        </SelectTrigger>
        <SelectPopup>
          <SelectGroup>
            <SelectLabel>Colors</SelectLabel>
            {colors.map((color) => (
              <SelectItem key={color.value} value={color.value}>
                {color.label}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectPopup>
      </Select>
      <FieldDescription>Select your favourite color from the dropdown.</FieldDescription>
    </Field>
  );
}

const colors = [
  { value: "red", label: "Red" },
  { value: "blue", label: "Blue" },
  { value: "green", label: "Green" },
  { value: "yellow", label: "Yellow" },
];
