import { Info } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Tooltip, TooltipTrigger, TooltipPopup, TooltipProvider } from "@/components/ui/tooltip";

export default function TooltipPositions() {
  return (
    <TooltipProvider delay={0}>
      <div className="flex flex-wrap items-center justify-center gap-4">
        <Tooltip>
          <TooltipTrigger
            render={
              <Button variant="outline" size="icon">
                <Info className="size-4" />
              </Button>
            }
            aria-label="Top tooltip"
          />
          <TooltipPopup side="top">Top position</TooltipPopup>
        </Tooltip>

        <Tooltip>
          <TooltipTrigger
            render={
              <Button variant="outline" size="icon">
                <Info className="size-4" />
              </Button>
            }
            aria-label="Right tooltip"
          />
          <TooltipPopup side="right">Right position</TooltipPopup>
        </Tooltip>

        <Tooltip>
          <TooltipTrigger
            render={
              <Button variant="outline" size="icon">
                <Info className="size-4" />
              </Button>
            }
            aria-label="Bottom tooltip"
          />
          <TooltipPopup side="bottom">Bottom position</TooltipPopup>
        </Tooltip>

        <Tooltip>
          <TooltipTrigger
            render={
              <Button variant="outline" size="icon">
                <Info className="size-4" />
              </Button>
            }
            aria-label="Left tooltip"
          />
          <TooltipPopup side="left">Left position</TooltipPopup>
        </Tooltip>
      </div>
    </TooltipProvider>
  );
}
