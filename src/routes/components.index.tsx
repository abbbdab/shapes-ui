import { createFileRoute, Link } from "@tanstack/react-router";
import { allComponents } from "content-collections";

import { PageHeader } from "@/components/docs/layout/page-header";

export const Route = createFileRoute("/components/")({
  component: RouteComponent,
  head: () => ({
    meta: [
      {
        charSet: "utf-8",
      },
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1",
      },
      {
        title: "All components - Shapes UI",
      },
    ],
    links: [
      {
        rel: "icon",
        href: "/favicon.ico?url",
      },
    ],
  }),
});

function RouteComponent() {
  return (
    <div className="flex flex-col gap-6">
      <PageHeader title="Components">
        <p className=" text-sm text-muted-foreground">
          List of all available components. We are working on adding more components.
        </p>
      </PageHeader>

      <div className="mx-auto grid w-full max-w-5xl grid-cols-3 gap-2 p-6">
        {[...allComponents]
          .sort((a, b) => a.title.localeCompare(b.title))
          .map((component) => (
            <Link
              key={component.slug}
              to="/components/$slug"
              params={{ slug: component.slug }}
              className=" rounded border p-4 text-sm hover:bg-accent/40"
            >
              {component.title}
            </Link>
          ))}
      </div>
    </div>
  );
}
