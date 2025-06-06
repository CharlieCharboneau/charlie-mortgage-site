'use client'

import { useState } from 'react'
import { Star, ExternalLink, Quote } from 'lucide-react'

const reviews = [
  {
    id: 1,
    name: "Karla Swenson",
    rating: 5,
    date: "2025-05-23",
    text: "Charlie is the best mortgage broker. He goes above and beyond for his clients. He walked me through everything step by step and stayed in constant communication. I recommend him to anyone looking to buy a home. My realtor was so impressed she also recommends him to all of her clients.",
    verified: true
  },
  {
    id: 2,
    name: "Jerome Arfeli",
    rating: 5,
    date: "2025-05-12",
    text: "Charlie went above and beyond first for my mortgage and then the first refinancing! Recommended professional",
    verified: true
  },
]

export default function GoogleReviews() {
  const [currentReview, setCurrentReview] = useState(0)
  const averageRating = 5.0
  const totalReviews = 47

  const nextReview = () => {
    setCurrentReview((prev) => (prev + 1) % reviews.length)
  }

  const prevReview = () => {
    setCurrentReview((prev) => (prev - 1 + reviews.length) % reviews.length)
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long'
    })
  }

  return (
    <section id="reviews" className="py-24 bg-gradient-to-b from-gray-50 to-neu-base">
      <div className="container mx-auto max-w-6xl px-4">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-6xl font-black text-gray-900 mb-6">
            Client
            <br />
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Reviews
            </span>
          </h2>
          
          {/* Google Rating Summary */}
          <div className="flex items-center justify-center space-x-6 mb-8">
            <div className="bg-neu-base rounded-2xl p-6 shadow-neu-raised">
              <div className="flex items-center space-x-2 mb-2">
                <span className="text-3xl font-black text-gray-900">{averageRating}</span>
                <div className="flex space-x-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      className="w-6 h-6 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>
              </div>
              <p className="text-gray-600">Based on {totalReviews} reviews</p>
            </div>
            
            <a
              href="https://g.co/kgs/Xk8wwxZ"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-neu-base rounded-2xl p-6 shadow-neu-raised hover:shadow-neu-hover transition-all duration-300 flex items-center space-x-3"
            >
              <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">G</span>
              </div>
              <div>
                <div className="font-semibold text-gray-900">View on Google</div>
                <div className="text-sm text-gray-600">See more reviews</div>
              </div>
              <ExternalLink className="w-4 h-4 text-gray-400" />
            </a>
          </div>
        </div>

        {/* Featured Review */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-neu-base rounded-3xl p-8 shadow-neu-raised relative">
            
            {/* Quote Icon */}
            <div className="absolute top-6 left-6">
              <Quote className="w-8 h-8 text-blue-500 opacity-50" />
            </div>
            
            {/* Review Content */}
            <div className="pt-8">
              <div className="flex items-center space-x-1 mb-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    className={`w-5 h-5 ${
                      star <= reviews[currentReview].rating
                        ? 'fill-yellow-400 text-yellow-400'
                        : 'text-gray-300'
                    }`}
                  />
                ))}
              </div>
              
              <blockquote className="text-xl text-gray-700 leading-relaxed mb-6">
                &quot;{reviews[currentReview].text}&quot;
              </blockquote>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                    <span className="text-white font-semibold">
                      {reviews[currentReview].name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">
                      {reviews[currentReview].name}
                    </div>
                    <div className="text-sm text-gray-600">
                      {formatDate(reviews[currentReview].date)} • Verified Customer
                    </div>
                  </div>
                </div>
                
                {/* Navigation */}
                <div className="flex space-x-2">
                  <button
                    onClick={prevReview}
                    className="w-10 h-10 bg-neu-base rounded-full shadow-neu-raised hover:shadow-neu-hover transition-all duration-300 flex items-center justify-center"
                  >
                    <span className="text-gray-600">←</span>
                  </button>
                  <button
                    onClick={nextReview}
                    className="w-10 h-10 bg-neu-base rounded-full shadow-neu-raised hover:shadow-neu-hover transition-all duration-300 flex items-center justify-center"
                  >
                    <span className="text-gray-600">→</span>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Review Indicators */}
          <div className="flex justify-center mt-6 space-x-2">
            {reviews.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentReview(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 shadow-neu-raised ${
                  index === currentReview 
                    ? 'bg-blue-500 shadow-neu-hover' 
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-neu-base rounded-3xl p-8 shadow-neu-raised max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to join these satisfied clients?
            </h3>
            <p className="text-gray-600 mb-6">
              Experience the same exceptional service and expertise that has earned Charlie these outstanding reviews.
            </p>
            <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-2xl font-semibold shadow-neu-raised hover:shadow-neu-hover transition-all duration-300">
              Get Your Free Quote Today
            </button>
          </div>
        </div>

      </div>
    </section>
  )
}