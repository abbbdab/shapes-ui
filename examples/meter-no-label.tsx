import { Meter, MeterIndicator, MeterTrack, MeterValue } from "@/components/ui/meter";

export default function MeterNoLabelDemo() {
  return (
    <Meter className={"w-72"} value={54}>
      <MeterValue className={"col-span-2 text-left"} />
      <MeterTrack>
        <MeterIndicator />
      </MeterTrack>
    </Meter>
  );
}
