"use client";

import { useState } from "react";

import { Checkbox } from "@/components/ui/checkbox";

export default function CheckboxIndeterminateDemo() {
  const [checkedItems, setCheckedItems] = useState([false, false, false]);

  const allChecked = checkedItems.every(Boolean);
  const isIndeterminate = checkedItems.some(Boolean) && !allChecked;

  return (
    <div className="flex flex-col gap-3">
      <label className="flex items-center gap-2 font-medium">
        <Checkbox
          checked={allChecked}
          indeterminate={isIndeterminate}
          onCheckedChange={(checked) => {
            setCheckedItems([checked, checked, checked]);
          }}
        />
        <span className="text-sm">Select all</span>
      </label>
      <div className="ml-6 flex flex-col gap-2">
        <label className="flex items-center gap-2">
          <Checkbox
            checked={checkedItems[0]}
            onCheckedChange={(checked) => {
              setCheckedItems([checked, checkedItems[1], checkedItems[2]]);
            }}
          />
          <span className="text-sm">Option 1</span>
        </label>
        <label className="flex items-center gap-2">
          <Checkbox
            checked={checkedItems[1]}
            onCheckedChange={(checked) => {
              setCheckedItems([checkedItems[0], checked, checkedItems[2]]);
            }}
          />

          <span className="text-sm">Option 2</span>
        </label>
        <label className="flex items-center gap-2">
          <Checkbox
            checked={checkedItems[2]}
            onCheckedChange={(checked) => {
              setCheckedItems([checkedItems[0], checkedItems[1], checked]);
            }}
          />
          <span className="text-sm">Option 3</span>
        </label>
      </div>
    </div>
  );
}
