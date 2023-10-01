import { Providers } from "@/app/Providers";
import "mapbox-gl/dist/mapbox-gl.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import clsx from "clsx";
import { getCookie } from "cookies-next";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Route-Import",
  description: "",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={clsx({ dark: true })}>
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
      />
      <body
        className={`${inter.className} bg-[#1D1D1F] min-h-screen overflow-hidden`}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
