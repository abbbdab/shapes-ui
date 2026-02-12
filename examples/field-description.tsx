import { Field, FieldLabel, FieldControl, FieldDescription } from "@/components/ui/field";

export default function FieldDescriptionExample() {
  return (
    <div className="max-w-md space-y-4">
      <Field name="username">
        <FieldLabel>Username</FieldLabel>
        <FieldControl type="text" placeholder="johndoe" />
        <FieldDescription>
          This is your public display name. It can be your real name or a pseudonym.
        </FieldDescription>
      </Field>
      <Field name="bio">
        <FieldLabel>Bio</FieldLabel>
        <FieldControl placeholder="Tell us about yourself..." />
        <FieldDescription>Write a short introduction about yourself.</FieldDescription>
      </Field>
    </div>
  );
}
