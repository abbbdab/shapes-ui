import { Field, FieldLabel, FieldDescription } from "@/components/ui/field";

export default function FieldCustomControl() {
  return (
    <Field name="color" className="max-w-md">
      <FieldLabel>Favorite Color</FieldLabel>
      <select className="flex h-9 w-full rounded-lg border border-input bg-background px-3 py-2 text-sm transition-colors focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 focus-visible:outline-none">
        <option value="">Select a color</option>
        <option value="red">Red</option>
        <option value="blue">Blue</option>
        <option value="green">Green</option>
        <option value="yellow">Yellow</option>
      </select>
      <FieldDescription>Select your favorite color from the dropdown.</FieldDescription>
    </Field>
  );
}
