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
  "accordion": {
    title: "Accordion",
    code: lazy(() => import("../src/components/ui/accordion").then(m => ({ default: m.Accordion }))),
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
  "alert": {
    title: "Alert",
    code: lazy(() => import("../src/components/ui/alert").then(m => ({ default: m.Alert }))),
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
  "alert-dialog": {
    title: "Alert Dialog",
    code: lazy(() => import("../src/components/ui/alert-dialog").then(m => ({ default: m.AlertDialog }))),
    examples: [
      {
        name: "alert-dialog-icon",
        title: "Icon",
        code: lazy(() => import("./alert-dialog-icon")),
      },
      {
        name: "alert-dialog-destructive",
        title: "Destructive",
        code: lazy(() => import("./alert-dialog-destructive")),
      },
      {
        name: "alert-dialog-demo",
        title: "Demo",
        code: lazy(() => import("./alert-dialog-demo")),
      },
    ],
  },
  "autocomplete": {
    title: "Autocomplete",
    code: lazy(() => import("../src/components/ui/autocomplete").then(m => ({ default: m.Autocomplete }))),
    examples: [
      {
        name: "autocomplete-demo",
        title: "Demo",
        code: lazy(() => import("./autocomplete-demo")),
      },
    ],
  },
  "avatar": {
    title: "Avatar",
    code: lazy(() => import("../src/components/ui/avatar").then(m => ({ default: m.Avatar }))),
    examples: [
      {
        name: "avatar-demo",
        title: "Demo",
        code: lazy(() => import("./avatar-demo")),
      },
    ],
  },
  "badge": {
    title: "Badge",
    code: lazy(() => import("../src/components/ui/badge").then(m => ({ default: m.Badge }))),
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
  "button": {
    title: "Button",
    code: lazy(() => import("../src/components/ui/button").then(m => ({ default: m.Button }))),
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
  "button-group": {
    title: "Button Group",
    code: lazy(() => import("../src/components/ui/button-group").then(m => ({ default: m.ButtonGroup }))),
    examples: [
      {
        name: "button-group-vertical",
        title: "Vertical",
        code: lazy(() => import("./button-group-vertical")),
      },
      {
        name: "button-group-separator",
        title: "Separator",
        code: lazy(() => import("./button-group-separator")),
      },
      {
        name: "button-group-icons",
        title: "Icons",
        code: lazy(() => import("./button-group-icons")),
      },
      {
        name: "button-group-demo",
        title: "Demo",
        code: lazy(() => import("./button-group-demo")),
      },
    ],
  },
  "card": {
    title: "Card",
    code: lazy(() => import("../src/components/ui/card").then(m => ({ default: m.Card }))),
    examples: [
      {
        name: "card-demo",
        title: "Demo",
        code: lazy(() => import("./card-demo")),
      },
    ],
  },
  "checkbox": {
    title: "Checkbox",
    code: lazy(() => import("../src/components/ui/checkbox").then(m => ({ default: m.Checkbox }))),
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
  "collapsible": {
    title: "Collapsible",
    code: lazy(() => import("../src/components/ui/collapsible").then(m => ({ default: m.Collapsible }))),
    examples: [
      {
        name: "collapsible-demo",
        title: "Demo",
        code: lazy(() => import("./collapsible-demo")),
      },
    ],
  },
  "combobox": {
    title: "Combobox",
    code: lazy(() => import("../src/components/ui/combobox").then(m => ({ default: m.Combobox }))),
    examples: [
      {
        name: "combobox-demo",
        title: "Demo",
        code: lazy(() => import("./combobox-demo")),
      },
    ],
  },
  "context-menu": {
    title: "Context Menu",
    code: lazy(() => import("../src/components/ui/context-menu").then(m => ({ default: m.ContextMenu }))),
    examples: [
      {
        name: "context-menu-demo",
        title: "Demo",
        code: lazy(() => import("./context-menu-demo")),
      },
    ],
  },
  "dialog": {
    title: "Dialog",
    code: lazy(() => import("../src/components/ui/dialog").then(m => ({ default: m.Dialog }))),
    examples: [
      {
        name: "dialog-demo",
        title: "Demo",
        code: lazy(() => import("./dialog-demo")),
      },
    ],
  },
  "drawer": {
    title: "Drawer",
    code: lazy(() => import("../src/components/ui/drawer").then(m => ({ default: m.Drawer }))),
    examples: [
      {
        name: "drawer-snap-points",
        title: "Snap Points",
        code: lazy(() => import("./drawer-snap-points")),
      },
      {
        name: "drawer-positions",
        title: "Positions",
        code: lazy(() => import("./drawer-positions")),
      },
      {
        name: "drawer-indent",
        title: "Indent",
        code: lazy(() => import("./drawer-indent")),
      },
      {
        name: "drawer-demo",
        title: "Demo",
        code: lazy(() => import("./drawer-demo")),
      },
      {
        name: "drawer-controlled",
        title: "Controlled",
        code: lazy(() => import("./drawer-controlled")),
      },
    ],
  },
  "field": {
    title: "Field",
    code: lazy(() => import("../src/components/ui/field").then(m => ({ default: m.Field }))),
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
  "fieldset": {
    title: "Fieldset",
    code: lazy(() => import("../src/components/ui/fieldset").then(m => ({ default: m.Fieldset }))),
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
  "form": {
    title: "Form",
    code: lazy(() => import("../src/components/ui/form").then(m => ({ default: m.Form }))),
    examples: [
      {
        name: "form-demo",
        title: "Demo",
        code: lazy(() => import("./form-demo")),
      },
    ],
  },
  "input": {
    title: "Input",
    code: lazy(() => import("../src/components/ui/input").then(m => ({ default: m.Input }))),
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
  "input-group": {
    title: "Input Group",
    code: lazy(() => import("../src/components/ui/input-group").then(m => ({ default: m.InputGroup }))),
    examples: [
      {
        name: "input-group-with-prefix",
        title: "With Prefix",
        code: lazy(() => import("./input-group-with-prefix")),
      },
      {
        name: "input-group-with-button",
        title: "With Button",
        code: lazy(() => import("./input-group-with-button")),
      },
      {
        name: "input-group-status",
        title: "Status",
        code: lazy(() => import("./input-group-status")),
      },
      {
        name: "input-group-phone",
        title: "Phone",
        code: lazy(() => import("./input-group-phone")),
      },
      {
        name: "input-group-password",
        title: "Password",
        code: lazy(() => import("./input-group-password")),
      },
      {
        name: "input-group-email",
        title: "Email",
        code: lazy(() => import("./input-group-email")),
      },
      {
        name: "input-group-demo",
        title: "Demo",
        code: lazy(() => import("./input-group-demo")),
      },
      {
        name: "input-group-copy",
        title: "Copy",
        code: lazy(() => import("./input-group-copy")),
      },
      {
        name: "input-group-actions",
        title: "Actions",
        code: lazy(() => import("./input-group-actions")),
      },
    ],
  },
  "menu": {
    title: "Menu",
    code: lazy(() => import("../src/components/ui/menu").then(m => ({ default: m.Menu }))),
    examples: [
      {
        name: "menu-submenu",
        title: "Submenu",
        code: lazy(() => import("./menu-submenu")),
      },
      {
        name: "menu-radio",
        title: "Radio",
        code: lazy(() => import("./menu-radio")),
      },
      {
        name: "menu-group",
        title: "Group",
        code: lazy(() => import("./menu-group")),
      },
      {
        name: "menu-demo",
        title: "Demo",
        code: lazy(() => import("./menu-demo")),
      },
      {
        name: "menu-checkbox",
        title: "Checkbox",
        code: lazy(() => import("./menu-checkbox")),
      },
      {
        name: "menu-align",
        title: "Align",
        code: lazy(() => import("./menu-align")),
      },
      {
        name: "menu-advanced",
        title: "Advanced",
        code: lazy(() => import("./menu-advanced")),
      },
    ],
  },
  "menubar": {
    title: "Menubar",
    code: lazy(() => import("../src/components/ui/menubar").then(m => ({ default: m.Menubar }))),
    examples: [
      {
        name: "menubar-demo",
        title: "Demo",
        code: lazy(() => import("./menubar-demo")),
      },
    ],
  },
  "meter": {
    title: "Meter",
    code: lazy(() => import("../src/components/ui/meter").then(m => ({ default: m.Meter }))),
    examples: [
      {
        name: "meter-demo",
        title: "Demo",
        code: lazy(() => import("./meter-demo")),
      },
    ],
  },
  "navigation-menu": {
    title: "Navigation Menu",
    code: lazy(() => import("../src/components/ui/navigation-menu").then(m => ({ default: m.NavigationMenu }))),
    examples: [
      {
        name: "navigation-menu-demo",
        title: "Demo",
        code: lazy(() => import("./navigation-menu-demo")),
      },
    ],
  },
  "number-field": {
    title: "Number Field",
    code: lazy(() => import("../src/components/ui/number-field").then(m => ({ default: m.NumberField }))),
    examples: [
      {
        name: "number-field-demo",
        title: "Demo",
        code: lazy(() => import("./number-field-demo")),
      },
    ],
  },
  "popover": {
    title: "Popover",
    code: lazy(() => import("../src/components/ui/popover").then(m => ({ default: m.Popover }))),
    examples: [
      {
        name: "popover-demo",
        title: "Demo",
        code: lazy(() => import("./popover-demo")),
      },
    ],
  },
  "preview-card": {
    title: "Preview Card",
    code: lazy(() => import("../src/components/ui/preview-card").then(m => ({ default: m.PreviewCard }))),
    examples: [
      {
        name: "preview-card-demo",
        title: "Demo",
        code: lazy(() => import("./preview-card-demo")),
      },
    ],
  },
  "progress": {
    title: "Progress",
    code: lazy(() => import("../src/components/ui/progress").then(m => ({ default: m.Progress }))),
    examples: [
      {
        name: "progress-demo",
        title: "Demo",
        code: lazy(() => import("./progress-demo")),
      },
    ],
  },
  "radio": {
    title: "Radio",
    code: lazy(() => import("../src/components/ui/radio").then(m => ({ default: m.Radio }))),
    examples: [
      {
        name: "radio-demo",
        title: "Demo",
        code: lazy(() => import("./radio-demo")),
      },
    ],
  },
  "scroll-area": {
    title: "Scroll Area",
    code: lazy(() => import("../src/components/ui/scroll-area").then(m => ({ default: m.ScrollArea }))),
    examples: [
      {
        name: "scroll-area-demo",
        title: "Demo",
        code: lazy(() => import("./scroll-area-demo")),
      },
    ],
  },
  "select": {
    title: "Select",
    code: lazy(() => import("../src/components/ui/select").then(m => ({ default: m.Select }))),
    examples: [
      {
        name: "select-demo",
        title: "Demo",
        code: lazy(() => import("./select-demo")),
      },
    ],
  },
  "slider": {
    title: "Slider",
    code: lazy(() => import("../src/components/ui/slider").then(m => ({ default: m.Slider }))),
    examples: [
      {
        name: "slider-demo",
        title: "Demo",
        code: lazy(() => import("./slider-demo")),
      },
    ],
  },
  "switch": {
    title: "Switch",
    code: lazy(() => import("../src/components/ui/switch").then(m => ({ default: m.Switch }))),
    examples: [
      {
        name: "switch-demo",
        title: "Demo",
        code: lazy(() => import("./switch-demo")),
      },
    ],
  },
  "tabs": {
    title: "Tabs",
    code: lazy(() => import("../src/components/ui/tabs").then(m => ({ default: m.Tabs }))),
    examples: [
      {
        name: "tabs-demo",
        title: "Demo",
        code: lazy(() => import("./tabs-demo")),
      },
    ],
  },
  "toast": {
    title: "Toast",
    code: lazy(() => import("../src/components/ui/toast").then(m => ({ default: m.Toast }))),
    examples: [
      {
        name: "toast-demo",
        title: "Demo",
        code: lazy(() => import("./toast-demo")),
      },
    ],
  },
  "toggle": {
    title: "Toggle",
    code: lazy(() => import("../src/components/ui/toggle").then(m => ({ default: m.Toggle }))),
    examples: [
      {
        name: "toggle-demo",
        title: "Demo",
        code: lazy(() => import("./toggle-demo")),
      },
    ],
  },
  "toolbar": {
    title: "Toolbar",
    code: lazy(() => import("../src/components/ui/toolbar").then(m => ({ default: m.Toolbar }))),
    examples: [
      {
        name: "toolbar-demo",
        title: "Demo",
        code: lazy(() => import("./toolbar-demo")),
      },
    ],
  },
};
