"use client"

import { useState } from "react"
import Container from "@/components/Container"
import { IoAdd, IoRemove } from "react-icons/io5"

const faqItems = [
  {
    category: "Delivery & Shipping",
    items: [
      {
        q: "What is your delivery timeline?",
        a: "Same-day delivery is available in Riyadh. For other regions, delivery takes 1-3 business days."
      },
      {
        q: "Do you charge for delivery?",
        a: "Free delivery on orders above SAR 500 within Riyadh. Other areas have standard shipping fees."
      }
    ]
  },
  {
    category: "Services & Support",
    items: [
      {
        q: "Are your technicians certified?",
        a: "Yes, all technicians are highly trained and certified professionals with years of experience."
      },
      {
        q: "What warranty do services have?",
        a: "All services include 30-day satisfaction guarantee and 10-year warranty on electrical work."
      }
    ]
  }
]

export function FAQSection() {
  const [expanded, setExpanded] = useState<string | null>(null)

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <Container>
        
        {/* Header */}
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto mt-4">
            Find quick answers to the most common questions asked by our customers
          </p>
        </div>

        {/* FAQ Sections */}
        <div className="space-y-12">
          {faqItems.map((section, sIdx) => (
            <div
              key={sIdx}
              className="animate-fade-up"
              style={{ animationDelay: `${sIdx * 0.1}s` }}
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6 relative inline-block">
                {section.category}
                <span className="block w-16 h-1 bg-[#00843D] mt-2 rounded-full"></span>
              </h3>

              <div className="space-y-4">
                {section.items.map((faq, fIdx) => {
                  const id = `${sIdx}-${fIdx}`
                  const isOpen = expanded === id

                  return (
                    <div
                      key={id}
                      className={`bg-white rounded-xl border shadow-sm transition-all duration-300 hover:shadow-lg ${
                        isOpen ? "border-[#00843D]" : "border-gray-200"
                      }`}
                    >
                      <button
                        onClick={() => setExpanded(isOpen ? null : id)}
                        className="w-full px-6 py-5 flex justify-between items-center"
                      >
                        <span className="font-semibold text-gray-900 text-left text-lg">
                          {faq.q}
                        </span>

                        <span className="text-[#00843D] text-3xl transition-transform duration-300">
                          {isOpen ? <IoRemove /> : <IoAdd />}
                        </span>
                      </button>

                      {/* Answer */}
                      <div
                        className={`overflow-hidden transition-[max-height] duration-300 ${
                          isOpen ? "max-h-40" : "max-h-0"
                        }`}
                      >
                        <div className="px-6 pb-5 text-gray-700 bg-[#00843D]/10 border-t border-[#00843D]/30 rounded-b-xl">
                          {faq.a}
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Contact Support */}
        <div
          className="mt-20 bg-[#00843D] text-white rounded-2xl p-10 text-center shadow-xl animate-fade-up"
          style={{ animationDelay: "0.3s" }}
        >
          <h3 className="text-3xl font-bold mb-4">Still have questions?</h3>
          <p className="text-lg opacity-90 mb-6">
            Our support team is available 24/7 — we’re always ready to assist you.
          </p>

          <a
            href="https://wa.me/966XXXXXXXXX"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-white text-[#006630] font-bold py-3 px-10 rounded-lg transition-all duration-300 hover:bg-gray-100 hover:scale-105 shadow-md"
          >
            Contact Support
          </a>
        </div>
      </Container>

      {/* Animations */}
      <style jsx>{`
        @keyframes fadeUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-up {
          animation: fadeUp 0.6s ease-out forwards;
          opacity: 0;
        }
      `}</style>
    </section>
  )
}
