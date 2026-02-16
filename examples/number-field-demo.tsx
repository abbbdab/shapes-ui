import {
  NumberField,
  NumberFieldDecrement,
  NumberFieldGroup,
  NumberFieldIncrement,
  NumberFieldInput,
} from "@/components/ui/number-field";

export default function NumberFieldDemo() {
  return (
    <NumberField defaultValue={21}>
      <NumberFieldGroup>
        <NumberFieldDecrement data-align="start" />
        <NumberFieldInput />
        <NumberFieldIncrement data-align="end" />
      </NumberFieldGroup>
    </NumberField>
  );
}
