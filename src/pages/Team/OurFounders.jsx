/* eslint-disable no-unused-vars */
import React from "react";

const foundersData = [
  {
    name: "B.S. Sarkar",
    role: "Founder",
    imageSrc: "https://via.placeholder.com/400x500?text=B.S.+Sarkar", // Replace with actual image path
    isTop: true,
  },
  {
    name: "D.C. Roy",
    role: "Founder",
    imageSrc: "https://via.placeholder.com/400x500?text=D.C.+Roy", // Replace with actual image path
  },
  {
    name: "J.U. Khadim",
    role: "Founder",
    imageSrc: "https://via.placeholder.com/400x500?text=J.U.+Khadim", // Replace with actual image path
  },
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
  <div className="bg-white flex flex-col items-center w-full max-w-125 shadow-[0_8px_30px_rgb(0,0,0,0.08)] mx-auto">
    <div className="w-full h-100 bg-gray-100 overflow-hidden">
      <img
        src={imageSrc}
        alt={name}
        className="w-full h-full object-cover object-top"
      />
    </div>
    <div className="pt-8 pb-10 flex flex-col items-center">
      <h3 className="text-2xl   font-bold text-gray-900 tracking-wide mb-1">
        {name}
      </h3>
      <p className="text-gray-500 font-light mb-5 tracking-wide">{role}</p>

      {/* Social Links */}
      <div className="flex gap-3">
        <SocialIcon>
          {/* Instagram Icon */}
          <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
          </svg>
        </SocialIcon>
        <SocialIcon>
          {/* LinkedIn Icon */}
          <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
          </svg>
        </SocialIcon>
        <SocialIcon>
          {/* Facebook Icon */}
          <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
          </svg>
        </SocialIcon>
      </div>
    </div>
  </div>
);

export default function FoundersSection() {
  return (
    <section className="bg-[#FAFAFA] py-20 px-4 md:px-8  ">
      <div className="max-w-6xl mx-auto flex flex-col items-center">
        {/* Header Section */}
        <div className="text-center mb-16 flex flex-col items-center">
          <h2 className="text-3xl md:text-[32px]   tracking-widest flex items-center gap-3">
            <span className="font-bold text-gray-900 uppercase">Our</span>
            <span className="font-bold text-[#A68A56] uppercase relative">
              Founders
              {/* Gold Underline positioned under 'Founders' */}
              <span className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-12 h-0.5 bg-[#A68A56]"></span>
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
