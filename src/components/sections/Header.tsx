'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { Menu, X, Phone } from 'lucide-react'

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { href: '#reviews', label: 'Reviews' },
    { href: '#services', label: 'Services' },
    { href: '#contact', label: 'Contact' },
  ]

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-neu-base/95 backdrop-blur-md shadow-neu-raised' 
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto max-w-6xl px-4">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="bg-neu-base rounded-xl p-2 shadow-neu-raised">
              <Image
                src="/images/go-rascal-logo-circle.jpeg"
                alt="Go Rascal"
                width={40}
                height={40}
                className="w-10 h-10 rounded-lg"
              />
            </div>
            <div>
              <div className="font-bold text-gray-900">Charlie Charboneau</div>
              <div className="text-sm text-gray-600">Powered by Go Rascal Inc</div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a 
                href="tel:+12483317979" 
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-xl font-semibold shadow-neu-raised hover:shadow-neu-hover transition-all duration-300 flex items-center space-x-2"
            >
              <Phone className="w-4 h-4" />
              <span>(248) 331-7979</span>
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden bg-neu-base rounded-xl p-3 shadow-neu-raised"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-neu-base rounded-2xl mt-4 p-6 shadow-neu-raised">
            <nav className="space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block text-gray-700 hover:text-blue-600 font-medium transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="tel:+12483317979"
                className="block bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-xl font-semibold text-center"
              >
                Call (248) 331-7979
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}