import { Radio, RadioGroup } from "@/components/ui/radio";

export default function RadioDescriptionDemo() {
  return (
    <RadioGroup orientation="vertical" className={"gap-4"}>
      <div className="flex h-fit items-start gap-3">
        <Radio value="comfortable" id="comfortable" className="mt-1" />
        <div className="grid">
          <label htmlFor="comfortable" className="text-sm">
            Default
          </label>
          <p className="text-sm text-muted-foreground">Default spacing for most users.</p>
        </div>
      </div>
      <div className="flex h-fit items-start gap-3">
        <Radio value="compact" id="compact" className="mt-1" />
        <div className="grid">
          <label htmlFor="compact" className="text-sm">
            Compact
          </label>
          <p className="text-sm text-muted-foreground">Reduced spacing for dense layouts.</p>
        </div>
      </div>
    </RadioGroup>
  );
}
