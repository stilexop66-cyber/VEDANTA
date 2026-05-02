/* eslint-disable no-unused-vars */
import React from "react";
import {
  ArrowUpRight,
  Hexagon,
  Component,
  Blocks,
  Combine,
  Cpu,
  Box,
  LayoutGrid,
  LayoutTemplate,
  Layers,
} from "lucide-react";

const LogoItem = ({ Icon, text }) => (
  <div className="flex flex-col items-center justify-center opacity-70 hover:opacity-100 transition-all duration-300 w-27.5 sm:w-30 md:w-37.5">
    <Icon className="w-12 h-12 md:w-14 md:h-14 text-[#6c757d] mb-2 stroke-[1.5]" />
    <span className="text-[10px] md:text-[11px]   font-bold tracking-[0.15em] text-[#6c757d] uppercase">
      {text}
    </span>
    <span className="text-[6.5px] md:text-[7px]   text-gray-400 tracking-[0.2em] uppercase mt-0.5">
      Tag Line Here
    </span>
  </div>
);

const ClientsAndContactSection = () => {
  return (
    <section className="relative w-full py-16 md:py-24 bg-white overflow-visible mt-4">
      <div className="max-w-300 mx-auto px-4 md:px-8">
        {/* OUR CLIENTS SECTION */}
        <div className="flex flex-col items-center mb-4 md:mb-8">
          <div className="relative inline-block text-center mb-16 md:mb-20">
            <h2 className="text-[38px] sm:text-[44px] md:text-[48px]   tracking-normal uppercase leading-none text-[#a08552]">
              OUR <span className="text-black font-bold">CLIENTS</span>
            </h2>
            <div className="w-21.25 h-0.75 bg-[#a08552] absolute -bottom-5 left-[2%] md:left-[5%]"></div>
          </div>

          <div className="w-full flex flex-col items-center justify-center gap-10 md:gap-14 px-2">
            {/* Top row of logos - 5 items */}
            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 lg:gap-20">
              <LogoItem Icon={Blocks} text="Company" />
              <LogoItem Icon={Hexagon} text="Company" />
              <LogoItem Icon={Component} text="Company" />
              <LogoItem Icon={Layers} text="Company" />
              <LogoItem Icon={LayoutGrid} text="Company" />
            </div>

            {/* Bottom row of logos - 4 items */}
            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 lg:gap-20">
              <LogoItem Icon={Combine} text="Company" />
              <LogoItem Icon={Cpu} text="Company" />
              <LogoItem Icon={Box} text="Company" />
              <LogoItem Icon={LayoutTemplate} text="Company" />
            </div>
          </div>
        </div>

        <div className="w-full  bg-gray-100 my-16 md:my-28"></div>

        {/* CONTACT US FORM SECTION */}
        <div className="flex flex-col items-center mb-6">
          <div className="relative inline-block text-center">
            <h2 className="text-[38px] sm:text-[44px] md:text-[48px]   tracking-normal uppercase leading-none text-[#a08552]">
              CONTACT <span className="text-black font-bold">US FORM</span>
            </h2>
            <div className="w-35 h-0.75 bg-[#a08552] absolute -bottom-5 left-0 md:left-[2%]"></div>
          </div>

          <h3 className="mt-14 md:mt-16 text-[20px] md:text-[24px]   italic text-gray-700 tracking-wide text-center px-4">
            Let us know how we can help you better ..
          </h3>
        </div>

        {/* Form Container */}
        <div className="w-full max-w-212.5 mx-auto mt-10 md:mt-12 bg-white shadow-[0_15px_50px_-15px_rgba(0,0,0,0.1)] border border-gray-50 p-8 md:p-14 lg:p-18">
          <form className="flex flex-col w-full">
            {/* Name Field */}
            <div className="mb-6 md:mb-8">
              <label
                htmlFor="name"
                className="block   font-bold text-[14px] md:text-[15px] tracking-wide text-black mb-3"
              >
                NAME
              </label>
              <input
                type="text"
                id="name"
                placeholder="abc"
                className="w-full border border-gray-200 outline-none focus:border-[#a08552] transition-colors py-3 md:py-3.5 px-4 text-[14px]   font-light placeholder:text-gray-400"
              />
            </div>

            {/* Phone Number Field */}
            <div className="mb-6 md:mb-8">
              <label
                htmlFor="phone"
                className="block   font-bold text-[14px] md:text-[15px] tracking-wide text-black mb-3"
              >
                PHONE NUMBER
              </label>
              <input
                type="tel"
                id="phone"
                placeholder="abc"
                className="w-full border border-gray-200 outline-none focus:border-[#a08552] transition-colors py-3 md:py-3.5 px-4 text-[14px]   font-light placeholder:text-gray-400"
              />
            </div>

            {/* Email Field */}
            <div className="mb-6 md:mb-8">
              <label
                htmlFor="email"
                className="block   font-bold text-[14px] md:text-[15px] tracking-wide text-black mb-3"
              >
                EMAIL
              </label>
              <input
                type="email"
                id="email"
                placeholder="abc"
                className="w-full border border-gray-200 outline-none focus:border-[#a08552] transition-colors py-3 md:py-3.5 px-4 text-[14px]   font-light placeholder:text-gray-400"
              />
            </div>

            {/* Feedback Field */}
            <div className="mb-8 md:mb-12">
              <label
                htmlFor="feedback"
                className="block   font-bold text-[14px] md:text-[15px] tracking-wide text-black mb-3"
              >
                FEEDBACK
              </label>
              <textarea
                id="feedback"
                placeholder="let us know..."
                className="w-full border border-gray-200 outline-none focus:border-[#a08552] transition-colors py-4 px-4 text-[14px]   font-light placeholder:text-gray-400 min-h-35 md:min-h-40 resize-none"
              ></textarea>
            </div>

            {/* Submit Button */}
            <div>
              <button
                type="button"
                className="bg-[#997f48] text-white px-7 md:px-8 py-2.5 md:py-3 text-[14px]   font-medium hover:bg-[#856d39] transition-colors inline-flex items-center justify-center gap-2 group shadow-sm tracking-wide"
              >
                Submit
                <span className="bg-white rounded-full p-0.5 ml-1 flex items-center justify-center text-[#997f48] group-hover:text-[#856d39]">
                  <ArrowUpRight size={14} strokeWidth={2.5} />
                </span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ClientsAndContactSection;
