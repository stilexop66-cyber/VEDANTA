/* eslint-disable no-unused-vars */
import React from "react";
import { ArrowUpRight, Upload } from "lucide-react";

const ReachUsSection = () => {
    // GEO/SEO: Injecting structured data for the Contact Page
    // const schemaData = {
    //     "@context": "https://schema.org",
    //     "@type": "ContactPage",
    //     "name": "Reach Vedanta Legal Associates",
    //     "description": "Contact form for legal inquiries, consultation requests, and document submission to Vedanta Legal Associates.",
    //     "publisher": {
    //         "@type": "LegalService",
    //         "name": "Vedanta Legal Associates"
    //     }
    // };

    return (
        <section
            className="relative w-full bg-[#FAFAFA] py-16 md:py-5 px-5 sm:px-8 md:px-12 xl:px-24"
            aria-labelledby="reach-us-heading"
        >
            {/* JSON-LD Schema for rich snippet and LLM context extraction */}
            {/*<script*/}
            {/*    type="application/ld+json"*/}
            {/*    dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}*/}
            {/*/>*/}

            {/* Header */}
            <header className="flex flex-col items-center mb-12 md:mb-16">
                <div className="relative inline-block text-center">
                    <h2
                        id="reach-us-heading"
                        className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-wide uppercase text-black"
                    >
                        REACH <span className="text-[#a08552]">US</span>
                    </h2>
                    <div className="w-24 h-1 bg-[#a08552] absolute -bottom-4 left-1/2 -translate-x-1/2"></div>
                </div>
            </header>

            {/* Two Column Layout */}
            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-8 lg:gap-12 items-start">

                {/* Left Column: Statement Box (Sticky on Desktop) */}
                <div className="w-full lg:w-5/12 lg:sticky lg:top-24">
                    <div className="bg-white rounded-[40px] shadow-[0_8px_30px_rgba(0,0,0,0.06)] border border-gray-100 p-8 md:p-12">
                        <div className="space-y-6 text-gray-800 text-[15px] md:text-[17px] leading-[1.8] font-light text-justify md:text-left">
                            <p>
                                Thank you for reaching out to Vedanta Legal Associates.
                            </p>
                            <p>
                                Please fill the form below with your full details and a clear description of your query.
                                This will help us understand your requirements properly.
                            </p>
                            <p>
                                Our team will review your submission carefully and get in touch with you at the earliest.
                                We are committed to responding to all genuine enquiries as promptly as possible while upholding
                                the highest standards of professionalism and confidentiality.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Right Column: Comprehensive Form Box */}
                <div className="w-full lg:w-7/12">
                    <div className="bg-white rounded-[40px] shadow-[0_8px_30px_rgba(0,0,0,0.06)] border border-gray-100 p-8 md:p-12">
                        <form
                            className="flex flex-col gap-6"
                            encType="multipart/form-data"
                        >

                            {/* Full Name & Phone Row */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="flex flex-col">
                                    <label htmlFor="fullName" className="text-black font-bold text-[14px] tracking-wide mb-2">Full Name *</label>
                                    <input type="text" id="fullName" name="fullName" required className="w-full border-b-2 border-gray-200 focus:border-[#a08552] outline-none py-2 text-[15px] transition-colors bg-transparent" />
                                </div>
                                <div className="flex flex-col">
                                    <label htmlFor="phone" className="text-black font-bold text-[14px] tracking-wide mb-2">Phone Number *</label>
                                    <input type="tel" id="phone" name="phone" required className="w-full border-b-2 border-gray-200 focus:border-[#a08552] outline-none py-2 text-[15px] transition-colors bg-transparent" />
                                </div>
                            </div>

                            {/* WhatsApp & Email Row */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="flex flex-col">
                                    <label htmlFor="whatsapp" className="text-black font-bold text-[14px] tracking-wide mb-2">Whatsapp Number</label>
                                    <input type="tel" id="whatsapp" name="whatsapp" className="w-full border-b-2 border-gray-200 focus:border-[#a08552] outline-none py-2 text-[15px] transition-colors bg-transparent" />
                                </div>
                                <div className="flex flex-col">
                                    <label htmlFor="email" className="text-black font-bold text-[14px] tracking-wide mb-2">Email ID</label>
                                    <input type="email" id="email" name="email" className="w-full border-b-2 border-gray-200 focus:border-[#a08552] outline-none py-2 text-[15px] transition-colors bg-transparent" />
                                </div>
                            </div>

                            {/* Address */}
                            <div className="flex flex-col">
                                <label htmlFor="address" className="text-black font-bold text-[14px] tracking-wide mb-2">Address</label>
                                <input type="text" id="address" name="address" className="w-full border-b-2 border-gray-200 focus:border-[#a08552] outline-none py-2 text-[15px] transition-colors bg-transparent" />
                            </div>

                            {/* Jurisdiction & Type of Incident Row */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="flex flex-col">
                                    <label htmlFor="jurisdiction" className="text-black font-bold text-[14px] tracking-wide mb-2">Jurisdiction / Place of Incident</label>
                                    <input type="text" id="jurisdiction" name="jurisdiction" className="w-full border-b-2 border-gray-200 focus:border-[#a08552] outline-none py-2 text-[15px] transition-colors bg-transparent" />
                                </div>
                                <div className="flex flex-col">
                                    <label htmlFor="incidentType" className="text-black font-bold text-[14px] tracking-wide mb-2">Type of Incident</label>
                                    <input type="text" id="incidentType" name="incidentType" className="w-full border-b-2 border-gray-200 focus:border-[#a08552] outline-none py-2 text-[15px] transition-colors bg-transparent" />
                                </div>
                            </div>

                            {/* Date & Communication Mode Row */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="flex flex-col">
                                    <label htmlFor="incidentDate" className="text-black font-bold text-[14px] tracking-wide mb-2">Date of Incident</label>
                                    <input type="date" id="incidentDate" name="incidentDate" className="w-full border-b-2 border-gray-200 focus:border-[#a08552] outline-none py-2 text-[15px] transition-colors bg-transparent text-gray-700" />
                                </div>
                                <div className="flex flex-col">
                                    <label htmlFor="commMode" className="text-black font-bold text-[14px] tracking-wide mb-2">Preferred Mode of Communication</label>
                                    <select id="commMode" name="commMode" className="w-full border-b-2 border-gray-200 focus:border-[#a08552] outline-none py-2 text-[15px] transition-colors bg-transparent text-gray-700">
                                        <option value="phone">Phone Call</option>
                                        <option value="whatsapp">WhatsApp</option>
                                        <option value="email">Email</option>
                                    </select>
                                </div>
                            </div>

                            {/* Describe Matter */}
                            <div className="flex flex-col mt-2">
                                <label htmlFor="matterDescription" className="text-black font-bold text-[14px] tracking-wide mb-2">Describe Your Matter *</label>
                                <textarea
                                    id="matterDescription"
                                    name="matterDescription"
                                    required
                                    rows="4"
                                    className="w-full border rounded-xl border-gray-200 focus:border-[#a08552] outline-none p-4 text-[15px] transition-colors bg-transparent resize-none"
                                    placeholder="Please provide details about your case..."
                                ></textarea>
                            </div>

                            {/* File Uploads */}
                            <div className="flex flex-col gap-4 mt-2 bg-gray-50 p-6 rounded-2xl border border-gray-100">
                                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                                    <label htmlFor="idProof" className="text-black font-bold text-[14px] tracking-wide flex items-center gap-2">
                                        <Upload size={16} className="text-[#a08552]" /> Attach ID Proof *
                                    </label>
                                    <input
                                        type="file"
                                        id="idProof"
                                        name="idProof"
                                        required
                                        className="text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-[#a08552]/10 file:text-[#a08552] hover:file:bg-[#a08552]/20 transition-colors cursor-pointer"
                                    />
                                </div>
                                <div className="w-full h-px bg-gray-200"></div>
                                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                                    <label htmlFor="relevantDocs" className="text-black font-bold text-[14px] tracking-wide flex items-center gap-2">
                                        <Upload size={16} className="text-[#a08552]" /> Attach Relevant Documents
                                    </label>
                                    <input
                                        type="file"
                                        id="relevantDocs"
                                        name="relevantDocs"
                                        multiple
                                        className="text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-[#a08552]/10 file:text-[#a08552] hover:file:bg-[#a08552]/20 transition-colors cursor-pointer"
                                    />
                                </div>
                            </div>

                            {/* Submit Button */}
                            <div className="mt-6 flex justify-center lg:justify-start">
                                <button
                                    type="submit"
                                    className="bg-[#a08552] text-white px-10 py-3.5 text-[15px] font-bold hover:bg-[#8a7246] transition-all duration-300 flex items-center justify-center gap-3 group tracking-widest uppercase rounded-full shadow-md w-full sm:w-auto"
                                >
                                    Submit Details
                                    <span className="bg-white/20 rounded-full p-1 flex items-center justify-center text-white group-hover:translate-x-1 transition-transform">
                    <ArrowUpRight size={18} strokeWidth={2.5} />
                  </span>
                                </button>
                            </div>

                        </form>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default ReachUsSection;