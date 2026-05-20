// /* eslint-disable no-unused-vars */
// import React from "react";
// import { ArrowUpRight } from "lucide-react";
// import founder1 from "../../assets/FounderPhoto.png";
// import founder2 from "../../assets/FounderPhoto2.png";
// import founder3 from "../../assets/FounderPhoto3.png";
//
// const TeamCard = ({ imageSrc, name, role }) => {
//   return (
//     <div className="relative w-full max-w-85 md:max-w-95 mx-auto mb-20 md:mb-24">
//       {/* Image Container */}
//       <div className="w-full h-80 sm:h-87.5 md:h-90 bg-gray-200 overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.05)] border-[6px] border-none">
//         <img
//           src={imageSrc}
//           alt={name}
//           className="w-full h-full object-cover object-top filter brightness-95 contrast-105"
//         />
//       </div>
//
//       {/* Overlapping Label Card */}
//       <div className="absolute left-1/2 -translate-x-1/2 -bottom-10 md:-bottom-12 w-[85%] bg-white py-5 px-4 shadow-[0_15px_40px_-5px_rgba(0,0,0,0.06)] flex flex-col items-center justify-center">
//         <h4 className="  text-[18px] md:text-[20px] font-bold tracking-wide text-black mb-1">
//           {name}
//         </h4>
//         <p className="  text-[13px] md:text-[14px] text-gray-500 font-light">
//           {role}
//         </p>
//       </div>
//     </div>
//   );
// };
//
// const OurTeamSection = () => {
//   return (
//     <section className="relative w-full max-w-250 mx-auto py-16 px-4 md:px-8 mt-8 bg-[#FAFAFA] overflow-hidden">
//       {/* Title */}
//       <div className="flex flex-col items-center mb-16 md:mb-20">
//         <div className="text-center relative">
//           <h2 className="text-[38px] sm:text-[44px] md:text-[48px]   tracking-normal uppercase leading-none text-[#a08552]">
//             OUR <span className="text-black font-bold">TEAM</span>
//           </h2>
//           <div className="w-21.25 h-0.5 bg-[#a08552] absolute -bottom-4 left-0"></div>
//         </div>
//       </div>
//
//       {/* Main Grid */}
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-14 items-start">
//         {/* Left Column */}
//         <div className="flex flex-col pt-2 items-center">
//           <TeamCard
//             imageSrc={founder1}
//             name="B.S. Sarkar"
//             role="Founder"
//           />
//           <TeamCard
//             imageSrc={founder3}
//             name="J.U. Khadim"
//             role="Founder"
//           />
//         </div>
//
//         {/* Right Column */}
//         <div className="flex flex-col items-center md:items-start md:-mt-8">
//           {/* Text Box */}
//           <div className="w-full max-w-85 md:max-w-105 mb-14 bg-white shadow-[0_8px_30px_rgba(0,0,0,0.06)] p-6 md:p-8 border border-gray-50 mx-auto md:mx-0">
//             <p className="text-gray-600 text-[12.5px] md:text-[13px] leading-[1.8]   font-light tracking-wide m-0">
//               Vedanta Legal Associates is a full-service law firm committed to
//               excellence, integrity, and justice. The firm was established with
//               a vision to provide high-quality legal services while promoting
//               legal awareness among the people. The firm has three Founders and
//               two Co-Founders. The Founders are Shri Bijoy Sarkar, Shri Debesh
//               Chandra Ray, and Shri Jamiar Hossain Khadim. The Co-Founders are
//               Shri Kuntal Ghosh and Smti. Sangita Biswas.
//             </p>
//           </div>
//
//           <TeamCard
//             imageSrc={founder2}
//             name="D.C. Roy"
//             role="Founder"
//           />
//
//           {/* CTA Area */}
//           <div className="flex flex-col gap-4 -mt-2.5 md:mt-2 text-center md:text-left mx-auto md:mx-0 max-w-85 md:max-w-none">
//             <h3 className="  italic font-bold text-[24px] md:text-[28px] leading-[1.2] text-[#444] tracking-tight">
//               Want To Check out Our Entire Team ?
//             </h3>
//             <div className="mt-2 flex justify-center md:justify-start">
//               <button className="bg-[#997f48] text-white px-5 py-2 text-xs   flex items-center justify-center gap-2 hover:bg-[#856d39] transition-colors group shadow-sm font-medium tracking-wide">
//                 View All
//                 <span className="bg-white rounded-full p-0.5 ml-1 flex items-center justify-center text-[#997f48] group-hover:text-[#856d39]">
//                   <ArrowUpRight size={13} strokeWidth={3} />
//                 </span>
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };
//
// export default OurTeamSection;





/* eslint-disable no-unused-vars */
import React from "react";
import { ArrowUpRight } from "lucide-react";
import founder1 from "../../assets/FounderPhoto.png";
import founder2 from "../../assets/FounderPhoto2.png";
import founder3 from "../../assets/FounderPhoto3.png";

