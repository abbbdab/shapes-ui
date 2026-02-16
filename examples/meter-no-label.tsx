import { Meter } from "@/components/ui/meter";

export default function MeterNoLabelDemo() {
  return <Meter className={"w-72"} value={32} label="Storage" showLabel={false} showValue />;
}
