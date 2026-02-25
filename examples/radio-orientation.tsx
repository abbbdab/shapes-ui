import { Field, FieldLabel } from "@/components/ui/field";
import { Radio, RadioGroup } from "@/components/ui/radio";

export default function RadioOrientationDemo() {
  return (
    <RadioGroup orientation="horizontal">
      <Field className="flex-row items-center *:w-auto">
        <Radio value={"left"} />
        <FieldLabel>Left</FieldLabel>
      </Field>
      <Field className="flex-row items-center *:w-auto">
        <Radio value={"middle"} />
        <FieldLabel>Middle</FieldLabel>
      </Field>
      <Field className="flex-row items-center *:w-auto">
        <Radio value={"right"} />
        <FieldLabel>Right</FieldLabel>
      </Field>
    </RadioGroup>
  );
}
