"use client"

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { FiShoppingCart } from 'react-icons/fi'
import { useCartStore } from '@/lib/store/cart'

export function CartIcon() {
  const [mounted, setMounted] = useState(false)
  const totalItems = useCartStore(state => state.getTotalItems())

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <Link
      href="/cart"
      className="relative p-2 text-gray-700 hover:text-[#00843D] transition-colors duration-300"
    >
      <FiShoppingCart className="w-6 h-6" />
      {mounted && totalItems > 0 && (
        <span className="absolute -top-1 -right-1 bg-[#00843D] text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
          {totalItems > 99 ? '99+' : totalItems}
        </span>
      )}
    </Link>
  )
}