import { Button } from "@/components/ui/button";
import { Toast, useToast } from "@/components/ui/toast";

export default function ToastUpdate() {
  return (
    <Toast>
      <ToastUpdateAction />
    </Toast>
  );
}

function ToastUpdateAction() {
  const toast = useToast();

  return (
    <Button
      variant="outline"
      onClick={() => {
        const toastId = toast.add({
          title: "Uploading",
          description: "Starting upload...",
          timeout: 0,
        });

        setTimeout(() => {
          toast.update(toastId, {
            title: "Upload complete",
            description: "Your files are ready.",
            type: "success",
            timeout: 3000,
          });
        }, 1200);
      }}
    >
      Show updatable toast
    </Button>
  );
}
