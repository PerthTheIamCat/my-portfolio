"use client";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { usePathname } from "next/navigation";
import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();

  return (
    <html lang="en">
      <body
        className={`grid min-h-screen ${pathname !== "/" ? "grid-rows-[100px_1fr_100px]" : "grid_rows-[1fr_100px]"} overflow-hidden antialiased`}
      >
        {pathname !== "/" ? <Navbar /> : null}
        {children}
        <Footer />
      </body>
    </html>
  );
}
