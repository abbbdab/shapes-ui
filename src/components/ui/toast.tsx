"use client";

import { Toast as ToastPrimitive } from "@base-ui/react/toast";
import { cn } from "@/lib/utils";
import { AlertCircle, CheckCircle2 } from "lucide-react";

type ToastTypes = "default" | "success" | "error";

const globalToastManager = ToastPrimitive.createToastManager();
export const toast = globalToastManager;

export function ToastProvider({ children }: { children: React.ReactNode }) {
  return (
    <ToastPrimitive.Provider toastManager={globalToastManager} limit={5} timeout={5000}>
      {children}
      <ToastPrimitive.Portal>
        <ToastPrimitive.Viewport className=\"fixed bottom-4 right-4 z-50 flex flex-col gap-2\">
          <ToastViewportConsumer />
        </ToastPrimitive.Viewport>
      </ToastPrimitive.Portal>
    </ToastPrimitive.Provider>
  );
}

function ToastViewportConsumer() {
  const { toasts } = ToastPrimitive.useToastManager();
  return (
    <>
      {toasts.map((toast) => (
        <Toast key={toast.id} toast={toast} />
      ))}
    </>
  );
}

function Toast({
  className,
  toast,
  ...props
}: ToastPrimitive.Root.Props) {
  let icon;

  switch (toast.type as ToastTypes) {
    case "success":
      icon = <CheckCircle2 className=\"h-4 w-4 text-green-600\" />;
      break;
    case "error":
      icon = <AlertCircle className=\"h-4 w-4 text-red-600\" />;
      break;
    default:
      icon = null;
      break;
  }

  return (
    <ToastPrimitive.Root
      toast={toast}
      className={cn(
        \"w-80 rounded-lg border bg-popup shadow-md p-4 flex items-center gap-3\",
        className,
      )}
      {...props}
    >
      {icon && <div>{icon}</div>}
      <div className=\"flex flex-col flex-1\">
        {toast.title && (
          <ToastPrimitive.Title className=\"text-sm font-medium\">
            {toast.title}
          </ToastPrimitive.Title>
        )}
        {toast.description && (
          <ToastPrimitive.Description className=\"text-sm text-muted-foreground\">
            {toast.description}
          </ToastPrimitive.Description>
        )}
      </div>
    </ToastPrimitive.Root>
  );
}

export { ToastProvider as Toast };
