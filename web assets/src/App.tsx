import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import PricingPlans from "./components/PricingPlans";

function App() {
  return (
    <>
      <div className="w-full  ">
        <div className=" relative max-w-[1440px] mx-auto">
          <div className="mx-auto absolute  fixed inset-0 max-w-[1440px] z-50">
            <div style={{ background: "#000" }}>
              <Navbar />
            </div>
          </div>

          <div className="mx-auto px-24">
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
