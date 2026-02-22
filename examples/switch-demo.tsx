"use client";

import { useState } from "react";

import { Switch } from "@/components/ui/switch";

export default function SwitchDemo() {
  const [enabled, setEnabled] = useState(true);

  return (
    <div className="flex max-w-sm gap-3">
      <Switch id="marketing" checked={enabled} onCheckedChange={setEnabled}>
        Receive product updates
      </Switch>
      <p className="text-sm text-muted-foreground">
        Marketing emails are currently{" "}
        <span className="font-medium">{enabled ? "enabled" : "disabled"}</span>.
      </p>
    </div>
  );
}
