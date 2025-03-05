import React, { useState } from 'react';
import arrowIcon from '../assets/images/Arrow45.png';
import { motion, AnimatePresence } from 'framer-motion';

const MobileMenu: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { name: 'Home', href: '/' },
    { name: 'How it Works', href: '#how-it-works' },
    { name: 'About us', href: '#about' },
    { name: 'Contact us', href: '#contact' }
  ];

  return (
    <div className="lg:hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 relative z-[60]"
        aria-label={isOpen ? 'Close menu' : 'Open menu'}
      >
        <div className={`w-6 h-0.5 bg-gray-800 transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-1.5' : ''}`}></div>
        <div className={`w-6 h-0.5 bg-gray-800 my-1 transition-all duration-300 ${isOpen ? 'opacity-0' : ''}`}></div>
        <div className={`w-6 h-0.5 bg-gray-800 transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></div>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="fixed inset-0 bg-gradient-to-br from-blue-900 to-blue-600 z-[55] mt-[72px]"
          >
            <motion.div 
              className="p-8 h-full flex flex-col"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <div className="flex justify-between items-center mb-12">
                <div className="text-3xl font-bold text-white">PlansLoan</div>
              </div>
              <div className="flex flex-col space-y-6">
                {menuItems.map((item, index) => (
                  <motion.a
                    key={item.name}
                    href={item.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 * (index + 1) }}
                    className="text-white text-2xl font-medium hover:text-blue-200 transition-colors duration-300"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </motion.a>
                ))}
              </div>
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
                className="mt-auto text-white/60 text-sm"
              >
                <p>© {new Date().getFullYear()} PlansLoan. All rights reserved.</p>
                <p className="mt-2">NMLS #12345</p>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default MobileMenu;