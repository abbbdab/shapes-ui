import { Button } from "@/components/ui/button";
import { Toast, useToast } from "@/components/ui/toast";

export default function ToastStacked() {
  return (
    <Toast>
      <ToastStackedAction />
    </Toast>
  );
}

function ToastStackedAction() {
  const toast = useToast();

  return (
    <Button
      variant="outline"
      onClick={() => {
        for (let index = 0; index < 4; index += 1) {
          toast.add({
            title: `Toast ${index + 1}`,
            description: "This demonstrates stacked toast behavior.",
          });
        }
      }}
    >
      Show stacked toasts
    </Button>
  );
}
