import { InputWithButton } from "@/components/ui/inputWithButton";
import { Tag, Tags } from "lucide-react";

export const LargeShopSummary = () => {
  return (
    <div className="relative w-full bg-muted px-1">
      <div className="mt-4 flex  flex-col gap-4 lg:gap-6">
        <div className="relative flex flex-row items-center justify-center gap-2 text-sm">
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
      </div>
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
