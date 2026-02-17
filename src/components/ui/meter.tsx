"use client";

import { Meter as MeterPrimitive } from "@base-ui/react/meter";

import { cn } from "@/lib/utils";

function Meter({ className, ...props }: MeterPrimitive.Root.Props) {
  return <MeterPrimitive.Root className={cn("grid grid-cols-2 gap-1", className)} {...props} />;
}

function MeterLabel({ className, ...props }: MeterPrimitive.Label.Props) {
  return (
    <MeterPrimitive.Label
      className={cn("col-span-1 text-xs font-bold text-primary", className)}
      {...props}
    />
  );
}

function MeterValue({ className, ...props }: MeterPrimitive.Value.Props) {
  return (
    <MeterPrimitive.Value
      className={cn("col-span-1 text-right text-xs text-primary", className)}
      {...props}
    />
  );
}

function MeterTrack({ className, ...props }: MeterPrimitive.Track.Props) {
  return (
    <MeterPrimitive.Track
      className={cn("col-span-2 h-2 w-full overflow-hidden rounded-full bg-primary/20", className)}
      {...props}
    />
  );
}

function MeterIndicator({ className, ...props }: MeterPrimitive.Indicator.Props) {
  return (
    <MeterPrimitive.Indicator
      className={cn("block rounded-full bg-primary", className)}
      {...props}
    />
  );
}

export { Meter, MeterLabel, MeterValue, MeterTrack, MeterIndicator };
