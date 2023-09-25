import clsx from "clsx";
import {
  createContext,
  FC,
  InputHTMLAttributes,
  ReactNode,
  useContext,
} from "react";

interface TextInputRootProps {
  children: ReactNode;
  width?: string;
  className?: string;
}

interface ToggleInputData {
  toggleSize?: "sm" | "md" | "lg";
}

const ToggleInputContext = createContext<ToggleInputData>(
  {} as ToggleInputData
);

const ToggleInputRoot: FC<TextInputRootProps> = ({
  children,
  width,
  className,
}) => {
  return (
    <div
      className={clsx("flex flex-col gap-1", className)}
      style={width ? { width } : {}}
    >
      {children}
    </div>
  );
};

ToggleInputRoot.displayName = "ToggleInput.Root";

export interface ToggleInputLabelProps {
  description?: string;
  className?: string;
  size?: "sm" | "md" | "lg";
  toggleSize?: "sm" | "md" | "lg";
  direction?: "row" | "column";
  children: ReactNode;
}

const ToggleInputLabel: FC<ToggleInputLabelProps> = ({
  description = "Default Text",
  className,
  size = "md",
  children,
  toggleSize = "md",
  direction = "column",
}) => {
  return (
    <ToggleInputContext.Provider value={{ toggleSize }}>
      <div className={clsx("flex w-auto", className)}>
        <label
          className={clsx("flex", {
            "flex-row items-center gap-4": direction === "row",
            "flex-col gap-2": direction === "column",
          })}
        >
          {description && (
            <p className="text-xs whitespace-nowrap">{description}</p>
          )}

          {children}
        </label>
      </div>
    </ToggleInputContext.Provider>
  );
};

ToggleInputLabel.displayName = "ToggleInput.Label";

export interface ToggleInputProps
  extends InputHTMLAttributes<HTMLInputElement> {
  className?: string;
}

const ToggleInputElement: FC<ToggleInputProps> = ({ className, ...rest }) => {
  const { toggleSize } = useContext(ToggleInputContext);
  return (
    <div
      className={clsx("relative cursor-pointer items-center", className, {
        "max-w-10 w-10": toggleSize === "sm",
        "max-w-11 w-11": toggleSize === "md",
        "max-w-14 w-14": toggleSize === "lg",
      })}
    >
      <input
        type="checkbox"
        className="peer sr-only border-spacing-1 border-slate-500"
        {...rest}
      />
      <div
        className={clsx(
          "input-theme border-spacing-2 rounded-full border-red-500 bg-slate-400 shadow ring-2 ring-slate-300 after:absolute after:left-[2px] after:top-0.5 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] focus-within:ring-2 hover:ring-2 hover:ring-purple-500 peer-checked:bg-purple-600 peer-checked:ring-transparent  peer-checked:after:translate-x-full peer-checked:after:border-slate-300 dark:border-gray-300 dark:bg-gray-600 dark:ring-slate-700 dark:peer-checked:ring-purple-600",
          {
            "max-w-10 h-5 w-10 after:left-[1px] after:top-[1px] after:h-[18px] after:w-[18px]":
              toggleSize === "sm",
            "h-6 w-11 after:h-5 after:w-5": toggleSize === "md",
            "h-7 w-14 after:left-[-1px] after:top-[0px] after:h-7 after:w-7":
              toggleSize === "lg",
          }
        )}
      />
    </div>
  );
};

ToggleInputElement.displayName = "ToggleInput.Input";

export const ToggleInput = {
  Root: ToggleInputRoot,
  Label: ToggleInputLabel,
  Input: ToggleInputElement,
};
