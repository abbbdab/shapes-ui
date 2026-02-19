import { Link } from "@tanstack/react-router";
import { allComponents } from "content-collections";
import { Suspense, useState } from "react";
import { SuspenseFallback } from "./suspense-fallback";
import { Drawer, DrawerPopup, DrawerTrigger } from "@/components/ui/drawer";
import { Button } from "@/components/ui/button";
import { MenuIcon } from "lucide-react";

export function MobileMenu() {

  const [open, setOpen] = useState(false);

  return <Drawer open={open} onOpenChange={setOpen} >
    <DrawerTrigger className={'flex md:hidden'} render={<Button size={'xs'} variant={'secondary'} >
      <MenuIcon  />
      Navigation
    </Button>} />
    <DrawerPopup position="bottom">
      <nav className="mt-4 flex flex-col gap-2">
        <span className="text-sm font-medium text-muted-foreground">Components</span>
        <Suspense fallback={<SuspenseFallback />}>
          {allComponents.map((component) => (
            <Link key={component.slug} to={'/components/$slug'} params={{
              slug: component.slug
            }} onClick={() => setOpen(false)}>
              <Button variant={'link'}>
                {component.title}
              </Button>
            </Link>
          ))}
        </Suspense>
      </nav>
    </DrawerPopup>
  </Drawer>
}
