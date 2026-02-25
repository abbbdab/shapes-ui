import { Button } from "@/components/ui/button";
import { Toast, useToast } from "@/components/ui/toast";

export default function ToastDemo() {
  return (
    <Toast>
      <ToastDemoAction />
    </Toast>
  );
}

function ToastDemoAction() {
  const toast = useToast();

  return (
    <Button
      variant="outline"
      onClick={() =>
        toast.add({
          title: "Changes saved",
          description: "Your profile has been updated successfully.",
          type: "success",
        })
      }
    >
      Show toast
    </Button>
  );
}
