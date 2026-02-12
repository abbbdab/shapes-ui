import { FieldRoot, FieldLabel, FieldControl, FieldDescription } from "@/components/ui/field";

export default function FieldDemo() {
  return (
    <FieldRoot name="email" className="max-w-md">
      <FieldLabel>Email</FieldLabel>
      <FieldControl type="email" placeholder="Enter your email" />
      <FieldDescription>We'll never share your email with anyone else.</FieldDescription>
    </FieldRoot>
  );
}
