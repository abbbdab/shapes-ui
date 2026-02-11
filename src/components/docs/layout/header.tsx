import { Link } from "@tanstack/react-router";
import { MenuIcon, SunMoonIcon } from "lucide-react";
import { useState } from "react";

import { DocsButton } from "@/components/docs/docs-button";
import { useTheme } from "@/components/docs/theme-provider";

import { MobileMenu } from "./mobile-menu";

export function Header() {
  const { toggleTheme, theme } = useTheme();
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  return (
    <header className=" sticky top-0 z-10 h-12 border-b bg-background">
      <div className=" container mx-auto  flex h-full items-center justify-between border-x px-4">
        <Link to="/">
          <img
            src={theme === "dark" ? "/shps_white.svg" : "/shps_black.svg"}
            alt="Shapes UI Logo"
            className=" size-6"
          />
        </Link>

        <div className=" mx-auto hidden gap-4 lg:flex">
          <DocsButton variant="ghost" size="sm">
            <Link to="/components">Components</Link>
          </DocsButton>
        </div>

        <DocsButton onClick={toggleTheme} variant={"ghost"} className={"hidden lg:inline-flex"}>
          <SunMoonIcon className=" size-4" />
        </DocsButton>

        <DocsButton
          onClick={() => setShowMobileMenu(!showMobileMenu)}
          variant={"ghost"}
          size={"sm"}
          className={"lg:hidden"}
        >
          <MenuIcon data-icon="start" />
          Navigation
        </DocsButton>
      </div>

      <MobileMenu open={showMobileMenu} onClose={() => setShowMobileMenu(false)} />
    </header>
  );
}
