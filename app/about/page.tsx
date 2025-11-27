import React from "react"

export default function AboutPage() {
  const stats = [
    { number: "10+", label: "Years Experience" },
    { number: "1000+", label: "Happy Customers" },
    { number: "50+", label: "Certified Technicians" },
    { number: "24/7", label: "Customer Support" },
  ]

  const team = [
    { name: "Ahmed Al-Rashid", role: "Founder & CEO", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop" },
    { name: "Fatima Hassan", role: "Operations Manager", image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300&h=300&fit=crop" },
    { name: "Mohammed Saeed", role: "Technical Lead", image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=300&h=300&fit=crop" },
    { name: "Layla Ahmed", role: "Customer Support Lead", image: "https://images.unsplash.com/photo-1517458239881-b72b27e84530?w=300&h=300&fit=crop" },
  ]

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 to-slate-800 text-white py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-6">About Fivester</h1>
          <p className="text-base sm:text-lg text-gray-300 max-w-2xl mx-auto">
            Your trusted partner in hardware and electrical solutions for over a decade
          </p>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <img
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop"
              alt="Fivester Store"
              className="w-full rounded-lg shadow-lg"
            />
          </div>
          <div>
            <h2 className="text-4xl font-bold text-slate-900 mb-6">Our Story</h2>
            <p className="text-gray-700 mb-4 leading-relaxed">
              Fivester was founded over 10 years ago with a simple mission: to provide quality hardware and electrical products at affordable prices to every household and business in Saudi Arabia.
            </p>
            <p className="text-gray-700 mb-4 leading-relaxed">
              What started as a small shop has grown into a trusted brand serving thousands of customers across all regions of Saudi Arabia. Our commitment to quality, reliability, and customer service has made us the go-to choice for hardware and electrical needs.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Today, we pride ourselves on our team of 50+ certified technicians, extensive product range, and industry-leading customer support available 24/7.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-6 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-slate-900 mb-16">By The Numbers</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, idx) => (
              <div key={idx} className="text-center p-8 bg-white rounded-lg shadow-md">
                <div className="text-5xl font-bold text-green-600 mb-2">{stat.number}</div>
                <div className="text-gray-700 font-semibold">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="p-8 bg-gradient-to-br from-[#00843D]/10 to-[#00843D]/20 rounded-lg">
            <h3 className="text-3xl font-bold text-slate-900 mb-4">🎯 Our Mission</h3>
            <p className="text-gray-700 leading-relaxed">
              To empower customers with access to quality hardware and electrical products, backed by professional installation services and exceptional customer support. We believe in delivering value, reliability, and excellence in every interaction.
            </p>
          </div>

          <div className="p-8 bg-gradient-to-br from-green-50 to-green-100 rounded-lg">
            <h3 className="text-3xl font-bold text-slate-900 mb-4">🚀 Our Vision</h3>
            <p className="text-gray-700 leading-relaxed">
              To become the most trusted and accessible hardware and electrical solutions provider in Saudi Arabia, expanding our presence across all regions while maintaining our commitment to quality, affordability, and customer satisfaction.
            </p>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 px-6 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-slate-900 mb-16">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-8 bg-white rounded-lg shadow-md">
              <div className="text-4xl mb-4">✅</div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Quality</h3>
              <p className="text-gray-600">100% authentic products with guaranteed quality and durability</p>
            </div>

            <div className="text-center p-8 bg-white rounded-lg shadow-md">
              <div className="text-4xl mb-4">🤝</div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Trust</h3>
              <p className="text-gray-600">Transparent dealings and honest communication with every customer</p>
            </div>

            <div className="text-center p-8 bg-white rounded-lg shadow-md">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Excellence</h3>
              <p className="text-gray-600">Professional service and technical expertise in every project</p>
            </div>

            <div className="text-center p-8 bg-white rounded-lg shadow-md">
              <div className="text-4xl mb-4">💰</div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Affordability</h3>
              <p className="text-gray-600">Best prices in the market without compromising on quality</p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-slate-900 mb-16">Our Leadership Team</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, idx) => (
              <div key={idx} className="text-center">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-64 object-cover rounded-lg mb-4 shadow-md"
                />
                <h3 className="text-xl font-bold text-slate-900">{member.name}</h3>
                <p className="text-gray-600">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-[#00843D] to-green-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Experience Fivester?</h2>
          <p className="text-xl mb-10 opacity-90">
            Contact us today for all your hardware and electrical needs
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/966XXXXXXXXX"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-white text-green-600 font-bold py-4 px-10 rounded-lg hover:bg-gray-100 transition-colors text-lg"
            >
              Chat on WhatsApp
            </a>
            <a
              href="/contact"
              className="inline-block bg-white text-[#00843D] font-bold py-4 px-10 rounded-lg hover:bg-gray-100 transition-colors text-lg"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
