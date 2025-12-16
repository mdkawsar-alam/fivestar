"use client"

import { useState } from 'react'
import { FiShoppingCart, FiCheck } from 'react-icons/fi'
import { Product } from '@/lib/data/products'
import { useCartStore } from '@/lib/store/cart'

interface AddToCartButtonProps {
  product: Product
  className?: string
}

export function AddToCartButton({ product, className = "" }: AddToCartButtonProps) {
  const [isAdding, setIsAdding] = useState(false)
  const [added, setAdded] = useState(false)
  const addItem = useCartStore(state => state.addItem)

  const handleAddToCart = async () => {
    setIsAdding(true)
    addItem(product)
    setIsAdding(false)
    setAdded(true)

    // Reset the "added" state after 2 seconds
    setTimeout(() => setAdded(false), 2000)
  }

  return (
    <button
      onClick={handleAddToCart}
      disabled={isAdding}
      className={`flex items-center gap-2 px-4 py-2 rounded-lg font-semibold transition-all duration-300 ${
        added
          ? 'bg-green-600 text-white'
          : 'bg-[#00843D] hover:bg-[#006632] text-white'
      } ${className}`}
    >
      {isAdding ? (
        <>
          <div className="animate-spin rounded-full h-4 w-4 border-2 border-white border-t-transparent"></div>
          Adding...
        </>
      ) : added ? (
        <>
          <FiCheck className="w-4 h-4" />
          Added!
        </>
      ) : (
        <>
          <FiShoppingCart className="w-4 h-4" />
          Add to Cart
        </>
      )}
    </button>
  )
}