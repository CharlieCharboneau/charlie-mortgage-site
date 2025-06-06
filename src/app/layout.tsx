import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "@/components/sections/Footer";
import Header from "@/components/sections/Header";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Charlie Charboneau - Mortgage Expert | Go Rascal",
  description:
    "7+ years of mortgage expertise, $350M+ funded. Access to 100+ lenders through Go Rascal. Your trusted mortgage professional serving nationwide.",
  keywords:
    "mortgage, loan officer, refinance, home purchase, Charlie Charboneau, Go Rascal, mortgage broker, home loans, FHA loans, VA loans, conventional loans",
  authors: [{ name: "Charlie Charboneau" }],
  creator: "Charlie Charboneau",
  publisher: "Go Rascal",
  icons: {
    icon: "/icons/home.svg",
  },
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://charliecharboneau.mortgage",
    title: "Charlie Charboneau - Mortgage Expert | Powered By Go Rascal Inc",
    description:
      "7+ years of mortgage expertise, $350M+ funded. Access to 100+ lenders through Go Rascal.",
    siteName: "Charlie Charboneau Mortgage Expert | Powered By Go Rascal Inc",
  },
  twitter: {
    card: "summary_large_image",
    title: "Charlie Charboneau - Mortgage Expert | Powered By Go Rascal Inc",
    description:
      "7+ years of mortgage expertise, $350M+ funded. Access to 100+ lenders through Go Rascal.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className={`${inter.className} antialiased bg-neu-base`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
