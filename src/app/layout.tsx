import "./globals.css";
import LayoutWrapper from "@/components/LayoutWrapper";
import { Kanit } from "next/font/google";

const kanit = Kanit({
  subsets: ["latin"],
  variable: "--font-kanit",
  display: "swap",
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
      <body className={`${kanit.className} antialiased`}>
        <LayoutWrapper>{children}</LayoutWrapper>
      </body>
    </html>
  );
}
