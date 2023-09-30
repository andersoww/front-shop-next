"use client";
import {
  ReactNode,
  createContext,
  useCallback,
  useContext,
  useState,
} from "react";
import { v4 as uuid } from "uuid";

import { ToastContainer } from "@/components/Toast";
import { PositionToast, ToastProps } from "@/components/Toast/types";
import { Portal } from "@/components/Portal";

export interface PositionProps {
  position: string;
  animation: {
    x?: number;
    y?: number;
  };
  axle: {
    x?: number;
    y?: number;
  };
}

interface ToastContextProps {
  addToast: (value: Omit<ToastProps, "id">) => void;
  removeToast: (id: string) => void;
  closeToast: (value: string) => void;
  toasts: ToastProps[];
}

const ToastContext = createContext<ToastContextProps>({} as ToastContextProps);

interface ToastContextProviderProps {
  children: ReactNode;
}

const positions: PositionToast[] = [
  "top",
  "top-right",
  "top-left",
  "bottom",
  "bottom-right",
  "bottom-left",
];

function ToastContextProvider({ children }: ToastContextProviderProps) {
  const [toasts, setToasts] = useState<ToastProps[]>([]);

  const closeToast = useCallback(
    (id: string) => {
      const remove = toasts.filter((toast) => toast.id !== id);
      setToasts(remove);
    },
    [toasts]
  );

  const removeToast = useCallback(
    (id: string) => {
      setToasts((toasts) => toasts.filter((t) => t.id !== id));
    },
    [setToasts]
  );

  const addToast = useCallback((toast: Omit<ToastProps, "id">) => {
    const newToast = Object.assign(toast, {
      id: uuid(),
      duration: toast.duration || 3000,
      position: toast.position || "top",
    });

    setToasts((toasts) => {
      return [...toasts, newToast];
    });
  }, []);

  return (
    <ToastContext.Provider
      value={{
        addToast,
        removeToast,
        closeToast,
        toasts,
      }}
    >
      {positions.map((toast, index) => (
        <Portal key={index}>
          <ToastContainer toasts={toasts} pos={toast} />
        </Portal>
      ))}

      {children}
    </ToastContext.Provider>
  );
}

const useToast = (): ToastContextProps => {
  const context = useContext(ToastContext);

  if (!context) {
    throw new Error("useToast must be used within an ToastProvider");
  }

  return context;
};

export { ToastContextProvider, useToast };
