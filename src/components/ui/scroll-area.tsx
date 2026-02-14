"use client";

import { ScrollArea as ScrollAreaPrimitive } from "@base-ui/react/scroll-area";

import { cn } from "@/lib/utils";

function ScrollArea({
  className,
  children,
  ...props
}: ScrollAreaPrimitive.Root.Props & { children?: React.ReactNode }) {
  return (
    <ScrollAreaPrimitive.Root className={cn("relative", className)} {...props}>
      <ScrollAreaPrimitive.Viewport className="h-full w-full">
        <ScrollAreaPrimitive.Content>{children}</ScrollAreaPrimitive.Content>
      </ScrollAreaPrimitive.Viewport>
      <ScrollAreaScrollbar>
        <ScrollAreaThumb />
      </ScrollAreaScrollbar>
    </ScrollAreaPrimitive.Root>
  );
}

function ScrollAreaViewPort({ className, ...props }: ScrollAreaPrimitive.Viewport.Props) {
  return <ScrollAreaPrimitive.Viewport className={cn("h-full w-full", className)} {...props} />;
}

function ScrollAreaContent({ className, ...props }: ScrollAreaPrimitive.Content.Props) {
  return <ScrollAreaPrimitive.Content className={cn("", className)} {...props} />;
}

function ScrollAreaScrollbar({ className, ...props }: ScrollAreaPrimitive.Scrollbar.Props) {
  return (
    <ScrollAreaPrimitive.Scrollbar
      className={cn(
        "pointer-events-none m-2 flex w-1 justify-center rounded bg-muted opacity-0 transition-opacity before:absolute before:h-full before:w-5 before:content-[''] data-hovering:pointer-events-auto data-hovering:opacity-100 data-scrolling:pointer-events-auto data-scrolling:opacity-100 data-scrolling:duration-0",
        className,
      )}
      {...props}
    />
  );
}

function ScrollAreaThumb({ className, ...props }: ScrollAreaPrimitive.Thumb.Props) {
  return (
    <ScrollAreaPrimitive.Thumb
      className={cn("w-full rounded bg-muted-foreground/40", className)}
      {...props}
    />
  );
}

function ScrollAreaCorner({ className, ...props }: ScrollAreaPrimitive.Corner.Props) {
  return <ScrollAreaPrimitive.Corner className={cn(className)} {...props} />;
}

export {
  ScrollArea,
  ScrollAreaViewPort,
  ScrollAreaContent,
  ScrollAreaScrollbar,
  ScrollAreaThumb,
  ScrollAreaCorner,
};
