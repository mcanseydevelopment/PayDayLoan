"use client";
import React from 'react';
import loanimage1 from "../assets/images/loan-first-image.svg";
import loanimage2 from "../assets/images/Loan-Image-2image.svg";
import loanimage3 from "../assets/images/Loan-Image-3.svg";

const SecureForm: React.FC = () => {
  return (
    <div className="bg-gradient-to-b from-[#0d924b] to-[#347222] text-white md:py-10 py-5">
      <div className="mx-auto text-center">
        <h2 className="text-[1.875rem] md:text-[2.625rem] font-bold mb-2">
          Complete Our Secure Online Form in Minutes
        </h2>
        <div className="w-32 mt-3 h-[3.2px] bg-white mx-auto mb-6"></div>
                
        {/* Wrapper div with white border and custom bg color */}
        <div style={{ border: '1px solid white' }} className="max-w-6xl xl:mx-auto rounded-xl overflow-hidden md:mx-12 mx-4">
          <div className="grid grid-cols-1 xl:grid-cols-3 h-full bg-[#347222]">
            {/* First card */}
            <div className="bg-[#347222] p-3 md:p-8 h-full relative">
              <div>
                <img 
                  className="md:mb-6 mb-2 mx-auto"
                  src={loanimage1}
                  alt="Connect with Lenders"
                />
              </div>
              <h3 className="text-xl font-semibold md:mb-4 mb-1">Connect with Lenders</h3>
              <p className="text-base">
                We aim to connect you with lenders who may help with your financial needs. 
                Our streamlined process means you won&apos;t need to visit multiple websites or fill out numerous forms.
              </p>
              <div className="absolute hidden xl:block right-0 top-8 bottom-8 w-[1px] bg-white"></div>
              <div className="absolute block xl:hidden w-[calc(100%-4rem)] h-[1px] left-8 bottom-0 bg-white"></div>
            </div>

            {/* Second card */}
            <div className="bg-[#347222] p-3 md:p-8 h-full relative">
              <div>
                <img 
                  className="md:mb-6 mb-2 mx-auto"
                  src={loanimage2}
                  alt="Fast Response"
                />
              </div>
              <h3 className="text-xl font-semibold md:mb-4 mb-1">Quick Response Times</h3>
              <p className="text-base">
                Our online service connects you with a lender quickly. 
                The process takes a few minutes. Fill out our secure online form, and we send 
                an encrypted copy to an authorized lender to review. If you accept their terms, 
                funds may be deposited into your bank account as soon as the next business day, depending on the lender.
                Every request received is handled with care and efficiency.
              </p>
              <div className="absolute hidden xl:block right-0 top-8 bottom-8 w-[1px] bg-white"></div>
              <div className="absolute block xl:hidden w-[calc(100%-4rem)] h-[1px] left-8 bottom-0 bg-white"></div>
            </div>

            {/* Third card */}
            <div className="bg-[#347222] p-3 md:p-8 h-full">
              <div>
                <img 
                  className="md:mb-6 mb-2 mx-auto"
                  src={loanimage3}
                  alt="Privacy"
                />
              </div>
              <h3 className="text-xl font-semibold md:mb-4 mb-1">Your Privacy Matters</h3>
              <p className="text-base">
                We recognize that financial matters are private. Reasons for needing money range 
                from critical automobile maintenance to unexpected medical expenses. Whatever 
                your reason, we respect your privacy and work with lenders who understand your situation.
              </p>
            </div>
          </div>
        </div>

        <button className="mt-8 bg-white text-green-700 px-20 py-4 rounded-lg shadow-md hover:bg-[#2d85cc] hover:text-white text-md font-bold">
          CHECK ELIGIBILITY
        </button>
      </div>
    </div>
  );
};

export default SecureForm;