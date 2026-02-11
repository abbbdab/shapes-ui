import { Loader2Icon } from "lucide-react";
import { ComponentProps } from "react";

import { cn } from "@/lib/utils";

export function SuspenseFallback({ className, ...props }: ComponentProps<"div">) {
  return (
    <div className={cn("flex h-full items-center justify-center", className)} {...props}>
      <Loader2Icon role="status" aria-label="Loading" className={cn("size-4 animate-spin")} />
    </div>
  );
}
