import {
  NavigationMenu,
  NavigationMenuTrigger,
  NavigationMenuItem,
  NavigationMenuContent,
  NavigationMenuLink,
  NavigationMenuPopup,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";

export default function NavigationMenuDemo() {
  return (
    <div>
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Overview</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid max-w-md grid-cols-2 gap-4 p-2">
                {overviewLinks.map((item) => (
                  <li key={item.href}>
                    <NavigationMenuLink href={item.href}>
                      <div className="flex flex-col">
                        <h3 className="text-sm leading-5 font-medium">{item.title}</h3>
                        <p className="text-xs leading-tight text-muted-foreground">
                          {item.description}
                        </p>
                      </div>
                    </NavigationMenuLink>
                  </li>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuTrigger>Handbook</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid max-w-md grid-cols-2 gap-2 p-2">
                {handbookLinks.map((item) => (
                  <li key={item.href}>
                    <NavigationMenuLink href={item.href}>
                      <div className="flex flex-col">
                        <h3 className="text-sm leading-5 font-medium">{item.title}</h3>
                        <p className="text-xs leading-tight text-muted-foreground">
                          {item.description}
                        </p>
                      </div>
                    </NavigationMenuLink>
                  </li>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuLink
              className={
                "flex items-center gap-1 rounded-lg px-3 py-1.5 text-sm font-medium transition-all duration-50 hover:bg-accent/60 hover:text-accent-foreground focus:bg-accent/60"
              }
            >
              About
            </NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>

        <NavigationMenuPopup />
      </NavigationMenu>
    </div>
  );
}

const overviewLinks = [
  {
    href: "/react/overview/quick-start",
    title: "Quick Start",
    description: "Install and assemble your first component.",
  },
  {
    href: "/react/overview/accessibility",
    title: "Accessibility",
    description: "Learn how we build accessible components.",
  },
  {
    href: "/react/overview/releases",
    title: "Releases",
    description: "See what’s new in the latest Base UI versions.",
  },
  {
    href: "/react/overview/about",
    title: "About",
    description: "Learn more about Base UI and our mission.",
  },
] as const;

const handbookLinks = [
  {
    href: "/react/handbook/styling",
    title: "Styling",
    description:
      "Base UI components can be styled with plain CSS, Tailwind CSS, CSS-in-JS, or CSS Modules.",
  },
  {
    href: "/react/handbook/animation",
    title: "Animation",
    description:
      "Base UI components can be animated with CSS transitions, CSS animations, or JavaScript libraries.",
  },
  {
    href: "/react/handbook/composition",
    title: "Composition",
    description:
      "Base UI components can be replaced and composed with your own existing components.",
  },
] as const;
