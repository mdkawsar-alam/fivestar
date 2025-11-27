"use client"

import React, { useState } from "react"
import type { Metadata } from "next"
import { PRODUCTS, getWhatsAppOrderLink } from "@/lib/constants"

// Note: Metadata export doesn't work with "use client"
// Client component for interactivity only


export default function ProductsPage() {
  const categories = ["all", "electrical", "sanitary", "tools"]
  const [activeCategory, setActiveCategory] = useState("all")

  const filteredProducts = activeCategory === "all"
    ? PRODUCTS
    : PRODUCTS.filter(p => p.category === activeCategory)

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 to-slate-800 text-white py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-6">Our Products</h1>
          <p className="text-base sm:text-lg text-gray-300 max-w-2xl mx-auto">
            Quality hardware and electrical supplies for every project
          </p>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          {/* Category Filter */}
          <div className="mb-12 flex flex-wrap gap-4 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2 rounded-lg font-semibold transition-colors capitalize ${
                  activeCategory === category
                    ? "bg-green-600 text-white"
                    : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className="bg-slate-50 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow"
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-slate-900 mb-2">
                    {product.name}
                  </h3>
                  {product.description && (
                    <p className="text-gray-600 text-sm mb-3">
                      {product.description}
                    </p>
                  )}
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl font-bold text-green-600">
                      {product.price}
                    </span>
                    {product.category && (
                      <span className="text-xs bg-blue-100 text-blue-700 px-3 py-1 rounded-full capitalize">
                        {product.category}
                      </span>
                    )}
                  </div>

                  <a
                    href={getWhatsAppOrderLink(product, 1)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full text-center bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg"
                  >
                    Order via WhatsApp
                  </a>
                </div>
              </div>
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-600 text-lg">No products in this category</p>
            </div>
          )}
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-6 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-slate-900 mb-16">
            Why Buy From Fivester?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-white rounded-lg shadow-md">
              <div className="text-5xl mb-4">✅</div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">
                Genuine Products
              </h3>
              <p className="text-gray-600">
                100% authentic products with full warranty and guarantee
              </p>
            </div>

            <div className="text-center p-8 bg-white rounded-lg shadow-md">
              <div className="text-5xl mb-4">🚚</div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">
                Fast Delivery
              </h3>
              <p className="text-gray-600">
                Same-day delivery in Riyadh, 1-3 days elsewhere
              </p>
            </div>

            <div className="text-center p-8 bg-white rounded-lg shadow-md">
              <div className="text-5xl mb-4">💰</div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">
                Best Prices
              </h3>
              <p className="text-gray-600">
                Competitive pricing with flexible payment options
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-blue-600 to-green-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Don't See What You Need?</h2>
          <p className="text-xl mb-10 opacity-90">
            Contact us and we can help you find the right product
          </p>
          <a
            href="https://wa.me/966XXXXXXXXX"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-white text-green-600 font-bold py-3 px-8 rounded-lg hover:bg-gray-100 transition-all duration-300 shadow-md hover:shadow-lg text-lg"
          >
            Chat on WhatsApp
          </a>
        </div>
      </section>
    </>
  )
}
