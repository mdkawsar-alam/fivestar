"use client"

import React, { useState } from "react"
import { SERVICES, getWhatsAppServiceLink } from "@/lib/constants"

export default function ServicesPage() {
  const [activeCategory, setActiveCategory] = useState<"all" | "electrical" | "sanitary">("all")

  const filteredServices = activeCategory === "all"
    ? SERVICES
    : SERVICES.filter(s => s.category === activeCategory)

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 to-slate-800 text-white py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-6">Our Services</h1>
          <p className="text-base sm:text-lg text-gray-300 max-w-2xl mx-auto">
            Professional electrical and plumbing services across Saudi Arabia
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          {/* Category Filter */}
          <div className="mb-12 flex flex-wrap gap-4 justify-center">
            {(["all", "electrical", "sanitary"] as const).map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2 rounded-lg font-semibold transition-colors capitalize ${
                  activeCategory === category
                    ? "bg-[#00843D] text-white"
                    : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                }`}
              >
                {category === "all" ? "All Services" : category}
              </button>
            ))}
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredServices.map((service) => (
              <div
                key={service.id}
                className="bg-gradient-to-br from-slate-50 to-slate-100 p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow border-l-4 border-[#00843D]"
              >
                <div className="text-5xl mb-4">{service.icon}</div>
                <h3 className="text-2xl font-bold text-slate-900 mb-3">
                  {service.name}
                </h3>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  {service.description}
                </p>
                <div className="mb-6 p-4 bg-white rounded-lg">
                  <p className="text-lg font-semibold text-green-600">
                    {service.price}
                  </p>
                  <p className="text-sm text-gray-600 mt-1">
                    * Prices vary based on project scope
                  </p>
                </div>

                <a
                  href={getWhatsAppServiceLink(service)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center bg-[#00843D] hover:bg-[#006630] text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg"
                >
                  Book Service
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Areas Section */}
      <section className="py-20 px-6 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-slate-900 mb-12">
            Service Areas
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                We proudly serve all major regions across Saudi Arabia with fast, reliable service. Our network of certified technicians ensures quality work no matter where you are.
              </p>

              <div className="grid grid-cols-2 gap-4">
                {[
                  "🏙️ Riyadh",
                  "🌊 Jeddah",
                  "⚙️ Dammam",
                  "🕌 Mecca",
                  "🕋 Medina",
                  "🏢 Khobar",
                  "📍 Taif",
                  "🚀 And more...",
                ].map((area, idx) => (
                  <div key={idx} className="p-4 bg-white rounded-lg shadow-sm">
                    <p className="font-semibold text-slate-900">{area}</p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <img
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop"
                alt="Service Coverage"
                className="w-full rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-slate-900 mb-16">
            How We Work
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              {
                number: "1",
                title: "Consultation",
                description: "Contact us and describe your service needs",
              },
              {
                number: "2",
                title: "Quote",
                description: "Receive a detailed quote and timeline estimate",
              },
              {
                number: "3",
                title: "Scheduling",
                description: "Agree on date and time for the service",
              },
              {
                number: "4",
                title: "Completion",
                description: "Professional execution and quality assurance",
              },
            ].map((step, idx) => (
              <div key={idx} className="text-center">
                <div className="w-16 h-16 bg-[#00843D] text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  {step.number}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">
                  {step.title}
                </h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Guarantees Section */}
      <section className="py-20 px-6 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-slate-900 mb-16">
            Our Guarantees
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="text-5xl mb-4">🎓</div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">
                Certified Technicians
              </h3>
              <p className="text-gray-600">
                All work performed by certified and experienced professionals
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="text-5xl mb-4">⏱️</div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">
                Timely Service
              </h3>
              <p className="text-gray-600">
                We arrive on schedule and complete work as promised
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="text-5xl mb-4">✅</div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">
                30-Day Guarantee
              </h3>
              <p className="text-gray-600">
                Full warranty on all services performed
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-[#00843D] to-green-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Book a Service?</h2>
          <p className="text-xl mb-10 opacity-90">
            Contact us now for fast and professional service
          </p>
          <a
            href="https://wa.me/966XXXXXXXXX"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-white text-[#00843D] font-bold py-4 px-10 rounded-lg hover:bg-gray-100 transition-colors text-lg"
          >
            Book Service Now
          </a>
        </div>
      </section>
    </>
  )
}
