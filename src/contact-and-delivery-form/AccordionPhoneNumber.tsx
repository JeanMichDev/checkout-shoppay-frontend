import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
import { useState } from "react";

export const AccordionPhoneNumer = ({ className }: { className?: string }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className={cn(
        "w-full max-w-xl  border px-5 lg:max-w-2xl lg:px-5 ",
        className
      )}
    >
      <Accordion
        type="single"
        className="m-auto max-w-xl  px-4"
        collapsible
        onValueChange={() => setIsOpen(!isOpen)}
      >
        <AccordionItem value="item-1">
          <AccordionTrigger className=" px-1">
            <div className="flex items-center space-x-2">
              <Checkbox id="phoneOffers" checked={isOpen} />
              <Label
                htmlFor="phoneOffers"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Text me with news and offers
              </Label>
            </div>
          </AccordionTrigger>
          <AccordionContent>
            <Input
              placeholder="City"
              type="text"
              className="ring-black ring-offset-0 focus:outline-none focus:ring-1"
            />
            <p className="mt-2">
              By signing up via text, you agree to receive recurring automated
              marketing messages, including cart reminders, at the phone number
              provided. Consent is not a condition of purchase. Reply STOP to
              unsubscribe. Reply HELP for help. Message frequency varies. Msg &
              data rates may apply.
            </p>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};
