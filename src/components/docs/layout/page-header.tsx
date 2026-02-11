import { ComponentProps } from "react";

import { cn } from "@/lib/utils";

import CircuitBoard from "./circuit-board";

export function PageHeader({
  title,
  subtitle,
  children,
  className,
  ...props
}: ComponentProps<"div"> & {
  title: string;
  subtitle?: string;
}) {
  return (
    <div
      className={cn(
        "flex h-32 items-center overflow-hidden border-b bg-background md:h-60",
        className,
      )}
      {...props}
    >
      <div className=" flex flex-col gap-1 p-6">
        <h1 className="font-heading text-3xl font-bold xl:text-5xl">{title}</h1>
        {subtitle && <p className="text-xs text-muted-foreground md:text-sm">{subtitle}</p>}
        {children}
      </div>
      <CircuitBoard className="mask-rtl ml-auto h-full max-w-70 text-foreground/40" />
    </div>
  );
}
