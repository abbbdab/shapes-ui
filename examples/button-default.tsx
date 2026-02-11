import { CameraIcon } from "lucide-react";

import { Button } from "@/components/ui/button";

export default function ButtonDefaultDemo() {
  return (
    <div className="flex items-center gap-4">
      <Button>Default</Button>
      <Button>
        Upload images
        <CameraIcon data-icon="end" />
      </Button>
    </div>
  );
}
