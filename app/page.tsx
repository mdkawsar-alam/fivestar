import type { Metadata } from "next"
import {
  HeroCarousel,
  FeaturedProducts,
  ServicesSection,
  WhyChooseUs,
  TestimonialsSection,
  FAQSection,
  CTASection
} from "@/components/sections"

export const metadata: Metadata = {
  title: "Home | Fivester - Hardware & Electrical Solutions in Saudi Arabia",
  description: "Fivester: Your trusted hardware, electrical, and plumbing solutions in Saudi Arabia. Quality products, certified technicians, and 24/7 support.",
  openGraph: {
    title: "Home | Fivester",
    description: "Hardware & Electrical Solutions in Saudi Arabia",
    type: "website",
    url: "https://futuremark.com",
  },
}

export default function HomePage() {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Fivester",
    "url": "https://futuremark.com",
    "logo": "https://futuremark.com/logo.png",
    "description": "Hardware & Electrical Solutions in Saudi Arabia",
  }

  return (
    <>
      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />

      {/* Hero Section with Carousel */}
      <HeroCarousel />

      {/* Featured Products */}
      <FeaturedProducts />

      {/* Services */}
      <ServicesSection />

      {/* Why Choose Us */}
      <WhyChooseUs />

      {/* Testimonials */}
      <TestimonialsSection />

      {/* FAQ */}
      <FAQSection />

      {/* CTA Section */}
      <CTASection />
    </>
  )
}
