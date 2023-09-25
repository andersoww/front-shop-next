import clsx from "clsx";
import { Loader2 } from "lucide-react";
import { ButtonHTMLAttributes, ReactElement, ReactNode } from "react";

interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: ReactNode;
  variant?: any;
  isLoading?: boolean;
  loadingText?: string;
  iconLeft?: ReactElement;
  size?: "sm" | "md" | "lg";
}
function Button({
  children,
  variant = "default",
  isLoading,
  loadingText,
  disabled,
  iconLeft,
  ...rest
}: IButton) {
  return (
    <button
      className={clsx(
        "px-4 py-2 rounded-md w-full text-white text-sm flex items-center justify-center gap-2 truncate transition",
        {
          "button-default": variant === "default",
          "bg-[#302F33]": variant === "clear",
        }
      )}
      disabled={disabled || isLoading}
      {...rest}
    >
      {isLoading ? (
        <div className="flex justify-center items-center gap-x-2">
          <Loader2 className="h-5 w-5 animate-spin" />
          {loadingText}
        </div>
      ) : (
        <>
          {iconLeft && iconLeft}
          {children}
        </>
      )}
    </button>
  );
}

export { Button };
