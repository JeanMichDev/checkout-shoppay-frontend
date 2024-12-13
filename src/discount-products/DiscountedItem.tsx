import { cn } from "@/lib/utils";

const urlHalfStar =
  "data:image/svg+xml,%0A        %3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' fill='%23eba200' class='bi bi-star-half' viewBox='0 0 16 16'%3E%3Cpath d='M5.354 5.119 7.538.792A.516.516 0 0 1 8 .5c.183 0 .366.097.465.292l2.184 4.327 4.898.696A.537.537 0 0 1 16 6.32a.548.548 0 0 1-.17.445l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256a.52.52 0 0 1-.146.05c-.342.06-.668-.254-.6-.642l.83-4.73L.173 6.765a.55.55 0 0 1-.172-.403.58.58 0 0 1 .085-.302.513.513 0 0 1 .37-.245l4.898-.696zM8 12.027a.5.5 0 0 1 .232.056l3.686 1.894-.694-3.957a.565.565 0 0 1 .162-.505l2.907-2.77-4.052-.576a.525.525 0 0 1-.393-.288L8.001 2.223 8 2.226v9.8z'%3E%3C/path%3E%3C/svg%3E";
const urlFullStart =
  "data:image/svg+xml,%0A        %3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cg fill='%23eba200'%3E%3Cpath d='M11.572,4.27l-3.54-.514L6.448.548a.521.521,0,0,0-.9,0L3.968,3.756.428,4.27a.5.5,0,0,0-.277.853l2.562,2.5-.606,3.526a.5.5,0,0,0,.726.527L6,10.008l3.167,1.665a.488.488,0,0,0,.232.057.5.5,0,0,0,.494-.584L9.287,7.62l2.562-2.5a.5.5,0,0,0-.277-.853Z' fill='%23eba200'%3E%3C/path%3E%3C/g%3E%3C/svg%3E";

const urlEmptyStar =
  "https://imgs.search.brave.com/N2kgp6BdcNfu3UhGxFXwBm9CPSdjAjowltDNc7M-B2w/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pY29u/ZXMucHJvL3dwLWNv/bnRlbnQvdXBsb2Fk/cy8yMDIxLzAyL2lj/b25lLWV0b2lsZS12/aWRlLWphdW5lLnBu/Zw";

export const DiscountedItem = ({
  className,
  imgUrl,
  price,
  discountedPrice,
  itemName,
  totalReviews,
  stars,
}: {
  className?: string;
  imgUrl: string;
  price: number;
  discountedPrice?: number;
  itemName: string;
  totalReviews: number;
  stars: 0 | 0.5 | 1 | 1.5 | 2 | 2.5 | 3 | 3.5 | 4 | 4.5 | 5;
}) => {
  const notationArray = Array.from({ length: 5 }, (_, i) =>
    // *10 pour éviter les décimales
    stars * 10 - (i + 1) * 10 >= 0
      ? "full"
      : stars * 10 - (i + 1) * 10 === -5
      ? "half"
      : "empty"
  );

  return (
    <div
      className={cn(
        "flex w-full flex-row items-center justify-start  gap-4",
        className
      )}
    >
      <img src={imgUrl} alt={itemName} className="size-20 rounded-md border " />
      <div className=" flex min-w-20 flex-1 flex-col items-start justify-start ">
        <div className="flex  flex-row items-center justify-center ">
          {notationArray.map((notation, i) => (
            <img
              key={i}
              src={
                notation === "full"
                  ? urlFullStart
                  : notation === "half"
                  ? urlHalfStar
                  : urlEmptyStar
              }
              alt={notation}
              className="size-4"
            />
          ))}
        </div>
        <p className="text-xs text-muted-foreground">
          `(${totalReviews} reviews)`
        </p>
        <p className="text-sm font-medium  ">{itemName}</p>
        {discountedPrice ? (
          <p className="text-sm font-medium">
            <span className="text-muted-foreground line-through ">
              €{price}
            </span>
            €{discountedPrice}
          </p>
        ) : (
          <p className="text-sm font-medium">€{price}</p>
        )}
      </div>
      <button className=" rounded-md border bg-muted px-2 py-4 text-sm text-muted-foreground transition hover:bg-muted-foreground/20">
        Add to order
      </button>
    </div>
  );
};
