import { Tabs, TabsPanel, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function TabsDemo() {
  return (
    <Tabs defaultValue="account" className={"mx-auto w-full max-w-md"}>
      <TabsList>
        <TabsTrigger value="account">Account</TabsTrigger>
        <TabsTrigger value="notifications">Notifications</TabsTrigger>
      </TabsList>
      <TabsPanel value="account">Manage your profile, password, and security settings.</TabsPanel>
      <TabsPanel value="notifications">
        Control email and in-app notification preferences.
      </TabsPanel>
    </Tabs>
  );
}
