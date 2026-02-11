import { CheckCircle2Icon } from "lucide-react";

import { Alert, AlertTitle } from "@/components/ui/alert";

export default function AlertTitleOnlyDemo() {
  return (
    <Alert variant={"success"} className=" max-w-md">
      <CheckCircle2Icon />
      <AlertTitle>Payment successful</AlertTitle>
    </Alert>
  );
}
