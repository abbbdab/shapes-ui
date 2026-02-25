import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function TabsVertical() {
  return (
    <Tabs defaultValue="profile" orientation="vertical">
      <TabsList className="min-w-36">
        <TabsTrigger value="profile">Profile</TabsTrigger>
        <TabsTrigger value="billing">Billing</TabsTrigger>
        <TabsTrigger value="security">Security</TabsTrigger>
      </TabsList>
    </Tabs>
  );
}
