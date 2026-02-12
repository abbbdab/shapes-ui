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
  card: {
    title: "Card",
    code: lazy(() => import("../src/components/ui/card").then(m => ({ default: m.Card || m.default }))),
    examples: [
      {
        name: "card-demo",
        title: "Demo",
        code: lazy(() => import("./card-demo")),
      },
    ],
  },
  checkbox: {
    title: "Checkbox",
    code: lazy(() => import("../src/components/ui/checkbox").then(m => ({ default: m.Checkbox || m.default }))),
    examples: [
      {
        name: "checkbox-with-text",
        title: "With Text",
        code: lazy(() => import("./checkbox-with-text")),
      },
      {
        name: "checkbox-with-field",
        title: "With Field",
        code: lazy(() => import("./checkbox-with-field")),
      },
      {
        name: "checkbox-indeterminate",
        title: "Indeterminate",
        code: lazy(() => import("./checkbox-indeterminate")),
      },
      {
        name: "checkbox-form",
        title: "Form",
        code: lazy(() => import("./checkbox-form")),
      },
      {
        name: "checkbox-disabled",
        title: "Disabled",
        code: lazy(() => import("./checkbox-disabled")),
      },
      {
        name: "checkbox-demo",
        title: "Demo",
        code: lazy(() => import("./checkbox-demo")),
      },
    ],
  },
  collapsible: {
    title: "Collapsible",
    code: lazy(() => import("../src/components/ui/collapsible").then(m => ({ default: m.Collapsible || m.default }))),
    examples: [
      {
        name: "collapsible-demo",
        title: "Demo",
        code: lazy(() => import("./collapsible-demo")),
      },
    ],
  },
  dialog: {
    title: "Dialog",
    code: lazy(() => import("../src/components/ui/dialog").then(m => ({ default: m.Dialog || m.default }))),
    examples: [
      {
        name: "dialog-demo",
        title: "Demo",
        code: lazy(() => import("./dialog-demo")),
      },
    ],
  },
  field: {
    title: "Field",
    code: lazy(() => import("../src/components/ui/field").then(m => ({ default: m.Field || m.default }))),
    examples: [
      {
        name: "field-validation",
        title: "Validation",
        code: lazy(() => import("./field-validation")),
      },
      {
        name: "field-description",
        title: "Description",
        code: lazy(() => import("./field-description")),
      },
      {
        name: "field-demo",
        title: "Demo",
        code: lazy(() => import("./field-demo")),
      },
      {
        name: "field-custom-control",
        title: "Custom Control",
        code: lazy(() => import("./field-custom-control")),
      },
      {
        name: "field-composition",
        title: "Composition",
        code: lazy(() => import("./field-composition")),
      },
    ],
  },
  fieldset: {
    title: "Fieldset",
    code: lazy(() => import("../src/components/ui/fieldset").then(m => ({ default: m.Fieldset || m.default }))),
    examples: [
      {
        name: "fieldset-nested",
        title: "Nested",
        code: lazy(() => import("./fieldset-nested")),
      },
      {
        name: "fieldset-demo",
        title: "Demo",
        code: lazy(() => import("./fieldset-demo")),
      },
    ],
  },
  input: {
    title: "Input",
    code: lazy(() => import("../src/components/ui/input").then(m => ({ default: m.Input || m.default }))),
    examples: [
      {
        name: "input-required",
        title: "Required",
        code: lazy(() => import("./input-required")),
      },
      {
        name: "input-password",
        title: "Password",
        code: lazy(() => import("./input-password")),
      },
      {
        name: "input-label",
        title: "Label",
        code: lazy(() => import("./input-label")),
      },
      {
        name: "input-invalid",
        title: "Invalid",
        code: lazy(() => import("./input-invalid")),
      },
      {
        name: "input-group-with-prefix",
        title: "Group With Prefix",
        code: lazy(() => import("./input-group-with-prefix")),
      },
      {
        name: "input-group-with-button",
        title: "Group With Button",
        code: lazy(() => import("./input-group-with-button")),
      },
      {
        name: "input-group-status",
        title: "Group Status",
        code: lazy(() => import("./input-group-status")),
      },
      {
        name: "input-group-phone",
        title: "Group Phone",
        code: lazy(() => import("./input-group-phone")),
      },
      {
        name: "input-group-password",
        title: "Group Password",
        code: lazy(() => import("./input-group-password")),
      },
      {
        name: "input-group-email",
        title: "Group Email",
        code: lazy(() => import("./input-group-email")),
      },
      {
        name: "input-group-demo",
        title: "Group Demo",
        code: lazy(() => import("./input-group-demo")),
      },
      {
        name: "input-group-copy",
        title: "Group Copy",
        code: lazy(() => import("./input-group-copy")),
      },
      {
        name: "input-group-actions",
        title: "Group Actions",
        code: lazy(() => import("./input-group-actions")),
      },
      {
        name: "input-file",
        title: "File",
        code: lazy(() => import("./input-file")),
      },
      {
        name: "input-disabled",
        title: "Disabled",
        code: lazy(() => import("./input-disabled")),
      },
      {
        name: "input-demo",
        title: "Demo",
        code: lazy(() => import("./input-demo")),
      },
    ],
  },
};
