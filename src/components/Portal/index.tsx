"use client";
import {
  Fragment,
  PropsWithChildren,
  ReactNode,
  useEffect,
  useRef,
  useState,
} from "react";
import { createPortal } from "react-dom";

export function Portal({ children }: PropsWithChildren) {
  const ref = useRef<Element | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      ref.current = document.querySelector<HTMLElement>("#portalToast");
      setMounted(true);
    }
  }, []);

  return mounted && ref.current
    ? createPortal((<Fragment>{children}</Fragment>) as any, ref.current)
    : null;
}
