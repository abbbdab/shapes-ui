import { Button } from "@/components/ui/button";
import { Toast, useToast } from "@/components/ui/toast";

export default function ToastTimeout() {
  return (
    <Toast>
      <ToastTimeoutActions />
    </Toast>
  );
}

function ToastTimeoutActions() {
  const toast = useToast();

  return (
    <div className="flex flex-wrap gap-2">
      <Button
        variant="outline"
        onClick={() =>
          toast.add({
            title: "Quick notice",
            description: "This toast closes in 1 second.",
            timeout: 1000,
          })
        }
      >
        1s timeout
      </Button>
      <Button
        variant="outline"
        onClick={() =>
          toast.add({
            title: "Long notice",
            description: "This toast stays for 8 seconds.",
            timeout: 8000,
          })
        }
      >
        8s timeout
      </Button>
    </div>
  );
}
