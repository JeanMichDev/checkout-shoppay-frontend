import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { cn } from "@/lib/utils";
import { LargeShopSummary } from "./LargeShopSummary";
import { ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";

export const AccordionShopSummary = ({ className }: { className?: string }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={cn("w-screen bg-muted ", className)}>
      <Accordion
        type="single"
        className="m-auto max-w-xl px-4"
        collapsible
        onValueChange={() => setIsOpen(!isOpen)}
      >
        <AccordionItem value="item-1">
          <AccordionTrigger className=" border-y px-1">
            {isOpen ? (
              <p className="">
                Hide order summary <ChevronUp className="inline size-4" />
              </p>
            ) : (
              <p className="">
                Show order summary <ChevronDown className="inline size-4" />
              </p>
            )}

            <div className="ml-auto">
              <p className="text-right text-xs text-muted-foreground line-through">
                €70.00
              </p>
              <p className="text-lg font-semibold ">€62.5</p>
            </div>
          </AccordionTrigger>
          <AccordionContent>
            <LargeShopSummary isFooterDisplayed={false} />
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};
