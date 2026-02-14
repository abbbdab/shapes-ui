"use client";

import { DrawerPreview as DrawerPrimitive } from "@base-ui/react/drawer";
import { XIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

function DrawerProvider({ ...props }: DrawerPrimitive.Provider.Props) {
  return <DrawerPrimitive.Provider data-slot="drawer-provider" {...props} />;
}

function DrawerIndentBackground({ className, ...props }: DrawerPrimitive.IndentBackground.Props) {
  return (
    <DrawerPrimitive.IndentBackground
      data-slot="drawer-indent-background"
      className={cn(
        "pointer-events-none fixed inset-0 z-40 bg-black/5 opacity-0 transition-opacity duration-200 data-[active]:opacity-100",
        className,
      )}
      {...props}
    />
  );
}

function DrawerIndent({ className, ...props }: DrawerPrimitive.Indent.Props) {
  return (
    <DrawerPrimitive.Indent
      data-slot="drawer-indent"
      className={cn(
        "relative z-0 transition-transform duration-200 ease-out data-[active]:translate-y-1 data-[active]:scale-[0.98]",
        className,
      )}
      {...props}
    />
  );
}

function Drawer({ ...props }: DrawerPrimitive.Root.Props) {
  return <DrawerPrimitive.Root data-slot="drawer" {...props} />;
}

function DrawerTrigger({ ...props }: DrawerPrimitive.Trigger.Props) {
  return <DrawerPrimitive.Trigger data-slot="drawer-trigger" {...props} />;
}

function DrawerPortal({ ...props }: DrawerPrimitive.Portal.Props) {
  return <DrawerPrimitive.Portal data-slot="drawer-portal" {...props} />;
}

function DrawerClose({ ...props }: DrawerPrimitive.Close.Props) {
  return <DrawerPrimitive.Close data-slot="drawer-close" {...props} />;
}

function DrawerBackdrop({ className, ...props }: DrawerPrimitive.Backdrop.Props) {
  return (
    <DrawerPrimitive.Backdrop
      data-slot="drawer-backdrop"
      className={cn(
        "fixed inset-0 isolate z-50 bg-black/50 opacity-[calc(var(--backdrop-opacity)*(1-var(--drawer-swipe-progress)))] duration-150 [--backdrop-opacity:1] data-closed:animate-out data-closed:fade-out-0 data-open:animate-in data-open:fade-in-0 data-swiping:transition-none supports-backdrop-filter:backdrop-blur-xs",
        className,
      )}
      {...props}
    />
  );
}

function DrawerPopup({
  className,
  children,
  position = "right",
  showCloseButton = true,
  ...props
}: DrawerPrimitive.Popup.Props & {
  position?: "top" | "right" | "bottom" | "left";
  showCloseButton?: boolean;
}) {
  return (
    <DrawerPortal>
      <DrawerBackdrop />
      <DrawerPrimitive.Viewport
        data-slot="drawer-viewport"
        data-position={position}
        className={cn(
          "pointer-events-none fixed inset-0 z-50 flex data-[position=bottom]:items-end data-[position=left]:items-stretch data-[position=left]:justify-start data-[position=right]:items-stretch data-[position=right]:justify-end data-[position=top]:items-start",
        )}
      >
        <DrawerPrimitive.Popup
          data-slot="drawer-popup"
          data-position={position}
          className={cn(
            "pointer-events-auto grid w-full gap-4 overflow-y-auto overscroll-contain bg-background p-6 text-sm text-foreground shadow-lg ring-1 ring-foreground/10 duration-150 outline-none data-closed:animate-out data-closed:fade-out-0 data-open:animate-in data-open:fade-in-0 data-swiping:transition-none data-swiping:select-none data-[position=bottom]:max-h-dvh data-[position=bottom]:w-dvw data-[position=bottom]:translate-y-[calc(var(--drawer-snap-point-offset)+var(--drawer-swipe-movement-y))] data-[position=bottom]:slide-in-from-bottom-10 data-[position=left]:h-dvh data-[position=left]:w-[min(24rem,calc(100vw-1rem))] data-[position=left]:translate-x-(--drawer-swipe-movement-x)  data-[position=left]:slide-in-from-left-10 data-[position=right]:h-dvh data-[position=right]:w-[min(24rem,calc(100vw-1rem))] data-[position=right]:translate-x-(--drawer-swipe-movement-x)  data-[position=right]:slide-in-from-right-10 data-[position=top]:max-h-dvh data-[position=top]:w-dvw data-[position=top]:translate-y-[calc(var(--drawer-snap-point-offset)+var(--drawer-swipe-movement-y))]  data-[position=top]:slide-in-from-top-10",

            className,
          )}
          {...props}
        >
          {children}
          {showCloseButton && (
            <DrawerPrimitive.Close
              data-slot="drawer-close"
              render={
                <Button variant="ghost" className="absolute top-2 right-2" size="icon-sm">
                  <XIcon />
                  <span className="sr-only">Close</span>
                </Button>
              }
            />
          )}
        </DrawerPrimitive.Popup>
      </DrawerPrimitive.Viewport>
    </DrawerPortal>
  );
}

function DrawerHeader({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div data-slot="drawer-header" className={cn("flex flex-col gap-2", className)} {...props} />
  );
}

function DrawerFooter({
  className,
  showCloseButton = false,
  children,
  ...props
}: React.ComponentProps<"div"> & {
  showCloseButton?: boolean;
}) {
  return (
    <div
      data-slot="drawer-footer"
      className={cn(
        "-mx-4 -mb-4 flex flex-col-reverse gap-2 rounded-b-xl border-t p-4 sm:flex-row sm:justify-end",
        className,
      )}
      {...props}
    >
      {children}
      {showCloseButton && (
        <DrawerPrimitive.Close render={<Button variant="outline">Close</Button>} />
      )}
    </div>
  );
}

function DrawerTitle({ className, ...props }: DrawerPrimitive.Title.Props) {
  return (
    <DrawerPrimitive.Title
      data-slot="drawer-title"
      className={cn("text-base leading-none font-medium", className)}
      {...props}
    />
  );
}

function DrawerDescription({ className, ...props }: DrawerPrimitive.Description.Props) {
  return (
    <DrawerPrimitive.Description
      data-slot="drawer-description"
      className={cn(
        "text-sm text-muted-foreground *:[a]:underline *:[a]:underline-offset-3 *:[a]:hover:text-foreground",
        className,
      )}
      {...props}
    />
  );
}

export {
  DrawerProvider,
  DrawerIndentBackground,
  DrawerIndent,
  Drawer,
  DrawerTrigger,
  DrawerPortal,
  DrawerClose,
  DrawerBackdrop,
  DrawerPopup,
  DrawerHeader,
  DrawerFooter,
  DrawerTitle,
  DrawerDescription,
};
