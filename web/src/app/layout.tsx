import type { Metadata } from "next";
import { Inter_Tight } from "next/font/google";
import "./root.css";

const interTight = Inter_Tight({
  subsets: ["latin"],
  variable: "--font-inter-tight",
});

export const metadata: Metadata = {
  title: "COTech",
  description: "Business intelligence solutions — UAE",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${interTight.variable} h-full`} data-cotech-next="1">
      <body className="min-h-full">{children}</body>
    </html>
  );
}
