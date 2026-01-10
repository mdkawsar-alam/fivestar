import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "FAQ | Fivester - Frequently Asked Questions",
  description: "Find answers to common questions about Fivester products, services, delivery, and more.",
  openGraph: {
    title: "FAQ | Fivester",
    type: "website",
    url: "https://sa.com/faq",
  },
}

export default function FAQLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
