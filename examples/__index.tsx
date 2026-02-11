import type React from "react";
import { lazy } from "react";

type ExampleRegistry = Record<string, Example>;

type Example = {
  title: string;
  code: React.LazyExoticComponent<React.FC>;
  examples: Array<{
    name: string;
    title: string;
    code: React.LazyExoticComponent<React.FC>;
  }>;
};

export const examples: ExampleRegistry = {
  accordion: {
    title: "Accordion",
    code: lazy(() => import("../src/components/ui/accordion").then(m => ({ default: m.Accordion || m.default }))),
    examples: [
      {
        name: "accordion-surface",
        title: "Surface",
        code: lazy(() => import("./accordion-surface")),
      },
      {
        name: "accordion-small",
        title: "Small",
        code: lazy(() => import("./accordion-small")),
      },
      {
        name: "accordion-multiple",
        title: "Multiple",
        code: lazy(() => import("./accordion-multiple")),
      },
      {
        name: "accordion-icon",
        title: "Icon",
        code: lazy(() => import("./accordion-icon")),
      },
      {
        name: "accordion-demo",
        title: "Demo",
        code: lazy(() => import("./accordion-demo")),
      },
    ],
  },
};
