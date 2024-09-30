import React, { useState } from "react";
import { CgShoppingCart } from "react-icons/cg";
import { FaAngleDown } from "react-icons/fa";
import { FiHeart, FiUser } from "react-icons/fi";
import img from '../assets/topbar/topbar1.png';

const Navbar: React.FC = () => {
  const [isWomenDropdownOpen, setIsWomenDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleWomenDropdown = () => {
    setIsWomenDropdownOpen(!isWomenDropdownOpen);
  };

  const closeWomenDropdown = () => {
    setIsWomenDropdownOpen(false);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-[#FFF4EA] p-2 w-full h-[60px] z-[100]">
      <div className="container mx-auto flex justify-between items-center  z-[100]">
        {/* Logo */}
        <div className="text-[26px] ">YOUR LOGO</div>

        {/* Hamburger Menu for Mobile */}
        <div className="md:hidden">
          <button onClick={toggleMobileMenu} className="text-2xl">
            {isMobileMenuOpen ? "✖️" : "☰"}
          </button>
        </div>

        {/* Navbar Links - Hidden on mobile, shown on medium and above */}
        <ul
          className={`flex space-x-8 items-center  z-[100] ${
            isMobileMenuOpen ? "block" : "hidden"
          } md:flex`}
        >
          <li className="hover:text-[#C96868] cursor-pointer text-lg font-light">Home</li>

          {/* Women's Dropdown */}
          <li
            className="relative group cursor-pointer "
            onMouseEnter={toggleWomenDropdown}
            onMouseLeave={closeWomenDropdown}
          >
            <div className="flex flex-row  items-center hover:text-[#C96868] text-lg font-light">
              <span>Women's</span>
              <FaAngleDown />
            </div>
            {/* Dropdown */}
            {isWomenDropdownOpen && (
              <div className="absolute left-0 mt-2 border-t-[#C96868] border-t-2 w-[45vw] p-[50px] rounded-xl bg-white shadow-xl grid grid-cols-4 md:grid-cols-4 gap-4">
                {/* Clothing */}
                <div>
                  <h3 className="text-base font-[400] text-[#C96868] pb-2">Clothing</h3>
                  <ul>
                    <li className="hover:text-[#C96868] pb-1">Dresses</li>
                    <li className="hover:text-[#C96868] pb-1">T-shirts</li>
                    <li className="hover:text-[#C96868] pb-1">Jeans</li>
                    <li className="hover:text-[#C96868] pb-1">Shorts</li>
                    <li className="hover:text-[#C96868] pb-1">Jumpsuits</li>
                    <li className="hover:text-[#C96868] pb-1">Active Wear</li>
                  </ul>
                </div>

                {/* Lingerie & Nightwear */}
                <div>
                  <h3 className="text-base font-[400] text-[#C96868] pb-2">
                    Lingerie & Nightwear
                  </h3>
                  <ul>
                    <li className="hover:text-[#C96868] pb-1">Sleepwear</li>
                    <li className="hover:text-[#C96868] pb-1">Undershorts</li>
                    <li className="hover:text-[#C96868] pb-1">Underskirt</li>
                    <li className="hover:text-[#C96868] pb-1">Panties</li>
                    <li className="hover:text-[#C96868] pb-1">
                      All Lingerie & Nightwear
                    </li>
                  </ul>
                </div>

                {/* Ethnic Wear */}
                <div>
                  <h3 className="text-base font-[400] text-[#C96868] pb-2">Ethnic Wear</h3>
                  <ul>
                    <li className="hover:text-[#C96868] pb-1">Saree</li>
                    <li className="hover:text-[#C96868] pb-1">Kurthis</li>
                    <li className="hover:text-[#C96868] pb-1">Shalwar Material</li>
                    <li className="hover:text-[#C96868] pb-1">All Ethnic Wear</li>
                  </ul>
                </div>

                <div>
                  <img
                    src= {img}
                    alt="fashion model"
                    className="h-[221px] w-[128px] rounded-md shadow-sm"
                  />
                </div>
              </div>
            )}
          </li>

          <li className="hover:text-[#C96868] cursor-pointer text-lg font-light"  onMouseEnter={toggleWomenDropdown}
            onMouseLeave={closeWomenDropdown}>
            <div className="flex flex-row  items-center hover:text-[#C96868]">
              <span>Men's</span>
              <FaAngleDown />
            </div>
          </li>

          <li className="hover:text-[#C96868] cursor-pointer text-lg font-light"  onMouseEnter={toggleWomenDropdown}
            onMouseLeave={closeWomenDropdown}>
            <div className="flex flex-row  items-center hover:text-[#C96868]">
              <span>Kids</span>
              <FaAngleDown />
            </div>
          </li>
          <li className="hover:text-[#C96868] cursor-pointer "  onMouseEnter={toggleWomenDropdown}
            onMouseLeave={closeWomenDropdown}>
            <div className="flex flex-row  items-center hover:text-[#C96868] text-lg font-light">
              <span>Accessories</span>
              <FaAngleDown />
            </div>
          </li>
          <li className="hover:text-[#C96868] cursor-pointer text-lg font-light">Offers</li>
          <li className="hover:text-[#C96868] cursor-pointer text-lg font-light">About Us</li>
        </ul>

        {/* Search & Icons */}
        <div className="hidden md:flex space-x-4 items-center">
          <input
            type="text"
            placeholder="Search"
            className="px-4 py-1 rounded-md border-[1px] border-black text-black placeholder:text-black bg-[#FFF4EA]"
          />
          <button className="p-2"><FiUser size={24} /></button>
          <button className="p-2"><FiHeart size={24}/></button>
          <button className="p-2"><CgShoppingCart size={24}/> </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <ul className="block md:hidden space-y-4 mt-4 text-center">
          <li className="hover:text-[#C96868] cursor-pointer">Home</li>
          <li className="hover:text-[#C96868] cursor-pointer">Women's</li>
          <li className="hover:text-[#C96868] cursor-pointer">Men's</li>
          <li className="hover:text-[#C96868] cursor-pointer">Kids</li>
          <li className="hover:text-[#C96868] cursor-pointer">Accessories</li>
          <li className="hover:text-[#C96868] cursor-pointer">Offers</li>
          <li className="hover:text-[#C96868] cursor-pointer">About Us</li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
