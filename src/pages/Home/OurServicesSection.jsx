// /* eslint-disable no-unused-vars */
// import React from "react";
// import { Check } from "lucide-react";
// import HomeOurServicesBG from "../../assets/HomeOurServicesBG.png";
// import HomeOurServicesImg1 from "../../assets/HomeOurServicesImg1.png";
// import HomeOurServicesImg2 from "../../assets/HomeAbout3.png";
//
// const leftServices = [
//   "Civil Litigation & Dispute Resolution",
//   "Criminal Litigation & Defense",
//   "Real Estate & Property Law",
//   "Family & Matrimonial Law",
//   "Corporate & Commercial Law",
//   "Taxation & GST",
// ];
//
// const rightServices = [
//   "Intellectual Property Rights",
//   "Banking, Finance & Recovery",
//   "Cyber Crime & Technology Law",
//   "Consumer Protection Law",
//   "Constitutional Law & Public Interest Litigation (PIL)",
//   "Right to Information (RTI)",
//   "Service & Employment Law",
// ];
//
// const ServiceItem = ({ title }) => (
//   <div className="bg-white px-6 py-4 flex items-center gap-5 shadow-sm rounded-sm max-w-125">
//     <div className="bg-black text-white rounded-full p-0.75 shrink-0 flex items-center justify-center w-6.5 h-6.5">
//       <Check size={18} strokeWidth={3.5} />
//     </div>
//     <span className="text-black   text-[13px] md:text-[14px] font-medium tracking-wide">
//       {title}
//     </span>
//   </div>
// );
//
// const OurServicesSection = () => {
//   return (
//     <section className="relative w-full py-24 mt-4">
//       {/* Background Image with dark overlay */}
//       <div
//         className="absolute inset-0 z-0 bg-cover bg-center bg-fixed"
//         style={{
//           backgroundImage:
//             `url(${HomeOurServicesBG})`, // Classic court building background
//         }}
//       >
//         <div className="absolute inset-0 bg-[#1a120c]/45 mix-blend-multiply"></div>
//         <div className="absolute inset-0 bg-black/45"></div>
//       </div>
//
//       <div className="relative z-10 max-w-275 mx-auto px-4 md:px-8">
//         {/* Title */}
//         <div className="flex flex-col items-center mb-16">
//           <h2 className="text-[40px] sm:text-[45px] md:text-[52px]   font-bold tracking-wide uppercase leading-none flex gap-3 text-[#a08552]">
//             OUR <span className="text-white">SERVICES</span>
//           </h2>
//           <div className="relative w-full flex justify-center mt-2">
//             {/* Center the line under 'OUR' approximately */}
//             <div className="w-21.25 h-0.5 bg-[#a08552] mr-40 md:mr-52.5"></div>
//           </div>
//         </div>
//
//         {/* Two Column Layout */}
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-x-12 md:gap-y-8">
//           {/* Left Column */}
//           <div className="flex flex-col gap-4">
//             {leftServices.map((service, index) => (
//               <ServiceItem key={index} title={service} />
//             ))}
//
//             {/* Bottom Image for Left Column */}
//             <div className="w-full max-w-125 h-62.5 md:h-80 mt-4 shadow-xl overflow-hidden border-2 border-white/5">
//               <img
//                 src={HomeOurServicesImg1}
//                 alt="Courtroom interior with desks"
//                 className="w-full h-full object-cover object-center filter brightness-[0.85] contrast-125"
//               />
//             </div>
//           </div>
//
//           {/* Right Column */}
//           <div className="flex flex-col gap-4 lg:-mt-10">
//             {/* Top Image for Right Column */}
//             <div className="w-full max-w-125 h-62.5 md:h-80 mb-4 shadow-xl overflow-hidden border-2 border-white/5 z-20">
//               <img
//                 src={HomeOurServicesImg2}
//                 alt="Courtroom desk with lamp"
//                 className="w-full h-full object-cover object-center filter brightness-90 sepia-[0.3]"
//               />
//             </div>
//
//             {rightServices.map((service, index) => (
//               <ServiceItem key={index} title={service} />
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };
//
// export default OurServicesSection;





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
          className="relative w-full bg-[#FAFAFA] py-16 md:py-24 px-5 sm:px-8 md:px-12 xl:px-24"
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
            <div className="bg-white rounded-[40px] md:rounded-[50px] shadow-[0_8px_30px_rgba(0,0,0,0.06)] border border-gray-100 p-10 md:p-14 h-auto flex flex-col justify-center relative overflow-hidden">

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
            <div className="bg-white shadow-[0_4px_20px_rgba(0,0,0,0.04)] border border-gray-200 w-full">
              <ul className="flex flex-col w-full m-0 p-0 list-none">
                {practiceAreas.map((area, index) => (
                    <li
                        key={index}
                        className={`px-6 py-4 md:py-5 flex items-center text-gray-800 text-[15px] md:text-[18px] font-bold tracking-wide transition-colors hover:bg-gray-50 hover:text-[#a08552] ${
                            index !== practiceAreas.length - 1
                                ? "border-b border-gray-200"
                                : ""
                        }`}
                    >
                      <span className="w-1.5 h-1.5 bg-black rounded-full mr-4 opacity-70"></span>
                      {area}
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