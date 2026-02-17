"use client";

import { NumberField as NumberFieldPrimitive } from "@base-ui/react/number-field";
import { MinusIcon, PlusIcon } from "lucide-react";

import { cn } from "@/lib/utils";

import { Input } from "./input";

function NumberFieldScrubArea({ className, ...props }: NumberFieldPrimitive.ScrubArea.Props) {
  return <NumberFieldPrimitive.ScrubArea className={cn("", className)} {...props} />;
}

function NumberFieldScrubAreaCursor({
  className,
  ...props
}: NumberFieldPrimitive.ScrubAreaCursor.Props) {
  return (
    <NumberFieldPrimitive.ScrubAreaCursor className={cn("text-foreground", className)} {...props} />
  );
}

function NumberField({ className, ...props }: NumberFieldPrimitive.Root.Props) {
  return (
    <NumberFieldPrimitive.Root
      data-slot="number-field"
      className={cn("group/number-field flex flex-col gap-1.5", className)}
      {...props}
    />
  );
}

function NumberFieldGroup({ className, ...props }: NumberFieldPrimitive.Group.Props) {
  return (
    <NumberFieldPrimitive.Group
      data-slot="number-field-group"
      className={cn(
        "relative inline-flex h-9 w-full items-stretch overflow-hidden rounded-lg border border-input focus-within:border-ring focus-within:ring-3 focus-within:ring-ring/50 has-[>[data-slot=number-field-decrement]]:*:data-[slot=number-field-input]:rounded-none has-[>[data-slot=number-field-decrement]]:*:data-[slot=number-field-input]:border-0 has-[>[data-slot=number-field-decrement]]:*:data-[slot=number-field-input]:outline-none has-[>[data-slot=number-field-decrement]]:*:data-[slot=number-field-input]:focus:ring-0 has-[>[data-slot=number-field-decrement]]:*:data-[slot=number-field-input]:focus:outline-none",
        "has-[>[data-slot=number-field-decrement][data-align=end]]:*:data-[slot=number-field-decrement]:border-l has-[>[data-slot=number-field-decrement][data-align=start]]:*:data-[slot=number-field-decrement]:border-r has-[>[data-slot=number-field-increment][data-align=end]]:*:data-[slot=number-field-increment]:border-l ",
        className,
      )}
      {...props}
    />
  );
}

function NumberFieldDecrement({
  className,
  align,
  ...props
}: NumberFieldPrimitive.Decrement.Props & { align?: "start" | "end" }) {
  return (
    <NumberFieldPrimitive.Decrement
      data-slot="number-field-decrement"
      data-align={align}
      className={cn(
        "px-2.5 transition-colors hover:bg-muted active:bg-accent disabled:opacity-50",
        className,
      )}
      {...props}
    >
      <MinusIcon className="size-4" />
    </NumberFieldPrimitive.Decrement>
  );
}

function NumberFieldIncrement({
  className,
  align,
  ...props
}: NumberFieldPrimitive.Increment.Props & { align?: "start" | "end" }) {
  return (
    <NumberFieldPrimitive.Increment
      data-slot="number-field-increment"
      data-align={align}
      className={cn(
        "px-2.5 transition-colors hover:bg-muted active:bg-accent disabled:opacity-50",
        className,
      )}
      {...props}
    >
      <PlusIcon className="size-4" />
    </NumberFieldPrimitive.Increment>
  );
}

function NumberFieldInput({ className, ...props }: NumberFieldPrimitive.Input.Props) {
  return (
    <NumberFieldPrimitive.Input
      data-slot="number-field-input"
      className={cn("text-center", className)}
      render={<Input />}
      {...props}
    />
  );
}

export {
  NumberField,
  NumberFieldScrubArea,
  NumberFieldScrubAreaCursor,
  NumberFieldGroup,
  NumberFieldDecrement,
  NumberFieldIncrement,
  NumberFieldInput,
};
