import { FileWarningIcon } from "lucide-react";

import { Button } from "@/components/ui/button";

export default function ButtonWarningDemo() {
  return (
    <div className="flex items-center gap-4">
      <Button variant={"warning"}>Warning</Button>
      <Button variant={"warning"}>
        <FileWarningIcon />
        Warning
      </Button>
    </div>
  );
}
