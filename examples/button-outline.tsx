import { ArchiveIcon } from "lucide-react";

import { Button } from "@/components/ui/button";

export default function ButtonOutlineDemo() {
  return (
    <div className="flex items-center gap-4">
      <Button variant={"outline"}>Outline</Button>
      <Button variant={"outline"}>
        <ArchiveIcon data-icon="start" />
        Archive message
      </Button>
    </div>
  );
}
