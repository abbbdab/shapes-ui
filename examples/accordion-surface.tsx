import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionPanel,
} from "@/components/ui/accordion";

export default function AccordionSurfaceDemo() {
  return (
    <Accordion size={"small"} variant="surface" className={"w-96"}>
      <AccordionItem value="item-1">
        <AccordionTrigger>Is it accessible?</AccordionTrigger>
        <AccordionPanel>Yes. It adheres to the WAI-ARIA design pattern.</AccordionPanel>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>Is it styled?</AccordionTrigger>
        <AccordionPanel>
          Yes. It comes with default styles that are customizable with CSS variables.
        </AccordionPanel>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>Is it animated?</AccordionTrigger>
        <AccordionPanel>
          Yes. It uses the data-accordion-collapsed and data-accordion-expanded attributes to toggle
          the animation.
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  );
}
