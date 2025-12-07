import { FileText, Search, GitCompare, CheckCircle } from 'lucide-react';

const steps = [
  {
    icon: FileText,
    number: '01',
    title: 'Submit Your Details',
    description: 'Fill out our simple online form with basic information about your loan requirement and personal details. Takes less than 2 minutes.',
    duration: '2 Minutes'
  },
  {
    icon: Search,
    number: '02',
    title: 'Instant Eligibility Check',
    description: 'Our advanced algorithm analyzes your profile and checks eligibility across 30+ lenders without affecting your credit score.',
    duration: '5 Minutes'
  },
  {
    icon: GitCompare,
    number: '03',
    title: 'Compare Best Offers',
    description: 'Review personalized loan offers from multiple banks and NBFCs. Compare interest rates, tenure, and terms to choose the best fit.',
    duration: '10 Minutes'
  },
  {
    icon: CheckCircle,
    number: '04',
    title: 'Get Approved & Funded',
    description: 'Complete minimal documentation, e-sign the agreement, and receive funds directly in your bank account within 24 hours.',
    duration: '24 Hours'
  }
];

export default function HowItWorks() {
  const scrollToForm = () => {
    document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="how-it-works" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            How It Works
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 leading-relaxed">
            Get your loan approved in 4 simple steps. Fast, secure, and completely digital.
          </p>
        </div>

        <div className="relative">
          <div className="hidden lg:block absolute top-1/4 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-200 via-blue-400 to-blue-200 transform -translate-y-1/2" style={{ top: '120px' }}></div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={index} className="relative">
                  <div className="bg-white border-2 border-gray-200 rounded-2xl p-8 hover:border-blue-500 hover:shadow-xl transition-all duration-300 h-full">
                    <div className="flex flex-col items-center text-center">
                      <div className="relative mb-6">
                        <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center shadow-lg">
                          <Icon className="w-12 h-12 text-white" />
                        </div>
                        <div className="absolute -top-2 -right-2 w-12 h-12 bg-blue-900 text-white rounded-full flex items-center justify-center font-bold text-lg shadow-lg">
                          {step.number}
                        </div>
                      </div>

                      <h3 className="text-2xl font-bold text-gray-900 mb-3">{step.title}</h3>
                      <p className="text-gray-600 leading-relaxed mb-4">{step.description}</p>

                      <div className="mt-auto pt-4">
                        <div className="inline-flex items-center space-x-2 bg-blue-50 px-4 py-2 rounded-full border border-blue-200">
                          <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          <span className="text-sm font-semibold text-blue-600">{step.duration}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="mt-16 bg-gradient-to-r from-blue-50 to-blue-100 rounded-2xl p-8 lg:p-12 border border-blue-200">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                Ready to Get Started?
              </h3>
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                Take the first step towards your financial goals. Our expert team is ready to assist you in finding the perfect loan solution tailored to your needs.
              </p>
              <button
                onClick={scrollToForm}
                className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl inline-flex items-center space-x-2"
              >
                <span>Start Your Application</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg">
              <h4 className="font-bold text-xl text-gray-900 mb-6">What You'll Need</h4>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Identity Proof</p>
                    <p className="text-sm text-gray-600">PAN Card, Aadhaar Card</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Income Proof</p>
                    <p className="text-sm text-gray-600">Salary slips, Bank statements, ITR</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Address Proof</p>
                    <p className="text-sm text-gray-600">Utility bills, Rental agreement</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Photographs</p>
                    <p className="text-sm text-gray-600">Recent passport-size photos</p>
                  </div>
                </div>
              </div>
              <p className="text-xs text-gray-500 mt-6 pt-6 border-t border-gray-200">
                Additional documents may be required based on loan type and lender requirements
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
