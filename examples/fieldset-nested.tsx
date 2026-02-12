import { Field, FieldLabel, FieldControl, FieldDescription } from "@/components/ui/field";
import { Fieldset, FieldsetLegend } from "@/components/ui/fieldset";

export default function FieldsetNested() {
  return (
    <div className="max-w-2xl space-y-6">
      <Fieldset>
        <FieldsetLegend>Personal Information</FieldsetLegend>
        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <Field name="firstName">
              <FieldLabel>First Name</FieldLabel>
              <FieldControl type="text" placeholder="John" />
            </Field>
            <Field name="lastName">
              <FieldLabel>Last Name</FieldLabel>
              <FieldControl type="text" placeholder="Doe" />
            </Field>
          </div>
          <Field name="email">
            <FieldLabel>Email</FieldLabel>
            <FieldControl type="email" placeholder="john.doe@example.com" />
            <FieldDescription>We'll never share your email with anyone else.</FieldDescription>
          </Field>
        </div>
      </Fieldset>

      <Fieldset>
        <FieldsetLegend>Shipping Address</FieldsetLegend>
        <div className="space-y-4">
          <Field name="street">
            <FieldLabel>Street Address</FieldLabel>
            <FieldControl type="text" placeholder="123 Main St" />
          </Field>
          <div className="grid grid-cols-3 gap-4">
            <Field name="city">
              <FieldLabel>City</FieldLabel>
              <FieldControl type="text" placeholder="New York" />
            </Field>
            <Field name="state">
              <FieldLabel>State</FieldLabel>
              <FieldControl type="text" placeholder="NY" />
            </Field>
            <Field name="zip">
              <FieldLabel>ZIP Code</FieldLabel>
              <FieldControl type="text" placeholder="10001" />
            </Field>
          </div>
        </div>
      </Fieldset>
    </div>
  );
}
