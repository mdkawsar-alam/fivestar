import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Contact Us | Fivester",
  description: "Get in touch with Fivester for products and services. WhatsApp, phone, email support available.",
  openGraph: {
    title: "Contact Us | Fivester",
    description: "Contact Fivester for hardware and electrical solutions",
    type: "website",
    url: "https://fivestarsa.com/contact",
  },
}

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
