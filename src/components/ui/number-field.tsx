"use client";

import { NumberField as NumberFieldPrimitive } from "@base-ui/react/number-field";
import { ChevronsLeftRightEllipsis, MinusIcon, PlusIcon } from "lucide-react";

import { cn } from "@/lib/utils";

function NumberField({
  label,
  hasScrubber = false,
  className,
  ...props
}: NumberFieldPrimitive.Root.Props & {
  label?: string;
  hasScrubber?: boolean;
}) {
  return (
    <NumberFieldPrimitive.Root
      className={cn("flex w-fit flex-col bg-transparent text-foreground", className)}
      {...props}
    >
      {hasScrubber && (
        <NumberFieldScrubArea>
          {label && (
            <label htmlFor={props.id} className="text-sm font-medium">
              {label}
            </label>
          )}
          <NumberFieldScrubAreaCursor>
            <ChevronsLeftRightEllipsis className="size-4" />
          </NumberFieldScrubAreaCursor>
        </NumberFieldScrubArea>
      )}
      <NumberFieldGroup>
        <NumberFieldDecrement />
        <NumberFieldInput />
        <NumberFieldIncrement />
      </NumberFieldGroup>
    </NumberFieldPrimitive.Root>
  );
}

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

function NumberFieldGroup({ className, ...props }: NumberFieldPrimitive.Group.Props) {
  return (
    <NumberFieldPrimitive.Group
      className={cn("flex overflow-hidden border bg-transparent", className)}
      {...props}
    />
  );
}

function NumberFieldDecrement({ className, ...props }: NumberFieldPrimitive.Decrement.Props) {
  return (
    <NumberFieldPrimitive.Decrement
      className={cn(
        "flex size-9 items-center justify-center rounded-l-lg border-r hover:bg-accent",
        className,
      )}
      {...props}
    >
      <MinusIcon className="inline-flex size-4" />
    </NumberFieldPrimitive.Decrement>
  );
}

function NumberFieldIncrement({ className, ...props }: NumberFieldPrimitive.Increment.Props) {
  return (
    <NumberFieldPrimitive.Increment
      className={cn("flex size-9 items-center justify-center border-l hover:bg-accent", className)}
      {...props}
    >
      <PlusIcon className="inline-flex size-4" />
    </NumberFieldPrimitive.Increment>
  );
}

function NumberFieldInput({ className, ...props }: NumberFieldPrimitive.Input.Props) {
  return (
    <NumberFieldPrimitive.Input
      className={cn(
        "h-9 rounded-none text-center text-sm ring-accent outline-0 data-scrubbing:border-0 data-scrubbing:outline-0",
        className,
      )}
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
