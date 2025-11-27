"use client"

import Container from "@/components/Container"

export function CTASection() {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-white">
      <Container>
        {/* Main CTA */}
        <div className="bg-gradient-to-r from-[#00843D] to-[#006630] rounded-lg p-8 sm:p-12 md:p-16 text-center text-white mb-12 sm:mb-16 animate-fade-up">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-base sm:text-lg text-[#00843D]/20 mb-6 sm:mb-8 max-w-2xl mx-auto">
            Contact us today for expert hardware, electrical, and sanitary solutions
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/966XXXXXXXXX"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg"
            >
              💬 Chat on WhatsApp
            </a>
            <a
              href="tel:+966XXXXXXXXX"
              className="inline-block bg-white hover:bg-gray-100 text-[#00843D] font-bold py-3 px-8 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg"
            >
              📞 Call Us Now
            </a>
          </div>
        </div>

        {/* Contact Info Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 animate-fade-up" style={{ animationDelay: "0.1s" }}>
          {[
            {
              icon: "📍",
              title: "Visit Us",
              content: "Riyadh, Saudi Arabia",
              link: "#"
            },
            {
              icon: "📧",
              title: "Email Us",
              content: "support@fivestarsa.com",
              link: "mailto:support@fivestarsa.com"
            },
            {
              icon: "⏰",
              title: "Working Hours",
              content: "24/7 Support Available",
              link: "#"
            }
          ].map((item, idx) => (
            <a
              key={idx}
              href={item.link}
              className="bg-gray-50 hover:bg-[#00843D]/10 border border-gray-200 rounded-lg p-8 text-center transition-all duration-300 transform hover:scale-105 animate-fade-up"
              style={{ animationDelay: `${0.2 + idx * 0.1}s` }}
            >
              <div className="text-5xl mb-4">{item.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                {item.title}
              </h3>
              <p className="text-gray-600">{item.content}</p>
            </a>
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
