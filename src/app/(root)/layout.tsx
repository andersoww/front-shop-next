import { Navigation } from "@/components/Navigation";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="w-screen h-screen flex-1 flex">
      <div className="h-[calc(100%-70px)] w-full overflow-auto">{children}</div>
      <Navigation />
    </div>
  );
}
