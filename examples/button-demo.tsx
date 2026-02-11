import { ArrowDown } from "lucide-react";

import { Button } from "@/components/ui/button";

export default function ButtonDemo() {
  return (
    <div className="flex items-center gap-4">
      <Button variant={"outline"}>Button</Button>
      <Button size={"icon"} variant={"outline"}>
        <ArrowDown />
      </Button>
    </div>
  );
}
