import { Button } from "@/components/ui/button";
import { Toast, useToast } from "@/components/ui/toast";

export default function ToastVariants() {
  return (
    <Toast>
      <ToastVariantsActions />
    </Toast>
  );
}

function ToastVariantsActions() {
  const toast = useToast();

  return (
    <div className="flex flex-wrap gap-2">
      <Button
        variant="outline"
        onClick={() =>
          toast.add({
            title: "Heads up",
            description: "New account activity was detected.",
          })
        }
      >
        Default
      </Button>
      <Button
        variant="outline"
        onClick={() =>
          toast.add({
            title: "Saved",
            description: "Your preferences were updated.",
            type: "success",
          })
        }
      >
        Success
      </Button>
      <Button
        variant="outline"
        onClick={() =>
          toast.add({
            title: "Action failed",
            description: "Please try again in a few moments.",
            type: "error",
          })
        }
      >
        Error
      </Button>
    </div>
  );
}
