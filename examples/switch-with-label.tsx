import { Field, FieldItem, FieldDescription, FieldLabel } from "@/components/ui/field";
import { Switch } from "@/components/ui/switch";

export default function SwitchDescription() {
  return (
    <Field orientation="horizontal" className="max-w-sm items-start">
      <FieldItem>
        <FieldLabel htmlFor="switch-focus-mode">Share across devices</FieldLabel>
        <FieldDescription>
          Focus is shared across devices, and turns off when you leave the app.
        </FieldDescription>
      </FieldItem>
      <Switch id="switch-focus-mode" />
    </Field>
  );
}
