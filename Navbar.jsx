import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { CgMenuRight } from "react-icons/cg"; // right burger menu for small screens
import { CgMenuLeft } from "react-icons/cg"; // left burger menu for medium screens
import { IoCloseOutline } from "react-icons/io5"; // close burger menu icon

const Navbar = () => {
  const [toggleSmall, setToggleSmall] = useState(false);  // For small screen dropdown
  const [toggleMedium, setToggleMedium] = useState(false); // For medium screen dropdown

  const toggleSmallMenu = () => {
    setToggleSmall(!toggleSmall);
  };

  const toggleMediumMenu = () => {
    setToggleMedium(!toggleMedium);
  };

  return (
    <div className="flex items-center justify-between sticky top-0 bg-gradient-to-bl from-[#fafafa] via-[#f2f2f2] to-[#d5d5d5] shadow-lg space-x-5 z-50">
      {/* Small Screens: Logo on left, burger menu on right */}
      <div className="flex w-full justify-between md:hidden items-center pl-1 pr-3">
        <Link to="/">
          <img 
            src="/images/l5_1x.png" 
            alt="Logo" 
            className="h-full w-36 cursor-pointer"
          />
        </Link>
        <a href="#" className="text-2xl" onClick={toggleSmallMenu}>
          {toggleSmall ? <IoCloseOutline /> : <CgMenuRight />} {/* Burger Menu Icon for Small Screens */}
        </a>
      </div>

      {/* Medium Screens: Left burger menu, logo, and login button on right */}
      <div className="hidden md:flex md:items-center md:justify-between md:w-full lg:hidden pr-7">
        <div className="flex items-center space-x-8">
          <a href="#" className="text-3xl" onClick={toggleMediumMenu}>
            {toggleMedium ? <IoCloseOutline /> : <CgMenuLeft />} {/* Left Burger Menu Icon for Medium Screens */}
          </a>
          <Link to="/">
            <img 
              src="/images/l5_1x.png" 
              alt="Logo" 
              className="h-full w-44 cursor-pointer"
            />
          </Link>
        </div>
        <button className="px-5 py-3 button-3d font-medium uppercase rounded-2xl text-white bg-gradient-to-bl from-[#0eb2e5] via-[#064970] to-[#042636] hover:bg-gradient-to-br hover:from-[#0eb2e5] hover:via-[#064970] hover:to-[#042636]">
          Login
        </button>
      </div>

      {/* Large Screens: Logo, menu items, and login button */}
      <div className="hidden lg:flex lg:items-center lg:justify-between lg:w-full pr-10">
        <div className="flex items-center space-x-1">
          <Link to="/">
            <img 
              src="/images/l5_1x.png" 
              alt="Logo" 
              className="h-full w-52 cursor-pointer"
            />
          </Link>
        </div>

        <div className="flex items-center space-x-8">
          <div className="flex items-center space-x-7">
            <Link to="/overview" className="font-medium uppercase text-sm text-[#005286] hover:text-gray-400">Overview</Link>
            <Link to="/guide" className="font-medium uppercase text-sm text-[#005286] hover:text-gray-400">Guide</Link>
            <Link to="/about" className="font-medium uppercase text-sm text-[#005286] hover:text-gray-400">About</Link>
            <Link to="/contact" className="font-medium uppercase text-sm text-[#005286] hover:text-gray-400">Contact</Link>
          </div>
          <button className="px-5 py-3 button-3d font-medium uppercase rounded-2xl text-white bg-gradient-to-bl from-[#0eb2e5] via-[#064970] to-[#042636] hover:bg-gradient-to-br hover:from-[#0eb2e5] hover:via-[#064970] hover:to-[#042636]">
            Login
          </button>
        </div>
      </div>

{/* Small Screen Dropdown Menu: Appears on right, below the right cancel button */}
{toggleSmall && (
  <div className="absolute top-14 right-0 w-64 rounded-lg bg-gradient-to-bl from-[#fafafa] via-[#f2f2f2] to-[#d5d5d5] shadow-lg z-40 border-2 border-gray-300">
    <div className="flex flex-col py-2">
      <Link to="/overview" className="px-4 py-2 uppercase text-sm text-[#005286] border-b border-gray-300 hover:text-[#007BFF] hover:border-[#007BFF] transition-all"> Overview </Link>
      <Link to="/guide" className="px-4 py-2 uppercase text-sm text-[#005286] border-b border-gray-300 hover:text-[#007BFF] hover:border-[#007BFF] transition-all"> Guide </Link>
      <Link to="/about" className="px-4 py-2 uppercase text-sm text-[#005286] border-b border-gray-300 hover:text-[#007BFF] hover:border-[#007BFF] transition-all"> About </Link>
      <Link to="/contact" className="px-4 py-2 uppercase text-sm text-[#005286] border-b border-gray-300 hover:text-[#007BFF] hover:border-[#007BFF] transition-all"> Contact </Link>

      <div className="px-4 mt-3 text-center mb-3">
        <button className="w-fit px-5 py-3 button-3d font-medium uppercase rounded-2xl text-white bg-gradient-to-bl from-[#0eb2e5] via-[#064970] to-[#042636] hover:bg-gradient-to-br hover:from-[#0eb2e5] hover:via-[#064970] hover:to-[#042636]"> Login </button>
    </div>
  </div>
  </div>
)}


      {/* Medium Screen Dropdown Menu: Appears on left, below the left cancel button */}
      {toggleMedium && (
        <div className="absolute top-16 left-0 w-64 rounded-lg bg-gradient-to-bl from-[#fafafa] via-[#f2f2f2] to-[#d5d5d5] shadow-lg z-40 border-2 border-gray-300">
          <div className="flex flex-col py-2">
            <Link to="/overview" className="px-4 py-2 uppercase text-sm text-[#005286] border-b border-gray-300 hover:text-gray-400">Overview</Link>
            <Link to="/guide" className="px-4 py-2 uppercase text-sm text-[#005286] border-b border-gray-300 hover:text-gray-400">Guide</Link>
            <Link to="/about" className="px-4 py-2 uppercase text-sm text-[#005286] border-b border-gray-300 hover:text-gray-400">About</Link>
            <Link to="/contact" className="px-4 py-2 uppercase text-sm text-[#005286] hover:text-gray-400">Contact</Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
