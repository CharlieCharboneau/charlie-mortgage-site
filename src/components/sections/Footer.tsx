import Image from 'next/image'
// import Link from 'next/link'
import { Phone, Mail, Linkedin, ExternalLink } from 'lucide-react'

export default function Footer() {
  return (
    <footer id="footer" className="bg-gray-900 text-white py-16">
      <div className="container mx-auto max-w-6xl px-4">
        
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Brand Section */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center space-x-4">
              <div className="bg-white rounded-xl p-3">
                <Image
                  src="/images/go-rascal-logo-circle.jpeg"
                  alt="Go Rascal"
                  width={60}
                  height={60}
                  className="w-12 h-12 rounded-lg"
                />
              </div>
              <div>
                <h3 className="text-2xl font-bold">Charlie Charboneau</h3>
                <p className="text-gray-300">Mortgage Expert | Powered By Go Rascal Inc</p>
              </div>
            </div>
            
            <p className="text-gray-300 leading-relaxed max-w-md">
              Your trusted mortgage expert with 7+ years of experience, $350M+ in funded loans, 
              and access to 100+ lenders through Go Rascal&apos;s network.
            </p>
            
            <div className="flex space-x-4">
              <a 
                href="https://www.linkedin.com/in/charliecharboneau/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 hover:bg-gray-700 rounded-xl p-3 transition-colors duration-300"
              >
                <Linkedin className="w-6 h-6" />
              </a>
            </div>
          </div>

          {/* Contact Information */}
          <div className="space-y-6">
            <h4 className="text-xl font-bold">Contact Info</h4>
            
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-blue-400" />
                <div>
                  <p className="text-sm text-gray-400">Phone</p>
                  <a 
                    href="tel:+12483317979" 
                    className="text-white hover:text-blue-400 transition-colors"
                  >
                    (248) 331-7979
                  </a>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-blue-400" />
                <div>
                  <p className="text-sm text-gray-400">Email</p>
                  <a 
                    href="mailto:charlie@gorascal.com" 
                    className="text-white hover:text-blue-400 transition-colors"
                  >
                    charlie@gorascal.com
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="text-xl font-bold">Quick Links</h4>
            
            <div className="space-y-3">
              <a 
                href="https://www.gorascal.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors"
              >
                <span>Go Rascal</span>
                <ExternalLink className="w-4 h-4" />
              </a>
              
              <a 
                href="https://g.co/kgs/Xk8wwxZ"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors"
              >
                <span>Google Reviews</span>
                <ExternalLink className="w-4 h-4" />
              </a>
              
              <a 
                href="#services" 
                className="text-gray-300 hover:text-white transition-colors block"
              >
                Loan Products
              </a>
              
              <a 
                href="#contact" 
                className="text-gray-300 hover:text-white transition-colors block"
              >
                Get Started
              </a>
            </div>
          </div>

        </div>

        {/* Legal & Professional Info */}
        <div className="border-t border-gray-800 pt-8">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            
            <div className="space-y-2">
              <p className="text-sm text-gray-400">
                Licensed Mortgage Loan Originator | NMLS# 1783089
              </p>
              <p className="text-sm text-gray-400">
                Go Rascal Inc | NMLS# 2072896
              </p>
            </div>

            <div className="text-right">
              <p className="text-sm text-gray-400">
                © 2025 Charlie Charboneau. All rights reserved.
              </p>
              <p className="text-sm text-gray-400">
                Proudly built with Next.js & Tailwind CSS
              </p>
            </div>

          </div>
        </div>

        {/* Disclaimer */}
        <div className="mt-8 p-6 bg-gray-800 rounded-2xl">
          <p className="text-xs text-gray-400 leading-relaxed">
            <strong>Disclaimer:</strong> This is not an offer to lend or extend credit. Information and/or dates are subject to change without notice. 
            All loans subject to credit approval. Other restrictions may apply. Mortgage loans may be arranged or made pursuant to a California 
            Finance Lenders License or a California Real Estate Broker License. Not all products or programs are available in all states. Loans are 
            arranged through third party lenders. This website is not authorized to conduct business by the New York State Department of Financial 
            Services and is not for use by New York borrowers.
          </p>
        </div>

      </div>
    </footer>
  )
}