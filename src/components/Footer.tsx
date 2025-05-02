import type React from "react"
import { Facebook, Instagram, Send, Linkedin, MapPin, Phone, Mail, Lock, Shield } from "lucide-react"
import { Link } from "react-router-dom"

const Footer: React.FC = () => {
  // Function to scroll to the form
  const scrollToForm = () => {
    const formElement = document.getElementById('form-container');
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth' });
    } else {
      // If we're not on the homepage, go to home page and then scroll to form
      window.location.href = '/#form-container';
    }
  };

  return (
    <footer className="bg-black text-white py-12">
      <div className="max-w-7xl mx-auto px-4">
        {/* Advertiser Disclosure Box - NEW */}
        <div className="bg-gray-800 rounded-lg p-6 mb-12 border-l-4 border-blue-500">
          <h3 className="text-xl font-bold mb-3 flex items-center">
            <Shield className="mr-2" /> Advertiser Disclosure
          </h3>
          <p className="text-gray-300">
            PlansLoan is not a lender and does not make credit decisions. We connect consumers with lenders who can provide loan options. When you submit a loan request, we share your information with our lending partners who may contact you directly regarding your request. This service is free to you, and we do not endorse any particular loan product or service.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h2 className="text-2xl font-bold mb-4">PlansLoan</h2>
            <p className="text-gray-300 mb-6">
              Your trusted partner for convenient loan connection services. We connect you with reliable lenders nationwide to help you manage unexpected expenses with ease.
            </p>

            {/* Social Media Icons */}
            <div className="flex space-x-2 mb-6">
              <a href="#" className="bg-blue-600 rounded-full p-2 flex items-center justify-center w-10 h-10">
                <Facebook size={20} />
              </a>
              <a href="#" className="bg-blue-600 rounded-full p-2 flex items-center justify-center w-10 h-10">
                <Instagram size={20} />
              </a>
              <a href="#" className="bg-blue-600 rounded-full p-2 flex items-center justify-center w-10 h-10">
                <Send size={20} />
              </a>
              <a href="#" className="bg-blue-600 rounded-full p-2 flex items-center justify-center w-10 h-10">
                <Linkedin size={20} />
              </a>
            </div>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center">
                <MapPin className="mr-2" size={20} />
                <span>917 W Jasmine Way Rialto, CA, 92376</span>
              </div>
              <div className="flex items-center">
                <Phone className="mr-2" size={20} />
                <span>1-800-555-0123</span>
              </div>
              <div className="flex items-center">
                <Mail className="mr-2" size={20} />
                <span>support@plansloan.com</span>
              </div>
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Company</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/about/" className="text-gray-300 hover:text-white">
                  About us
                </Link>
              </li>
              <li>
                <a href="/services" className="text-gray-300 hover:text-white">
                  Services
                </a>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-white">
                  Contact us
                </Link>
              </li>
            </ul>
          </div>

          {/* Services - UPDATED */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Our Services</h3>
            <ul className="space-y-3">
                <li>
                <button 
                  onClick={scrollToForm} 
                  className="text-gray-300 hover:text-white text-left"
                >
                  Personal Loans
                </button>
                </li>
                <li>
                <button 
                  onClick={scrollToForm} 
                  className="text-gray-300 hover:text-white text-left"
                >
                  Short-term Loans
                </button>
                </li>
                <li>
                <button 
                  onClick={scrollToForm} 
                  className="text-gray-300 hover:text-white text-left"
                >
                  Emergency Loans
                </button>
                </li>
                <li>
                <button 
                  onClick={scrollToForm} 
                  className="text-gray-300 hover:text-white text-left"
                >
                  Cash Advances
                </button>
                </li>
            </ul>
          </div>

          {/* Other Pages */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Other Pages</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/privacyPolicy/" className="text-gray-300 hover:text-white">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/termsOfUse/" className="text-gray-300 hover:text-white">
                  Terms of Use
                </Link>
              </li>
              <li>
                <Link to="/disclaimer/" className="text-gray-300 hover:text-white">
                  Disclaimer
                </Link>
              </li>
              <li>
                <Link to="/legal-disclosures" className="text-gray-300 hover:text-white">
                  Legal Disclosures
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Security Statement - NEW */}
        <div className="border-t border-gray-800 mt-8 pt-6 flex items-center justify-center mb-8">
          <Lock className="mr-2 text-blue-400" size={18} />
          <p className="text-gray-400 text-sm">
            Your information is protected with industry-standard 256-bit SSL encryption
          </p>
        </div>

        {/* Expensive Borrowing Warning - NEW */}
        <div className="bg-gray-800 p-4 rounded mb-8 text-center">
          <p className="text-amber-300 text-sm">
            This is an expensive form of borrowing and should not be used as a long-term financial solution. 
            APRs range from 99% to 400% depending on the lender. Consider alternatives before accepting any loan offer.
          </p>
        </div>

        {/* Income Statement - NEW */}
        <div className="text-center mb-8">
          <p className="text-gray-400 text-sm">
            You are not required to disclose alimony, child support, or separate maintenance income unless you wish to have it considered.
          </p>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 mt-4 pt-6">
          <p className="text-center text-gray-400">
            © {new Date().getFullYear()} PlansLoan.com. All rights reserved.
          </p>
          <p className="text-center text-gray-400 text-sm mt-2">
            Not a lender - A loan connection service.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

