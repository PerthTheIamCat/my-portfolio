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
    <div className="flex min-h-screen flex-col antialiased">
      {!isHome && <Navbar />}
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}
