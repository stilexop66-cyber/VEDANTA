/* eslint-disable no-unused-vars */
import React from "react";
import FounderPhoto from "../../assets/FounderPhoto.png";
import FounderPhoto2 from "../../assets/FounderPhoto2.png";
import FounderPhoto3 from "../../assets/FounderPhoto3.png";

const foundersData = [
  {
    name: "B.S. Sarkar",
    role: "Founder",
    imageSrc: FounderPhoto,
    isTop: true,
  },
  // {
  //   name: "D.C. Roy",
  //   role: "Founder",
  //   imageSrc: FounderPhoto2,
  // },
  // {
  //   name: "J.U. Khadim",
  //   role: "Founder",
  //   imageSrc: FounderPhoto3,
  // },
];

const SocialIcon = ({ children }) => (
  <a
    href="#"
    className="w-7 h-7 flex items-center justify-center rounded-full border border-gray-300 text-gray-600 hover:text-[#A68A56] hover:border-[#A68A56] transition-colors"
  >
    {children}
  </a>
);

const FounderCard = ({ name, role, imageSrc }) => (
  <div className="bg-none flex flex-col items-center w-full max-w-125  mx-auto">
    <div className="w-full h-100 bg-gray-100 overflow-hidden">
      <img
        src={imageSrc}
        alt={name}
        className="w-full h-full object-cover object-top"
      />
    </div>
    <div className="pt-5 pb-0 flex flex-col items-center">
      <h3 className="text-2xl   font-bold text-white tracking-wide mb-0">
        {name}
      </h3>
      <p className="text-gray-100 font-light mb-5 tracking-wide">{role}</p>

      {/* Social Links */}

    </div>
  </div>
);

export default function FoundersSection() {
  return (
    <section className="bg-[#303030] pt-10 px-4 md:px-8  ">
      <div className="max-w-6xl mx-auto flex flex-col items-center">
        {/* Header Section */}
        <div className="text-center mb-10 flex flex-col items-center">
          <h2 className="text-3xl md:text-[32px]   tracking-widest flex items-center gap-3">
            <span className="font-bold text-[#e0e0e0] uppercase">Our</span>
            <span className="font-bold text-[#e0e0e0] uppercase relative">
               Founder
              {/* Gold Underline positioned under 'Founders' */}
              <span className="absolute -bottom-4 left-1/2 -translate-x-3/2 w-12 h-0.5 bg-[#A68A56]"></span>
            </span>
          </h2>
        </div>

        {/* Cards Grid/Layout */}
        <div className="w-full flex flex-col items-center gap-12">
          {/* Top Row (Single Card) */}
          <div className="w-full flex justify-center">
            {foundersData
              .filter((f) => f.isTop)
              .map((founder, index) => (
                <FounderCard key={index} {...founder} />
              ))}
          </div>

          {/* Bottom Row (Two Cards) */}
          <div className="w-full flex flex-col md:flex-row justify-center gap-8 md:gap-12">
            {foundersData
              .filter((f) => !f.isTop)
              .map((founder, index) => (
                <FounderCard key={index} {...founder} />
              ))}
          </div>
        </div>
      </div>
    </section>
  );
}
