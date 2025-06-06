import { Home, RefreshCw, DollarSign, Shield, Users, Building, Award, Heart } from 'lucide-react'

interface ServicesProps {
  bgGradient: string;
}

const services = [
  {
    icon: Home,
    title: "Purchase Loans",
    description: "First-time buyers to luxury homes, we'll find the perfect loan for your dream property."
  },
  {
    icon: RefreshCw,
    title: "Refinance Loans",
    description: "Lower your rate, reduce payments, or access equity with our streamlined refinance process."
  },
  {
    icon: DollarSign,
    title: "DSCR & Non-QM",
    description: "Perfect for investors & self-employed borrowers that need simpler, more flexible income documentation requirements."
  },
  {
    icon: Shield,
    title: "FHA",
    description: "Government-backed loans with low down payments and flexible credit requirements."
  },
  {
    icon: Users,
    title: "VA",
    description: "Exclusive benefits for veterans and military families, including zero down payment options."
  },
  {
    icon: Building,
    title: "Conventional",
    description: "Traditional financing with competitive rates and flexible terms for qualified borrowers."
  },
  {
    icon: Award,
    title: "Jumbo",
    description: "Financing for luxury properties exceeding conventional loan limits."
  },
  {
    icon: Heart,
    title: "First-Time Homebuyer Programs",
    description: "Special programs and guidance to help you achieve homeownership for the first time."
  }
]

export default function Services({ bgGradient }: ServicesProps) {
  return (
    <section id="services" className={`py-24 ${bgGradient}`}>
      <div className="container mx-auto max-w-7xl px-4">
        
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl lg:text-6xl font-black text-gray-900 mb-6">
            Loan&nbsp; 
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Products&nbsp; 
            </span>
            &amp;
            <br />
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Services
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Whether you&apos;re buying your first home or refinancing your forever home, 
            we have the expertise and lender network to find your perfect loan.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon
            return (
              <div 
                key={index}
                className="flex flex-col justify-between items-center bg-neu-base rounded-3xl p-8 shadow-neu-raised hover:shadow-neu-hover transition-all duration-300 group"
              >
                <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl p-4 w-16 h-16 flex items-center justify-center mb-6 shadow-neu-raised group-hover:shadow-neu-hover transition-all duration-300">
                  <IconComponent className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {service.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
            )
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-neu-base rounded-3xl p-8 shadow-neu-raised max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Not sure which loan is right for you?
            </h3>
            <p className="text-gray-600 mb-6">
              Let&apos;s discuss your goals and find the perfect financing solution together.
            </p>
            <a href="#contact" className="bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:text-gray-300 px-8 py-4 rounded-2xl font-semibold shadow-neu-raised hover:shadow-neu-hover transition-all duration-300">
              Schedule a Consultation
            </a>
          </div>
        </div>

      </div>
    </section>
  )
}