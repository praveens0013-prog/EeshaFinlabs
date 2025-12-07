import { Zap, Shield, Users, FileCheck, PhoneCall, Award, Lock, TrendingUp } from 'lucide-react';

const features = [
  {
    icon: Zap,
    title: 'Lightning-Fast Processing',
    description: 'Get loan approval in as little as 24 hours with our streamlined digital process. No lengthy paperwork, no endless waiting.',
    color: 'blue'
  },
  {
    icon: Shield,
    title: 'Bank-Grade Security',
    description: 'Your personal and financial data is protected with 256-bit SSL encryption and stored on secure servers compliant with RBI guidelines.',
    color: 'green'
  },
  {
    icon: Users,
    title: 'Dedicated Relationship Manager',
    description: 'A personal loan advisor guides you through every step, from application to disbursal, ensuring a smooth and hassle-free experience.',
    color: 'purple'
  },
  {
    icon: FileCheck,
    title: '100% Paperless Journey',
    description: 'Upload documents digitally, e-sign agreements, and complete the entire loan process from the comfort of your home or office.',
    color: 'orange'
  },
  {
    icon: PhoneCall,
    title: '24/7 Customer Support',
    description: 'Our support team is always available to answer your queries, resolve issues, and provide assistance whenever you need it.',
    color: 'pink'
  },
  {
    icon: Award,
    title: 'Transparent Pricing',
    description: 'No hidden charges, no processing fee surprises. Every cost is communicated upfront with complete clarity and transparency.',
    color: 'teal'
  },
  {
    icon: Lock,
    title: 'Zero Collateral Required',
    description: 'Most of our loan products are unsecured, meaning you don\'t need to pledge assets to access funds for your needs.',
    color: 'red'
  },
  {
    icon: TrendingUp,
    title: 'Credit Score Enhancement',
    description: 'We provide guidance on improving your credit profile and match you with lenders who consider your complete financial picture.',
    color: 'yellow'
  }
];

const colorClasses: Record<string, { bg: string; text: string; iconBg: string }> = {
  blue: { bg: 'bg-blue-50', text: 'text-blue-600', iconBg: 'bg-blue-100' },
  green: { bg: 'bg-green-50', text: 'text-green-600', iconBg: 'bg-green-100' },
  purple: { bg: 'bg-purple-50', text: 'text-purple-600', iconBg: 'bg-purple-100' },
  orange: { bg: 'bg-orange-50', text: 'text-orange-600', iconBg: 'bg-orange-100' },
  pink: { bg: 'bg-pink-50', text: 'text-pink-600', iconBg: 'bg-pink-100' },
  teal: { bg: 'bg-teal-50', text: 'text-teal-600', iconBg: 'bg-teal-100' },
  red: { bg: 'bg-red-50', text: 'text-red-600', iconBg: 'bg-red-100' },
  yellow: { bg: 'bg-amber-50', text: 'text-amber-600', iconBg: 'bg-amber-100' }
};

export default function WhyChooseUs() {
  return (
    <section id="why-choose-us" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Why Choose Eesha Finlabs?
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 leading-relaxed">
            We combine technology, expertise, and customer-centricity to deliver an unmatched loan experience
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {features.map((feature, index) => {
            const colors = colorClasses[feature.color];
            const Icon = feature.icon;

            return (
              <div
                key={index}
                className="bg-white rounded-xl p-6 hover:shadow-xl transition-all duration-300 border border-gray-200 hover:border-blue-300 transform hover:-translate-y-1"
              >
                <div className={`${colors.iconBg} w-14 h-14 rounded-lg flex items-center justify-center mb-4`}>
                  <Icon className={`w-7 h-7 ${colors.text}`} />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed text-sm">{feature.description}</p>
              </div>
            );
          })}
        </div>

        <div className="bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900 rounded-2xl p-8 lg:p-12 text-white">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl lg:text-4xl font-bold mb-4">
                Experience the Eesha Advantage
              </h3>
              <p className="text-blue-100 text-lg leading-relaxed mb-6">
                Join thousands of satisfied customers who trusted us with their financial needs. Our commitment to excellence, transparency, and customer satisfaction sets us apart in the industry.
              </p>
              <div className="flex items-center space-x-8">
                <div>
                  <p className="text-3xl font-bold">95%</p>
                  <p className="text-blue-200 text-sm">Approval Rate</p>
                </div>
                <div>
                  <p className="text-3xl font-bold">4.8/5</p>
                  <p className="text-blue-200 text-sm">Customer Rating</p>
                </div>
                <div>
                  <p className="text-3xl font-bold">24h</p>
                  <p className="text-blue-200 text-sm">Avg. Processing</p>
                </div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 rounded-full bg-green-400 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="text-blue-50">Instant eligibility check with soft credit inquiry</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 rounded-full bg-green-400 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="text-blue-50">Compare offers from 30+ lenders in real-time</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 rounded-full bg-green-400 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="text-blue-50">Get funds directly in your bank account</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 rounded-full bg-green-400 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="text-blue-50">Complete post-disbursal support and guidance</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
