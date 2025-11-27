import React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Return & Refund Policy | Fivester",
  description: "Return and Refund Policy for Fivester",
}

export default function ReturnPolicy() {
  return (
    <div className="py-20 px-6 bg-white">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-slate-900 mb-8">Return & Refund Policy</h1>
        <div className="prose prose-lg max-w-none text-gray-700">
          <p className="mb-6">
            <strong>Last Updated: November 27, 2025</strong>
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">1. Return Policy for Products</h2>
          <p className="mb-4">
            At Fivester, we want you to be completely satisfied with your purchase. If you're not happy with a product, here's what you need to know:
          </p>

          <h3 className="text-xl font-bold text-slate-900 mt-6 mb-3">Return Window</h3>
          <p className="mb-6">
            You have <strong>15 days from the date of delivery</strong> to return any product for a full refund or exchange.
          </p>

          <h3 className="text-xl font-bold text-slate-900 mt-6 mb-3">Conditions for Return</h3>
          <p className="mb-4">Products must meet ALL of the following conditions:</p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>Product must be unused and in original condition</li>
            <li>Original packaging must be intact</li>
            <li>All accessories and documentation must be included</li>
            <li>No signs of wear, damage, or modification</li>
            <li>Proof of purchase (order confirmation) must be provided</li>
          </ul>

          <h3 className="text-xl font-bold text-slate-900 mt-6 mb-3">Non-Returnable Items</h3>
          <p className="mb-4">The following items cannot be returned:</p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>Items purchased as "Final Sale"</li>
            <li>Used or damaged products</li>
            <li>Items without original packaging</li>
            <li>Products purchased from unauthorized resellers</li>
            <li>Items after the 15-day return window</li>
          </ul>

          <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">2. Refund Process</h2>
          <h3 className="text-xl font-bold text-slate-900 mt-6 mb-3">How to Initiate a Return</h3>
          <ol className="list-decimal pl-6 mb-6 space-y-2">
            <li>Contact us via WhatsApp or email with your order number</li>
            <li>Provide details of why you want to return the product</li>
            <li>We will verify your eligibility for return</li>
            <li>We'll arrange pickup at no additional cost</li>
            <li>Package the item securely in original packaging</li>
          </ol>

          <h3 className="text-xl font-bold text-slate-900 mt-6 mb-3">Refund Timeline</h3>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>Inspection and verification: 3-5 business days</li>
            <li>Refund processing: 5-7 business days after approval</li>
            <li>Bank processing: Additional 2-3 business days</li>
            <li><strong>Total: 10-15 business days</strong></li>
          </ul>

          <h3 className="text-xl font-bold text-slate-900 mt-6 mb-3">Refund Amount</h3>
          <p className="mb-6">
            Full refund will be issued for the product price. Delivery charges are non-refundable unless the return is due to our error or a defective product.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">3. Exchange Policy</h2>
          <p className="mb-6">
            If you'd like to exchange a product for a different size, color, or item, we offer free exchanges within 15 days. Contact us to arrange the exchange.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">4. Damaged or Defective Products</h2>
          <p className="mb-4">
            If you receive a damaged or defective product, please:
          </p>
          <ol className="list-decimal pl-6 mb-6 space-y-2">
            <li>Contact us immediately with photos of the damage</li>
            <li>Don't open or use the product further</li>
            <li>We will send a replacement or issue a full refund at no cost</li>
            <li>We'll also provide a prepaid return label for the defective item</li>
          </ol>

          <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">5. Service Guarantee</h2>
          <p className="mb-4">
            All services come with a <strong>30-day satisfaction guarantee</strong>. If you're not satisfied with any service:
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>Contact us within 30 days of service completion</li>
            <li>We will provide free follow-up service or correction</li>
            <li>If not satisfactory, we offer a full refund</li>
          </ul>

          <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">6. Contact for Returns</h2>
          <p className="mb-6">
            To initiate a return or for any questions:
          </p>
          <p className="mb-6">
            <strong>WhatsApp:</strong> +966 XX XXXX XXXX (24/7)<br />
            <strong>Email:</strong> support@fivestarsa.com<br />
            <strong>Phone:</strong> +966 XX XXXX XXXX<br />
            <strong>Hours:</strong> Sat-Thu 8 AM - 10 PM | Fri 4 PM - 10 PM
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">7. Exceptions</h2>
          <p className="mb-6">
            Fivester reserves the right to refuse returns that don't meet our return policy conditions. In case of disputes, our decision is final and binding.
          </p>

          <div className="bg-blue-50 p-6 rounded-lg mt-8 border-l-4 border-blue-600">
            <p className="text-blue-900">
              <strong>Note:</strong> This policy applies to all products ordered through our website. For any questions or clarifications, please don't hesitate to contact our customer support team.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
