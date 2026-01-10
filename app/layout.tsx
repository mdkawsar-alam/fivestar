import type { Metadata, Viewport } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";

import Header from "../components/sheare/Header/Header";
import Footer from "../components/sheare/Footer";

// Fonts
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  weight: ["300", "400", "600", "700", "800"],
});

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  display: "swap",
  weight: ["400", "600", "700"],
});

// SEO Metadata (Al Ahsa Focus)
export const metadata: Metadata = {
  title: "Hardware & Sanitary Products Supplier in Al Ahsa, Saudi Arabia | Fivester",
  description:
    "Buy premium hardware and sanitary products in Al Ahsa, Saudi Arabia. Electrical items, faucets, mixers, lighting & tools from trusted brands.",
  keywords: [
    // English
    "hardware store Al Ahsa",
    "sanitary products Al Ahsa",
    "electrical hardware supplier Al Ahsa",
    "sanitary ware shop Al Ahsa",
    "bathroom fittings Al Ahsa",
    "faucets and mixers Al Ahsa",
    "hardware and sanitary supplier KSA",

    // Arabic (Local SEO)
    "محل أدوات صحية الأحساء",
    "مواد صحية الأحساء",
    "مواد كهربائية الأحساء",
    "محل أدوات كهربائية الأحساء",
    "خلاطات حمام الأحساء",
    "أدوات سباكة الأحساء",
    "مستلزمات حمامات الأحساء",
    "متجر أدوات صحية في الأحساء",
  ],
  metadataBase: new URL("https://futuremark.com"),
  alternates: {
    canonical: "https://futremark.com",
  },
  icons: {
    icon: "/favicon.jpeg",
    shortcut: "/favicon.jpeg",
    apple: "/favicon.jpeg",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://futremark.com",
    title:
      "Hardware & Sanitary Products Supplier in Al Ahsa, Saudi Arabia | Fivester",
    description:
      "Premium hardware and sanitary products in Al Ahsa including electrical items, faucets, mixers, lighting & tools.",
    siteName: "Fivester",
    images: [
      {
        url: "https://futremark.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "Fivester Hardware & Sanitary Products Al Ahsa",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Hardware & Sanitary Products Supplier in Al Ahsa, Saudi Arabia | Fivester",
    description:
      "Buy hardware and sanitary products in Al Ahsa. Quality electrical & bathroom solutions from trusted brands.",
    images: ["https://futremark.com/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

// Viewport (Next.js 14 compliant)
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${poppins.variable} antialiased`}
        suppressHydrationWarning
      >
        <Header />

        <main className="min-h-screen">
          {children}
        </main>

        <Footer />
      </body>
    </html>
  );
}
