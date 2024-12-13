import { cn } from "@/lib/utils";
import { LargeShopSummary, ShopSummaryFooter } from "./LargeShopSummary";

export const OrderSummary = ({ className }: { className?: string }) => {
  return (
    <div
      className={cn(
        "flex w-full max-w-xl flex-col items-start justify-center gap-2 px-5 lg:max-w-3xl lg:px-5",
        className
      )}
    >
      <h2 className=" text-2xl  font-semibold">Order summary</h2>
      <LargeShopSummary
        isFooterDisplayed={false}
        className="w-full bg-background"
      />
      <button className="mt-4 w-full rounded-md bg-black py-2 text-2xl text-white hover:bg-black/90">
        Pay now
      </button>
      <p>
        Your info will be saved to a Shop account. By continuing, you agree to
        Shop’s Terms of Service and acknowledge the Privacy Policy.
      </p>
      <ShopSummaryFooter className="lg:hidden" />
    </div>
  );
};
