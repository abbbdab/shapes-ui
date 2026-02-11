import { defineCollection, defineConfig } from "@content-collections/core";
import { compileMDX } from "@content-collections/mdx";
import rehypePrettyCode from "rehype-pretty-code";
import remarkGfm from "remark-gfm";
import { z } from "zod";

const components = defineCollection({
  name: "components",
  directory: "content/components",
  include: "*.mdx",
  schema: z.object({
    title: z.string(),
    slug: z.string(),
    description: z.string().optional(),
    content: z.string(),
  }),
  transform: async (document, context) => {
    const mdx = await compileMDX(context, document, {
      files: (appender) => {
        appender.file(
          "@/components/docs/markdown/render-preview",
          "./src/components/docs/markdown/render-preview.tsx",
        );
      },
      remarkPlugins: [remarkGfm],
      rehypePlugins: [
        [
          rehypePrettyCode,
          {
            theme: {
              light: "github-light",
              dark: "github-dark",
            },
            keepBackground: false,
            transformers: [
              {
                name: "line-numbers",
                pre(node: any) {
                  node.properties["data-line-numbers"] = "";
                },
                line(node: any, line: number) {
                  node.properties.className = ["line"];
                  node.children.unshift({
                    type: "element",
                    tagName: "span",
                    properties: {
                      className: ["line-number"],
                    },
                    children: [{ type: "text", value: String(line) }],
                  });
                },
              },
            ],
          },
        ],
      ],
    });
    return {
      ...document,
      mdx,
    };
  },
});

export default defineConfig({
  collections: [components],
});
