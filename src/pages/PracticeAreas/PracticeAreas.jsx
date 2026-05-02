/* eslint-disable no-unused-vars */
import React from "react";
import PracticeAreasHero from "./PracticeAreasHero";
import PracticeAreasContent from "./PracticeAreasContent";
import Footer from "../../components/layout/Footer";

export default function PracticeAreas() {
  return (
    <div className="  text-gray-800 bg-[#FAFAFA] min-h-screen flex flex-col">
      {/* 1. HERO SECTION */}
      <PracticeAreasHero />

      {/* 2. CONTENT SECTION */}
      <PracticeAreasContent />

      {/* FOOTER */}
      <Footer />
    </div>
  );
}
