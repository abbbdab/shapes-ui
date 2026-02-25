import { Button } from "@/components/ui/button";
import { Toast, useToast } from "@/components/ui/toast";

export default function ToastAction() {
  return (
    <Toast>
      <ToastActionTrigger />
    </Toast>
  );
}

function ToastActionTrigger() {
  const toast = useToast();

  return (
    <Button
      variant="outline"
      onClick={() => {
        const toastId = toast.add({
          title: "Project archived",
          description: "The project was moved to archive.",
          type: "success",
          actionProps: {
            children: "Undo",
            onClick: () => {
              toast.close(toastId);
              toast.add({
                title: "Archive reverted",
                description: "The project is active again.",
              });
            },
          },
        });
      }}
    >
      Archive project
    </Button>
  );
}
