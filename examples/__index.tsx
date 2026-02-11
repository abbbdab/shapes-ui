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
  button: {
    title: "Button",
    code: lazy(() => import("../src/components/ui/button").then(m => ({ default: m.Button || m.default }))),
    examples: [
      {
        name: "button-warning",
        title: "Warning",
        code: lazy(() => import("./button-warning")),
      },
      {
        name: "button-success",
        title: "Success",
        code: lazy(() => import("./button-success")),
      },
      {
        name: "button-sizes",
        title: "Sizes",
        code: lazy(() => import("./button-sizes")),
      },
      {
        name: "button-outline",
        title: "Outline",
        code: lazy(() => import("./button-outline")),
      },
      {
        name: "button-loading",
        title: "Loading",
        code: lazy(() => import("./button-loading")),
      },
      {
        name: "button-link",
        title: "Link",
        code: lazy(() => import("./button-link")),
      },
      {
        name: "button-info",
        title: "Info",
        code: lazy(() => import("./button-info")),
      },
      {
        name: "button-ghost",
        title: "Ghost",
        code: lazy(() => import("./button-ghost")),
      },
      {
        name: "button-destructive",
        title: "Destructive",
        code: lazy(() => import("./button-destructive")),
      },
      {
        name: "button-demo",
        title: "Demo",
        code: lazy(() => import("./button-demo")),
      },
      {
        name: "button-default",
        title: "Default",
        code: lazy(() => import("./button-default")),
      },
    ],
  },
};
