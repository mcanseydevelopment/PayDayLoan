import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const loanAmounts = [
  { value: "100", label: "$100" },
  { value: "200", label: "$200" },
  { value: "300", label: "$300" },
  { value: "500", label: "$500" },
  { value: "800", label: "$800" },
  { value: "1000", label: "$1,000" },
  { value: "1500", label: "$1,500" },
  { value: "2000", label: "$2,000" },
  { value: "2500", label: "$2,500" },
];

const QuickLoanForm: React.FC = () => {
  const [loanAmount, setLoanAmount] = useState<string>("500");
  const [email, setEmail] = useState<string>("");
  const [emailError, setEmailError] = useState<string>("");
  const navigate = useNavigate();

  const validateEmail = (email: string) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateEmail(email)) {
      setEmailError("Please enter a valid email address");
      return;
    }
    
    // Store the form data in sessionStorage
    const formData = {
      loanAmount,
      email
    };
    sessionStorage.setItem("quickFormData", JSON.stringify(formData));
    
    // Redirect to home page
    navigate('/');
  };

  return (
    <div className="quick-loan-form fixed right-0 top-1/3 transform -translate-y-1/4 z-40">
      <div className="bg-white rounded-l-lg shadow-xl overflow-hidden w-72 border-l-4 border-blue-600">
        <div className="bg-gradient-to-r from-blue-600 to-blue-800 p-4 text-white">
          <h3 className="text-lg font-bold">Check Your Eligibility</h3>
          <p className="text-sm text-blue-100">See if you qualify for loan options</p>
        </div>
        
        <form onSubmit={handleSubmit} className="p-4">
          <div className="mb-4">
            <label htmlFor="loanAmount" className="block text-sm font-medium text-gray-700 mb-1">
              How much do you need?
            </label>
            <select
              id="loanAmount"
              value={loanAmount}
              onChange={(e) => setLoanAmount(e.target.value)}
              className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            >
              {loanAmounts.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>
          
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              Your Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                if (emailError) setEmailError("");
              }}
              className={`block w-full px-3 py-2 border ${emailError ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500`}
              placeholder="email@example.com"
            />
            {emailError && <p className="mt-1 text-sm text-red-600">{emailError}</p>}
          </div>
          
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md flex items-center justify-center transition-colors"
          >
            <span>See Loan Options</span>
            <ArrowRight className="ml-2 h-4 w-4" />
          </button>
          
          <p className="mt-2 text-xs text-gray-500 text-center">
            Secure request, no obligation to accept offers
          </p>
        </form>
        
        <div className="bg-blue-50 p-3 text-center">
          <div className="flex items-center justify-center text-gray-600 text-sm">
            <svg className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
            SSL Encrypted & Secure
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuickLoanForm;