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
        name: "alert-dialog-icon",
        title: "Dialog Icon",
        code: lazy(() => import("./alert-dialog-icon")),
      },
      {
        name: "alert-dialog-destructive",
        title: "Dialog Destructive",
        code: lazy(() => import("./alert-dialog-destructive")),
      },
      {
        name: "alert-dialog-demo",
        title: "Dialog Demo",
        code: lazy(() => import("./alert-dialog-demo")),
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
  badge: {
    title: "Badge",
    code: lazy(() => import("../src/components/ui/badge").then(m => ({ default: m.Badge || m.default }))),
    examples: [
      {
        name: "badge-variants",
        title: "Variants",
        code: lazy(() => import("./badge-variants")),
      },
      {
        name: "badge-status-icon",
        title: "Status Icon",
        code: lazy(() => import("./badge-status-icon")),
      },
      {
        name: "badge-status",
        title: "Status",
        code: lazy(() => import("./badge-status")),
      },
      {
        name: "badge-demo",
        title: "Demo",
        code: lazy(() => import("./badge-demo")),
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
        name: "button-group-vertical",
        title: "Group Vertical",
        code: lazy(() => import("./button-group-vertical")),
      },
      {
        name: "button-group-separator",
        title: "Group Separator",
        code: lazy(() => import("./button-group-separator")),
      },
      {
        name: "button-group-icons",
        title: "Group Icons",
        code: lazy(() => import("./button-group-icons")),
      },
      {
        name: "button-group-demo",
        title: "Group Demo",
        code: lazy(() => import("./button-group-demo")),
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
