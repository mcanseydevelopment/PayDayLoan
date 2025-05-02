import React from 'react';
import arrowIcon from '../assets/images/Arrow45.png';
import MobileMenu from './MobileMenu';
import NotificationStrip from './NotificationStrip';
import Logo from "../assets/images/PlansLoanLogo.svg";
import { Link } from 'react-router-dom';
const Navbar: React.FC = () => {
  return (
    <>
      <NotificationStrip />
      <nav className="bg-white shadow-md lg:static fixed top-0 left-0 right-0 z-50">
        <div className="max-w-7xl  mx-auto px-4 py-4 flex justify-between items-center">
            <Link to="/" className="h-9">
              <img src={Logo} alt="PlansLoan Logo" className="h-full" />
            </Link>
          
          {/* Mobile Menu */}
          <MobileMenu />

          {/* Desktop Menu - Changed from md: to lg: */}
          <div className="hidden lg:flex space-x-6">
            <Link to="/" className="text-gray-600 hover:text-gray-800 transition-colors duration-300 text-[16px]">Home</Link>
            <Link to="/howItWorks" className="text-gray-600 hover:text-gray-800 transition-colors duration-300 text-[16px]">How it Works</Link>
            <Link to="/about" className="text-gray-600 hover:text-gray-800 transition-colors duration-300 text-[16px]">About us</Link>
            <Link to="/contact" className="text-gray-600 hover:text-gray-800 transition-colors duration-300 text-[16px]">Contact us</Link>
          </div>
          
            <a href="/" className="hidden lg:flex bg-black text-white px-6 py-2 rounded-full hover:bg-gray-800 transition-all duration-300 items-center gap-2">
            Request Loan
            <img 
              src={arrowIcon} 
              alt="arrow right"
              className="inline-block w-[30px] h-[30px]"
            />
            </a>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
