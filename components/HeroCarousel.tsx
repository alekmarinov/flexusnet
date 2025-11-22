'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'

interface CarouselSlide {
  id: number
  title: string
  description: string
  image: string
}

const slides: CarouselSlide[] = [
  {
    id: 1,
    title: 'Laptop/Desktop/Office equipment',
    description: 'Professional installation and setup services',
    image: '/carusel_laptops_1.png',
  },
  {
    id: 2,
    title: 'Network Installations',
    description: 'Complete network infrastructure setup',
    image: '/carusel_networks_1.png',
  },
  {
    id: 3,
    title: 'POS Systems',
    description: 'Point of sale installation and configuration',
    image: '/carusel_pos_1.png',
  },
]

export default function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isPaused, setIsPaused] = useState(false)

  useEffect(() => {
    if (isPaused) return

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000) // Auto-rotate every 5 seconds

    return () => clearInterval(interval)
  }, [isPaused])

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
  }

  const goToPrevious = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  const goToNext = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  return (
    <section
      className="relative h-[600px] md:h-[700px] overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Slides */}
      <div className="relative h-full">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
            }`}
          >
            <div className="relative h-full w-full">
              <Image
                src={slide.image}
                alt={slide.title}
                fill
                className="object-cover"
                priority={index === 0}
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-black/30 to-black/20" />
              <div className="absolute inset-0 bg-neon-cyan/5" />
              <div className="absolute inset-0 flex items-center">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                  <div className="max-w-2xl">
                    <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
                      {slide.title}
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-100 mb-8">
                      {slide.description}
                    </p>
                    <Link
                      href="#request"
                      className="inline-block bg-neon-cyan hover:bg-neon-cyan/90 text-white font-semibold px-8 py-4 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg border border-white/20"
                    >
                      Request Service
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Nationwide Coverage Badge - Always Visible Over Carousel */}
      <div className="absolute top-8 left-1/2 -translate-x-1/2 z-30 animate-float">
        <div className="bg-white/95 backdrop-blur-md px-8 py-4 rounded-full shadow-lg border-2 border-neon-cyan/30">
          <div className="flex items-center space-x-3">
            <svg className="w-8 h-8 text-neon-cyan" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span className="text-xl md:text-2xl font-bold text-neon-cyan">
              100% Nationwide Service Coverage
            </span>
          </div>
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={goToPrevious}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-white/90 hover:bg-white text-neon-cyan p-3 rounded-full transition-all duration-300 shadow-md hover:shadow-lg border border-neon-cyan/30 hover:border-neon-cyan"
        aria-label="Previous slide"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button
        onClick={goToNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-white/90 hover:bg-white text-neon-cyan p-3 rounded-full transition-all duration-300 shadow-md hover:shadow-lg border border-neon-cyan/30 hover:border-neon-cyan"
        aria-label="Next slide"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Dot Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`h-3 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? 'w-8 bg-white shadow-md'
                : 'w-3 bg-white/60 hover:bg-white/80'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  )
}

