import {
  FieldRoot,
  FieldLabel,
  FieldControl,
  FieldDescription,
  FieldError,
} from "@/components/ui/field";

export default function FieldComposition() {
  return (
    <FieldRoot name="password" className="max-w-md">
      <FieldLabel>Password</FieldLabel>
      <FieldControl type="password" placeholder="Enter a strong password" />
      <FieldDescription>
        Password must be at least 8 characters long and contain at least one uppercase letter, one
        lowercase letter, and one number.
      </FieldDescription>
      <FieldError
        match={(value) => {
          if (!value) return "Password is required";
          if (value.length < 8) return "Password must be at least 8 characters";
          return null;
        }}
      >
        {(error) => error}
      </FieldError>
    </FieldRoot>
  );
}
