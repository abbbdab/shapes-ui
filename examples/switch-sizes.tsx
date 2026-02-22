import { Switch } from "@/components/ui/switch";

export default function SwitchSizes() {
  return (
    <div className="flex gap-3">
      <div className="flex items-center gap-2">
        <Switch id="size-default" size="default">
          Default size
        </Switch>
        <label htmlFor="size-default" className="text-sm">
          Default size
        </label>
      </div>
      <div className="flex items-center gap-2">
        <Switch id="size-sm" size="sm">
          Small size
        </Switch>
        <label htmlFor="size-sm" className="text-sm">
          Small size
        </label>
      </div>
    </div>
  );
}
