"use client";
import { ToastContextProvider } from "@/context/ToastContext";
import { PropsWithChildren } from "react";

export function Providers({ children }: PropsWithChildren) {
  return (
    <ToastContextProvider>
      <div id="portalToast" />
      {children}
    </ToastContextProvider>
  );
}