// Mock data to generate the 3x3 grid (9 items total)
const teamMembers = [
  { id: 1, name: "B.S. Sarkar", imageSrc: founder1 },
  { id: 2, name: "D.C. Roy", imageSrc: founder2 },
  { id: 3, name: "J.U. Khadim", imageSrc: founder3 },
  { id: 4, name: "K. Ghosh", imageSrc: founder1 },
  { id: 5, name: "S. Biswas", imageSrc: founder2 },
  { id: 6, name: "A. Sharma", imageSrc: founder3 },
  { id: 7, name: "R. Chatterjee", imageSrc: founder1 },
  { id: 8, name: "P. Banerjee", imageSrc: founder2 },
  { id: 9, name: "M. Das", imageSrc: founder3 },
];

const OurTeamSection = () => {
  return (
      <section
          className="relative w-full bg-[#FAFAFA] py-16 md:py-24 px-4 sm:px-8 md:px-12 xl:px-24 overflow-hidden"
          aria-labelledby="team-heading"
      >
        {/* Top Header */}
        <div className="flex flex-col items-center mb-12 md:mb-16">
          <div className="text-center relative">
            <h2
                id="team-heading"
                className="text-[32px] sm:text-[40px] md:text-[48px] tracking-normal uppercase leading-none text-black font-extrabold"
            >
              CO-FOUNDERS & <span className="text-[#a08552] font-normal">MANAGING PARTNERS</span>
            </h2>
            <div className="w-24 h-1 bg-[#a08552] absolute -bottom-4 left-1/2 -translate-x-1/2"></div>
          </div>
        </div>

        <div className="max-w-350 mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">

          {/* Left Column: 3x3 Image Grid (9 Columns/Boxes as requested) */}
          <div className="w-full lg:col-span-7">
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 md:gap-6">
              {teamMembers.map((member) => (
                  <div key={member.id} className="flex flex-col group cursor-pointer">
                    {/* Image Box */}
                    <div className="w-full aspect-3/4 bg-gray-200 overflow-hidden relative border border-gray-200 shadow-sm transition-shadow duration-300 group-hover:shadow-md">
                      <img
                          src={member.imageSrc}
                          alt={member.name}
                          className="w-full h-full object-cover object-top filter brightness-95 contrast-105 group-hover:scale-105 transition-transform duration-500"
                          loading="lazy"
                      />
                      {/* Subtle overlay on hover */}
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300"></div>
                    </div>
                    {/* Name Label */}
                    <div className="mt-3 text-center">
                      <h4 className="text-[15px] md:text-[17px] font-bold tracking-wide text-gray-900 font-serif">
                        {member.name}
                      </h4>
                    </div>
                  </div>
              ))}
            </div>
          </div>

          {/* Right Column: Text block and Stats (Dark Theme) */}
          <article className="w-full lg:col-span-5 bg-[#161616] flex flex-col justify-between p-8 md:p-10 lg:p-12 shadow-2xl">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold tracking-wide text-white uppercase mb-2">
                Our Team
              </h3>
              <div className="w-12 h-0.75 bg-[#C4A661] mb-6"></div>

              <div className="space-y-4 text-gray-300 text-[14.5px] md:text-[18px] lg:text-[18px]  leading-[2]  font-light tracking-wide text-justify lg:text-left">
                <p>
                  At Vedanta Legal Associates, we pride ourselves on having a strong, unified
                  team of lawyers, junior associates, law clerks, and support staff working together
                  with integrity and dedication.
                </p>
                <p>
                  Our partners and senior lawyers bring rich experience from multiple domains,
                  enabling us to deliver balanced and effective legal solutions. We believe in a
                  collaborative approach where the entire team works cohesively to meet the unique
                  requirements of each case.
                </p>
                <p>
                  This teamwork allows us to serve our clients with greater efficiency and depth,
                  always guided by our core philosophy of "Balance in Justice".
                </p>
              </div>
            </div>

            <div className="mt-1">
              {/* Firm Statistics */}
              <div className="grid grid-cols-3 gap-4 border-t border-gray-700/50 pt-8 mb-10">
                <div className="text-center flex flex-col items-center">
                  <span className="text-2xl md:text-3xl font-extrabold text-[#C4A661]">200+</span>
                  <span className="text-[11px] md:text-xs text-gray-400 uppercase tracking-widest mt-1">Lawyers</span>
                </div>
                <div className="text-center flex flex-col items-center border-l border-gray-700/50">
                  <span className="text-2xl md:text-3xl font-extrabold text-[#C4A661]">6</span>
                  <span className="text-[11px] md:text-xs text-gray-400 uppercase tracking-widest mt-1">Cities</span>
                </div>
                <div className="text-center flex flex-col items-center border-l border-gray-700/50">
                  <span className="text-2xl md:text-3xl font-extrabold text-[#C4A661]">70+</span>
                  <span className="text-[11px] md:text-xs text-gray-400 uppercase tracking-widest mt-1">Staff</span>
                </div>
              </div>

              {/* CTA Button */}
              <div className="flex justify-center lg:justify-start">
                <button className="w-full lg:w-auto bg-[#C4A661] text-black px-8 py-3.5 text-sm md:text-[15px] flex items-center justify-center gap-3 hover:bg-[#b09557] transition-colors group font-bold tracking-widest uppercase whitespace-nowrap">
                  View Team Members
                  <span className="bg-black/10 rounded-full p-1 flex items-center justify-center text-black group-hover:translate-x-1 transition-transform">
                  <ArrowUpRight size={16} strokeWidth={2.5} />
                </span>
                </button>
              </div>
            </div>
          </article>

        </div>
      </section>
  );
};

export default OurTeamSection;