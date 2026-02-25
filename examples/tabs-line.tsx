import { Tabs, TabsPanel, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function TabsLine() {
  return (
    <Tabs defaultValue="overview" className={"mx-auto w-full max-w-md"}>
      <TabsList variant="line">
        <TabsTrigger value="overview">Overview</TabsTrigger>
        <TabsTrigger value="analytics">Analytics</TabsTrigger>
      </TabsList>
      <TabsPanel value="overview" className="pt-2 text-sm text-muted-foreground">
        Review key account trends and recent activity.
      </TabsPanel>
      <TabsPanel value="analytics" className="pt-2 text-sm text-muted-foreground">
        Compare traffic, retention, and conversion metrics.
      </TabsPanel>
    </Tabs>
  );
}
