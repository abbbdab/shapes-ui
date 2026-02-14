"use client";

import { cn } from "@/lib/utils";
import { Meter as MeterPrimitive } from "@base-ui/react/meter";

function Meter({
  label,
  showLabel,
  showValue,
  className,
  ...props
}: MeterPrimitive.Root.Props & {
  showValue?: boolean;
  showLabel?: boolean;
  label?: string;
}) {
  return (
    <MeterPrimitive.Root
      className={cn("grid w-80 grid-cols-2 gap-1", className)}
      {...props}
    >
      {showLabel && label && <MeterLabel>{label}</MeterLabel>}
      {showValue && <MeterValue />}
      <MeterTrack>
        <MeterIndicator />
      </MeterTrack>
    </MeterPrimitive.Root>
  );
}

function MeterLabel({
  className,
  ...props
}: MeterPrimitive.Label.Props) {
  return (
    <MeterPrimitive.Label
      className={cn("text-xs font-bold text-primary", className)}
      {...props}
    />
  );
}

function MeterValue({
  className,
  ...props
}: MeterPrimitive.Value.Props) {
  return (
    <MeterPrimitive.Value
      className={cn("text-right text-xs text-primary", className)}
      {...props}
    />
  );
}

function MeterTrack({
  className,
  ...props
}: MeterPrimitive.Track.Props) {
  return (
    <MeterPrimitive.Track
      className={cn(
        "col-span-2 block h-2 overflow-hidden bg-primary/20",
        className,
      )}
      {...props}
    />
  );
}

function MeterIndicator({
  className,
  ...props
}: MeterPrimitive.Indicator.Props) {
  return (
    <MeterPrimitive.Indicator
      className={cn("block rounded-r-xl bg-primary", className)}
      {...props}
    />
  );
}

export { Meter, MeterLabel, MeterValue, MeterTrack, MeterIndicator };
