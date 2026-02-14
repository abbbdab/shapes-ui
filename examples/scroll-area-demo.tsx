import { ScrollArea } from "@/components/ui/scroll-area";

export default function ScrollAreaDemo() {
  return (
    <div>
      <ScrollArea className={" h-80 rounded-lg border bg-muted py-2"}>
        <div className=" space-y-4 px-4">
          {Array.from({ length: 10 }).map((_, i) => (
            <div key={i} className={"my-2 rounded-lg border bg-card p-4 text-sm"}>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero voluptates debitis
              eos voluptatum vitae vero. Inventore enim corporis officia, optio eos excepturi cumque
              soluta numquam quis hic nobis magnam cum!
            </div>
          ))}
        </div>
      </ScrollArea>
    </div>
  );
}
