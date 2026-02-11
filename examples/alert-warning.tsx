import { MailWarningIcon } from "lucide-react";

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

export default function AlertWarningDemo() {
  return (
    <Alert variant={"warning"} className=" max-w-md">
      <MailWarningIcon />
      <AlertTitle>Warning</AlertTitle>
      <AlertDescription>Your subscription is about to expire.</AlertDescription>
    </Alert>
  );
}
