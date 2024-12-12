import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { cn } from "@/lib/utils";
import { useState } from "react";

type ShippingOptions = "standard" | "fast";

export const ShippingMethod = ({ className }: { className?: string }) => {
  const [shippingOption, setShippingOption] =
    useState<ShippingOptions>("standard");

  return (
    <RadioGroup
      defaultValue="standard"
      onValueChange={() =>
        shippingOption === "standard"
          ? setShippingOption("fast")
          : setShippingOption("standard")
      }
      className={cn(
        className,
        "w-full flex flex-col gap-0 max-w-xl px-5 lg:max-w-2xl lg:px-5"
      )}
    >
      <Label className="text-xl font-semibold">Shipping method</Label>
      <div
        className={cn(
          "w-full flex items-start justify-start rounded-t-md p-3 transition space-x-2",
          shippingOption === "standard"
            ? "border border-muted-foreground bg-muted"
            : " border"
        )}
      >
        <RadioGroupItem value="standard" id="r1" />
        <Label htmlFor="r1" className="w-full">
          <p className="flex ">
            Standard <span className="ml-auto">€20.00</span>
          </p>
          <p>Delivered in 8-12 days</p>
        </Label>
      </div>
      <div
        className={cn(
          "flex items-start justify-start rounded-b-md p-3 transition  space-x-2",
          shippingOption === "fast"
            ? "border border-muted-foreground bg-muted"
            : "border "
        )}
      >
        <RadioGroupItem value="fast" id="r2" />
        <Label htmlFor="r2" className="w-full">
          <p className="flex">
            Fast <span className="ml-auto">€20.00</span>
          </p>
          <p>Delivered in 2-4 days</p>
        </Label>
      </div>
    </RadioGroup>
  );
};
