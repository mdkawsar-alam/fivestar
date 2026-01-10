import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Products | Fivester - Hardware & Electrical Supplies",
  description: "Browse our wide range of quality hardware and electrical products. Fast delivery across Saudi Arabia.",
  openGraph: {
    title: "Products | Fivester",
    description: "Quality hardware and electrical supplies",
    type: "website",
    url: "https://futuremark.com/products",
  },
}

export default function ProductsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
