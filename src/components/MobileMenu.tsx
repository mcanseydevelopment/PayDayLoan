import React, { useState, useEffect } from 'react';
import arrowIcon from '../assets/images/Arrow45.png';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

const MobileMenu: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Prevent scrolling when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  const menuItems = [
    { name: 'Home', to: '/' },
    { name: 'How it Works', to: '/howItWorks' },
    { name: 'About us', to: '/about' },
    { name: 'Contact us', to: '/contact' }
  ];

  return (
    <div className="lg:hidden">
      {/* Hamburger button - only visible when menu is closed */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="p-2 relative z-[60] group"
          aria-label="Open menu"
        >
          <div className="w-6 h-0.5 bg-gray-600 group-hover:bg-gray-800 transition-all duration-300"></div>
          <div className="w-6 h-0.5 bg-gray-600 my-1.5 group-hover:bg-gray-800 transition-all duration-300"></div>
          <div className="w-6 h-0.5 bg-gray-600 group-hover:bg-gray-800 transition-all duration-300"></div>
        </button>
      )}

      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="fixed inset-0 bg-black/5 backdrop-blur-md z-[55]"
          >
            <motion.div 
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="absolute inset-y-0 left-0 w-[85%] max-w-[350px] bg-white shadow-2xl"
            >
              <div className="h-full flex flex-col">
                <motion.div 
                  className="p-6 border-b border-gray-100 flex items-center justify-between"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.1 }}
                >
                  <div className="text-2xl font-medium text-gray-800">PlansLoan</div>
                  
                  {/* Close button inside the menu header */}
                  <button
                    onClick={() => setIsOpen(false)}
                    className="relative p-2 rounded-full hover:bg-gray-100 transition-colors duration-200"
                    aria-label="Close menu"
                  >
                    <div className="w-5 h-0.5 bg-gray-600 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rotate-45"></div>
                    <div className="w-5 h-0.5 bg-gray-600 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -rotate-45"></div>
                  </button>
                </motion.div>
                
                <div className="flex-grow overflow-y-auto py-8 px-6">
                  <div className="flex flex-col space-y-5">
                    {menuItems.map((item, index) => (
                      <motion.div
                        key={item.name}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 + index * 0.07 }}
                      >
                        <Link
                          to={item.to}
                          className="text-gray-700 text-lg font-normal hover:text-blue-600 transition-colors duration-200 block py-1.5"
                          onClick={() => setIsOpen(false)}
                        >
                          {item.name}
                        </Link>
                      </motion.div>
                    ))}
                  </div>
                  
                  {/* Request Loan Button */}
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="mt-12"
                  >
                    <a 
                      href="https://track.vcommission.com/t/MTIwMTYwXzExODA0/" 
                      className="flex bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-3 rounded-lg hover:shadow-md transition-all duration-300 items-center gap-2 w-fit"
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => setIsOpen(false)}
                    >
                      <span className="font-medium">Request Loan</span>
                      <img 
                        src={arrowIcon} 
                        alt="arrow right"
                        className="inline-block w-[20px] h-[20px]"
                      />
                    </a>
                  </motion.div>
                </div>
                
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  className="p-6 border-t border-gray-100 text-gray-500 text-sm"
                >
                  <p>© {new Date().getFullYear()} PlansLoan LLC. All rights reserved.</p>
                </motion.div>
              </div>
            </motion.div>
            
            {/* Backdrop click to close */}
            <div 
              className="absolute inset-0 z-[-1]" 
              onClick={() => setIsOpen(false)}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default MobileMenu;