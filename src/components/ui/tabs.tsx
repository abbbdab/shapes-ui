"use client";

import { Tabs as TabsPrimitive } from "@base-ui/react/tabs";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

function Tabs({ className, orientation = "horizontal", ...props }: TabsPrimitive.Root.Props) {
  return (
    <TabsPrimitive.Root
      data-slot="tabs"
      data-orientation={orientation}
      className={cn(
        "group/tabs flex gap-2 data-[orientation=horizontal]:flex-col data-[orientation=vertical]:flex-row data-[orientation=horizontal]:**:data-[slot=tabs-list]:h-8 data-[orientation=horizontal]:**:data-[slot=tabs-list]:flex-row data-[orientation=vertical]:**:data-[slot=tabs-list]:h-fit data-[orientation=vertical]:**:data-[slot=tabs-list]:flex-col",
        className,
      )}
      {...props}
    />
  );
}

const tabsListVariants = cva(
  "group/tabs-list relative inline-flex w-max overflow-hidden rounded-2xl p-0.5 text-muted-foreground group-data-[orientation=horizontal]/tabs:items-center group-data-[orientation=horizontal]/tabs:justify-center group-data-[orientation=vertical]/tabs:items-stretch group-data-[orientation=vertical]/tabs:justify-start data-[orientation=horizontal]:items-center data-[orientation=horizontal]:justify-center data-[orientation=vertical]:items-stretch data-[orientation=vertical]:justify-start data-[variant=line]:rounded-none",
  {
    variants: {
      variant: {
        default: "bg-muted",
        line: "gap-1 bg-transparent",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

function TabsList({
  children,
  className,
  variant = "default",
  ...props
}: TabsPrimitive.List.Props & VariantProps<typeof tabsListVariants>) {
  return (
    <TabsPrimitive.List
      data-slot="tabs-list"
      data-variant={variant}
      className={cn(tabsListVariants({ variant }), className)}
      {...props}
    >
      {children}
      <TabsPrimitive.Indicator
        className={cn(
          "pointer-events-none absolute rounded-xl border border-input bg-card shadow-sm transition-[left,right,top,bottom,width,height,transform] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]",
          "data-[orientation=horizontal]:top-(--active-tab-top) data-[orientation=horizontal]:left-(--active-tab-left) data-[orientation=horizontal]:h-(--active-tab-height) data-[orientation=horizontal]:w-(--active-tab-width)",
          "data-[orientation=vertical]:top-(--active-tab-top) data-[orientation=vertical]:left-(--active-tab-left) data-[orientation=vertical]:h-(--active-tab-height) data-[orientation=vertical]:w-(--active-tab-width)",
          "group-data-[variant=line]/tabs-list:rounded-none group-data-[variant=line]/tabs-list:border-0 group-data-[variant=line]/tabs-list:bg-foreground group-data-[variant=line]/tabs-list:shadow-none",
          "group-data-[variant=line]/tabs-list:data-[orientation=horizontal]:top-auto group-data-[variant=line]/tabs-list:data-[orientation=horizontal]:bottom-0 group-data-[variant=line]/tabs-list:data-[orientation=horizontal]:h-0.5",
          "group-data-[variant=line]/tabs-list:data-[orientation=vertical]:right-auto group-data-[variant=line]/tabs-list:data-[orientation=vertical]:left-0 group-data-[variant=line]/tabs-list:data-[orientation=vertical]:w-0.5",
        )}
      />
    </TabsPrimitive.List>
  );
}

function TabsTrigger({ className, ...props }: TabsPrimitive.Tab.Props) {
  return (
    <TabsPrimitive.Tab
      data-slot="tabs-trigger"
      className={cn(
        "relative z-10 inline-flex h-7 flex-none items-center justify-center rounded-xl border border-transparent px-2 py-0.5 text-center text-sm font-medium whitespace-nowrap text-muted-foreground transition-[color,transform,opacity] duration-200 ease-out group-data-[orientation=vertical]/tabs:w-full group-data-[variant=line]/tabs-list:rounded-none group-data-[variant=line]/tabs-list:border-0 group-data-[variant=line]/tabs-list:bg-transparent hover:text-foreground focus-visible:border-ring focus-visible:ring-1 focus-visible:ring-ring/50 focus-visible:outline-1 focus-visible:outline-ring group-data-[variant=line]/tabs-list:focus-visible:border-transparent group-data-[variant=line]/tabs-list:focus-visible:ring-0 group-data-[variant=line]/tabs-list:focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 aria-disabled:pointer-events-none aria-disabled:opacity-50 data-active:text-card-foreground data-[orientation=vertical]:h-fit data-[orientation=vertical]:w-full [&_svg]:pointer-events-none [&_svg]:shrink-0",
        className,
      )}
      {...props}
    />
  );
}

function TabsPanel({ className, ...props }: TabsPrimitive.Panel.Props) {
  return (
    <TabsPrimitive.Panel
      data-slot="tabs-panel"
      className={cn("flex-1 text-sm outline-none", className)}
      {...props}
    />
  );
}

export { Tabs, TabsList, TabsTrigger, TabsPanel, tabsListVariants };
