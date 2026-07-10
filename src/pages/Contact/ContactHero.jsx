/* eslint-disable no-unused-vars */
import React from "react";
import Header from "../../components/layout/Header";

const PracticeAreasHero = () => {
  return (
    <div className="w-full bg-black">
      <Header />

      {/* Space for fixed header */}
      <div className="pt-28 md:pt-32 lg:pt-20">
        {/* Mobile Image */}
        <img
          src="/WhatsApp Image 2026-06-10 at 15.37.23.jpeg"
          alt="Practice Areas Mobile"
          className="block md:hidden w-full h-auto"
        />

        {/* Desktop / Tablet Image */}
        <img
          src="/WhatsApp Image 2026-07-10 at 12.48.09.jpeg"
          alt="Practice Areas Desktop"
          className="hidden md:block w-full h-auto"
        />
      </div>
    </div>
  );
};

export default PracticeAreasHero;