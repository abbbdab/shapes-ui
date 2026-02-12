import { Checkbox } from "@/components/ui/checkbox";
import { Field, FieldLabel } from "@/components/ui/field";

export default function CheckboxDemo() {
  return (
    <Field orientation={"horizontal"} className={"mx-auto"}>
      <Checkbox />
      <FieldLabel>Accept terms and conditions</FieldLabel>
    </Field>
  );
}
