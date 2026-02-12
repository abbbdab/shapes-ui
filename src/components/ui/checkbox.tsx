"use client";

import { Checkbox as CheckboxPrimitive } from "@base-ui/react/checkbox";
import { CheckIcon, MinusIcon } from "lucide-react";

import { cn } from "@/lib/utils";

function Checkbox({ className, ...props }: CheckboxPrimitive.Root.Props) {
  return (
    <CheckboxPrimitive.Root
      data-slot="checkbox"
      className={cn(
        "peer inline-flex size-4 max-w-4 shrink-0 items-center justify-center rounded border border-input bg-background transition-colors group-data-invalid/field:border-destructive focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 focus-visible:outline-none group-data-invalid/field:focus-visible:border-destructive group-data-invalid/field:focus-visible:ring-destructive/20 disabled:cursor-not-allowed disabled:opacity-50 data-checked:border-primary data-checked:bg-primary data-checked:text-primary-foreground data-indeterminate:border-primary data-indeterminate:bg-primary data-indeterminate:text-primary-foreground dark:group-data-invalid/field:border-destructive/50 dark:group-data-invalid/field:focus-visible:ring-destructive/40",
        className,
      )}
      {...props}
    >
      <CheckboxPrimitive.Indicator
        data-slot="checkbox-indicator"
        className={cn(
          "group/indicator flex items-center justify-center text-current opacity-0 transition-opacity data-checked:opacity-100 data-indeterminate:opacity-100",
          className,
        )}
        {...props}
      >
        <CheckIcon className="size-3.5 group-data-indeterminate/indicator:hidden" />
        <MinusIcon className="hidden size-3.5 group-data-indeterminate/indicator:block" />
      </CheckboxPrimitive.Indicator>
    </CheckboxPrimitive.Root>
  );
}

export { Checkbox };
