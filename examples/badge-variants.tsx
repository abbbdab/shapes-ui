import { Badge } from "@/components/ui/badge";

export default function BadgeVariantDemo() {
  return (
    <div className="flex items-center gap-2">
      <Badge>Default</Badge>
      <Badge variant="secondary">Secondary</Badge>
      <Badge variant="outline">Outline</Badge>
      <Badge variant="ghost">Ghost</Badge>
    </div>
  );
}
