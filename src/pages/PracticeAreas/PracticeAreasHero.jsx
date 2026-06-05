/* eslint-disable no-unused-vars */
import React from "react";
import Header from "../../components/layout/Header";
import HeroBG from "../../assets/HeroHomeBG.png";
import HeroImg from "../../assets/HomeAbout2.png";

const PracticeAreasHero = () => {
  return (
    <div className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-black">

      {/* Dynamic Background Pattern - Diagonal Lines */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none flex items-center justify-center">
        {/* Background layer (optional) */}
      </div>

      <Header />

      {/* Main Content Area (REMOVED padding + margins causing borders) */}
      <div className="relative z-10 w-full flex items-center justify-center flex-1">

        {/* FULLSCREEN IMAGE CONTAINER (REMOVED max-width + rounded + shadow + aspect) */}
        <div className="relative w-full h-screen overflow-hidden">

          {/* Background Image */}
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url("/WhatsApp Image 2026-06-02 at 08.45.01 (1).jpeg")`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />

          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/60" />

          {/* Text Overlay */}
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-4">

            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl text-white tracking-widest mb-6 lg:mb-10 leading-[1.2] max-w-4xl mx-auto drop-shadow-lg uppercase">
              <br className="hidden md:block" />
            </h2>

            {/* Gold Line */}
            <div className="w-16 md:w-24 lg:w-32 h-0.5 md:h-0.75 bg-[#c4a661] drop-shadow-md"></div>

          </div>
        </div>

      </div>
    </div>
  );
};

export default PracticeAreasHero;