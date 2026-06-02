/* eslint-disable no-unused-vars */
import React from "react";
import { ArrowUpRight } from "lucide-react";

const TeamJoinForm = () => {
  return (
    <section className="w-full bg-[#303030] pb-16 py-1 px-1 md:px-1 mt-0 ">
      <div className="w-full max-w-250 mx-auto bg-none shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-gray-50/50 p-8 md:p-14">
        <form className="space-y-6 md:space-y-8  ">
          {/* Name Field */}
          <div className="flex flex-col space-y-2">
            <label className="text-white font-bold uppercase tracking-wider text-[15px]">
              NAME
            </label>
            <input
              type="text"
              placeholder="abc"
              className="w-full border border-gray-200 px-4 py-3 bg-none text-gray-300 focus:outline-none focus:border-[#a08552]   text-sm font-light shadow-sm transition-colors"
            />
          </div>

          {/* Phone Field */}
          <div className="flex flex-col space-y-2">
            <label className="text-white font-bold uppercase tracking-wider text-[15px]">
              PHONE NUMBER
            </label>
            <input
              type="tel"
              placeholder="abc"
              className="w-full border border-gray-200 px-4 py-3 bg-none text-gray-300 focus:outline-none focus:border-[#a08552]   text-sm font-light shadow-sm transition-colors"
            />
          </div>

          {/* Email Field */}
          <div className="flex flex-col space-y-2">
            <label className="text-white font-bold uppercase tracking-wider text-[15px]">
              EMAIL
            </label>
            <input
              type="email"
              placeholder="abc"
              className="w-full border border-gray-200 px-4 py-3 bg-none text-gray-300 focus:outline-none focus:border-[#a08552]   text-sm font-light shadow-sm transition-colors"
            />
          </div>

          {/* Enrollment Number Field */}
          <div className="flex flex-col space-y-2">
            <label className="text-white font-bold uppercase tracking-wider text-[15px]">
              ENROLLMENT NUMBER
            </label>
            <input
              type="text"
              placeholder="abc"
              className="w-full border border-gray-200 px-4 py-3 bg-none text-gray-300 focus:outline-none focus:border-[#a08552]   text-sm font-light shadow-sm transition-colors"
            />
          </div>

          {/* Area of Practice Field */}
          <div className="flex flex-col space-y-2">
            <label className="text-white font-bold uppercase tracking-wider text-[15px]">
              AREA OF PRACTICE
            </label>
            <input
              type="text"
              placeholder="abc"
              className="w-full border border-gray-200 px-4 py-3 bg-none text-gray-300 focus:outline-none focus:border-[#a08552]   text-sm font-light shadow-sm transition-colors"
            />
          </div>

          {/* Feedback Field */}
          <div className="flex flex-col space-y-2 pb-2">
            <label className="text-white font-bold uppercase tracking-wider text-[15px]">
              FEEDBACK
            </label>
            <textarea
              placeholder="let us know..."
              rows="5"
              className="w-full border border-gray-200 px-4 py-3 bg-none text-gray-300 focus:outline-none focus:border-[#a08552]   text-sm font-light shadow-sm resize-none transition-colors"
            ></textarea>
          </div>

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              className="bg-[#a08552] text-white px-8 py-2.5 text-sm   flex items-center justify-center gap-2 hover:bg-[#8a7246] transition-colors group rounded-xs shadow-sm font-medium tracking-wide"
            >
              Submit
              <span className="bg-white rounded-full p-0.5 ml-1 flex items-center justify-center">
                <ArrowUpRight
                  size={14}
                  strokeWidth={2.5}
                  className="text-[#a08552] group-hover:text-[#8a7246]"
                />
              </span>
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default TeamJoinForm;
