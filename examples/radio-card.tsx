import { Radio, RadioGroup } from "@/components/ui/radio";

export default function RadioCardDemo() {
  return (
    <RadioGroup name="card-plan" defaultValue="team" className="gap-4= grid md:grid-cols-2">
      <label
        htmlFor="personal"
        className="flex h-24  cursor-pointer items-start gap-3 rounded-lg border p-4 has-checked:border-primary has-checked:bg-primary/5"
      >
        <Radio value="personal" id="personal" className="mt-0.5" />
        <div className="grid gap-1">
          <span className="font-medium">Personal</span>
          <span className="text-sm text-muted-foreground">For individual use</span>
        </div>
      </label>
      <label
        htmlFor="team"
        className="flex h-24 cursor-pointer items-start gap-3 rounded-lg border p-4 has-checked:border-primary has-checked:bg-primary/5"
      >
        <Radio value="team" id="team" className="mt-0.5" />
        <div className="grid gap-1">
          <span className="font-medium">Team</span>
          <span className="text-sm text-muted-foreground">For small teams</span>
        </div>
      </label>
    </RadioGroup>
  );
}
