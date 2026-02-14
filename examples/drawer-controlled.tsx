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
} from "@/components/ui/drawer";

export default function DrawerControlledExample() {
  const [open, setOpen] = React.useState(false);

  return (
    <DrawerProvider>
      <div className="flex items-center gap-3">
        <Button variant="outline" onClick={() => setOpen(true)}>
          Open drawer
        </Button>
        <Drawer open={open} onOpenChange={setOpen} swipeDirection="right">
          <DrawerPopup position="right">
            <DrawerHeader>
              <DrawerTitle>Controlled drawer</DrawerTitle>
              <DrawerDescription>
                Manage the open state yourself for custom workflows.
              </DrawerDescription>
            </DrawerHeader>
            <DrawerFooter>
              <DrawerClose render={<Button variant="outline">Close</Button>} />
              <Button onClick={() => setOpen(false)}>Done</Button>
            </DrawerFooter>
          </DrawerPopup>
        </Drawer>
      </div>
    </DrawerProvider>
  );
}
