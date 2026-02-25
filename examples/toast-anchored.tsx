import * as React from "react";

import { Button } from "@/components/ui/button";
import { Toast, useToast } from "@/components/ui/toast";

export default function ToastAnchored() {
  return (
    <Toast>
      <ToastAnchoredAction />
    </Toast>
  );
}

function ToastAnchoredAction() {
  const toast = useToast();
  const anchorRef = React.useRef<HTMLButtonElement | null>(null);

  return (
    <Button
      ref={anchorRef}
      variant="outline"
      onClick={() => {
        toast.add({
          description: "Copied",
          timeout: 1500,
          positionerProps: {
            anchor: anchorRef.current,
            sideOffset: 8,
          },
        });
      }}
    >
      Copy
    </Button>
  );
}
