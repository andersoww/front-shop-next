import clsx from "clsx";
import { ReactNode } from "react";
import { Text } from "@/components/Text";
import { ClientOnly } from "@/components/ClientOnly";

interface TextInputLabelProps {
  description: string;
  className?: string;
  children: ReactNode;
}

function LoadingServerTextInput({
  description,
  className,
}: {
  description: string;
  className?: string;
}) {
  return (
    <div className={className}>
      <Text size="sm">{description}</Text>
      <div className="h-12 w-full animate-pulse rounded-md bg-zinc-200 dark:bg-zinc-700" />
    </div>
  );
}

export function TextInputLabel({
  description,
  children,
  className,
}: TextInputLabelProps) {
  return (
    <ClientOnly>
      <label className={clsx("w-full", className)}>
        <Text size="sm">{description}</Text>
        {children}
      </label>
    </ClientOnly>
  );
}
