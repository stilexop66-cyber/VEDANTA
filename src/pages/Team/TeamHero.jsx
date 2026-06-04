/* eslint-disable no-unused-vars */
import React from "react";
import Header from "../../components/layout/Header";
import HeroBG from "../../assets/HeroHomeBG.png";


const PracticeAreasHero = () => {
  return (
    <div className="relative min-h-[60vh] md:min-h-[80vh] flex flex-col justify-center overflow-hidden bg-black ">
      {/* Dynamic Background Pattern - Diagonal Lines */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none flex items-center justify-center">
        {/*<div*/}
        {/*  className="w-[200%] h-[200%] md:w-full md:h-full opacity-100"*/}
        {/*  style={{*/}
        {/*    backgroundImage: `url(${HeroBG})`,*/}
        {/*    backgroundSize: "cover",*/}
        {/*    backgroundPosition: "center",*/}
        {/*  }}*/}
        {/*/>*/}
        {/* Soft radial gradient mask over the lines to fade them at edges */}
        {/* <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_20%,black_70%)]" /> */}
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
                backgroundImage:
                  'url("/image.png")',
              }}
            />
            {/* Dark Overlay over the inner image */}
            <div className="absolute inset-0 bg-black/70" />

            {/* Text Overlay Content */}
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-4">
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl   text-white tracking-widest mb-6 lg:mb-10 leading-[1.2] max-w-4xl mx-auto drop-shadow-lg uppercase">
                JOIN OUR TEAM
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
