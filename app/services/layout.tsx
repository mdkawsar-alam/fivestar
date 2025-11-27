import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Services | Fivester - Electrical & Plumbing Solutions",
  description: "Professional electrical and plumbing services across Saudi Arabia. Certified technicians available.",
  openGraph: {
    title: "Services | Fivester",
    description: "Professional electrical and plumbing services",
    type: "website",
    url: "https://fivestarsa.com/services",
  },
}

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
