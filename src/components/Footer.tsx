import type React from "react"
import { Facebook, Instagram, Send, Linkedin, MapPin, Phone, Mail } from "lucide-react"
import { Link } from "react-router-dom"

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h2 className="text-2xl font-bold mb-4">PlansLoan</h2>
            <p className="text-gray-300 mb-6">
              Your trusted partner for quick and convenient online payday loans. We connect you with reliable lenders nationwide to help you manage unexpected expenses with ease.
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
                <span>2504 Broadway, New York, NY 10025</span>
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

          {/* Services */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Our Services</h3>
            <ul className="space-y-3">
                <li>
                <Link to="/" className="text-gray-300 hover:text-white">
                  Payday Loans
                </Link>
                </li>
                <li>
                <Link to="/" className="text-gray-300 hover:text-white">
                  Short-term Loans
                </Link>
                </li>
                <li>
                <Link to="/" className="text-gray-300 hover:text-white">
                  Emergency Loans
                </Link>
                </li>
                <li>
                <Link to="/" className="text-gray-300 hover:text-white">
                  Cash Advances
                </Link>
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
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 mt-12 pt-6">
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

