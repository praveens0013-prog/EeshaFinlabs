import { CheckCircle, Shield, Clock, Award, Calculator } from 'lucide-react';
import { useState } from 'react';

export default function Hero() {
  const [loanAmount, setLoanAmount] = useState(500000);
  const [interestRate, setInterestRate] = useState(10.5);
  const [tenure, setTenure] = useState(60);

  const scrollToForm = () => {
    document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  const calculateEMI = () => {
    const monthlyRate = interestRate / 12 / 100;
    const emi = loanAmount * monthlyRate * Math.pow(1 + monthlyRate, tenure) / (Math.pow(1 + monthlyRate, tenure) - 1);
    const totalPayable = emi * tenure;
    const totalInterest = totalPayable - loanAmount;
    return { emi: Math.round(emi), totalPayable: Math.round(totalPayable), totalInterest: Math.round(totalInterest) };
  };

  const { emi, totalPayable, totalInterest } = calculateEMI();

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(value);
  };

  return (
    <section className="relative bg-gradient-to-br from-white via-blue-50 to-white text-gray-900 overflow-hidden pt-28 pb-20 lg:py-28">
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100 rounded-full opacity-20 blur-3xl -z-10"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-50 rounded-full opacity-20 blur-3xl -z-10"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center space-x-2 bg-blue-50 px-4 py-2.5 rounded-full border border-blue-200">
              <Shield className="w-4 h-4 text-blue-600" />
              <span className="text-sm font-medium text-gray-700">RBI Regulated Partners | Trusted by 50,000+ Customers</span>
            </div>

            <div className="space-y-4">
              <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight text-gray-900">
                Your Trusted Partner for <span className="text-blue-600">Instant Loan Solutions</span>
              </h1>
              <p className="text-xl lg:text-2xl text-gray-600 leading-relaxed">
                Compare offers from 30+ banks and NBFCs. Get approved in minutes, not days.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={scrollToForm}
                className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
              >
                Apply Now
              </button>
              <button
                onClick={scrollToForm}
                className="bg-white border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-50 transition-all duration-300"
              >
                Check Eligibility
              </button>
            </div>

            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-gray-200">
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold text-lg text-gray-900">100% Paperless</p>
                  <p className="text-sm text-gray-600">Digital Process</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Clock className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold text-lg text-gray-900">Quick Approval</p>
                  <p className="text-sm text-gray-600">Within 24 Hours</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Award className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold text-lg text-gray-900">Best Rates</p>
                  <p className="text-sm text-gray-600">Guaranteed</p>
                </div>
              </div>
            </div>
          </div>

          <div className="hidden lg:block">
            <div className="bg-white rounded-2xl p-8 border border-blue-200 shadow-2xl">
              <div className="flex items-center space-x-2 mb-6">
                <Calculator className="w-6 h-6 text-blue-600" />
                <h3 className="text-xl font-bold text-gray-900">EMI Calculator</h3>
              </div>

              <div className="space-y-6">
                <div>
                  <label className="block text-sm text-gray-700 mb-2 font-medium">Loan Amount</label>
                  <div className="flex items-center space-x-2">
                    <input
                      type="range"
                      min="50000"
                      max="5000000"
                      step="50000"
                      value={loanAmount}
                      onChange={(e) => setLoanAmount(Number(e.target.value))}
                      className="flex-1 h-2 bg-blue-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
                    />
                  </div>
                  <input
                    type="number"
                    value={loanAmount}
                    onChange={(e) => setLoanAmount(Number(e.target.value))}
                    className="w-full mt-2 bg-gray-50 border border-gray-300 rounded-lg px-3 py-2 text-gray-900 text-sm"
                  />
                  <p className="text-blue-600 text-sm mt-2 font-semibold">{formatCurrency(loanAmount)}</p>
                </div>

                <div>
                  <label className="block text-sm text-gray-700 mb-2 font-medium">Interest Rate (% p.a.)</label>
                  <div className="flex items-center space-x-2">
                    <input
                      type="range"
                      min="8"
                      max="20"
                      step="0.5"
                      value={interestRate}
                      onChange={(e) => setInterestRate(Number(e.target.value))}
                      className="flex-1 h-2 bg-blue-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
                    />
                  </div>
                  <input
                    type="number"
                    value={interestRate}
                    onChange={(e) => setInterestRate(Number(e.target.value))}
                    className="w-full mt-2 bg-gray-50 border border-gray-300 rounded-lg px-3 py-2 text-gray-900 text-sm"
                    step="0.5"
                  />
                  <p className="text-blue-600 text-sm mt-2 font-semibold">{interestRate.toFixed(1)}% per annum</p>
                </div>

                <div>
                  <label className="block text-sm text-gray-700 mb-2 font-medium">Tenure (Months)</label>
                  <div className="flex items-center space-x-2">
                    <input
                      type="range"
                      min="12"
                      max="120"
                      step="6"
                      value={tenure}
                      onChange={(e) => setTenure(Number(e.target.value))}
                      className="flex-1 h-2 bg-blue-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
                    />
                  </div>
                  <input
                    type="number"
                    value={tenure}
                    onChange={(e) => setTenure(Number(e.target.value))}
                    className="w-full mt-2 bg-gray-50 border border-gray-300 rounded-lg px-3 py-2 text-gray-900 text-sm"
                    step="6"
                  />
                  <p className="text-blue-600 text-sm mt-2 font-semibold">{(tenure / 12).toFixed(1)} years</p>
                </div>

                <div className="border-t border-gray-300 pt-4 space-y-3">
                  <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg border border-blue-200">
                    <span className="text-gray-700">Monthly EMI</span>
                    <span className="font-bold text-xl text-blue-600">{formatCurrency(emi)}</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-orange-50 rounded-lg border border-orange-200">
                    <span className="text-gray-700">Total Interest</span>
                    <span className="font-bold text-lg text-orange-600">{formatCurrency(totalInterest)}</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg border border-green-200">
                    <span className="text-gray-700">Total Amount</span>
                    <span className="font-bold text-xl text-green-600">{formatCurrency(totalPayable)}</span>
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
