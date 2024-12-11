import { ShoppingBasket } from "lucide-react";

export const Header = () => {
  return (
    <header className="flex w-full max-w-xl flex-row justify-center bg-background p-5 lg:max-w-4xl ">
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
