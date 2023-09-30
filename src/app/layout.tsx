import { Providers } from "@/app/Providers";
import "mapbox-gl/dist/mapbox-gl.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

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
    <html lang="en">
      <body className={`${inter.className} bg-[#1D1D1F]`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
