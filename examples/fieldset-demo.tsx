import { Field, FieldLabel, FieldControl } from "@/components/ui/field";
import { Fieldset, FieldsetLegend } from "@/components/ui/fieldset";

export default function FieldsetDemo() {
  return (
    <Fieldset className="max-w-md">
      <FieldsetLegend>Billing Information</FieldsetLegend>
      <div className="space-y-4">
        <Field name="cardNumber">
          <FieldLabel>Card Number</FieldLabel>
          <FieldControl type="text" placeholder="1234 5678 9012 3456" />
        </Field>
        <div className="grid grid-cols-2 gap-4">
          <Field name="expiryDate">
            <FieldLabel>Expiry Date</FieldLabel>
            <FieldControl type="text" placeholder="MM/YY" />
          </Field>
          <Field name="cvv">
            <FieldLabel>CVV</FieldLabel>
            <FieldControl type="text" placeholder="123" />
          </Field>
        </div>
      </div>
    </Fieldset>
  );
}
