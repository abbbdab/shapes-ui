import { TanStackDevtools } from "@tanstack/react-devtools";
import { HeadContent, Scripts, createRootRoute } from "@tanstack/react-router";
import { TanStackRouterDevtoolsPanel } from "@tanstack/react-router-devtools";
import { Suspense } from "react";

import { Footer } from "@/components/docs/layout/footer";
import { Header } from "@/components/docs/layout/header";
import { SuspenseFallback } from "@/components/docs/layout/suspense-fallback";
import { ThemeProvider } from "@/components/docs/theme-provider";
import globalCss from "@/styles/globals.css?url";

export const Route = createRootRoute({
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
        title: "Shapes UI - The better way to build web apps",
      },
    ],
    links: [
      {
        rel: "stylesheet",
        href: globalCss,
      },
      {
        rel: "icon",
        href: "/favicon.ico",
      },
    ],
  }),

  shellComponent: RootDocument,
});

function RootDocument({ children }: { children: React.ReactNode }) {
  return (
    <Suspense fallback={<SuspenseFallback className=" h-dvh" />}>
      <ThemeProvider>
        <html lang="en">
          <head>
            <HeadContent />
          </head>
          <body className="flex h-dvh flex-col">
            <Header />
            <main className=" container mx-auto flex flex-1 overflow-hidden border-x">
              {children}
            </main>
            <Footer />
            <TanStackDevtools
              config={{
                position: "bottom-right",
              }}
              plugins={[
                {
                  name: "Tanstack Router",
                  render: <TanStackRouterDevtoolsPanel />,
                },
              ]}
            />
            <Scripts />
          </body>
        </html>
      </ThemeProvider>
    </Suspense>
  );
}
