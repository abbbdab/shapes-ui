"use client";

import { Toast as ToastPrimitive } from "@base-ui/react/toast";
import { cva, type VariantProps } from "class-variance-authority";
import { AlertCircle, CheckCircle2 } from "lucide-react";
import * as React from "react";

import { cn } from "@/lib/utils";

type ToastTypes = "default" | "success" | "error";

const toastViewportVariants = cva("fixed z-50 w-80 outline-none", {
  variants: {
    position: {
      "top-left": "top-4 right-auto bottom-auto left-4",
      "top-center": "top-4 right-0 bottom-auto left-0 mx-auto",
      "top-right": "top-4 right-4 bottom-auto left-auto",
      "bottom-left": "top-auto right-auto bottom-4 left-4",
      "bottom-center": "top-auto right-0 bottom-4 left-0 mx-auto",
      "bottom-right": "top-auto right-4 bottom-4 left-auto",
    },
  },
  defaultVariants: {
    position: "bottom-right",
  },
});

const stackedToastVariants = cva(
  "absolute z-[calc(1000-var(--toast-index))] h-(--height) w-full rounded-lg border bg-popup bg-clip-padding p-4 select-none [--gap:0.75rem] [--height:var(--toast-frontmost-height,var(--toast-height))] [--peek:0.75rem] [--scale:calc(max(0,1-(var(--toast-index)*0.1)))] [--shrink:calc(1-var(--scale))] [transition:transform_0.5s_cubic-bezier(0.22,1,0.36,1),opacity_0.5s,height_0.15s] after:absolute after:left-0 after:h-[calc(var(--gap)+1px)] after:w-full after:content-[''] data-ending-style:opacity-0 data-expanded:h-(--toast-height) data-limited:opacity-0 data-ending-style:data-[swipe-direction=down]:transform-[translateY(calc(var(--toast-swipe-movement-y)+150%))] data-expanded:data-ending-style:data-[swipe-direction=down]:transform-[translateY(calc(var(--toast-swipe-movement-y)+150%))] data-ending-style:data-[swipe-direction=left]:transform-[translateX(calc(var(--toast-swipe-movement-x)-150%))_translateY(var(--offset-y))] data-expanded:data-ending-style:data-[swipe-direction=left]:transform-[translateX(calc(var(--toast-swipe-movement-x)-150%))_translateY(var(--offset-y))] data-ending-style:data-[swipe-direction=right]:transform-[translateX(calc(var(--toast-swipe-movement-x)+150%))_translateY(var(--offset-y))] data-expanded:data-ending-style:data-[swipe-direction=right]:transform-[translateX(calc(var(--toast-swipe-movement-x)+150%))_translateY(var(--offset-y))] data-ending-style:data-[swipe-direction=up]:transform-[translateY(calc(var(--toast-swipe-movement-y)-150%))] data-expanded:data-ending-style:data-[swipe-direction=up]:transform-[translateY(calc(var(--toast-swipe-movement-y)-150%))]",
  {
    variants: {
      vertical: {
        top: "top-0 origin-top [transform:translateX(var(--toast-swipe-movement-x))_translateY(calc(var(--toast-swipe-movement-y)+(var(--toast-index)*var(--peek))+(var(--shrink)*var(--height))))_scale(var(--scale))] [--offset-y:calc(var(--toast-offset-y)+(var(--toast-index)*var(--gap))+var(--toast-swipe-movement-y))] after:bottom-full data-expanded:transform-[translateX(var(--toast-swipe-movement-x))_translateY(calc(var(--offset-y)))] data-starting-style:transform-[translateY(-150%)] [&[data-ending-style]:not([data-limited]):not([data-swipe-direction])]:transform-[translateY(-150%)]",
        bottom:
          "bottom-0 origin-bottom [transform:translateX(var(--toast-swipe-movement-x))_translateY(calc(var(--toast-swipe-movement-y)-(var(--toast-index)*var(--peek))-(var(--shrink)*var(--height))))_scale(var(--scale))] [--offset-y:calc(var(--toast-offset-y)*-1+calc(var(--toast-index)*var(--gap)*-1)+var(--toast-swipe-movement-y))] after:top-full data-expanded:transform-[translateX(var(--toast-swipe-movement-x))_translateY(calc(var(--offset-y)))] data-starting-style:transform-[translateY(150%)] [&[data-ending-style]:not([data-limited]):not([data-swipe-direction])]:transform-[translateY(150%)]",
      },
      horizontal: {
        left: "right-auto left-0",
        center: "right-0 left-0 mx-auto",
        right: "right-0 left-auto",
      },
    },
    defaultVariants: {
      vertical: "bottom",
      horizontal: "right",
    },
  },
);

const anchoredToastVariants = cva(
  "pointer-events-auto w-80 rounded-lg border bg-popup bg-clip-padding p-4 data-ending-style:opacity-0 data-starting-style:opacity-0",
);

const toastContentVariants = cva(
  "overflow-hidden transition-opacity duration-250 data-behind:pointer-events-none data-behind:opacity-0 data-expanded:pointer-events-auto data-expanded:opacity-100",
);

const toastBodyVariants = cva("flex items-center gap-3");

