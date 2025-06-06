interface AboutProps {
  bgGradient: string;
}

export default function About({ bgGradient }: AboutProps) {
  return (
    <section id="about" className={`py-24 ${bgGradient}`}>
      <div className="container mx-auto max-w-6xl px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-6xl font-black text-gray-900 mb-6">
            Meet Charlie
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            A tech-savvy mortgage professional combining 7+ years of industry
            expertise with modern innovation to deliver exceptional client
            experiences.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          {/* Story Content */}
          <div className="space-y-8">
            <div className="bg-neu-base rounded-3xl p-8 shadow-neu-raised">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                From Detroit to LA, Getting Deals Done
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                A Metro Detroit native, Charlie graduated from Boston College
                in 2018 and began his career as a mortgage loan officer with
                Rocket Mortgage. After four successful years and funding over
                $350M in loan volume, he moved to Better Mortgage and then 
                Impact Loans before finding his home with Go Rascal.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Now based in Los Angeles, Charlie provides deep expertise to
                clients while maintaining his commitment to exceptional service.
                As a loan officer with Go Rascal, Charlie has access to over 130 
                lenders and thousands of different mortgage products. This means
                Charlie can shop the market for you to find the best program,
                product, and price for your unique situation.
              </p>
            </div>

            <div className="bg-neu-base rounded-3xl p-8 shadow-neu-raised">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                More Than Just Mortgages
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Charlie&apos;s unique background as both a mortgage professional
                and software developer sets him apart. He built this website
                himself (writing in the third person is weird) and brings a tech-forward approach to the traditionally
                complex mortgage process, delivering a more streamlined & transparent experience to his clients.
              </p>
            </div>
          </div>

          {/* Stats & Credentials */}
          <div className="space-y-6">
            {/* Key Stats */}
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-neu-base rounded-2xl p-6 shadow-neu-raised text-center">
                <div className="text-3xl font-black text-blue-600 mb-2">7+</div>
                <div className="text-gray-700 font-medium">
                  Years Experience
                </div>
              </div>

              <div className="bg-neu-base rounded-2xl p-6 shadow-neu-raised text-center">
                <div className="text-3xl font-black text-purple-600 mb-2">
                  $350M+
                </div>
                <div className="text-gray-700 font-medium">Funded Volume</div>
              </div>
            </div>

            {/* Experience Timeline */}
            <div className="bg-neu-base rounded-3xl p-8 shadow-neu-raised">
              <h3 className="text-xl font-bold text-gray-900 mb-6">
                Professional Journey
              </h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="w-3 h-3 bg-blue-500 rounded-full shadow-neu-raised"></div>
                  <div>
                    <div className="font-semibold text-gray-900">Go Rascal</div>
                    <div className="text-sm text-gray-600">
                      Current • Loan Officer
                    </div>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-3 h-3 bg-gray-400 rounded-full shadow-neu-inset"></div>
                  <div>
                    <div className="font-semibold text-gray-900">
                      Impact Loans
                    </div>
                    <div className="text-sm text-gray-600">
                      2024 • Senior Loan Officer
                    </div>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-3 h-3 bg-gray-400 rounded-full shadow-neu-inset"></div>
                  <div>
                    <div className="font-semibold text-gray-900">
                      Better Mortgage
                    </div>
                    <div className="text-sm text-gray-600">
                      2023 • Loan Consultant
                    </div>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-3 h-3 bg-gray-400 rounded-full shadow-neu-inset"></div>
                  <div>
                    <div className="font-semibold text-gray-900">
                      Rocket Mortgage
                    </div>
                    <div className="text-sm text-gray-600">
                      2018-2022 • Mortgage Banker
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
