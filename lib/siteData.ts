import { productsData, type Product } from "./data/products"
import { servicesData, type Service } from "./data/services"
import { testimonialsData, type Testimonial } from "./data/testimonials"
import { heroSlides } from "./data/hero"

export const WHATSAPP_NUMBER = "+966503069108"
export const CONTACT_EMAIL = "support@fivestarsa.com"

export type TeamMember = {
  id: string
  name: string
  role: string
  bio?: string
  photo?: string
}

export const teamMembers: TeamMember[] = [
  {
    id: "tm-1",
    name: "Ali Al-Saud",
    role: "Founder & CEO",
    bio: "Founder with 15+ years in hardware and electrical solutions.",
    photo: "https://api.dicebear.com/7.x/avataaars/svg?seed=Ali"
  },
  {
    id: "tm-2",
    name: "Sara Khalid",
    role: "Head of Operations",
    bio: "Oversees order fulfillment and technician dispatch.",
    photo: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sara"
  },
  {
    id: "tm-3",
    name: "Omar Fahad",
    role: "Lead Technician",
    bio: "Expert electrician and team lead for field services.",
    photo: "https://api.dicebear.com/7.x/avataaars/svg?seed=Omar"
  }
]

export type FAQItem = {
  category: string
  q: string
  a: string
}

export const faqs: FAQItem[] = [
  { category: "Delivery", q: "What is the delivery time?", a: "Same-day in Riyadh; 1-3 business days nationwide." },
  { category: "Payment", q: "Which payment methods do you accept?", a: "COD, credit/debit cards, and bank transfer." },
  { category: "Returns", q: "What is the return policy?", a: "15-day return policy for unused items in original packaging." },
]

export const socials = {
  facebook: "https://facebook.com/fivestarsa",
  instagram: "https://instagram.com/fivestarsa",
  twitter: "https://twitter.com/fivestarsa",
  linkedin: "https://www.linkedin.com/company/fivestarsa",
}

export const siteInfo = {
  name: "Fivester",
  domain: "https://fivestarsa.com",
  description: "Hardware & Electrical Solutions in Saudi Arabia",
  whatsapp: WHATSAPP_NUMBER,
  email: CONTACT_EMAIL,
}

export const SITE_DATA = {
  siteInfo,
  heroSlides,
  products: productsData as Product[],
  services: servicesData as Service[],
  testimonials: testimonialsData as Testimonial[],
  teamMembers,
  faqs,
  socials,
}

export {
  productsData as PRODUCTS,
  servicesData as SERVICES,
  testimonialsData as TESTIMONIALS,
  heroSlides as HERO_SLIDES,
}

export default SITE_DATA
