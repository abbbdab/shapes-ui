"use client";

import { Progress as ProgressPrimitive } from "@base-ui/react/progress";

import { cn } from "@/lib/utils";

function Progress({
  label,
  showValue,
  className,
  ...props
}: ProgressPrimitive.Root.Props & {
  label?: string;
  showValue?: boolean;
}) {
  return (
    <ProgressPrimitive.Root className={cn("grid grid-cols-2 gap-2", className)} {...props}>
      {label && <ProgressLabel>{label}</ProgressLabel>}
      {showValue && <ProgressValue />}
      <ProgressTrack>
        <ProgressIndicator />
      </ProgressTrack>
    </ProgressPrimitive.Root>
  );
}

function ProgressLabel({ className, ...props }: ProgressPrimitive.Label.Props) {
  return (
    <ProgressPrimitive.Label
      className={cn("text-sm font-medium text-foreground", className)}
      {...props}
    />
  );
}

function ProgressValue({ className, ...props }: ProgressPrimitive.Value.Props) {
  return (
    <ProgressPrimitive.Value
      className={cn("text-right text-sm text-foreground", className)}
      {...props}
    />
  );
}

function ProgressTrack({ className, ...props }: ProgressPrimitive.Track.Props) {
  return (
    <ProgressPrimitive.Track
      className={cn("col-span-2 block h-2 overflow-hidden bg-muted", className)}
      {...props}
    />
  );
}

function ProgressIndicator({ className, ...props }: ProgressPrimitive.Indicator.Props) {
  return <ProgressPrimitive.Indicator className={cn("h-2 bg-primary", className)} {...props} />;
}

export { Progress, ProgressLabel, ProgressValue, ProgressTrack, ProgressIndicator };
