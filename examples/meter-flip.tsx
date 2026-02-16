import { Meter } from "@/components/ui/meter";

export default function MeterIndicatorDemo() {
  return (
    <Meter
      className={"w-72 flex-col-reverse"}
      value={32}
      label="Request usage"
      showLabel
      showValue
    />
  );
}
