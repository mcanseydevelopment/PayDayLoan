import React from 'react';
import { Helmet } from 'react-helmet-async';
import { 
  ClipboardCheck, 
  CheckCircle2, 
  Clock, 
  CreditCard, 
  DollarSign, 
  FileCheck, 
  ShieldCheck, 
  RefreshCcw, 
  AlertCircle, 
  Calendar, 
  User,
  Briefcase,
  Smartphone,
  Mail,
  BadgeCheck
} from 'lucide-react';

const HowItWorksPage: React.FC = () => {
  // Loan process steps
  const processSteps = [
    {
      title: "Complete One Simple Form",
      description: "Fill out our secure online form with your basic information. It takes just minutes and can be done from any device.",
      icon: <ClipboardCheck size={48} className="text-blue-600" />
    },
    {
      title: "Get Connected with Lenders",
      description: "Our technology submits your information to our network of trusted lenders who review your request immediately.",
      icon: <FileCheck size={48} className="text-blue-600" />
    },
    {
      title: "Receive a Quick Decision",
      description: "Get a response the same day, often within minutes. If approved, you'll be redirected to the lender's website to review your loan terms.",
      icon: <Clock size={48} className="text-blue-600" />
    },
    {
      title: "Review & Accept Terms",
      description: "Carefully review all the terms including rates, fees, and repayment schedule before accepting the loan offer.",
      icon: <CheckCircle2 size={48} className="text-blue-600" />
    },
    {
      title: "Get Funds Deposited",
      description: "After acceptance, the lender deposits money directly into your bank account, often as soon as the next business day.",
      icon: <DollarSign size={48} className="text-blue-600" />
    }
  ];

  // Loan requirements
  const requirements = [
    {
      requirement: "Employed at your current job for at least 90 days",
      icon: <Briefcase size={24} className="text-blue-600" />
    },
    {
      requirement: "US citizen or permanent resident, and over 18 years old",
      icon: <User size={24} className="text-blue-600" />
    },
    {
      requirement: "Monthly income of approximately $1,000 after taxes",
      icon: <DollarSign size={24} className="text-blue-600" />
    },
    {
      requirement: "Active checking account in your name",
      icon: <CreditCard size={24} className="text-blue-600" />
    },
    {
      requirement: "Working phone number for home and work",
      icon: <Smartphone size={24} className="text-blue-600" />
    },
    {
      requirement: "Valid email address",
      icon: <Mail size={24} className="text-blue-600" />
    }
  ];

  // Additional information sections
  const additionalInfo = [
    {
      title: "Private and Secure",
      description: "We employ industry-recognized security protocols and advanced encryption technology to protect your personal information at all times.",
      icon: <ShieldCheck size={32} className="text-blue-600" />
    },
    {
      title: "Automated Repayment",
      description: "With lender-authorized automatic withdrawals (ACH transfers), loan payments are deducted automatically from your bank account, ensuring on-time payments and helping you avoid late fees.",
      icon: <RefreshCcw size={32} className="text-blue-600" />
    },
    {
      title: "Late Payment Policies",
      description: "Late payment policies vary between lenders. Before accepting any loan, carefully read and understand the loan agreement and the lender's late payment policy. Some states limit late fees by law, while in others, late payments may trigger additional fees or loan acceleration.",
      icon: <AlertCircle size={32} className="text-blue-600" />
    },
    {
      title: "Loan Extensions",
      description: "State regulations may restrict a lender's ability to extend or 'roll over' your loan. If you need an extension, contact your lender directly to discuss your options within applicable regulations.",
      icon: <Calendar size={32} className="text-blue-600" />
    }
  ];

  return (
    <>
      <Helmet>
        <title>How It Works - PlansLoan</title>
        <meta name="description" content="Learn how PlansLoan connects you with lenders for quick and easy personal loans. See our simple process, requirements, and important information." />
      </Helmet>
      
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <div className="relative bg-gradient-to-b from-blue-800 to-blue-600 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">How PlansLoan Works</h1>
              <p className="text-xl md:text-2xl max-w-3xl mx-auto">
                Simple, secure, and streamlined access to the funds you need.
              </p>
            </div>
          </div>
          
          <div className="absolute bottom-0 left-0 right-0 h-16 bg-gray-50 clip-upward"></div>
        </div>

        {/* Main Content */}
        <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
          {/* Process Overview - Simplistic & Artistic */}
          <div className="mb-20 relative">
            {/* Artistic background element */}
            <div className="absolute top-0 left-0 w-1/3 h-full">
              <div className="absolute top-10 left-10 w-24 h-24 rounded-full bg-blue-50 opacity-60"></div>
              <div className="absolute bottom-20 left-20 w-40 h-40 rounded-full bg-blue-100 opacity-40"></div>
            </div>
            
            <div className="absolute top-0 right-0 w-1/3 h-full">
              <div className="absolute top-40 right-20 w-32 h-32 rounded-full bg-blue-50 opacity-50"></div>
              <div className="absolute bottom-10 right-10 w-20 h-20 rounded-full bg-blue-100 opacity-30"></div>
            </div>
            
            {/* Content container with z-index to appear above background */}
            <div className="relative z-10">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-light text-gray-900 mb-4">The Process</h2>
                <div className="w-16 h-1 bg-blue-500 mx-auto mb-6"></div>
                <p className="text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto">
                  From application to funding in five simple steps
                </p>
              </div>
              
              {/* Vertical timeline with minimal styling */}
              <div className="max-w-3xl mx-auto relative">
                {/* Vertical line */}
                <div className="absolute left-4 top-0 bottom-0 w-px bg-blue-200"></div>
                
                {processSteps.map((step, index) => (
                  <div key={index} className="mb-16 relative pl-16">
                    {/* Step circle */}
                    <div className="absolute left-0 top-0 w-8 h-8 rounded-full bg-white border-2 border-blue-500 flex items-center justify-center">
                      <span className="text-blue-700 font-medium">{index + 1}</span>
                    </div>
                    
                    {/* Icon with transparent background */}
                    <div className="mb-4">
                      <div className="inline-block text-blue-600">
                        {step.icon}
                      </div>
                    </div>
                    
                    {/* Content with clean typography */}
                    <h3 className="text-2xl font-light text-blue-800 mb-3">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                ))}
              </div>
              
              {/* Minimal CTA */}
              <div className="text-center mt-16">
                <a href="/" className="inline-block text-blue-600 border border-blue-600 px-10 py-3 hover:bg-blue-600 hover:text-white transition-colors rounded-full">
                  Start Your Application
                </a>
              </div>
            </div>
          </div>

          {/* Loan Requirements */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
            <div className="flex items-center justify-center mb-4">
              <BadgeCheck size={32} className="text-blue-600 mr-3" />
              <h2 className="text-3xl font-bold text-gray-900">Loan Requirements</h2>
            </div>
            <p className="text-lg text-gray-700 leading-relaxed mb-8 text-center max-w-4xl mx-auto">
              To be accepted by most lenders in our network, you should meet the following criteria:
            </p>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {requirements.map((item, index) => (
                <div key={index} className="flex p-5 bg-blue-50 rounded-lg hover:shadow-md transition-shadow">
                  <div className="mr-4 mt-1">
                    {item.icon}
                  </div>
                  <p className="text-gray-700">{item.requirement}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Additional Information */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Important Information</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              {additionalInfo.map((info, index) => (
                <div key={index} className="border border-gray-200 rounded-xl p-6 hover:shadow-md transition-shadow">
                  <div className="flex items-center mb-4">
                    <div className="mr-4">
                      {info.icon}
                    </div>
                    <h3 className="text-xl font-semibold">{info.title}</h3>
                  </div>
                  <p className="text-gray-600">{info.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Warning Note */}
          <div className="bg-amber-50 border-l-4 border-amber-500 rounded-lg p-6 mb-12">
            <div className="flex">
              <div className="flex-shrink-0">
                <AlertCircle className="h-6 w-6 text-amber-500" />
              </div>
              <div className="ml-3">
                <h3 className="text-lg font-medium text-amber-800">Responsible Borrowing</h3>
                <div className="mt-2 text-amber-700">
                  <p>
                    Before agreeing to a loan, please make sure you can make your loan payments in full and on time. 
                    We support the responsible use of loans and recognize that nobody knows your situation better than you.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Loan Default Info */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Understanding Loan Defaults</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              If you can't make your loan payments on time, you may be in default of your loan obligations. 
              Late payments and loan defaults may adversely affect your credit and may make it difficult to obtain future loans.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Communication with your lender is crucial if you anticipate payment difficulties. 
              Many lenders are willing to work with borrowers to create manageable repayment plans based on individual circumstances.
            </p>
          </div>

          {/* CTA Section */}
          <div className="text-center mt-12 mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to Get Started?</h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto mb-6">
              Take the first step toward getting the funds you need with our simple application process.
            </p>
            <a href="/" className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg shadow-md transition-colors">
              Apply Now
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default HowItWorksPage;