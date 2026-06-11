import React from "react";
import favicon from "../assets/favicon.png";
import { BiSearch } from "react-icons/bi";

const Navbar = () => {
  const toggleDropdown = () => {
    const dropdown = document.getElementById("dropdown");
    dropdown?.classList.toggle("hidden");
  };
  return (
    <nav className="w-full navbar flex items-center justify-between overflow-y-visible">
      <div className="relative flex justify-between items-center py-4 px-24 w-[65%]">
        <div className="header-shape absolute inset-0 bg-gray-100 -z-10"></div>
        <div className="flex items-center gap-24">
          <div className="flex items-center">
            <img
              src={favicon}
              alt="Recognit Agency"
              className="w-18 h-18 mr-2"
            />
            {/* <div className="flex flex-col">
              <span className="text-xl font-bold">Recognit</span>
              <span className="text-md text-gray-500">Agency</span>
            </div> */}
          </div>
          <div className="hidden md:flex space-x-10 text-xl" id="nav-links">
            <p className="text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md font-medium nav-link">
              Home
            </p>
            <div className="relative group">
              <p
                id="servicesBtn"
                onClick={toggleDropdown}
                className="text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md font-medium nav-link"
              >
                Services
              </p>
              <div
                id="dropdown"
                className={`hidden dropdown absolute top-16 bg-zinc-100 border border-amber-500 w-72 shadow-xl z-10 rounded-lg`}
              >
                <a
                  href="#"
                  className="flex justify-between px-10 py-8 text-xl hover:bg-gray-200 duration-300"
                >
                  On branding
                  <i className="fa-solid fa-caret-right"></i>
                </a>

                <a
                  href="#"
                  className="flex justify-between px-10 py-8 text-xl hover:bg-gray-200 duration-300"
                >
                  On marketing
                  <i className="fa-solid fa-caret-right"></i>
                </a>
              </div>
            </div>
            <p className="text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md font-medium nav-link">
              Pricing & Plans
            </p>
            <p className="text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md font-medium nav-link">
              About
            </p>
            <p className="text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md font-medium nav-link">
              Contact
            </p>
          </div>
        </div>
      </div>
      <div>
<div
        id="searchBox"
        className="search-wrapper overflow-hidden bg-white rounded-full flex items-cente border-2 border-yellow-600">          <input
            className="search-input px-8 text-md outline-none"
            placeholder="Search here..."
            />
            <button className="w-14 h-14 flex justify-center items-center">
                <i className="fa-solid fa-magnifying-glass text-yellow-600 text-2xl"></i>
            </button>
        
        
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
