import { Header } from "./Header";
import { AccordionShopSummary } from "./shop-summary/AccordionShopSummary";
import { LargeShopSummary } from "./shop-summary/LargeShopSummary";

function App() {
  return (
    <div className="min-h-full bg-red-300">
      <main className="m-auto flex max-w-screen-lg flex-col items-center justify-center bg-background lg:max-w-4xl lg:flex-row">
        <div className="flex w-fit flex-col  items-center justify-center lg:flex-1">
          <Header />
          <AccordionShopSummary className="lg:hidden" />
        </div>
        <div className="hidden lg:block lg:flex-1 ">
          <LargeShopSummary />
        </div>
      </main>
    </div>
  );
}

export default App;
