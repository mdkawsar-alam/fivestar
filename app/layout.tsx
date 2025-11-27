import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";

import Header from "../components/sheare/Header/Header";
import Footer from "../components/sheare/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  weight: ["300","400","600","700","800"],
});

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  display: "swap",
  weight: ["400","600","700"],
});

export const metadata: Metadata = {
  title: "Fivester - Premium Quality Products & Services",
  description: "Discover Fivester's premium quality products and services. Your trusted partner for excellence and innovation.",
  keywords: "Fivester, quality products, services, premium, innovation",
  metadataBase: new URL("https://fivestarsa.com"),
  alternates: {
    canonical: "https://fivestarsa.com",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://fivestarsa.com",
    title: "Fivester - Premium Quality Products & Services",
    description: "Discover Fivester's premium quality products and services.",
    siteName: "Fivester",
    images: [
      {
        url: "https://fivestarsa.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "Fivester",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Fivester - Premium Quality Products & Services",
    description: "Discover Fivester's premium quality products and services.",
    images: ["https://fivestarsa.com/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
  },
};

export const viewport = "width=device-width, initial-scale=1.0";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${poppins.variable} antialiased`}>
        <Header />

        <main className="">
          {children}
        </main>

        <Footer />
      </body>
    </html>
  );
}
