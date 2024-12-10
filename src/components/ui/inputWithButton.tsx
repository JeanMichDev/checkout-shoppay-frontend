import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

export function InputWithButton({
  inputType,
  placeholder,
  buttonName,
  className,
}: {
  inputType: string;
  placeholder: string;
  buttonName: string;
  className?: string;
}) {
  return (
    <div
      className={cn(
        " flex w-full  items-center justify-between gap-4",
        className
      )}
    >
      <Input
        type={inputType}
        placeholder={placeholder}
        className="flex-1 px-1 py-6 ring-black ring-offset-0 focus:outline-none focus:ring-2"
      />
      <Button
        type="submit"
        className="bg-accent px-2 py-6 text-muted-foreground hover:bg-accent/80 "
      >
        {buttonName}
      </Button>
    </div>
  );
}
