/* eslint-disable no-unused-vars */
import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaXTwitter,
} from "react-icons/fa6";
import { Heart } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-none   relative overflow-hidden">
      <div className="absolute inset-0 bg-linear-to-b from-gray-500 to-white pointer-events-none"></div>
      {/* Top Main Section */}
      <div className="pt-20 lg:pt-20 pb-0 px-6 lg:px-12 max-w-350 mx-auto w-full relative z-10">
        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-0 xl:gap-0 mb-0">
          {/* Column 1 - Logo & Newsletter */}
          <div className="flex flex-col pr-4">
            {/* Logo Row */}
            <div className="flex items-center gap-3 mb-10">
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-full overflow-hidden shrink-0">
                {/* Coin placeholder mimicking mockup */}
                <img
                  src="/favicon.svg"
                  alt="Vedanta Legal Logo"
                  className="w-full h-full object-cover"
                />
              </div>
              <h2 className="text-black text-[20px] md:text-[22px]   font-bold tracking-wide">
                VEDANTA
              </h2>
            </div>

            {/* Newsletter */}
            <h4 className="text-black font-medium mb-4 text-[14px] md:text-[15px]">
              Subscribe to Newsletter
            </h4>
            <div className="w-full max-w-[320px] relative flex items-center bg-transparent border border-gray-600 rounded-full p-0.75 mb-12">
              <input
                type="email"
                placeholder="Email Address"
                className="bg-transparent text-[12px] md:text-[13px] px-4 py-2 focus:outline-none flex-1 text-black placeholder:text-gray-300 w-full min-w-0"
              />
              <button className="bg-black text-white px-5 md:px-6 py-2 rounded-full text-[12px] md:text-[13px] font-semibold hover:bg-gray-200 transition-colors shrink-0">
                Submit
              </button>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-4">
              <a
                href="#"
                className="bg-black text-white p-1.5 md:p-2 rounded-sm hover:bg-gray-200 transition-colors flex items-center justify-center"
              >
                <FaXTwitter size={16} />
              </a>
              <a
                href="#"
                className="bg-black text-white p-1.5 md:p-2 rounded-smver:bg-gray-200 transition-colors flex items-center justify-center"
              >
                <FaFacebookF size={16} />
              </a>
              <a
                href="#"
                className="bg-black text-white p-1.5 md:p-2 rounded-sm hover:bg-gray-200 transition-colors flex items-center justify-center"
              >
                <FaInstagram size={16} />
              </a>
              <a
                href="#"
                className="bg-black text-white p-1.5 md:p-2 rounded-smver:bg-gray-200 transition-colors flex items-center justify-center"
              >
                <FaLinkedinIn size={16} />
              </a>
            </div>
          </div>

          {/* Column 2 - Pages */}
          <div className="lg:pl-10">
            <h3 className="text-black   text-[18px] md:text-[20px] mb-6 md:mb-8 font-normal tracking-wide">
              Legal
            </h3>
           <ul className="space-y-4 md:space-y-5 text-[13px] font-light text-black">
              <li>
                <a
                  href="#"
                  className="hover:text-white transition-colors block max-w-55ing-tight"
                >
                  Consumer Protection
                  <br className="hidden md:block" /> Law
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-white transition-colors block max-w-60 leading-tight"
                >
                  Constitutional Law &<br className="hidden md:block" /> Public
                  Interest
                  <br className="hidden md:block" /> Litigation (PIL)
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-white transition-colors block max-w-50 leading-tight"
                >
                  Family & Matrimonial
                  <br className="hidden md:block" /> Law
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-white transition-colors block max-w-50"
                >
                  Taxation & GST
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3 - about */}
          <div className="lg:ml-[-5%] xl:ml-[-10%]">
            <h3 className="text-black   text-[18px] md:text-[20px] mb-6 md:mb-8 font-normal tracking-wide">
              About
            </h3>
            <ul className="space-y-4 md:space-y-5 text-[13px] font-light text-black">
              <li>
                <a
                  href="#"
                  className="hover:text-white transition-colors block max-w-50 leading-tight"
                >
                  Civil Litigation &<br className="hidden md:block" /> Dispute
                  Resolution
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-white transition-colors block max-w-50 leading-tight"
                >
                  Criminal Litigation &<br className="hidden md:block" />{" "}
                  Defense
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-white transition-colors block max-w-50ing-tight"
                >
                  Real Estate & Property
                  <br className="hidden md:block" /> Law
                </a>
              </li>
              
            </ul>
          </div>

          {/* Column 4 - legal */}
          <div className="lg:ml-[-5%] xl:ml-[-10%] mt-4 md:mt-0">
            <h3 className="text-black   text-[18px] md:text-[20px] mb-6 md:mb-8 font-normal tracking-wide ">
              Work
            </h3>

            <ul className="space-y-4 md:space-y-5 text-[13px] font-light text-black">
              <li>
                <a
                  href="#"
                  className="hover:text-white transition-colors block max-w-55 leading-tight"
                >
                  Intellectual Property
                  <br className="hidden md:block" /> Rights
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-white transition-colors block max-w-55 leading-tight"
                >
                  Banking, Finance &<br className="hidden md:block" /> Recovery
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-white transition-colors block max-w-55 leading-tight"
                >
                  Cyber Crime &<br className="hidden md:block" /> Technology Law
                </a>
              </li>
            </ul>
          </div>          
        </div>

        {/* GIGANTIC FADING TEXT SECTION */}
        {/* Adjusted to fade out perfectly into the black background at the bottom. */}
        <div className="w-full flex justify-center items-center mt-0 pb-0 md:pb-0 pointer-events-none select-none relative h-45 sm:h-55 md:h-65 lg:h-87.5 ">
          <h1
            className="absolute bottom-[-10%] lg:top-[20%] text-[28vw] sm:text-[20vw] md:text-[24vw] lg:text-[200px] xl:text-[200px]   font-normal text-transparent bg-clip-text leading-none tracking-tighter m-0 p-0 text-center w-fit "
            style={{
              backgroundImage:
                "linear-gradient(to bottom, #d4d4d4 0%, #3a3a3a 40%, black 75%)",
            }}
          >
            VEDANTA
          </h1>
        </div>

        {/* FOOTER BOTTOM BAR */}
        <div className="border-t border-[#333] pt-6 md:pt-8 pb-4 flex flex-col sm:flex-row justify-between items-center gap-4 text-[12px] md:text-[13px] text-gray-400 font-light mx-auto w-full relative z-20">
          <p>© 2026 Vedanta. All rights reserved.</p>
          <div className="flex items-center justify-center gap-1.5">
            <p>
              Built With Love By{" "}
              <span className="font-bold text-black tracking-wide ml-1">
                <a
                  href="https://crtedge.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Createdge
                </a>
              </span>
            </p>
            <Heart size={13} className="text-[#ff4b4b] fill-[#ff4b4b] ml-0.5" />
          </div>
        </div>
      </div>
    </footer>
  );
}
