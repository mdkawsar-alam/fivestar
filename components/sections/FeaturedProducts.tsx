"use client"

import { useState, useEffect } from "react"
import { productsData } from "@/lib/data/products"
import { getRandomProducts } from "@/lib/utils"
import Container from "@/components/Container"
import { ProductCard } from "@/components/ProductCard"

export function FeaturedProducts() {
  const [mounted, setMounted] = useState(false)
  const [featuredProducts, setFeaturedProducts] = useState<any[]>([])

  useEffect(() => {
    setMounted(true)
    // Show 16 random products from both electrical and sanitary categories
    const randomProducts = getRandomProducts(productsData, 16)
    setFeaturedProducts(randomProducts)
  }, [])

  // Show loading state or first 16 products while mounting
  const displayProducts = mounted ? featuredProducts : productsData.slice(0, 16)

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-white">
      <Container>
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16 animate-fade-up">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-3 sm:mb-4">
            Featured Products
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
            Explore our wide range of quality hardware & electrical products
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8">
          {displayProducts.map((product, idx) => (
            <ProductCard
              key={product.id}
              product={product}
              index={idx}
              showViewButton={true}
            />
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <a
            href="/products"
            className="inline-block bg-[#00843D] hover:bg-[#006630] text-white font-bold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg"
          >
            View All Products →
          </a>
        </div>
      </Container>

      <style jsx>{`
        @keyframes fadeUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-up {
          animation: fadeUp 0.6s ease-out forwards;
          opacity: 0;
        }
      `}</style>
    </section>
  )
}
