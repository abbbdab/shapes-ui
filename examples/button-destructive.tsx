import { Trash2Icon } from "lucide-react";

import { Button } from "@/components/ui/button";

export default function ButtonDestructiveDemo() {
  return (
    <div className="flex items-center gap-4">
      <Button variant={"destructive"}>Destructive</Button>
      <Button variant={"destructive"}>
        <Trash2Icon data-icon="start" />
        Delete message
      </Button>
    </div>
  );
}
