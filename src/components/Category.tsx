// Carousel.tsx
import React, { useState } from 'react';
import img1 from '../assets/cat.png'
import img2 from '../assets/cat2.png'
import img3 from '../assets/cat3.png'


const Category: React.FC = () => {
  // Static array of images
  const images = [
    {
      src: img1,
      label: "Women's Collection",
    },
    {
        src: img2,
        label: "Men's Collection",
    },
    {
        src: img3,
        label: "Kids Collection",
    },
    {
        src: img1,
        label: "Accessories",
    },
    {
        src: img2,
        label: "New Arrivals",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="relative w-full px-[10%] ">
      {/* Left Arrow */}
      <button
        onClick={handlePrevClick}
        className="absolute left-[10%] z-10 p-2 text-black text-3xl rounded-full top-1/2 transform -translate-y-1/2"
      >
        &#10094;
      </button>

      {/* Carousel Images */}
      <div className="flex overflow-hidden justify-center">
        {images.slice(currentIndex, currentIndex + 3).map((image, index) => (
          <div
            key={index}
            className="flex-shrink-0 px-[15px] transform transition-transform w-[380px] h-[450px] "
          >
            <div className="relative  ">
              <img
                src={image.src}
                alt={image.label}
                className="w-[380px] h-[450px] object-cover"
              />
              <div className="absolute inset-0 flex items-end justify-start pl-4 hover:bg-white hover:bg-opacity-30 border-white border-[1px] m-5 rounded-lg self-center">
                <p className="text-white text-lg font-[400] " style={{ fontFamily: 'Roboto, sans-serif' }}>{image.label}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Right Arrow */}
      <button
        onClick={handleNextClick}
        className="absolute right-[10%] z-10 p-2 text-black text-3xl   top-1/2 transform -translate-y-1/2"
      >
        &#10095;
      </button>
    </div>
  );
};

export default Category;
