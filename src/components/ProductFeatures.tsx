import type React from "react"

const ProductFeatures: React.FC = () => {
  return (
    <section className="bg-[#1a1a1a] text-white py-16 px-4 md:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl md:text-5xl px-6 font-bold mb-16">Why Choose PlansLoan</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Feature 1 */}
          <div className="relative px-6 py-8">
            {/* Right border */}
            <div className="absolute top-0 right-0 h-full border-r border-dashed border-gray-600 md:block hidden"></div>
            {/* Icon - keeping existing icon structure */}
            <div className="bg-white/10 w-14 h-14 rounded-lg flex items-center justify-center mb-6">
              <div className="bg-[#ff6b6b] w-8 h-8 rounded-md grid grid-cols-2 gap-1 p-1.5">
                <div className="bg-white rounded-sm"></div>
                <div className="bg-white rounded-sm"></div>
                <div className="bg-white rounded-sm"></div>
                <div className="bg-white rounded-sm"></div>
              </div>
            </div>
            {/* Content */}
            <h2 className="text-2xl font-semibold mb-4">Quick Approval Process</h2>
            <p className="text-gray-300 mb-6">
              Get approved in minutes, not days. Our streamlined process means you can receive funds as fast as the next business day after approval.
            </p>
            {/* Learn More Link - keeping existing structure */}
          </div>

          {/* Feature 2 */}
          <div className="relative px-6 py-8">
            {/* Right border */}
            <div className="absolute top-0 right-0 h-full border-r border-dashed border-gray-600 md:block hidden"></div>
            {/* Icon - keeping existing icon structure */}
            <div className="bg-white/10 w-14 h-14 rounded-lg flex items-center justify-center mb-6">
              <div className="bg-[#d66bff] w-8 h-8 rounded-md p-1.5">
                <div className="bg-white w-full h-full rounded-sm relative">
                  <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-1.5 h-3 bg-[#d66bff] rounded-l-sm"></div>
                </div>
              </div>
            </div>
            {/* Content */}
            <h2 className="text-2xl font-semibold mb-4">Secure & Confidential</h2>
            <p className="text-gray-300 mb-6">
              Your privacy matters. We use bank-level encryption to protect your personal information and ensure secure transactions.
            </p>
            {/* Learn More Link - keeping existing structure */}
          </div>

          {/* Feature 3 */}
          <div className="px-6 py-8">
            {/* Icon - keeping existing icon structure */}
            <div className="bg-white/10 w-14 h-14 rounded-lg flex items-center justify-center mb-6">
              <div className="bg-[#4ecdc4] w-8 h-8 rounded-md p-1.5">
                <div className="border-2 border-white w-full h-full rounded-sm relative">
                  <div className="absolute right-0 bottom-0 w-2 h-2 bg-white transform translate-x-1/4 translate-y-1/4 rotate-45"></div>
                </div>
              </div>
            </div>
            {/* Content */}
            <h2 className="text-2xl font-semibold mb-4">Flexible Terms</h2>
            <p className="text-gray-300 mb-6">
              Choose from various repayment options that fit your budget. Our transparent terms ensure you know exactly what to expect.
            </p>
            {/* Learn More Link - keeping existing structure */}
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProductFeatures

