import { Copy } from "lucide-react";

import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
} from "@/components/ui/input-group";

export default function InputGroupCopyDemo() {
  return (
    <InputGroup className="max-w-md">
      <InputGroupInput readOnly value="https://example.com/share/abc123" />
      <InputGroupAddon align="inline-end">
        <InputGroupButton
          onClick={() => navigator.clipboard.writeText("https://example.com/share/abc123")}
        >
          <Copy />
        </InputGroupButton>
      </InputGroupAddon>
    </InputGroup>
  );
}
