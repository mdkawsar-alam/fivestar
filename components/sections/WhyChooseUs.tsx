"use client"

import { FiAward, FiTruck, FiUsers, FiDollarSign, FiShield, FiSmartphone } from "react-icons/fi"
import Container from "@/components/Container"

export function WhyChooseUs() {
  const reasons = [
    {
      icon: FiAward,
      title: "Premium Quality",
      description: "Only authentic, branded products with manufacturer warranty"
    },
    {
      icon: FiTruck,
      title: "Fast Delivery",
      description: "Same-day delivery in Riyadh, 1-3 days nationwide"
    },
    {
      icon: FiUsers,
      title: "Expert Team",
      description: "Certified technicians with years of professional experience"
    },
    {
      icon: FiDollarSign,
      title: "Best Prices",
      description: "Competitive pricing with no hidden charges guaranteed"
    },
    {
      icon: FiShield,
      title: "Warranty & Support",
      description: "30-day satisfaction guarantee with 24/7 customer support"
    },
    {
      icon: FiSmartphone,
      title: "Easy to Order",
      description: "Simple ordering via WhatsApp or our mobile app"
    }
  ]

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-blue-600 to-blue-800 text-white">
      <Container>
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16 animate-fade-up">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4">
            Why Choose Fivester?
          </h2>
          <p className="text-base sm:text-lg text-blue-100 max-w-2xl mx-auto">
            We're committed to providing the best quality products and services
          </p>
        </div>

        {/* Reasons Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {reasons.map((reason, idx) => (
            <div
              key={idx}
              className="bg-white/10 backdrop-blur border border-white/20 rounded-lg p-8 hover:bg-white/20 transition-all duration-300 transform hover:scale-105 animate-fade-up"
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              {/* Icon */}
              <div className="text-5xl mb-4 text-blue-200">
                <reason.icon />
              </div>

              {/* Title */}
              <h3 className="text-2xl font-bold mb-3">
                {reason.title}
              </h3>

              {/* Description */}
              <p className="text-blue-100 leading-relaxed">
                {reason.description}
              </p>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 mt-16 sm:mt-20 pt-16 sm:pt-20 border-t border-white/20">
          {[
            { number: "50K+", label: "Happy Customers" },
            { number: "15+", label: "Years Experience" },
            { number: "500+", label: "Products" },
            { number: "24/7", label: "Customer Support" }
          ].map((stat, idx) => (
            <div
              key={idx}
              className="text-center animate-fade-up"
              style={{ animationDelay: `${idx * 0.15}s` }}
            >
              <div className="text-4xl md:text-5xl font-bold mb-2">
                {stat.number}
              </div>
              <p className="text-blue-100">{stat.label}</p>
            </div>
          ))}
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
