import { Toggle, ToggleGroup } from "@/components/ui/toggle";
import { Bold, Italic, Underline } from "lucide-react";

export const toggleDemo = () => {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col gap-2">
        <p className="text-sm font-medium">Single Toggle</p>
        <Toggle>
          <Bold />
          Bold
        </Toggle>
      </div>

      <div className="flex flex-col gap-2">
        <p className="text-sm font-medium">Toggle Group</p>
        <ToggleGroup>
          <Toggle>
            <Bold />
          </Toggle>
          <Toggle>
            <Italic />
          </Toggle>
          <Toggle>
            <Underline />
          </Toggle>
        </ToggleGroup>
      </div>

      <div className="flex flex-col gap-2">
        <p className="text-sm font-medium">Toggle Sizes</p>
        <div className="flex gap-2">
          <Toggle size="sm">
            <Bold className="size-3" />
          </Toggle>
          <Toggle>
            <Bold />
          </Toggle>
          <Toggle size="lg">
            <Bold />
          </Toggle>
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <p className="text-sm font-medium">Toggle Variants</p>
        <div className="flex gap-2">
          <Toggle variant="default">Default</Toggle>
          <Toggle variant="outline">Outline</Toggle>
        </div>
      </div>
    </div>
  );
};
