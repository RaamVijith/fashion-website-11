import React from 'react';

interface HeadingTextsProps {
  text: string;
}

const HeadingTexts: React.FC<HeadingTextsProps> = ({ text }) => {
  return (
    <div className="flex justify-center items-center px-[20%] pb-[5vh] pt-[10vh]">
      <div className="flex-grow border-t border-black mx-10 relative">
        <div className="absolute -top-1 left-0 transform -translate-x-1/2 h-2 w-2 bg-black rounded-full"></div>
      </div>
      <h2 className="text-center font-roboto text-2xl md:text-3xl font-normal px-10">{text}</h2>
      <div className="flex-grow border-t border-black mx-10 relative">
        <div className="absolute -top-1 right-0 transform translate-x-1/2 h-2 w-2 bg-black rounded-full"></div>
      </div>
    </div>
  );
};

export default HeadingTexts;
