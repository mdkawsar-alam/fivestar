import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "About Fivester | Hardware & Electrical Solutions",
  description: "Learn about Fivester - 10+ years of trusted service in hardware and electrical solutions across Saudi Arabia.",
  openGraph: {
    title: "About Fivester",
    description: "10+ years of trusted service",
    type: "website",
    url: "https://futuremark.com/about",
  },
}

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
