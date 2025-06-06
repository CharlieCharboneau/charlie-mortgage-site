'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Phone, Mail, MapPin, CheckCircle } from 'lucide-react'

interface ContactFormProps {
  bgGradient: string;
}

export default function ContactForm({ bgGradient }: ContactFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    loanType: '',
    propertyValue: '',
    currentLoanAmount: '',
    timeline: '',
    comments: ''
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    try {
      const response = await fetch('/api/submit-lead', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      })

      if (response.ok) {
        setIsSubmitted(true)
        // Reset form
        setFormData({
          name: '',
          email: '',
          phone: '',
          loanType: '',
          propertyValue: '',
          currentLoanAmount: '',
          timeline: '',
          comments: ''
        })
      } else {
        const errorData = await response.json()
        alert(`Error: ${errorData.error || 'Failed to submit form'}`)
      }
    } catch (error) {
      console.error('Form submission error:', error)
      alert('Error submitting form. Please try again or contact Charlie directly.')
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isSubmitted) {
    return (
      <section id="contact-success" className="py-24 bg-gradient-to-b from-neu-base to-gray-100">
        <div className="container mx-auto max-w-4xl px-4">
          <div className="bg-neu-base rounded-3xl p-12 shadow-neu-raised text-center">
            <div className="bg-green-100 rounded-full p-4 w-20 h-20 mx-auto mb-6 flex items-center justify-center">
              <CheckCircle className="w-10 h-10 text-green-600" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Thank You!
            </h2>
            <p className="text-xl text-gray-600 mb-6">
              Your information has been submitted successfully. Charlie will contact you within 24 hours to discuss your mortgage needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="tel:+12483317979"
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-xl font-semibold shadow-neu-raised hover:shadow-neu-hover transition-all duration-300"
              >
                Call Charlie Now
              </a>
              <button 
                onClick={() => setIsSubmitted(false)}
                className="bg-neu-base text-gray-700 px-6 py-3 rounded-xl font-semibold shadow-neu-raised hover:shadow-neu-hover transition-all duration-300"
              >
                Submit Another Request
              </button>
            </div>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section id="contact" className={`py-24 ${bgGradient}`}>
      <div className="container mx-auto max-w-7xl px-4">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-6xl font-black text-gray-900 mb-6">
            Ready to Get
            <br />
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Rolling?
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Let&apos;s discuss your mortgage needs and find the perfect loan solution. 
            Fill out the form below or contact me directly.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          
          {/* Contact Information */}
          <div className="lg:col-span-1 space-y-8">
            
            <div className="bg-neu-base rounded-3xl p-8 shadow-neu-raised">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Let&apos;s Connect
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl p-3 shadow-neu-raised">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Call or Text</div>
                    <a href="tel:+12483317979" className="text-blue-600 hover:text-blue-700">
                      (248) 331-7979
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl p-3 shadow-neu-raised">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Email</div>
                    <a href="mailto:charlie@gorascal.com" className="text-blue-600 hover:text-blue-700">
                      charlie@gorascal.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl p-3 shadow-neu-raised">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Serving</div>
                    <div className="text-gray-600">California, Colorado, Michigan, Georgia, Texas, &amp; Washington</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-neu-base rounded-3xl p-8 shadow-neu-raised">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Why Choose Charlie?
              </h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span>7+ years of mortgage expertise</span>
                </li>
                <li className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span>$350M+ in funded loans</span>
                </li>
                <li className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Access to 100+ lenders</span>
                </li>
                <li className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Tech-forward approach</span>
                </li>
              </ul>
            </div>

          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <form onSubmit={handleSubmit} className="bg-neu-base rounded-3xl p-8 shadow-neu-raised">
              <div className="grid md:grid-cols-2 gap-6">
                
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name *</Label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="bg-neu-base shadow-neu-inset border-2 border-gray-300 focus:shadow-neu-pressed"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email Address *</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="bg-neu-base shadow-neu-inset border-2 border-gray-300 focus:shadow-neu-pressed"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number *</Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="bg-neu-base shadow-neu-inset border-2 border-gray-300 focus:shadow-neu-pressed"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="loanType">Loan Type *</Label>
                  <select
                    id="loanType"
                    name="loanType"
                    required
                    value={formData.loanType}
                    onChange={handleChange}
                    className="w-full px-3 py-2 bg-neu-base shadow-neu-inset rounded-md border-2 border-gray-300 focus:shadow-neu-pressed focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="">Select loan type</option>
                    <option value="purchase">Purchase</option>
                    <option value="refinance">Refinance</option>
                    <option value="cash-out-refinance">Cash-Out Refinance</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="propertyValue">Property Value / Purchase Price</Label>
                  <Input
                    id="propertyValue"
                    name="propertyValue"
                    type="text"
                    placeholder="e.g., $500,000"
                    value={formData.propertyValue}
                    onChange={handleChange}
                    className="bg-neu-base shadow-neu-inset border-2 border-gray-300 focus:shadow-neu-pressed"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="timeline">Timeline</Label>
                  <select
                    id="timeline"
                    name="timeline"
                    value={formData.timeline}
                    onChange={handleChange}
                    className="w-full px-3 py-2 bg-neu-base shadow-neu-inset rounded-md border-2 border-gray-300 focus:shadow-neu-pressed focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="">Select timeline</option>
                    <option value="asap">ASAP</option>
                    <option value="30-days">Within 30 days</option>
                    <option value="60-days">Within 60 days</option>
                    <option value="90-days">90+ days</option>
                  </select>
                </div>

              </div>

              <div className="mt-6 space-y-2">
                <Label htmlFor="comments">Additional Comments</Label>
                <Textarea
                  id="comments"
                  name="comments"
                  rows={4}
                  placeholder="Tell me about your goals, questions, or any specific needs..."
                  value={formData.comments}
                  onChange={handleChange}
                  className="bg-neu-base shadow-neu-inset border-2 border-gray-300 focus:shadow-neu-pressed resize-none"
                />
              </div>

              <div className="mt-8">
                <Button 
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 text-lg font-semibold shadow-neu-raised hover:shadow-neu-hover disabled:opacity-50"
                >
                  {isSubmitting ? 'Submitting...' : 'Send My Information'}
                </Button>
              </div>

            </form>
          </div>

        </div>
      </div>
    </section>
  )
}