import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerIndent,
  DrawerIndentBackground,
  DrawerPopup,
  DrawerProvider,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";

export default function DrawerIndentExample() {
  return (
    <DrawerProvider>
      <DrawerIndentBackground />
      <DrawerIndent className="rounded-2xl border bg-background p-6 shadow-sm">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <p className="text-sm font-medium">Workspace overview</p>
            <p className="text-sm text-muted-foreground">
              Your background content will subtly scale when a drawer opens.
            </p>
          </div>
          <Drawer swipeDirection="right">
            <DrawerTrigger render={<Button variant="outline">Open Drawer</Button>} />
            <DrawerPopup position="right">
              <DrawerHeader>
                <DrawerTitle>Indent effect</DrawerTitle>
                <DrawerDescription>
                  The background is wrapped in `DrawerIndent` to add depth.
                </DrawerDescription>
              </DrawerHeader>
              <DrawerFooter>
                <DrawerClose render={<Button variant="outline">Close</Button>} />
                <Button>Save changes</Button>
              </DrawerFooter>
            </DrawerPopup>
          </Drawer>
        </div>
      </DrawerIndent>
    </DrawerProvider>
  );
}
