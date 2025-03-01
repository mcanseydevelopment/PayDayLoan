/* eslint-disable @typescript-eslint/no-unused-vars */
"use client"
import * as React from "react"
import Image from "next/image"
import useEmblaCarousel from "embla-carousel-react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Star } from "lucide-react"
import { Button } from "@/components/ui/button"
// import neha from "../../../../public/testimonial-img/neha-gupta.png"
// import priya from "../../../../public/testimonial-img/priya-malhotra.png";
// import rakesh from "../../../../public/testimonial-img/rakesh-sharma.png";
// import vikram from "../../../../public/testimonial-img/vikram-joshi.png";

const testimonials = [
  {
    name: 'Rakesh Sharma',
    title: 'Position, Company name',
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare.",
    image: "",
    rating: 5
  },
  {
    name: 'Priya Malhotra',
    title: 'Position, Company name',
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare.",
    image: "",
    rating: 5
  },
  {
    name: 'Neha Gupta',
    title: 'Position, Company name',
    content:
      "I needed an urgent AC repair, and 24x7 Services Centers came through! The technician was on time, friendly, and fixed the issue quickly. Excellent service from start to finish!",
    image: "",
    rating: 5
  },
  {
    name: 'Vikram Joshi',
    title: 'Position, Company name',
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare.",
    image: "",
    rating: 5
  },
]

export default function TestimonialCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true })
  const [selectedIndex, setSelectedIndex] = React.useState(0)
  const [scrollSnaps, setScrollSnaps] = React.useState<number[]>([])

  const scrollTo = React.useCallback((index: number) => emblaApi && emblaApi.scrollTo(index), [emblaApi])

  const onSelect = React.useCallback(() => {
    if (!emblaApi) return
    setSelectedIndex(emblaApi.selectedScrollSnap())
  }, [emblaApi])

  React.useEffect(() => {
    if (!emblaApi) return
    onSelect()
    setScrollSnaps(emblaApi.scrollSnapList())
    emblaApi.on("select", onSelect)
    return () => {
      emblaApi.off("select", onSelect)
    }
  }, [emblaApi, onSelect])

  return (
    <section className="bg-[#F5F5F5] my-8 sm:my-12 md:my-16 rounded-lg sm:rounded-xl px-4 lg:px-0">
      <div className="max-w-7xl mx-auto  py-8 md:py-12">
        <div className="mb-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="space-y-4 text-center md:text-left w-full md:w-auto">
            <span className="inline-block rounded-full bg-[#006BBD] px-4 py-1 text-xs sm:text-sm font-medium text-white">
              What customers say
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold ">Customer testimonials</h2>
          </div>
          <div className="flex items-center justify-end md:justify-start gap-4">
            <div className="flex gap-2">
              <Button
                variant="outline"
                size="icon"
                onClick={() => emblaApi?.scrollPrev()}
                className="h-10 w-10 rounded-full"
              >
                <ChevronLeft className="h-5 w-5" />
                <span className="sr-only">Previous slide</span>
              </Button>
              <Button
                variant="outline"
                size="icon"
                onClick={() => emblaApi?.scrollNext()}
                className="h-10 w-10 rounded-full"
              >
                <ChevronRight className="h-5 w-5" />
                <span className="sr-only">Next slide</span>
              </Button>
            </div>
          </div>
        </div>
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="flex-[0_0_100%] min-[640px]:flex-[0_0_50%] lg:flex-[0_0_33.333%]">
                <div className="mr-4 h-full space-y-4 rounded-lg border p-4 sm:p-6 bg-white ml-2">
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 sm:h-5 w-4 sm:w-5 fill-[#f98c20] text-[#f98c20]" />
                    ))}
                  </div>
                  <p className="text-gray-600 text-xs sm:text-sm min-h-[100px]">{testimonial.content}</p>
                  <div className="flex items-center gap-3">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.title}
                      width={40}
                      height={40}
                      className="rounded-full w-8 h-8 sm:w-10 sm:h-10"
                    />
                    <div>
                      <div className="font-semibold text-sm sm:text-base">{testimonial.name}</div>
                      <div className="text-sm text-gray-500 sm:text-base">{testimonial.title}</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

