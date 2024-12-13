import { ContactAndDeliveryForm } from "./contact-and-delivery-form/ContactAndDeliveryForm";
import { ShippingMethod } from "./contact-and-delivery-form/ShippingMethod";
import { DiscountSection } from "./discount-products/DiscountSection";
import { ExpressCheckout } from "./expressCheckout/ExpressCheckout";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { PaymentSection } from "./payment/PaymentSection";
import { AccordionShopSummary } from "./shop-summary/AccordionShopSummary";
import { LargeShopSummary } from "./shop-summary/LargeShopSummary";
import { OrderSummary } from "./shop-summary/OrderSummary";

function App() {
  return (
    <section className="mx-auto flex max-w-screen-xl flex-col items-center justify-center lg:flex-row lg:items-start lg:justify-center lg:gap-0 ">
      <div className="flex flex-col items-center justify-start gap-2  lg:flex-[3] lg:gap-6 lg:py-5">
        <Header className="lg:pl-20 lg:pr-10" />
        <AccordionShopSummary className="lg:hidden" />
        <ExpressCheckout className="lg:pl-20 lg:pr-10" />
        <ContactAndDeliveryForm className="lg:pl-20 lg:pr-10" />
        <ShippingMethod className="lg:pl-20 lg:pr-10" />
        <DiscountSection className="lg:pl-20 lg:pr-10" />
        <PaymentSection className="lg:pl-20 lg:pr-10" />
        <OrderSummary className="lg:pl-20 lg:pr-10" />
        <Footer className="lg:pl-20 lg:pr-10" />
      </div>
      <div className=" sticky top-0 hidden h-screen  bg-muted lg:flex lg:flex-[2] lg:pl-10 lg:pr-20">
        <LargeShopSummary
          isFooterDisplayed={true}
          className="lg:min-h-screen "
        />
      </div>
    </section>
  );
}

export default App;
