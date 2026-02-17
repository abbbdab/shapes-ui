import React from "react";

import {
  Progress,
  ProgressIndicator,
  ProgressLabel,
  ProgressTrack, ProgressValue,
} from "@/components/ui/progress.tsx";

export default function ProgressDemo() {
  const [value, setValue] = React.useState(20);

  React.useEffect(() => {

    if(value >= 100) {
        setTimeout(() => {
            setValue(0);
        }, 1500);
    }
    const interval = setInterval(() => {
      setValue((current) => Math.min(100, Math.round(current + Math.random() * 25)));
    }, 500);
    return () => clearInterval(interval);
  }, [value]);

  return (
    <Progress value={value} className={"w-md"}>
      <ProgressLabel>File upload</ProgressLabel>
      <ProgressValue />
      <ProgressTrack>
        <ProgressIndicator />
      </ProgressTrack>
    </Progress>
  );
}
