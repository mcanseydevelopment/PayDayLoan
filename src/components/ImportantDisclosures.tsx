import React from "react";

const ImportantDisclosures: React.FC = () => {
  return (
    <div className="bg-gray-100 py-10">
      <div className="max-w-7xl mx-auto mb-12">
        <h2 className="text-white text-xl font-semibold bg-blue-600 py-4 px-6 rounded-t-lg">
          Important Disclosures. Please Read Carefully.
        </h2>
        <div className="bg-white p-6 rounded-b-lg shadow-md">
          <p className="font-semibold">
            Persons facing serious financial difficulties should consider other
            alternatives or should seek out professional financial advice.
          </p>
          <p className="mt-4 text-gray-700">
            This website uses Site Visit Recordation Technology to memorialize
            site visits, including technology provided by third parties like
            Jornaya&apos;s LeadiD. By submitting your information through this
            website, you consent to the use of Site Visit Recordation
            Technology. The owner of this website is not a lender or agent of
            any lender and does not take loan applications or otherwise engage
            in lender-related activity (including without limitation making
            credit decisions or arranging, brokering, originating, servicing,
            underwriting, funding, or collecting payments for any lender).
            Submitting your information via this website is a request to be
            connected with one or more financial service providers that may be
            able to help you with your financial needs, each being responsible
            for taking a credit application, verifying your information, and
            making their own credit decisions.
          </p>
          
          <h3 className="mt-6 mb-2 font-semibold text-lg">Legal Disclosures</h3>
          
          {/* FCRA Disclosure */}
          <div className="mt-4 bg-gray-50 p-4 rounded-lg">
            <h4 className="font-semibold mb-2">Fair Credit Reporting Act (FCRA) Disclosure</h4>
            <p className="text-gray-700 text-sm">
              PlansLoan.com complies with the Fair Credit Reporting Act. Lenders may conduct credit checks with credit reporting bureaus or obtain consumer reports through alternative providers. By using our service, you authorize lenders to verify your information and check your credit as necessary.
            </p>
          </div>
          
          {/* TCPA Disclosure */}
          <div className="mt-4 bg-gray-50 p-4 rounded-lg">
            <h4 className="font-semibold mb-2">Telephone Consumer Protection Act (TCPA) Disclosure</h4>
            <p className="text-gray-700 text-sm">
              By submitting your information, you provide express written consent under the Telephone Consumer Protection Act for PlansLoan.com and our marketing partners to contact you via automated calls, text messages, or emails using the information provided. Message and data rates may apply. Consent is not a condition of purchase or service.
            </p>
          </div>
          
          {/* E-Consent Disclosure */}
          <div className="mt-4 bg-gray-50 p-4 rounded-lg">
            <h4 className="font-semibold mb-2">Electronic Communications (E-Consent) Disclosure</h4>
            <p className="text-gray-700 text-sm">
              By using this website, you consent to receive communications electronically, including but not limited to agreements, disclosures, notices, and other information. To access these electronic communications, you need a device with internet access, a compatible web browser, and software capable of viewing PDF files. You have the right to withdraw consent to electronic communications by contacting us.
            </p>
          </div>
          
          {/* ECOA/Nondiscrimination Statement */}
          <div className="mt-4 bg-gray-50 p-4 rounded-lg">
            <h4 className="font-semibold mb-2">Equal Credit Opportunity Act (ECOA) Disclosure</h4>
            <p className="text-gray-700 text-sm">
              The Federal Equal Credit Opportunity Act prohibits creditors from discriminating against credit applicants on the basis of race, color, religion, national origin, sex, marital status, age (provided the applicant has the capacity to enter into a binding contract); because all or part of the applicant&apos;s income derives from any public assistance program; or because the applicant has in good faith exercised any right under the Consumer Credit Protection Act.
            </p>
          </div>
          
          {/* MLA Language */}
          <div className="mt-4 bg-gray-50 p-4 rounded-lg">
            <h4 className="font-semibold mb-2">Military Lending Act (MLA) Disclosure</h4>
            <p className="text-gray-700 text-sm">
              Federal law provides important protections to active duty members of the Armed Forces and their dependents relating to extensions of consumer credit. In general, the cost of consumer credit to a member of the Armed Forces and their dependents may not exceed an annual percentage rate of 36 percent. This rate includes costs associated with the loan, including credit insurance premiums, ancillary products, and application fees. Certain loan terms and conditions may not apply to members of the Armed Forces and their dependents.
            </p>
          </div>
          
          {/* Expensive Borrowing Disclosure */}
          <div className="mt-4 bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
            <h4 className="font-semibold mb-2">Expensive Borrowing Disclosure</h4>
            <p className="text-gray-700 text-sm">
              This is an expensive form of borrowing and is not intended as a long-term financial solution. Short-term loans should only be used for short-term financial needs. APRs for payday loans or short-term loans range from 99% to 400% or higher, depending on the lender. Failure to repay on time may result in additional fees or collection activities. We encourage borrowers to use these products responsibly.
            </p>
          </div>
          
          {/* Representative Example */}
          <div className="mt-4 bg-blue-50 p-4 rounded-lg">
            <h4 className="font-semibold mb-2">Representative Loan Example</h4>
            <p className="text-gray-700 text-sm">
              A typical payday loan of $500 with a 14-day term and an APR of 250% would have a single repayment of $635, including all fees and interest. Loan terms may range from 2 weeks to 24 months depending on the lender and product.
            </p>
          </div>
          
          {/* State Restrictions and Licensing */}
          <div className="mt-4 bg-gray-50 p-4 rounded-lg">
            <h4 className="font-semibold mb-2">State Restrictions and Licensing</h4>
            <p className="text-gray-700 text-sm">
              Loan availability and terms are subject to state regulations. Not all applicants will qualify for all products in all states. Some lenders may be licensed under tribal law and may not be subject to state lending laws. Make sure to review your loan agreement carefully before signing.
            </p>
          </div>

          {/* Data Security */}
          <div className="mt-4 bg-gray-50 p-4 rounded-lg">
            <h4 className="font-semibold mb-2">Data Security</h4>
            <p className="text-gray-700 text-sm">
              We take your privacy and security seriously. All data submitted on this site is encrypted using industry-standard SSL protocols. We maintain appropriate safeguards to protect personal information.
            </p>
          </div>
          
          <p className="mt-6 italic text-sm text-gray-500">
            This website is not a lender. We connect users with independent, licensed lenders or lending partners who may offer credit options. Submitting your information through this site does not guarantee loan approval.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ImportantDisclosures;
