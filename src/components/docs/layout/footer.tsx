import { Badge } from "@/components/ui/badge";

export function Footer() {
  return (
    <footer className=" h-12 border-t">
      <div className=" container mx-auto flex h-full items-center border-x px-4">
        <Badge variant={"info"}>Alpha</Badge>
      </div>
    </footer>
  );
}
