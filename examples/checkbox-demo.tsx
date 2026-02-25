import { Checkbox } from "@/components/ui/checkbox";
import { Field, FieldLabel } from "@/components/ui/field";

export default function CheckboxDemo() {
  return (
    <Field className="mx-auto flex-row items-center *:w-auto">
      <Checkbox />
      <FieldLabel>Accept terms and conditions</FieldLabel>
    </Field>
  );
}
