import React from "react";
import hero from "../assets/hero.png";

const Hero = () => {
  return (
    <div className="relative top-0 flex flex-col items-center justify-between min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="h-full">
        <div className="relative">
          <img src={hero} />
        </div>
        <div className="absolute w-full  text-gray-900 right-1 flex flex-col items-center bottom-1/2 text-base gap-8  ">
          <p className="text-5xl font-black text-gray-100 ">
            Get your brand out in public
          </p>
          <button className="bg-yellow-600 border border-gray-100 font-semibold shadow-sm  shadow-gray-100 rounded-md w-50 px-10 shadow-lg  py-3 text-xl">
            Get started
          </button>
        </div>
      </div>
      {/* for medium screens */}
      <div className="hidden md:block absolute md:bottom-2/10 bottom-1 grid md:flex items-center justify-center gap-4">
        <div className="text-yellow-600 p-4 rounded-lg house-frame w-67 shadow-x-md shadow-gray-100">
          <h1 className="w-full py-2 mx-auto bg-yellow-600 font-semibold text-center text-gray-900">
            Welcome to our website!
          </h1>
          <p className="text-justify">
            Discover amazing content and connect with others.
          </p>
        </div>
        <div className="text-yellow-600 p-4 rounded-lg house-frame w-67 shadow-x-md shadow-gray-100">
          <h1 className="w-full py-2 mx-auto bg-yellow-600 font-semibold text-center text-gray-900">
            Welcome to our website!
          </h1>
          <p>Discover amazing content and connect with others.</p>
        </div>
        <div className="text-yellow-600 p-4 rounded-lg house-frame w-67 shadow-x-md shadow-gray-100">
          <h1 className="w-full py-2 mx-auto bg-yellow-600 font-semibold text-center text-gray-900">
            Welcome to our website!
          </h1>
          <p>Discover amazing content and connect with others.</p>
        </div>
        <div className="text-yellow-600 p-4 rounded-lg house-frame w-67 shadow-x-md shadow-gray-100">
          <h1 className="w-full py-2 mx-auto bg-yellow-600 font-semibold text-center text-gray-900">
            Welcome to our website!
          </h1>
          <p>Discover amazing content and connect with others.</p>
        </div>
        <div className="text-yellow-600 p-4 rounded-lg house-frame w-67 shadow-x-md shadow-gray-100">
          <h1 className="w-full py-2 mx-auto bg-yellow-600 font-semibold text-center text-gray-900">
            Welcome to our website!
          </h1>
          <p>Discover amazing content and connect with others.</p>
        </div>
        <div className="text-yellow-600 p-4 rounded-lg house-frame w-67 shadow-x-md shadow-gray-100">
          <h1 className="w-full py-2 mx-auto bg-yellow-600 font-semibold text-center text-gray-900">
            Welcome to our website!
          </h1>
          <p>Discover amazing content and connect with others.</p>
        </div>
      </div>
      {/* for small screens */}
      <div className="md:hidden absolute md:bottom-2/10 left-1 bottom-1 grid grid-cols-2 md:flex items-center justify-center gap-4">
        <div className="text-yellow-600 p-4 rounded-lg  w-67">
          <h1 className="w-full py-2 mx-auto bg-yellow-600 font-semibold text-center text-gray-900">
            Welcome to our website!
          </h1>
          <p>Discover amazing content and connect with others.</p>
        </div>
        <div className="text-yellow-600 p-4 rounded-lg  w-67">
          <h1 className="w-full py-2 mx-auto bg-yellow-600 font-semibold text-center text-gray-900">
            Welcome to our website!
          </h1>
          <p>Discover amazing content and connect with others.</p>
        </div>
        <div className="text-yellow-600 p-4 rounded-lg  w-67">
          <h1 className="w-full py-2 mx-auto bg-yellow-600 font-semibold text-center text-gray-900">
            Welcome to our website!
          </h1>
          <p>Discover amazing content and connect with others.</p>
        </div>
      </div>
      <div className="hidden md:block overflow-hidden absolute bottom-1/30 py-2 mt-10">
        <div className="mx-auto whitespace-nowrap animate-marquee flex items-start gap-8 text-gray-200 text-center transition-all duration-500">
          <div>
            <div className="w-24 h-24 bg-red-600 rounded-full border"></div>
            <h1>UMUHUZA</h1>
          </div>
          <div>
            <div className="w-24 h-24 bg-green-600 rounded-full border"></div>
            <h1>UMUHUZA</h1>
          </div>
          <div>
            <div className="w-24 h-24 bg-blue-600 rounded-full border"></div>
            <h1>UMUHUZA</h1>
          </div>
          <div>
            <div className="w-24 h-24 bg-red-600 rounded-full border"></div>
            <h1>UMUHUZA</h1>
          </div>
          <div>
            <div className="w-24 h-24 bg-green-600 rounded-full border"></div>
            <h1>UMUHUZA</h1>
          </div>
          <div>
            <div className="w-24 h-24 bg-blue-600 rounded-full border"></div>
            <h1>UMUHUZA</h1>
          </div>
          <div>
            <div className="w-24 h-24 bg-red-600 rounded-full border"></div>
            <h1>UMUHUZA</h1>
          </div>
          <div>
            <div className="w-24 h-24 bg-green-600 rounded-full border"></div>
            <h1>UMUHUZA</h1>
          </div>
          <div>
            <div className="w-24 h-24 bg-blue-600 rounded-full border"></div>
            <h1>UMUHUZA</h1>
          </div>
          <div>
            <div className="w-24 h-24 bg-red-600 rounded-full border"></div>
            <h1>UMUHUZA</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
