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
  alert: {
    title: "Alert",
    code: lazy(() => import("../src/components/ui/alert").then(m => ({ default: m.Alert || m.default }))),
    examples: [
      {
        name: "alert-warning",
        title: "Warning",
        code: lazy(() => import("./alert-warning")),
      },
      {
        name: "alert-title",
        title: "Title",
        code: lazy(() => import("./alert-title")),
      },
      {
        name: "alert-success",
        title: "Success",
        code: lazy(() => import("./alert-success")),
      },
      {
        name: "alert-link",
        title: "Link",
        code: lazy(() => import("./alert-link")),
      },
      {
        name: "alert-info",
        title: "Info",
        code: lazy(() => import("./alert-info")),
      },
      {
        name: "alert-destructive",
        title: "Destructive",
        code: lazy(() => import("./alert-destructive")),
      },
      {
        name: "alert-description",
        title: "Description",
        code: lazy(() => import("./alert-description")),
      },
      {
        name: "alert-demo",
        title: "Demo",
        code: lazy(() => import("./alert-demo")),
      },
      {
        name: "alert-action",
        title: "Action",
        code: lazy(() => import("./alert-action")),
      },
    ],
  },
};
