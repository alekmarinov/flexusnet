'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-white/95 backdrop-blur-md border-b-2 border-neon-cyan/20 sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center group">
              <div className="relative flex items-center h-12 md:h-16">
                <Image
                  src="/flexus-logo.jpg"
                  alt="FlexusNet Logo"
                  width={200}
                  height={80}
                  className="h-full w-auto object-contain transition-opacity duration-300 group-hover:opacity-90 logo-image"
                  priority
                />
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link href="/" className="text-gray-700 hover:text-neon-cyan transition-all duration-300 relative group">
              <span className="relative z-10">Home</span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-neon-cyan group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link href="/#request" className="text-gray-700 hover:text-neon-cyan transition-all duration-300 relative group">
              <span className="relative z-10">Request</span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-neon-cyan group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-neon-cyan transition-all duration-300 relative group">
              <span className="relative z-10">About Us</span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-neon-cyan group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link href="/#contact" className="text-gray-700 hover:text-neon-cyan transition-all duration-300 relative group">
              <span className="relative z-10">Contact</span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-neon-cyan group-hover:w-full transition-all duration-300"></span>
            </Link>
          </nav>

          {/* Contact Info - Desktop */}
          <div className="hidden lg:flex items-center space-x-6">
            <a href="mailto:service@flexusnet.com" className="flex items-center text-gray-700 hover:text-neon-cyan transition-all duration-300 group">
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <span className="font-semibold">service@flexusnet.com</span>
            </a>
            <a href="tel:4703003369" className="flex items-center text-gray-700 hover:text-neon-cyan transition-all duration-300 group">
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span className="font-semibold">(470) 300-3369</span>
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 rounded-md text-neon-cyan hover:text-neon-cyan/80 hover:bg-gray-100 transition-all duration-300 border border-neon-cyan/20 hover:border-neon-cyan"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden pb-4 space-y-2 animate-fadeIn">
            <Link href="/" className="block px-3 py-2 text-gray-700 hover:bg-gray-100 hover:text-neon-cyan rounded transition-all duration-300">
              Home
            </Link>
            <Link href="/#request" className="block px-3 py-2 text-gray-700 hover:bg-gray-100 hover:text-neon-cyan rounded transition-all duration-300">
              Request
            </Link>
            <Link href="/about" className="block px-3 py-2 text-gray-700 hover:bg-gray-100 hover:text-neon-cyan rounded transition-all duration-300">
              About Us
            </Link>
            <Link href="/#contact" className="block px-3 py-2 text-gray-700 hover:bg-gray-100 hover:text-neon-cyan rounded transition-all duration-300">
              Contact
            </Link>
            <div className="pt-4 border-t border-gray-200 space-y-2">
              <a href="mailto:service@flexusnet.com" className="flex items-center px-3 py-2 text-gray-700 hover:text-neon-cyan transition-all duration-300">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                service@flexusnet.com
              </a>
              <a href="tel:4703003369" className="flex items-center px-3 py-2 text-gray-700 hover:text-neon-cyan transition-all duration-300">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                (470) 300-3369
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}

