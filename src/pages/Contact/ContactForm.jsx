/* eslint-disable no-unused-vars */
import React from "react";
import { ArrowUpRight } from "lucide-react";

export default function ContactForm() {
  return (
    <section className="bg-[#fafafa] min-h-screen py-20 px-4 md:px-8 font-sans">
      <div className="max-w-225 mx-auto flex flex-col items-center">
        {/* --- Header Section --- */}
        <div className="text-center mb-16 flex flex-col items-center">
          <h2 className="text-3xl md:text-[34px] font-serif tracking-widest flex items-center gap-3">
            <span className="font-bold text-black uppercase">Our Contact</span>
            <span className="font-bold text-[#A68A56] uppercase relative">
              Details
              {/* Gold Underline */}
              <span className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-14 h-0.5 bg-[#A68A56]"></span>
            </span>
          </h2>
        </div>

        {/* --- Form Area --- */}
        <div className="w-full max-w-[920px] mx-auto mb-20">
          <div className="w-full bg-white shadow-[0_15px_50px_-15px_rgba(0,0,0,0.1)] border border-gray-50 p-8 md:p-10 lg:p-12">
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

        {/* --- Address Area Below Form --- */}
        <div className="w-full max-w-[1000px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-14 px-4">
          {/* Kolkata */}
          <div className="flex flex-col items-start px-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-[7px] h-[7px] min-w-[7px] rounded-full bg-[#A68A56]"></div>
              <h3 className="text-[19px] font-serif font-medium text-[#A68A56] tracking-wide">
                Kolkata
              </h3>
            </div>
            <div className="text-black font-semibold text-[15px] mb-2 font-serif tracking-wide">
              Company Name (Kolkata)
            </div>
            <p className="text-gray-700 leading-[1.8] text-[15px] font-light">
              Kolkata Address details go here,<br />
              Some Street, Building Name,<br />
              Kolkata 700001,<br />
              West Bengal, India
            </p>
          </div>

          {/* Tripura */}
          <div className="flex flex-col items-start px-2 md:border-l border-gray-200/60 md:pl-12">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-[7px] h-[7px] min-w-[7px] rounded-full bg-[#A68A56]"></div>
              <h3 className="text-[19px] font-serif font-medium text-[#A68A56] tracking-wide">
                Tripura
              </h3>
            </div>
            <div className="text-black font-semibold text-[15px] mb-2 font-serif tracking-wide">
              Company Name (Tripura)
            </div>
            <p className="text-gray-700 leading-[1.8] text-[15px] font-light">
              Tripura Address details go here,<br />
              Some Street, Building Name,<br />
              Agartala 799001,<br />
              Tripura, India
            </p>
          </div>

          {/* Guwahati */}
          <div className="flex flex-col items-start px-2 pt-4 border-t border-gray-200/60">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-[7px] h-[7px] min-w-[7px] rounded-full bg-[#A68A56]"></div>
              <h3 className="text-[19px] font-serif font-medium text-[#A68A56] tracking-wide">
                Guwahati
              </h3>
            </div>
            <div className="text-black font-semibold text-[15px] mb-2 font-serif tracking-wide">
              Company Name (Guwahati)
            </div>
            <p className="text-gray-700 leading-[1.8] text-[15px] font-light">
              Guwahati Address details go here,<br />
              Some Street, Building Name,<br />
              Guwahati 781001,<br />
              Assam, India
            </p>
          </div>

          {/* Bangalore */}
          <div className="flex flex-col items-start px-2 pt-4 border-t md:border-l border-gray-200/60 md:pl-12">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-[7px] h-[7px] min-w-[7px] rounded-full bg-[#A68A56]"></div>
              <h3 className="text-[19px] font-serif font-medium text-[#A68A56] tracking-wide">
                Bangalore
              </h3>
            </div>
            <div className="text-black font-semibold text-[15px] mb-2 font-serif tracking-wide">
              Company Name (Bangalore)
            </div>
            <p className="text-gray-700 leading-[1.8] text-[15px] font-light">
              Bangalore Address details go here,<br />
              Some Street, Building Name,<br />
              Bangalore 560001,<br />
              Karnataka, India
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
