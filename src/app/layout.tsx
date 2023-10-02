import { Providers } from "@/app/Providers";
import clsx from "clsx";
import "mapbox-gl/dist/mapbox-gl.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

// export const metadata: Metadata = {
//   title: "Route-Import",
//   description: "",
//   manifest: "/manifest.json",
// };

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
      {/* <link rel="manifest" href="/manifest.json" /> */}
      <body
        className={`${inter.className} bg-[#1D1D1F] min-h-screen overflow-hidden`}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
