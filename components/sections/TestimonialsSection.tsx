"use client"

import { useState, useEffect } from "react"
import { testimonialsData } from "@/lib/data/testimonials"
import Container from "@/components/Container"

export function TestimonialsSection() {
  const [current, setCurrent] = useState(0)
  const [isAutoplay, setIsAutoplay] = useState(true)

  useEffect(() => {
    if (!isAutoplay) return
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonialsData.length)
    }, 6000)
    return () => clearInterval(interval)
  }, [isAutoplay])

  const visible = [
    testimonialsData[current],
    testimonialsData[(current + 1) % testimonialsData.length],
    testimonialsData[(current + 2) % testimonialsData.length]
  ]

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-white">
      <Container>
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16 animate-fade-up">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-3 sm:mb-4">
            What Our Customers Say
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
            Trusted by thousands of satisfied customers across Saudi Arabia
          </p>
        </div>

        {/* Testimonials Carousel */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {visible.map((testimonial, idx) => (
            <div
              key={testimonial.id}
              className="bg-gradient-to-br from-[#00843D]/10 to-[#00843D]/20 rounded-lg p-8 border border-[#00843D]/30 hover:shadow-xl transition-all duration-300 animate-fade-up"
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400 text-xl">★</span>
                ))}
              </div>

              {/* Quote */}
              <p className="text-gray-700 text-lg mb-6 italic">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4 pt-6 border-t border-[#00843D]/30">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full"
                />
                <div>
                  <h4 className="font-bold text-gray-900">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-gray-600">
                    {testimonial.role} • {testimonial.location}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Dots */}
        <div className="flex justify-center gap-2 mt-12">
          {testimonialsData.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setCurrent(index)
                setIsAutoplay(false)
              }}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === current
                  ? "bg-[#00843D] w-8"
                  : "bg-gray-300 hover:bg-gray-400"
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>

        {/* Autoplay Toggle */}
        <div className="text-center mt-8">
          <button
            onClick={() => setIsAutoplay(!isAutoplay)}
            className="text-sm text-gray-600 hover:text-[#00843D] transition-colors"
          >
            {isAutoplay ? "⏸ Pause" : "▶ Play"}
          </button>
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
