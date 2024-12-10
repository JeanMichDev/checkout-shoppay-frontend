import { ShoppingBasket } from "lucide-react";

export const Header = () => {
  return (
    <header className="flex max-w-xl w-full flex-row justify-center bg-background p-4">
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
