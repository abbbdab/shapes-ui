import React from "react";
import type { ComponentProps } from "react";

import { cn } from "@/lib/utils";

import { InstallationBlock } from "./installation-block";

// Lightweight helpers used by the markdown components.
function getIconForLanguageExtension(_ext: string) {
  // Intentionally minimal: return null so the UI can opt-in later.
  return null;
}

function CopyButton({ value }: { value: string }) {
  const handleCopy = async () => {
    if (typeof navigator === "undefined" || !navigator.clipboard?.writeText) return;
    try {
      await navigator.clipboard.writeText(value);
    } catch {
      /* no-op */
    }
  };

  return (
    <button
      onClick={handleCopy}
      type="button"
      aria-label="Copy"
      className="ml-2 inline-flex items-center rounded-md bg-muted/30 px-2 py-1 text-sm"
    >
      Copy
    </button>
  );
}

function CodeBlockCommand({
  __npm__,
  __yarn__,
  __pnpm__,
  __bun__,
}: {
  __npm__?: string;
  __yarn__?: string;
  __pnpm__?: string;
  __bun__?: string;
}) {
  const commands = [
    ["npm", __npm__],
    ["yarn", __yarn__],
    ["pnpm", __pnpm__],
    ["bun", __bun__],
  ].filter(([, cmd]) => Boolean(cmd)) as Array<[string, string]>;

  if (!commands.length) return null;

  return (
    <div className="my-2 flex items-center gap-2">
      {commands.map(([name, cmd]) => (
        <div
          key={name}
          className="inline-flex items-center gap-2 rounded-md bg-muted/20 px-2 py-1 text-sm"
        >
          <span className="font-mono">{cmd}</span>
          <CopyButton value={cmd} />
        </div>
      ))}
    </div>
  );
}

type TextProps = ComponentProps<"p">;
type LinkProps = ComponentProps<"a">;
type ListProps = ComponentProps<"ul">;
type OrderedListProps = ComponentProps<"ol">;
type ListItemProps = ComponentProps<"li">;
type BlockquoteProps = ComponentProps<"blockquote">;
type PreProps = ComponentProps<"pre">;
type CodeProps = ComponentProps<"code"> & {
  __raw__?: string;
  __src__?: string;
  __npm__?: string;
  __yarn__?: string;
  __pnpm__?: string;
  __bun__?: string;
};
type TableProps = ComponentProps<"table">;
type TableRowProps = ComponentProps<"tr">;
type TableHeaderProps = ComponentProps<"th">;
type TableCellProps = ComponentProps<"td">;

const H1 = ({ className, ...props }: ComponentProps<"h1">) => (
  <h1
    className={cn("mt-2 scroll-m-28 font-heading text-3xl font-bold tracking-tight", className)}
    {...props}
  />
);

