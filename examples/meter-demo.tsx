import { useState } from "react";

import { Meter } from "@/components/ui/meter";

export default function MeterDemo() {
  const [value, setValue] = useState(65);

  return (
    <div className="space-y-6">
      <div>
        <Meter value={value} label="Storage" showLabel showValue />
        <input
          type="range"
          min="0"
          max="100"
          value={value}
          onChange={(e) => setValue(Number(e.target.value))}
          className="mt-4 w-80"
        />
      </div>
      <div>
        <Meter value={75} label="Memory" showLabel showValue />
      </div>
    </div>
  );
}
