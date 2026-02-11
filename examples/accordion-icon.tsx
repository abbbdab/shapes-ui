import { CreditCardIcon, LockIcon, UserIcon } from "lucide-react";

import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionPanel,
} from "@/components/ui/accordion";

export default function AccordionSmallDemo() {
  return (
    <Accordion size="small" className={"w-96"}>
      <AccordionItem value="item-1">
        <AccordionTrigger>
          <UserIcon />
          Profile settings
        </AccordionTrigger>
        <AccordionPanel>Manage your profile information, avatar and display name.</AccordionPanel>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>
          <LockIcon />
          Account security
        </AccordionTrigger>
        <AccordionPanel>
          Manage your password, two-factor authentication, and account recovery options.
        </AccordionPanel>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>
          <CreditCardIcon />
          Billing information
        </AccordionTrigger>
        <AccordionPanel>
          Update your credit card details, view billing history, and manage your subscription plan.
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  );
}
