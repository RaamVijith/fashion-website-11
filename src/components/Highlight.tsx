import React from 'react';
import img1 from '../assets/delivery-svgrepo-com 1.png';
import img2 from '../assets/secure-shield-shield-svgrepo-com.png';
import img3 from '../assets/Group.png';
import img4 from '../assets/quality-certificate-award-svgrepo-com.png';

interface FeatureItemProps {
  icon: string;
  text: string;
}

const FeatureItem: React.FC<FeatureItemProps> = ({ icon, text }) => (
  <div className="flex items-center gap-4 w-full h-auto md:w-[196px] md:h-[60px] mb-4 md:mb-0 mt-[10vh]">
    <div className="w-[60px] h-[45px]">
      <img src={icon} alt={text} className="w-full h-full object-contain" />
    </div>
    <span className="text-[16px] md:text-[18px]">{text}</span>
  </div>
);

const FeatureList: React.FC = () => (
  <div className="w-full h-auto px-[5%] flex flex-wrap justify-between items-center md:px-[10%] md:flex-nowrap">
    <FeatureItem icon={img1} text="Island-Wide Delivery" />
    <FeatureItem icon={img2} text="Secure Payments" />
    <FeatureItem icon={img3} text="Customer Support" />
    <FeatureItem icon={img4} text="Quality Products" />
  </div>
);

export default FeatureList;
