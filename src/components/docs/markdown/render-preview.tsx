import { Tabs } from "@base-ui/react/tabs";
import { examples } from "@examples/__index";
import { Suspense, useEffect, useState } from "react";

import { SuspenseFallback } from "../layout/suspense-fallback";

type RegistryEntry = (typeof examples)[keyof typeof examples];
type ExampleEntry = RegistryEntry["examples"][number];

function findExample(name: string): ExampleEntry | null {
  const componentEntry = examples[name];
  if (componentEntry?.examples?.length) {
    return componentEntry.examples[0];
  }

  for (const entry of Object.values(examples)) {
    const match = entry.examples.find((example) => example.name === name);
    if (match) {
      return match;
    }
  }

  return null;
}

export function RenderPreview({ name }: { name: string }) {
  const [code, setCode] = useState<string | null>(null);
  const [highlighted, setHighlighted] = useState<string | null>(null);
  const example = findExample(name);

  useEffect(() => {
    if (!example) return;
    let isActive = true;

    const rawExamples = import.meta.glob("/examples/**/*.tsx", {
      query: "?raw",
      import: "default",
    });

    const matchingKey = Object.keys(rawExamples).find((key) => key.includes(example.name));

    if (matchingKey) {
      rawExamples[matchingKey]().then(async (mod: any) => {
        const source = mod.default || mod;
        if (!isActive) return;

        setCode(source);

        try {
          const { codeToHtml } = await import("shiki");

          const html = await codeToHtml(source, {
            lang: "tsx",
            themes: {
              light: "github-light",
              dark: "github-dark",
            },
            defaultColor: false,
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
          });

          if (isActive) {
            setHighlighted(html);
          }
        } catch {
          if (isActive) {
            setHighlighted(null);
          }
        }
      });
    }

    return () => {
      isActive = false;
    };
  }, [example]);

  if (!example) {
    return (
      <div className="rounded border border-dashed p-4 text-sm text-muted-foreground">
        Example not found.
      </div>
    );
  }

  const ExampleComponent = example.code;

  return (
    <Tabs.Root className={"my-2 flex flex-col gap-2"}>
      <Tabs.List className={"flex gap-2"}>
        <Tabs.Tab
          value="preview"
          className={
            "px-2 py-1 text-xs text-foreground/80 data-active:bg-accent data-active:font-medium data-active:text-accent-foreground"
          }
        >
          Preview
        </Tabs.Tab>
        <Tabs.Tab
          value="code"
          className={
            "px-2 py-1 text-xs text-foreground/80 data-active:bg-accent data-active:font-medium data-active:text-accent-foreground"
          }
        >
          Code
        </Tabs.Tab>
      </Tabs.List>

      <Tabs.Panel
        value={"preview"}
        className={"flex h-90 items-center justify-center overflow-x-auto border p-4 "}
      >
        <Suspense fallback={<SuspenseFallback />}>
          <ExampleComponent />
        </Suspense>
      </Tabs.Panel>

      <Tabs.Panel
        value={"code"}
        className={
          "flex h-90  items-start justify-start overflow-y-auto border bg-muted/40 p-4 font-mono text-xs "
        }
      >
        {highlighted ? (
          <div className="shiki-wrapper" dangerouslySetInnerHTML={{ __html: highlighted }} />
        ) : (
          <pre className="overflow-x-auto">
            <code>{code ?? "// Loading code..."}</code>
          </pre>
        )}
      </Tabs.Panel>
    </Tabs.Root>
  );
}
