"use client"

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { FiMinus, FiPlus, FiTrash2 } from 'react-icons/fi'
import { CartItem as CartItemType } from '@/lib/store/cart'

interface CartItemProps {
  item: CartItemType
  onUpdateQuantity: (productId: string, quantity: number) => void
  onRemove: (productId: string) => void
}

export function CartItem({ item, onUpdateQuantity, onRemove }: CartItemProps) {
  const { product, quantity } = item
  const [isUpdating, setIsUpdating] = useState(false)

  const handleQuantityChange = async (newQuantity: number) => {
    setIsUpdating(true)
    onUpdateQuantity(product.id, newQuantity)
    setIsUpdating(false)
  }

  const handleRemove = () => {
    onRemove(product.id)
  }

  return (
    <div className="flex items-center gap-4 p-4 bg-white border border-gray-200 rounded-lg shadow-sm">
      {/* Product Image */}
      <Link href={`/products/${product.id}`} className="flex-shrink-0">
        <div className="w-20 h-20 bg-gray-200 rounded-lg overflow-hidden">
          <img
            src={product.image}
            alt={`${product.name_en} / ${product.name_ar}`}
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
          />
        </div>
      </Link>

      {/* Product Details */}
      <div className="flex-1 min-w-0">
        <Link href={`/products/${product.id}`}>
          <h3 className="text-lg font-semibold text-gray-900 hover:text-[#00843D] transition-colors cursor-pointer">
            {product.name_en}
          </h3>
          <h4 className="text-sm font-medium text-gray-700 mb-1" dir="rtl">
            {product.name_ar}
          </h4>
        </Link>
        <p className="text-sm text-gray-600 line-clamp-2">{product.description}</p>
        <p className="text-sm text-gray-500 mt-1 capitalize">{product.category} • {product.subCategory}</p>
      </div>

      {/* Price */}
      <div className="text-right">
        <p className="text-lg font-bold text-[#00843D]">
          {product.currency} {product.price}
        </p>
        {quantity > 1 && (
          <p className="text-sm text-gray-600">
            Total: {product.currency} {(product.price * quantity).toFixed(2)}
          </p>
        )}
      </div>

      {/* Quantity Controls */}
      <div className="flex items-center gap-2">
        <button
          onClick={() => handleQuantityChange(quantity - 1)}
          disabled={isUpdating || quantity <= 1}
          className="p-1 text-gray-600 hover:text-red-600 hover:bg-red-50 rounded transition-colors disabled:opacity-50"
        >
          <FiMinus className="w-4 h-4" />
        </button>

        <span className="w-8 text-center font-medium">{quantity}</span>

        <button
          onClick={() => handleQuantityChange(quantity + 1)}
          disabled={isUpdating}
          className="p-1 text-gray-600 hover:text-green-600 hover:bg-green-50 rounded transition-colors disabled:opacity-50"
        >
          <FiPlus className="w-4 h-4" />
        </button>
      </div>

      {/* Remove Button */}
      <button
        onClick={handleRemove}
        className="p-2 text-gray-600 hover:text-red-600 hover:bg-red-50 rounded transition-colors"
        title="Remove from cart"
      >
        <FiTrash2 className="w-4 h-4" />
      </button>
    </div>
  )
}