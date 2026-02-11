<<<<<<< Updated upstream
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

export default function AlertDemo() {
  return (
    <Alert className=" max-w-md">
      <AlertTitle>Heads up!</AlertTitle>
      <AlertDescription>You can add components to your app using the CLI.</AlertDescription>
    </Alert>
=======
import { AlertCircle, CheckIcon } from "lucide-react";

import { Alert, AlertDescription, AlertTitle, AlertAction } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";

export default function AlertDemo() {
  return (
    <div className="w-full max-w-md space-y-4">
      <Alert variant="default">
        <AlertTitle>Default Alert</AlertTitle>
        <AlertDescription>This is a default alert.</AlertDescription>
      </Alert>
      <Alert variant="destructive">
        <AlertCircle />
        <AlertTitle>Destructive Alert</AlertTitle>
        <AlertDescription>This is a destructive alert.</AlertDescription>
      </Alert>
      <Alert variant="success">
        <CheckIcon />
        <AlertTitle>Success Alert</AlertTitle>
        <AlertDescription>This is a success alert.</AlertDescription>
        <AlertAction>
          <Button size={"xs"} variant="outline">
            Action
          </Button>
        </AlertAction>
      </Alert>
    </div>
>>>>>>> Stashed changes
  );
}
