import { LoaderCircle } from "lucide-react";

import { Button } from "@/components/ui/button";

export default function ButtonLoadingDemo() {
  return (
    <div className="flex items-center gap-4">
      <Button disabled>
        <LoaderCircle data-icon="start" className="animate-spin" />
        Please wait
      </Button>
    </div>
  );
}
