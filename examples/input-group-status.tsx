import { AlertCircle, Check } from "lucide-react";

import { InputGroup, InputGroupAddon, InputGroupInput } from "@/components/ui/input-group";

export default function InputGroupStatusDemo() {
  return (
    <div className="flex max-w-xs flex-col gap-4">
      <div>
        <label className="mb-2 block text-sm font-medium">Valid</label>
        <InputGroup>
          <InputGroupInput placeholder="Valid input" defaultValue="john@example.com" />
          <InputGroupAddon align="inline-end">
            <Check className="size-4 text-success" />
          </InputGroupAddon>
        </InputGroup>
      </div>

      <div>
        <label className="mb-2 block text-sm font-medium">Invalid</label>
        <InputGroup>
          <InputGroupInput
            placeholder="Invalid input"
            defaultValue="invalid-email"
            aria-invalid="true"
          />
          <InputGroupAddon align="inline-end">
            <AlertCircle className="size-4 text-destructive" />
          </InputGroupAddon>
        </InputGroup>
      </div>
    </div>
  );
}
