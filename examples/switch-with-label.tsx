import { Field, FieldItem, FieldDescription, FieldLabel } from "@/components/ui/field";
import { Switch } from "@/components/ui/switch";

export default function SwitchDescription() {
  return (
    <Field className="max-w-sm flex-row items-start justify-between gap-4 *:w-auto">
      <FieldItem className="flex-1">
        <FieldLabel htmlFor="switch-focus-mode">Share across devices</FieldLabel>
        <FieldDescription>
          Focus is shared across devices, and turns off when you leave the app.
        </FieldDescription>
      </FieldItem>
      <Switch id="switch-focus-mode" />
    </Field>
  );
}
