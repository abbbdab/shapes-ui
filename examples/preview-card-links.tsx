import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card.tsx";
import { Meter } from "@/components/ui/meter.tsx";
import { PreviewCard, PreviewCardPopup, PreviewCardTrigger } from "@/components/ui/preview-card";
import { Button } from "@/components/ui/button.tsx";
import { Badge } from "@/components/ui/badge.tsx";

export default function PreviewCardLinks() {
  return (
    <PreviewCard>
      <Card size={"sm"} className={"w-md"}>
        <CardHeader className={"flex flex-row items-center justify-between"}>
          <CardTitle>Quote usage</CardTitle>
          <Badge variant={'warning'}>Basic</Badge>
        </CardHeader>
        <CardContent className={'space-y-3'}>
          <Meter value={72} className={"w-full"} />
          <div className={'flex flex-col'}>
            <CardDescription>
              72 out of 100 requests used this <PreviewCardTrigger>month</PreviewCardTrigger>.
            </CardDescription>
          </div>
        </CardContent>
      </Card>
      <PreviewCardPopup side={"bottom"} className={'w-sm p-4'}>
        <div className="flex flex-col gap-2">
          <p className={'text-xs text-muted-foreground'}>Usage resets {new Date(Date.now() + 4 * 7 * 24 * 60 * 60 * 1000).toLocaleDateString()} (4 weeks from now).</p>
          <Button variant={'secondary'} className={'ml-auto'} size={'sm'}>Upgrade to Pro</Button>
        </div>
      </PreviewCardPopup>
    </PreviewCard>
  );
}
