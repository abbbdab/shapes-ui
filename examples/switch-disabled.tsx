import { Switch } from "@/components/ui/switch";

export default function SwitchDisabled() {
  return (
    <div className="flex gap-4">
      <div className="flex items-center gap-2">
        <Switch id="size-default" disabled />
        <label htmlFor="size-default" className="text-sm">
          Disabled switch
        </label>
      </div>
      <div className="flex items-center gap-2">
        <Switch id="size-sm" checked disabled />
        <label htmlFor="size-sm" className="text-sm">
          Disabled checked switch
        </label>
      </div>
    </div>
  );
}
