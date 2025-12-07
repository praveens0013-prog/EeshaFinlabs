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
    <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjA1IiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-20"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20">
              <Shield className="w-4 h-4" />
              <span className="text-sm font-medium">RBI Regulated Partners | Trusted by 50,000+ Customers</span>
            </div>

            <div className="space-y-4">
              <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight">
                Your Trusted Partner for <span className="text-blue-300">Instant Loan Solutions</span>
              </h1>
              <p className="text-xl lg:text-2xl text-blue-100 leading-relaxed">
                Compare offers from 30+ banks and NBFCs. Get approved in minutes, not days.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={scrollToForm}
                className="bg-white text-blue-900 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-50 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-0.5"
              >
                Apply Now
              </button>
              <button
                onClick={scrollToForm}
                className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white/10 transition-all duration-300"
              >
                Check Eligibility
              </button>
            </div>

            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-white/20">
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold text-lg">100% Paperless</p>
                  <p className="text-sm text-blue-200">Digital Process</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Clock className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold text-lg">Quick Approval</p>
                  <p className="text-sm text-blue-200">Within 24 Hours</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Award className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold text-lg">Best Rates</p>
                  <p className="text-sm text-blue-200">Guaranteed</p>
                </div>
              </div>
            </div>
          </div>

          <div className="hidden lg:block">
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 shadow-2xl">
              <div className="flex items-center space-x-2 mb-6">
                <Calculator className="w-6 h-6 text-blue-300" />
                <h3 className="text-xl font-bold">EMI Calculator</h3>
              </div>

              <div className="space-y-6">
                <div>
                  <label className="block text-sm text-blue-100 mb-2">Loan Amount</label>
                  <div className="flex items-center space-x-2">
                    <input
                      type="range"
                      min="50000"
                      max="5000000"
                      step="50000"
                      value={loanAmount}
                      onChange={(e) => setLoanAmount(Number(e.target.value))}
                      className="flex-1 h-2 bg-white/20 rounded-lg appearance-none cursor-pointer accent-blue-300"
                    />
                  </div>
                  <input
                    type="number"
                    value={loanAmount}
                    onChange={(e) => setLoanAmount(Number(e.target.value))}
                    className="w-full mt-2 bg-white/10 border border-white/30 rounded-lg px-3 py-2 text-white text-sm"
                  />
                  <p className="text-blue-200 text-sm mt-2">{formatCurrency(loanAmount)}</p>
                </div>

                <div>
                  <label className="block text-sm text-blue-100 mb-2">Interest Rate (% p.a.)</label>
                  <div className="flex items-center space-x-2">
                    <input
                      type="range"
                      min="8"
                      max="20"
                      step="0.5"
                      value={interestRate}
                      onChange={(e) => setInterestRate(Number(e.target.value))}
                      className="flex-1 h-2 bg-white/20 rounded-lg appearance-none cursor-pointer accent-blue-300"
                    />
                  </div>
                  <input
                    type="number"
                    value={interestRate}
                    onChange={(e) => setInterestRate(Number(e.target.value))}
                    className="w-full mt-2 bg-white/10 border border-white/30 rounded-lg px-3 py-2 text-white text-sm"
                    step="0.5"
                  />
                  <p className="text-blue-200 text-sm mt-2">{interestRate.toFixed(1)}% per annum</p>
                </div>

                <div>
                  <label className="block text-sm text-blue-100 mb-2">Tenure (Months)</label>
                  <div className="flex items-center space-x-2">
                    <input
                      type="range"
                      min="12"
                      max="120"
                      step="6"
                      value={tenure}
                      onChange={(e) => setTenure(Number(e.target.value))}
                      className="flex-1 h-2 bg-white/20 rounded-lg appearance-none cursor-pointer accent-blue-300"
                    />
                  </div>
                  <input
                    type="number"
                    value={tenure}
                    onChange={(e) => setTenure(Number(e.target.value))}
                    className="w-full mt-2 bg-white/10 border border-white/30 rounded-lg px-3 py-2 text-white text-sm"
                    step="6"
                  />
                  <p className="text-blue-200 text-sm mt-2">{(tenure / 12).toFixed(1)} years</p>
                </div>

                <div className="border-t border-white/20 pt-4 space-y-3">
                  <div className="flex items-center justify-between p-3 bg-white/10 rounded-lg">
                    <span className="text-blue-100">Monthly EMI</span>
                    <span className="font-bold text-xl text-blue-300">{formatCurrency(emi)}</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-white/10 rounded-lg">
                    <span className="text-blue-100">Total Interest</span>
                    <span className="font-bold text-lg text-orange-300">{formatCurrency(totalInterest)}</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-green-500/20 rounded-lg border border-green-400/30">
                    <span className="text-green-100">Total Amount</span>
                    <span className="font-bold text-xl text-green-300">{formatCurrency(totalPayable)}</span>
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
