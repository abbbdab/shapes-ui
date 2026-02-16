"use client";

import { Button } from "@/components/ui/button";
import { Field, FieldLabel, FieldControl } from "@/components/ui/field";
import {
  Popover,
  PopoverTrigger,
  PopoverPopup,
  PopoverTitle,
  PopoverClose,
} from "@/components/ui/popover";

export default function PopoverFormExample() {
  return (
    <Popover>
      <PopoverTrigger render={<Button>Open Form</Button>} />
      <PopoverPopup>
        <PopoverTitle>User Information</PopoverTitle>
        <div className="space-y-3">
          <Field name="firstName" className="w-full">
            <FieldLabel>First Name</FieldLabel>
            <FieldControl type="text" placeholder="John" />
          </Field>
          <Field name="lastName" className="w-full">
            <FieldLabel>Last Name</FieldLabel>
            <FieldControl type="text" placeholder="Doe" />
          </Field>
          <Field name="email" className="w-full">
            <FieldLabel>Email</FieldLabel>
            <FieldControl type="email" placeholder="john@example.com" />
          </Field>
          <div className="flex justify-end gap-2 pt-2">
            <Button size="sm">Submit</Button>
            <PopoverClose
              render={
                <Button variant="outline" size="sm">
                  Cancel
                </Button>
              }
            />
          </div>
        </div>
      </PopoverPopup>
    </Popover>
  );
}
