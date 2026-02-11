import { Badge } from "@/components/ui/badge";

export default function BadgeVariantDemo() {
  return (
    <div className="flex items-center gap-2">
      <Badge variant="success">Success</Badge>
      <Badge variant="warning">Warning</Badge>
      <Badge variant="info">Info</Badge>
      <Badge variant="destructive">Destructive</Badge>
    </div>
  );
}
