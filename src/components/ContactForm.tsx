import { Phone, Mail, MapPin, Lock } from 'lucide-react';

export default function ContactForm() {
  return (
    <section id="contact-form" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Get Your Loan Approved Today
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 leading-relaxed">
            Submit your details and our loan experts will contact you within 2 hours with the best offers
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* LEFT: Google Form embed */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-xl p-4 lg:p-6 border border-gray-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Loan Enquiry Form
              </h3>
              <p className="text-gray-600 mb-6">
                Fill in your details in the secure form below to start your loan application.
              </p>

              <div className="w-full min-h-[600px] border rounded-2xl overflow-hidden bg-white">
                <iframe
                  src="https://docs.google.com/forms/d/e/1FAIpQLSfX3bHurKbE2PVYV4NXEvodQFiZXsuN-JZCj-RL3__7EID13A/viewform?embedded=true"
                  width="100%"
                  height="900"
                  frameBorder={0}
                  title="Eesha Finlabs Lead Form"
                >
                  Loading…
                </iframe>
              </div>
            </div>
          </div>

          {/* RIGHT: Contact info + security – same as before */}
          <div className="space-y-6">
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Phone</p>
                    <p className="text-gray-600">+91 99899 20078</p>
                    <p className="text-sm text-gray-500 mt-1">Mon–Sat, 9 AM – 7 PM</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Email</p>
                    <p className="text-gray-600 break-all">support@eeshafinlabs.com</p>
                    <p className="text-sm text-gray-500 mt-1">24/7 Email Support</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-purple-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Office</p>
                    <p className="text-gray-600">Mumbai, Maharashtra</p>
                    <p className="text-sm text-gray-500 mt-1">Serving PAN India</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl shadow-lg p-8 text-white">
              <Lock className="w-12 h-12 mb-4" />
              <h3 className="text-xl font-bold mb-3">Secure & Confidential</h3>
              <p className="text-blue-100 mb-4">
                Your personal information is encrypted and protected. We never share your data with unauthorized parties.
              </p>
              <div className="flex items-center space-x-2 text-sm">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>256-bit SSL Encryption</span>
              </div>
            </div>

            <div className="bg-green-50 border border-green-200 rounded-2xl p-6">
              <h4 className="font-bold text-gray-900 mb-3">Quick Response Guarantee</h4>
              <p className="text-sm text-gray-700 mb-4">
                Our loan experts will contact you within 2 hours during business hours to discuss your requirements.
              </p>
              <div className="flex items-center space-x-2 text-green-700 text-sm font-semibold">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <span>Average Response: 1.5 Hours</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
