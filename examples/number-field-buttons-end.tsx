import {
  NumberField,
  NumberFieldGroup,
  NumberFieldInput,
  NumberFieldDecrement,
  NumberFieldIncrement,
} from "@/components/ui/number-field";

export default function NumberFieldButtonsEndExample() {
  return (
    <NumberField defaultValue={8} className="w-40">
      <NumberFieldGroup>
        <NumberFieldInput />
        {/* align props aren't required — data-align/read-order handled by props in component */}
        <NumberFieldDecrement align="end" />
        <NumberFieldIncrement align="end" />
      </NumberFieldGroup>
    </NumberField>
  );
}
