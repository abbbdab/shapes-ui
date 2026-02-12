import { useState } from "react";

import { FieldRoot, FieldLabel, FieldControl, FieldDescription } from "@/components/ui/field";

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
    <FieldRoot name="email" validate={validateEmail} validationMode="onChange" className="max-w-md">
      <FieldLabel>Email</FieldLabel>
      <FieldControl
        type="email"
        placeholder="you@example.com"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <FieldDescription>Enter your email address</FieldDescription>
    </FieldRoot>
  );
}
