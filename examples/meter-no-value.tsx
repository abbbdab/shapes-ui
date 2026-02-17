import { Meter, MeterIndicator, MeterLabel, MeterTrack } from "@/components/ui/meter";

export default function MeterNoValueDemo() {
  return (
    <Meter className={"w-72"} value={54}>
      <MeterLabel>File transfer</MeterLabel>
      <MeterTrack>
        <MeterIndicator />
      </MeterTrack>
    </Meter>
  );
}
