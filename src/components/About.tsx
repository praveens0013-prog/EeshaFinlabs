import { Target, Users, Zap, Shield } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            About Eesha Finlabs
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 leading-relaxed">
            Your dedicated financial partner, simplifying loan access through technology and trust
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-gray-900">Who We Are</h3>
            <p className="text-lg text-gray-700 leading-relaxed">
              Eesha Finlabs is a premier Direct Selling Agent (DSA) partner connecting individuals and businesses with India's leading banks and NBFCs. We leverage technology and deep industry relationships to make loan approval faster, simpler, and more transparent.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              With authorized partnerships across 30+ financial institutions, we offer unbiased loan comparisons tailored to your unique requirements, ensuring you get the best possible terms.
            </p>
            <div className="flex items-start space-x-4 bg-blue-50 p-6 rounded-lg border border-blue-100">
              <Shield className="w-8 h-8 text-blue-600 flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-semibold text-lg text-gray-900 mb-2">Our Promise</h4>
                <p className="text-gray-700">
                  Complete transparency, zero hidden charges, and dedicated support throughout your loan journey. Your financial goals are our priority.
                </p>
              </div>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-xl border border-blue-200 hover:shadow-lg transition-shadow">
              <Target className="w-12 h-12 text-blue-600 mb-4" />
              <h4 className="text-2xl font-bold text-gray-900 mb-2">Our Mission</h4>
              <p className="text-gray-700">
                Democratize access to credit by bridging the gap between borrowers and lenders through innovative technology.
              </p>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-xl border border-green-200 hover:shadow-lg transition-shadow">
              <Users className="w-12 h-12 text-green-600 mb-4" />
              <h4 className="text-2xl font-bold text-gray-900 mb-2">50,000+</h4>
              <p className="text-gray-700">
                Satisfied customers have trusted us with their financial requirements across India.
              </p>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-8 rounded-xl border border-purple-200 hover:shadow-lg transition-shadow">
              <Zap className="w-12 h-12 text-purple-600 mb-4" />
              <h4 className="text-2xl font-bold text-gray-900 mb-2">Tech-Driven</h4>
              <p className="text-gray-700">
                Advanced algorithms match you with the right lender, ensuring higher approval rates.
              </p>
            </div>

            <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-8 rounded-xl border border-orange-200 hover:shadow-lg transition-shadow">
              <Shield className="w-12 h-12 text-orange-600 mb-4" />
              <h4 className="text-2xl font-bold text-gray-900 mb-2">Secure</h4>
              <p className="text-gray-700">
                Bank-grade encryption protects your personal and financial information at all times.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-blue-900 to-blue-800 rounded-2xl p-8 lg:p-12 text-white">
          <div className="grid lg:grid-cols-3 gap-8 text-center">
            <div>
              <h4 className="text-4xl lg:text-5xl font-bold mb-2">30+</h4>
              <p className="text-blue-200 text-lg">Banking Partners</p>
            </div>
            <div>
              <h4 className="text-4xl lg:text-5xl font-bold mb-2">₹500 Cr+</h4>
              <p className="text-blue-200 text-lg">Loans Disbursed</p>
            </div>
            <div>
              <h4 className="text-4xl lg:text-5xl font-bold mb-2">24 Hours</h4>
              <p className="text-blue-200 text-lg">Average Approval Time</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
