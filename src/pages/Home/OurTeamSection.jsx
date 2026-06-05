/* eslint-disable no-unused-vars */
import React from "react";
import { ArrowUpRight } from "lucide-react";
import founder1 from "../../assets/FounderPhoto.png";
import CoFounderPhoto from "../../assets/CoFounder.png";
import CoFounder2 from "../../assets/FounderPhoto2.png";
import CoFounder3 from "../../assets/FounderPhoto3.png";
import CoFounder4 from "../../assets/CoFounder4.jpeg";
import CoFounder5 from "../../assets/M K Bose.jpeg";
// Mock data to generate the 3x3 grid (9 items total)
const teamMembers = [
  { id: 1, name: "B.S. Sarkar", imageSrc: founder1 },
  { id: 2, name: "Kuntal Ghosh", imageSrc: CoFounderPhoto },
  { id: 3, name: "D.C. Roy", imageSrc: CoFounder2 },
  { id: 4, name: "J.U. Khadim", imageSrc: CoFounder3 },
  { id: 5, name: "Sangita Biswas", imageSrc: CoFounder4 },
  { id: 6, name: "M K Bose", imageSrc: CoFounder5 },
  // { id: 7, name: "R. Chatterjee", imageSrc: founder1 },
  // { id: 8, name: "P. Banerjee", imageSrc: founder2 },
  // { id: 9, name: "M. Das", imageSrc: founder3 },
];

const OurTeamSection = () => {
  return (
      <section
          className="relative w-full bg-[#303030] pt-16 pb-13.5 md:pt-5 md:pb-2.5 px-4 sm:px-8 md:px-12 xl:px-24 overflow-hidden"
          aria-labelledby="team-heading"
      >
        {/* Top Header */}
        <div className="flex flex-col items-center mb-12 md:mb-16">
          <div className="text-center relative">
            <h2
                id="team-heading"
                className="text-[32px] sm:text-[40px] md:text-[48px] tracking-normal uppercase leading-none text-[#e0e0e0] font-extrabold"
            >
              CO-FOUNDER'S & <span className="text-[#e0e0e0] font-normal">MANAGING PARTNER'S</span>
            </h2>
            <div className="w-24 h-1 bg-[#a08552] absolute -bottom-4 left-1/2 -translate-x-1/2"></div>
          </div>
        </div>

        <div className="max-w-350 mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">

          {/* Left Column: 3x3 Image Grid (9 Columns/Boxes as requested) */}
          <div className="w-full lg:col-span-7">
            <div className="flex flex-wrap justify-center gap-4 md:gap-6">
              {teamMembers.map((member) => (
                  <div key={member.id} className="w-[calc(50%-8px)] sm:w-[calc(33.333%-11px)] md:w-[calc(33.333%-16px)] flex flex-col group cursor-pointer">
                    {/* Image Box */}
                    <div className="w-full rounded-4xl aspect-3/4 bg-gray-200 overflow-hidden relative border border-gray-200 shadow-sm transition-shadow duration-300 group-hover:shadow-md">
                      <img
                          src={member.imageSrc}
                          // alt={member.name}
                          className="w-full h-full object-cover object-top filter brightness-95 contrast-105 group-hover:scale-105 transition-transform duration-500"
                          loading="lazy"
                      />
                      {/* Subtle overlay on hover */}
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300"></div>
                    </div>
                    {/* Name Label */}
                    <div className="mt-3 text-center">
                      <h4 className="text-[15px] md:text-[17px] font-bold tracking-wide text-[#e0e0e0] font-serif">
                        {member.name}
                      </h4>
                    </div>
                  </div>
              ))}
            </div>
          </div>

          {/* Right Column: Text block and Stats (Dark Theme) */}
          <article className="lg:h-auto w-full lg:col-span-5 bg-none flex flex-col justify-between p-5 md:p-10 lg:p-7 ">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold tracking-wide text-white uppercase mb-2">
                Our Team
              </h3>
              <div className="w-12 h-0.75 bg-[#C4A661] mb-6"></div>

              <div className="space-y-4 text-[#e0e0e0] text-[14.5px] md:text-[18px] lg:text-[22px]  leading-[1.6]  font-light tracking-normal text-justify ">
                <p>
                  At Vedanta Legal Associates, we pride ourselves on having a strong, unified
                  team of lawyers, junior associates, law clerks, and support staff working together
                  with integrity and dedication.

                  Our partners and senior lawyers bring rich experience from multiple domains,
                  enabling us to deliver balanced and effective legal solutions. We believe in a
                  collaborative approach where the entire team works cohesively to meet the unique
                  requirements of each case.

                  This teamwork allows us to serve our clients with greater efficiency and depth,
                  always guided by our core philosophy of "Balance in Justice".
                </p>
              </div>
            </div>

            <div className="mt-1">
              {/* Firm Statistics */}
              <div className="grid grid-cols-3 gap-4 border-t border-gray-700/50 pt-3 mb-7.5">
                <div className="text-center flex flex-col items-center">
                  <span className="text-2xl md:text-2xl font-bold text-[#C4A661]">200+</span>
                  <span className="text-[11px] md:text-xs text-gray-400 uppercase tracking-widest mt-1">Lawyers</span>
                </div>
                <div className="text-center flex flex-col items-center border-l border-gray-700/50">
                  <span className="text-2xl md:text-2xl font-bold text-[#C4A661]">6</span>
                  <span className="text-[11px] md:text-xs text-gray-400 uppercase tracking-widest mt-1">Cities</span>
                </div>
                <div className="text-center flex flex-col items-center border-l border-gray-700/50">
                  <span className="text-2xl md:text-2xl font-bold text-[#C4A661]">70+</span>
                  <span className="text-[11px] md:text-xs text-gray-400 uppercase tracking-widest mt-1">Staff</span>
                </div>
              </div>

              {/* CTA Button */}
              <div className="flex justify-center lg:justify-start">
                <button className="w-full lg:w-auto bg-[#C4A661] text-black px-8 py-2 text-sm md:text-[15px] flex items-center justify-center gap-3 hover:bg-[#b09557] transition-colors group font-bold tracking-widest uppercase whitespace-nowrap">
                  View Team Members
                  <span className="bg-black/10 rounded-full p-1 flex items-center justify-center text-black group-hover:translate-x-1 transition-transform">
                  <ArrowUpRight size={16} strokeWidth={2.5} />
                </span>
                </button>
              </div>
            </div>
          </article>

        </div>
      </section>
  );
};

export default OurTeamSection;