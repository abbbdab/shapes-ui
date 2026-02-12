import { Checkbox } from "@/components/ui/checkbox";

export default function CheckboxDisabledDemo() {
  return (
    <div className="flex flex-col gap-3">
      <label className="flex items-center gap-2">
        <Checkbox disabled />
        <span className="text-sm opacity-50">Disabled unchecked</span>
      </label>
      <label className="flex items-center gap-2">
        <Checkbox disabled defaultChecked />
        <span className="text-sm opacity-50">Disabled checked</span>
      </label>
    </div>
  );
}
