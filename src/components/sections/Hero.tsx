import Image from 'next/image'

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-b from-neu-base to-slate-300 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Content Side */}
          <div className="space-y-8">
            {/* Go Rascal Logo */}
            <div className="flex items-center space-x-4">
              <div className="bg-neu-base rounded-2xl p-4 shadow-neu-raised">
                <Image
                  src="/images/go-rascal-logo.png"
                  alt="Go Rascal"
                  width={200}
                  height={60}
                  className="h-12 w-auto"
                />
              </div>
            </div>

            {/* Main Headline */}
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-7xl font-black text-gray-900 leading-tight">
                Your Trusted
                <br />
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Mortgage Expert
                </span>
              </h1>
              
              <p className="text-xl text-gray-600 max-w-lg leading-relaxed">
                7+ years of experience • $350M+ funded • Access to 100+ banks, credit unions, and mortgage companies through Go Rascal&apos;s expansive lender network
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#contact" className="bg-gray-900 text-white hover:bg-gray-500 shadow-neu-raised hover:shadow-neu-hover transition-all duration-300 text-lg px-8 py-6 rounded-xl font-semibold text-center">
                Let&apos;s Run Numbers
              </a>
              <a href="#reviews" className="bg-neu-base text-gray-900 hover:bg-gray-500 shadow-neu-raised hover:shadow-neu-hover transition-all duration-300 text-lg px-8 py-6 border-gray-900 border-2 rounded-xl font-semibold text-center">
                View My Reviews
              </a>
            </div>
          </div>

          {/* Image Side */}
          <div className="flex justify-center">
            <div className="relative">
              <div className="bg-neu-base rounded-full p-8 shadow-neu-raised">
                <Image
                  src="/images/charlie-headshot.png"
                  alt="Charlie Charboneau"
                  width={400}
                  height={400}
                  className="rounded-full w-60 h-60 object-cover"
                />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}