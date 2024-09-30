import React, { useState, useEffect } from 'react';
import bgImg1 from '../assets/bgImage/bgImg.png';
import bgImg2 from '../assets/bgImage/bg2.png';
import bgImg3 from '../assets/bgImage/bg3.png';

const sliderData = [
  { text: "Shop the Trend: New Arrivals Just for You", backgroundImage: bgImg1 },
  { text: "Discover Our Latest Collection", backgroundImage: bgImg2 },
  { text: "Elevate Your Style with Our Newest Looks", backgroundImage: bgImg3 }
];

const Slider: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % sliderData.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full h-[600px] md:h-[800px] overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${sliderData[currentSlide].backgroundImage})` }}
      />
      <div className="absolute inset-0 flex items-center justify-start p-8 md:p-16">
        <div className="max-w-[800px]">
          {sliderData.map((slide, index) => (
            <div
              key={index}
              className={`transition-opacity duration-500 pl-[10%] ${
                index === currentSlide ? 'opacity-100' : 'opacity-0 absolute'
              }`}
            >
              <h2
                className="text-[#FFF4EA] text-4xl md:text-[56px] font-bold mb-6 md:mb-8 leading-tight"
                style={{ fontFamily: 'Roboto, sans-serif' }}
              >
                {slide.text}
              </h2>
              <button className="bg-white text-black py-2 px-4 rounded w-[119px] h-[36px] text-base hover:bg-gray-200 transition-colors">
                Shop Now
              </button>
            </div>
          ))}
        </div>
      </div>
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {sliderData.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full ${
              index === currentSlide ? 'bg-white' : 'bg-gray-400'
            }`}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Slider;
