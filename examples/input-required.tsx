import { Field, FieldDescription, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";

export default function InputRequiredDemo() {
  return (
    <Field className={"w-md"}>
      <FieldLabel htmlFor="input-required">
        Required Field <span className="text-destructive">*</span>
      </FieldLabel>
      <Input id="input-required" placeholder="This field is required" required />
      <FieldDescription>This field must be filled out.</FieldDescription>
    </Field>
  );
}
