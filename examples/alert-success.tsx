import { CheckCircleIcon } from "lucide-react";

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

export default function AlertSuccessDemo() {
  return (
    <Alert variant={"success"} className=" max-w-md">
      <CheckCircleIcon />
      <AlertTitle>Success</AlertTitle>
      <AlertDescription>Your changes have been saved successfully.</AlertDescription>
    </Alert>
  );
}
