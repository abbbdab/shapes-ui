import { XCircleIcon } from "lucide-react";

import { Alert, AlertAction, AlertDescription, AlertTitle } from "@/components/ui/alert";

export default function AlertActionDemo() {
  return (
    <Alert variant={"destructive"} className=" max-w-md">
      <XCircleIcon />
      <AlertTitle>Upload failed</AlertTitle>
      <AlertDescription>Your file could not be uploaded. Please try again.</AlertDescription>
      <AlertAction>
        <button className="rounded border px-2 py-1 text-xs text-muted-foreground hover:bg-accent">
          Retry
        </button>
      </AlertAction>
    </Alert>
  );
}
