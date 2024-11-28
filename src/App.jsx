import React from "react";
import { Navbar } from "./components/navbar";
import { Herosection } from "./components/herosection";
import { FeatureSection } from "./components/FeatureSection";
import { WorkflowSection } from "./components/WorkflowSection";
import { Price } from "./components/Price";
import { Testimonials } from "./components/Testimonials";
import { Footer } from "./components/Footer";
function App() {

  return (
    <>
      <Navbar/>
      <div className="max-w-7xl mx-auto pt-20 px-6">
        <Herosection/>
        <FeatureSection/>
        <WorkflowSection/>
        <Price/>
        <Testimonials/>
        <Footer/>
      </div>
    </>
  )
}

export default App
