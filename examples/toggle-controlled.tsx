"use client";

import { Bold } from "lucide-react";
import { useState } from "react";

import { Toggle } from "@/components/ui/toggle";

export default function ToggleControlled() {
  const [pressed, setPressed] = useState(false);

  return (
    <div className="flex flex-col gap-2">
      <Toggle aria-label="Toggle bold formatting" pressed={pressed} onPressedChange={setPressed}>
        <Bold />
        Bold
      </Toggle>
      <p className="text-xs text-muted-foreground">Pressed: {pressed ? "true" : "false"}</p>
    </div>
  );
}
