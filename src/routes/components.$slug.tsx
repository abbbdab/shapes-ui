import { MDXContent } from "@content-collections/mdx/react";
import { createFileRoute, notFound } from "@tanstack/react-router";
import { allComponents } from "content-collections";
import { useEffect, useState } from "react";

import { PageHeader } from "@/components/docs/layout/page-header";
import { mdxComponents } from "@/components/docs/markdown/components";
import { RenderPreview } from "@/components/docs/markdown/render-preview";

const markdownFiles = import.meta.glob("../../content/components/*.mdx", {
  query: "?url",
  import: "default",
  eager: true,
}) as Record<string, string>;

export const Route = createFileRoute("/components/$slug")({
  loader: ({ params }) => {
    const { slug } = params;
    const component = allComponents?.find((c) => c.slug === slug);

    if (!component) {
      throw notFound();
    }

    const markdownLink = markdownFiles[`../../content/components/${component.slug}.mdx`];

    return {
      ...component,
      markdownLink,
    };
  },
  head: ({ loaderData }) => ({
    meta: [
      {
        charSet: "utf-8",
      },
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1",
      },
      {
        title: `${loaderData?.title} - Shapes UI`,
      },
    ],
    links: [
      {
        rel: "icon",
        href: "/favicon.ico",
      },
    ],
  }),
  component: RouteComponent,
});

function RouteComponent() {
  const component = Route.useLoaderData();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <div className=" flex flex-col gap-6 ">
      <PageHeader
        title={component?.title}
        subtitle={component?.description}
        baseUILink={component?.referenceLink}
        markdownLink={component?.markdownLink}
      />
      <div className="container mx-auto max-w-4xl min-w-0 p-6">
        {isMounted ? (
          <MDXContent code={component.mdx} components={{ ...mdxComponents, RenderPreview }} />
        ) : null}
      </div>
    </div>
  );
}
