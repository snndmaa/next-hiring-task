"use client"
import React, { useState } from 'react';
import { GiHamburgerMenu,  } from "react-icons/gi";
import { FaCaretDown } from "react-icons/fa";

function BlueButtonDropdownMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="ml-8 relative inline-block text-left">
      <button
        onClick={toggleDropdown}
        className="inline-flex items-center justify-center w-full rounded-md border border-gray-300 shadow-sm px-2 py-2.5 bg-blue-600 text-sm font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 gap-2"
      >
        <GiHamburgerMenu className="h-4 w-4" />
        <span>All Categories</span>
        <FaCaretDown className={`h-4 w-4 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {isOpen && (
        <div className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
          <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
            <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">
              Option 1
            </a>
            <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">
              Option 2
            </a>
            <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">
              Option 3
            </a>
          </div>
        </div>
      )}
    </div>
  );
}

export default BlueButtonDropdownMenu;