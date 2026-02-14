"use client";

import { cn } from "@/lib/utils";
import { Radio as RadioPrimitive } from "@base-ui/react/radio";
import { RadioGroup as RadioGroupPrimitive } from "@base-ui/react/radio-group";
import { CircleIcon } from "lucide-react";

function Radio({
  children,
  className,
  ...props
}: RadioPrimitive.Root.Props) {
  return (
    <label
      className={cn(
        "group flex items-center gap-2 text-sm text-foreground",
        className,
      )}
      htmlFor={props.id}
    >
      <RadioPrimitive.Root
        className={
          "flex size-4 items-center justify-center border border-input bg-transparent outline outline-input transition duration-50 ease-in group-hover:bg-accent/80"
        }
        {...props}
      >
        <RadioPrimitive.Indicator
          className={
            "flex items-center justify-center data-checked:bg-primary"
          }
        >
          <CircleIcon className="size-2 bg-primary" />
        </RadioPrimitive.Indicator>
      </RadioPrimitive.Root>
      {children}
    </label>
  );
}

function RadioGroup({
  className,
  ...props
}: RadioGroupPrimitive.Props) {
  return (
    <RadioGroupPrimitive
      className={cn("flex flex-col gap-1", className)}
      {...props}
    />
  );
}

export { Radio, RadioGroup };
