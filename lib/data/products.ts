export const productsData = [
  {
    id: "electrical-tools-1",
    name: "Industrial Power Drill",
    price: "SAR 499",
    category: "electrical",
    image: "https://images.unsplash.com/photo-1619983081563-430f63602d4b?w=500&h=500&fit=crop",
    description: "High-performance cordless drill with 20V battery",
    rating: 4.8,
    reviews: 156,
    inStock: true
  },
  {
    id: "electrical-tools-2",
    name: "LED Lighting Kit",
    price: "SAR 299",
    category: "electrical",
    image: "https://images.unsplash.com/photo-1565636192335-14efb64a72d9?w=500&h=500&fit=crop",
    description: "Energy-efficient LED lights for home & office",
    rating: 4.9,
    reviews: 203,
    inStock: true
  },
  {
    id: "sanitary-1",
    name: "Stainless Steel Sink",
    price: "SAR 649",
    category: "sanitary",
    image: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=500&h=500&fit=crop",
    description: "Premium double basin kitchen sink",
    rating: 4.7,
    reviews: 89,
    inStock: true
  },
  {
    id: "sanitary-2",
    name: "Ceramic Toilet Set",
    price: "SAR 899",
    category: "sanitary",
    image: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=500&h=500&fit=crop",
    description: "Modern ceramic toilet with soft-close seat",
    rating: 4.6,
    reviews: 124,
    inStock: true
  },
  {
    id: "tools-1",
    name: "Complete Tool Set",
    price: "SAR 349",
    category: "tools",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500&h=500&fit=crop",
    description: "50-piece professional tool kit",
    rating: 4.8,
    reviews: 312,
    inStock: true
  },
  {
    id: "tools-2",
    name: "Safety Equipment Pack",
    price: "SAR 199",
    category: "tools",
    image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=500&h=500&fit=crop",
    description: "Protective gear & safety equipment",
    rating: 4.5,
    reviews: 78,
    inStock: true
  }
]

export type Product = typeof productsData[0]
