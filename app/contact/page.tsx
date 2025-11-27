"use client"

import React, { useState } from "react"
import { WHATSAPP_NUMBER, CONTACT_EMAIL } from "@/lib/constants"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  })

  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    // Create mailto link for demo (in production, use email API)
    const mailtoLink = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\n\nMessage:\n${formData.message}`
    )}`
    
    window.location.href = mailtoLink
    setSubmitted(true)
    
    // Reset form after 2 seconds
    setTimeout(() => {
      setFormData({ name: "", email: "", phone: "", subject: "", message: "" })
      setSubmitted(false)
    }, 2000)
  }

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 to-slate-800 text-white py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-6">Contact Us</h1>
          <p className="text-base sm:text-lg text-gray-300 max-w-2xl mx-auto">
            Get in touch with our team for any inquiries or support
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            {/* WhatsApp */}
            <div className="bg-slate-50 p-8 rounded-lg">
              <div className="text-4xl mb-4">💬</div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">WhatsApp</h3>
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-600 hover:text-green-700 font-semibold text-lg break-all"
              >
                +966 XX XXXX XXXX
              </a>
              <p className="text-gray-600 text-sm mt-2">24/7 Support Available</p>
            </div>

            {/* Phone */}
            <div className="bg-slate-50 p-8 rounded-lg">
              <div className="text-4xl mb-4">☎️</div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Phone</h3>
              <a
                href="tel:+966XXXXXXXXX"
                className="text-[#00843D] hover:text-[#006630] font-semibold text-lg"
              >
                +966 XX XXXX XXXX
              </a>
              <p className="text-gray-600 text-sm mt-2">Saturday - Thursday: 8 AM - 10 PM</p>
            </div>

            {/* Email */}
            <div className="bg-slate-50 p-8 rounded-lg">
              <div className="text-4xl mb-4">📧</div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Email</h3>
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="text-[#00843D] hover:text-[#006630] font-semibold break-all"
              >
                {CONTACT_EMAIL}
              </a>
              <p className="text-gray-600 text-sm mt-2">Response within 24 hours</p>
            </div>

            {/* Location */}
            <div className="bg-slate-50 p-8 rounded-lg">
              <div className="text-4xl mb-4">📍</div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Location</h3>
              <p className="text-gray-700 font-semibold">Riyadh, Saudi Arabia</p>
              <p className="text-gray-600 text-sm mt-2">Serving all regions of Saudi Arabia</p>
            </div>

            {/* Hours */}
            <div className="bg-slate-50 p-8 rounded-lg">
              <div className="text-4xl mb-4">🕐</div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Working Hours</h3>
              <ul className="text-gray-700 space-y-1">
                <li><strong>Sat - Thu:</strong> 8 AM - 10 PM</li>
                <li><strong>Friday:</strong> 4 PM - 10 PM</li>
                <li><strong>WhatsApp:</strong> 24/7</li>
              </ul>
            </div>
          </div>

          {/* Contact Form */}
          <div className="md:col-span-2">
            <div className="bg-slate-50 p-8 rounded-lg">
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Send us a Message</h2>

              {submitted ? (
                <div className="bg-green-50 border-2 border-green-500 p-6 rounded-lg text-center">
                  <p className="text-green-700 font-semibold text-lg mb-2">✓ Thank You!</p>
                  <p className="text-green-600">Your message has been sent. We'll get back to you soon.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <input
                      type="text"
                      name="name"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#00843D]"
                    />
                    <input
                      type="email"
                      name="email"
                      placeholder="Your Email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#00843D]"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <input
                      type="tel"
                      name="phone"
                      placeholder="Your Phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#00843D]"
                    />
                    <select
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#00843D]"
                    >
                      <option value="">Select Subject</option>
                      <option value="Product Inquiry">Product Inquiry</option>
                      <option value="Service Booking">Service Booking</option>
                      <option value="General Question">General Question</option>
                      <option value="Feedback">Feedback</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>

                  <textarea
                    name="message"
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#00843D]"
                  />

                  <button
                    type="submit"
                    className="w-full bg-[#00843D] hover:bg-[#006630] text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg"
                  >
                    Send Message
                  </button>
                </form>
              )}
            </div>

            {/* Map Section */}
            <div className="mt-8 bg-gray-300 rounded-lg overflow-hidden h-64 flex items-center justify-center">
              <div className="text-center">
                <p className="text-gray-700 mb-2">📍 Riyadh, Saudi Arabia</p>
                <p className="text-sm text-gray-600">[Google Map Embed]</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Action Buttons */}
      <section className="py-20 px-6 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-slate-900 mb-12">
            Quick Actions
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hello%20Fivester%21%20I%20have%20a%20quick%20question`}
              target="_blank"
              rel="noopener noreferrer"
              className="block p-8 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow text-center border-t-4 border-green-500"
            >
              <div className="text-5xl mb-4">💬</div>
              <h3 className="text-2xl font-bold text-slate-900 mb-2">
                Chat on WhatsApp
              </h3>
              <p className="text-gray-600">
                Instant support available 24/7 for quick inquiries
              </p>
            </a>

            <a
              href="#"
              onClick={(e) => {
                e.preventDefault()
                document.querySelector('form')?.scrollIntoView({ behavior: 'smooth' })
              }}
              className="block p-8 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow text-center border-t-4 border-[#00843D]"
            >
              <div className="text-5xl mb-4">📧</div>
              <h3 className="text-2xl font-bold text-slate-900 mb-2">
                Email Us
              </h3>
              <p className="text-gray-600">
                Send detailed inquiries and we'll respond promptly
              </p>
            </a>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-slate-900 mb-12">
            Frequently Asked Questions
          </h2>

          <div className="space-y-6">
            {[
              {
                q: "How can I place an order?",
                a: "You can order products via WhatsApp by clicking the 'Order via WhatsApp' button on any product page, or fill out our contact form.",
              },
              {
                q: "What payment methods do you accept?",
                a: "We accept cash on delivery, bank transfer, credit cards, and debit cards. Payment details will be confirmed after order confirmation.",
              },
              {
                q: "How long is the delivery?",
                a: "Same-day delivery available in Riyadh. Other regions receive delivery within 1-3 business days.",
              },
              {
                q: "Do you provide service warranty?",
                a: "Yes! All services come with a 30-day satisfaction guarantee. If you're not satisfied, we'll fix it at no extra cost.",
              },
            ].map((faq, idx) => (
              <details key={idx} className="bg-slate-50 p-6 rounded-lg cursor-pointer group">
                <summary className="font-bold text-slate-900 flex justify-between items-center">
                  {faq.q}
                  <span className="group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <p className="text-gray-700 mt-3">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
