import {
  ContextMenu,
  ContextMenuTrigger,
  ContextMenuPopup,
  ContextMenuItem,
  ContextMenuSeparator,
  ContextMenuGroup,
  ContextMenuLabel,
  ContextMenuCheckboxItem,
  ContextMenuSub,
  ContextMenuSubTrigger,
} from "@/components/ui/context-menu";

export default function ContextMenuDemo() {
  return (
    <div>
      <ContextMenu>
        <ContextMenuTrigger>
          <div className="flex h-40 w-full min-w-md items-center justify-center rounded-xl border border-dashed p-8 text-sm text-foreground hover:bg-muted/20">
            <span>Right click me</span>
          </div>
        </ContextMenuTrigger>
        <ContextMenuPopup>
          <ContextMenuItem>Cut</ContextMenuItem>
          <ContextMenuItem>Copy</ContextMenuItem>
          <ContextMenuItem>Paste</ContextMenuItem>
          <ContextMenuSeparator />
          <ContextMenuSub>
            <ContextMenuSubTrigger>More Options</ContextMenuSubTrigger>
            <ContextMenuPopup>
              <ContextMenuItem>Option 1</ContextMenuItem>
              <ContextMenuItem>Option 2</ContextMenuItem>
            </ContextMenuPopup>
          </ContextMenuSub>
          <ContextMenuSeparator />
          <ContextMenuGroup>
            <ContextMenuLabel>Group 1</ContextMenuLabel>
            <ContextMenuItem>Item 1</ContextMenuItem>
            <ContextMenuItem>Item 2</ContextMenuItem>
          </ContextMenuGroup>
          <ContextMenuSeparator />
          <ContextMenuCheckboxItem checked>Show notifications</ContextMenuCheckboxItem>
        </ContextMenuPopup>
      </ContextMenu>
    </div>
  );
}
