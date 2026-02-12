"use client";

import { Checkbox } from "@/components/ui/checkbox";
import { Field, FieldDescription, FieldLabel } from "@/components/ui/field";

export default function CheckboxFormDemo() {
  return (
    <form className="max-w-md space-y-4">
      <Field name="marketing" orientation="horizontal">
        <FieldLabel>
          <Checkbox />
          <span className="text-sm">Marketing emails</span>
        </FieldLabel>
        <FieldDescription>Receive emails about new products and features.</FieldDescription>
      </Field>

      <Field name="newsletter" orientation="horizontal">
        <FieldLabel>
          <Checkbox />
          <span className="text-sm">Newsletter</span>
        </FieldLabel>
        <FieldDescription>Get our weekly newsletter with tips and updates.</FieldDescription>
      </Field>

      <Field name="security" orientation="horizontal">
        <FieldLabel>
          <Checkbox defaultChecked />
          <span className="text-sm">Security alerts</span>
        </FieldLabel>
        <FieldDescription>Get notified about account security updates.</FieldDescription>
      </Field>
    </form>
  );
}
