import React from 'react';
import dollarIcon from '../assets/images/dollar.png';
import clockIcon from '../assets/images/lightning.png';
import shieldIcon from '../assets/images/safe-guard.png';
import cash from "../assets/images/cashPot.png";

const HeroSection: React.FC = () => {
  return (
    <section className="relative text-white py-12 pb-32 min-h-[60vh]">
      {/* Background gradient div */}
      <div 
        className="absolute inset-0 -z-10"
        style={{
          background: 'radial-gradient(158.05% 158.05% at 0% 100%, #1E3B8A 0%, #4777EE 33.45%, #4777EE 50%, #B3C6FA 76.55%, #F5F8FF 100%), radial-gradient(25% 25% at 0% 0%, #1E3B8A 0%, transparent 100%)',
        }}
      />

      {/* Main content container */}
      <div className="mx-auto max-w-7xl px-4 flex flex-col xl:flex-row items-center justify-between gap-8 relative z-10 h-full">
        {/* Left Section */}
        <div className="xl:w-[45%] w-full text-center xl:text-left mb-3 xl:mb-0 flex flex-col justify-center items-center xl:items-start">
            <h1 className="mb-4 flex flex-col space-y-2 items-center xl:items-start">
            <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight flex items-center gap-2">
              Convenient&nbsp;Loan <img 
              src={cash} 
              alt="Cash pot" 
              className="inline-block object-contain w-[35px] sm:w-[40px] md:w-[50px] lg:w-[70px]"
              /> Options
            </span>
            <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
              Connect With Lenders
            </span>
            <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
              Who Can Help!
            </span>
            </h1>
          <p className="text-base md:text-lg mb-8 max-w-xl text-center xl:text-left">
            Credit may be checked. Approval times vary by lender. Funds may be deposited as soon as the next business day if approved.
          </p>
          {/* Buttons */}
          <div className="flex flex-row justify-center xl:justify-start space-x-4">
            <button className="text-sm md:text-base bg-white text-blue-700 px-6 md:px-8 py-2 md:py-3 rounded-[40px] whitespace-nowrap">
              See If You Qualify
            </button>
            <button className="text-sm md:text-base px-6 md:px-8 py-2 md:py-3 rounded-lg whitespace-nowrap">
              How it works
            </button>
          </div>
        </div>
        {/* Right Section - Form */}
        <div className="xl:w-[45%] w-full z-10">
          <div className="w-full max-w-xl mx-auto rounded-lg" id="form-container">
              <div className="mt-6 flex justify-center">
              <a
                href="https://apply.plansloan.com"
                aria-label="Apply Now"
                className="inline-flex items-center gap-3 px-6 py-3 bg-white text-blue-700 text-sm md:text-base rounded-full shadow-lg hover:scale-105 transform transition-transform duration-200 focus:outline-none focus:ring-4 focus:ring-[#06B6D4]/30"
              >
                Apply Now
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </a>
              </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="absolute bottom-0 translate-y-1/2 left-0 right-0 z-30">
        <div className="max-w-7xl xl:mx-auto lg:mx-10 sm:mx-3 px-4 mt-4 md:mt-0">
          <div className="bg-white rounded-[32px] py-6 md:px-4 px-[4.5rem] text-black shadow-[0px_17px_62px_0px_#02060C12]">
            <div className="flex flex-col md:flex-row justify-evenly items-stretch space-y-6 md:space-y-0">
              {/* Amount Stats */}
              <div className="flex items-center justify-between md:justify-start gap-3 w-full md:w-auto">
                <img 
                  src={dollarIcon}
                  alt="Dollar icon"
                  className="object-contain w-[35px] h-[35px]"
                />
                <div className="flex flex-col">
                  <div className="text-[16px] md:text-[24px] font-medium">
                    $500 - $5,000
                  </div>
                </div>
              </div>

              {/* Mobile Divider */}
              <div className="block md:hidden w-full h-[1px] bg-[#EDEDED]"></div>

              {/* Desktop Divider */}
              <div className="hidden md:block w-[1px] h-16 bg-[#EDEDED]"></div>

              {/* Time Stats */}
              <div className="flex items-center justify-between md:justify-start gap-3 w-full md:w-auto">
                <img 
                  src={clockIcon}
                  alt="Clock icon"
                  className="object-contain w-[35px] h-[35px]"
                />
                <div className="flex flex-col">
                  <div className="text-[18px] md:text-[24px] font-medium">
                    Funding Times Vary
                  </div>
                </div>
              </div>

              {/* Mobile Divider */}
              <div className="block md:hidden w-full h-[1px] bg-[#EDEDED]"></div>

              {/* Desktop Divider */}
              <div className="hidden md:block w-[1px] h-16 bg-[#EDEDED]"></div>

              {/* Security Stats */}
              <div className="flex items-center justify-between md:justify-start gap-3 w-full md:w-auto">
                <img 
                  src={shieldIcon}
                  alt="Shield icon"
                  className="object-contain w-[35px] h-[35px]"
                />
                <div className="flex flex-col">
                  <div className="text-[18px] md:text-[24px] font-medium">
                    Safe & Secure
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;