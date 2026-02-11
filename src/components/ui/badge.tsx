import { cva, VariantProps } from "class-variance-authority";
import { ComponentProps } from "react";

const badgeVariants = cva(
  "group/badge inline-flex h-5 min-h-5 w-fit shrink-0 items-center justify-center gap-1 overflow-hidden rounded-lg border border-transparent px-2.5 py-0.5 text-xs font-medium whitespace-nowrap transition-all focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 has-data-[icon=end]:pr-1.5 has-data-[icon=start]:pl-1.5 aria-invalid:border-destructive aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 [&>svg]:pointer-events-none [&>svg]:size-3!",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground [a]:hover:bg-primary/80",
        secondary: "bg-secondary text-secondary-foreground [a]:hover:bg-secondary/80",
        ghost: "hover:bg-muted hover:text-muted-foreground dark:hover:bg-muted/50",
        outline:
          "border-border! text-foreground [a]:hover:bg-muted [a]:hover:text-muted-foreground",
        success:
          "bg-success/20 text-success-foreground hover:bg-success/25 [a]:hover:bg-success/80",
        warning:
          "bg-warning/20 text-warning-foreground hover:bg-warning/25 [a]:hover:bg-warning/80",
        info: "bg-info/20 text-info-foreground hover:bg-info/25 [a]:hover:bg-info/80",
        destructive:
          "bg-destructive/20 text-destructive-foreground hover:bg-destructive/25 [a]:hover:bg-destructive/80",
      },
    },
  },
);

function Badge({
  className,
  variant = "default",
  ...props
}: ComponentProps<"span"> & VariantProps<typeof badgeVariants>) {
  return <span data-slot="badge" className={badgeVariants({ variant, className })} {...props} />;
}

export { Badge, badgeVariants };
