// components/LenderWaiting.tsx
import React from 'react';
import Lenderwaiting from "../assets/images/LenderWaitingImage.svg";

const LenderWaiting: React.FC = () => {
    return (
    <div className="bg-gradient-to-b from-[#0D924B] to-[#347222] text-white md:py-12 py-4">
        <div className="mx-auto text-center">
          <div className="mb-8">
            <img
              src={Lenderwaiting}
              alt="Illustration"
              className="mx-auto w-[120px] h-[120px]"
            />
          </div>
          <h2 className="text-[4.5rem] font-bold mb-1">YOUR LENDER</h2>
          <h3 className="text-[2.5rem] font-semibold mb-8">Already Waiting</h3>
          <div className="flex justify-center mb-8 gap-6">
            <div className="px-6">
              <p className="text-[1.75rem]">Terms vary by lender</p>
            </div>
            <div className="px-6">
              <p className="text-[1.75rem]">Loan options available</p>
            </div>
            <div className="px-6">
              <p className="text-[1.75rem]">Fast application process</p>
            </div>
          </div>
          <p className="text-zinc-300 mb-6 text-sm font-bold">JUST COMPLETE QUICK FORM TO PICK ONE OF THE BEST</p>
          <button className="bg-white text-green-700 px-12 py-4 rounded-lg shadow-md hover:bg-green-100 text-[1.5rem]">
            CHECK ELIGIBILITY
          </button>
        </div>
      </div>
    );
  };

export default LenderWaiting;