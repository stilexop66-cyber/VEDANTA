/* eslint-disable no-unused-vars */
/* eslint-disable no-unused-vars */
import React from "react";
import CoFounderPhoto from "../../assets/CoFounder.png";

// Mock data array updated to reflect the names in the reference design
const partnersData = [
  { id: 1, name: "Srijita Sarkar", imageSrc: CoFounderPhoto },
  { id: 2, name: "Ritwika Sinha", imageSrc: CoFounderPhoto },
  { id: 3, name: "Siddhartha Singh", imageSrc: CoFounderPhoto },
  { id: 4, name: "Aayushi Mehta", imageSrc: CoFounderPhoto },
  // { id: 5, name: "Aarish Dhunjibhoy", imageSrc: CoFounderPhoto },
  // { id: 6, name: "Abinash Pradhan", imageSrc: CoFounderPhoto },
  // { id: 7, name: "Abir Patel", imageSrc: CoFounderPhoto },
  // { id: 8, name: "Akshay Gandhi", imageSrc: CoFounderPhoto },
  // { id: 9, name: "Aman Raj Gandhi", imageSrc: CoFounderPhoto },
];

export default function CoFoundersPartnersSection() {
  return (
      <section
          className="bg-[#FAFAFA] py-0 px-4 sm:px-8 md:px-12 xl:px-24 flex flex-col items-center justify-center w-full overflow-hidden"
          aria-labelledby="cofounders-partners-heading"
      >
        {/* Header Section */}
        <div className="text-center mb-16 md:mb-20 flex flex-col items-center">
          <h2
              id="cofounders-partners-heading"
              className="text-3xl md:text-[40px] font-extrabold tracking-wide text-black mb-2"
          >
            Cofounder & Partner
          </h2>
          {/* Decorative Gold Bar */}
          <div className="w-24 h-1 bg-[#C4A661]"></div>
        </div>

        {/* Alignment like Associate Partner Layout */}
        <div className="w-full max-w-[1400px] mx-auto flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-8 gap-y-10 md:gap-y-12">
          {partnersData.map((person) => (
              <article
                  key={person.id}
                  className="flex flex-col items-center w-full max-w-[160px] sm:max-w-[180px] md:max-w-[200px] group cursor-pointer"
              >
                {/* Rectangular Image Box with Beige Bottom Line (Matches Reference) */}
                <div className="w-full aspect-[4/5] bg-gray-200 overflow-hidden mb-4 shadow-sm border border-gray-200 transition-shadow duration-300 group-hover:shadow-md">
                  <img
                      src={person.imageSrc}
                      alt={person.name}
                      className="w-full h-full object-cover object-top filter brightness-[0.95] contrast-[1.05] group-hover:scale-105 transition-transform duration-700 ease-in-out"
                      loading="lazy"
                  />
                </div>

                {/* Clean, uppercase, tracked-out name with subtle top border */}
                <div className="w-full border-t border-[#C4A661]/50 pt-3 text-center px-1">
                  <h3 className="text-[12px] md:text-[13px] font-serif font-bold text-[#0a1128] tracking-[0.15em] uppercase truncate">
                    {person.name}
                  </h3>
                </div>
              </article>
          ))}
        </div>
      </section>
  );
}