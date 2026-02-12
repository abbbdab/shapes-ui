import { Checkbox } from "@/components/ui/checkbox";

export default function CheckboxWithTextDemo() {
  return (
    <div className="flex flex-col gap-3">
      <label className="flex items-center gap-2">
        <Checkbox />
        <span className="text-sm">Email notifications</span>
      </label>
      <label className="flex items-center gap-2">
        <Checkbox />
        <span className="text-sm">SMS notifications</span>
      </label>
      <label className="flex items-center gap-2">
        <Checkbox />
        <span className="text-sm">Push notifications</span>
      </label>
    </div>
  );
}
