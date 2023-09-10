import clsx from "clsx";
import { ButtonHTMLAttributes, ReactNode } from "react";

interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: string;
}
function Button({ children, variant = "default", ...rest }: IButton) {
  return (
    <button
      className={clsx(" px-4 py-2 rounded-md w-full text-white", {
        "bg-purple-700": variant === "default",
        "bg-[#302F33]": variant === "clear",
      })}
      {...rest}
    >
      {children}
    </button>
  );
}

export { Button };
