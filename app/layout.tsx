import type { Metadata } from "next";
import { Bricolage_Grotesque, Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const serifDisplay = Bricolage_Grotesque({
  variable: "--font-serif-display",
  subsets: ["latin"],
});

const sansBody = Inter({
  variable: "--font-sans-body",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Lanka Lense — Sri Lanka Travel Experiences & Videos",
    template: "%s | Lanka Lense",
  },
  description:
    "Real tourist experiences across Sri Lanka, told with stories and travel videos — from Sigiriya's sunrise to Mirissa's whales.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${serifDisplay.variable} ${sansBody.variable} antialiased`}>
      <body className="flex min-h-screen flex-col bg-white text-ink">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
