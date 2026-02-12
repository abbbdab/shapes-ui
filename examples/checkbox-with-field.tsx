"use client";

import { useState } from "react";

import { Checkbox } from "@/components/ui/checkbox";
import { Field, FieldDescription, FieldError, FieldLabel } from "@/components/ui/field";

export default function CheckboxWithFieldDemo() {
  const [agreed, setAgreed] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="flex flex-col gap-4">
      <Field name="terms" invalid={submitted && !agreed} className="max-w-md">
        <Checkbox checked={agreed} onCheckedChange={setAgreed} />
        <FieldLabel>
          <span className="text-sm">I agree to the terms and conditions</span>
        </FieldLabel>
        <FieldDescription>You must agree to our terms and conditions to continue.</FieldDescription>
        <FieldError>Please accept the terms and conditions.</FieldError>
      </Field>
      <button
        onClick={() => setSubmitted(true)}
        className="rounded-lg border px-4 py-2 text-sm hover:bg-muted"
      >
        Submit
      </button>
    </div>
  );
}
