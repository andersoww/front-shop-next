import { MapProvider } from "@/context/MapContext";
import { ReactNode } from "react";

export default function Layout({ children }: { children: ReactNode }) {
  return <MapProvider>{children}</MapProvider>;
}
