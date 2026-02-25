import { Field, FieldLabel } from "@/components/ui/field";
import { Radio, RadioGroup } from "@/components/ui/radio";

export default function RadioDemo() {
  return (
    <RadioGroup>
      <Field className="flex-row items-center *:w-auto">
        <Radio value={"default"} />
        <FieldLabel>Default</FieldLabel>
      </Field>
      <Field className="flex-row items-center *:w-auto">
        <Radio value={"spacious"} />
        <FieldLabel>Spacious</FieldLabel>
      </Field>
      <Field className="flex-row items-center *:w-auto">
        <Radio value={"compact"} />
        <FieldLabel>Compact</FieldLabel>
      </Field>
    </RadioGroup>
  );
}
