import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverDescription,
  PopoverPopup,
  PopoverTitle,
  PopoverTrigger,
} from "@/components/ui/popover";

export default function PopoverDemo() {
  return (
    <Popover>
      <PopoverTrigger render={<Button variant={"secondary"}>Open popover</Button>} />
      <PopoverPopup>
        <PopoverTitle>Popover component</PopoverTitle>
        <PopoverDescription>This is the popover description content.</PopoverDescription>
      </PopoverPopup>
    </Popover>
  );
}
