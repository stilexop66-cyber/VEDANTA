/* eslint-disable no-unused-vars */
import React from "react";
import Header from "../../components/layout/Header";

const OurTeamHero = () => {
  return (
    <div className="bg-black  w-full">
      <Header />

      <div className="w-full pt-20 sm:pt-24 md:pt-20">
        <div className="w-full overflow-hidden">

          {/* Mobile Image */}
          <img
            src="/WhatsApp Image 2026-06-10 at 15.42.33.jpeg"
            alt="Our Team Mobile"
            className="block md:hidden w-full h-auto object-contain"
          />

          {/* Desktop / Tablet Image */}
          <img
            src="/WhatsApp Image 2026-07-10 at 12.53.48.jpeg"
            alt="Our Team Desktop"
            className="hidden md:block w-full h-auto object-contain"
          />
 
        </div>
      </div>
    </div>
  );
};

export default OurTeamHero;