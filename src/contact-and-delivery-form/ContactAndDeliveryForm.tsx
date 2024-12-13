import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
import { CircleHelp } from "lucide-react";
import { AccordionPhoneNumer } from "./AccordionPhoneNumber";

export const ContactAndDeliveryForm = ({
  className,
}: {
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "flex w-full max-w-xl flex-col items-start justify-center gap-4  px-5 lg:max-w-3xl lg:px-5",
        className
      )}
    >
      <h2 className="flex w-full items-baseline">
        <Label htmlFor="emailId" className=" text-xl  font-semibold">
          Contact
        </Label>
        <span className="ml-auto text-sm text-muted-foreground underline">
          Log in
        </span>
      </h2>
      <Input
        placeholder="Email"
        type="email"
        id="emailId"
        className="ring-black ring-offset-0 focus:outline-none focus:ring-1"
      />
      <div className="flex items-center space-x-2">
        <Checkbox id="terms" />
        <Label
          htmlFor="terms"
          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        >
          Email me with news and offers
        </Label>
      </div>
      <h2 className="text-xl font-semibold">Delivery</h2>
      <InputsForDelivery />
    </div>
  );
};

export const InputPhone = () => {
  return (
    <div className="relative w-full">
      <Input
        placeholder="Phone"
        type="text"
        className=" ring-black ring-offset-0 focus:outline-none focus:ring-1"
      />
      <CircleHelp
        size={16}
        className="absolute right-4 top-4 text-muted-foreground"
      />
    </div>
  );
};

export const InputsForDelivery = () => {
  return (
    <div className="flex w-full flex-col gap-2">
      <Input
        placeholder="Country"
        type="text"
        className="ring-black ring-offset-0 focus:outline-none focus:ring-1"
      />
      <Input
        placeholder="First Name"
        type="text"
        className="ring-black ring-offset-0 focus:outline-none focus:ring-1"
      />
      <Input
        placeholder="Last Name"
        type="text"
        className="ring-black ring-offset-0 focus:outline-none focus:ring-1"
      />
      <Input
        placeholder="Company (optional)"
        type="text"
        className="ring-black ring-offset-0 focus:outline-none focus:ring-1"
      />
      <Input
        placeholder="Address (35 characters limit)"
        type="text"
        className="ring-black ring-offset-0 focus:outline-none focus:ring-1"
      />
      <Input
        placeholder="Apartement,suite,etc"
        type="text"
        className="ring-black ring-offset-0 focus:outline-none focus:ring-1"
      />
      <Input
        placeholder="City"
        type="text"
        className="ring-black ring-offset-0 focus:outline-none focus:ring-1"
      />
      <InputPhone />
      <AccordionPhoneNumer />
    </div>
  );
};
