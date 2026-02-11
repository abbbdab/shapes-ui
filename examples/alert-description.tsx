import { RocketIcon } from "lucide-react";

import { Alert, AlertDescription } from "@/components/ui/alert";

export default function AlertDescriptionOnlyDemo() {
  return (
    <Alert variant={"info"} className=" max-w-md">
      <RocketIcon />
      <AlertDescription>
        <p className=" text-xs">
          Tip: Press <code>Ctrl + K</code> to open the command menu.
        </p>
      </AlertDescription>
    </Alert>
  );
}
