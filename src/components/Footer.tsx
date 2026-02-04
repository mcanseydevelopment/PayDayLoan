import type React from "react"
import { useState } from "react"
import { Facebook, Instagram, Send, Linkedin, MapPin, Phone, Mail, Lock, Shield } from "lucide-react"
import { Link } from "react-router-dom"

const Footer: React.FC = () => {
  const [unsubscribeEmail, setUnsubscribeEmail] = useState("");
  const [unsubscribeStatus, setUnsubscribeStatus] = useState<"idle" | "success">("idle");
  const [unsubscribeMessage, setUnsubscribeMessage] = useState("");

  const handleUnsubscribe = async (event: React.FormEvent) => {
    event.preventDefault();
    
    if (!unsubscribeEmail) {
      setUnsubscribeMessage("Please enter a valid email address");
      return;
    }

    try {
      // Add your unsubscribe API call here
      // For now, simulating success
      setUnsubscribeStatus("success");
      setUnsubscribeMessage("Successfully unsubscribed!");
    } catch (error) {
      setUnsubscribeMessage("An error occurred. Please try again.");
    }
  };
  return (
    <footer className="bg-black text-white py-12">
      <div className="max-w-7xl mx-auto px-4">
        {/* Advertiser Disclosure Box */}
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
            <h2 className="text-2xl font-bold mb-4">PlansLoan LLC</h2>
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
                <span>+1 (209) 322-4991</span>
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
                <Link to="/personal-loans" className="text-gray-300 hover:text-white">
                  Personal Loans
                </Link>
              </li>
              <li>
                <Link to="/short-term-loans" className="text-gray-300 hover:text-white">
                  Short-term Loans
                </Link>
              </li>
              <li>
                <Link to="/emergency-loans" className="text-gray-300 hover:text-white">
                  Emergency Loans
                </Link>
              </li>
              <li>
                <Link to="/funding-options" className="text-gray-300 hover:text-white">
                  Funding Options
                </Link>
              </li>
            </ul>
          </div>

          {/* Other Pages */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Other Pages</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/privacyPolicy" className="text-gray-300 hover:text-white">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/termsOfUse" className="text-gray-300 hover:text-white">
                  Terms of Use
                </Link>
              </li>
              <li>
                <Link to="/disclaimer" className="text-gray-300 hover:text-white">
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

        {/* Security Statement */}
        <div className="border-t border-gray-800 mt-8 pt-6 flex items-center justify-center mb-8">
          <Lock className="mr-2 text-blue-400" size={18} />
          <p className="text-gray-400 text-sm">
            Your information is protected with industry-standard 256-bit SSL encryption
          </p>
        </div>

        {/* Expensive Borrowing Warning */}
        <div className="bg-gray-800 p-4 rounded mb-8 text-center">
          <p className="text-amber-300 text-sm">
            This is an expensive form of borrowing and should not be used as a long-term financial solution. 
            APRs range from 99% to 400% depending on the lender. Consider alternatives before accepting any loan offer.
          </p>
        </div>

        {/* Income Statement */}
        <div className="text-center mb-8">
          <p className="text-gray-400 text-sm">
            You are not required to disclose alimony, child support, or separate maintenance income unless you wish to have it considered.
          </p>
        </div>

        {/* Unsubscribe Form */}
        <div className="max-w-md mx-auto mb-8">
          <form
            onSubmit={handleUnsubscribe}
            className="mt-4 space-y-3">
            <label className="block text-sm font-medium text-gray-200">
              Unsubscribe from emails
            </label>
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                value={unsubscribeEmail}
                onChange={(event) => {
                  setUnsubscribeEmail(event.target.value);
                  if (unsubscribeStatus !== "idle") {
                    setUnsubscribeStatus("idle");
                    setUnsubscribeMessage("");
                  }
                }}
                placeholder="Enter your email"
                className="flex-1 px-3 py-2 rounded-md bg-gray-800 border border-gray-700 text-sm text-gray-100 placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                disabled={unsubscribeStatus === "success"}
                aria-label="Unsubscribe email"
              />
              <button
                type="submit"
                className={`px-4 py-2 rounded-md text-sm font-semibold transition-colors ${
                  unsubscribeStatus === "success"
                    ? "bg-emerald-600 cursor-default"
                    : "bg-blue-600 hover:bg-blue-700"
                }`}
                disabled={unsubscribeStatus === "success"}
              >
                {unsubscribeStatus === "success"
                  ? "Unsubscribed"
                  : "Unsubscribe"}
              </button>
            </div>
            {unsubscribeMessage && (
              <p className={`text-sm ${unsubscribeStatus === "success" ? "text-emerald-400" : "text-red-400"}`}>
                {unsubscribeMessage}
              </p>
            )}
          </form>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 mt-4 pt-6">
          <p className="text-center text-gray-400">
            © {new Date().getFullYear()} PlansLoan LLC. All rights reserved.
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

