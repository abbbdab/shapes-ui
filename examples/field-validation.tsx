import { useState } from "react";

import { Field, FieldLabel, FieldControl, FieldDescription } from "@/components/ui/field";

export default function FieldValidation() {
  const [email, setEmail] = useState("");

  const validateEmail = (value: string) => {
    if (!value) return "Email is required";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
      return "Please enter a valid email address";
    }
    return null;
  };

  return (
    <Field
      name="email"
      validate={(val) => validateEmail(val as string)}
      validationMode="onChange"
      className="max-w-lg"
    >
      <FieldLabel>Email</FieldLabel>
      <FieldControl
        type="email"
        placeholder="you@example.com"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <FieldDescription>Enter your email address</FieldDescription>
    </Field>
  );
}
