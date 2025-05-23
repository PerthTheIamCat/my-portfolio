import "./globals.css";
import LayoutWrapper from "@/components/LayoutWrapper";
import { Kanit } from "next/font/google";

const kanit = Kanit({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata = {
  title: "My Portfolio",
  description: "Welcome to my portfolio showcasing my work and skills.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`antialiased ${kanit.className}`}>
        <LayoutWrapper>{children}</LayoutWrapper>
      </body>
    </html>
  );
}
