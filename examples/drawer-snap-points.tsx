import * as React from "react";

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

const snapPoints = ["140px", 1] as const;
type DrawerSnapPoint = NonNullable<React.ComponentProps<typeof Drawer>["snapPoints"]>[number];

export default function DrawerSnapPointsExample() {
  const [snapPoint, setSnapPoint] = React.useState<DrawerSnapPoint | null>(snapPoints[0]);

  return (
    <DrawerProvider>
      <Drawer
        swipeDirection="down"
        snapPoints={snapPoints}
        snapPoint={snapPoint}
        onSnapPointChange={setSnapPoint}
      >
        <DrawerTrigger render={<Button variant="outline">Open snap drawer</Button>} />
        <DrawerPopup position="bottom">
          <DrawerHeader>
            <DrawerTitle>Snap points</DrawerTitle>
            <DrawerDescription>
              Drag the sheet to switch between compact and full height.
            </DrawerDescription>
          </DrawerHeader>
          <div className="grid gap-2 text-sm text-muted-foreground">
            <p>Current snap: {snapPoint ?? "none"}</p>
            <p>Try flicking the handle or dragging to the expanded state.</p>
          </div>
          <DrawerFooter>
            <DrawerClose render={<Button variant="outline">Close</Button>} />
            <Button>Continue</Button>
          </DrawerFooter>
        </DrawerPopup>
      </Drawer>
    </DrawerProvider>
  );
}
