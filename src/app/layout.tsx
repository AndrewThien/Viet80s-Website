import type { Metadata } from "next";
import { Baumans } from "next/font/google";
import "./globals.css";
import { Toaster } from "react-hot-toast";
import Providers from "@/components/Providers";

const baumans = Baumans({ subsets: ["latin"], weight: ["400"] });

export const metadata: Metadata = {
  title: "Authentic Vietnamese Food in Nottingham | Viet80s",
  description:
    "Viet80s is a Vietnamese restaurant in Nottingham. We serve authentic Vietnamese food, street food and coffee.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Providers>
      <html lang="en" className={baumans.className}>
        <body>{children}</body>
        <Toaster />
      </html>
    </Providers>
  );
}
