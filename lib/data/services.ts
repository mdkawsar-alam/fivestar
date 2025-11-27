export const servicesData = [
  {
    id: "electrical-1",
    name: "Electrical Installation",
    description: "Professional home & commercial electrical installation",
    category: "electrical",
    price: "SAR 299-999",
    icon: "⚡",
    features: ["Licensed technicians", "Warranty included", "Emergency support"]
  },
  {
    id: "electrical-2",
    name: "Wiring & Circuit Setup",
    description: "Complete electrical wiring and circuit breaker installation",
    category: "electrical",
    price: "SAR 399-1299",
    icon: "🔌",
    features: ["Modern standards", "24/7 support", "10-year guarantee"]
  },
  {
    id: "electrical-3",
    name: "Lighting Solutions",
    description: "Custom lighting design and LED installation",
    category: "electrical",
    price: "SAR 199-799",
    icon: "💡",
    features: ["Energy efficient", "Expert design", "Professional install"]
  },
  {
    id: "electrical-4",
    name: "Maintenance & Repair",
    description: "Maintenance, troubleshooting and repair services",
    category: "electrical",
    price: "SAR 149-599",
    icon: "🔧",
    features: ["Quick response", "Fair pricing", "Quality assured"]
  },
  {
    id: "sanitary-1",
    name: "Plumbing Installation",
    description: "Full plumbing system installation for residential & commercial",
    category: "sanitary",
    price: "SAR 399-1299",
    icon: "🚿",
    features: ["Certified plumbers", "Quality materials", "30-day guarantee"]
  },
  {
    id: "sanitary-2",
    name: "Pipe & Water Repair",
    description: "Emergency pipe repair, leakage detection & water pressure solutions",
    category: "sanitary",
    price: "SAR 199-799",
    icon: "💧",
    features: ["Emergency 24/7", "No hidden charges", "Quick fix"]
  },
  {
    id: "sanitary-3",
    name: "Bathroom Fixtures",
    description: "Installation of sinks, toilets, showers and bathroom fittings",
    category: "sanitary",
    price: "SAR 249-899",
    icon: "🛁",
    features: ["Premium quality", "Modern designs", "Professional service"]
  },
  {
    id: "sanitary-4",
    name: "Water Heater Service",
    description: "Installation, repair and maintenance of water heating systems",
    category: "sanitary",
    price: "SAR 299-999",
    icon: "♨️",
    features: ["Efficient systems", "Energy saving", "Warranty included"]
  }
]

export type Service = typeof servicesData[0]
