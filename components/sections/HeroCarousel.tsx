"use client"

import { useState, useEffect, useRef } from "react"
import { heroSlides } from "@/lib/data/hero"

export function HeroCarousel() {
  const [current, setCurrent] = useState(0)
  const [isAutoplay, setIsAutoplay] = useState(true)
  const slideCount = heroSlides.length
  const touchStartX = useRef(0)
  const touchEndX = useRef(0)

  // Autoplay effect
  useEffect(() => {
    if (!isAutoplay) return

    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slideCount)
    }, 5000)

    return () => clearInterval(interval)
  }, [isAutoplay, slideCount])

  // Go to specific slide and pause autoplay
  const goToSlide = (index: number) => {
    setCurrent(index)
    setIsAutoplay(false)
  }

  // Swipe support for mobile
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.changedTouches[0].screenX
  }

  const handleTouchEnd = (e: React.TouchEvent) => {
    touchEndX.current = e.changedTouches[0].screenX
    const deltaX = touchStartX.current - touchEndX.current
    if (Math.abs(deltaX) > 50) {
      if (deltaX > 0) nextSlide()
      else prevSlide()
    }
  }

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % slideCount)
    setIsAutoplay(false)
  }

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + slideCount) % slideCount)
    setIsAutoplay(false)
  }

  return (
    <section
      className="relative w-full h-[500px] sm:h-[600px] md:h-[700px] overflow-hidden bg-gray-900"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* Slides */}
      <div className="relative w-full h-full">
        {heroSlides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === current ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
            }`}
          >
            {/* Background Image */}
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: `url('${slide.image}')`,
                filter: "brightness(0.5)",
              }}
            />

            {/* Content Overlay */}
            <div className="absolute inset-0 flex items-center">
              <div className="w-full max-w-[1280px] mx-auto px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center text-white animate-fade-in">
                {/* Text Content */}
                <div className="text-center lg:text-left">
                  {/* Badge */}
                  <div className="inline-block mb-4 px-4 py-2 bg-[#00843D]/80 rounded-full text-sm font-semibold backdrop-blur">
                    {slide.badge}
                  </div>

                  {/* Title */}
                  <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight">
                    {slide.title}
                  </h1>

                  {/* Subtitle */}
                  <p className="text-lg md:text-xl text-gray-200 mb-2">{slide.subtitle}</p>

                  {/* Description */}
                  <p className="text-base md:text-lg text-gray-300 mb-8">{slide.description}</p>

                  {/* CTA Buttons */}
                  <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                    <a
                      href={slide.cta.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block bg-green-600 hover:bg-green-700 text-white font-bold py-4 px-10 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                      onClick={() => setIsAutoplay(false)}
                    >
                      {slide.cta.text}
                    </a>
                    <button
                      onClick={() => setIsAutoplay(false)}
                      className="inline-block bg-white/20 hover:bg-white/30 text-white font-bold py-4 px-10 rounded-lg backdrop-blur transition-all duration-300 transform hover:scale-105"
                    >
                      Learn More
                    </button>
                  </div>
                </div>

                {/* Side Image */}
                <div className="hidden lg:flex items-center justify-center">
                  <div className="w-full h-80 rounded-lg overflow-hidden shadow-2xl">
                    <img
                      src={slide.image}
                      alt={slide.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Dots */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-3 z-20">
        {heroSlides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === current ? "bg-white w-8" : "bg-white/50 hover:bg-white/75"
            }`}
            aria-label={`Go to slide ${index + 1}`}
            aria-current={index === current ? "true" : undefined}
          />
        ))}
      </div>

      {/* Fade-in animation */}
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fadeIn 0.8s ease-out;
        }
      `}</style>
    </section>
  )
}
