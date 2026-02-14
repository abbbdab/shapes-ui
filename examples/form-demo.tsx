import { Form } from "@/components/ui/form";
import { Field, FieldLabel, FieldControl, FieldDescription } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function FormDemo() {
  return (
    <Form onSubmit={(e) => e.preventDefault()} className="w-full max-w-sm space-y-6">
      <Field orientation="vertical">
        <FieldLabel>Email</FieldLabel>
        <FieldControl>
          <Input
            type="email"
            placeholder="Enter your email"
            required
          />
        </FieldControl>
        <FieldDescription>We'll never share your email.</FieldDescription>
      </Field>
      <Field orientation="vertical">
        <FieldLabel>Password</FieldLabel>
        <FieldControl>
          <Input
            type="password"
            placeholder="Enter your password"
            required
          />
        </FieldControl>
      </Field>
      <Button type="submit" className="w-full">
        Submit
      </Button>
    </Form>
  );
}
