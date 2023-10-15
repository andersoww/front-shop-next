"use client";

import { ToastContextProvider } from "@/context/ToastContext";
import { PropsWithChildren } from "react";
import { NextUIProvider } from "@nextui-org/react";

export function Providers({ children }: PropsWithChildren) {
  return (
    <NextUIProvider>
      <ToastContextProvider>
        <div id="portalToast" />
        {children}
      </ToastContextProvider>
    </NextUIProvider>
  );
}
