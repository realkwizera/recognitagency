import { Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import PricingPlans from "./components/PricingPlans";
import Hero from "./components/Hero";

function App() {
  return (
    <>
      <div className="w-full  ">
        {/* <div className=" relative"> */}
          {/* <div className="mx-auto absolute h-fit fixed inset-0 z-50"> */}
            <Navbar />
          {/* </div> */}

          <div className="mx-auto px-2 md:px-8 ">
            <Routes>
              <Route path="/" element={<Hero />} />
              <Route path="/pricing-plans" element={<PricingPlans />} />
            </Routes>
          </div>
        {/* </div> */}
      </div>
    </>
  );
}

export default App;
