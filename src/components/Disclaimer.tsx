import React from 'react';
import { Helmet } from 'react-helmet-async';
import { AlertTriangle, Info, Shield, Lock, FileCheck, Clock, AlertCircle } from 'lucide-react';

const Disclaimer: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Disclaimer - PlansLoan</title>
        <meta name="description" content="Important disclosures and disclaimers about PlansLoan's services. Please read carefully before using our services." />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
        {/* Header Banner */}
        <div className="bg-gradient-to-r from-blue-800 to-blue-600 text-white py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 flex items-center">
              <AlertTriangle className="mr-4" size={36} />
              Disclaimer
            </h1>
            <p className="text-blue-100 text-lg max-w-3xl">
              Important disclosures. Please read carefully before using our services.
            </p>
            <p className="mt-6 text-sm bg-blue-900 bg-opacity-30 inline-block py-1 px-3 rounded">
              Last Updated: March 4, 2025
            </p>
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
          {/* Primary Warning Notice */}
          <div className="bg-amber-50 border-l-4 border-amber-500 p-6 mb-10 rounded-r-lg">
            <div className="flex items-start">
              <AlertCircle className="text-amber-600 mr-4 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-amber-800 mb-2">Important Notice</h3>
                <p className="text-amber-700">
                  Persons facing serious financial difficulties should consider other alternatives or should seek out professional financial advice.
                </p>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="space-y-10">
            {/* Website Technology & Consent */}
            <section className="bg-white rounded-xl shadow-sm p-8 border-l-4 border-blue-500">
              <div className="flex items-center mb-4">
                <Lock className="text-blue-600 mr-3" size={24} />
                <h2 className="text-2xl font-semibold text-gray-900">Website Technology & Consent</h2>
              </div>
              <div className="text-gray-600 space-y-4">
                <p>
                  This website uses Site Visit Recordation Technology to memorialize site visits, including technology 
                  provided by third parties like Jornaya&apos;s LeadiD. By submitting your information through this website, 
                  you consent to the use of Site Visit Recordation Technology.
                </p>
              </div>
            </section>

            {/* Service Nature Disclosure */}
            <section className="bg-white rounded-xl shadow-sm p-8 border-l-4 border-blue-500">
              <div className="flex items-center mb-4">
                <Info className="text-blue-600 mr-3" size={24} />
                <h2 className="text-2xl font-semibold text-gray-900">Service Nature Disclosure</h2>
              </div>
              <div className="text-gray-600 space-y-4">
                <p>
                  The owner of this website is not a lender or agent of any lender and does not take loan applications 
                  or otherwise engage in lender-related activity (including without limitation making credit decisions 
                  or arranging, brokering, originating, servicing, underwriting, funding, or collecting payments for any lender). 
                </p>
                <p>
                  Submitting your information via this website is a request to be connected with one or more financial service 
                  providers that may be able to help you with your financial needs, each being responsible for taking a credit 
                  application, verifying your information, and making their own credit decisions.
                </p>
                <p>
                  The services offered by this website are administrative only (frequently referred to as "lead generation") 
                  and are offered to you free of charge. Lenders and other financial service providers pay a fee to be connected 
                  to consumers in search of financial services, often based on a ping tree model similar to Google AdWords 
                  where the highest available bidder is connected to the consumer.
                </p>
                <p className="text-sm italic mt-4">
                  This service is not available in all states.
                </p>
              </div>
            </section>

            {/* Tribal Lending Enterprises Notice */}
            <section className="bg-white rounded-xl shadow-sm p-8 border-l-4 border-blue-500">
              <div className="flex items-center mb-4">
                <Shield className="text-blue-600 mr-3" size={24} />
                <h2 className="text-2xl font-semibold text-gray-900">Tribal Lending Enterprises Notice</h2>
              </div>
              <div className="text-gray-600 space-y-4">
                <p>
                  In some cases, you may be given the option of being connected to a tribal lending enterprise ("TLE"). 
                  TLEs are subject to tribal and certain federal laws while being immune from state law including usury caps. 
                </p>
                <p>
                  If you are connected to a TLE, please understand that the tribal lender's rates and fees may be higher 
                  than state-licensed lenders. Additionally, TLEs may require you to agree to dispute resolution in a tribal jurisdiction. 
                </p>
                <p>
                  You should read and understand the terms of any loan offered by any lender, whether tribal or state-licensed, 
                  and to reject any loan offer that you cannot afford to repay or that includes terms that are not acceptable to you.
                </p>
              </div>
            </section>

            {/* Credit Check Authorization */}
            <section className="bg-white rounded-xl shadow-sm p-8 border-l-4 border-blue-500">
              <div className="flex items-center mb-4">
                <FileCheck className="text-blue-600 mr-3" size={24} />
                <h2 className="text-2xl font-semibold text-gray-900">Credit Check Authorization</h2>
              </div>
              <div className="text-gray-600 space-y-4">
                <p>
                  By submitting your information via this website, you authorize the owner of this website and its network 
                  of available lenders to do a credit check, which may include verifying your social security number, 
                  driver license number, or other identification, and a review of your creditworthiness. 
                </p>
                <p>
                  Credit checks are usually performed by one of the major credit bureaus such as Experian, Equifax and TransUnion, 
                  but also may include alternative credit bureaus such as Clarity, DataX, or others. 
                </p>
                <p>
                  You also authorize the owner of this website to share your information and credit history with its network 
                  of available lenders and other service providers.
                </p>
              </div>
            </section>

            {/* Lender Disclosure Requirements */}
            <section className="bg-white rounded-xl shadow-sm p-8 border-l-4 border-blue-500">
              <div className="flex items-center mb-4">
                <Info className="text-blue-600 mr-3" size={24} />
                <h2 className="text-2xl font-semibold text-gray-900">Lender's or Lending Partner's Disclosure of Terms</h2>
              </div>
              <div className="text-gray-600 space-y-4">
                <p>
                  When a lender decides to offer you a loan, it is required by law to provide documents that contain all fees 
                  and rate information pertaining to that loan, including any potential fees for late-payments, and the terms 
                  (if permitted by applicable law) to refinance, renew or rollover your loan.
                </p>
                <p>
                  Loan fees and interest rates are determined solely by the lender or financial service provider based on 
                  their internal policies, underwriting criteria and applicable law. This website has no knowledge of or 
                  control over the loan terms offered to you.
                </p>
              </div>
            </section>

            {/* Late Payment Warning */}
            <section className="bg-white rounded-xl shadow-sm p-8 border-l-4 border-red-500">
              <div className="flex items-center mb-4">
                <Clock className="text-red-600 mr-3" size={24} />
                <h2 className="text-2xl font-semibold text-gray-900">Late Payments Hurt Your Credit Score</h2>
              </div>
              <div className="text-gray-600 space-y-4">
                <p>
                  Please be aware that missing a payment or making a late payment can negatively impact your credit score. 
                  To protect yourself and your credit history, make sure you only accept loan terms that you can afford to repay.
                </p> 
                <p>
                  If you cannot make a payment on time, you should contact your lender immediately and discuss payment options.
                </p>
              </div>
            </section>
          </div>

          {/* Back to Top Button */}
          <div className="text-center mt-12">
            <button 
              onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}
              className="bg-blue-100 hover:bg-blue-200 text-blue-800 px-6 py-3 rounded-full inline-flex items-center transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2"><path d="m18 15-6-6-6 6"/></svg>
              Back to Top
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Disclaimer;