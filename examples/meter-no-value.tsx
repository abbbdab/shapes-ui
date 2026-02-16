import { Meter } from "@/components/ui/meter";

export default function MeterNoValueDemo() {
  return (
    <Meter
      className={"w-72"}
      value={69.3}
      label="Daily allowance"
      showLabel={true}
      showValue={false}
    />
  );
}
