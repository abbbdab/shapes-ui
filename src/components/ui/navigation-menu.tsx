"use client";

import { NavigationMenu as NavigationMenuPrimitive } from "@base-ui/react/navigation-menu";
import { ChevronDownIcon } from "lucide-react";
import type React from "react";

import { cn } from "@/lib/utils";

function NavigationMenu(props: NavigationMenuPrimitive.Root.Props) {
  return <NavigationMenuPrimitive.Root {...props} />;
}

function NavigationMenuList({
  className,
  ...props
}: React.ComponentProps<typeof NavigationMenuPrimitive.List>) {
  return (
    <NavigationMenuPrimitive.List
      className={cn("flex items-center gap-0.5", className)}
      {...props}
    />
  );
}

function NavigationMenuItem({
  className,
  ...props
}: React.ComponentProps<typeof NavigationMenuPrimitive.Item>) {
  return <NavigationMenuPrimitive.Item className={cn(className)} {...props} />;
}

function NavigationMenuTrigger({
  className,
  children,
  ...props
}: NavigationMenuPrimitive.Trigger.Props) {
  return (
    <NavigationMenuPrimitive.Trigger
      className={cn("group h-full px-3 py-1.5 text-sm font-medium hover:bg-accent/60", className)}
      {...props}
    >
      {children}
      <ChevronDownIcon className="ml-1 inline-block size-3 transition-all ease-in group-data-popup-open:rotate-180" />
    </NavigationMenuPrimitive.Trigger>
  );
}

function NavigationMenuContent(props: NavigationMenuPrimitive.Content.Props) {
  return <NavigationMenuPrimitive.Content {...props} />;
}

function NavigationMenuLink(props: NavigationMenuPrimitive.Link.Props) {
  return <NavigationMenuPrimitive.Link {...props} />;
}

function NavigationMenuPopup({
  align = "start",
  alignOffset,
  side = "bottom",
  sideOffset = 8,
  className,
  renderViewport = true,
  children,
  ...props
}: NavigationMenuPrimitive.Popup.Props &
  Pick<
    NavigationMenuPrimitive.Positioner.Props,
    "sideOffset" | "alignOffset" | "align" | "side"
  > & {
    renderViewport?: boolean;
  }) {
  return (
    <NavigationMenuPrimitive.Portal keepMounted>
      <NavigationMenuPrimitive.Positioner
        align={align}
        alignOffset={alignOffset}
        side={side}
        sideOffset={sideOffset}
      >
        <NavigationMenuPrimitive.Popup
          className={cn("bg-popup p-2 shadow outline outline-border", className)}
          {...props}
        >
          {children}
          {renderViewport && <NavigationMenuViewPort />}
        </NavigationMenuPrimitive.Popup>
      </NavigationMenuPrimitive.Positioner>
    </NavigationMenuPrimitive.Portal>
  );
}

function NavigationMenuViewPort(props: NavigationMenuPrimitive.Viewport.Props) {
  return <NavigationMenuPrimitive.Viewport {...props} />;
}

export {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuContent,
  NavigationMenuLink,
  NavigationMenuPopup,
  NavigationMenuViewPort,
};
