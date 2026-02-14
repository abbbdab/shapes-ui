import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerPopup,
  DrawerProvider,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";

const positions = [
  { label: "Left", position: "left", swipeDirection: "left" },
  { label: "Right", position: "right", swipeDirection: "right" },
  { label: "Top", position: "top", swipeDirection: "up" },
  { label: "Bottom", position: "bottom", swipeDirection: "down" },
] as const;

export default function DrawerPositionsExample() {
  return (
    <DrawerProvider>
      <div className="flex flex-wrap gap-2">
        {positions.map((item) => (
          <Drawer key={item.position} swipeDirection={item.swipeDirection}>
            <DrawerTrigger render={<Button variant="outline">{item.label}</Button>} />
            <DrawerPopup position={item.position}>
              <DrawerHeader>
                <DrawerTitle>{item.label} drawer</DrawerTitle>
                <DrawerDescription>
                  Swipe {item.swipeDirection} to dismiss this drawer.
                </DrawerDescription>
              </DrawerHeader>
              <DrawerFooter>
                <DrawerClose render={<Button variant="outline">Close</Button>} />
                <Button>Confirm</Button>
              </DrawerFooter>
            </DrawerPopup>
          </Drawer>
        ))}
      </div>
    </DrawerProvider>
  );
}
