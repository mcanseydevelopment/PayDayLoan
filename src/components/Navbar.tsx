import React from 'react';
import arrowIcon from '../assets/images/Arrow45.png';
import MobileMenu from './MobileMenu';
import NotificationStrip from './NotificationStrip';

const Navbar: React.FC = () => {
  return (
    <>
      <NotificationStrip />
      <nav className="bg-white shadow-md lg:static fixed top-0 left-0 right-0 z-50">
        <div className="max-w-7xl  mx-auto px-4 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold text-gray-800">PlansLoan</div>
          
          {/* Mobile Menu */}
          <MobileMenu />

          {/* Desktop Menu - Changed from md: to lg: */}
          <div className="hidden lg:flex space-x-6">
            <a href="#" className="text-gray-600 hover:text-gray-800 transition-colors duration-300 text-[16px]">Home</a>
            <a href="#" className="text-gray-600 hover:text-gray-800 transition-colors duration-300 text-[16px]">Loan</a>
            <a href="#" className="text-gray-600 hover:text-gray-800 transition-colors duration-300 text-[16px]">How it Works</a>
            <a href="#" className="text-gray-600 hover:text-gray-800 transition-colors duration-300 text-[16px]">About us</a>
            <a href="#" className="text-gray-600 hover:text-gray-800 transition-colors duration-300 text-[16px]">Blog</a>
            <a href="#" className="text-gray-600 hover:text-gray-800 transition-colors duration-300 text-[16px]">Contact us</a>
          </div>
          
          <button className="hidden lg:flex bg-black text-white px-6 py-2 rounded-full hover:bg-gray-800 transition-all duration-300 items-center gap-2">
            Apply Now
            <img 
              src={arrowIcon} 
              alt="arrow right"
              className="inline-block w-[30px] h-[30px]"
            />
          </button>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