const H2 = ({ className, ...props }: ComponentProps<"h2">) => {
  return (
    <h2
      id={props.children
        ?.toString()
        .replace(/ /g, "-")
        .replace(/'/g, "")
        .replace(/\?/g, "")
        .toLowerCase()}
      className={cn(
        "[&+]*:[code]:text-xl mt-10 scroll-m-28 font-heading text-xl font-medium tracking-tight first:mt-0 lg:mt-12 [&+.steps]:!mt-0 [&+.steps>h3]:!mt-4 [&+h3]:!mt-6 [&+p]:!mt-4",
        className,
      )}
      {...props}
    />
  );
};

const H3 = ({ className, ...props }: ComponentProps<"h3">) => (
  <h3
    className={cn(
      "mt-12 scroll-m-28 font-heading text-lg font-medium tracking-tight [&+p]:!mt-4 *:[code]:text-xl",
      className,
    )}
    {...props}
  />
);

const H4 = ({ className, ...props }: ComponentProps<"h4">) => (
  <h4
    className={cn("mt-8 scroll-m-28 font-heading text-base font-medium tracking-tight", className)}
    {...props}
  />
);

const H5 = ({ className, ...props }: ComponentProps<"h5">) => (
  <h5
    className={cn("mt-8 scroll-m-28 text-base font-medium tracking-tight", className)}
    {...props}
  />
);

const H6 = ({ className, ...props }: ComponentProps<"h6">) => (
  <h6
    className={cn("mt-8 scroll-m-28 text-base font-medium tracking-tight", className)}
    {...props}
  />
);

const A = ({ className, ...props }: LinkProps) => (
  <a className={cn("font-medium underline underline-offset-4", className)} {...props} />
);

const P = ({ className, ...props }: TextProps) => (
  <p className={cn(" text-sm leading-relaxed not-first:mt-6", className)} {...props} />
);

const Strong = ({ className, ...props }: React.HTMLAttributes<HTMLElement>) => (
  <strong className={cn("font-medium", className)} {...props} />
);

const Ul = ({ className, ...props }: ListProps) => (
  <ul className={cn("my-6 ml-6 list-disc", className)} {...props} />
);
const Ol = ({ className, ...props }: OrderedListProps) => (
  <ol className={cn("my-6 ml-6 list-decimal", className)} {...props} />
);

const Li = ({ className, ...props }: ListItemProps) => (
  <li className={cn("mt-2", className)} {...props} />
);

const Blockquote = ({ className, ...props }: BlockquoteProps) => (
  <blockquote className={cn("mt-6 border-l-2 pl-6 italic", className)} {...props} />
);

const Img = ({ className, alt = "", ...props }: ComponentProps<"img">) => (
  <img className={cn("rounded-md", className)} alt={alt} {...props} />
);

const Hr = ({ ...props }: ComponentProps<"hr">) => <hr className="my-4 md:my-8" {...props} />;

const Table = ({ className, ...props }: TableProps) => (
  <div className="no-scrollbar my-6 w-full overflow-x-auto rounded-xl border">
    <table
      className={cn(
        "relative w-full min-w-full border-none text-sm [&_tbody_tr:last-child]:border-b-0",
        className,
      )}
      {...props}
    />
  </div>
);

const Tr = ({ className, ...props }: TableRowProps) => (
  <tr className={cn("m-0 border-b", className)} {...props} />
);

const Th = ({ className, ...props }: TableHeaderProps) => (
  <th
    className={cn(
      "px-4 py-2 text-left font-bold [[align=center]]:text-center [[align=right]]:text-right",
      className,
    )}
    {...props}
  />
);

const Td = ({ className, ...props }: TableCellProps) => (
  <td
    className={cn(
      "px-4 py-2 text-left whitespace-nowrap [[align=center]]:text-center [[align=right]]:text-right",
      className,
    )}
    {...props}
  />
);

const Pre = ({ className, children, ...props }: PreProps) => {
  return (
    <pre
      className={cn(
        "no-scrollbar min-w-0 overflow-x-auto overflow-y-auto overscroll-x-contain overscroll-y-auto px-4 py-3.5 outline-none has-data-highlighted-line:px-0 has-data-line-numbers:px-0 has-data-[slot=tabs]:p-0",
        className,
      )}
      {...props}
    >
      {children}
    </pre>
  );
};

const Figure = ({ className, ...props }: ComponentProps<"figure">) => {
  return <figure className={cn(className)} {...props} />;
};

const Figcaption = ({ className, children, ...props }: ComponentProps<"figcaption">) => {
  const iconExtension =
    "data-language" in props && typeof (props as any)["data-language"] === "string"
      ? getIconForLanguageExtension((props as any)["data-language"] as string)
      : null;

  return (
    <figcaption
      className={cn(
        "text-code-foreground [&_svg]:text-code-foreground flex items-center gap-2 [&_svg]:size-4 [&_svg]:opacity-70",
        className,
      )}
      {...props}
    >
      {iconExtension}
      {children}
    </figcaption>
  );
};

const Code = ({
  className,
  __raw__,
  __src__,
  __npm__,
  __yarn__,
  __pnpm__,
  __bun__,
  ...props
}: CodeProps) => {
  // Inline Code.
  if (typeof props.children === "string") {
    return (
      <code
        className={cn(
          "relative rounded-md bg-muted px-[0.3rem] py-[0.2rem] font-mono text-[0.8rem] wrap-break-word outline-none",
          className,
        )}
        {...props}
      />
    );
  }

  // npm command.
  const isNpmCommand = __npm__ && __yarn__ && __pnpm__ && __bun__;
  if (isNpmCommand) {
    return (
      <CodeBlockCommand
        __npm__={__npm__}
        __yarn__={__yarn__}
        __pnpm__={__pnpm__}
        __bun__={__bun__}
      />
    );
  }

  // Default codeblock.
  return (
    <>
      {__raw__ && <CopyButton value={__raw__} />}
      <code className={cn("block min-w-full whitespace-pre", className)} {...(props as any)} />
    </>
  );
};

export const mdxComponents = {
  InstallationBlock,
  h1: H1,
  h2: H2,
  h3: H3,
  h4: H4,
  h5: H5,
  h6: H6,
  a: A,
  p: P,
  strong: Strong,
  ul: Ul,
  ol: Ol,
  li: Li,
  blockquote: Blockquote,
  img: Img,
  hr: Hr,
  table: Table,
  tr: Tr,
  th: Th,
  td: Td,
  pre: Pre,
  figure: Figure,
  figcaption: Figcaption,
  code: Code,
};
