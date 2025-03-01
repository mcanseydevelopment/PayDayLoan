import React from "react";
import girlwithcurlyhair from "../assets/images/our-help--desktop.jpg";

const LoanComponent: React.FC = () => {
  return (
    <div className="max-w-6xl mx-auto py-28">
      {/* Features section */}
      <div className="bg-gray-100 rounded-xl mb-8">
        <div className="grid grid-cols-1 md:grid-cols-3">
          <div className="flex items-center justify-center p-8 border-b md:border-b-0 md:border-r border-gray-200">
            <div className="bg-green-600 rounded-full p-2 mr-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-white"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z" />
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <span className="text-gray-800 font-medium text-lg">$500 - $5,000</span>
          </div>

          <div className="flex items-center justify-center p-6 border-b md:border-b-0 md:border-r border-gray-200">
            <div className="bg-green-600 rounded-full p-2 mr-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-white"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <span className="text-gray-800 font-medium text-lg">As Fast As 24 Hrs</span>
          </div>

          <div className="flex items-center justify-center p-6">
            <div className="bg-green-600 rounded-full p-2 mr-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-white"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <span className="text-gray-800 font-medium text-lg">Safe & Secure</span>
          </div>
        </div>
      </div>

      {/* Main content section */}
      <div className="relative">
        <div className="flex flex-col lg:flex-row lg:gap-16 items-center">
          {/* Image section with custom sizing */}
          <div className="relative w-[280px] md:w-[320px] lg:w-[380px] mx-auto lg:mx-0 mb-8 lg:mb-0">
            {/* Green shadow div with responsive sizing */}
            <div className="absolute top-4 left-4 md:top-6 md:left-6 w-[102%] h-[102%] bg-green-600 rounded-2xl"></div>
            
            {/* Image container with fixed heights */}
            <div className="relative bg-green-100 rounded-2xl overflow-hidden h-[320px] md:h-[400px] lg:h-[480px]">
              <img
                src={girlwithcurlyhair}
                alt="Woman with curly hair"
                className="object-cover w-full h-full"
              />
            </div>
          </div>

          {/* Content section - adjusted spacing */}
          <div className="w-full lg:w-1/2 p-4 md:p-6 lg:p-8">
            <h2 className="text-4xl font-bold text-gray-800 mb-2">How Can We Help Your Finances?</h2>

            <div className="mb-6">
              <div className="h-1 w-16 bg-green-600 mb-2"></div>
              <p className="text-sm font-semibold tracking-wider text-gray-700">
                GET A LOAN TODAY FOR A BETTER TOMORROW
              </p>
            </div>

            <div className="mb-6">
              <h3 className="text-xl font-semibold text-gray-700 mb-2">Short term loan</h3>
              <p className="text-gray-600 mb-4">
                They might be called different things, but they&apos;re all designed to provide you with temporary financial
                relief.
              </p>
            </div>

            <div className="mb-8">
              <h3 className="text-xl font-semibold text-gray-700 mb-2">Simply receive the loan money</h3>
              <p className="text-gray-600">
                Your loan will be deposited directly in your bank account, usually as soon as the next day.
              </p>
            </div>

            <button className="bg-green-700 hover:bg-green-800 text-white font-bold py-3 px-8 rounded">
              GET STARTED
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoanComponent;

