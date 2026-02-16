"use client";

import { NavigationMenu as NavigationMenuPrimitive } from "@base-ui/react/navigation-menu";
import { ChevronDownIcon } from "lucide-react";

import { cn } from "@/lib/utils";

function NavigationMenu({
  className,
  delay = 50,
  closeDelay = 50,
  orientation = "horizontal",
  ...props
}: NavigationMenuPrimitive.Root.Props) {
  return (
    <NavigationMenuPrimitive.Root
      data-slot="navigation-menu"
      delay={delay}
      closeDelay={closeDelay}
      orientation={orientation}
      className={cn(
        "group/navigation-menu relative flex max-w-max flex-1 items-center justify-center",
        className,
      )}
      {...props}
    />
  );
}

function NavigationMenuList({ className, ...props }: NavigationMenuPrimitive.List.Props) {
  return (
    <NavigationMenuPrimitive.List
      data-slot="navigation-menu-list"
      className={cn("group flex flex-1 list-none items-center justify-center gap-1", className)}
      {...props}
    />
  );
}

function NavigationMenuItem({ className, ...props }: NavigationMenuPrimitive.Item.Props) {
  return (
    <NavigationMenuPrimitive.Item
      data-slot="navigation-menu-item"
      className={cn("relative", className)}
      {...props}
    />
  );
}

function NavigationMenuTrigger({
  className,
  children,
  ...props
}: NavigationMenuPrimitive.Trigger.Props) {
  return (
    <NavigationMenuPrimitive.Trigger
      data-slot="navigation-menu-trigger"
      className={cn(
        "group/navigation-menu-trigger relative inline-flex h-9 w-max items-center justify-center rounded-lg bg-background px-2.5 py-1.5 text-sm font-medium transition-all outline-none hover:bg-muted focus:bg-muted focus-visible:ring-3 focus-visible:ring-ring/50 focus-visible:outline-1 disabled:pointer-events-none disabled:opacity-50 data-[popup-open]:bg-muted/50 data-[popup-open]:hover:bg-muted",
        className,
      )}
      {...props}
    >
      {children}
      <NavigationMenuPrimitive.Icon
        render={
          <ChevronDownIcon
            className="relative top-px ml-1 size-3 transition-transform duration-300 group-data-[popup-open]/navigation-menu-trigger:rotate-180"
            aria-hidden="true"
          />
        }
      />
    </NavigationMenuPrimitive.Trigger>
  );
}

function NavigationMenuContent({ className, ...props }: NavigationMenuPrimitive.Content.Props) {
  return (
    <NavigationMenuPrimitive.Content
      data-slot="navigation-menu-content"
      className={cn(
        "flex h-full w-auto p-1 transition-[opacity,transform,translate] duration-[350ms] ease-[cubic-bezier(0.22,1,0.36,1)] data-[ending-style]:opacity-0 data-[ending-style]:data-[activation-direction=left]:translate-x-1/2 data-[ending-style]:data-[activation-direction=right]:-translate-x-1/2 **:data-[slot=navigation-menu-link]:focus:ring-0 **:data-[slot=navigation-menu-link]:focus:outline-none data-[starting-style]:opacity-0 data-[starting-style]:data-[activation-direction=left]:-translate-x-1/2 data-[starting-style]:data-[activation-direction=right]:translate-x-1/2",
        className,
      )}
      {...props}
    />
  );
}

