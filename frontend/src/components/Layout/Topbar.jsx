import React from "react";
import { TbBrandMeta } from "react-icons/tb";
import { IoLogoInstagram } from "react-icons/io";
import { RiTwitterXLine } from "react-icons/ri";

const Topbar = () => {
  return (
    <div className="bg-red-600 text-white text-sm">
      <div className="container mx-auto flex justify-between items-center py-2 px-4">
        {/* Left - Social Icons */}
        <div className="hidden md:flex items-center space-x-3">
          <a href="#" className="hover:text-gray-300">
            <TbBrandMeta className="h-5 w-5" />
          </a>
          <a href="#" className="hover:text-gray-300">
            <IoLogoInstagram className="h-5 w-5" />
          </a>
          <a href="#" className="hover:text-gray-300">
            <RiTwitterXLine className="h-5 w-5" />
          </a>
        </div>

        {/* Center - Shipping Info */}
        <div className="text-sm text-center flex-grow">
          We ship worldwide - Fast and reliable shipping!
        </div>

        {/* Right - Contact */}
        <div className="text-sm hidden md:block">
          <a href="tel:9876543210" className="hover:text-gray-300">
            9876543210
          </a>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
