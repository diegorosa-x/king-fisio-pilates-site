import React, { useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./section/HeroSection";
import About from "./section/AboutSection";
import Scheduling from "./section/SchedulingSection";
import Services from "./section/ServiceSection";
import Reviews from "./section/ReviewSection";
import Differentials from "./section/DiferentialSection";
import Gallery from "./section/GallerySection";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";
import Location from "./section/LocationSection";
import { initScrollReveal } from "./reveal";

const App: React.FC = () => {
  useEffect(() => {
    initScrollReveal();
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <About />
        <Scheduling />
        <Services />
        <Reviews />
        <Differentials />
        <Gallery />
        <Location />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default App;
