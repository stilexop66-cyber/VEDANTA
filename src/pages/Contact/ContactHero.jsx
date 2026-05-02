/* eslint-disable no-unused-vars */
import React from "react";
import Header from "../../components/layout/Header";

const PracticeAreasHero = () => {
  return (
    <div className="relative min-h-[60vh] md:min-h-[80vh] flex flex-col justify-center overflow-hidden bg-black">
      {/* Dynamic Background Pattern - Diagonal Lines */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none flex items-center justify-center">
        <div
          className="w-[200%] h-[200%] md:w-[150%] md:h-[150%] opacity-20"
          style={{
            backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.4) 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
            transform: "rotate(45deg)",
            transformOrigin: "center center",
          }}
        />
        {/* Soft radial gradient mask over the lines to fade them at edges */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_20%,black_70%)]" />
      </div>

      <Header />

      {/* Main Content Area */}
      <div className="relative z-10 w-full px-4 md:px-12 lg:px-20 xl:px-32 flex items-center justify-center flex-1 mt-24 md:mt-32 pb-12">
        {/* Image Box */}
        <div className="relative w-full max-w-6xl overflow-hidden rounded-sm shadow-2xl">
          {/* Inner Aspect Ratio Container for responsiveness */}
          <div className="aspect-4/3 sm:aspect-video md:aspect-21/9 lg:aspect-[2.35/1] relative">
            {/* Background Image Container */}
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: `url('https://images.unsplash.com/photo-1589829085413-56de8ae18c73?q=80&w=2624&auto=format&fit=crop')`,
              }}
            />
            {/* Dark Overlay over the inner image */}
            <div className="absolute inset-0 bg-black/50" />

            {/* Text Overlay Content */}
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-4">
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl   text-white tracking-widest mb-6 lg:mb-10 leading-[1.2] max-w-4xl mx-auto drop-shadow-lg uppercase">
                MEET OUR BRILLIANT
                <br className="hidden md:block" /> GROUP OF LAWYERS
              </h2>
              {/* Golden line separator */}
              <div className="w-16 md:w-24 lg:w-32 h-0.5 md:h-0.75 bg-[#c4a661] drop-shadow-md"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PracticeAreasHero;
