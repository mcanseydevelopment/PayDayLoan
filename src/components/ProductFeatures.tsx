import type React from "react"
import Link from "next/link"

const ProductFeatures: React.FC = () => {
  return (
    <section className="bg-[#1a1a1a] text-white py-16 px-4 md:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-16">Why our product are different</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Feature 1 */}
          <div className="relative px-6 py-8">
            {/* Right border */}
            <div className="absolute top-0 right-0 h-full border-r border-dashed border-gray-600 md:block hidden"></div>
            {/* Icon */}
            <div className="bg-white/10 w-14 h-14 rounded-lg flex items-center justify-center mb-6">
              <div className="bg-[#ff6b6b] w-8 h-8 rounded-md grid grid-cols-2 gap-1 p-1.5">
                <div className="bg-white rounded-sm"></div>
                <div className="bg-white rounded-sm"></div>
                <div className="bg-white rounded-sm"></div>
                <div className="bg-white rounded-sm"></div>
              </div>
            </div>
            {/* Content */}
            <h2 className="text-2xl font-semibold mb-4">Solve Problems Real Time</h2>
            <p className="text-gray-300 mb-6">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
            </p>
            {/* Learn More Link */}
            <Link href="#" className="inline-flex items-center text-white hover:text-gray-300 transition-colors">
              Learn More
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 ml-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
          </div>
          {/* Feature 2 */}
          <div className="relative px-6 py-8">
            {/* Right border */}
            <div className="absolute top-0 right-0 h-full border-r border-dashed border-gray-600 md:block hidden"></div>

            {/* Icon */}
            <div className="bg-white/10 w-14 h-14 rounded-lg flex items-center justify-center mb-6">
              <div className="bg-[#d66bff] w-8 h-8 rounded-md p-1.5">
                <div className="bg-white w-full h-full rounded-sm relative">
                  <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-1.5 h-3 bg-[#d66bff] rounded-l-sm"></div>
                </div>
              </div>
            </div>
            {/* Content */}
            <h2 className="text-2xl font-semibold mb-4">Solve Problems Real Time</h2>
            <p className="text-gray-300 mb-6">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
            </p>
            {/* Learn More Link */}
            <Link href="#" className="inline-flex items-center text-white hover:text-gray-300 transition-colors">
              Learn More
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 ml-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
          </div>
          {/* Feature 3 */}
          <div className="px-6 py-8">
            {/* Icon */}
            <div className="bg-white/10 w-14 h-14 rounded-lg flex items-center justify-center mb-6">
              <div className="bg-[#4ecdc4] w-8 h-8 rounded-md p-1.5">
                <div className="border-2 border-white w-full h-full rounded-sm relative">
                  <div className="absolute right-0 bottom-0 w-2 h-2 bg-white transform translate-x-1/4 translate-y-1/4 rotate-45"></div>
                </div>
              </div>
            </div>
            {/* Content */}
            <h2 className="text-2xl font-semibold mb-4">Solve Problems Real Time</h2>
            <p className="text-gray-300 mb-6">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
            </p>
            {/* Learn More Link */}
            <Link href="#" className="inline-flex items-center text-white hover:text-gray-300 transition-colors">
              Learn More
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 ml-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProductFeatures

