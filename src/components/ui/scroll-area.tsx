"use client";

import { cn } from "@/lib/utils";
import * as ScrollAreaPrimitive from "@base-ui/react/scroll-area";

function ScrollArea({
  className,
  ...props
}: ScrollAreaPrimitive.ScrollAreaRootProps) {
  return (
    <ScrollAreaPrimitive.ScrollArea.Root
      className={cn("relative", className)}
      {...props}
    >
      <ScrollAreaViewPort>
        <ScrollAreaContent>{props.children}</ScrollAreaContent>
      </ScrollAreaViewPort>
      <ScrollAreaScrollbar>
        <ScrollAreaThumb />
      </ScrollAreaScrollbar>
    </ScrollAreaPrimitive.ScrollArea.Root>
  );
}

function ScrollAreaViewPort({
  className,
  ...props
}: ScrollAreaPrimitive.ScrollAreaViewportProps) {
  return (
    <ScrollAreaPrimitive.ScrollArea.Viewport
      className={cn("h-full overflow-auto", className)}
      {...props}
    />
  );
}

function ScrollAreaContent({
  className,
  ...props
}: ScrollAreaPrimitive.ScrollAreaContentProps) {
  return (
    <ScrollAreaPrimitive.ScrollArea.Content
      className={cn("", className)}
      {...props}
    />
  );
}

function ScrollAreaScrollbar({
  className,
  ...props
}: ScrollAreaPrimitive.ScrollAreaScrollbarProps) {
  return (
    <ScrollAreaPrimitive.ScrollArea.Scrollbar
      className={cn(
        "pointer-events-none -mx-2 flex w-1 justify-center rounded bg-primary/15 opacity-0 transition-opacity duration-150 ease-in before:absolute before:content-[''] data-[hovering]:pointer-events-auto data-[hovering]:opacity-100 data-[orientation=vertical]:before:h-full data-[orientation=vertical]:before:w-5 data-[scrolling]:pointer-events-auto data-[scrolling]:opacity-100",
        className,
      )}
      {...props}
    />
  );
}

function ScrollAreaThumb({
  className,
  ...props
}: ScrollAreaPrimitive.ScrollAreaThumbProps) {
  return (
    <ScrollAreaPrimitive.ScrollArea.Thumb
      className={cn("h-full w-full bg-accent-foreground/30", className)}
      {...props}
    />
  );
}

function ScrollAreaCorner({
  className,
  ...props
}: ScrollAreaPrimitive.ScrollAreaCornerProps) {
  return (
    <ScrollAreaPrimitive.ScrollArea.Corner
      className={cn(className)}
      {...props}
    />
  );
}

export {
  ScrollArea,
  ScrollAreaViewPort,
  ScrollAreaContent,
  ScrollAreaScrollbar,
  ScrollAreaThumb,
  ScrollAreaCorner,
};
