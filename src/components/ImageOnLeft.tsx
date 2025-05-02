import smilingman from "../assets/images/smiling-man.svg"
export default function ImageOnLeft() {
  return (
    <div className="bg-[#F6FAFF] mt-12">
      <div className="max-w-7xl xl:mx-auto md:py-20 py-4 lg:mx-10 sm:mx-3 px-4 mt-4 md:mt-0 mx-auto rounded-lg overflow-hidden flex flex-col xl:flex-row">
        {/* Left side - Image - No changes */}
        <div className="w-full xl:w-1/2 relative xl:h-auto h-[400px] rounded-xl">
          <div className="relative w-full h-full flex items-center justify-center">
          <img
              src={smilingman}
              alt="Person explaining loan services"
              className="object-contain w-[400px] lg:w-[450px] xl:w-[600px]"
            />
          </div>
        </div>

        {/* Right side - Content - Updated terminology */}
        <div className="w-full xl:w-1/2 md:p-0 p-1 xl:p-12 flex flex-col justify-center md:mt-8 mt-1 xl:mt-0">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 leading-tight">
            Request a Loan Today for
            <br />a Better Tomorrow
            </h1>

            <div className="space-y-8">
            {/* Feature 1 */}
            <div className="space-y-2">
                <h2 className="text-xl font-semibold flex items-center gap-2">
                <span className="text-xl">💰</span> Short-Term Loans for Financial Relief
                </h2>
                <p className="text-gray-600 ml-8">
                Whether it&apos;s a personal loan or cash advance, our network of lenders may help with unexpected expenses.
                </p>
            </div>

            {/* Feature 2 - Updated */}
            <div className="space-y-2">
                <h2 className="text-xl font-semibold flex items-center gap-2">
                <span className="text-xl">⚡</span> Simple Application Process
                </h2>
                <p className="text-gray-600 ml-8">
                Credit may be checked. Lender terms and approval times vary. We aim to connect you with funding options that fit your needs.
                </p>
            </div>

            {/* CTA Button - Updated */}
            <div className="mt-8 flex justify-center md:justify-start">
              <a
              href=""
              className="inline-block shadow-[0px_8px_22px_0px_#1EB9C736] bg-gradient-to-r from-[#7396F2] to-[#3767ED] hover:from-[#3767ED] hover:to-[#7396F2] text-white font-medium py-3 px-8 rounded-full transition-colors duration-200"
              >
              Request a Loan
              </a>
            </div>
            </div>
        </div>
        </div>
    </div>
  )
}

