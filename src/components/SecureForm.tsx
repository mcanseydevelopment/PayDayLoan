"use client";
import Image from "next/image";
import loanimage1 from "../../../public/loan-first-image.svg"
import loanimage2 from "../../../public/Loan-Image-2image.svg"
import loanimage3 from "../../../public/Loan-Image-3.svg"
import React from 'react';
const SecureForm: React.FC = () => {
  return (
    <div className="bg-gradient-to-b from-[#0d924b] to-[#347222] text-white md:py-10 py-5">
      <div className="mx-auto mx- text-center">
      <h2 className="text-[1.875rem] md:text-[2.625rem] font-bold mb-2">A Few Minutes to Complete Our Secure Online Form</h2>
        <div className="w-32 mt-3 h-[3.2px] bg-white mx-auto mb-6"></div>
                
        {/* Wrapper div with white border and custom bg color */}
        <div style={{ border: '1px solid white !important' }} className="max-w-6xl xl:mx-auto rounded-xl overflow-hidden md:mx-12 mx-4">
          <div className="grid grid-cols-1 xl:grid-cols-3 h-full bg-[#347222]">
            {/* First card */}
            <div className="bg-[#347222] p-3 md:p-8 h-full relative">
              <div className="">
                <Image className="md:mb-6 mb-2 mx-auto"
                  src={loanimage1}
                  alt="Loan First Image"
                />
              </div>
              <h3 className="text-xl font-semibold md:mb-4 mb-1">Connect with a Helpful Lender</h3>
              <p className="text-base ">
                We commit to connecting you with an approved lender. We also made the process simple. 
                No need to visit hundreds of websites and fill out numerous paperwork.
              </p>
              {/* Responsive border */}
                <div className="absolute hidden xl:block right-0 top-8 bottom-8 w-[1px] bg-white"></div>
                  {/* Horizontal border for smaller screens */}
                  <div className="absolute block xl:hidden w-[calc(100%-4rem)] h-[1px] left-8 bottom-0 bg-white"></div>
                </div>

            {/* Second card */}
            <div className="bg-[#347222] p-3 md:p-8 h-full relative">
              <div className="">
                <Image className="md:mb-6 mb-2 mx-auto"
                  src={loanimage2}
                  alt="Loan 2nd Image"
                />
              </div>
              <h3 className="text-xl font-semibold md:mb-4 mb-1">The Need for Speed</h3>
              <p className="text-base ">
                Our online service readily serves your need to connect with a lender. 
                The process takes a few minutes. Fill out our secure online form and we send 
                an encrypted copy to an authorized lender to approve. Once you submit your information, 
                you will be redirected to the lender&apos;s website where you can review the terms of the loan, 
                including details about all the applicable rates and fees. If you accept these terms, 
                the lender will deposit money directly into your bank account as quickly as the next business day. 
                Every inquiry received is handled with care and speed.
              </p>
              {/* Responsive border */}
                <div className="absolute hidden xl:block right-0 top-8 bottom-8 w-[1px] bg-white"></div>
                  {/* Horizontal border for smaller screens */}
                  <div className="absolute block xl:hidden w-[calc(100%-4rem)] h-[1px] left-8 bottom-0 bg-white"></div>
                </div>

            {/* Third card */}
            <div className="bg-[#347222] p-3 md:p-8 h-full">
              <div className="">
                <Image className="md:mb-6 mb-2 mx-auto"
                  src={loanimage3}
                  alt="Loan 2nd Image"
                />
              </div>
              <h3 className="text-xl font-semibold md:mb-4 mb-1">Your Loan, Your Business</h3>
              <p className="text-base ">
                We recognize a personal loan is a private matter. Reasons for needing money range 
                from critical automobile maintenance, unexpected medical expenses, etc. Whatever 
                your reason, we respect your privacy. Thus, we work with lenders familiar with 
                your situation and are ready to help.
              </p>
            </div>
          </div>
        </div>

        <button className="mt-8 bg-white text-green-700 px-20 py-4 rounded-lg shadow-md hover:bg-[#2d85cc] hover:text-white text-md font-bold">
          GET STARTED
        </button>
      </div>
    </div>
  );
};

export default SecureForm;