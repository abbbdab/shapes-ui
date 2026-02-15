"use client";

import { Toolbar as ToolbarPrimitive } from "@base-ui/react";

import { cn } from "@/lib/utils";

function Toolbar({ className, ...props }: ToolbarPrimitive.Root.Props) {
  return (
    <ToolbarPrimitive.Root
      className={cn("flex h-9 items-center justify-evenly gap-1  border bg-muted p-1", className)}
      {...props}
    />
  );
}

function ToolbarButton({ className, ...props }: ToolbarPrimitive.Button.Props) {
  return <ToolbarPrimitive.Button className={cn(className)} {...props} />;
}

function ToolbarLink({ className, ...props }: ToolbarPrimitive.Link.Props) {
  return <ToolbarPrimitive.Link className={cn(className)} {...props} />;
}

function ToolbarInput({ className, ...props }: ToolbarPrimitive.Input.Props) {
  return <ToolbarPrimitive.Input className={cn(className)} {...props} />;
}

function ToolbarGroup({ className, ...props }: ToolbarPrimitive.Group.Props) {
  return <ToolbarPrimitive.Group className={cn(className)} {...props} />;
}

function ToolbarSeparator({ className, ...props }: ToolbarPrimitive.Separator.Props) {
  return (
    <ToolbarPrimitive.Separator
      className={cn(
        "shrink-0 bg-primary/40 data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-full data-[orientation=vertical]:w-px data-[orientation=vertical]:self-stretch",
        className,
      )}
      {...props}
    />
  );
}

export { Toolbar, ToolbarButton, ToolbarLink, ToolbarInput, ToolbarGroup, ToolbarSeparator };
