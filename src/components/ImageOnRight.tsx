import smilinggirl from "../assets/images/smiling girl.png";

export default function ImageOnRight() {
  return (
    <div className="bg-[#F6FAFF]">
      <div className="max-w-7xl xl:mx-auto md:py-20 py-4 lg:mx-10 sm:mx-3 px-4 mt-4 md:mt-0 mx-auto rounded-lg overflow-hidden shadow-sm flex flex-col xl:flex-row-reverse">
        {/* Right side - Image */}
        <div className="w-full xl:w-1/2 relative xl:h-auto h-[400px] rounded-xl">
          <div className="relative w-full h-full flex items-center justify-center">
            <img // Changed from 'image' to 'img'
              src={smilinggirl}
              alt="Person explaining loan services"
              className="object-contain w-[400px] lg:w-[450px] xl:w-[600px]"
            />
          </div>
        </div>

        {/* Left side - Content */}
        <div className="w-full xl:w-1/2 md:p-0 p-1 xl:p-12 flex flex-col justify-center md:mt-8 mt-1 xl:mt-0">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 leading-tight">
            It's That Simple, Fast, Easy, and Secure!
          </h1>

          <div className="space-y-6">
            {/* Feature 1 */}
            <div className="space-y-2">
              <h2 className="text-xl font-semibold flex items-center gap-2">
                ✅ Apply Online & Get Matched
              </h2>
              <p className="text-gray-600 ml-8">
                Fill out a quick and secure application, and we'll connect you with trusted lenders offering the best loan options.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="space-y-2">
              <h2 className="text-xl font-semibold flex items-center gap-2">
                ✅ Choose & Receive Your Cash
              </h2>
              <p className="text-gray-600 ml-8">
                Pick the loan that suits you best, get approved, and receive your funds directly in your bank account in one day.
              </p>
            </div>

            {/* CTA Button */}
            <div className="mt-8 flex justify-center md:justify-start">
              <a // Changed from Link to a
                href="#"
                className="inline-block shadow-[0px_8px_22px_0px_#1EB9C736] bg-gradient-to-r from-[#7396F2] to-[#3767ED] hover:from-[#3767ED] hover:to-[#7396F2] text-white font-medium py-3 px-8 rounded-full transition-colors duration-200"
              >
                Apply Now & Get Your Cash Fast!
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
