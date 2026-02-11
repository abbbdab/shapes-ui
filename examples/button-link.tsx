import { ExternalLinkIcon } from "lucide-react";

import { Button } from "@/components/ui/button";

export default function ButtonLinkDemo() {
  return (
    <div className="flex items-center gap-4">
      <Button variant={"link"}>Link</Button>
      <Button variant={"link"}>
        <ExternalLinkIcon data-icon="start" />
        Open in new tab
      </Button>
    </div>
  );
}
