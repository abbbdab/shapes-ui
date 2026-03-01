import { IconMarkdown } from "@tabler/icons-react";
import { ChevronDownIcon } from "lucide-react";
import { ComponentProps } from "react";

import BaseUI from "@/assets/base-ui.svg?url";
import { Button } from "@/components/ui/button";
import { ButtonGroup, ButtonGroupSeparator, ButtonGroupText } from "@/components/ui/button-group";
import { Menu, MenuItem, MenuPopup, MenuTrigger } from "@/components/ui/menu";
import { cn } from "@/lib/utils";

export function PageHeader({
  title,
  subtitle,
  children,
  baseUILink,
  markdownLink,
  className,
  ...props
}: ComponentProps<"div"> & {
  title: string;
  subtitle?: string;
  baseUILink?: string;
  markdownLink?: string;
}) {
  const handleOpenMarkdown = () => {
    if (!markdownLink) {
      return;
    }

    window.open(markdownLink, "_blank", "noopener,noreferrer");
  };

  return (
    <div
      className={cn(
        "flex items-start justify-between overflow-hidden bg-background max-w-7xl mx-auto p-4 lg:px-0  ",
        className,
      )}
      {...props}
    >
      <div className=" flex flex-col">
        <h1 className="font-heading text-2xl font-bold xl:text-3xl">{title}</h1>
        {subtitle && <p className="text-xs w-2/3 text-muted-foreground md:text-sm">{subtitle}</p>}
        {children}
      </div>

      <div className="flex flex-col">
        <ButtonGroup>
          <ButtonGroupText>
            View
        </ButtonGroupText>
          <ButtonGroupSeparator />
          <Menu>
            <MenuTrigger
              render={
                <Button variant={"secondary"} size={"icon"}>
                  <ChevronDownIcon />
                </Button>
              }
            />
            <MenuPopup align="end">
              <MenuItem onClick={handleOpenMarkdown} disabled={!markdownLink}>
                <IconMarkdown />
                Markdown
              </MenuItem>
              {baseUILink && (
                <MenuItem>
                  <img className="size-4" alt="Base UI" src={BaseUI} />
                  Base UI
                </MenuItem>
              )}
            </MenuPopup>
          </Menu>
        </ButtonGroup>
      </div>
    </div>
  );
}
