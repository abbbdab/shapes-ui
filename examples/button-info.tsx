import { InfoIcon } from "lucide-react";

import { Button } from "@/components/ui/button";

export default function ButtonInfoDemo() {
  return (
    <div className="flex items-center gap-4">
      <Button variant={"info"}>Info</Button>
      <Button variant={"info"}>
        <InfoIcon data-icon="start" />
        More info
      </Button>
    </div>
  );
}
