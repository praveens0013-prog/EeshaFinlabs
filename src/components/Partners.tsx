import { Building, CheckCircle } from 'lucide-react';

const bankingPartners = [
  { name: 'HDFC Bank', category: 'bank' },
  { name: 'ICICI Bank', category: 'bank' },
  { name: 'State Bank of India', category: 'bank' },
  { name: 'Axis Bank', category: 'bank' },
  { name: 'Kotak Mahindra Bank', category: 'bank' },
  { name: 'IDFC First Bank', category: 'bank' },
  { name: 'Yes Bank', category: 'bank' },
  { name: 'IndusInd Bank', category: 'bank' },
  { name: 'Punjab National Bank', category: 'bank' },
  { name: 'Bank of Baroda', category: 'bank' },
  { name: 'Canara Bank', category: 'bank' },
  { name: 'Union Bank of India', category: 'bank' }
];

const nbfcPartners = [
  { name: 'Bajaj Finserv', category: 'nbfc' },
  { name: 'Tata Capital', category: 'nbfc' },
  { name: 'Fullerton India', category: 'nbfc' },
  { name: 'Hero FinCorp', category: 'nbfc' },
  { name: 'HDB Financial Services', category: 'nbfc' },
  { name: 'Aditya Birla Finance', category: 'nbfc' },
  { name: 'Shriram Finance', category: 'nbfc' },
  { name: 'Muthoot Finance', category: 'nbfc' },
  { name: 'Mahindra Finance', category: 'nbfc' },
  { name: 'L&T Finance', category: 'nbfc' },
  { name: 'Cholamandalam Finance', category: 'nbfc' },
  { name: 'IIFL Finance', category: 'nbfc' }
];

export default function Partners() {
  return (
    <section id="partners" className="py-20 bg-white border-y border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Our Financial Partners
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 leading-relaxed">
            Authorized partnerships with India's most trusted banks and NBFCs, giving you access to the best loan offers in the market
          </p>
        </div>

        {/* Banking Partners Section */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">Banking Partners</h3>
          <div className="relative overflow-hidden">
            <style>{`
              @keyframes scroll-rtl {
                0% {
                  transform: translateX(100%);
                }
                100% {
                  transform: translateX(-100%);
                }
              }
              .carousel-scroll-rtl {
                animation: scroll-rtl 40s linear infinite;
              }
              .carousel-scroll-rtl:hover {
                animation-play-state: paused;
              }
            `}</style>

            <div className="flex gap-6 carousel-scroll-rtl">
              {[...bankingPartners, ...bankingPartners].map((partner, index) => (
                <div
                  key={index}
                  className="bg-white border-2 border-gray-200 rounded-lg p-6 flex items-center justify-center hover:border-blue-500 hover:shadow-lg transition-all duration-300 group flex-shrink-0 min-w-[250px]"
                >
                  <div className="text-center">
                    <Building className="w-12 h-12 text-gray-400 group-hover:text-blue-600 transition-colors mx-auto mb-3" />
                    <p className="font-semibold text-gray-800 text-sm group-hover:text-blue-600 transition-colors">
                      {partner.name}
                    </p>
                    <p className="text-xs text-gray-500 mt-1 uppercase tracking-wide">
                      Bank
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* NBFC Partners Section */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">NBFC Partners</h3>
          <div className="relative overflow-hidden">
            <style>{`
              @keyframes scroll-ltr {
                0% {
                  transform: translateX(-100%);
                }
                100% {
                  transform: translateX(100%);
                }
              }
              .carousel-scroll-ltr {
                animation: scroll-ltr 40s linear infinite;
              }
              .carousel-scroll-ltr:hover {
                animation-play-state: paused;
              }
            `}</style>

            <div className="flex gap-6 carousel-scroll-ltr">
              {[...nbfcPartners, ...nbfcPartners].map((partner, index) => (
                <div
                  key={index}
                  className="bg-white border-2 border-gray-200 rounded-lg p-6 flex items-center justify-center hover:border-green-500 hover:shadow-lg transition-all duration-300 group flex-shrink-0 min-w-[250px]"
                >
                  <div className="text-center">
                    <Building className="w-12 h-12 text-gray-400 group-hover:text-green-600 transition-colors mx-auto mb-3" />
                    <p className="font-semibold text-gray-800 text-sm group-hover:text-green-600 transition-colors">
                      {partner.name}
                    </p>
                    <p className="text-xs text-gray-500 mt-1 uppercase tracking-wide">
                      NBFC
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-8 border border-blue-200">
            <CheckCircle className="w-12 h-12 text-blue-600 mb-4" />
            <h3 className="text-xl font-bold text-gray-900 mb-3">Multi-Lender Advantage</h3>
            <p className="text-gray-700 leading-relaxed">
              We compare loan offers from 30+ lenders simultaneously, ensuring you get the most competitive rates and terms available in the market.
            </p>
          </div>

          <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-8 border border-green-200">
            <CheckCircle className="w-12 h-12 text-green-600 mb-4" />
            <h3 className="text-xl font-bold text-gray-900 mb-3">Higher Approval Chances</h3>
            <p className="text-gray-700 leading-relaxed">
              Our relationships with multiple financial institutions mean better approval odds. If one lender declines, we have alternatives ready.
            </p>
          </div>

          <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-8 border border-purple-200">
            <CheckCircle className="w-12 h-12 text-purple-600 mb-4" />
            <h3 className="text-xl font-bold text-gray-900 mb-3">Unbiased Recommendations</h3>
            <p className="text-gray-700 leading-relaxed">
              We work for you, not the banks. Our recommendations are based solely on your best interests and financial requirements.
            </p>
          </div>
        </div>

        <div className="mt-12 bg-gray-50 border border-gray-200 rounded-lg p-6 text-center">
          <p className="text-sm text-gray-600">
            <span className="font-semibold text-gray-900">Important:</span> All our partner banks and NBFCs are regulated by the Reserve Bank of India (RBI). Your loan application is processed directly by these institutions following their standard lending policies and guidelines.
          </p>
        </div>
      </div>
    </section>
  );
}