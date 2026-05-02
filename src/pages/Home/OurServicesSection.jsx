/* eslint-disable no-unused-vars */
import React from "react";
import { Check } from "lucide-react";
import HomeOurServicesBG from "../../assets/HomeOurServicesBG.png";
import HomeOurServicesImg1 from "../../assets/HomeOurServicesImg1.png";
import HomeOurServicesImg2 from "../../assets/HomeAbout3.png";

const leftServices = [
  "Civil Litigation & Dispute Resolution",
  "Criminal Litigation & Defense",
  "Real Estate & Property Law",
  "Family & Matrimonial Law",
  "Corporate & Commercial Law",
  "Taxation & GST",
];

const rightServices = [
  "Intellectual Property Rights",
  "Banking, Finance & Recovery",
  "Cyber Crime & Technology Law",
  "Consumer Protection Law",
  "Constitutional Law & Public Interest Litigation (PIL)",
  "Right to Information (RTI)",
  "Service & Employment Law",
];

const ServiceItem = ({ title }) => (
  <div className="bg-white px-6 py-4 flex items-center gap-5 shadow-sm rounded-sm max-w-125">
    <div className="bg-black text-white rounded-full p-0.75 shrink-0 flex items-center justify-center w-6.5 h-6.5">
      <Check size={18} strokeWidth={3.5} />
    </div>
    <span className="text-black   text-[13px] md:text-[14px] font-medium tracking-wide">
      {title}
    </span>
  </div>
);

const OurServicesSection = () => {
  return (
    <section className="relative w-full py-24 mt-4">
      {/* Background Image with dark overlay */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center bg-fixed"
        style={{
          backgroundImage:
            `url(${HomeOurServicesBG})`, // Classic court building background
        }}
      >
        <div className="absolute inset-0 bg-[#1a120c]/45 mix-blend-multiply"></div>
        <div className="absolute inset-0 bg-black/45"></div>
      </div>

      <div className="relative z-10 max-w-275 mx-auto px-4 md:px-8">
        {/* Title */}
        <div className="flex flex-col items-center mb-16">
          <h2 className="text-[40px] sm:text-[45px] md:text-[52px]   font-bold tracking-wide uppercase leading-none flex gap-3 text-[#a08552]">
            OUR <span className="text-white">SERVICES</span>
          </h2>
          <div className="relative w-full flex justify-center mt-2">
            {/* Center the line under 'OUR' approximately */}
            <div className="w-21.25 h-0.5 bg-[#a08552] mr-40 md:mr-52.5"></div>
          </div>
        </div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-x-12 md:gap-y-8">
          {/* Left Column */}
          <div className="flex flex-col gap-4">
            {leftServices.map((service, index) => (
              <ServiceItem key={index} title={service} />
            ))}

            {/* Bottom Image for Left Column */}
            <div className="w-full max-w-125 h-62.5 md:h-80 mt-4 shadow-xl overflow-hidden border-2 border-white/5">
              <img
                src={HomeOurServicesImg1}
                alt="Courtroom interior with desks"
                className="w-full h-full object-cover object-center filter brightness-[0.85] contrast-125"
              />
            </div>
          </div>

          {/* Right Column */}
          <div className="flex flex-col gap-4 lg:-mt-10">
            {/* Top Image for Right Column */}
            <div className="w-full max-w-125 h-62.5 md:h-80 mb-4 shadow-xl overflow-hidden border-2 border-white/5 z-20">
              <img
                src={HomeOurServicesImg2}
                alt="Courtroom desk with lamp"
                className="w-full h-full object-cover object-center filter brightness-90 sepia-[0.3]"
              />
            </div>

            {rightServices.map((service, index) => (
              <ServiceItem key={index} title={service} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurServicesSection;
