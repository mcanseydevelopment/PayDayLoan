import React from 'react';
import { Helmet } from 'react-helmet-async';

const Terms: React.FC = () => {
  const sections = [
    {
      title: "Introduction",
      content: `PlansLoan.com owns and operates the website located at PlansLoan.com (the "Site"). 
      PlansLoan.com provides and maintains this Site for your information, conditioned on your acceptance, 
      without modification, of the terms, conditions and notices contained in these Terms of Use and in our Privacy Policy.`
    },
    {
      title: "Products and Services",
      content: `PlansLoan.com is not a lender or lending partner and is not responsible for any lending product advertised 
      or offered to you, or for any credit decisions made about you. No specific loan products are offered to you 
      on this Site by PlansLoan.com. Specific loan products are offered to you directly by the lender or lending partner.`
    },
    {
      title: "E-Sign Consent",
      content: `You agree that clicking "Get Started" (or other such button you use to submit your form) acts as your 
      electronic signature. You further consent that we and any lender or lending partner we share your request with can 
      communicate with you electronically and that any required disclosures may be provided to you electronically, 
      including without limitation any notices of adverse action that a lender or lending partner is required to send to you.`
    },
    {
      title: "SMS Terms and Conditions",
      content: `By clicking "Submit", you agree to receive informational, promotional or marketing related SMS messages from 
      PlansLoan.com and marketing partners. This is a standard rate subscription service available on most carriers including 
      U.S. Cellular, AT&T, Cellular One, T-Mobile, Sprint, Boost, MetroPCS, Verizon Wireless, and others. Msg&Data Rates May Apply.`
    },
    {
      title: "Email Opt-In",
      content: `By providing PlansLoan.com with your email address, you agree to receive transactional and promotional emails 
      from PlansLoan.com, its marketing partners, lenders and lender networks.`
    },
    {
      title: "Loan Inquiry Policy",
      content: `PlansLoan.com reserves the right to reject your inquiry at any time for any reason not prohibited by law. 
      PlansLoan.com may require additional information or verification before your form is accepted.`
    },
    {
      title: "Credit References",
      content: `Participating lenders or lending partners may verify your social security number, driver's license number or 
      other federal or state identification, as well as review your credit worthiness through national databases.`
    },
    {
      title: "Restrictions",
      content: `You must be 18 years or older and a legal resident of the United States to submit a form. You agree not to 
      use this Site for any illegal or inappropriate activities.`
    },
    // Add more sections as needed
  ];

  return (
    <>
      <Helmet>
        <title>Terms of Use - PlansLoan</title>
        <meta name="description" content="Read our terms of use and conditions for using PlansLoan's online loan services." />
      </Helmet>
      <div className="min-h-screen bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
          {/* Header Section */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Terms of Use</h1>
            <p className="text-sm text-gray-600">Last Updated: March 4, 2025</p>
          </div>

          {/* Terms Sections */}
          <div className="space-y-6">
            {sections.map((section, index) => (
              <div 
                key={index}
                className="bg-white rounded-xl shadow-lg transition-all duration-300 hover:shadow-xl"
              >
                <div className="p-8">
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center">
                    <span className="bg-blue-100 text-blue-700 w-8 h-8 rounded-full flex items-center justify-center mr-3 text-sm">
                      {index + 1}
                    </span>
                    {section.title}
                  </h2>
                  <div className="prose prose-blue max-w-none">
                    <p className="text-gray-600 leading-relaxed">
                      {section.content}
                    </p>
                  </div>
                </div>
              </div>
            ))}

            {/* Contact Information Section */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="p-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-6 flex items-center">
                  <span className="bg-blue-100 text-blue-700 w-8 h-8 rounded-full flex items-center justify-center mr-3 text-sm">
                    {sections.length + 1}
                  </span>
                  Contact Information
                </h2>
                <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-lg p-6">
                  <div className="space-y-4">
                    <p className="font-medium text-gray-900">Company name: PlansLoan LLC</p>
                    <div className="flex items-start space-x-3">
                      <svg className="w-6 h-6 text-blue-600 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      <p className="text-gray-700">2504 Broadway, New York, NY 10025</p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <svg className="w-6 h-6 text-blue-600 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                      <p className="text-gray-700">support@plansloan.com</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Footer */}
          <footer className="mt-12 pt-8 border-t border-gray-200">
            <p className="text-sm text-gray-500 text-center">
              © {new Date().getFullYear()} PlansLoan.com. All rights reserved. NMLS ID# 12345
            </p>
          </footer>
        </div>
      </div>
    </>
  );
};

export default Terms;