import { ShoppingBasket } from "lucide-react";
import { cn } from "./lib/utils";

export const Header = ({ className }: { className?: string }) => {
  return (
    <header
      className={cn(
        "flex w-full max-w-xl flex-row justify-center bg-background p-5 lg:max-w-3xl ",
        className
      )}
    >
      <div className=" mr-auto size-6"></div>
      <img
        src="https://shoppay-nextailwind.vercel.app/logo_black_x320.webp"
        alt="Nomad Logo"
        className=" h-6 w-36"
      />
      <ShoppingBasket size={24} className="ml-auto " />
    </header>
  );
};
