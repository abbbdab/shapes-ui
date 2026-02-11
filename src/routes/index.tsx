import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({ component: App });

function App() {
  return (
    <div className=" flex-1 ">
      <div className=" container mx-auto flex h-full flex-col items-center justify-center gap-6 p-6">
        <h1 className=" text-center text-4xl font-bold">Build better products. Faster.</h1>
        <div className=" w-fit rounded border bg-accent px-2 py-1 leading-0 text-accent-foreground">
          <span className=" font-mono text-xs uppercase">alpha coming soon</span>
        </div>
      </div>
    </div>
  );
}
