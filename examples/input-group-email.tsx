import { Mail } from "lucide-react";

import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
  InputGroupText,
} from "@/components/ui/input-group";

export default function InputGroupEmailDemo() {
  return (
    <InputGroup className="max-w-xs">
      <InputGroupAddon>
        <Mail className="size-4" />
      </InputGroupAddon>
      <InputGroupInput type="email" placeholder="Enter email" />
      <InputGroupAddon align="inline-end">
        <InputGroupText>@example.com</InputGroupText>
      </InputGroupAddon>
    </InputGroup>
  );
}
