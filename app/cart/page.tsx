"use client"

import { useState } from 'react'
import Link from 'next/link'
import { FiShoppingBag, FiArrowLeft } from 'react-icons/fi'
import { useCartStore } from '@/lib/store/cart'
import { CartItem } from '@/components/CartItem'
import { Container } from '@/components/Container'

export default function CartPage() {
  const { items, updateQuantity, removeItem, clearCart, getTotalPrice, getTotalItems } = useCartStore()
  const [isClearing, setIsClearing] = useState(false)

  const totalItems = getTotalItems()
  const totalPrice = getTotalPrice()

  const handleClearCart = async () => {
    setIsClearing(true)
    clearCart()
    setIsClearing(false)
  }

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50 py-16">
        <Container>
          <div className="max-w-2xl mx-auto text-center">
            <div className="mb-8">
              <FiShoppingBag className="w-24 h-24 text-gray-300 mx-auto mb-4" />
              <h1 className="text-3xl font-bold text-gray-900 mb-4">Your Cart is Empty</h1>
              <p className="text-gray-600 mb-8">
                Looks like you haven't added any products to your cart yet.
              </p>
            </div>

            <Link
              href="/products"
              className="inline-flex items-center gap-2 bg-[#00843D] hover:bg-[#006632] text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-300"
            >
              <FiArrowLeft className="w-5 h-5" />
              Continue Shopping
            </Link>
          </div>
        </Container>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <Container>
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">Shopping Cart</h1>
              <p className="text-gray-600">{totalItems} item{totalItems !== 1 ? 's' : ''} in your cart</p>
            </div>

            <button
              onClick={handleClearCart}
              disabled={isClearing}
              className="text-red-600 hover:text-red-700 font-medium transition-colors disabled:opacity-50"
            >
              {isClearing ? 'Clearing...' : 'Clear Cart'}
            </button>
          </div>

          {/* Cart Items */}
          <div className="space-y-4 mb-8">
            {items.map((item) => (
              <CartItem
                key={item.product.id}
                item={item}
                onUpdateQuantity={updateQuantity}
                onRemove={removeItem}
              />
            ))}
          </div>

          {/* Cart Summary */}
          <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Order Summary</h2>

            <div className="space-y-3 mb-6">
              <div className="flex justify-between text-gray-600">
                <span>Subtotal ({totalItems} items)</span>
                <span>SAR {totalPrice.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-gray-600">
                <span>Shipping</span>
                <span>Free</span>
              </div>
              <div className="flex justify-between text-gray-600">
                <span>Tax</span>
                <span>SAR {(totalPrice * 0.15).toFixed(2)}</span>
              </div>
              <hr className="border-gray-200" />
              <div className="flex justify-between text-xl font-bold text-gray-900">
                <span>Total</span>
                <span>SAR {(totalPrice * 1.15).toFixed(2)}</span>
              </div>
            </div>

            <Link
              href="/checkout"
              className="w-full bg-[#00843D] hover:bg-[#006632] text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-300 text-center block"
            >
              Proceed to Checkout
            </Link>
          </div>

          {/* Continue Shopping */}
          <div className="text-center mt-8">
            <Link
              href="/products"
              className="inline-flex items-center gap-2 text-[#00843D] hover:text-[#006632] font-medium transition-colors"
            >
              <FiArrowLeft className="w-4 h-4" />
              Continue Shopping
            </Link>
          </div>
        </div>
      </Container>
    </div>
  )
}