import { Button } from "@/components/ui/button";
import { Toast, useToast } from "@/components/ui/toast";

export default function ToastPromise() {
  return (
    <Toast>
      <ToastPromiseAction />
    </Toast>
  );
}

function ToastPromiseAction() {
  const toast = useToast();

  return (
    <Button
      variant="outline"
      onClick={() => {
        const request = new Promise<string>((resolve, reject) => {
          setTimeout(() => {
            if (Math.random() > 0.4) {
              resolve("Report export complete");
              return;
            }
            reject(new Error("Could not generate report"));
          }, 1500);
        });

        void toast.promise(request, {
          loading: {
            title: "Exporting",
            description: "Preparing your report...",
            timeout: 0,
          },
          success: (message) => ({
            title: "Done",
            description: message,
            type: "success",
          }),
          error: (error: Error) => ({
            title: "Export failed",
            description: error.message,
            type: "error",
          }),
        });
      }}
    >
      Run async action
    </Button>
  );
}
