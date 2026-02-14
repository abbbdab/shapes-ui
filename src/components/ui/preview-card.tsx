"use client";

import { cn } from "@/lib/utils";
import { PreviewCard as PreviewCardPrimitive } from "@base-ui/react/preview-card";

function PreviewCard(props: PreviewCardPrimitive.Root.Props) {
  return <PreviewCardPrimitive.Root {...props} />;
}

function PreviewCardTrigger({
  className,
  ...props
}: PreviewCardPrimitive.Trigger.Props) {
  return (
    <PreviewCardPrimitive.Trigger
      className={cn(
        "cursor-pointer text-accent-foreground underline decoration-1 underline-offset-2",
        className,
      )}
      {...props}
    />
  );
}

function PreviewCardPopup({
  className,
  align = "center",
  side = "bottom",
  sideOffset = 6,
  alignOffset,
  ...props
}: PreviewCardPrimitive.Popup.Props &
  Pick<
    PreviewCardPrimitive.Positioner.Props,
    "align" | "sideOffset" | "side" | "alignOffset"
  >) {
  return (
    <PreviewCardPrimitive.Portal>
      <PreviewCardPrimitive.Positioner
        align={align}
        sideOffset={sideOffset}
        side={side}
        alignOffset={alignOffset}
      >
        <PreviewCardPrimitive.Popup
          className={cn(
            "overflow-hidden border bg-popup p-1 text-sm text-popover-foreground outline-hidden duration-25 data-closed:animate-out data-closed:fade-out-0 data-closed:zoom-out-95 data-open:animate-in data-open:fade-in-0 data-open:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=inline-end]:slide-in-from-left-2 data-[side=inline-start]:slide-in-from-right-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
            className,
          )}
          {...props}
        />
      </PreviewCardPrimitive.Positioner>
    </PreviewCardPrimitive.Portal>
  );
}

export { PreviewCard, PreviewCardTrigger, PreviewCardPopup };
