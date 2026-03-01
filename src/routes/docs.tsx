import { createFileRoute, Outlet } from "@tanstack/react-router";

import { SplitLayout } from "@/components/docs/layout/split-layout";

export const Route = createFileRoute("/docs")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <SplitLayout>
      <Outlet />
    </SplitLayout>
  );
}