type ToastPosition = NonNullable<VariantProps<typeof toastViewportVariants>["position"]>;
type StackVertical = NonNullable<VariantProps<typeof stackedToastVariants>["vertical"]>;
type StackHorizontal = NonNullable<VariantProps<typeof stackedToastVariants>["horizontal"]>;
type ToastManager = ReturnType<typeof ToastPrimitive.createToastManager>;

interface ToastProviderProps {
  children: React.ReactNode;
  position?: ToastPosition;
  limit?: number;
  timeout?: number;
  toastManager?: ToastManager;
}

const globalToastManager = ToastPrimitive.createToastManager();
export const globalToast = globalToastManager;

export function ToastProvider({
  children,
  position = "bottom-right",
  limit = 5,
  timeout = 5000,
  toastManager,
}: ToastProviderProps) {
  const localToastManagerRef = React.useRef<ToastManager | null>(null);

  if (!localToastManagerRef.current) {
    localToastManagerRef.current = ToastPrimitive.createToastManager();
  }

  const manager = toastManager ?? localToastManagerRef.current;

  return (
    <ToastPrimitive.Provider toastManager={manager} limit={limit} timeout={timeout}>
      {children}
      <ToastPrimitive.Portal>
        <ToastPrimitive.Viewport className={cn(toastViewportVariants({ position }))}>
          <ToastStackConsumer position={position} />
        </ToastPrimitive.Viewport>
        <ToastPrimitive.Viewport className="pointer-events-none fixed inset-0 z-50 outline-none">
          <ToastAnchorConsumer />
        </ToastPrimitive.Viewport>
      </ToastPrimitive.Portal>
    </ToastPrimitive.Provider>
  );
}

function ToastStackConsumer({ position }: { position: ToastPosition }) {
  const { toasts } = ToastPrimitive.useToastManager();
  const stackToasts = toasts.filter((currentToast) => !currentToast.positionerProps?.anchor);

  return (
    <>
      {stackToasts.map((currentToast) => (
        <Toast key={currentToast.id} toast={currentToast} position={position} />
      ))}
    </>
  );
}

function ToastAnchorConsumer() {
  const { toasts } = ToastPrimitive.useToastManager();
  const anchorToasts = toasts.filter((currentToast) =>
    Boolean(currentToast.positionerProps?.anchor),
  );

  return (
    <>
      {anchorToasts.map((currentToast) => {
        const { className, ...positionerProps } = currentToast.positionerProps ?? {};

        return (
          <ToastPrimitive.Positioner
            key={currentToast.id}
            toast={currentToast}
            className={cn("pointer-events-none z-[calc(1000-var(--toast-index))]", className)}
            {...positionerProps}
          >
            <AnchoredToast toast={currentToast} />
          </ToastPrimitive.Positioner>
        );
      })}
    </>
  );
}

function Toast({
  className,
  toast,
  position,
  ...props
}: ToastPrimitive.Root.Props & { position: ToastPosition }) {
  const { vertical, horizontal } = getStackPlacement(position);

  return (
    <ToastPrimitive.Root
      toast={toast}
      className={cn(stackedToastVariants({ vertical, horizontal, className }))}
      {...props}
    >
      <ToastPrimitive.Content className={cn(toastContentVariants())}>
        <ToastBody toast={toast} />
      </ToastPrimitive.Content>
    </ToastPrimitive.Root>
  );
}

function AnchoredToast({ className, toast, ...props }: ToastPrimitive.Root.Props) {
  return (
    <ToastPrimitive.Root
      toast={toast}
      className={cn(anchoredToastVariants({ className }))}
      {...props}
    >
      <ToastPrimitive.Content className={cn(toastContentVariants())}>
        <ToastBody toast={toast} />
      </ToastPrimitive.Content>
    </ToastPrimitive.Root>
  );
}

function ToastBody({ toast }: { toast: ToastPrimitive.Root.Props["toast"] }) {
  let icon;

  switch (toast.type as ToastTypes) {
    case "success":
      icon = <CheckCircle2 className="h-4 w-4 text-success" />;
      break;
    case "error":
      icon = <AlertCircle className="h-4 w-4 text-destructive" />;
      break;
    default:
      icon = null;
      break;
  }

  return (
    <div className={cn(toastBodyVariants())}>
      {icon ? <div>{icon}</div> : null}
      <div className="flex flex-1 flex-col">
        {toast.title ? <ToastPrimitive.Title className="text-sm font-medium" /> : null}
        {toast.description ? (
          <ToastPrimitive.Description className="text-sm text-muted-foreground" />
        ) : null}
        {toast.actionProps ? (
          <ToastPrimitive.Action className="mt-2 inline-flex h-7 items-center justify-center self-start rounded-md border px-2.5 text-xs font-medium hover:bg-muted" />
        ) : null}
      </div>
    </div>
  );
}

function getStackPlacement(position: ToastPosition): {
  vertical: StackVertical;
  horizontal: StackHorizontal;
} {
  const vertical: StackVertical = position.startsWith("top") ? "top" : "bottom";

  let horizontal: StackHorizontal = "center";
  if (position.endsWith("left")) {
    horizontal = "left";
  }
  if (position.endsWith("right")) {
    horizontal = "right";
  }

  return {
    vertical,
    horizontal,
  };
}

function useToast<Data extends object = any>() {
  return ToastPrimitive.useToastManager<Data>();
}

export { ToastProvider as Toast };
export { useToast };
export type { ToastPosition, ToastManager };
