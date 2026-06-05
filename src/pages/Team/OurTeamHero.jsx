/* eslint-disable no-unused-vars */
import React from "react";
import Header from "../../components/layout/Header";

const OurTeamHero = () => {
  return (
    <div className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-black">
      <Header />

      {/* Main Content Area */}
      <div className="relative z-10 w-full flex items-center justify-center flex-1">
        
        {/* Fullscreen Image */}
        <div className="relative w-full h-screen overflow-hidden">
          
          {/* Background Image */}
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage:
                'url("/WhatsApp Image 2026-06-02 at 08.45.01.jpeg")',
            }}
          />

          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/70" />

          {/* Text Overlay */}
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-4">
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white font-serif uppercase drop-shadow-lg">
            </h2>

            <div className="w-16 md:w-24 lg:w-32 h-[3px] bg-[#c4a661] mt-6" />
          </div>

        </div>
      </div>
    </div>
  );
};

export default OurTeamHero;