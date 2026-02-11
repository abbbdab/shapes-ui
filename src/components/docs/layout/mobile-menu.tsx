import { Link } from "@tanstack/react-router";
import { clsx } from "clsx";
import { allComponents } from "content-collections";
import { Suspense, useEffect, useRef } from "react";

import { SuspenseFallback } from "./suspense-fallback";

export function MobileMenu({ open, onClose }: { open: boolean; onClose: () => void }) {
  const panelRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
    }

    if (open) {
      document.addEventListener("keydown", onKey);
      document.body.style.overflow = "hidden";
      // Move focus into the panel for accessibility
      setTimeout(() => panelRef.current?.focus(), 0);
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);

  return (
    <div aria-hidden={!open} className={clsx("fixed inset-0 z-50", !open && "pointer-events-none")}>
      <div
        className={clsx(
          "fixed inset-0 bg-black/40 transition-opacity duration-200",
          open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0",
          "motion-reduce:transition-none",
        )}
        onClick={onClose}
        aria-hidden
      />

      <div
        ref={panelRef}
        role="dialog"
        aria-modal
        tabIndex={-1}
        className={clsx(
          "fixed right-0 bottom-0 left-0 transform border-t bg-popup p-4 transition-transform duration-300 ease-[cubic-bezier(.22,1,.36,1)]",
          open ? "translate-y-0" : "translate-y-full",
          "motion-reduce:transform-none motion-reduce:transition-none",
        )}
      >
        <nav className="mt-4 flex flex-col gap-2">
          <Link to="/components" className="text-sm text-muted-foreground">
            Components
          </Link>
          <Link to="/" className="text-base">
            Home
          </Link>
          <div>
            <Link to="/components" className="text-base">
              Components
            </Link>
            <div className=" ml-4 flex flex-col">
              <Suspense fallback={<SuspenseFallback />}>
                {[...allComponents]
                  .sort((a, b) => a.title.localeCompare(b.title))
                  .map((component) => (
                    <Link
                      key={component.slug}
                      to="/components/$slug"
                      params={{ slug: component.slug }}
                      className="text-base"
                    >
                      {component.title}
                    </Link>
                  ))}
              </Suspense>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}
