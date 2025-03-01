import type React from "react"
import { Facebook, Instagram, Send, Linkedin, MapPin, Phone, Mail } from "lucide-react"

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h2 className="text-2xl font-bold mb-4">Paydeayloan</h2>
            <p className="text-gray-300 mb-6">
              Lorem Ipsum is simply dummy text of the printing and are typesetting industry typesetting industry.
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
                <span>Mumbai, India</span>
              </div>
              <div className="flex items-center">
                <Phone className="mr-2" size={20} />
                <span>91 98765 43210</span>
              </div>
              <div className="flex items-center">
                <Mail className="mr-2" size={20} />
                <span>Lendingpalm@gmail.com</span>
              </div>
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Company</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-300 hover:text-white">
                  About us
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white">
                  Services
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white">
                  Blogs
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white">
                  Contact us
                </a>
              </li>
            </ul>
          </div>

          {/* Services as */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Our Services</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-300 hover:text-white">
                  Personal Loan
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white">
                  Insurance
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white">
                  Lorem ipsum
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white">
                  Lorem ipsum
                </a>
              </li>
            </ul>
          </div>

          {/* Other Pages */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Other Pages</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-300 hover:text-white">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white">
                  Terms & Conditions
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white">
                  Disclaimer
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 mt-12 pt-6">
          <p className="text-center text-gray-400">© 2025 VSG pest. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

