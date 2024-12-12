import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export const ExpressCheckout = () => {
  return (
    <div className="flex w-full max-w-xl flex-col items-center justify-center gap-6 border border-red-500 px-5 lg:max-w-2xl lg:px-5">
      <p className="text-sm text-muted-foreground">Express Checkout</p>
      <div className=" flex w-full flex-row items-center  justify-center gap-2  lg:gap-4">
        <span
          className={cn(
            buttonVariants({
              variant: "default",
              size: "lg",
            }),
            "w-full bg-indigo-300/60 hover:bg-indigo-300 pt-1 "
          )}
        >
          <img
            src="https://imgs.search.brave.com/GBFUseQWKJBkJd0_lI9U6Zn_4xdsrYk8xvSEMixEFKo/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9hc3Nl/dHMuc3RpY2twbmcu/Y29tL2ltYWdlcy82/MjIwYTliMDkxMjAx/M2M1MTk0N2Y5Yjgu/cG5n"
            alt="ShopPay"
            className="h-1/2"
          />
        </span>
        <span
          className={cn(
            buttonVariants({
              variant: "default",
              size: "lg",
            }),
            "w-full bg-yellow-400/80 hover:bg-yellow-400 pt-1 "
          )}
        >
          <img
            src="https://imgs.search.brave.com/dB19qbGrhA-t8i5tTr_DD902j1Y3cfXfnMi324iGatE/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9mcmVl/bG9nb3BuZy5jb20v/aW1hZ2VzL2FsbF9p/bWcvMTY1NTk3OTI5/OHBheXBhbC1sb2dv/LXBuZy10cmFuc3Bh/cmVudC5wbmc"
            alt="Paypal"
            className="h-1/2"
          />
        </span>
      </div>
      <div className="w-full border-t border-muted-foreground ">
        <p className="mx-auto -mt-3 w-fit bg-background px-2 text-sm text-muted-foreground ">
          OR
        </p>
      </div>
    </div>
  );
};
