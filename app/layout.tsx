import Navbar from "@/components/Navbar";
import "@/app/globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({
  weight: ["400", "700", "500", "600", "800", "900", "100", "200", "300"],
  subsets: ["latin-ext"],
});

export const metadata: Metadata = {
  title: "Blog || Tech",
  description: "Blog website for tech solutions",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} relative`}>
        {/* <Navbar /> */}
        {children}
      </body>
    </html>
  );
}
