import { MailOpenIcon } from "lucide-react";

import { Button } from "@/components/ui/button";

export default function ButtonSizesDemo() {
  return (
    <div className="flex items-center gap-2">
      <Button variant={"outline"} size={"xs"}>
        Extra small
      </Button>
      <Button variant={"outline"} size={"icon-xs"} className={"mr-4"}>
        <MailOpenIcon />
      </Button>
      <Button variant={"outline"} size={"sm"}>
        Small
      </Button>
      <Button variant={"outline"} size={"icon-sm"} className={"mr-4"}>
        <MailOpenIcon />
      </Button>
      <Button variant={"outline"} size={"default"}>
        Default
      </Button>
      <Button variant={"outline"} size={"default"} className={"mr-4"}>
        <MailOpenIcon />
      </Button>
      <Button variant={"outline"} size={"lg"}>
        Large
      </Button>
      <Button variant={"outline"} size={"lg"} className={"mr-4"}>
        <MailOpenIcon />
      </Button>
    </div>
  );
}
