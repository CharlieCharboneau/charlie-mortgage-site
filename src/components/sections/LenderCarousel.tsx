'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'

interface LenderCarouselProps {
  bgGradient: string;
}

const lenders = [
  { name: "PennyMac", logo: "/images/pennymac-logo.png" },
  { name: "United Wholesale Mortgage", logo: "/images/uwm-logo.webp" },
  { name: "The Loan Store", logo: "/images/tls-logo.png" },
  { name: "Axos Bank", logo: "/images/axos-bank-logo.svg.png" },
  { name: "Newrez", logo: "/images/newrez-logo.webp" },
  { name: "NQM Funding", logo: "/images/nqm-funding-logo.png" },
  { name: "Plaza", logo: "/images/plaza-logo.png" },
  { name: "Kind Lending", logo: "/images/kind-lending-logo.png" },
  { name: "Champions Funding", logo: "/images/champions-funding-logo.png" },
]

export default function LenderCarousel({ bgGradient }: LenderCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0)

  // Auto-scroll functionality
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === lenders.length - 1 ? 0 : prevIndex + 1
      )
    }, 3000)

    return () => clearInterval(timer)
  }, [])

  return (
    <section id="lenders" className={`py-24 ${bgGradient}`}>
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
            Through Go Rascal&apos;s extensive network, Charlie can shop your loan across dozens of 
            top lenders to find you an incredible deal.
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
                  <div className="flex flex-col items-center text-center">
                    <div className="w-24 h-24 bg-gradient-to-br from-blue-200 to-purple-200 rounded-xl flex items-center justify-center mb-2 p-2 shadow-neu-raised group-hover:shadow-neu-hover transition-all duration-300">
                      <Image 
                        src={lender.logo}
                        alt={lender.name}
                        width={84}
                        height={84}
                      />
                    </div>
                    <div className="text-sm text-center font-bold text-slate-700">
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
              Why check with just one lender when Charlie can shop over 100 lenders instantly? Different lenders offer different rates, programs, and approval criteria. 
              By having access to Go Rascal&apos;s extensive network, Charlie will find the perfect 
              lender and loan program for your unique situation and goals, saving you time, hassle, and money.
            </p>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-2xl font-bold text-blue-600 mb-2">100+</div>
                <div className="text-gray-700">Lender Partners</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-purple-600 mb-2">Ultra Low</div>
                <div className="text-gray-700">Rates &amp; Terms</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-green-600 mb-2">Super Fast</div>
                <div className="text-gray-700">Approval Process</div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}