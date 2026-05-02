/* eslint-disable no-unused-vars */
import React from "react";
import ClientsAndContactSection from "../Home/ClientsAndContactSection";
import { ArrowUpRight } from "lucide-react";

// --- Shared SVG Icons ---
const MapPinIcon = () => (
  <svg className="w-5 h-5 fill-current text-black" viewBox="0 0 24 24">
    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
  </svg>
);

const ConnectionIcon = () => (
  <svg className="w-5 h-5 fill-current text-black" viewBox="0 0 24 24">
    <path d="M12 3C7.95 3 4.21 5.34 2.46 8.71l1.83 1.06C5.64 7.08 8.63 5.1 12 5.1c3.37 0 6.36 1.98 7.71 4.67l1.83-1.06C19.79 5.34 16.05 3 12 3zm0 5c-2.43 0-4.52 1.35-5.54 3.32l1.81 1.05C8.94 11.13 10.37 10.1 12 10.1c1.63 0 3.06 1.03 3.73 2.27l1.81-1.05C16.52 9.35 14.43 8 12 8zm0 5c-.73 0-1.38.41-1.73 1.02l1.73 1 1.73-1c-.35-.61-1-1.02-1.73-1.02z" />
  </svg>
);

const MailIcon = () => (
  <svg className="w-5 h-5 fill-current text-black" viewBox="0 0 24 24">
    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
  </svg>
);

const PhoneIcon = () => (
  <svg className="w-5 h-5 fill-current text-black" viewBox="0 0 24 24">
    <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
  </svg>
);

const ExternalLinkArrow = () => (
  <svg
    className="w-3 h-3 text-gray-400"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <line x1="7" y1="17" x2="17" y2="7"></line>
    <polyline points="7 7 17 7 17 17"></polyline>
  </svg>
);

// --- Small Social Link Component ---
const SocialLink = ({ href, icon, name }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    aria-label={`Visit ${name}`}
    className="flex items-center gap-2 group w-fit"
  >
    <span
      className="w-4 h-4 text-gray-500 group-hover:text-black transition-colors flex items-center justify-center"
      aria-hidden="true"
    >
      {icon}
    </span>
    <span className="text-gray-500 font-light text-sm group-hover:text-black transition-colors">
      {name}
    </span>
    <ExternalLinkArrow />
  </a>
);

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

        {/* --- Your Form Area --- */}
        <div className="w-full mb-8">
          {/* Form Container */}
          <div className="w-full max-w-230 mx-auto mt-10 md:mt-12 bg-white shadow-[0_15px_50px_-15px_rgba(0,0,0,0.1)] border border-gray-50 p-8 md:p-14 lg:p-18">
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

        {/* --- Bottom Information Cards --- */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Left Column: Address & Social Media */}
          <div className="bg-white p-8 md:p-10 flex flex-col gap-10 shadow-[0_4px_30px_rgb(0,0,0,0.02)] border border-gray-50">
            {/* Address */}
            <div>
              <div className="flex items-center gap-3 mb-3">
                <MapPinIcon />
                <h3 className="text-lg font-serif font-bold tracking-wider text-black uppercase mt-1">
                  Address
                </h3>
              </div>
              <p className="text-gray-500 font-light text-[15px] ml-8">
                Kolkata, West Bengal
              </p>
            </div>

            {/* Social Media */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <ConnectionIcon />
                <h3 className="text-lg font-serif font-bold tracking-wider text-black uppercase mt-1">
                  Social Media
                </h3>
              </div>

              <div className="grid grid-cols-2 gap-y-4 gap-x-2 ml-8">
                {/* Simplified SVG icons for social links */}
                <SocialLink
                  href="https://instagram.com"
                  name="Instagram"
                  icon={
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                    </svg>
                  }
                />
                <SocialLink
                  href="https://facebook.com"
                  name="Facebook"
                  icon={
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                    </svg>
                  }
                />
                <SocialLink
                  href="https://wa.me/918697114527"
                  name="Whatsapp"
                  icon={
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12.031 21.5c-1.618 0-3.197-.417-4.582-1.21l-5.132 1.346 1.368-5.006c-.87-1.428-1.33-3.064-1.33-4.757 0-5.166 4.2-9.366 9.366-9.366 5.165 0 9.366 4.2 9.366 9.366s-4.201 9.366-9.366 9.366h.31zm-4.707-3.415c1.33.789 2.88 1.206 4.466 1.206 4.885 0 8.857-3.973 8.857-8.857 0-4.885-3.972-8.857-8.857-8.857-4.886 0-8.857 3.972-8.857 8.857 0 1.62.434 3.193 1.258 4.549l-1.077 3.941 4.032-1.058zm6.541-4.764c-.304-.152-1.799-.888-2.078-.989-.278-.101-.482-.152-.685.152-.203.304-.785.989-.962 1.192-.178.203-.355.228-.659.076-.304-.152-1.285-.473-2.449-1.511-.905-.808-1.516-1.808-1.694-2.112-.178-.304-.019-.468.133-.62.137-.137.304-.355.456-.532.152-.178.203-.304.304-.507.101-.203.051-.38-.025-.532-.076-.152-.685-1.652-.938-2.261-.247-.594-.497-.514-.685-.523-.178-.009-.38-.009-.583-.009-.203 0-.532.076-.811.38-.278.304-1.065 1.04-1.065 2.535s1.09 2.94 1.242 3.143c.152.203 2.143 3.271 5.19 4.586.724.312 1.288.498 1.728.638.726.231 1.386.198 1.905.12.583-.087 1.799-.735 2.052-1.444.253-.709.253-1.318.178-1.444-.076-.126-.278-.202-.583-.354z" />
                    </svg>
                  }
                />
                <SocialLink
                  href="https://linkedin.com"
                  name="LinkedIn"
                  icon={
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
                    </svg>
                  }
                />
              </div>
            </div>
          </div>

          {/* Right Column: Stacked Email & Phone */}
          <div className="flex flex-col gap-6">
            {/* Email Card */}
            <div className="bg-white p-8 md:px-10 shadow-[0_4px_30px_rgb(0,0,0,0.02)] border border-gray-50 flex-1 flex flex-col justify-center">
              <div className="flex items-center gap-3 mb-3">
                <MailIcon />
                <h3 className="text-lg font-serif font-bold tracking-wider text-black uppercase mt-1">
                  Email
                </h3>
              </div>
              <p className="text-gray-500 font-light text-[15px] ml-8">
                connectsattik@gmail.com
              </p>
            </div>

            {/* Phone Card */}
            <div className="bg-white p-8 md:px-10 shadow-[0_4px_30px_rgb(0,0,0,0.02)] border border-gray-50 flex-1 flex flex-col justify-center">
              <div className="flex items-center gap-3 mb-3">
                <PhoneIcon />
                <h3 className="text-lg font-serif font-bold tracking-wider text-black uppercase mt-1">
                  Phone
                </h3>
              </div>
              <p className="text-gray-500 font-light text-[15px] ml-8">
                +91 8697114527
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
