import * as React from "react";

import { Button } from "@/components/ui/button";
import { Toast, useToast, type ToastPosition } from "@/components/ui/toast";

const positions: ToastPosition[] = [
  "top-left",
  "top-center",
  "top-right",
  "bottom-left",
  "bottom-center",
  "bottom-right",
];

export default function ToastPositions() {
  const [position, setPosition] = React.useState<ToastPosition>("bottom-right");

  return (
    <Toast position={position}>
      <ToastPositionActions position={position} onPositionChange={setPosition} />
    </Toast>
  );
}

function ToastPositionActions({
  position,
  onPositionChange,
}: {
  position: ToastPosition;
  onPositionChange: React.Dispatch<React.SetStateAction<ToastPosition>>;
}) {
  const toast = useToast();

  return (
    <div className="flex flex-wrap gap-2">
      {positions.map((value) => (
        <Button
          key={value}
          variant={position === value ? "default" : "outline"}
          onClick={() => {
            onPositionChange(value);
            toast.add({
              title: "Position updated",
              description: `Now showing at ${value}.`,
              type: "success",
            });
          }}
        >
          {value}
        </Button>
      ))}
    </div>
  );
}
