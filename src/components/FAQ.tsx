import React from 'react';

const FAQ: React.FC = () => {
  const faqs = [
    {
      question: 'How Much Can I Borrow?',
      answer: 'The amount a lender or lending partner is willing to give you depends on how the lender or lending partner evaluates a number of factors, including your creditworthiness. Also, please be aware of applicable legal restrictions (loans are not available in all states). Many lenders or lending partners in our network will loan between $100 and $5,000.',
    },
    {
      question: 'How Is My Private Information Protected?',
      answer: 'We use industry-recognized security and advanced encryption technology to protect your personal information. Your information is transmitted and stored securely in an encrypted format. Please review our privacy policy for additional details.',
    },
    {
      question: 'How Long Does the Process Take?',
      answer: 'It should only take a few minutes to complete our secure online form. After we receive your information, we immediately start looking for a lender or lending partner that is willing to work with you. You should have a response from one of our lenders or lending partners within minutes. Final approval and funding is often done in as little as 24 to 48 hours.',
    },
  ];

  return (
    <div className="bg-gray-100 py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-green-700 mb-8">
          Frequently Asked Questions
        </h2>
        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-2 text-green-700">
                {index + 1}. {faq.question}
              </h3>
              <p className="text-gray-700">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;
