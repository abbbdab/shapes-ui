import { TriangleAlertIcon } from "lucide-react";

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

export default function AlertLinkDemo() {
  return (
    <Alert variant={"warning"} className=" max-w-md">
      <TriangleAlertIcon />
      <AlertTitle>Subscription expiring</AlertTitle>
      <AlertDescription>
        <p>
          Your subscription expires in 3 days.{" "}
          <a href="#" className=" font-medium underline">
            Renew now
          </a>{" "}
          to avoid interruption.
        </p>
      </AlertDescription>
    </Alert>
  );
}
