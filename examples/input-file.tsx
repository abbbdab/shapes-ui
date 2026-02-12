import { Field, FieldDescription, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";

export default function InputFileDemo() {
  return (
    <Field className={"w-md"}>
      <FieldLabel htmlFor="picture">Picture</FieldLabel>
      <Input id="picture" type="file" />
      <FieldDescription>Select a picture to upload.</FieldDescription>
    </Field>
  );
}
