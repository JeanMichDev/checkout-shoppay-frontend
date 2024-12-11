import { DiscountedItem } from "./DiscountedItem";

export const DiscountSection = () => {
  return (
    <div className="flex w-full max-w-xl flex-col items-start justify-center gap-2 border border-cyan-500 px-5 lg:max-w-4xl lg:px-5">
      <h2 className=" text-xl  font-semibold"> Highly Discounted Cables</h2>
      <div className="flex w-full flex-col items-start justify-start  gap-4 border p-2">
        <DiscountedItem
          itemName="0.3M | USB-C"
          price={25}
          totalReviews={100}
          stars={4}
          imgUrl="https://cdn.shopify.com/s/files/1/0384/6721/files/856500018454_A.jpg?v=1692294599&width=300"
        />
        <DiscountedItem
          itemName="0.3M | USB-C | Universal"
          price={40}
          discountedPrice={28}
          totalReviews={324}
          stars={4.5}
          imgUrl="https://cdn.shopify.com/s/files/1/0384/6721/files/856500011158_A.jpg?v=1692294937&width=300"
        />
      </div>
    </div>
  );
};
