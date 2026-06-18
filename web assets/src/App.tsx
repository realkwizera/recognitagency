import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import PricingPlans from "./components/PricingPlans";

function App() {
  return (
    <>
      <div className="w-full  ">
        <div className=" relative md:max-w-[1440px] mx-auto">
          <div className="mx-auto absolute  sticky inset-0 md:max-w-[1440px] z-50">
              <Navbar />
          </div>

          <div className="mx-auto px-2 md:px-8 md:px-24">
            <Routes>
              <Route path="/pricing-plans" element={<PricingPlans />} />
            </Routes>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
