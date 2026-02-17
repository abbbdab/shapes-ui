import { Meter, MeterLabel, MeterValue, MeterIndicator, MeterTrack } from "@/components/ui/meter";

export default function MeterDemo() {
  return (
    <Meter className={"w-72"} value={54}>
      <MeterLabel>Progress</MeterLabel>
      <MeterValue />
      <MeterTrack>
        <MeterIndicator />
      </MeterTrack>
    </Meter>
  );
}
