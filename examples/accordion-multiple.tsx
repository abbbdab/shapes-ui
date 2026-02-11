import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionPanel,
} from "@/components/ui/accordion";

export default function AccordionMultipleDemo() {
  return (
    <Accordion multiple className={"w-96"}>
      <AccordionItem value="item-1">
        <AccordionTrigger>Personal information</AccordionTrigger>
        <AccordionPanel>Name, email, and phone number details.</AccordionPanel>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>Billing address</AccordionTrigger>
        <AccordionPanel>Street address, city, state, and zip code.</AccordionPanel>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>Shipping address</AccordionTrigger>
        <AccordionPanel>
          Street address, city, state, and zip code, best delivery contact.
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  );
}
