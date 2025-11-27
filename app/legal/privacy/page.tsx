import React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Privacy Policy | Fivester",
  description: "Privacy Policy for Fivester",
}

export default function PrivacyPolicy() {
  return (
    <div className="py-20 px-6 bg-white">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-slate-900 mb-8">Privacy Policy</h1>
        <div className="prose prose-lg max-w-none text-gray-700">
          <p className="mb-6">
            <strong>Last Updated: November 27, 2025</strong>
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">1. Introduction</h2>
          <p className="mb-6">
            Fivester ("we," "us," "our," or "Company") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">2. Information We Collect</h2>
          <p className="mb-4">We may collect information about you in a variety of ways:</p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li><strong>Personal Data:</strong> Name, email address, phone number, delivery address</li>
            <li><strong>Order Information:</strong> Products ordered, quantities, prices, payment information</li>
            <li><strong>Service Booking Data:</strong> Service type, location, preferred date/time</li>
            <li><strong>Usage Data:</strong> Pages visited, time spent, device information, IP address</li>
            <li><strong>Feedback:</strong> Reviews, ratings, comments about products and services</li>
          </ul>

          <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">3. How We Use Your Information</h2>
          <p className="mb-4">We use the information we collect for:</p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>Processing and delivering orders</li>
            <li>Scheduling and managing service bookings</li>
            <li>Sending order updates and confirmations</li>
            <li>Processing payments</li>
            <li>Responding to customer inquiries</li>
            <li>Improving website functionality and user experience</li>
            <li>Marketing and promotional purposes (with consent)</li>
            <li>Complying with legal obligations</li>
          </ul>

          <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">4. Information Sharing</h2>
          <p className="mb-6">
            We do not sell, trade, or rent your personal information to third parties. We may share information with:
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>Service providers assisting in our operations</li>
            <li>Payment processors for transaction processing</li>
            <li>Delivery partners for order fulfillment</li>
            <li>When required by law or legal process</li>
          </ul>

          <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">5. Data Security</h2>
          <p className="mb-6">
            We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">6. Your Rights</h2>
          <p className="mb-4">You have the right to:</p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>Access your personal information</li>
            <li>Request correction or deletion of your data</li>
            <li>Opt-out of marketing communications</li>
            <li>Request details about data processing</li>
          </ul>

          <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">7. Contact Us</h2>
          <p className="mb-6">
            If you have any questions about this Privacy Policy or our practices, please contact us at:
          </p>
          <p className="mb-6">
            <strong>Email:</strong> support@fivestarsa.com<br />
            <strong>Phone:</strong> +966 XX XXXX XXXX<br />
            <strong>WhatsApp:</strong> +966 XX XXXX XXXX
          </p>
        </div>
      </div>
    </div>
  )
}
