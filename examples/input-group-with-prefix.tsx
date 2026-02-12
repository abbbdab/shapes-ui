import { DollarSign } from "lucide-react";

import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
  InputGroupText,
} from "@/components/ui/input-group";

export default function InputGroupWithPrefixDemo() {
  return (
    <InputGroup className="max-w-xs">
      <InputGroupAddon>
        <DollarSign className="size-4" />
      </InputGroupAddon>
      <InputGroupInput type="number" placeholder="0.00" />
      <InputGroupAddon align="inline-end">
        <InputGroupText>USD</InputGroupText>
      </InputGroupAddon>
    </InputGroup>
  );
}
