import React, { useState } from 'react';
import arrowIcon from '../assets/images/Arrow45.png';
import { motion, AnimatePresence } from 'framer-motion';

const MobileMenu: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="lg:hidden"> {/* Changed from md:hidden to lg:hidden */}
      {/* Hamburger Button - Adjusted z-index */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 relative z-[60]" // Increased z-index
      >
        <div className={`w-6 h-0.5 bg-gray-800 transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-1.5' : ''}`}></div>
        <div className={`w-6 h-0.5 bg-gray-800 my-1 transition-all duration-300 ${isOpen ? 'opacity-0' : ''}`}></div>
        <div className={`w-6 h-0.5 bg-gray-800 transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></div>
      </button>

      {/* Mobile Menu Overlay - Adjusted positioning and z-index */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="fixed inset-0 bg-gradient-to-br from-blue-900 to-blue-600 z-[55] mt-[72px]" // Added mt-[72px] to account for navbar height
          >
            <motion.div 
              className="p-8 h-full flex flex-col"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <div className="flex justify-between items-center mb-12">
                <div className="text-3xl font-bold text-white">Paydeayloan</div>
              </div>
              <div className="flex flex-col space-y-6">
                {['Home', 'Loan', 'How it Works', 'About us', 'Blog', 'Contact us'].map((item, index) => (
                  <motion.a
                    key={item}
                    href="#"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 * (index + 1) }}
                    className="text-white text-2xl font-medium hover:text-blue-200 transition-colors duration-300"
                  >
                    {item}
                  </motion.a>
                ))}
                <motion.button 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 }}
                  className="mt-8 bg-white text-blue-900 px-6 py-3 rounded-full hover:bg-blue-50 transition-colors duration-300 flex items-center gap-2 justify-center"
                >
                  Apply Now
                  <img 
                    src={arrowIcon} 
                    alt="arrow right"
                    width={24}
                    height={24}
                    className="inline-block"
                  />
                </motion.button>
              </div>
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
                className="mt-auto text-white/60 text-sm"
              >
                © 2024 Paydeayloan. All rights reserved.
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default MobileMenu;