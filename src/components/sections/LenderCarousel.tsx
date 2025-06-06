'use client'

import { useEffect, useState } from 'react'

// Placeholder lender data - we'll replace with real logos later
const lenders = [
  { name: "PennyMac", logo: "PM" },
  { name: "United Wholesale Mortgage", logo: "UWM" },
  { name: "The Loan Store", logo: "TLS" },
  { name: "Axos Bank", logo: "AXOS" },
  { name: "Newrez", logo: "NR" },
  { name: "NexBank", logo: "NB" },
  { name: "NQM Funding", logo: "NQM" },
  { name: "Plaza", logo: "PZ" },
  { name: "Kind Lending", logo: "KL" },
  { name: "Champions Funding", logo: "CF" },
]

export default function LenderCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)

  // Auto-scroll functionality
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === lenders.length - 1 ? 0 : prevIndex + 1
      )
    }, 3000) // Change every 3 seconds

    return () => clearInterval(timer)
  }, [])

  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-neu-base">
      <div className="container mx-auto max-w-7xl px-4">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-6xl font-black text-gray-900 mb-6">
            Access to
            <br />
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              100+ Lenders
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Through Go Rascal&apos;s extensive network, I can shop your loan across dozens of 
            top lenders to find you the best rates and terms available.
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative overflow-hidden">
          <div 
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${(currentIndex * 100) / 4}%)` }}
          >
            {/* Duplicate the array to create seamless loop */}
            {[...lenders, ...lenders].map((lender, index) => (
              <div 
                key={`${lender.name}-${index}`}
                className="flex-none w-1/2 md:w-1/3 lg:w-1/4 px-4"
              >
                <div className="bg-neu-base rounded-2xl p-8 shadow-neu-raised hover:shadow-neu-hover transition-all duration-300 h-32 flex items-center justify-center group">
                  {/* Placeholder logo - using initials */}
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center mb-2 shadow-neu-raised group-hover:shadow-neu-hover transition-all duration-300">
                      <span className="text-white font-bold text-lg">
                        {lender.logo}
                      </span>
                    </div>
                    <div className="text-sm font-medium text-gray-700">
                      {lender.name}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Carousel Indicators */}
        <div className="flex justify-center mt-8 space-x-2">
          {lenders.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 shadow-neu-raised ${
                index === currentIndex 
                  ? 'bg-blue-500 shadow-neu-hover' 
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
            />
          ))}
        </div>

        {/* Bottom Content */}
        <div className="text-center mt-16">
          <div className="bg-neu-base rounded-3xl p-8 shadow-neu-raised max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Why Lender Network Matters
            </h3>
            <p className="text-gray-600 leading-relaxed mb-6">
              Different lenders offer different rates, programs, and approval criteria. 
              By having access to Go Rascal&apos;s extensive network, I can find the lender 
              that&apos;s the perfect fit for your unique situation and goals.
            </p>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-2xl font-bold text-blue-600 mb-2">100+</div>
                <div className="text-gray-700">Lender Partners</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-purple-600 mb-2">Best</div>
                <div className="text-gray-700">Rates Available</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-green-600 mb-2">Fast</div>
                <div className="text-gray-700">Approval Process</div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}