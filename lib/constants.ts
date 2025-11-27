// Shared constants and utilities for order management

export const WHATSAPP_NUMBER = "966XXXXXXXXX" // Replace with your WhatsApp number
export const WHATSAPP_BASE = `https://wa.me/${WHATSAPP_NUMBER}`

export interface Product {
  id: number
  name: string
  price: string
  priceNumber: number
  image: string
  description?: string
  category?: string
}

export interface Service {
  id: number
  name: string
  description: string
  price: string
  icon: string
  category: "electrical" | "sanitary"
}

export interface OrderMessage {
  product?: Product
  service?: Service
  quantity?: number
  serviceType?: string
  location?: string
  preferredDate?: string
}

// Generate WhatsApp order message
export const generateOrderMessage = (product: Product, quantity: number = 1): string => {
  return encodeURIComponent(
    `Hello Fivester! 👋\n\nI would like to order:\n\n` +
    `📦 Product: ${product.name}\n` +
    `💰 Price: ${product.price}\n` +
    `📊 Quantity: ${quantity}\n` +
    `💵 Total: ${(product.priceNumber * quantity).toFixed(2)} SAR\n\n` +
    `Please confirm availability and delivery time.\n` +
    `My delivery address: _______`
  )
}

// Generate WhatsApp service booking message
export const generateServiceMessage = (service: Service, location: string = ""): string => {
  return encodeURIComponent(
    `Hello Fivester! 👋\n\nI would like to book a service:\n\n` +
    `🔧 Service: ${service.name}\n` +
    `📍 Location: ${location || "To be confirmed"}\n` +
    `📅 Preferred Date: _______\n` +
    `🕐 Preferred Time: _______\n\n` +
    `Please confirm availability and provide a quote.\n` +
    `My contact number: _______`
  )
}

// Generate WhatsApp link for orders
export const getWhatsAppOrderLink = (product: Product, quantity: number = 1): string => {
  const message = generateOrderMessage(product, quantity)
  return `${WHATSAPP_BASE}?text=${message}`
}

// Generate WhatsApp link for service booking
export const getWhatsAppServiceLink = (service: Service, location: string = ""): string => {
  const message = generateServiceMessage(service, location)
  return `${WHATSAPP_BASE}?text=${message}`
}

// Products Database
export const PRODUCTS: Product[] = [
  {
    id: 1,
    name: "Power Drill",
    price: "299 SAR",
    priceNumber: 299,
    image: "https://images.unsplash.com/photo-1530124566582-a618bc2615dc?w=400&h=300&fit=crop",
    description: "Professional power drill with variable speed control",
    category: "tools"
  },
  {
    id: 2,
    name: "LED Light Bulbs",
    price: "45 SAR",
    priceNumber: 45,
    image: "https://images.unsplash.com/photo-1608889335941-32ac5f2041b9?w=400&h=300&fit=crop",
    description: "Energy-efficient LED bulbs (pack of 5)",
    category: "electrical"
  },
  {
    id: 3,
    name: "Electrical Wire Set",
    price: "199 SAR",
    priceNumber: 199,
    image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=400&h=300&fit=crop",
    description: "Complete electrical wiring set for home installation",
    category: "electrical"
  },
  {
    id: 4,
    name: "Water Tap Fixture",
    price: "159 SAR",
    priceNumber: 159,
    image: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=400&h=300&fit=crop",
    description: "Modern chrome water tap fixture",
    category: "sanitary"
  },
  {
    id: 5,
    name: "Pipe Wrench Set",
    price: "349 SAR",
    priceNumber: 349,
    image: "https://images.unsplash.com/photo-1547927810-cb6e0e7b1a73?w=400&h=300&fit=crop",
    description: "Professional pipe wrench set (3 pieces)",
    category: "tools"
  },
  {
    id: 6,
    name: "Circuit Breaker Box",
    price: "799 SAR",
    priceNumber: 799,
    image: "https://images.unsplash.com/photo-1581092916550-e323be2ae537?w=400&h=300&fit=crop",
    description: "Heavy-duty circuit breaker box with safety features",
    category: "electrical"
  },
]

// Services Database
export const SERVICES: Service[] = [
  {
    id: 1,
    name: "Home Wiring Installation",
    description: "Complete electrical wiring for new constructions and renovations",
    price: "2000-5000 SAR",
    icon: "⚡",
    category: "electrical"
  },
  {
    id: 2,
    name: "Lighting Solutions",
    description: "Modern LED lighting installation and design consultation",
    price: "1500-4000 SAR",
    icon: "💡",
    category: "electrical"
  },
  {
    id: 3,
    name: "Circuit Breaker Setup",
    description: "Installation and maintenance of circuit breaker systems",
    price: "1000-3000 SAR",
    icon: "🔧",
    category: "electrical"
  },
  {
    id: 4,
    name: "Electrical Repair",
    description: "Troubleshooting and repair of electrical systems",
    price: "500-2000 SAR",
    icon: "🔌",
    category: "electrical"
  },
  {
    id: 5,
    name: "Plumbing Installation",
    description: "Professional pipe installation and setup",
    price: "1500-4000 SAR",
    icon: "🚰",
    category: "sanitary"
  },
  {
    id: 6,
    name: "Leak Detection & Repair",
    description: "Find and fix water leaks in pipes and fixtures",
    price: "800-2500 SAR",
    icon: "💧",
    category: "sanitary"
  },
  {
    id: 7,
    name: "Water Fixture Replacement",
    description: "Installation of modern water taps and fixtures",
    price: "500-1500 SAR",
    icon: "🚿",
    category: "sanitary"
  },
  {
    id: 8,
    name: "Drainage Solutions",
    description: "Comprehensive drainage system installation and repair",
    price: "2000-5000 SAR",
    icon: "🌊",
    category: "sanitary"
  },
]

// Google Form for order tracking (optional, create this in Google Forms)
// https://docs.google.com/forms/u/0/?tgif=d
export const GOOGLE_FORM_PRODUCT_ORDER = "https://docs.google.com/forms/d/YOUR_FORM_ID/viewform"
export const GOOGLE_FORM_SERVICE_BOOKING = "https://docs.google.com/forms/d/YOUR_FORM_ID/viewform"

// Contact Email
export const CONTACT_EMAIL = "support@fivestarsa.com"
