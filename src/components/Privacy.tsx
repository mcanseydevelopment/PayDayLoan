import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Shield, Lock, Bell, User, Database, ExternalLink } from 'lucide-react';

const Privacy: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Privacy Policy - PlansLoan</title>
        <meta name="description" content="PlansLoan's privacy policy regarding the collection, use, disclosure, and protection of your personal information." />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
        {/* Header Banner */}
        <div className="bg-gradient-to-r from-blue-800 to-blue-600 text-white py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 flex items-center">
              <Lock className="mr-4" size={36} />
              Privacy Policy
            </h1>
            <p className="text-blue-100 text-lg max-w-3xl">
              How we collect, use, disclose, and protect your personal information
            </p>
            <p className="mt-6 text-sm bg-blue-900 bg-opacity-30 inline-block py-1 px-3 rounded">
              Last Updated: March 4, 2025
            </p>
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
          {/* Introduction */}
          <div className="bg-white rounded-xl shadow-sm p-8 border-l-4 border-blue-500 mb-10">
            <p className="text-gray-700 leading-relaxed">
              The purpose of the PlansLoan Privacy Policy is to provide you with a comprehensive description of PlansLoan's online and offline 
              practices regarding the collection, use, disclosure, and sale of personal information and of the rights of consumers 
              regarding their personal information.
            </p>
          </div>

          {/* Collection of Personal Information */}
          <section className="bg-white rounded-xl shadow-sm p-8 mb-10">
            <div className="flex items-center mb-6">
              <Database className="text-blue-600 mr-3" size={24} />
              <h2 className="text-2xl font-semibold text-gray-900">Collection of Personal Information</h2>
            </div>
            <p className="text-gray-700 mb-6">
              We collect the following personal information about consumers:
            </p>
            
            {/* Table for Collection */}
            <div className="overflow-x-auto">
              <table className="min-w-full bg-white border-collapse">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="py-4 px-6 text-left text-sm font-semibold text-gray-700 border-b border-gray-200">Category</th>
                    <th className="py-4 px-6 text-left text-sm font-semibold text-gray-700 border-b border-gray-200">Categories of sources from which the information was collected</th>
                    <th className="py-4 px-6 text-left text-sm font-semibold text-gray-700 border-b border-gray-200">The business or commercial purpose for which the information was collected</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr>
                    <td className="py-4 px-6 text-sm text-gray-700">
                      Identifiers such as a real name, postal address, unique personal identifier, online identifier, Internet Protocol address, email address, social security number, and driver's license number.
                    </td>
                    <td className="py-4 px-6 text-sm text-gray-700">Consumers directly</td>
                    <td className="py-4 px-6 text-sm text-gray-700">To connect consumers with a lender and offer other services they may be interested in.</td>
                  </tr>
                  <tr>
                    <td className="py-4 px-6 text-sm text-gray-700">
                      Categories of personal information* such as name, social security number, address, telephone number, driver's license or state identification card number, employment, bank account number, and other financial information.
                    </td>
                    <td className="py-4 px-6 text-sm text-gray-700">Consumers directly</td>
                    <td className="py-4 px-6 text-sm text-gray-700">To connect consumers with a lender and offer other services they may be interested in.</td>
                  </tr>
                  <tr>
                    <td className="py-4 px-6 text-sm text-gray-700">
                      Characteristics of protected classifications under federal law and applicable state law, such as age.
                    </td>
                    <td className="py-4 px-6 text-sm text-gray-700">Consumers directly</td>
                    <td className="py-4 px-6 text-sm text-gray-700">To connect consumers with a lender and offer other services they may be interested in.</td>
                  </tr>
                  <tr>
                    <td className="py-4 px-6 text-sm text-gray-700">
                      Geolocation data such as your approximate location.
                    </td>
                    <td className="py-4 px-6 text-sm text-gray-700">Data analytics providers</td>
                    <td className="py-4 px-6 text-sm text-gray-700">To connect consumers with a lender and offer other services they may be interested in.</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-xs text-gray-500 mt-4">*as described in subdivision (e) of California Civil Code Section 1798.80</p>
          </section>

          {/* Disclosure or Sale of Personal Information */}
          <section className="bg-white rounded-xl shadow-sm p-8 mb-10">
            <div className="flex items-center mb-6">
              <ExternalLink className="text-blue-600 mr-3" size={24} />
              <h2 className="text-2xl font-semibold text-gray-900">Disclosure or Sale of Personal Information</h2>
            </div>
            <p className="text-gray-700 mb-6">
              We disclose or sell the following categories of personal information to third parties for a business or commercial purpose:
            </p>
            
            {/* Table for Disclosure */}
            <div className="overflow-x-auto">
              <table className="min-w-full bg-white border-collapse">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="py-4 px-6 text-left text-sm font-semibold text-gray-700 border-b border-gray-200">Category</th>
                    <th className="py-4 px-6 text-left text-sm font-semibold text-gray-700 border-b border-gray-200">The categories of third parties to whom the information was disclosed or sold</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr>
                    <td className="py-4 px-6 text-sm text-gray-700">
                      Identifiers such as a real name, postal address, unique personal identifier, online identifier, Internet Protocol address, email address, social security number, and driver's license number.
                    </td>
                    <td className="py-4 px-6 text-sm text-gray-700">Lenders, lender-networks, and other marketing partners.</td>
                  </tr>
                  <tr>
                    <td className="py-4 px-6 text-sm text-gray-700">
                      Categories of personal information* such as name, social security number, address, telephone number, driver's license or state identification card number, employment, bank account number, and other financial information.
                    </td>
                    <td className="py-4 px-6 text-sm text-gray-700">Lenders, lender-networks, and other marketing partners.</td>
                  </tr>
                  <tr>
                    <td className="py-4 px-6 text-sm text-gray-700">
                      Characteristics of protected classifications under California or federal law such as age.
                    </td>
                    <td className="py-4 px-6 text-sm text-gray-700">Lenders, lender-networks, and other marketing partners.</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-xs text-gray-500 mt-4">*as described in subdivision (e) of California Civil Code Section 1798.80</p>
            
            <div className="mt-6 space-y-4 text-gray-700">
              <p>
                We do not collect or sell the personal information of minors we know to be under 16 years of age without affirmative authorization.
              </p>
              <p>
                Your email could be shared with one of our preferred mailing partners and other brands believed to be of interest to you for the purpose of sending third party promotional email communication. You may unsubscribe from any such emails at any time.
              </p>
            </div>
          </section>

          {/* Security Section */}
          <section className="bg-white rounded-xl shadow-sm p-8 mb-10">
            <div className="flex items-center mb-6">
              <Shield className="text-blue-600 mr-3" size={24} />
              <h2 className="text-2xl font-semibold text-gray-900">Security</h2>
            </div>
            <p className="text-gray-700">
              To protect your personal information from unauthorized access and use, we use security measures that comply with federal law. These measures include computer safeguards and secured files and buildings. Wherever we collect sensitive information, that information is encrypted and transmitted to us in a secure way.
            </p>
          </section>

          {/* Cookies Section */}
          <section className="bg-white rounded-xl shadow-sm p-8 mb-10">
            <div className="flex items-center mb-6">
              <Bell className="text-blue-600 mr-3" size={24} />
              <h2 className="text-2xl font-semibold text-gray-900">Cookies</h2>
            </div>
            <p className="text-gray-700">
              We use "cookies" on this site. A cookie is a piece of data stored on a site visitor's hard drive to help us improve your access to our site and identify repeat visitors to our site. Cookies can also enable us to track and target the interests of our users to enhance the experience on our site.
            </p>
          </section>

          {/* Contact and Limiting Sharing */}
          <section className="bg-white rounded-xl shadow-sm p-8 mb-10">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Limiting Sharing</h3>
                <p className="text-gray-700">
                  To limit our sharing, email us at <a href="mailto:support@plansloan.com" className="text-blue-600 hover:underline">support@plansloan.com</a>.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Contact For More Information</h3>
                <p className="text-gray-700">
                  <a href="mailto:support@plansloan.com" className="text-blue-600 hover:underline">support@plansloan.com</a>
                </p>
              </div>
            </div>
          </section>

          {/* California Consumer Rights */}
          <section className="bg-white rounded-xl shadow-sm p-8 mb-10 border-l-4 border-blue-500">
            <div className="flex items-center mb-6">
              <User className="text-blue-600 mr-3" size={24} />
              <h2 className="text-2xl font-semibold text-gray-900">For California Consumers</h2>
            </div>
            <p className="text-gray-700 mb-6">
              If you are a California consumer as defined by the California Consumer Protection Act ("CCPA") you have the following rights:
            </p>
            
            <div className="space-y-8">
              {/* Right to Know */}
              <div>
                <h3 className="text-xl font-medium text-gray-800 mb-3">1. Right to Know About Personal Information Collected, Disclosed, or Sold</h3>
                <div className="pl-6 text-gray-700 space-y-3">
                  <p>
                    You have the right to request that PlansLoan disclose the personal information we collect, use, disclose, and sell by sending a request to <a href="mailto:support@plansloan.com" className="text-blue-600 hover:underline">support@plansloan.com</a> or by clicking <a href="#" className="text-blue-600 hover:underline">here</a>. For categories of information collected or disclosed, please refer to the information provided above, which reflects the categories of information collected or disclosed in the last 12 months.
                  </p>
                  <p>
                    In order to verify your request for information, you must provide your name, email, and phone number. A verification link will be sent to your email address. It will direct you to a verification page where you must provide your name, email address, date of birth, driver's license number or state ID number, and Social Security number. We will match the personal information provided by you with personal information maintained by PlansLoan. You will also have to submit a signed declaration under penalty of perjury that you are the consumer whose personal information is the subject of the request. Once your identity is verified, your request will be processed in a timely manner.
                  </p>
                </div>
              </div>
              
              {/* Right to Delete */}
              <div>
                <h3 className="text-xl font-medium text-gray-800 mb-3">2. Right to Request Deletion of Personal Information</h3>
                <div className="pl-6 text-gray-700 space-y-3">
                  <p>
                    You have the right to request deletion of your personal information collected or maintained by sending a request to <a href="mailto:support@plansloan.com" className="text-blue-600 hover:underline">support@plansloan.com</a> or by clicking <a href="#" className="text-blue-600 hover:underline">here</a>.
                  </p>
                  <p>
                    In order to verify your request for deletion, you must provide your name, email, and phone number. A verification link will be sent to your email address. It will direct you to a verification page where you must provide your name, email address, date of birth, driver's license number or state ID number, and Social Security number. We will match the personal information provided by you with personal information maintained by PlansLoan. You will also have to submit a signed declaration under penalty of perjury that you are the consumer whose personal information is the subject of the request. Once your identity is verified, your request will be processed in a timely manner.
                  </p>
                </div>
              </div>
              
              {/* Right to Opt-Out */}
              <div>
                <h3 className="text-xl font-medium text-gray-800 mb-3">3. Right to Opt-Out of the Sale of Personal Information</h3>
                <div className="pl-6 text-gray-700 space-y-3">
                  <p>
                    You have the right to opt-out of the sale of your personal information.
                  </p>
                  <p>
                    You can direct PlansLoan to stop selling your personal information, and to refrain from doing so in the future, by clicking <a href="#" className="text-blue-600 hover:underline">here</a> or sending a request to <a href="mailto:support@plansloan.com" className="text-blue-600 hover:underline">support@plansloan.com</a>.
                  </p>
                  <p>
                    If you are an Authorized Agent acting on behalf of a consumer to exercise their right to opt-out, send an email request to <a href="mailto:support@plansloan.com" className="text-blue-600 hover:underline">support@plansloan.com</a>. You will be required to submit documentation as proof of the agency relationship.
                  </p>
                </div>
              </div>
              
              {/* Right to Non-Discrimination */}
              <div>
                <h3 className="text-xl font-medium text-gray-800 mb-3">4. Right to Non-Discrimination for the Exercise of a Consumer's Privacy Rights</h3>
                <div className="pl-6 text-gray-700 space-y-3">
                  <p>
                    You have the right to receive nondiscriminatory treatment by us for the exercise of your privacy rights conferred by the CCPA.
                  </p>
                  <p>
                    Unless permitted by the CCPA, PlansLoan will not:
                  </p>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Deny you goods or services</li>
                    <li>Charge different prices or rates for goods or services, including through the use of discounts or other benefits or imposing penalties.</li>
                    <li>Provide you a different level or quality or services if you exercise your rights under the CCPA.</li>
                    <li>Suggest that you will receive a different price or rate for goods or services or a different level of quality of goods or services.</li>
                  </ul>
                </div>
              </div>
              
              {/* Authorized Agent */}
              <div>
                <h3 className="text-xl font-medium text-gray-800 mb-3">5. Authorized Agent Requests on Behalf of a Consumer</h3>
                <div className="pl-6 text-gray-700">
                  <p>
                    You have the right to designate an authorized agent to make a request under the CCPA on your behalf. To make a request on behalf of a consumer as an authorized agent, please send an email request to <a href="mailto:support@plansloan.com" className="text-blue-600 hover:underline">support@plansloan.com</a>. You will be required to provide documentation that proves the agency relationship.
                  </p>
                </div>
              </div>
            </div>
          </section>

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
        </div>
      </div>
    </>
  );
};

export default Privacy;