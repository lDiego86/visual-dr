import React from "react";
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import Packages from "../components/Packages";
import Gallery from "../components/GalleryPreview.jsx";
import Testimonials from "../components/Testimonials";
import Process from "../components/Process.jsx";
import Tips from "../components/Tips.jsx";
import DroneSection from "../components/DroneView.jsx";
import Footer from "../components/Footer.jsx";

export default function VisualDR() {
  return (
    <div className="font-sans ">
      <Hero />
      <Projects />
      <Gallery />  
      <Testimonials /> 
      <Tips /> 
      <Process />
      <Packages />
      <DroneSection />
      <Footer />
    </div>
  );
}