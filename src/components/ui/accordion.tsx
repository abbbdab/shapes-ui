"use client";

import { Accordion as AccordionPrimitive } from "@base-ui/react/accordion";
import { MinusIcon, PlusIcon } from "lucide-react";

import { cn } from "@/lib/utils";

function Accordion({
  size,
  variant,
  className,
  ...props
}: AccordionPrimitive.Root.Props & {
  size?: "default" | "small";
  variant?: "default" | "surface";
}) {
  return (
    <AccordionPrimitive.Root
      data-slot="accordion-root"
      data-variant={variant}
      data-size={size}
      className={cn(
        "group/accordion-root flex w-full flex-col",
        "data-[variant=surface]:space-y-1",
        className,
      )}
      {...props}
    />
  );
}

function AccordionItem({ className, ...props }: AccordionPrimitive.Item.Props) {
  return (
    <AccordionPrimitive.Item
      data-slot="accordion-item"
      className={cn(
        "group/accordion-item not-last:border-b group-data-[variant=surface]/accordion-root:bg-accent group-data-[variant=surface]/accordion-root:px-4",
        className,
      )}
      {...props}
    />
  );
}

function AccordionTrigger({ className, children, ...props }: AccordionPrimitive.Trigger.Props) {
  return (
    <AccordionPrimitive.Header className={"flex"}>
      <AccordionPrimitive.Trigger
        data-slot="accordion-trigger"
        className={cn(
          "&_svg]:shrink-0 group/accordion-trigger flex flex-1 items-center gap-2 rounded-lg py-2.5 text-sm group-data-[size=small]/accordion-root:py-1.5  hover:underline focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:after:border-ring disabled:pointer-events-none disabled:opacity-50 **:data-[slot=accordion-trigger-icon]:ml-auto **:data-[slot=accordion-trigger-icon]:text-muted-foreground [&_svg:not([class*='size-'])]:size-4 ",
          className,
        )}
        {...props}
      >
        {children}
        <PlusIcon
          data-slot="accordion-trigger-icon"
          className=" group-data-panel-open/accordion-trigger:hidden"
        />
        <MinusIcon
          data-slot="accordion-trigger-icon"
          className="hidden group-data-panel-open/accordion-trigger:inline-flex"
        />
      </AccordionPrimitive.Trigger>
    </AccordionPrimitive.Header>
  );
}

function AccordionPanel({ className, ...props }: AccordionPrimitive.Panel.Props) {
  return (
    <AccordionPrimitive.Panel
      data-slot="accordion-panel"
      className={cn(
        "h-[--accordion-panel-height] overflow-hidden text-sm transition-all duration-150 ease-out data-ending-style:h-0 group-data-open/accordion-item:data-open:pb-2 data-starting-style:h-0 [&_a]:underline [&_a]:underline-offset-3 [&_a]:hover:text-foreground [&_p:not(:last-child)]:mb-4",
        className,
      )}
      {...props}
    />
  );
}

export { Accordion, AccordionItem, AccordionTrigger, AccordionPanel };
