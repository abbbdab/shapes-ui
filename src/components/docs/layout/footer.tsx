import { Badge } from "@/components/ui/badge";

export function Footer() {
  return (
    <footer className=" z-10 h-12">
      <div className=" container mx-auto flex h-full items-center  px-4">
        <Badge variant={"info"}>Alpha</Badge>
      </div>
    </footer>
  );
}
