import { Building2, Phone, Mail, MapPin, Facebook, Twitter, Linkedin, Instagram, MessageCircle } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Personal Loan', href: '#products' },
    { name: 'Business Loan', href: '#products' },
    { name: 'Home Loan', href: '#products' },
    { name: 'Loan Against Property', href: '#products' }
  ];

  const companyLinks = [
    { name: 'About Us', href: '#about' },
    { name: 'Our Partners', href: '#partners' },
    { name: 'Why Choose Us', href: '#why-choose-us' },
    { name: 'How It Works', href: '#how-it-works' }
  ];

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-12">
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <Building2 className="w-8 h-8 text-blue-400" />
              <span className="text-2xl font-bold text-white">Eesha Finlabs</span>
            </div>
            <p className="text-gray-400 leading-relaxed mb-6">
              Your trusted partner in accessing the best loan solutions from India's leading banks and NBFCs. Making credit simple, fast, and transparent.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-white font-bold text-lg mb-4">Loan Products</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-blue-400 transition-colors flex items-center space-x-2"
                  >
                    <span className="w-1.5 h-1.5 bg-blue-400 rounded-full"></span>
                    <span>{link.name}</span>
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="#products"
                  className="text-gray-400 hover:text-blue-400 transition-colors flex items-center space-x-2"
                >
                  <span className="w-1.5 h-1.5 bg-blue-400 rounded-full"></span>
                  <span>Credit Card</span>
                </a>
              </li>
              <li>
                <a
                  href="#products"
                  className="text-gray-400 hover:text-blue-400 transition-colors flex items-center space-x-2"
                >
                  <span className="w-1.5 h-1.5 bg-blue-400 rounded-full"></span>
                  <span>Working Capital</span>
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold text-lg mb-4">Company</h3>
            <ul className="space-y-3">
              {companyLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-blue-400 transition-colors flex items-center space-x-2"
                  >
                    <span className="w-1.5 h-1.5 bg-blue-400 rounded-full"></span>
                    <span>{link.name}</span>
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="#contact-form"
                  className="text-gray-400 hover:text-blue-400 transition-colors flex items-center space-x-2"
                >
                  <span className="w-1.5 h-1.5 bg-blue-400 rounded-full"></span>
                  <span>Contact Us</span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-blue-400 transition-colors flex items-center space-x-2"
                >
                  <span className="w-1.5 h-1.5 bg-blue-400 rounded-full"></span>
                  <span>Terms of Service</span>
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold text-lg mb-4">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <Phone className="w-5 h-5 text-blue-400 flex-shrink-0 mt-1" />
                <div>
                  <p className="text-white font-semibold">+91 99899 20078</p>
                  <p className="text-sm text-gray-400">Mon-Sat, 9 AM - 7 PM</p>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <Mail className="w-5 h-5 text-blue-400 flex-shrink-0 mt-1" />
                <div>
                  <p className="text-white font-semibold break-all">support@eeshafinlabs.com</p>
                  <p className="text-sm text-gray-400">24/7 Email Support</p>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-blue-400 flex-shrink-0 mt-1" />
                <div>
                  <p className="text-white font-semibold">Mumbai, Maharashtra</p>
                  <p className="text-sm text-gray-400">Serving PAN India</p>
                </div>
              </li>
            </ul>

            <a
              href="https://wa.me/919989920078"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center space-x-2 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors"
            >
              <MessageCircle className="w-5 h-5" />
              <span>WhatsApp Us</span>
            </a>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 space-y-6">
          <div className="bg-gray-800 rounded-lg p-6">
            <h4 className="text-white font-bold mb-3">Important Disclaimer</h4>
            <p className="text-sm text-gray-400 leading-relaxed mb-3">
              Eesha Finlabs operates as a Direct Selling Agent (DSA) and loan facilitator. We do not directly disburse loans. All loan applications are processed and approved by our partner banks and Non-Banking Financial Companies (NBFCs), which are regulated by the Reserve Bank of India (RBI). Final approval, interest rates, processing fees, and loan terms are determined solely by the respective lending institution based on their internal policies and the applicant's creditworthiness.
            </p>
            <p className="text-sm text-gray-400 leading-relaxed mb-3">
              <span className="text-white font-semibold">No Upfront Fees:</span> Eesha Finlabs does not charge any upfront fees from customers for loan applications or advisory services. We earn commission from our banking partners only upon successful loan disbursal. Any processing fees, documentation charges, or other costs are collected directly by the lending institution as per their standard practices.
            </p>
            <p className="text-sm text-gray-400 leading-relaxed mb-3">
              <span className="text-white font-semibold">Credit Check:</span> By applying through our platform, you authorize us and our partner lenders to access your credit information from credit bureaus for eligibility assessment. Loan approval is subject to credit verification, document authentication, and fulfillment of lender-specific criteria.
            </p>
            <p className="text-sm text-gray-400 leading-relaxed">
              <span className="text-white font-semibold">Privacy & Data Security:</span> Your personal and financial information is protected with industry-standard encryption and security protocols. We comply with applicable data protection regulations and only share your information with authorized lending institutions for loan processing purposes. Please refer to our Privacy Policy for detailed information.
            </p>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-gray-400">
              &copy; {currentYear} Eesha Finlabs. All rights reserved.
            </p>
            <div className="flex items-center space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                Terms & Conditions
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                Grievance Redressal
              </a>
            </div>
          </div>

          <div className="text-center">
            <p className="text-xs text-gray-500">
              *Interest rates, loan amounts, and tenure mentioned are indicative and subject to change based on lender policies and applicant eligibility.
            </p>
          </div>
        </div>
      </div>

      <a
        href="#"
        className="fixed bottom-6 right-6 w-14 h-14 bg-blue-600 text-white rounded-full shadow-2xl flex items-center justify-center hover:bg-blue-700 transition-all hover:scale-110 z-50"
        onClick={(e) => {
          e.preventDefault();
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
        </svg>
      </a>
    </footer>
  );
}
