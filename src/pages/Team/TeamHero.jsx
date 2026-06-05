/* eslint-disable no-unused-vars */
import React from "react";
import Header from "../../components/layout/Header";
import HeroBG from "../../assets/HeroHomeBG.png";

const PracticeAreasHero = () => {
  return (
    <div className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-black">
      
      {/* Background Pattern (disabled, unchanged) */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none flex items-center justify-center">
        {/* Optional background layer */}
      </div>

      <Header />

      {/* Main Content Area (REMOVED PADDING + LIMITERS) */}
      <div className="relative z-10 w-full flex items-center justify-center flex-1">

        {/* FULLSCREEN HERO CONTAINER (REMOVED max-width + rounded + shadow) */}
        <div className="relative w-full h-screen overflow-hidden">

          {/* Background Image */}
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: 'url("/image.png")',
            }}
          />

          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/70" />

          {/* Text Overlay */}
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-4">

            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl text-white tracking-widest mb-6 lg:mb-10 leading-[1.2] max-w-4xl mx-auto drop-shadow-lg uppercase">
            </h2>

            <div className="w-16 md:w-24 lg:w-32 h-0.5 md:h-0.75 bg-[#c4a661] drop-shadow-md"></div>

          </div>
        </div>

      </div>
    </div>
  );
};

export default PracticeAreasHero;