"use client";

import { Form as FormPrimitive } from "@base-ui/react/form";

import { cn } from "@/lib/utils";

function Form({ className, ...props }: FormPrimitive.Props) {
  return <FormPrimitive className={cn("", className)} {...props} />;
}

export { Form };
