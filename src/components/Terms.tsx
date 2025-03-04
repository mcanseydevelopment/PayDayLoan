import React, { useRef } from 'react';
import { Helmet } from 'react-helmet-async';
import { FileText, Shield, Copy } from 'lucide-react';

const Terms: React.FC = () => {
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);

  // Function to scroll to section
  const scrollToSection = (index: number) => {
    if (sectionRefs.current[index]) {
      sectionRefs.current[index]?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const sections = [
    {
      title: "Introduction",
      content: `PlansLoan.com owns and operates the website located at PlansLoan.com (the "Site"). 
      PlansLoan.com provides and maintains this Site for your information, conditioned on your acceptance, 
      without modification, of the terms, conditions and notices contained in these Terms of Use and in our Privacy Policy.`
    },
    {
      title: "Products and Services",
      content: `PlansLoan.com is not a lender or lending partner and is not responsible for any lending product advertised 
      or offered to you, or for any credit decisions made about you. No specific loan products are offered to you 
      on this Site by PlansLoan.com. Specific loan products are offered to you directly by the lender or lending partner.`
    },
    {
      title: "E-Sign Consent",
      content: `You agree that clicking “Get Started” (or other such button you use to submit your form) acts as your electronic signature. 
      You further consent that we and any lender or lending partner we share your request with can communicate with you electronically 
      and that any required disclosures may be provided to you electronically, including without limitation any notices of adverse action 
      that a lender or lending partner is required to send to you.`
    },
    {
      title: "SMS Terms and Conditions",
      content: `By clicking “Submit”, I agree to receive informational, promotional or marketing related SMS messages from PlansLoan.com 
      and marketing partners. This is a standard rate subscription service available on most carriers including U.S. Cellular, AT&T, Cellular One, 
      T-Mobile, Sprint, Boost, MetroPCS, Verizon Wireless, Alltel Wireless, and Virgin Mobile. Msg&Data Rates May Apply.`
    },
    {
      title: "Email Opt-In",
      content: `By providing PlansLoan.com with your email address, you agree to receive transactional and promotional emails 
      from PlansLoan.com, its marketing partners, lenders and lender networks.`
    },
    {
      title: "Loan Inquiry Policy",
      content: `PlansLoan.com reserves the right to reject your inquiry at any time for any reason not prohibited by law. 
      PlansLoan.com may require additional information or verification before your form is accepted.`
    },
    {
      title: "Credit References",
      content: `Participating lenders or lending partners may verify your social security number, driver’s license number or 
      other federal or state identification, as well as review your credit worthiness through national databases that may include 
      Equifax, Transunion, Experian and other credit bureaus.`
    },
    {
      title: "Restrictions",
      content: `You must be 18 years or older and a legal resident of the United States to submit a form. You agree not to use this Site 
      for any illegal or inappropriate activities.`
    },
    {
      title: "Compliance with Laws",
      content: `You agree to comply with all applicable laws, statutes, ordinances and regulations regarding your use of this Site 
      and your acceptance or purchase of products or services through any of this Site’s third-party vendors. PlansLoan.com may, 
      in its sole discretion, report actual or perceived violations of law to law enforcement or other authorities.`
    },
    {
      title: "Intellectual Property",
      content: `The trademarks, titles, characters, trade names, graphics, designs and other properties, including all software, text 
      and images appearing on this Site is the intellectual property of PlansLoan.com, its licensees, or other third parties 
      who have authorized use of such properties on the Site.`
    },
    {
      title: "Limitation of Liability and Disclaimer of Warranties",
      content: `PlansLoan.com uses commercially reasonable efforts to ensure that the information on this Site is accurate, 
      but accuracy is not guaranteed. PlansLoan.com makes no representations regarding your use of this Site or results that 
      you may or may not obtain through such use.`
    },
    {
      title: "Third Party Content",
      content: `This Site may contain links to websites maintained by third parties. PlansLoan.com is not responsible for the content 
      or privacy policies of third-party websites, and the existence of such links should not be considered an endorsement or recommendation 
      of those websites, the product or service offered or any third parties associated with those websites.`
    },
    {
      title: "Privacy",
      content: `PlansLoan.com’s Privacy Policy, which is incorporated herein by reference, is applicable to any data supplied through 
      this Site. The Privacy Policy sets out your rights and our responsibilities regarding your personal information.`
    },
    {
      title: "Security",
      content: `PlansLoan.com uses industry-recognized technology to protect your personal information. Although PlansLoan.com 
      takes commercially reasonable measures to secure your personal information submitted through this Site, PlansLoan.com cannot 
      guarantee that your information will not be intercepted or decrypted by others.`
    },
    {
      title: "Site Use",
      content: `PlansLoan.com does not charge you any fees for your use of this Site or our marketplace service. PlansLoan.com 
      is not acting as an agent for (1) you, (2) any lender or lending partner or (3) any supplier or vendor used in the evaluation of your loan inquiry or other use of this Site.`
    },
    {
      title: "Law and Venue",
      content: `PlansLoan.com is owned and operated by PlansLoan LLC, a New York limited liability company. By using this Site or engaging with PlansLoan.com in any way, you consent to the laws and jurisdiction of New York, NY.`
    },
    {
      title: "Binding Arbitration",
      content: `Should any dispute arise as to the interpretation of any term or provision of these Terms of Use or with regard to any of your dealings with PlansLoan.com or with any lender or lending partner you borrow from as a result of PlansLoan.com’s service, those issues shall be decided by binding arbitration.`
    },
    {
      title: "Indemnification",
      content: `By using this Site, you agree to indemnify, defend and hold harmless PlansLoan.com, its subsidiaries, affiliates, officers, 
      agents and other partners and employees, from any loss, liability, claim or demand, including reasonable attorneys’ fees, made by any third party due to or arising out of your use or attempted use of the Site.`
    },
    {
      title: "Violation of the Terms of Use",
      content: `By using the Site, you understand and agree that PlansLoan.com in its sole discretion and without prior notice may terminate 
      your access to this Site and to any services offered, and may remove any content you have provided if PlansLoan.com believes that 
      such content violates or is inconsistent with these Terms of Use or the Privacy Policy or their intent.`
    },
    {
      title: "Class Action Waiver",
      content: `ANY PROCEEDINGS TO RESOLVE, LITIGATE OR ARBITRATE ANY DISPUTE IN ANY FORUM WILL BE CONDUCTED SOLELY ON AN INDIVIDUAL BASIS. 
      NEITHER YOU NOR PlansLoan.com WILL SEEK TO HAVE ANY DISPUTE HEARD AS A CLASS ACTION, PRIVATE ATTORNEY GENERAL ACTION, OR IN ANY OTHER PROCEEDING IN WHICH EITHER PARTY ACTS OR PROPOSES TO ACT IN A REPRESENTATIVE CAPACITY.`
    },
    {
      title: "Miscellaneous",
      content: `Any reference to PlansLoan.com includes PlansLoan LLC. All rights not expressly granted to you are reserved to PlansLoan.com.`
    },
    {
      title: "Contact Information",
      content: `Company name: PlansLoan LLC\nAddress: 2504 Broadway, New York, NY 10025\nPhone: 1-800-555-0123\nEmail Address: support@plansloan.com`
    },
  ];

  const copyToClipboard = () => {
    const termsText = sections.map(section => `${section.title}\n\n${section.content}\n\n`).join('');
    navigator.clipboard.writeText(termsText);
    alert("Terms of Use copied to clipboard");
  };

  return (
    <>
      <Helmet>
        <title>Terms of Use - PlansLoan</title>
        <meta name="description" content="Read our terms of use and conditions for using PlansLoan's online loan services." />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
        {/* Header Banner */}
        <div className="bg-gradient-to-r from-blue-800 to-blue-600 text-white py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 flex items-center">
              <FileText className="mr-4" size={36} />
              Terms of Use
            </h1>
            <p className="text-blue-100 text-lg max-w-3xl">
              Please read these terms carefully before using our services. These terms constitute a legal agreement between you and PlansLoan.
            </p>
            <p className="mt-6 text-sm bg-blue-900 bg-opacity-30 inline-block py-1 px-3 rounded">
              Last Updated: March 4, 2025
            </p>
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
          {/* Table of Contents Card - Now Fixed at Top, Not Sticky */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-12 border-l-4 border-blue-500">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-gray-900">Table of Contents</h2>
              <button 
                onClick={copyToClipboard}
                className="flex items-center text-sm text-blue-600 hover:text-blue-800"
              >
                <Copy size={16} className="mr-1" />
                Copy Terms
              </button>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
              {sections.map((section, index) => (
                <button
                  key={index}
                  onClick={() => scrollToSection(index)}
                  className="text-left py-2 px-3 rounded-md text-sm hover:bg-blue-50 transition-colors text-gray-600"
                >
                  {index + 1}. {section.title}
                </button>
              ))}
            </div>
          </div>

          {/* Legal Notice */}
          <div className="bg-amber-50 border-l-4 border-amber-500 p-6 mb-10 rounded-r-lg">
            <div className="flex items-start">
              <Shield className="text-amber-600 mr-4 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-amber-800 mb-2">Important Notice</h3>
                <p className="text-amber-700">
                  By accessing or using PlansLoan's services, you acknowledge that you have read, 
                  understood, and agree to be bound by these Terms of Use. If you do not agree with any part of these terms, 
                  please do not use our services.
                </p>
              </div>
            </div>
          </div>

          {/* Terms Sections - All Pre-Opened */}
          <div className="space-y-8">
            {sections.map((section, index) => (
              <div
                key={index}
                ref={el => sectionRefs.current[index] = el}
                id={`section-${index + 1}`}
                className="bg-white rounded-xl shadow-sm border border-gray-100"
              >
                <div className="p-6">
                  <h2 className="text-xl font-medium text-gray-900 flex items-center mb-4">
                    <span className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center mr-4 text-sm font-bold">
                      {index + 1}
                    </span>
                    <span>{section.title}</span>
                  </h2>
                  
                  <div className="pt-4 border-t border-gray-100">
                    <p className="text-gray-600 leading-relaxed whitespace-pre-line">
                      {section.content}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Back to Top Button */}
          <div className="text-center mt-12">
            <button 
              onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}
              className="bg-blue-100 hover:bg-blue-200 text-blue-800 px-6 py-3 rounded-full inline-flex items-center transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2"><path d="m18 15-6-6-6 6"/></svg>
              Back to Top
            </button>
          </div>

          {/* Footer */}
          <footer className="mt-16 pt-8 border-t border-gray-200 text-center">
            <p className="text-sm text-gray-500">
              © {new Date().getFullYear()} PlansLoan LLC. All rights reserved. NMLS ID# 12345
            </p>
            <div className="mt-4 flex justify-center space-x-4 text-sm text-gray-500">
              <a href="/about" className="hover:text-blue-600">About Us</a>
              <span>•</span>
              <a href="/privacyPolicy" className="hover:text-blue-600">Privacy Policy</a>
              <span>•</span>
              <a href="/contact" className="hover:text-blue-600">Contact Support</a>
            </div>
          </footer>
        </div>
      </div>
    </>
  );
};

export default Terms;
