import { SendIcon } from "lucide-react";

import { Button } from "@/components/ui/button";

export default function ButtonSuccessDemo() {
  return (
    <div className="flex items-center gap-4">
      <Button variant="success">Success</Button>
      <Button variant={"success"}>
        Send email
        <SendIcon data-icon="end" />
      </Button>
    </div>
  );
}
