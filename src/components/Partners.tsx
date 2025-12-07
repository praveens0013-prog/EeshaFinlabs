import { Building, CheckCircle } from 'lucide-react';

const partners = [
  { name: 'HDFC Bank', category: 'bank' },
  { name: 'ICICI Bank', category: 'bank' },
  { name: 'State Bank of India', category: 'bank' },
  { name: 'Axis Bank', category: 'bank' },
  { name: 'Kotak Mahindra Bank', category: 'bank' },
  { name: 'IDFC First Bank', category: 'bank' },
  { name: 'Yes Bank', category: 'bank' },
  { name: 'IndusInd Bank', category: 'bank' },
  { name: 'Bajaj Finserv', category: 'nbfc' },
  { name: 'Tata Capital', category: 'nbfc' },
  { name: 'Fullerton India', category: 'nbfc' },
  { name: 'Hero FinCorp', category: 'nbfc' },
  { name: 'HDB Financial Services', category: 'nbfc' },
  { name: 'Aditya Birla Finance', category: 'nbfc' },
  { name: 'Shriram Finance', category: 'nbfc' },
  { name: 'Muthoot Finance', category: 'nbfc' }
];

export default function Partners() {
  return (
    <section id="partners" className="py-20 bg-white border-y border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Our Banking Partners
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 leading-relaxed">
            Authorized partnerships with India's most trusted banks and NBFCs, giving you access to the best loan offers in the market
          </p>
        </div>

        <div className="relative mb-16 overflow-hidden">
          <style>{`
            @keyframes scroll-rtl {
              0% {
                transform: translateX(100%);
              }
              100% {
                transform: translateX(-100%);
              }
            }
            .carousel-scroll {
              animation: scroll-rtl 60s linear infinite;
            }
            .carousel-scroll:hover {
              animation-play-state: paused;
            }
          `}</style>

          <div className="flex gap-6 carousel-scroll">
            {[...partners, ...partners].map((partner, index) => (
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
                    {partner.category === 'bank' ? 'Bank' : 'NBFC'}
                  </p>
                </div>
              </div>
            ))}
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
