import { ChevronsUpDownIcon } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Collapsible, CollapsiblePanel, CollapsibleTrigger } from "@/components/ui/collapsible";

export default function CollapsibleDemo() {
  return (
    <Collapsible className="flex w-md flex-col gap-2">
      <div className={"flex items-center gap-2 text-sm"}>
        <CollapsibleTrigger
          render={
            <Button variant={"ghost"} size={"icon-xs"}>
              <ChevronsUpDownIcon />
              <span className="sr-only">Toggle</span>
            </Button>
          }
        ></CollapsibleTrigger>
        <span className=" font-medium">Your orders</span>
      </div>
      <CollapsiblePanel className={"flex flex-col gap-2"}>
        <Card>
          <CardContent className=" flex items-center justify-between">
            <span>Status</span>
            <Badge variant="success">Shipped</Badge>
          </CardContent>
        </Card>
      </CollapsiblePanel>
    </Collapsible>
  );
}
