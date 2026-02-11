"use client";

import { Tabs } from "@base-ui/react/tabs";
import { TerminalIcon, CheckIcon, CopyIcon } from "lucide-react";
import * as React from "react";

import { cn } from "@/lib/utils";

interface InstallationBlockProps {
  name: string;
}

const PACKAGE_MANAGERS = [
  { id: "npx", label: "npx", command: (name: string) => `npx shapes add ${name}` },
  { id: "bun", label: "bun", command: (name: string) => `bunx shapes add ${name}` },
  { id: "pnpm", label: "pnpm", command: (name: string) => `pnpm dlx shapes add ${name}` },
  { id: "yarn", label: "yarn", command: (name: string) => `yarn dlx shapes add ${name}` },
];

export function InstallationBlock({ name }: InstallationBlockProps) {
  const [copied, setCopied] = React.useState(false);
  const [activeTab, setActiveTab] = React.useState("npx");
  const [highlighted, setHighlighted] = React.useState<string | null>(null);

  const currentCommand = React.useMemo(() => {
    const pm = PACKAGE_MANAGERS.find((p) => p.id === activeTab);
    return pm ? pm.command(name) : `npx shapes add ${name}`;
  }, [activeTab, name]);

  React.useEffect(() => {
    let isActive = true;

    async function highlight() {
      try {
        const { codeToHtml } = await import("shiki");
        const html = await codeToHtml(currentCommand, {
          lang: "bash",
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
      } catch (err) {
        console.error("Failed to highlight command:", err);
      }
    }

    highlight();

    return () => {
      isActive = false;
    };
  }, [currentCommand]);

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(currentCommand);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy!", err);
    }
  };

  return (
    <div className="not-prose my-6 w-full overflow-hidden rounded-xl border bg-background">
      <Tabs.Root value={activeTab} onValueChange={setActiveTab}>
        <div className="flex h-10 items-center justify-between border-b px-3">
          <div className="flex items-center gap-3">
            <div className="flex h-5 w-5 items-center justify-center rounded border bg-muted/50 text-muted-foreground">
              <TerminalIcon className="h-3 w-3" />
            </div>
            <Tabs.List className="flex gap-1">
              {PACKAGE_MANAGERS.map((pm) => (
                <Tabs.Tab
                  key={pm.id}
                  value={pm.id}
                  className={cn(
                    "relative flex h-7 items-center justify-center px-3 text-xs font-medium transition-colors",
                    "text-muted-foreground hover:text-foreground",
                    "data-[active]:rounded-md data-[active]:bg-muted/60 data-[active]:text-foreground",
                  )}
                >
                  {pm.label}
                </Tabs.Tab>
              ))}
            </Tabs.List>
          </div>
          <button
            onClick={copyToClipboard}
            className="flex h-7 w-7 items-center justify-center rounded-md text-muted-foreground transition-colors hover:bg-muted/80 hover:text-foreground"
            aria-label="Copy command"
          >
            {copied ? (
              <CheckIcon className="h-3.5 w-3.5 text-success" />
            ) : (
              <CopyIcon className="h-3.5 w-3.5" />
            )}
          </button>
        </div>

        {PACKAGE_MANAGERS.map((pm) => (
          <Tabs.Panel
            key={pm.id}
            value={pm.id}
            className="relative px-3 py-4 font-mono text-xs leading-relaxed outline-none"
          >
            {highlighted && activeTab === pm.id ? (
              <div className="shiki-wrapper" dangerouslySetInnerHTML={{ __html: highlighted }} />
            ) : (
              <div className="flex items-center gap-4 select-text">
                <span className="w-4 shrink-0 text-right text-muted-foreground/40 select-none">
                  1
                </span>
                <span className="text-muted-foreground/60">{pm.command(name)}</span>
              </div>
            )}
          </Tabs.Panel>
        ))}
      </Tabs.Root>
    </div>
  );
}