function NavigationMenuPopup({
  className,
  sideOffset = 10,
  align = "start",
  collisionPadding = 10,
  side = "bottom",
  anchor,
  children,
  ...props
}: NavigationMenuPrimitive.Popup.Props &
  Pick<
    NavigationMenuPrimitive.Positioner.Props,
    "sideOffset" | "align" | "collisionPadding" | "side" | "anchor"
  >) {
  return (
    <NavigationMenuPrimitive.Portal>
      <NavigationMenuPrimitive.Positioner
        side={side}
        sideOffset={sideOffset}
        align={align}
        collisionPadding={collisionPadding}
        anchor={anchor}
        className={
          "isolate z-50 h-(--positioner-height) w-(--positioner-width) max-w-(--available-width) transition-[top,left,right,bottom] duration-[350ms] ease-[cubic-bezier(0.22,1,0.36,1)] data-[instant]:transition-none"
        }
      >
        <NavigationMenuPrimitive.Popup
          {...props}
          data-slot="navigation-menu-popup"
          className={cn(
            "relative h-(--popup-height) w-(--popup-width) origin-(--transform-origin) overflow-hidden rounded-lg bg-popup text-popup-foreground shadow ring-1 ring-foreground/10 transition-[opacity,transform,width,height,scale,translate] duration-[350ms] ease-[cubic-bezier(0.22,1,0.36,1)] outline-none data-[ending-style]:scale-95 data-[ending-style]:opacity-0 data-[ending-style]:duration-150 data-[ending-style]:ease-in data-[starting-style]:scale-95 data-[starting-style]:opacity-0",
            className,
          )}
        >
          {children || <NavigationMenuViewport />}
        </NavigationMenuPrimitive.Popup>
      </NavigationMenuPrimitive.Positioner>
    </NavigationMenuPrimitive.Portal>
  );
}

function NavigationMenuViewport({ className, ...props }: NavigationMenuPrimitive.Viewport.Props) {
  return (
    <NavigationMenuPrimitive.Viewport
      data-slot="navigation-menu-viewport"
      className={cn("relative size-full overflow-hidden", className)}
      {...props}
    />
  );
}

function NavigationMenuLink({ className, ...props }: NavigationMenuPrimitive.Link.Props) {
  return (
    <NavigationMenuPrimitive.Link
      data-slot="navigation-menu-link"
      className={cn(
        "flex flex-col items-start gap-1 rounded-md p-2 text-sm font-medium transition-all outline-none hover:bg-muted focus:bg-muted focus-visible:ring-3 focus-visible:ring-ring/50 focus-visible:outline-1 data-[active]:bg-muted/50 data-[active]:hover:bg-muted data-[active]:focus:bg-muted [&_svg:not([class*='size-'])]:size-4",
        className,
      )}
      {...props}
    />
  );
}

function NavigationMenuArrow({ className, ...props }: NavigationMenuPrimitive.Arrow.Props) {
  return (
    <NavigationMenuPrimitive.Arrow
      data-slot="navigation-menu-arrow"
      className={cn(
        "transition-transform duration-[350ms] ease-[cubic-bezier(0.22,1,0.36,1)] data-[side=bottom]:top-[-8px] data-[side=left]:right-[-13px] data-[side=left]:rotate-90 data-[side=right]:left-[-13px] data-[side=right]:-rotate-90 data-[side=top]:bottom-[-8px] data-[side=top]:rotate-180",
        className,
      )}
      {...props}
    >
      <svg width="20" height="10" viewBox="0 0 20 10" fill="none">
        <path
          d="M9.66437 2.60207L4.80758 6.97318C4.07308 7.63423 3.11989 8 2.13172 8H0V10H20V8H18.5349C17.5468 8 16.5936 7.63423 15.8591 6.97318L11.0023 2.60207C10.622 2.2598 10.0447 2.25979 9.66437 2.60207Z"
          className="fill-popup"
        />
        <path
          d="M8.99542 1.85876C9.75604 1.17425 10.9106 1.17422 11.6713 1.85878L16.5281 6.22989C17.0789 6.72568 17.7938 7.00001 18.5349 7.00001L15.89 7L11.0023 2.60207C10.622 2.2598 10.0447 2.2598 9.66436 2.60207L4.77734 7L2.13171 7.00001C2.87284 7.00001 3.58774 6.72568 4.13861 6.22989L8.99542 1.85876Z"
          className="fill-foreground/10"
        />
      </svg>
    </NavigationMenuPrimitive.Arrow>
  );
}

export {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuContent,
  NavigationMenuLink,
  NavigationMenuPopup,
  NavigationMenuViewport,
  NavigationMenuArrow,
};
