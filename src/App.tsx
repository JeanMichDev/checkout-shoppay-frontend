import { PaymentSection } from "./payment/payment";
import { AccordionPhoneNumer } from "./contact-and-delivery-form/AccordionPhoneNumber";
import { ContactAndDeliveryForm } from "./contact-and-delivery-form/ContactAndDeliveryForm";
import { ShippingMethod } from "./contact-and-delivery-form/ShippingMethod";
import { DiscountSection } from "./discount-products/DiscountSection";
import { ExpressCheckout } from "./expressCheckout/ExpressCheckout";
import { Header } from "./Header";
import { AccordionShopSummary } from "./shop-summary/AccordionShopSummary";
import { LargeShopSummary } from "./shop-summary/LargeShopSummary";

function App() {
  return (
    <div className="min-h-full bg-blue-100/90">
      <main className="m-auto flex max-w-screen-lg flex-col items-center justify-center bg-background lg:max-w-screen-xl lg:flex-row lg:items-start lg:justify-center lg:gap-0">
        <div className="flex w-fit flex-col  items-center justify-center lg:flex-1 lg:py-5">
          <Header />
          <AccordionShopSummary className="lg:hidden" />
          <ExpressCheckout />
          <ContactAndDeliveryForm />
          <AccordionPhoneNumer />
          <ShippingMethod />
          <DiscountSection />
          <PaymentSection />
        </div>
        <div className="hidden border border-green-950 lg:block lg:w-fit">
          <LargeShopSummary />
        </div>
      </main>
    </div>
  );
}

export default App;
