import { InputWithButton } from "@/components/ui/inputWithButton";
import { cn } from "@/lib/utils";
import { CircleCheck, Tag, Tags } from "lucide-react";

export const LargeShopSummary = ({
  className,
  isFooterDisplayed,
}: {
  className?: string;
  isFooterDisplayed: boolean;
}) => {
  return (
    <div
      className={cn(
        "w-full bg-muted px-1 mt-4 flex  flex-col gap-4 lg:gap-2",
        className
      )}
    >
      <div className=" flex flex-row items-center justify-center gap-2 text-sm">
        <ImgProductWithQuantity />
        <p>AC Adapter - 65W | Slim | Carbide</p>
        <span className="ml-auto">€70.00</span>
      </div>
      <InputWithButton
        inputType="text"
        placeholder="Discount code or gift card"
        buttonName="Apply"
        className="w-full"
      />
      <div className="flex flex-row items-center justify-center text-sm">
        <p>Subtotal</p>
        <span className="ml-auto">€70.00</span>
      </div>
      <div className="text-sm">
        <div>
          <p>Order discount</p>
          <div className="flex flex-row items-baseline justify-center ">
            <p>
              <Tag size={14} className="mr-2 inline" />
              SAVENOW
            </p>
            <span className="ml-auto">-€7.50</span>
          </div>
        </div>
      </div>
      <div className="flex flex-row items-center justify-center  text-sm">
        <p>Shipping</p>
        <span className="ml-auto">€20.00</span>
      </div>
      <div className="flex flex-row items-center justify-center  text-lg font-semibold">
        <p>Total</p>
        <span className="ml-auto">€70.00</span>
      </div>
      <div className="mt-2 text-base font-medium">
        <p>
          <Tags className="mr-2 inline" size={16} />
          TOTAL SAVINGS €7.50
        </p>
      </div>
      {isFooterDisplayed ? <ShopSummaryFooter /> : null}
    </div>
  );
};

export const ImgProductWithQuantity = () => {
  return (
    <div className="relative w-fit rounded-md border  ">
      <img
        src="https://cdn.shopify.com/s/files/1/0384/6721/files/65W_USB-C_Adapter_Side_Dual_Port_128x128.jpg?v=1726696810"
        alt="product mage"
        className=" aspect-square size-16 rounded-md border border-gray-200"
      />
      <p className="absolute -right-2 -top-2 size-6 rounded-full bg-gray-500/80  text-center text-sm text-white">
        1
      </p>
    </div>
  );
};

export const ShopSummaryFooter = ({ className }: { className?: string }) => {
  return (
    <div className={cn(" flex w-full flex-col gap-4 text-sm", className)}>
      <div className=" flex flex-row items-center justify-start gap-2 rounded-md border border-green-300 bg-green-200/30 p-2">
        <CircleCheck size={20} className=" text-green-800/90" />
        <p>Duties and Taxes Paid</p>
      </div>
      <div className=" flex flex-row items-start justify-start gap-2 rounded-md border border-green-300 bg-green-200/30 p-2">
        <CircleCheck size={20} className="shrink-0 text-green-800" />

        <div className="flex flex-col gap-2 ">
          <p className="font-semibold">Returns & Warranty Coverage</p>
          <p>
            Enjoy easy returns and 2-year warranty coverage on everything!
            Orders placed by December 31, 2024, can be returned until January
            31, 2025.
          </p>
        </div>
      </div>
    </div>
  );
};
