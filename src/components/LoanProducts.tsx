import { Wallet, Briefcase, Home, Building2, CreditCard, TrendingUp } from 'lucide-react';

interface LoanProduct {
  icon: React.ElementType;
  title: string;
  description: string;
  benefits: string[];
  amount: string;
  rate: string;
  color: string;
}

const products: LoanProduct[] = [
  {
    icon: Wallet,
    title: 'Personal Loan',
    description: 'Instant funds for any personal requirement, from medical emergencies to dream vacations.',
    benefits: [
      'Loan up to ₹40 lakhs',
      'Minimal documentation',
      'Flexible repayment tenure',
      'No collateral required'
    ],
    amount: '₹50K - ₹1Cr',
    rate: 'From 9.5%*',
    color: 'blue'
  },
  {
    icon: Briefcase,
    title: 'Business Loan',
    description: 'Fuel your business growth with customized financing solutions for working capital and expansion.',
    benefits: [
      'Up to ₹75 lakhs funding',
      'Quick approval process',
      'Competitive interest rates',
      'Flexible tenure options'
    ],
    amount: '₹1L - ₹50Cr',
    rate: 'From 11%*',
    color: 'green'
  },
  {
    icon: Home,
    title: 'Home Loan',
    description: 'Turn your dream home into reality with affordable home loan solutions from top banks.',
    benefits: [
      'Up to 90% property value',
      'Tenure up to 30 years',
      'Balance transfer facility',
      'Tax benefits available'
    ],
    amount: '₹5L - ₹5Cr',
    rate: 'From 8.5%*',
    color: 'purple'
  },
  {
    icon: Building2,
    title: 'Loan Against Property',
    description: 'Unlock the value of your property for business or personal needs with attractive interest rates.',
    benefits: [
      'Up to 70% property value',
      'Higher loan amounts',
      'Longer repayment period',
      'Multi-purpose usage'
    ],
    amount: '₹10L - ₹10Cr',
    rate: 'From 8.5%*',
    color: 'orange'
  },
  {
    icon: CreditCard,
    title: 'Credit Card',
    description: 'Access premium credit cards from leading banks with exclusive rewards and benefits.',
    benefits: [
      'Instant approval options',
      'Welcome bonus rewards',
      'Cashback & travel benefits',
      'Zero joining fee cards'
    ],
    amount: 'Up to ₹10L Limit',
    rate: 'Reward Points',
    color: 'pink'
  },
  {
    icon: TrendingUp,
    title: 'Working Capital',
    description: 'Maintain healthy cash flow and manage day-to-day business operations seamlessly.',
    benefits: [
      'Overdraft facility',
      'Pay only for utilized amount',
      'Instant fund access',
      'Renewable credit line'
    ],
    amount: '₹5L - ₹1Cr',
    rate: 'From 10%*',
    color: 'teal'
  }
];

const colorClasses: Record<string, { bg: string; border: string; text: string; iconBg: string }> = {
  blue: { bg: 'bg-blue-50', border: 'border-blue-200', text: 'text-blue-600', iconBg: 'bg-blue-100' },
  green: { bg: 'bg-green-50', border: 'border-green-200', text: 'text-green-600', iconBg: 'bg-green-100' },
  purple: { bg: 'bg-purple-50', border: 'border-purple-200', text: 'text-purple-600', iconBg: 'bg-purple-100' },
  orange: { bg: 'bg-orange-50', border: 'border-orange-200', text: 'text-orange-600', iconBg: 'bg-orange-100' },
  pink: { bg: 'bg-pink-50', border: 'border-pink-200', text: 'text-pink-600', iconBg: 'bg-pink-100' },
  teal: { bg: 'bg-teal-50', border: 'border-teal-200', text: 'text-teal-600', iconBg: 'bg-teal-100' }
};

export default function LoanProducts() {
  const scrollToForm = () => {
    document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="products" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Comprehensive Loan Solutions
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 leading-relaxed">
            From personal aspirations to business ambitions, we have the right financial product for every need
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => {
            const colors = colorClasses[product.color];
            const Icon = product.icon;

            return (
              <div
                key={index}
                className={`${colors.bg} border ${colors.border} rounded-xl p-8 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1`}
              >
                <div className={`${colors.iconBg} w-16 h-16 rounded-lg flex items-center justify-center mb-6`}>
                  <Icon className={`w-8 h-8 ${colors.text}`} />
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mb-3">{product.title}</h3>
                <p className="text-gray-700 mb-6 leading-relaxed">{product.description}</p>

                <div className="space-y-3 mb-6">
                  {product.benefits.map((benefit, idx) => (
                    <div key={idx} className="flex items-start space-x-2">
                      <div className={`w-1.5 h-1.5 rounded-full ${colors.text.replace('text-', 'bg-')} mt-2 flex-shrink-0`}></div>
                      <span className="text-gray-700 text-sm">{benefit}</span>
                    </div>
                  ))}
                </div>

                <div className="flex items-center justify-between mb-6 pt-6 border-t border-gray-300">
                  <div>
                    <p className="text-sm text-gray-600">Amount</p>
                    <p className={`font-bold text-lg ${colors.text}`}>{product.amount}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-gray-600">Rate</p>
                    <p className={`font-bold text-lg ${colors.text}`}>{product.rate}</p>
                  </div>
                </div>

                <button
                  onClick={scrollToForm}
                  className={`w-full ${colors.text.replace('text-', 'bg-')} text-white py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity`}
                >
                  Apply Now
                </button>
              </div>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <p className="text-sm text-gray-500">
            *Interest rates and loan amounts are subject to eligibility, credit profile, and lender policies. Final terms will be confirmed by the respective bank/NBFC.
          </p>
        </div>
      </div>
    </section>
  );
}
