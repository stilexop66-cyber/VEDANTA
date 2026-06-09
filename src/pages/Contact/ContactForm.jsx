/* eslint-disable no-unused-vars */
import React from "react";
import {ArrowUpRight} from "lucide-react";

export default function ContactForm() {
    return (
        <section className="bg-[#303030] min-h-screen py-20 px-4 md:px-8 font-sans">
            <div className="max-w-300 mx-auto flex flex-col items-center">
                {/* --- Header Section --- */}
                <div className="text-center mb-16 flex flex-col items-center">
                    <h2 className="text-3xl md:text-[34px] font-serif tracking-widest flex items-center gap-3">
                        <div className="font-bold text-[#e0e0e0] uppercase relative ">
                            Our Contact Details
                            {/* Gold Underline */}
                            <div
                                className="absolute  left-1/2 translate-y-6 -translate-x-1/2 w-20 h-0.5 bg-[#A68A56]"></div>
                        </div>
                    </h2>
                </div>

                {/* --- Split Layout Container --- */}
                <div
                    className="w-full max-w-350 flex flex-col lg:flex-row lg:items-start lg:justify-between gap-16 lg:gap-12 xl:gap-20">

                    {/* --- Form Area --- */}
                    <div className="w-full lg:w-[65%] mb-10 lg:mb-0">
                        <div
                            className="w-full bg-none shadow-[0_15px_50px_-15px_rgba(0,0,0,0.1)] border border-gray-50 p-8 md:p-10 lg:p-12">
                            <form className="flex flex-col w-full">
                                {/* Name Field */}
                                <div className="mb-6 md:mb-8">
                                    <label
                                        htmlFor="name"
                                        className="block   font-bold text-[14px] md:text-[15px] tracking-wide text-white mb-3"
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
                                        className="block   font-bold text-[14px] md:text-[15px] tracking-wide text-white mb-3"
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
                                        className="block   font-bold text-[14px] md:text-[15px] tracking-wide text-white mb-3"
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
                                        className="block   font-bold text-[14px] md:text-[15px] tracking-wide text-white mb-3"
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
                                        <span
                                            className="bg-white rounded-full p-0.5 ml-1 flex items-center justify-center text-[#997f48] group-hover:text-[#856d39]">
                      <ArrowUpRight size={14} strokeWidth={2.5}/>
                    </span>
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>

                    {/* --- Address Area --- */}
                    <div className="w-full lg:w-[25%] flex flex-col gap-y-1 px-4 lg:px-0">
                        {/* Kolkata */}
                        <div className="flex flex-col items-start px-2">
                            <div className="flex items-center gap-3 mb-1">
                                <div className="w-[7px] h-[7px] min-w-[7px] rounded-full bg-[#A68A56]"></div>
                                <h3 className="text-[25px] font-serif font-medium text-[#A68A56] tracking-wide">
                                    West Bengal
                                </h3>
                            </div>
                            <p className="text-[#e0e0e0] leading-[1.8] text-[16px] font-light">
                                 1. 68/5, C Balllygunge Place.<br/>
                                    Kolkata, Pin 700019,<br/>
                                    West Bengal, India<br/>
                                 2. 120, Rashtraguru Avenue,<br/>
                                    Clive House, Dumdum - Nagerbazar,<br/>
                                    Kolkata - 700028,<br/>
                                    West Bengal, India                            </p>
                        </div>

                        {/* Tripura */}
                        <div className="flex flex-col items-start px-2 pt-8 border-t border-gray-500/30">
                            <div className="flex items-center gap-3 mb-1">
                                <div className="w-[7px] h-[7px] min-w-[7px] rounded-full bg-[#A68A56]"></div>
                                <h3 className="text-[25px] font-serif font-medium text-[#A68A56] tracking-wide">
                                    Tripura
                                </h3>
                            </div>
                            <p className="text-[#e0e0e0] leading-[1.8] text-[16px] font-light">
                                4, Tapo Bibha,<br/>
                                Ramnagar- 8<br/>
                                Agartala 799002,<br/>
                                Tripura, India
                            </p>
                        </div>

                        {/* Guwahati */}
                        <div className="flex flex-col items-start px-2 pt-8 border-t border-gray-500/30">
                            <div className="flex items-center gap-3 mb-1">
                                <div className="w-[7px] h-[7px] min-w-[7px] rounded-full bg-[#A68A56]"></div>
                                <h3 className="text-[25px] font-serif font-medium text-[#A68A56] tracking-wide">
                                    Assam
                                </h3>
                            </div>
                            <p className="text-[#e0e0e0] leading-[1.8] text-[16px] font-light">
                                199 hajo nalbari road,<br/>
                                khaopanikuchi, Hajo Kamrup,<br/>
                                Guwahati 781001,<br/>
                                Assam, India
                            </p>
                        </div>

                        {/* Bangalore */}
                        <div className="flex flex-col items-start px-2 pt-8 border-t border-gray-500/30">
                            <div className="flex items-center gap-3 mb-1">
                                <div className="w-[7px] h-[7px] min-w-[7px] rounded-full bg-[#A68A56]"></div>
                                <h3 className="text-[25px] font-serif font-medium text-[#A68A56] tracking-wide">
                                    Bangalore
                                </h3>
                            </div>
                            <p className="text-[#e0e0e0] leading-[1.8] text-[16px] font-light">
                                1335,10th Cross,<br/>
                                Judicial Layout, GKVK Post,<br/>
                                Bangalore 560065,<br/>
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
