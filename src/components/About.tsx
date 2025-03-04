import React from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, Clock, Shield, Zap, ThumbsUp, Users, Award } from 'lucide-react';

const About: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>About Us - PlansLoan</title>
        <meta name="description" content="Learn about PlansLoan's mission to help consumers access fast, convenient loan options without the hassle." />
      </Helmet>
      
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <div className="relative bg-gradient-to-b from-blue-800 to-blue-600 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Mission at PlansLoan</h1>
              <p className="text-xl md:text-2xl max-w-3xl mx-auto">
                Connecting people with financial solutions when they need them most.
              </p>
            </div>
          </div>
          
          <div className="absolute bottom-0 left-0 right-0 h-16 bg-gray-50 clip-upward"></div>
        </div>

        {/* Main Content */}
        <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
          {/* Vision & Origin */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Vision</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              PlansLoan was founded in 2018 with a simple yet powerful vision: to transform the often complicated and time-consuming process of finding financial assistance into something accessible, transparent, and stress-free. We recognized that when financial emergencies arise, people need solutions quickly – not additional obstacles.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Our team of industry veterans came together with decades of combined experience in financial services, technology, and customer support. We identified a critical gap in the market: while many needed quick access to funds, the traditional loan application process was often overwhelming, especially for those already under financial pressure. We set out to build a platform that would connect consumers with lenders ready to help, all through a streamlined, dignified process that respects your time and situation.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Today, PlansLoan stands as a trusted intermediary that has helped thousands of Americans navigate their financial challenges with confidence and ease. We're not just a website – we're a dedicated team committed to your financial well-being.
            </p>
          </div>

          {/* How We Help */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">How We Help You</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              We understand that emergencies don't wait for convenient timing. An unexpected medical bill, car repair, or home maintenance issue can create immediate financial pressure. That's where PlansLoan comes in. We've simplified the process of connecting with reputable lenders and lending partners who can provide the funds you need.
            </p>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="flex">
                <div className="mr-4 text-blue-600">
                  <Clock size={28} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Save Valuable Time</h3>
                  <p className="text-gray-600">
                    No more visiting multiple websites or standing in line at local stores. Our single application form connects you with our extensive network of lenders and lending partners, saving you hours of research and paperwork.
                  </p>
                </div>
              </div>
              
              <div className="flex">
                <div className="mr-4 text-blue-600">
                  <Shield size={28} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Secure & Protected</h3>
                  <p className="text-gray-600">
                    We employ bank-level security measures to ensure your personal information remains protected throughout the process. Your privacy and data security are our top priorities.
                  </p>
                </div>
              </div>
              
              <div className="flex">
                <div className="mr-4 text-blue-600">
                  <Zap size={28} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Quick Decisions</h3>
                  <p className="text-gray-600">
                    Our lending partners understand urgency. Many can provide loan decisions within minutes, with funds potentially available in your account as soon as the next business day.
                  </p>
                </div>
              </div>
              
              <div className="flex">
                <div className="mr-4 text-blue-600">
                  <CheckCircle size={28} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Flexible Options</h3>
                  <p className="text-gray-600">
                    We work with lenders offering various loan products with different terms, helping you find options that may work for your specific situation and needs.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Our Service */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Service Commitment</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              PlansLoan is not a lender or lending partner. Instead, we operate as a specialized connection service designed to match consumers with appropriate lending options. By submitting your information through our secure, user-friendly platform, we help facilitate connections with lenders and lending partners in our extensive network who are prepared to assist with your financial needs.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Each lender or lending partner in our network has been carefully selected for their commitment to customer service, transparent terms, and efficient processes. They have streamlined their approval workflows to provide quick decisions and digital loan agreements that can be reviewed and signed online – no printing, faxing, or visiting physical locations required.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              We believe in empowering consumers with information and options. While we facilitate connections to potential lenders, we encourage all users to carefully review loan terms and conditions before accepting any offer. Our goal is not just to help you find a loan today, but to support your journey toward greater financial stability tomorrow.
            </p>
          </div>

          {/* Values */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Core Values</h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center p-6 border border-gray-100 rounded-lg hover:shadow-md transition-shadow">
                <div className="inline-block p-3 bg-blue-100 rounded-full text-blue-600 mb-4">
                  <ThumbsUp size={28} />
                </div>
                <h3 className="text-xl font-semibold mb-3">Accessibility</h3>
                <p className="text-gray-600">
                  We believe financial services should be available to everyone, regardless of their past credit history or current circumstances.
                </p>
              </div>
              
              <div className="text-center p-6 border border-gray-100 rounded-lg hover:shadow-md transition-shadow">
                <div className="inline-block p-3 bg-blue-100 rounded-full text-blue-600 mb-4">
                  <Users size={28} />
                </div>
                <h3 className="text-xl font-semibold mb-3">Compassion</h3>
                <p className="text-gray-600">
                  We understand financial challenges can happen to anyone. Our platform and processes are built with empathy and respect.
                </p>
              </div>
              
              <div className="text-center p-6 border border-gray-100 rounded-lg hover:shadow-md transition-shadow">
                <div className="inline-block p-3 bg-blue-100 rounded-full text-blue-600 mb-4">
                  <Award size={28} />
                </div>
                <h3 className="text-xl font-semibold mb-3">Excellence</h3>
                <p className="text-gray-600">
                  We continuously improve our technology, partnerships, and customer experience to deliver exceptional service every time.
                </p>
              </div>
            </div>
          </div>

          {/* Closing Section */}
          <div className="text-center mt-12 mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Your Financial Partner</h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              At PlansLoan, we look forward to helping you navigate your financial journey with confidence. Whether you need assistance today or in the future, our platform and dedicated team are here to connect you with the right resources at the right time.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;