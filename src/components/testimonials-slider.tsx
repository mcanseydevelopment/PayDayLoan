import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight, Star, Info } from "lucide-react";
import neha from "../assets/images/neha-gupta.png";
import priya from "../assets/images/priya-malhotra.png";
import rakesh from "../assets/images/rakesh-sharma.png";
import vikram from "../assets/images/vikram-joshi.png";

const testimonials = [
  {
    name: 'Michael Thompson',
    title: 'Small Business Owner',
    content:
      "PlansLoan helped me cover payroll during a slow season. The process was incredibly quick, and I received the funds within 24 hours. Their service kept my business running smoothly.",
    image: rakesh,
    rating: 5
  },
  {
    name: 'Sarah Martinez',
    title: 'Healthcare Worker',
    content:
      "When my car broke down and I needed to get to work, PlansLoan came through with a quick loan. The application was simple, and their customer service team was exceptionally helpful.",
    image: priya,
    rating: 5
  },
  {
    name: 'David Wilson',
    title: 'Construction Worker',
    content:
      "Between projects, I needed some help with bills. PlansLoan made it easy to get a short-term loan. Their platform is straightforward and the approval process was faster than I expected!",
    image: neha,
    rating: 5
  },
  {
    name: 'Jennifer Anderson',
    title: 'Retail Store Manager',
    content:
      "When our store needed emergency repairs, PlansLoan provided the funding we needed within hours. Their quick response and flexible terms helped us stay open for business.",
    image: vikram,
    rating: 5
  }
];

export default function TestimonialCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [, setSelectedIndex] = useState(0);
  const [, setScrollSnaps] = useState<number[]>([]);
  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    setScrollSnaps(emblaApi.scrollSnapList());
    emblaApi.on("select", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi, onSelect]);

  return (
    <section className="bg-[#F5F5F5] mt-8 sm:mt-12 md:mt-16 rounded-lg sm:rounded-xl px-4 lg:px-0">
      <div className="max-w-7xl mx-auto py-8 md:py-12">
        {/* Header section */}
        <div className="mb-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="space-y-4 text-center md:text-left w-full md:w-auto">
            <span className="inline-block rounded-full bg-[#006BBD] px-4 py-1 text-xs sm:text-sm font-medium text-white">
              What customers say
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold">
              Customer testimonials
            </h2>
          </div>
          <div className="flex items-center justify-end md:justify-start gap-4">
            <div className="flex gap-2">
              <button
                onClick={() => emblaApi?.scrollPrev()}
                className="h-10 w-10 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-100"
              >
                <ChevronLeft className="h-5 w-5" />
                <span className="sr-only">Previous slide</span>
              </button>
              <button
                onClick={() => emblaApi?.scrollNext()}
                className="h-10 w-10 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-100"
              >
                <ChevronRight className="h-5 w-5" />
                <span className="sr-only">Next slide</span>
              </button>
            </div>
          </div>
        </div>

        {/* Carousel section */}
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="flex-[0_0_100%] min-[640px]:flex-[0_0_50%] lg:flex-[0_0_33.333%]"
              >
                <div className="mr-4 h-full space-y-4 rounded-lg border p-4 sm:p-6 bg-white ml-2">
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-4 sm:h-5 w-4 sm:w-5 fill-[#f98c20] text-[#f98c20]"
                      />
                    ))}
                  </div>
                  <p className="text-gray-600 text-xs sm:text-sm min-h-[100px]">
                    {testimonial.content}
                  </p>
                  <div className="flex items-center gap-3">
                    <img
                      src={testimonial.image}
                      alt={testimonial.title}
                      className="rounded-full w-8 h-8 sm:w-10 sm:h-10 object-cover"
                    />
                    <div>
                      <div className="font-semibold text-sm sm:text-base">
                        {testimonial.name}
                      </div>
                      <div className="text-sm text-gray-500 sm:text-base">
                        {testimonial.title}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Testimonial Disclaimer */}
        <div className="mt-6 flex items-start bg-blue-50 p-4 rounded-lg">
          <Info className="h-5 w-5 text-blue-600 mr-2 flex-shrink-0 mt-0.5" />
          <p className="text-sm text-gray-600">
            <span className="font-medium">Representative experiences:</span> These testimonials represent the experiences of actual customers. Individual results may vary depending on financial circumstances, lender approval, and other factors. Loans are subject to lender approval.
          </p>
        </div>
      </div>
    </section>
  );
}