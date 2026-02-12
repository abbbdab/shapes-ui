import { Phone } from "lucide-react";

import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
  InputGroupText,
} from "@/components/ui/input-group";

export default function InputGroupPhoneDemo() {
  return (
    <InputGroup className="max-w-xs">
      <InputGroupAddon>
        <Phone className="size-4" />
      </InputGroupAddon>
      <InputGroupAddon>
        <InputGroupText>+1</InputGroupText>
      </InputGroupAddon>
      <InputGroupInput type="tel" placeholder="(555) 123-4567" />
    </InputGroup>
  );
}
