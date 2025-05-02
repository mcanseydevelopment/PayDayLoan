import React, { useState, useEffect } from 'react';
import sliderImage from '../assets/images/slider-illustration.jpg';

const slides = [
  {
    title: 'Complete Form',
    description: 'We use this information to connect you with lenders that want to work with you',
  },
  {
    title: 'Pick Loan Offer',
    description: 'Connect with one or more loan offers and decide if it\'s right for you',
  },
  {
    title: 'Receive Funds',
    description: 'If approved, funds may be deposited as soon as the next business day',
  },
];

const Slider: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-green-700 text-white py-10">
      <div className="container mx-auto flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 p-4">
          <h2 className="text-3xl font-semibold mb-4">It&apos;s That Simple As Illustrated</h2>
          <div className="space-y-4">
            {slides.map((slide, index) => (
              <div key={index} className={`transition-opacity duration-500 ${currentSlide === index ? 'opacity-100' : 'opacity-0'}`}>
                <h3 className="text-xl font-semibold">{slide.title}</h3>
                <p className="text-sm">{slide.description}</p>
              </div>
            ))}
          </div>
          <button className="mt-8 bg-white text-green-700 px-6 py-3 rounded-lg shadow-md hover:bg-green-100">
            SEE IF YOU QUALIFY
          </button>
        </div>
        <div className="md:w-1/2 relative p-4">
          <div className="bg-white text-green-700 p-6 rounded-lg shadow-md flex flex-col items-center relative">
            <div className="absolute top-2 right-2 bg-white text-green-700 rounded-full h-8 w-8 flex items-center justify-center">
              {currentSlide + 1}
            </div>
            <img
              src={sliderImage}
              alt="Illustration"
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slider;
