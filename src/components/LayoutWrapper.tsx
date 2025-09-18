"use client";

import { usePathname } from "next/navigation";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function LayoutWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  const isHome = pathname === "/";

  return (
    <div
      className={`grid antialiased ${
        isHome ? "grid-rows-[1fr_100px]" : "grid-rows-[100px_1fr_100px]"
      }`}
    >
      {!isHome && <Navbar />}
      {children}
      <Footer />
    </div>
  );
}
