import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Check, ArrowRight, DollarSign, Clock, Shield, Info } from 'lucide-react';

const PersonalLoansPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Personal Loans - PlansLoan</title>
        <meta name="description" content="Learn about personal loan options available through PlansLoan's network of lenders." />
      </Helmet>
      
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <div className="relative bg-gradient-to-b from-blue-800 to-blue-600 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <span className="inline-block bg-blue-900 bg-opacity-50 rounded-full px-4 py-1 text-sm font-medium mb-4">
                Find Your Solution
              </span>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Personal Loans</h1>
              <p className="text-xl md:text-2xl max-w-3xl mx-auto">
                Flexible loan options to help you achieve your financial goals
              </p>
            </div>
          </div>
          
          <div className="absolute bottom-0 left-0 right-0 h-16 bg-gray-50 clip-upward"></div>
        </div>

        {/* Main Content */}
        <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
          {/* Overview Section */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">What Are Personal Loans?</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Personal loans are versatile financial products that provide borrowers with a lump sum of money, typically 
              ranging from $500 to $5,000, which can be repaid over a set term. Unlike specialized loans, personal loans 
              can be used for almost any legitimate purpose.
            </p>
            
            <div className="grid md:grid-cols-2 gap-8 mt-8">
              <div className="bg-blue-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                  <DollarSign className="mr-2 text-blue-600" size={20} /> Loan Amounts
                </h3>
                <p className="text-gray-700">
                  Our lending partners offer personal loans ranging from $500 to $5,000, depending on your qualifications 
                  and state regulations. Loan amounts may be influenced by your income, credit profile, and other factors.
                </p>
              </div>
              
              <div className="bg-blue-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                  <Clock className="mr-2 text-blue-600" size={20} /> Repayment Terms
                </h3>
                <p className="text-gray-700">
                  Repayment terms typically range from 6 to 24 months, allowing you to select a payment plan that fits your 
                  budget. Longer terms mean smaller monthly payments but may result in more interest paid over time.
                </p>
              </div>
            </div>
          </div>
          
          {/* Use Cases */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Common Uses for Personal Loans</h2>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="h-2 bg-blue-600"></div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3">Debt Consolidation</h3>
                  <p className="text-gray-600">
                    Combine multiple high-interest debts into a single loan with potentially lower interest rates and one monthly payment.
                  </p>
                </div>
              </div>
              
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="h-2 bg-blue-600"></div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3">Home Improvements</h3>
                  <p className="text-gray-600">
                    Fund necessary repairs or desired renovations to your home without tapping into home equity.
                  </p>
                </div>
              </div>
              
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="h-2 bg-blue-600"></div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3">Unexpected Expenses</h3>
                  <p className="text-gray-600">
                    Cover emergency medical bills, car repairs, or other unforeseen costs that exceed your savings.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Benefits Section */}
          <div className="bg-gradient-to-r from-blue-700 to-blue-500 rounded-xl shadow-lg p-8 mb-12 text-white">
            <h2 className="text-3xl font-bold mb-8 text-center">Benefits of Personal Loans</h2>
            
            <div className="grid md:grid-cols-2 gap-y-6 gap-x-12">
              <div className="flex">
                <div className="flex-shrink-0">
                  <div className="bg-white rounded-full h-10 w-10 flex items-center justify-center">
                    <Check className="h-6 w-6 text-blue-600" />
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-xl font-semibold mb-2">Fixed Payments</h3>
                  <p className="text-blue-100">
                    Unlike credit cards, personal loans typically have fixed interest rates and payment schedules, making budgeting easier.
                  </p>
                </div>
              </div>
              
              <div className="flex">
                <div className="flex-shrink-0">
                  <div className="bg-white rounded-full h-10 w-10 flex items-center justify-center">
                    <Check className="h-6 w-6 text-blue-600" />
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-xl font-semibold mb-2">No Collateral Required</h3>
                  <p className="text-blue-100">
                    Most personal loans are unsecured, meaning you don't need to risk assets like your home or car.
                  </p>
                </div>
              </div>
              
              <div className="flex">
                <div className="flex-shrink-0">
                  <div className="bg-white rounded-full h-10 w-10 flex items-center justify-center">
                    <Check className="h-6 w-6 text-blue-600" />
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-xl font-semibold mb-2">Versatile Usage</h3>
                  <p className="text-blue-100">
                    Use the funds for virtually any legitimate purpose without restrictions common in other loan types.
                  </p>
                </div>
              </div>
              
              <div className="flex">
                <div className="flex-shrink-0">
                  <div className="bg-white rounded-full h-10 w-10 flex items-center justify-center">
                    <Check className="h-6 w-6 text-blue-600" />
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-xl font-semibold mb-2">Potentially Quick Funding</h3>
                  <p className="text-blue-100">
                    If approved, funds may be deposited into your account as soon as the next business day, depending on the lender.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Application Process */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">How to Request a Personal Loan</h2>
            
            <div className="max-w-3xl mx-auto">
              <div className="relative">
                {/* Process steps with timeline */}
                <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-blue-100"></div>
                
                <div className="relative z-10">
                  <div className="flex items-center mb-12">
                    <div className="bg-blue-600 rounded-full h-12 w-12 flex items-center justify-center text-white font-bold">1</div>
                    <div className="ml-6">
                      <h3 className="text-xl font-semibold text-gray-800">Complete Our Simple Form</h3>
                      <p className="text-gray-600 mt-2">
                        Fill out our secure online form with your basic information. It typically takes just a few minutes.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-center mb-12">
                    <div className="bg-blue-600 rounded-full h-12 w-12 flex items-center justify-center text-white font-bold">2</div>
                    <div className="ml-6">
                      <h3 className="text-xl font-semibold text-gray-800">Review Offers</h3>
                      <p className="text-gray-600 mt-2">
                        If connected with a lender, review your loan offer carefully. Verify the amount, interest rate, fees, and repayment terms.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <div className="bg-blue-600 rounded-full h-12 w-12 flex items-center justify-center text-white font-bold">3</div>
                    <div className="ml-6">
                      <h3 className="text-xl font-semibold text-gray-800">Receive Funds</h3>
                      <p className="text-gray-600 mt-2">
                        If approved and you accept the terms, the lender will typically deposit funds directly into your bank account, often as soon as the next business day.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Compliance notice */}
          <div className="bg-amber-50 border-l-4 border-amber-500 p-4 rounded-r-lg mb-12">
            <div className="flex">
              <div className="flex-shrink-0">
                <Info className="h-5 w-5 text-amber-500" />
              </div>
              <div className="ml-3">
                <p className="text-amber-700 text-sm">
                  <span className="font-semibold">Important:</span> Personal loans are a form of borrowing that should be used responsibly. Before accepting any loan, carefully consider if it's the right financial solution for your needs. Make sure you can comfortably meet the repayment terms to avoid additional fees and potential negative impacts to your credit.
                </p>
              </div>
            </div>
          </div>
          
          {/* CTA Section */}
          <div className="text-center mt-12 mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to Get Started?</h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto mb-8">
              See if you qualify for a personal loan through our network of trusted lending partners.
            </p>
            <a href="/" className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg shadow-md transition-colors">
              Request a Loan <ArrowRight className="ml-2 inline h-5 w-5" />
            </a>
            <p className="text-sm text-gray-500 mt-4">
              Credit may be checked. Approval times vary by lender.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default PersonalLoansPage;