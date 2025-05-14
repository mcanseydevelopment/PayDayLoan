import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Clock, DollarSign, ShieldCheck, AlertTriangle, ArrowRight, CheckCircle } from 'lucide-react';

const ShortTermLoansPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Short-Term Loans - PlansLoan</title>
        <meta name="description" content="Learn about short-term loan options available through PlansLoan's network of lenders for your immediate financial needs." />
      </Helmet>
      
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <div className="relative bg-gradient-to-b from-blue-800 to-blue-600 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <span className="inline-block bg-blue-900 bg-opacity-50 rounded-full px-4 py-1 text-sm font-medium mb-4">
                Short-Term Solutions
              </span>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Short-Term Loans</h1>
              <p className="text-xl md:text-2xl max-w-3xl mx-auto">
                Request financial assistance for immediate needs and unexpected expenses
              </p>
            </div>
          </div>
          
          <div className="absolute bottom-0 left-0 right-0 h-16 bg-gray-50 clip-upward"></div>
        </div>

        {/* Main Content */}
        <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
          {/* Overview Section */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Understanding Short-Term Loans</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Short-term loans are designed to provide temporary financial relief when you need funds quickly. These loans typically feature smaller loan amounts and shorter repayment periods compared to traditional loans. They're intended to bridge financial gaps until your next payday or for a few months, rather than long-term financing.
            </p>
            
            <div className="bg-blue-50 p-6 rounded-lg my-8 border-l-4 border-blue-600">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Key Characteristics:</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-blue-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Loan amounts typically range from $100 to $1,000</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-blue-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Repayment terms usually between 2 weeks and 3 months</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-blue-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Higher interest rates compared to long-term loans</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-blue-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Designed for immediate, temporary financial needs</span>
                </li>
              </ul>
            </div>
          </div>
          
          {/* Types of Short-Term Loans */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Types of Short-Term Loans</h2>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-[1.02]">
                <div className="h-2 bg-blue-600"></div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3">Payday Loans</h3>
                  <p className="text-gray-600 mb-4">
                    Small, short-term loans typically due on your next payday. These loans are designed to cover immediate expenses until your next paycheck.
                  </p>
                  <div className="text-sm text-gray-500">
                    <p><span className="font-medium">Typical amount:</span> $100-$500</p>
                    <p><span className="font-medium">Term length:</span> 14-30 days</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-[1.02]">
                <div className="h-2 bg-blue-600"></div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3">Installment Loans</h3>
                  <p className="text-gray-600 mb-4">
                    Loans repaid over time with a set number of scheduled payments, typically monthly. These offer more flexibility than single-payment loans.
                  </p>
                  <div className="text-sm text-gray-500">
                    <p><span className="font-medium">Typical amount:</span> $500-$2,000</p>
                    <p><span className="font-medium">Term length:</span> 3-6 months</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-[1.02]">
                <div className="h-2 bg-blue-600"></div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3">Line of Credit</h3>
                  <p className="text-gray-600 mb-4">
                    A flexible loan option that works similarly to a credit card, allowing you to borrow up to a certain limit and only pay interest on what you use.
                  </p>
                  <div className="text-sm text-gray-500">
                    <p><span className="font-medium">Typical amount:</span> Up to $1,000</p>
                    <p><span className="font-medium">Term length:</span> Revolving</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Key Features */}
          <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl shadow-lg p-8 mb-12 text-white">
            <h2 className="text-3xl font-bold mb-8 text-center">Key Features of Short-Term Loans</h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-gray-700 bg-opacity-50 rounded-lg p-6 text-center">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Quick Process</h3>
                <p className="text-gray-300">
                  Simple application process with potential same-day or next-day funding if approved. Approval times vary by lender.
                </p>
              </div>
              
              <div className="bg-gray-700 bg-opacity-50 rounded-lg p-6 text-center">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <DollarSign className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Accessible Options</h3>
                <p className="text-gray-300">
                  Various lenders consider factors beyond just credit scores. Options may be available for different financial situations.
                </p>
              </div>
              
              <div className="bg-gray-700 bg-opacity-50 rounded-lg p-6 text-center">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <ShieldCheck className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Clear Terms</h3>
                <p className="text-gray-300">
                  Loan terms and conditions, including repayment schedule and all fees, are disclosed upfront for your review.
                </p>
              </div>
            </div>
          </div>
          
          {/* Responsible Borrowing */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
            <div className="flex flex-col md:flex-row md:items-center">
              <div className="md:w-1/3 mb-6 md:mb-0 md:pr-8">
                <div className="bg-amber-50 p-6 rounded-full h-48 w-48 flex items-center justify-center mx-auto">
                  <AlertTriangle className="h-20 w-20 text-amber-600" />
                </div>
              </div>
              
              <div className="md:w-2/3">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Responsible Borrowing</h2>
                <p className="text-gray-700 mb-4">
                  Short-term loans can be an expensive form of borrowing. They are designed for short-term financial needs and not intended as a long-term financial solution or for regular expenses.
                </p>
                <p className="text-gray-700 mb-4">
                  Before accepting a loan offer, carefully consider whether the loan amount and terms meet your needs and if you'll be able to repay it according to the schedule. Be sure to review all fees and charges.
                </p>
                <p className="text-gray-700">
                  If you're experiencing ongoing financial difficulties, consider speaking with a credit counselor about alternatives to short-term loans.
                </p>
              </div>
            </div>
          </div>
          
          {/* Representative Example */}
          <div className="bg-blue-50 rounded-xl shadow-md p-6 mb-12 border-l-4 border-blue-600">
            <h3 className="text-xl font-semibold text-gray-800 mb-3">Representative Example:</h3>
            <p className="text-gray-700">
              A typical payday loan of $500 with a 14-day term and an APR of 250% would have a single repayment of $635, including all fees and interest. Actual loan offers may vary depending on lender, state regulations, and individual circumstances.
            </p>
          </div>
          
          {/* CTA Section */}
          <div className="text-center mt-12 mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Request a Short-Term Loan</h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto mb-8">
              Complete our simple form to see if you qualify for a short-term loan through our network of lenders.
            </p>
            <a href="/" className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg shadow-md transition-colors">
              Start Your Request <ArrowRight className="ml-2 inline h-5 w-5" />
            </a>
            <p className="text-sm text-gray-500 mt-4">
              Credit may be checked. Approval and funding times vary by lender.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ShortTermLoansPage;