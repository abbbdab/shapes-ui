import { X, Send } from "lucide-react";

import { InputGroup, InputGroupButton, InputGroupInput } from "@/components/ui/input-group";

export default function InputGroupActionsDemo() {
  return (
    <InputGroup className="max-w-md">
      <InputGroupInput placeholder="Type a message..." />
      <InputGroupButton variant="outline" size="xs">
        <X className="size-4" />
      </InputGroupButton>
      <InputGroupButton variant="default" size="xs">
        <Send className="size-4" />
      </InputGroupButton>
    </InputGroup>
  );
}
