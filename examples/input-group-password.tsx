import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";

import { InputGroup, InputGroupButton, InputGroupInput } from "@/components/ui/input-group";

export default function InputGroupPasswordDemo() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <InputGroup className="max-w-xs">
      <InputGroupInput type={showPassword ? "text" : "password"} placeholder="Enter password" />
      <InputGroupButton onClick={() => setShowPassword(!showPassword)}>
        {showPassword ? <EyeOff className="size-4" /> : <Eye className="size-4" />}
      </InputGroupButton>
    </InputGroup>
  );
}
