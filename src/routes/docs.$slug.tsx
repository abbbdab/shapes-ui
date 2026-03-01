import { MDXContent } from "@content-collections/mdx/react";
import { createFileRoute, notFound } from "@tanstack/react-router";
import { allDocs } from "content-collections";
import { useEffect, useState } from "react";

import { PageHeader } from "@/components/docs/layout/page-header";
import { mdxComponents } from "@/components/docs/markdown/components";
import { RenderPreview } from "@/components/docs/markdown/render-preview";

const markdownFiles = import.meta.glob("../../content/docs/*.mdx", {
  query: "?url",
  import: "default",
  eager: true,
}) as Record<string, string>;

export const Route = createFileRoute("/docs/$slug")({
  loader: ({ params }) => {
    const { slug } = params;
    const doc = allDocs?.find((d) => d.slug === slug);

    if (!doc) {
      throw notFound();
    }

    const markdownLink = markdownFiles[`../../content/docs/${doc.slug}.mdx`];

    return {
      ...doc,
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
  const doc = Route.useLoaderData();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <div className=" flex flex-col gap-6 ">
      <PageHeader
        title={doc?.title}
        subtitle={doc?.description}
        baseUILink={doc?.referenceLink}
        markdownLink={doc?.markdownLink}
      />
      <div data-docs-content className="container mx-auto max-w-4xl min-w-0 p-6">
        {isMounted ? (
          <MDXContent code={doc.mdx} components={{ ...mdxComponents, RenderPreview }} />
        ) : null}
      </div>
    </div>
  );
}
