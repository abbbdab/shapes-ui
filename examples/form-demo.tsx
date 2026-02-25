import { Button } from "@/components/ui/button";
import { Field, FieldLabel, FieldControl, FieldDescription } from "@/components/ui/field";
import { Form } from "@/components/ui/form";

export default function FormDemo() {
  return (
    <Form onFormSubmit={(event) => event.preventDefault()} className="w-full max-w-sm space-y-6">
      <Field>
        <FieldLabel>Email</FieldLabel>
        <FieldControl type="email" placeholder="Enter your email" required />
        <FieldDescription>We'll never share your email.</FieldDescription>
      </Field>
      <Field>
        <FieldLabel>Password</FieldLabel>
        <FieldControl type="password" placeholder="Enter your password" required />
      </Field>
      <Button type="submit" className="w-full">
        Submit
      </Button>
    </Form>
  );
}
