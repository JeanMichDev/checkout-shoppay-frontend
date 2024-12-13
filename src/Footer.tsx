import { cn } from "./lib/utils";

export const Footer = ({ className }: { className?: string }) => {
  return (
    <footer
      className={cn(
        "flex w-full max-w-xl flex-row flex-wrap justify-center gap-4 bg-background p-5 text-sm underline lg:max-w-3xl",
        className
      )}
    >
      <a className="shrink-0" href="/">
        Refund Policy
      </a>
      <a className=" shrink-0" href="/">
        Shipping Policy
      </a>
      <a className=" shrink-0" href="/">
        Privacy Policy
      </a>
      <a className=" shrink-0" href="/">
        Terms of service
      </a>
      <a className=" shrink-0" href="/">
        Contact information
      </a>
    </footer>
  );
};
