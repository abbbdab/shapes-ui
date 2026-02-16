"use client";

import React from "react";

import { Button } from "@/components/ui/button";
import { ButtonGroup } from "@/components/ui/button-group";
import {
  Popover,
  PopoverTrigger,
  PopoverPopup,
  PopoverTitle,
  PopoverDescription,
  PopoverClose,
} from "@/components/ui/popover";

export default function PopoverPositionsExample() {
  const [activePosition, setActivePosition] = React.useState(positions[0]);
  return (
    <div className="flex flex-wrap gap-4">
      <Popover>
        <ButtonGroup>
          {positions.map((pos) => (
            <PopoverTrigger
              key={pos.side}
              render={<Button variant={"outline"}>{pos.label}</Button>}
              onClick={() => setActivePosition(pos)}
            />
          ))}
        </ButtonGroup>
        <PopoverPopup side={activePosition.side}>
          <PopoverTitle>Position Example</PopoverTitle>
          <PopoverDescription>
            This popover is positioned on the {activePosition.label.toLowerCase()} side.
          </PopoverDescription>
          <PopoverClose
            render={
              <Button variant="ghost" size="sm" className={"ml-auto"}>
                Close
              </Button>
            }
          />
        </PopoverPopup>
      </Popover>
    </div>
  );
}

const positions: Position[] = [
  { label: "Left", side: "left" },
  { label: "Center", side: "bottom" },
  { label: "Right", side: "right" },
];

type Position = { label: string; side: "top" | "right" | "bottom" | "left" };
