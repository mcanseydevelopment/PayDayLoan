import React from 'react';
import { Helmet } from 'react-helmet-async';
import { MapPin, Phone, Mail, MessageSquare, Clock, HelpCircle, Link2, FileText, ExternalLink, Shield } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Contact Us - PlansLoan</title>
        <meta name="description" content="Get in touch with PlansLoan's support team. We're here to help with any questions about our loan connection service." />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
        {/* Header Banner */}
        <div className="relative bg-gradient-to-r from-blue-800 to-blue-600 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 flex items-center justify-center">
                <MessageSquare className="mr-4" size={36} />
                Contact Us
              </h1>
              <p className="text-xl md:text-2xl max-w-3xl mx-auto">
                Have questions? We're here to help.
              </p>
            </div>
          </div>
          
          <div className="absolute bottom-0 left-0 right-0 h-16 bg-gray-50 clip-upward"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
          {/* Contact Information */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-12 relative overflow-hidden">
            <div className="relative z-10">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Contact Information</h2>
              
              <div className="grid md:grid-cols-3 gap-8">
                <div className="flex flex-col items-center text-center p-6 bg-blue-50 rounded-lg">
                  <div className="bg-blue-600 rounded-full p-3 mb-4">
                    <MapPin className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">Our Address</h3>
                    <p className="text-gray-600">PlansLoan LLC<br />917 W Jasmine Way<br />Rialto, CA 92376</p>
                </div>
                
                <div className="flex flex-col items-center text-center p-6 bg-blue-50 rounded-lg">
                  <div className="bg-blue-600 rounded-full p-3 mb-4">
                    <Phone className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">Phone Number</h3>
                  <p className="text-gray-600">Customer Service:</p>
                    <a href="tel:+12093224991" className="text-blue-600 hover:underline font-medium">+1 (209) 322-4991</a>
                  <p className="text-gray-500 text-sm mt-2">Monday-Friday: 8am-8pm ET</p>
                </div>
                
                <div className="flex flex-col items-center text-center p-6 bg-blue-50 rounded-lg">
                  <div className="bg-blue-600 rounded-full p-3 mb-4">
                    <Mail className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">Email Address</h3>
                  <p className="text-gray-600">For general inquiries:</p>
                  <a href="mailto:support@plansloan.com" className="text-blue-600 hover:underline font-medium">support@plansloan.com</a>
                  <p className="text-gray-500 text-sm mt-2">We respond within 24-48 hours</p>
                </div>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 -mt-10 -mr-10 h-64 w-64 rounded-full bg-blue-100 opacity-20"></div>
            <div className="absolute bottom-0 left-0 -mb-10 -ml-10 h-64 w-64 rounded-full bg-blue-100 opacity-20"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Help & Information (Expanded) */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <HelpCircle className="mr-3 text-blue-600" size={24} />
                Need Help?
              </h2>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <Link2 className="h-6 w-6 text-blue-600" />
                  </div>
                  <div className="ml-3">
                    <h3 className="text-lg font-medium text-gray-900">Common Questions</h3>
                    <p className="mt-2 text-gray-600">
                      For a list of answers to commonly asked questions, please visit our 
                      <a href="/howItWorks" className="text-blue-600 hover:underline"> FAQ Section</a>.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <FileText className="h-6 w-6 text-blue-600" />
                  </div>
                  <div className="ml-3">
                    <h3 className="text-lg font-medium text-gray-900">How It Works</h3>
                    <p className="mt-2 text-gray-600">
                      Learn more about how we connect you with a lender by visiting our 
                      <a href="/howItWorks" className="text-blue-600 hover:underline"> How It Works Page</a>.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <Clock className="h-6 w-6 text-blue-600" />
                  </div>
                  <div className="ml-3">
                    <h3 className="text-lg font-medium text-gray-900">Response Time</h3>
                    <p className="mt-2 text-gray-600">
                      We strive to respond to all inquiries within 24-48 business hours.
                    </p>
                  </div>
                </div>
                
                <div className="border-t border-gray-200 pt-6 mt-6">
                  <p className="text-gray-600">
                    <strong>Note:</strong> For loan-related questions, please contact your lender directly. We are a loan connection service and do not have information about your specific loan terms or status.
                  </p>
                </div>
              </div>
            </div>
            
            {/* Contact Methods */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <ExternalLink className="mr-3 text-blue-600" size={24} />
                How to Reach Us
              </h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-medium text-gray-900 mb-2">Email Support</h3>
                  <p className="text-gray-600 mb-3">
                    For general inquiries or support, email us at:
                  </p>
                  <a href="mailto:support@plansloan.com" 
                     className="inline-block px-4 py-2 bg-blue-50 text-blue-600 rounded-lg hover:bg-blue-100 transition-colors">
                    support@plansloan.com
                  </a>
                </div>
                
                <div>
                  <h3 className="text-lg font-medium text-gray-900 mb-2">Phone Support</h3>
                  <p className="text-gray-600 mb-3">
                    Our customer service representatives are available:
                  </p>
                  <p className="text-gray-700 font-medium">Monday - Friday: 8:00 AM - 8:00 PM ET</p>
                  <p className="text-gray-700 font-medium">Saturday: 10:00 AM - 4:00 PM ET</p>
                  <p className="text-gray-700 font-medium">Sunday: Closed</p>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <Shield className="h-6 w-6 text-blue-600" />
                  </div>
                  <div className="ml-3">
                    <h3 className="text-lg font-medium text-gray-900">Your Information Is Protected</h3>
                    <p className="mt-2 text-gray-600">
                      All communications with our team are confidential and your privacy is our priority. Learn more in our 
                      <a href="/privacyPolicy" className="text-blue-600 hover:underline"> Privacy Policy</a>.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Map */}
          <div className="bg-white rounded-xl shadow-lg p-6 mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
              <MapPin className="mr-3 text-blue-600" size={24} />
              Our Location
            </h2>
            <div className="h-80 w-full rounded-lg overflow-hidden">
              <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3303.937226631452!2d-117.3958246!3d34.099475!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c34b0f1f5f5c67%3A0xed39ba3cfe6ee3b9!2s917%20W%20Jasmine%20Way%2C%20Rialto%2C%20CA%2092376!5e0!3m2!1sen!2sus!4v1678298666029!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="PlansLoan Office Location"
              ></iframe>
            </div>
          </div>
          
          {/* Legal Note */}
          <div className="bg-gray-50 border-l-4 border-blue-500 p-6 rounded-r-lg mb-12">
            <p className="text-gray-600 text-sm">
              PlansLoan is not a lender and does not make credit decisions. We simply connect consumers looking for loans with our network of qualified lenders. For loan-related questions, please contact your lender directly.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;