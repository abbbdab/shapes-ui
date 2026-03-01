import { Link } from "@tanstack/react-router";
import { SunMoonIcon } from "lucide-react";

import { DocsButton } from "@/components/docs/docs-button";
import { useTheme } from "@/components/docs/theme-provider";

import { MobileMenu } from "./mobile-menu";

export function Header() {
  const { toggleTheme, theme } = useTheme();

  return (
    <header className=" sticky top-0 z-10 h-12">
      <div className=" container mx-auto  flex h-full items-center justify-between px-4">
        <Link to="/" className="flex items-center gap-2 font-medium font-heading tracking-wide">
          <img
            src={theme === "dark" ? "/shps_white.svg" : "/shps_black.svg"}
            alt="Shapes UI Logo"
            className=" size-5"
          />
          shapes ui
        </Link>

        <div className=" mx-auto hidden gap-4 lg:flex">
          <DocsButton variant="ghost" size="sm">
            <Link to="/components">Components</Link>
          </DocsButton>
        </div>

        <DocsButton onClick={toggleTheme} variant={"ghost"} className={"hidden lg:inline-flex"}>
          <SunMoonIcon className=" size-4" />
        </DocsButton>
        <MobileMenu />
      </div>
    </header>
  );
}
