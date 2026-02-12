import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function CardDemo() {
  return (
    <Card className="w-md">
      <CardHeader>
        <CardTitle>Team members</CardTitle>
        <CardDescription>Invite your team to collaborate.</CardDescription>
        <CardAction>
          <Button size="sm">Invite</Button>
        </CardAction>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          <div className="flex items-center gap-3">
            <div className="size-8 rounded-full bg-muted"></div>
            <div className="flex-1">
              <div className="text-sm font-medium">John Apple</div>
              <div className="text-xs text-muted-foreground">john@example.com</div>
            </div>
            <Badge variant="secondary">Admin</Badge>
          </div>
          <div className="flex items-center gap-3">
            <div className="size-8 rounded-full bg-muted"></div>
            <div className="flex-1">
              <div className="text-sm font-medium">Jane Doe</div>
              <div className="text-xs text-muted-foreground">jane@example.com</div>
            </div>
            <Badge variant="outline">Member</Badge>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
