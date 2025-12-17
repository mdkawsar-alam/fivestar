"use client"

import { useState } from "react"
import { FiZap, FiDroplet, FiTool, FiHome, FiShield } from "react-icons/fi"
import Container from "../Container"
import { servicesData } from "@/lib/data/services"

export function ServicesSection() {
  const [activeCategory, setActiveCategory] = useState("electrical")
  const filtered = servicesData.filter(s => s.category === activeCategory)

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-slate-50 to-[#00843D]/10">
      <Container>
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16 animate-fade-up">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-3 sm:mb-4">
            Our Services
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
            Professional electrical and sanitary services by certified technicians
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex justify-center gap-3 sm:gap-4 mb-10 sm:mb-12">
          {[
            { key: "electrical", label: "Electrical", icon: FiZap },
            { key: "sanitary", label: "Sanitary", icon: FiDroplet }
          ].map(({ key, label, icon: Icon }) => (
            <button
              key={key}
              onClick={() => setActiveCategory(key)}
              className={`flex items-center gap-2 px-6 sm:px-8 py-2.5 sm:py-3 rounded-full font-semibold text-sm sm:text-base transition-all duration-300 ${
                activeCategory === key
                  ? "bg-[#00843D] text-white shadow-lg"
                  : "bg-white text-gray-700 border-2 border-gray-200 hover:border-[#00843D]"
              }`}
            >
              <Icon className="w-4 h-4 transition-transform duration-300 group-hover:scale-110" />
              {label}
            </button>
          ))}
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {filtered.map((service, idx) => (
            <div
              key={service.id}
              className="bg-white rounded-lg p-8 border border-gray-100 transform transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 animate-fade-up group"
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              {/* Icon & Title */}
              <div className="flex items-start gap-4 mb-4">
                <div className="text-5xl text-[#00843D] transition-transform duration-500 group-hover:scale-110">
                  <service.icon />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {service.name}
                  </h3>
                  <p className="text-[#00843D] font-semibold">{service.price}</p>
                </div>
              </div>

              {/* Description */}
              <p className="text-gray-600 mb-6">{service.description}</p>

              {/* Features */}
              <div className="space-y-3 mb-6">
                {service.features.map((feature, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <span className="text-green-500 text-lg">✓</span>
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>

              {/* CTA Button */}
              <a
                href="https://wa.me/966XXXXXXXXX"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-block text-center bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg"
              >
                Book Now
              </a>
            </div>
          ))}
        </div>

        {/* Process Section */}
        <div className="mt-20 pt-20 border-t-2 border-gray-200">
          <h3 className="text-3xl font-bold text-center mb-12">How We Work</h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: 1, title: "Contact Us", desc: "Reach out via WhatsApp or phone" },
              { step: 2, title: "Assessment", desc: "Expert evaluation of your needs" },
              { step: 3, title: "Quote", desc: "Fair pricing with no hidden charges" },
              { step: 4, title: "Service", desc: "Professional execution & support" }
            ].map((item) => (
              <div
                key={item.step}
                className="text-center animate-fade-up"
                style={{ animationDelay: `${item.step * 0.1}s` }}
              >
                <div className="w-16 h-16 bg-[#00843D] text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  {item.step}
                </div>
                <h4 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h4>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </Container>

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
