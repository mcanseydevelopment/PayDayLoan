import React from 'react';
import { Helmet } from 'react-helmet-async';
import { AlertCircle, DollarSign, Clock, Shield, ArrowRight, CheckCircle2, CircleDollarSign } from 'lucide-react';

const EmergencyLoansPage: React.FC = () => {
  const emergencySituations = [
    { title: "Medical Expenses", description: "Unexpected medical bills, emergency procedures, or prescription costs" },
    { title: "Auto Repairs", description: "Sudden vehicle breakdowns that affect your ability to get to work" },
    { title: "Home Repairs", description: "Critical home repairs like broken heating systems or water damage" },
    { title: "Utility Bills", description: "Avoid service disconnection when facing unexpected utility costs" },
    { title: "Family Emergencies", description: "Travel expenses for family emergencies or funeral costs" },
    { title: "Pet Emergencies", description: "Unexpected veterinary bills for beloved pets" }
  ];

  return (
    <>
      <Helmet>
        <title>Emergency Loans - PlansLoan</title>
        <meta name="description" content="Find emergency loan options for unexpected expenses through PlansLoan's network of lenders." />
      </Helmet>
      
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <div className="relative bg-gradient-to-b from-blue-800 to-blue-600 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <span className="inline-block bg-blue-900 bg-opacity-50 rounded-full px-4 py-1 text-sm font-medium mb-4">
                Financial Relief
              </span>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Emergency Loans</h1>
              <p className="text-xl md:text-2xl max-w-3xl mx-auto">
                Request financial assistance when unexpected expenses arise
              </p>
            </div>
          </div>
          
          <div className="absolute bottom-0 left-0 right-0 h-16 bg-gray-50 clip-upward"></div>
        </div>

        {/* Main Content */}
        <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
          {/* Overview Section */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
            <div className="flex flex-col md:flex-row gap-8">
              <div className="md:w-2/3">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">When You Need Financial Help Quickly</h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Emergency loans are designed to provide financial assistance when you're facing urgent, unexpected expenses. Life's emergencies don't wait for the perfect financial moment, and sometimes you need additional funds to bridge the gap until your situation stabilizes.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Our network of lenders understands that emergencies happen to everyone. Through PlansLoan, you can request to be connected with lenders who may be able to provide emergency funding when you need it most. Approval times vary by lender, and credit may be checked.
                </p>
              </div>
              
              <div className="md:w-1/3 flex justify-center items-center">
                <div className="bg-blue-100 rounded-full p-8 h-56 w-56 flex items-center justify-center">
                  <CircleDollarSign className="h-24 w-24 text-blue-600" />
                </div>
              </div>
            </div>
          </div>
          
          {/* Emergency Situations */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Common Emergency Situations</h2>
            
            <div className="grid md:grid-cols-3 gap-6">
              {emergencySituations.map((situation, index) => (
                <div key={index} className="bg-white rounded-lg shadow-md p-6 transition-all hover:shadow-lg">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">{situation.title}</h3>
                  <p className="text-gray-600">{situation.description}</p>
                </div>
              ))}
            </div>
          </div>
          
          {/* How It Works - UPDATED FOR BETTER CONTRAST */}
          <div className="bg-gradient-to-br from-blue-800 to-blue-700 rounded-xl shadow-lg p-8 mb-12 text-white">
            <h2 className="text-3xl font-bold mb-10 text-center">How Emergency Loans Work</h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="relative">
                <div className="bg-white rounded-lg p-6 text-center h-full">
                  <div className="absolute -top-4 -right-4 bg-white rounded-full h-10 w-10 flex items-center justify-center text-blue-600 font-bold shadow-lg">
                    1
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-black">Submit a Request</h3>
                  <p className="text-black">
                    Complete our simple online form with your information. This typically takes just a few minutes.
                  </p>
                </div>
              </div>
              
              <div className="relative">
                <div className="bg-white bg-opacity-15 rounded-lg p-6 text-center h-full">
                  <div className="absolute -top-4 -right-4 bg-white rounded-full h-10 w-10 flex items-center justify-center text-blue-600 font-bold shadow-lg">
                    2
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-black">Review Offers</h3>
                  <p className="text-black">
                    If connected with a lender and approved, carefully review the loan terms offered, including the amount, interest rate, and repayment schedule.
                  </p>
                </div>
              </div>
              
              <div className="relative">
                <div className="bg-white bg-opacity-15 rounded-lg p-6 text-center h-full">
                  <div className="absolute -top-4 -right-4 bg-white rounded-full h-10 w-10 flex items-center justify-center text-blue-600 font-bold shadow-lg">
                    3
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-black">Receive Funds</h3>
                  <p className="text-black">
                    If you accept the loan terms, the lender will typically deposit the funds directly into your bank account, often as soon as the next business day.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Key Features */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Emergency Loan Features</h2>
            
            <div className="grid md:grid-cols-4 gap-6">
              <div className="flex flex-col items-center text-center">
                <div className="bg-blue-100 rounded-full p-4 mb-4">
                  <DollarSign className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Loan Amounts</h3>
                <p className="text-gray-600">
                  Typically $300-$3,000 depending on lender and your qualifications
                </p>
              </div>
              
              <div className="flex flex-col items-center text-center">
                <div className="bg-blue-100 rounded-full p-4 mb-4">
                  <Clock className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Processing Time</h3>
                <p className="text-gray-600">
                  Request review often within minutes; funding times vary by lender
                </p>
              </div>
              
              <div className="flex flex-col items-center text-center">
                <div className="bg-blue-100 rounded-full p-4 mb-4">
                  <CheckCircle2 className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Requirements</h3>
                <p className="text-gray-600">
                  Valid ID, regular income source, active bank account, and more
                </p>
              </div>
              
              <div className="flex flex-col items-center text-center">
                <div className="bg-blue-100 rounded-full p-4 mb-4">
                  <Shield className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Security</h3>
                <p className="text-gray-600">
                  Encrypted data transmission to protect your personal information
                </p>
              </div>
            </div>
          </div>
          
          {/* Important Disclosure */}
          <div className="bg-amber-50 border-l-4 border-amber-500 p-6 rounded-r-lg mb-12">
            <div className="flex">
              <div className="flex-shrink-0">
                <AlertCircle className="h-6 w-6 text-amber-500" />
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-semibold text-amber-800">Important Financial Disclosure</h3>
                <div className="mt-2 text-amber-700">
                  <p className="mb-2">
                    Emergency loans are a form of short-term borrowing and typically come with higher interest rates than traditional loans. They should be used only for genuine emergencies and not as a regular financial solution.
                  </p>
                  <p>
                    Before accepting any loan offer, carefully review all terms and consider whether you can realistically repay the loan according to the schedule. Late or missed payments can result in additional fees and negative credit impacts.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Representative Example */}
          <div className="bg-blue-50 rounded-xl shadow-md p-6 mb-12">
            <h3 className="text-xl font-semibold text-gray-800 mb-3">Representative Example:</h3>
            <p className="text-gray-700">
              An emergency loan of $800 with a 30-day term and an APR of 200% would result in a total repayment amount of approximately $933.33. Actual loan terms, including interest rates and fees, will vary by lender, your credit history, and state regulations.
            </p>
          </div>
          
          {/* CTA Section */}
          <div className="text-center mt-12 mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Need Financial Help for an Emergency?</h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto mb-8">
              Complete our form to see if you qualify for an emergency loan through our network of lenders.
            </p>
            <a href="/" className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg shadow-md transition-colors">
              Request Emergency Funding <ArrowRight className="ml-2 inline h-5 w-5" />
            </a>
            <p className="text-sm text-gray-500 mt-4">
              Credit may be checked. Funding times vary by lender and are not guaranteed.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default EmergencyLoansPage;