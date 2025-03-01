import React from "react";
import { StaticImageData } from "next/image";
import drawingmode from "../../../public/drawing-mode.svg"
import Image from "next/image";
interface StepProps {
  icon: StaticImageData;
  title: string;
  description: string;
  bgColor: string;
  iconBg: string;
}

const steps: StepProps[] = [
  {
    icon: drawingmode,
    title: "Step 1 - Apply Online",
    description:
      "Complete a quick and secure online application in just a few minutes. No long paperwork or in-person visits",
    bgColor: "#FEEDEC", // Changed from bg-red-100
    iconBg: "#FF6A58"
  },
  {
    icon: drawingmode,
    title: "Step 2 - Get Approved",
    description:
      "Our system instantly reviews your application. No credit check required! Whether you have good.",
    bgColor: "#F5EBF2", // Changed from bg-purple-100
    iconBg: "#C166A6"
  },
  {
    icon: drawingmode,
    title: "Step 3 - Receive Cash",
    description:
      "Complete a quick and secure online application in just a few minutes. No long paperwork or in-person visits",
    bgColor: "#EBFCFF", // Changed from bg-blue-100
    iconBg: "#019CB6"
  },
];

const HowItWorks: React.FC = () => {
  return (
    <section className="max-w-7xl xl:mx-auto lg:mx-10 sm:mx-3 px-4 mt-4 md:mt-0 md:pt-28 pt-36 md:pb-12 pb-0">
      <div className="text-center">
        <h2 className="text-2xl md:text-4xl font-semibold text-gray-900">
          How it works
        </h2>
        <div className="h-1 w-20 bg-blue-500 mx-auto mt-1"></div>
      </div>
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {steps.map((step, index) => (
          <div
            key={index}
            className="w-full min-h-[240px] p-8 rounded-[12px] flex flex-col justify-between" // Reduced height and padding
            style={{ backgroundColor: step.bgColor }}
          >
            <div>
              <div
                className="w-14 h-14 flex items-center justify-center rounded-full mb-4" // Reduced bottom margin
                style={{ backgroundColor: step.iconBg }}
              >
                <Image 
                  src={step.icon}
                  alt="icon"
                  className="w-7 h-7"
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {step.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {step.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HowItWorks;
