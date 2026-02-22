import { Slider } from "@/components/ui/slider";

export default function SliderEdge() {
  return (
    <Slider
      thumbAlignment="edge"
      defaultValue={[25]}
      max={100}
      step={1}
      className="mx-auto w-full max-w-xs"
    />
  );
}
