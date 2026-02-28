import { Separator } from "@/components/ui/separator";

export default function SeparatorHorizontal() {
  return (
    <div className="w-full max-w-sm space-y-4">
      <div className="space-y-1">
        <h4 className="text-sm leading-none font-medium">Shapes UI</h4>
        <p className="text-sm text-muted-foreground">Headless components and docs</p>
      </div>
      <Separator />
      <div className="flex h-5 items-center gap-4 text-sm">
        <div>Docs</div>
        <Separator orientation="vertical" />
        <div>Examples</div>
      </div>
    </div>
  );
}
