"use client";

import { Autocomplete as AutocompletePrimitive } from "@base-ui/react/autocomplete";
import { XIcon } from "lucide-react";
import * as React from "react";

import { cn } from "@/lib/utils";

import { Input } from "./input";

function Autocomplete({
  children,
  placeholder,
  showClearButton = true,
  ...props
}: React.ComponentProps<typeof AutocompletePrimitive.Root> &
  Pick<AutocompletePrimitive.Input.Props, "placeholder"> & {
    showClearButton?: boolean;
  }) {
  return (
    <AutocompletePrimitive.Root {...props}>
      <div className="relative flex w-full">
        <AutocompleteInput placeholder={placeholder} />
        {showClearButton && (
          <AutocompleteClear className="absolute top-1/2 right-3 -translate-y-1/2" />
        )}
      </div>
      {children}
    </AutocompletePrimitive.Root>
  );
}

function AutocompleteValue(props: AutocompletePrimitive.Value.Props) {
  return <AutocompletePrimitive.Value {...props} />;
}

function AutocompleteInput({ className, ...props }: AutocompletePrimitive.Input.Props) {
  return (
    <AutocompletePrimitive.Input
      className={cn(className)}
      {...props}
      render={(inputProps) => <Input {...inputProps} />}
    />
  );
}

function AutocompleteTrigger({ className, ...props }: AutocompletePrimitive.Trigger.Props) {
  return <AutocompletePrimitive.Trigger className={cn("w-full", className)} {...props} />;
}

function AutocompleteClear({ className, ...props }: AutocompletePrimitive.Clear.Props) {
  return (
    <AutocompletePrimitive.Clear
      className={cn(
        "z-10 flex size-5 cursor-pointer items-center justify-center rounded-sm text-muted-foreground transition-colors hover:bg-muted hover:text-foreground",
        className,
      )}
      {...props}
    >
      <XIcon className="size-3.5" />
      <span className="sr-only">Clear</span>
    </AutocompletePrimitive.Clear>
  );
}

function AutocompletePopup({
  className,
  align = "center",
  side = "bottom",
  sideOffset = 8,
  alignOffset,
  ...props
}: AutocompletePrimitive.Popup.Props &
  Pick<AutocompletePrimitive.Positioner.Props, "align" | "side" | "sideOffset" | "alignOffset">) {
  return (
    <AutocompletePrimitive.Portal>
      <AutocompletePrimitive.Positioner
        align={align}
        side={side}
        sideOffset={sideOffset}
        alignOffset={alignOffset}
      >
        <AutocompletePrimitive.Popup
          className={cn("w-full rounded-md border bg-popup text-popup-foreground", className)}
          {...props}
        />
      </AutocompletePrimitive.Positioner>
    </AutocompletePrimitive.Portal>
  );
}

function AutocompleteItem({ className, ...props }: AutocompletePrimitive.Item.Props) {
  return (
    <AutocompletePrimitive.Item
      className={cn(
        "flex h-8 items-center rounded px-3 text-sm hover:bg-accent/60 data-highlighted:bg-accent/60 data-highlighted:text-accent-foreground data-selected:bg-accent data-selected:text-accent-foreground",
        className,
      )}
      {...props}
    />
  );
}

function AutocompleteEmpty({ className, children, ...props }: AutocompletePrimitive.Empty.Props) {
  return (
    <AutocompletePrimitive.Empty
      className={cn("text-center text-sm text-muted-foreground", className)}
      {...props}
    >
      <div className={"flex items-center justify-center py-4"}>{children}</div>
    </AutocompletePrimitive.Empty>
  );
}

function AutocompleteList({ className, ...props }: AutocompletePrimitive.List.Props) {
  return (
    <AutocompletePrimitive.List
      className={cn("max-h-60 overflow-x-hidden overflow-y-auto p-1", className)}
      {...props}
    />
  );
}

function AutocompleteGroup({ className, ...props }: AutocompletePrimitive.Group.Props) {
  return (
    <AutocompletePrimitive.Group className={cn("overflow-hidden p-1", className)} {...props} />
  );
}

function AutocompleteGroupLabel({ className, ...props }: AutocompletePrimitive.GroupLabel.Props) {
  return (
    <AutocompletePrimitive.GroupLabel
      className={cn("px-3 py-1.5 text-xs font-semibold text-muted-foreground", className)}
      {...props}
    />
  );
}

function AutocompleteSeparator({ className, ...props }: AutocompletePrimitive.Separator.Props) {
  return (
    <AutocompletePrimitive.Separator
      className={cn("-mx-1 my-1 h-px bg-muted", className)}
      {...props}
    />
  );
}

export {
  Autocomplete,
  AutocompleteValue,
  AutocompleteInput,
  AutocompleteTrigger,
  AutocompleteClear,
  AutocompletePopup,
  AutocompleteItem,
  AutocompleteEmpty,
  AutocompleteList,
  AutocompleteGroup,
  AutocompleteGroupLabel,
  AutocompleteSeparator,
};
