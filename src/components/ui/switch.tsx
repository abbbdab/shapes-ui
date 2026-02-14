"use client";

import { Switch as SwitchPrimitive } from "@base-ui/react/switch";
import { cn } from "@/lib/utils";

function Switch({
  children,
  className,
  size = "default",
  ...props
}: SwitchPrimitive.Root.Props & {
  size?: "sm" | "default";
}) {
  return (
    <label
      id={props.id}
      htmlFor={props.id}
      className={cn("flex items-center gap-1.5 text-sm", className)}
    >
      <SwitchPrimitive.Root
        data-size={size}
        className={cn(
          "peer group/switch relative inline-flex w-fit shrink-0 items-center border border-transparent transition-all outline-none after:absolute after:-inset-x-3 after:-inset-y-2 focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 aria-invalid:border-destructive aria-invalid:ring-[3px] aria-invalid:ring-destructive/20 data-checked:bg-primary data-disabled:cursor-not-allowed data-disabled:opacity-50 data-unchecked:bg-input data-[size=default]:h-[18.4px] data-[size=default]:w-[32px] data-[size=sm]:h-[14px] data-[size=sm]:w-[24px] dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:data-unchecked:bg-input/80",
          className,
        )}
        {...props}
      >
        <SwitchPrimitive.Thumb className="pointer-events-none block bg-background ring-0 transition-transform group-data-[size=default]/switch:size-4 group-data-[size=sm]/switch:size-3 group-data-[size=default]/switch:data-checked:translate-x-[calc(100%-2px)] group-data-[size=sm]/switch:data-checked:translate-x-[calc(100%-2px)] group-data-[size=default]/switch:data-unchecked:translate-x-0 group-data-[size=sm]/switch:data-unchecked:translate-x-0 dark:data-checked:bg-primary-foreground dark:data-unchecked:bg-foreground" />
      </SwitchPrimitive.Root>
      {children}
    </label>
  );
}

export { Switch };
