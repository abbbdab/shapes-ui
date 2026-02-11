import { Clock10Icon, StarIcon, TriangleAlertIcon, XIcon } from "lucide-react";

import { Badge } from "@/components/ui/badge";

export default function BadgeIconVariantDemo() {
  return (
    <div className="flex items-center gap-2">
      <Badge variant="secondary">
        <StarIcon />
        Features
      </Badge>
      <Badge variant="warning">
        <TriangleAlertIcon />
        Pending payment
      </Badge>
      <Badge variant="info">
        <Clock10Icon />
        Coming soon
      </Badge>
      <Badge variant="destructive">
        <XIcon />
        Task cancelled
      </Badge>
    </div>
  );
}
