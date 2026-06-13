import React, { useRef, useState } from "react";
import logo_small from "../assets/favicon.png";
import logo_White from "../assets/recognitW.png";
import { BiSearch, BiMenu, BiX } from "react-icons/bi";
import { useClickOutside } from "../Hooks/useClickOutside";
import { FiLayers } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const [searchOpen, setSearchOpen] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);

  const mobileRef = useRef<HTMLDivElement>(null);

  useClickOutside(mobileRef, () => setMobileMenu(false));

  return (
    <header className="w-full bg-white md:bg-transparent relative">

      <nav className="mx-auto flex items-center justify-between px-4 sm:px-6 md:px-10 py-4">

        <div className="flex items-center flex-shrink-0">
          <img
            src={logo_small}
            alt="logo"
            className="md:hidden h-12  rounded-md "
          />
          <img
            src={logo_White}
            alt="logo"
            className="hidden md:block  h-20  rounded-md"
          />
        </div>
        <ul className="hidden md:flex items-center gap-10 text-base md:text-lg">
          <li className="text-gray-400 hover:text-gray-600 cursor-pointer nav-link">
            Home
          </li>

          <li className="relative group text-gray-400 hover:text-gray-600 cursor-pointer nav-link">
            Services
            <div className="absolute left-0 p-2">
              <ul className=" w-64 bg-white backdrop-blur-md border-b-1 border-l-1 border-r-1 border-amber-400 rounded-bl-lg rounded-br-lg shadow-lg z-50 hidden group-hover:block">
                <li className="flex justify-between px-5 py-4 hover:bg-gray-100 nav-link">
                  On branding <span>›</span>
                </li>
                <li className="flex justify-between px-5 py-4 hover:bg-gray-100 nav-link">
                  On marketing <span>›</span>
                </li>
              </ul>
            </div>
          </li>

          <li
            onClick={() => navigate("/pricing-plans")}
            className="text-gray-400 hover:text-gray-600 cursor-pointer nav-link"
          >
            Pricing & Plans
          </li>

          <li className="text-gray-400 hover:text-gray-600 cursor-pointer nav-link">
            About
          </li>

          <li className="text-gray-400 hover:text-gray-600 cursor-pointer nav-link">
            Contact
          </li>
        </ul>

        {/* ================= SEARCH ================= */}
        <div className="hidden md:flex items-center gap-2">
          <form className="flex items-center border-b border-transparent focus-within:border-yellow-500">
            <input
              type="text"
              placeholder="Search..."
              className="w-[300px] bg-transparent outline-none py-1 text-md md:text-base text-gray-500"
            />
            <button type="submit">
              <BiSearch className="text-yellow-600 w-7 h-7" />
            </button>
          </form>
        </div>

        {/* ================= MOBILE ================= */}
        <div className="md:hidden flex items-center gap-3">
          <button
            onClick={() => {
              setSearchOpen(!searchOpen);
              setMobileMenu(false);
            }}
          >
            <BiSearch className="w-7 h-7 text-yellow-600" />
          </button>

          <button
            onClick={() => {
              setMobileMenu(!mobileMenu);
              setSearchOpen(false);
            }}
          >
            {mobileMenu ? (
              <BiX className="w-8 h-8 text-gray-700" />
            ) : (
              <BiMenu className="w-8 h-8 text-gray-700" />
            )}
          </button>
        </div>
      </nav>

      {/* ================= MOBILE SEARCH ================= */}
      {searchOpen && (
        <div className="md:hidden px-4 pb-3 border-b border-gray-100">
          <form className="flex items-center border-b border-yellow-500">
            <input
              type="text"
              placeholder="Search..."
              className="w-full bg-transparent outline-none py-2 text-gray-600"
            />
            <BiSearch className="text-yellow-600 w-6 h-6" />
          </form>
        </div>
      )}
      {mobileMenu && (
        <div
          ref={mobileRef}
          className="md:hidden absolute top-full left-0 w-full bg-white border-t border-gray-100 shadow-lg z-50"
        >
          <ul className="flex flex-col p-4 gap-4 text-gray-600">
            <li>Home</li>

            <li>
              <p className="font-medium">Services</p>
              <ul className="pl-4 mt-2 space-y-2 text-yellow-600 md:text-gray-500">
                <li>On branding</li>
                <li>On marketing</li>
              </ul>
            </li>

            <li>Pricing & Plans</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;
