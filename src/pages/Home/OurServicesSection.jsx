/* eslint-disable no-unused-vars */
import React from "react";
import { ArrowUpRight } from "lucide-react";

const practiceAreas = [
  "Civil Litigation & Dispute Resolution",
  "Criminal Litigation & Defense",
  "Real Estate & Property",
  "Family & Matrimonial",
  "Corporate & Commercial",
  "Cyber Crime & Technology",
  "Consumer Protection",
  "Service & Employment",
  "Taxation",
];

const OurServicesSection = () => {
  // GEO/SEO: Injecting structured data for Services Catalog
  // const schemaData = {
  //   "@context": "https://schema.org",
  //   "@type": "LegalService",
  //   "name": "Vedanta Legal Associates",
  //   "hasOfferCatalog": {
  //     "@type": "OfferCatalog",
  //     "name": "Legal Practice Areas",
  //     "itemListElement": practiceAreas.map((area, index) => ({
  //       "@type": "Offer",
  //       "itemOffered": {
  //         "@type": "Service",
  //         "name": area,
  //       },
  //       "position": index + 1,
  //     })),
  //   },
  // };

  return (
      <section
          className="relative w-full bg-[#FAFAFA] py-16 md:pt-15 md:pb-5 px-5 sm:px-8 md:px-12 xl:px-24"
          aria-labelledby="services-heading"
      >
        {/* JSON-LD Schema for rich snippet and LLM context extraction */}
        {/*<script*/}
        {/*    type="application/ld+json"*/}
        {/*    dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}*/}
        {/*/>*/}

        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-10 lg:gap-16 items-center lg:items-stretch">

          {/* Left Column: Statement Box with Oval Corners */}
          <div className="w-full lg:w-5/12 flex flex-col justify-center">
            <div className="bg-white rounded-[40px] md:rounded-[50px] shadow-[0_8px_30px_rgba(0,0,0,0.06)] border border-gray-100 p-10 md:p-10 h-auto flex flex-col justify-center relative overflow-hidden">

              {/* Decorative Gold Accent */}
              <div className="absolute top-0 left-0 w-full h-1.5 bg-[#C4A661]"></div>

              <h2
                  id="services-heading"
                  className="text-3xl md:text-4xl font-extrabold tracking-wide text-black mb-6 text-center lg:text-left"
              >
                Practice Areas
              </h2>

              <p className="text-gray-700 text-[15px] md:text-[17px] leading-[1.8] font-light text-center lg:text-left mb-10">
                Vedanta Legal Associates assists a wide spectrum of clients,
                including traditional organisations and modern enterprises. We offer
                legal services across multiple sectors through our focused practice areas.
              </p>

              <div className="flex justify-center lg:justify-start mt-auto">
                {/* Note: Update the href to point to your actual routing path if different */}
                <a
                    href="/practice-areas"
                    className="bg-black text-white px-8 py-3.5 text-sm md:text-[15px] flex items-center justify-center gap-3 hover:bg-[#C4A661] transition-colors duration-300 group font-bold tracking-widest uppercase rounded-full shadow-md"
                >
                  View Practice Areas
                  <span className="bg-white/10 rounded-full p-1 flex items-center justify-center text-white group-hover:translate-x-1 transition-transform">
                  <ArrowUpRight size={16} strokeWidth={2.5} />
                </span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Practice Areas List */}
          <div className="w-full lg:w-7/12 flex flex-col justify-center">
            <div className="w-full">
              <ul className="flex flex-wrap gap-3 md:gap-7 m-0 p-0 list-none">
                {practiceAreas.map((area, index) => (
                    <li
                        key={index}
                        className="flex items-center text-gray-800 text-[14px] md:text-[16px] font-bold tracking-wide transition-colors hover:bg-gray-50 hover:text-[#a08552] bg-white shadow-[0_4px_15px_rgba(0,0,0,0.04)] border border-gray-200 px-5 py-3.5 rounded-lg max-w-full"
                    >
                      <span className="w-1.5 h-1.5 bg-black rounded-full mr-3 opacity-70 shrink-0"></span>
                      <span className="whitespace-normal">{area}</span>
                    </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
  );
};

export default OurServicesSection;