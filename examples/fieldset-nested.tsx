import { FieldRoot, FieldLabel, FieldControl, FieldDescription } from "@/components/ui/field";
import { FieldsetRoot, FieldsetLegend } from "@/components/ui/fieldset";

export default function FieldsetNested() {
  return (
    <div className="max-w-2xl space-y-6">
      <FieldsetRoot>
        <FieldsetLegend>Personal Information</FieldsetLegend>
        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <FieldRoot name="firstName">
              <FieldLabel>First Name</FieldLabel>
              <FieldControl type="text" placeholder="John" />
            </FieldRoot>
            <FieldRoot name="lastName">
              <FieldLabel>Last Name</FieldLabel>
              <FieldControl type="text" placeholder="Doe" />
            </FieldRoot>
          </div>
          <FieldRoot name="email">
            <FieldLabel>Email</FieldLabel>
            <FieldControl type="email" placeholder="john.doe@example.com" />
            <FieldDescription>We'll never share your email with anyone else.</FieldDescription>
          </FieldRoot>
        </div>
      </FieldsetRoot>

      <FieldsetRoot>
        <FieldsetLegend>Shipping Address</FieldsetLegend>
        <div className="space-y-4">
          <FieldRoot name="street">
            <FieldLabel>Street Address</FieldLabel>
            <FieldControl type="text" placeholder="123 Main St" />
          </FieldRoot>
          <div className="grid grid-cols-3 gap-4">
            <FieldRoot name="city">
              <FieldLabel>City</FieldLabel>
              <FieldControl type="text" placeholder="New York" />
            </FieldRoot>
            <FieldRoot name="state">
              <FieldLabel>State</FieldLabel>
              <FieldControl type="text" placeholder="NY" />
            </FieldRoot>
            <FieldRoot name="zip">
              <FieldLabel>ZIP Code</FieldLabel>
              <FieldControl type="text" placeholder="10001" />
            </FieldRoot>
          </div>
        </div>
      </FieldsetRoot>
    </div>
  );
}
