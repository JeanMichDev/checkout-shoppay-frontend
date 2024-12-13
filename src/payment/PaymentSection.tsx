import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { InputsForDelivery } from "@/contact-and-delivery-form/ContactAndDeliveryForm";
import { cn } from "@/lib/utils";
import { useState } from "react";

type PaymentMethod = "creditCard" | "paypal" | "shopPay";

export const PaymentSection = ({ className }: { className?: string }) => {
  const [paymentMethod, setPaymentMethod] =
    useState<PaymentMethod>("creditCard");
  console.log(paymentMethod);

  const [isBillingAdressChecked, setIsBillingAdressChecked] = useState(true);

  return (
    <div
      className={cn(
        "flex w-full max-w-xl flex-col items-start justify-start gap-4 px-5 lg:max-w-3xl ",
        className
      )}
    >
      <h2 className=" text-2xl  font-semibold">Payment</h2>
      <p className="text-base text-muted-foreground">
        All transactions are secure and encrypted
      </p>
      <RadioGroup
        defaultValue="creditCard"
        onValueChange={(value) => setPaymentMethod(value as PaymentMethod)}
        className={cn("w-full flex flex-col gap-0 ")}
      >
        <div
          className={cn(
            "w-full flex items-start justify-start rounded-t-md p-3 transition space-x-2",
            paymentMethod === "creditCard"
              ? "border border-muted-foreground bg-muted"
              : " border"
          )}
        >
          <RadioGroupItem value="creditCard" id="r1" />
          <Label
            htmlFor="r1"
            className="flex h-4 w-full items-center justify-center"
          >
            <p>CreditCard</p>
            <div className="ml-auto flex items-center justify-center gap-2">
              <img
                src="https://cdn.svgporn.com/logos/visa.svg"
                alt="visa"
                className=" h-4"
              />
              <img
                src="https://cdn.svgporn.com/logos/amex.svg"
                alt="AM"
                className=" h-4"
              />
              <img
                src="https://cdn.svgporn.com/logos/mastercard.svg"
                alt="Master Card"
                className=" h-4"
              />
            </div>
          </Label>
        </div>
        {paymentMethod === "creditCard" ? (
          <div className="flex w-full flex-col items-center justify-center gap-4 border p-4 transition">
            <Input
              placeholder="Card Number"
              type="number"
              className="ring-black ring-offset-0 focus:outline-none focus:ring-1"
            />
            <Input
              placeholder="Expiration Date (MM/YY)"
              type="number"
              className="ring-black ring-offset-0 focus:outline-none focus:ring-1"
            />
            <Input
              placeholder="CVC"
              type="number"
              className="ring-black ring-offset-0 focus:outline-none focus:ring-1"
            />
            <Input
              placeholder="Name on card"
              type="text"
              className="ring-black ring-offset-0 focus:outline-none focus:ring-1"
            />
            <Accordion
              type="single"
              className="m-auto w-full max-w-xl "
              collapsible
              onValueChange={() =>
                setIsBillingAdressChecked(!isBillingAdressChecked)
              }
            >
              <AccordionItem value="item-1">
                <AccordionTrigger asChild>
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="billingAdress"
                      checked={isBillingAdressChecked}
                    />
                    <Label
                      htmlFor="billingAdress"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Use shipping address as billing adress
                    </Label>
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  <div className="flex w-full flex-col items-center justify-center gap-4 p-1 transition">
                    <InputsForDelivery />
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        ) : null}
        <div
          className={cn(
            "flex items-start justify-start  p-3 transition  space-x-2",
            paymentMethod === "paypal"
              ? "border border-muted-foreground bg-muted"
              : "border "
          )}
        >
          <RadioGroupItem value="paypal" id="r2" />
          <Label
            htmlFor="r2"
            className="flex h-4 w-full items-center justify-center"
          >
            <p>Paypal</p>
            <img
              src="https://imgs.search.brave.com/dB19qbGrhA-t8i5tTr_DD902j1Y3cfXfnMi324iGatE/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9mcmVl/bG9nb3BuZy5jb20v/aW1hZ2VzL2FsbF9p/bWcvMTY1NTk3OTI5/OHBheXBhbC1sb2dv/LXBuZy10cmFuc3Bh/cmVudC5wbmc"
              alt="Paypal"
              className="ml-auto h-full "
            />
          </Label>
        </div>
        {paymentMethod === "paypal" ? (
          <div className="flex w-full flex-col items-center justify-center gap-4 border p-4 transition">
            <div className="flex h-20 w-full items-center justify-center border-4 border-dashed border-blue-400">
              Placeholder
            </div>
          </div>
        ) : null}
        <div
          className={cn(
            "flex items-center justify-start rounded-b-md p-3 transition  space-x-2",
            paymentMethod === "shopPay"
              ? "border border-muted-foreground bg-muted"
              : "border "
          )}
        >
          <RadioGroupItem value="shopPay" id="r3" />
          <Label htmlFor="r2" className=" flex w-full items-center gap-2 ">
            <p>Shopay</p>
            <img src="../images/shoppay.png" alt="Shopay" className=" h-4" />
            <p className="text-sm font-normal text-muted-foreground">
              | Pay in full or in installments
            </p>
          </Label>
        </div>
      </RadioGroup>
    </div>
  );
};
