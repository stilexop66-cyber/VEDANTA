/* eslint-disable no-unused-vars */
import React from "react";
import Header from "../../components/layout/Header";

const PracticeAreasHero = () => {
  return (
    <div className="bg-black ">
      {/* Header */}
      <Header />

      {/* Hero Banner */}
      <section className="w-full">
        
        {/* Mobile Banner */}
        <img
          src="/WhatsApp Image 2026-06-10 at 15.40.16.jpeg"
          alt="Practice Areas Mobile"
          className="
            block
            md:hidden
            w-full
            h-auto
            object-contain
          "
        />

        {/* Desktop / Tablet Banner */}
        <img
          src="/WhatsApp Image 2026-07-10 at 12.53.37.jpeg"
          alt="Practice Areas Desktop"
          className="
            hidden
            md:block
            w-full
            h-auto
            object-contain
          "
        />
      </section>
    </div>
  );
};

export default PracticeAreasHero;