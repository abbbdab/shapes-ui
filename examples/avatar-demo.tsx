import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

export default function AvatarDemo() {
  return (
    <div className="flex items-center gap-4">
      <Avatar>
        <AvatarImage src="/shps_black.svg" alt="Shapes UI" className={"bg-muted"} />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
      <Avatar size="sm">
        <AvatarImage src="/shps_black.svg" alt="Shapes UI" className={"bg-muted"} />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
      <Avatar size="lg">
        <AvatarImage src="/shps_black.svg" alt="Shapes UI" className={"bg-muted"} />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
      <Avatar>
        <AvatarFallback>AB</AvatarFallback>
      </Avatar>
    </div>
  );
}
