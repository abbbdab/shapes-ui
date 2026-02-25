import { HelpCircle, Info, AlertCircle } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Tooltip, TooltipTrigger, TooltipPopup, TooltipProvider } from "@/components/ui/tooltip";

export default function TooltipDemo() {
  return (
    <TooltipProvider delay={0}>
      <div className="flex gap-2">
        <Tooltip>
          <TooltipTrigger
            render={
              <Button variant="outline" size="icon">
                <Info className="size-4" />
              </Button>
            }
            aria-label="Information"
          />
          <TooltipPopup>Learn more about this feature</TooltipPopup>
        </Tooltip>

        <Tooltip>
          <TooltipTrigger
            render={
              <Button variant="outline" size="icon">
                <HelpCircle className="size-4" />
              </Button>
            }
            aria-label="Help"
          />
          <TooltipPopup side="top">Need help? Click for details</TooltipPopup>
        </Tooltip>

        <Tooltip>
          <TooltipTrigger
            render={
              <Button variant="outline" size="icon">
                <AlertCircle className="size-4" />
              </Button>
            }
            aria-label="Warning"
          />
          <TooltipPopup side="bottom">Warning: This action is final</TooltipPopup>
        </Tooltip>
      </div>
    </TooltipProvider>
  );
}
