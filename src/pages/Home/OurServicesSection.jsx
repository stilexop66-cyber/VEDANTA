/* eslint-disable no-unused-vars */
import React from "react";
import { ArrowUpRight } from "lucide-react";

const practiceAreas = [
  { name: "Civil Litigation & Dispute Resolution", img: "/WhatsApp Image 2026-06-01 at 9.12.53 PM.jpeg" },
  { name: "Criminal Litigation & Defense", img: "/WhatsApp Image 2026-06-01 at 9.12.53 PM (1).jpeg" },
  { name: "Real Estate & Property", img: "/WhatsApp Image 2026-06-01 at 9.12.53 PM (2).jpeg" },
  { name: "Family & Matrimonial", img: "/WhatsApp Image 2026-06-01 at 9.12.54 PM.jpeg" },
  { name: "Corporate & Commercial", img: "/WhatsApp Image 2026-06-01 at 9.12.54 PM (1).jpeg" },
  { name: "Cyber Crime & Technology", img: "/WhatsApp Image 2026-06-01 at 9.12.54 PM (2).jpeg" },
  { name: "Consumer Protection", img: "/WhatsApp Image 2026-06-01 at 9.12.55 PM.jpeg" },
  { name: "Service & Employment", img: "/WhatsApp Image 2026-06-01 at 9.12.55 PM (1).jpeg" },
  { name: "Taxation", img: "/WhatsApp Image 2026-06-01 at 9.12.55 PM (2).jpeg" },
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
  //         "name": area.name,
  //       },
  //       "position": index + 1,
  //     })),
  //   },
  // };

  return (
      <section
          className="relative w-full bg-[#303030] py-16 md:pt-15 md:pb-5 px-5 sm:px-8 md:px-12 xl:px-24"
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
            <div className="bg-[#161616] rounded-[40px] md:rounded-[50px] shadow-[0_8px_30px_rgba(0,0,0,0.06)] border border-gray-100 p-10 md:p-10 h-auto flex flex-col justify-center relative overflow-hidden">

              {/* Decorative Gold Accent */}
              <div className="absolute top-0 left-0 w-full h-1.5 bg-[#C4A661]"></div>

              <h2
                  id="services-heading"
                  className="text-3xl md:text-4xl font-extrabold tracking-wide text-[#e0e0e0] mb-6 text-center lg:text-left"
              >
                Practice Areas
              </h2>

              <p className="text-[#e0e0e0] text-[15px] md:text-[22px] leading-[1.8] font-light text-justify mb-10">
                Vedanta Legal Associates assists a wide spectrum of clients,
                including traditional organisations and modern enterprises. We offer
                legal services across multiple sectors through our focused practice areas.
              </p>

              <div className="flex justify-center lg:justify-start mt-auto">
                {/* Note: Update the href to point to your actual routing path if different */}
                <a
                    href="/practice-areas"
                    className="bg-[#C4A661] text-black px-8 py-3.5 text-sm md:text-[15px] flex items-center justify-center gap-3 hover:bg-[#b09557] transition-colors duration-300 group font-bold tracking-widest uppercase rounded-full shadow-md"
                >
                  View Practice Areas
                  <span className="bg-black/10 rounded-full p-1 flex items-center justify-center text-black group-hover:translate-x-1 transition-transform">
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
                        className="flex items-center text-gray-800 text-[14px] md:text-[20px] font-bold tracking-wide transition-colors hover:bg-gray-50 hover:text-[#a08552] bg-white shadow-[0_4px_15px_rgba(0,0,0,0.04)] border border-gray-200 px-5 py-1 rounded-lg max-w-full"
                    >
                      <img src={area.img} alt={area.name} className="w-8 h-8 md:w-10 md:h-10 object-cover rounded-full mr-3 shrink-0 border border-gray-200" />
                      <span className="whitespace-normal">{area.name}</span>
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