import { Field, FieldLabel } from "@/components/ui/field";
import { Radio, RadioGroup } from "@/components/ui/radio";

export default function RadioOrientationDemo() {
  return (
    <RadioGroup orientation="horizontal">
      <Field orientation={"horizontal"}>
        <Radio value={"left"} />
        <FieldLabel>Left</FieldLabel>
      </Field>
      <Field orientation={"horizontal"}>
        <Radio value={"middle"} />
        <FieldLabel>Middle</FieldLabel>
      </Field>
      <Field orientation={"horizontal"}>
        <Radio value={"right"} />
        <FieldLabel>Right</FieldLabel>
      </Field>
    </RadioGroup>
  );
}
