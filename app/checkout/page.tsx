"use client"

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { FiArrowLeft, FiCheck, FiMapPin, FiUser, FiPhone } from 'react-icons/fi'
import { useCartStore } from '@/lib/store/cart'
import { WHATSAPP_NUMBER } from '@/lib/constants'
import { Container } from '@/components/Container'

interface CustomerInfo {
  name: string
  phone: string
  address: string
  city: string
  notes: string
}

export default function CheckoutPage() {
  const router = useRouter()
  const { items, clearCart, getTotalPrice, getTotalItems } = useCartStore()
  const [customerInfo, setCustomerInfo] = useState<CustomerInfo>({
    name: '',
    phone: '',
    address: '',
    city: '',
    notes: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [orderPlaced, setOrderPlaced] = useState(false)

  const totalItems = getTotalItems()
  const subtotal = getTotalPrice()
  const tax = subtotal * 0.15
  const total = subtotal + tax

  const handleInputChange = (field: keyof CustomerInfo, value: string) => {
    setCustomerInfo(prev => ({ ...prev, [field]: value }))
  }

  const generateWhatsAppMessage = () => {
    const orderDetails = items.map(item =>
      `• ${item.product.name_en} (${item.quantity}x) - SAR ${(item.product.price * item.quantity).toFixed(2)}`
    ).join('\n')

    const message = `*New Order from Fivester Website*

*Customer Information:*
👤 Name: ${customerInfo.name}
📞 Phone: ${customerInfo.phone}
🏠 Address: ${customerInfo.address}
🏙️ City: ${customerInfo.city}
${customerInfo.notes ? `📝 Notes: ${customerInfo.notes}` : ''}

*Order Details:*
${orderDetails}

*Order Summary:*
📦 Items: ${totalItems}
💰 Subtotal: SAR ${subtotal.toFixed(2)}
🧾 Tax (15%): SAR ${tax.toFixed(2)}
💵 Total: SAR ${total.toFixed(2)}

*Order placed on:* ${new Date().toLocaleString('en-SA', {
  timeZone: 'Asia/Riyadh',
  year: 'numeric',
  month: 'long',
  day: 'numeric',
  hour: '2-digit',
  minute: '2-digit'
})}`

    return encodeURIComponent(message)
  }

  const handlePlaceOrder = async () => {
    // Validate required fields
    if (!customerInfo.name || !customerInfo.phone || !customerInfo.address || !customerInfo.city) {
      alert('Please fill in all required fields')
      return
    }

    setIsSubmitting(true)

    try {
      // Generate WhatsApp URL
      const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER.replace(/\D/g,"")}?text=${generateWhatsAppMessage()}`

      // Open WhatsApp
      window.open(whatsappUrl, '_blank')

      // Clear cart and show success
      clearCart()
      setOrderPlaced(true)

      // Redirect to home after 3 seconds
      setTimeout(() => {
        router.push('/')
      }, 3000)

    } catch (error) {
      console.error('Error placing order:', error)
      alert('There was an error placing your order. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  if (items.length === 0 && !orderPlaced) {
    return (
      <div className="min-h-screen bg-gray-50 py-16">
        <Container>
          <div className="max-w-2xl mx-auto text-center">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">Your Cart is Empty</h1>
            <p className="text-gray-600 mb-8">
              Add some products to your cart before checking out.
            </p>
            <Link
              href="/products"
              className="inline-flex items-center gap-2 bg-[#00843D] hover:bg-[#006632] text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-300"
            >
              <FiArrowLeft className="w-5 h-5" />
              Browse Products
            </Link>
          </div>
        </Container>
      </div>
    )
  }

  if (orderPlaced) {
    return (
      <div className="min-h-screen bg-gray-50 py-16">
        <Container>
          <div className="max-w-2xl mx-auto text-center">
            <div className="mb-8">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <FiCheck className="w-10 h-10 text-green-600" />
              </div>
              <h1 className="text-3xl font-bold text-gray-900 mb-4">Order Placed Successfully!</h1>
              <p className="text-gray-600 mb-8">
                Your order has been sent via WhatsApp. Our team will contact you shortly to confirm the details.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm mb-8">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">Order Summary</h2>
              <div className="space-y-2 text-left">
                <div className="flex justify-between">
                  <span>Items:</span>
                  <span>{totalItems}</span>
                </div>
                <div className="flex justify-between">
                  <span>Total:</span>
                  <span className="font-semibold">SAR {total.toFixed(2)}</span>
                </div>
              </div>
            </div>

            <Link
              href="/"
              className="inline-flex items-center gap-2 bg-[#00843D] hover:bg-[#006632] text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-300"
            >
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
          <div className="flex items-center gap-4 mb-8">
            <Link
              href="/cart"
              className="p-2 text-gray-600 hover:text-[#00843D] transition-colors"
            >
              <FiArrowLeft className="w-5 h-5" />
            </Link>
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Checkout</h1>
              <p className="text-gray-600">Complete your order</p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Customer Information Form */}
            <div className="space-y-6">
              <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                <h2 className="text-xl font-semibold text-gray-900 mb-6 flex items-center gap-2">
                  <FiUser className="w-5 h-5" />
                  Customer Information
                </h2>

                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      value={customerInfo.name}
                      onChange={(e) => handleInputChange('name', e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00843D] focus:border-transparent"
                      placeholder="Enter your full name"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center gap-2">
                      <FiPhone className="w-4 h-4" />
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      value={customerInfo.phone}
                      onChange={(e) => handleInputChange('phone', e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00843D] focus:border-transparent"
                      placeholder="+966 XX XXX XXXX"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center gap-2">
                      <FiMapPin className="w-4 h-4" />
                      Address *
                    </label>
                    <input
                      type="text"
                      value={customerInfo.address}
                      onChange={(e) => handleInputChange('address', e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00843D] focus:border-transparent"
                      placeholder="Street address, building, apartment"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      City *
                    </label>
                    <input
                      type="text"
                      value={customerInfo.city}
                      onChange={(e) => handleInputChange('city', e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00843D] focus:border-transparent"
                      placeholder="City name"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Additional Notes
                    </label>
                    <textarea
                      value={customerInfo.notes}
                      onChange={(e) => handleInputChange('notes', e.target.value)}
                      rows={3}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00843D] focus:border-transparent"
                      placeholder="Any special instructions or delivery notes"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Order Summary */}
            <div className="space-y-6">
              <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                <h2 className="text-xl font-semibold text-gray-900 mb-6">Order Summary</h2>

                {/* Order Items */}
                <div className="space-y-3 mb-6">
                  {items.map((item) => (
                    <div key={item.product.id} className="flex items-center gap-3">
                      <img
                        src={item.product.image}
                        alt={item.product.name_en}
                        className="w-12 h-12 object-cover rounded"
                      />
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-gray-900 truncate">
                          {item.product.name_en}
                        </p>
                        <p className="text-xs text-gray-600">
                          {item.quantity}x • SAR {item.product.price}
                        </p>
                      </div>
                      <p className="text-sm font-semibold text-gray-900">
                        SAR {(item.product.price * item.quantity).toFixed(2)}
                      </p>
                    </div>
                  ))}
                </div>

                <hr className="border-gray-200 mb-4" />

                {/* Totals */}
                <div className="space-y-2 mb-6">
                  <div className="flex justify-between text-gray-600">
                    <span>Subtotal</span>
                    <span>SAR {subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-gray-600">
                    <span>Tax (15%)</span>
                    <span>SAR {tax.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-gray-600">
                    <span>Shipping</span>
                    <span>Free</span>
                  </div>
                  <hr className="border-gray-200" />
                  <div className="flex justify-between text-xl font-bold text-gray-900">
                    <span>Total</span>
                    <span>SAR {total.toFixed(2)}</span>
                  </div>
                </div>

                <button
                  onClick={handlePlaceOrder}
                  disabled={isSubmitting}
                  className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-4 w-4 border-2 border-white border-t-transparent"></div>
                      Processing...
                    </>
                  ) : (
                    <>
                      📱 Place Order via WhatsApp
                    </>
                  )}
                </button>

                <p className="text-xs text-gray-500 text-center mt-3">
                  Your order will be sent directly to our WhatsApp for processing
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}