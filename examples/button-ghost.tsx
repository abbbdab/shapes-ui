import { InfoIcon } from "lucide-react";

import { Button } from "@/components/ui/button";

export default function ButtonGhostDemo() {
  return (
    <div className="flex items-center gap-4">
      <Button variant={"ghost"}>Ghost</Button>
      <Button variant={"ghost"}>
        <InfoIcon data-icon="start" />
        More info
      </Button>
    </div>
  );
}
