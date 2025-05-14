import React from 'react';
import { Helmet } from 'react-helmet-async';
import { DollarSign, Users, ArrowRight, Clipboard, HelpCircle, Clock, CircleDashed } from 'lucide-react';

const FundingOptionsPage: React.FC = () => {
  // List of funding options
  const fundingOptions = [
    {
      title: "Personal Loans",
      description: "Versatile loans that can be used for almost any legitimate purpose, from debt consolidation to unexpected expenses.",
      amount: "$500 - $5,000",
      term: "6-24 months",
      icon: <DollarSign className="h-8 w-8 text-blue-600" />,
      color: "blue"
    },
    {
      title: "Payday Loans",
      description: "Short-term loans designed to help cover expenses until your next paycheck arrives.",
      amount: "$100 - $500",
      term: "14-30 days",
      icon: <Clock className="h-8 w-8 text-green-600" />,
      color: "green"
    },
    {
      title: "Installment Loans",
      description: "Fixed-term loans repaid through a series of scheduled payments, typically monthly installments.",
      amount: "$500 - $2,000",
      term: "3-12 months",
      icon: <Clipboard className="h-8 w-8 text-purple-600" />,
      color: "purple"
    },
    {
      title: "Peer-to-Peer Lending",
      description: "Borrow from individual investors through online platforms that match borrowers with lenders.",
      amount: "$1,000 - $10,000",
      term: "12-60 months",
      icon: <Users className="h-8 w-8 text-orange-600" />,
      color: "orange"
    }
  ];

  // FAQ items
  const faqItems = [
    {
      question: "How do I know which funding option is right for me?",
      answer: "The best funding option depends on your specific needs, how quickly you need the funds, how much you need to borrow, and your financial situation. Personal loans work well for larger amounts and longer terms, while payday loans might be suitable for very short-term needs. Review the terms, rates, and repayment schedules of each option carefully."
    },
    {
      question: "What information do I need to provide when applying?",
      answer: "Typically, you'll need to provide your personal information (name, address, date of birth), financial information (income, employment details), banking information for fund deposits, and a valid ID. Some lenders may request additional documentation to verify your information."
    },
    {
      question: "How long does the approval process take?",
      answer: "The timeline varies by lender and loan type. Some lenders may provide an initial decision within minutes of submitting your request, while others may take 1-2 business days. Final approval and funding typically take 1-3 business days, though some lenders may offer faster service."
    },
    {
      question: "Will applying affect my credit score?",
      answer: "Some lenders perform a soft credit check when you initially apply, which doesn't affect your credit score. However, if you proceed with a full application, most lenders will perform a hard credit check, which may temporarily lower your score by a few points. Making timely repayments on your loan can positively impact your credit over time."
    }
  ];

  return (
    <>
      <Helmet>
        <title>Funding Options - PlansLoan</title>
        <meta name="description" content="Explore various funding options available through PlansLoan's network of lending partners to find the right solution for your financial needs." />
      </Helmet>
      
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <div className="relative bg-gradient-to-b from-blue-800 to-blue-600 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <span className="inline-block bg-blue-900 bg-opacity-50 rounded-full px-4 py-1 text-sm font-medium mb-4">
                Financial Solutions
              </span>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Funding Options</h1>
              <p className="text-xl md:text-2xl max-w-3xl mx-auto">
                Explore our range of financial solutions to meet your specific needs
              </p>
            </div>
          </div>
          
          <div className="absolute bottom-0 left-0 right-0 h-16 bg-gray-50 clip-upward"></div>
        </div>

        {/* Main Content */}
        <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
          {/* Overview Section */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Finding Your Financial Solution</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              At PlansLoan, we understand that everyone's financial needs are different. Whether you're facing an unexpected emergency, consolidating debt, or planning a major purchase, we can help connect you with lenders who offer a variety of funding options.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Our network includes various lenders with different loan products, terms, and qualification requirements. This means you have a better chance of finding an option that fits your unique situation. Below, we've outlined the main types of funding options available through our service.
            </p>
          </div>
          
          {/* Funding Options Cards */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Available Funding Options</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              {fundingOptions.map((option, index) => (
                <div key={index} className={`bg-white rounded-xl shadow-md overflow-hidden border-t-4 border-${option.color}-500 transition-all hover:shadow-lg`}>
                  <div className="p-6">
                    <div className="flex items-center mb-4">
                      <div className={`bg-${option.color}-100 p-3 rounded-full mr-4`}>
                        {option.icon}
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900">{option.title}</h3>
                    </div>
                    
                    <p className="text-gray-600 mb-6">{option.description}</p>
                    
                    <div className="grid grid-cols-2 gap-4 mb-4">
                      <div className="bg-gray-50 p-3 rounded-lg">
                        <p className="text-sm text-gray-500">Typical Amount</p>
                        <p className="text-lg font-medium text-gray-800">{option.amount}</p>
                      </div>
                      <div className="bg-gray-50 p-3 rounded-lg">
                        <p className="text-sm text-gray-500">Term Length</p>
                        <p className="text-lg font-medium text-gray-800">{option.term}</p>
                      </div>
                    </div>
                    
                    <a href="/" className={`inline-block bg-${option.color}-600 hover:bg-${option.color}-700 text-white font-medium py-2 px-4 rounded-lg transition-colors`}>
                      Learn More
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* How to Choose Section */}
          <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl shadow-lg p-8 mb-12 text-white">
            <h2 className="text-3xl font-bold mb-8 text-center">How to Choose the Right Option</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white bg-opacity-10 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-4 flex items-center text-black">
                  <CircleDashed className="mr-2 h-6 w-6" /> Consider Your Need
                </h3>
                <p className="text-black">
                  Think about why you need funds and how quickly you need them. Is it for an emergency expense, debt consolidation, or a planned purchase? Different loans serve different purposes.
                </p>
              </div>
              
              <div className="bg-white bg-opacity-10 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-4 flex items-center text-black">
                  <CircleDashed className="mr-2 h-6 w-6" /> Evaluate Loan Amount
                </h3>
                <p className="text-black">
                  Determine exactly how much you need to borrow. Avoid taking more than necessary, as this increases your repayment burden. Some loan types are better for smaller amounts, others for larger.
                </p>
              </div>
              
              <div className="bg-white bg-opacity-10 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-4 flex items-center text-black">
                  <CircleDashed className="mr-2 h-6 w-6" /> Understand Repayment Terms
                </h3>
                <p className="text-black">
                  Review the repayment period and frequency. Consider your budget and choose an option with payments you can comfortably manage until the loan is fully repaid.
                </p>
              </div>
              
              <div className="bg-white bg-opacity-10 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-4 flex items-center text-black">
                  <CircleDashed className="mr-2 h-6 w-6" /> Compare Total Costs
                </h3>
                <p className="text-black">
                  Look at the APR (Annual Percentage Rate), which includes both interest and fees, to understand the total cost of borrowing. This allows you to compare different options fairly.
                </p>
              </div>
            </div>
          </div>
          
          {/* Application Process */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Simple Application Process</h2>
            
            <div className="max-w-4xl mx-auto">
              <div className="relative">
                {/* Process steps with connecting line */}
                <div className="absolute left-16 md:left-24 top-0 bottom-0 w-1 bg-blue-100 z-0"></div>
                
                <div className="relative z-10">
                  <div className="flex mb-12">
                    <div className="flex-shrink-0">
                      <div className="bg-blue-600 rounded-full h-12 w-12 flex items-center justify-center text-white font-bold">1</div>
                    </div>
                    <div className="ml-6">
                      <h3 className="text-xl font-semibold text-gray-800 mb-2">Complete Our Form</h3>
                      <p className="text-gray-600">
                        Fill out our secure online form with your basic personal and financial information. This typically takes just a few minutes.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex mb-12">
                    <div className="flex-shrink-0">
                      <div className="bg-blue-600 rounded-full h-12 w-12 flex items-center justify-center text-white font-bold">2</div>
                    </div>
                    <div className="ml-6">
                      <h3 className="text-xl font-semibold text-gray-800 mb-2">Review Available Options</h3>
                      <p className="text-gray-600">
                        Once connected with potential lenders, you'll be able to review the loan options available to you, including loan amounts, terms, and rates.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex mb-12">
                    <div className="flex-shrink-0">
                      <div className="bg-blue-600 rounded-full h-12 w-12 flex items-center justify-center text-white font-bold">3</div>
                    </div>
                    <div className="ml-6">
                      <h3 className="text-xl font-semibold text-gray-800 mb-2">Select Your Preferred Option</h3>
                      <p className="text-gray-600">
                        Choose the funding option that best meets your needs after carefully reviewing all terms and conditions.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <div className="bg-blue-600 rounded-full h-12 w-12 flex items-center justify-center text-white font-bold">4</div>
                    </div>
                    <div className="ml-6">
                      <h3 className="text-xl font-semibold text-gray-800 mb-2">Receive Funds</h3>
                      <p className="text-gray-600">
                        After approval and accepting the terms, funds are typically deposited directly into your bank account, often as soon as the next business day.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* FAQ Section */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
            <div className="flex items-center justify-center mb-8">
              <HelpCircle className="text-blue-600 mr-3" size={28} />
              <h2 className="text-3xl font-bold text-gray-900">Frequently Asked Questions</h2>
            </div>
            
            <div className="space-y-6 max-w-4xl mx-auto">
              {faqItems.map((item, index) => (
                <div key={index} className="border-gray-200 pb-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">{item.question}</h3>
                  <p className="text-gray-600">{item.answer}</p>
                </div>
              ))}
            </div>
          </div>
          
          {/* Compliance notice */}
          <div className="bg-gray-100 rounded-lg p-4 mb-12 text-sm text-gray-600">
            <p>
              <span className="font-medium">Note:</span> PlansLoan is not a lender and does not make lending decisions. We connect consumers with lenders in our network who may offer various funding options. Loan approval is not guaranteed. Interest rates, terms, and other loan features vary by lender, product, and applicant qualifications. APRs range from 99% to 400% for short-term loans. This is an expensive form of borrowing and should not be used as a long-term financial solution.
            </p>
          </div>
          
          {/* CTA Section */}
          <div className="text-center mt-12 mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Explore Your Options Today</h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto mb-8">
              Complete our simple form to see which funding options may be available to you through our network of lenders.
            </p>
            <a href="/" className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg shadow-md transition-colors">
              See Your Options <ArrowRight className="ml-2 inline h-5 w-5" />
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

export default FundingOptionsPage;