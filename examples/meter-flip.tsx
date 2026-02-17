import { Meter, MeterIndicator, MeterLabel, MeterTrack, MeterValue } from "@/components/ui/meter";

export default function MeterIndicatorDemo() {
  return (
    <Meter className={"w-72"} value={32}>
      <MeterTrack>
        <MeterIndicator />
      </MeterTrack>
      <MeterLabel>Progress</MeterLabel>
      <MeterValue />
    </Meter>
  );
}
