import { describe, expect, it } from "vitest";

import { inferDependencies } from "../scripts/generate-registry.mjs";

describe("inferDependencies", () => {
  it("collects registry deps from alias UI imports", () => {
    const content = [
      'import { Button } from "@/components/ui/button";',
      'import { cn } from "@/lib/utils";',
      'import { AlertDialog as AlertDialogPrimitive } from "@base-ui/react/alert-dialog";',
    ].join("\n");

    const { registryDependencies } = inferDependencies({
      name: "alert-dialog",
      content,
      filePath: "/repo/src/components/ui/alert-dialog.tsx",
      uiDir: "/repo/src/components/ui",
    });

    expect(registryDependencies).toContain("button");
    expect(registryDependencies).not.toContain("utils");
  });

  it("collects registry deps from relative UI imports", () => {
    const content = [
      'import { Separator } from "./separator";',
      'import { cn } from "@/lib/utils";',
    ].join("\n");

    const { registryDependencies } = inferDependencies({
      name: "button-group",
      content,
      filePath: "/repo/src/components/ui/button-group.tsx",
      uiDir: "/repo/src/components/ui",
    });

    expect(registryDependencies).toContain("separator");
    expect(registryDependencies).not.toContain("button-group");
  });

  it("collects npm deps and ignores react packages", () => {
    const content = [
      'import * as React from "react";',
      'import { AlertDialog as AlertDialogPrimitive } from "@base-ui/react/alert-dialog";',
      'import { Moon } from "lucide-react";',
    ].join("\n");

    const { dependencies } = inferDependencies({
      name: "alert-dialog",
      content,
      filePath: "/repo/src/components/ui/alert-dialog.tsx",
      uiDir: "/repo/src/components/ui",
    });

    expect(dependencies).toContain("@base-ui/react");
    expect(dependencies).toContain("lucide-react");
    expect(dependencies).not.toContain("react");
    expect(dependencies).not.toContain("react-dom");
  });
});
