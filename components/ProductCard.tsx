"use client"

import Link from "next/link"
import { Product } from "@/lib/data/products"
import { WHATSAPP_NUMBER } from "@/lib/constants"
import { AddToCartButton } from "@/components/AddToCartButton"

interface ProductCardProps {
  product: Product
  index?: number
  showViewButton?: boolean
  className?: string
}

export function ProductCard({
  product,
  index = 0,
  showViewButton = true,
  className = ""
}: ProductCardProps) {
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER.replace(/\D/g,"")}?text=${encodeURIComponent(
    `Hello, I'm interested in ${product.name_en} / ${product.name_ar} (ID: ${product.id}). Price: ${product.currency} ${product.price}.`
  )}`

  return (
    <div
      className={`group bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 animate-fade-up ${className}`}
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      {/* Image Container */}
      <Link href={`/products/${product.id}`} className="block">
        <div className="relative h-64 bg-gray-200 overflow-hidden cursor-pointer">
          <img
            src={product.image}
            alt={`${product.name_en} / ${product.name_ar}`}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />
          {product.inStock && (
            <div className="absolute top-4 right-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
              In Stock
            </div>
          )}
          {product.subCategory && (
            <div className="absolute top-4 left-4 bg-blue-500 text-white px-3 py-1 rounded-full text-xs font-medium capitalize">
              {product.subCategory}
            </div>
          )}
        </div>
      </Link>

      {/* Content */}
      <div className="p-6">
        <Link href={`/products/${product.id}`} className="block">
          <h3 className="text-xl font-bold text-gray-900 mb-1 hover:text-[#00843D] transition-colors cursor-pointer">
            {product.name_en}
          </h3>
          <h4 className="text-lg font-semibold text-gray-700 mb-2" dir="rtl">
            {product.name_ar}
          </h4>
        </Link>

        <p className="text-gray-600 text-sm mb-4 line-clamp-2">
          {product.description}
        </p>

        {/* Rating */}
        <div className="flex items-center gap-2 mb-4">
          <div className="flex text-yellow-400">
            {[...Array(5)].map((_, i) => (
              <span key={i} className={i < Math.floor(product.rating) ? "text-yellow-400" : "text-gray-300"}>
                ★
              </span>
            ))}
          </div>
          <span className="text-sm text-gray-600">
            {product.rating} ({product.reviews} reviews)
          </span>
        </div>

        {/* Price & CTA */}
        <div className="flex flex-col gap-3">
          <span className="text-2xl font-bold text-[#00843D]">
            {product.currency} {product.price}
          </span>

          <div className="flex flex-col gap-2">
            <AddToCartButton product={product} className="w-full" />

            <div className="flex items-center gap-2">
              {showViewButton && (
                <Link
                  href={`/products/${product.id}`}
                  className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-900 font-semibold py-2 px-4 rounded-lg transition-all duration-300 shadow-sm text-center"
                >
                  View
                </Link>
              )}

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-lg transition-colors duration-300 shadow-md text-center"
              >
                Order
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}