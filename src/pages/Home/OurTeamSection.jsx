/* eslint-disable no-unused-vars */
import React from "react";
import { ArrowUpRight } from "lucide-react";

const TeamCard = ({ imageSrc, name, role }) => {
  return (
    <div className="relative w-full max-w-85 md:max-w-95 mx-auto mb-20 md:mb-24">
      {/* Image Container */}
      <div className="w-full h-80 sm:h-87.5 md:h-90 bg-gray-200 overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.05)] border-[6px] border-white">
        <img
          src={imageSrc}
          alt={name}
          className="w-full h-full object-cover object-top filter brightness-95 contrast-105"
        />
      </div>

      {/* Overlapping Label Card */}
      <div className="absolute left-1/2 -translate-x-1/2 -bottom-10 md:-bottom-12 w-[85%] bg-white py-5 px-4 shadow-[0_15px_40px_-5px_rgba(0,0,0,0.06)] flex flex-col items-center justify-center">
        <h4 className="  text-[18px] md:text-[20px] font-bold tracking-wide text-black mb-1">
          {name}
        </h4>
        <p className="  text-[13px] md:text-[14px] text-gray-500 font-light">
          {role}
        </p>
      </div>
    </div>
  );
};

const OurTeamSection = () => {
  return (
    <section className="relative w-full max-w-250 mx-auto py-16 px-4 md:px-8 mt-8 bg-[#FAFAFA] overflow-hidden">
      {/* Title */}
      <div className="flex flex-col items-center mb-16 md:mb-20">
        <div className="text-center relative">
          <h2 className="text-[38px] sm:text-[44px] md:text-[48px]   tracking-normal uppercase leading-none text-[#a08552]">
            OUR <span className="text-black font-bold">TEAM</span>
          </h2>
          <div className="w-21.25 h-0.5 bg-[#a08552] absolute -bottom-4 left-0"></div>
        </div>
      </div>

      {/* Main Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-14 items-start">
        {/* Left Column */}
        <div className="flex flex-col pt-2 items-center">
          <TeamCard
            imageSrc="https://plus.unsplash.com/premium_photo-1661645053075-8fb9a888c3a9?auto=format&fit=crop&w=800&q=80"
            name="B.S. Sarkar"
            role="Founder"
          />
          <TeamCard
            imageSrc="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=800&q=80"
            name="J.U. Khadim"
            role="Founder"
          />
        </div>

        {/* Right Column */}
        <div className="flex flex-col items-center md:items-start md:-mt-8">
          {/* Text Box */}
          <div className="w-full max-w-85 md:max-w-105 mb-14 bg-white shadow-[0_8px_30px_rgba(0,0,0,0.06)] p-6 md:p-8 border border-gray-50 mx-auto md:mx-0">
            <p className="text-gray-600 text-[12.5px] md:text-[13px] leading-[1.8]   font-light tracking-wide m-0">
              Vedanta Legal Associates is a full-service law firm committed to
              excellence, integrity, and justice. The firm was established with
              a vision to provide high-quality legal services while promoting
              legal awareness among the people. The firm has three Founders and
              two Co-Founders. The Founders are Shri Bijoy Sarkar, Shri Debesh
              Chandra Ray, and Shri Jamiar Hossain Khadim. The Co-Founders are
              Shri Kuntal Ghosh and Smti. Sangita Biswas.
            </p>
          </div>

          <TeamCard
            imageSrc="https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&w=800&q=80"
            name="D.C. Roy"
            role="Founder"
          />

          {/* CTA Area */}
          <div className="flex flex-col gap-4 -mt-2.5 md:mt-2 text-center md:text-left mx-auto md:mx-0 max-w-85 md:max-w-none">
            <h3 className="  italic font-bold text-[24px] md:text-[28px] leading-[1.2] text-[#444] tracking-tight">
              Want To Check out Our Entire Team ?
            </h3>
            <div className="mt-2 flex justify-center md:justify-start">
              <button className="bg-[#997f48] text-white px-5 py-2 text-xs   flex items-center justify-center gap-2 hover:bg-[#856d39] transition-colors group shadow-sm font-medium tracking-wide">
                View All
                <span className="bg-white rounded-full p-0.5 ml-1 flex items-center justify-center text-[#997f48] group-hover:text-[#856d39]">
                  <ArrowUpRight size={13} strokeWidth={3} />
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurTeamSection;
