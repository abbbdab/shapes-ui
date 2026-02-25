import { Tabs, TabsPanel, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function TabsDisabled() {
  return (
    <Tabs defaultValue="public" className={"mx-auto w-full max-w-md"}>
      <TabsList>
        <TabsTrigger value="public">Public</TabsTrigger>
        <TabsTrigger value="team">Team</TabsTrigger>
        <TabsTrigger value="enterprise" disabled>
          Enterprise
        </TabsTrigger>
      </TabsList>
      <TabsPanel value="public" className="rounded-lg border p-4 text-sm text-muted-foreground">
        Public documentation is available on all plans.
      </TabsPanel>
      <TabsPanel value="team" className="rounded-lg border p-4 text-sm text-muted-foreground">
        Team features are available on the Pro plan.
      </TabsPanel>
    </Tabs>
  );
}
