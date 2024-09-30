import React from 'react';
import img1 from '../assets/formalWeare/f1.png';
import img2 from '../assets/formalWeare/f2.png';
import img3 from '../assets/formalWeare/f3.png';
import img4 from '../assets/formalWeare/f4.png';
import img5 from '../assets/formalWeare/f5.png';

const images = [img1, img2, img3, img4, img5];

const FormalWearBanner: React.FC = () => {
  return (
    <div className="relative pt-[10vh]">
      <div className="flex gap-1">
        {images.map((src, index) => (
          <div key={index} className="w-1/5">
            <img src={src} alt={`Formal wear item ${index + 1}`} className="w-full h-full object-cover" />
          </div>
        ))}
      </div>
      <div className="absolute inset-0 bg-[#C96868] bg-opacity-50 flex items-center justify-center h-[30%] top-[70%]">
        <div className="text-center">
          <h2 className="font-['Roboto'] text-[36px] font-normal leading-[42.19px] text-white mb-4">
            Formal Wear Collection
          </h2>
          <button className="bg-white text-black w-[119px] h-[36px] font-['Roboto'] text-sm font-medium rounded-md">
            Shop Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default FormalWearBanner;