import { InfoIcon } from "lucide-react";

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

export default function AlertInfoDemo() {
  return (
    <Alert variant={"info"} className=" max-w-md">
      <InfoIcon />
      <AlertTitle>Info</AlertTitle>
      <AlertDescription>An app update is available to download.</AlertDescription>
    </Alert>
  );
}
