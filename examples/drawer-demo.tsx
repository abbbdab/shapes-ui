import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerPopup,
  DrawerProvider,
  DrawerTrigger,
  DrawerDescription,
  DrawerHeader,
  DrawerFooter,
  DrawerTitle,
} from "@/components/ui/drawer";

export default function DrawerDemo() {
  return (
    <DrawerProvider>
      <Drawer swipeDirection="down">
        <DrawerTrigger render={<Button variant={"outline"}>Open Drawer</Button>} />
        <DrawerPopup position="bottom">
          <DrawerHeader>
            <DrawerTitle>Ship your changes</DrawerTitle>
            <DrawerDescription>
              Review the updates, then publish them to your workspace.
            </DrawerDescription>
          </DrawerHeader>
          <div className="grid gap-2">
            <p className="text-sm text-muted-foreground">
              This drawer supports swipe gestures, snap points, and background indent effects
              through the provider.
            </p>
          </div>
          <DrawerFooter className="sm:justify-end">
            <DrawerClose
              render={
                <Button type="button" variant="outline">
                  Close
                </Button>
              }
            />
            <Button type="button">Publish</Button>
          </DrawerFooter>
        </DrawerPopup>
      </Drawer>
    </DrawerProvider>
  );
}
