
/* eslint-disable no-unused-vars */
import React from "react";
import FounderPhoto from "../../assets/FounderPhoto.png";
import FounderPhoto2 from "../../assets/FounderPhoto2.png";
import FounderPhoto3 from "../../assets/FounderPhoto3.png";

// --- Mock Data ---
// Expanded to demonstrate the 5-per-row automatic wrapping
const associateData = [
  { id: 1, name: "Name", imageSrc: null, state:"state" },
  { id: 2, name: "Name", imageSrc: null, state:"state" },
  { id: 3, name: "Name", imageSrc: null, state:"state" },
  { id: 4, name: "Name", imageSrc: null, state:"state" },
  // { id: 5, name: "Name", imageSrc: null, state:"state" },
  // { id: 6, name: "Name", imageSrc: null, state:"state" },
  // { id: 7, name: "Name", imageSrc: null, state:"state" },
];

// const advisoryData = [
//   { id: 1, name: "Senior Advisor One", imageSrc: FounderPhoto },
//   { id: 2, name: "Senior Advisor Two", imageSrc: FounderPhoto2 },
//   { id: 3, name: "Senior Advisor Three", imageSrc: FounderPhoto3 },
// ];

// --- Subcomponents ---

const SectionHeader = ({ prefix, highlight }) => (
    <div className="text-center mb-10 flex flex-col items-center">
      <h2 className="text-3xl md:text-[36px] tracking-widest flex flex-wrap justify-center items-center gap-x-3 gap-y-2 ">
        <span className="font-bold text-[#e0e0e0] uppercase">{prefix}</span>
        <span className="font-bold text-[#e0e0e0] uppercase relative pb-1">
        {highlight}
          {/* Gold Underline */}
          <span className="absolute bottom-0 left-1/2 -translate-x-5/2 w-16 h-[3px] bg-[#C4A661]"></span>
      </span>
      </h2>
    </div>
);

const TeamMemberCard = ({ name, imageSrc, state }) => (
    <article className="flex flex-col items-center w-full max-w-[160px] sm:max-w-[180px] md:max-w-[200px] group cursor-pointer">
      {/* Medium sized, centered picture */}
      <div className="w-full aspect-[4/5] bg-gray-200 overflow-hidden mb-4 shadow-sm border border-gray-200 transition-shadow duration-300 group-hover:shadow-md">
        <img
            src={imageSrc}
            // alt={name}
            className="w-full h-full object-cover object-top filter brightness-[0.95] contrast-[1.05] group-hover:scale-105 transition-transform duration-500 bg-white"
            loading="lazy"
        />
      </div>

      {/* Name placed in the "Read More" position with a subtle top border */}
      <div className="w-full border-t border-[#C4A661]/50 pt-3 text-center px-1">
        <h3 className="text-[12px] md:text-[13px] font-serif font-bold text-[#e0e0e0] tracking-[0.15em] uppercase truncate">
          {name}
            <br/>
            {state}
        </h3>
      </div>
    </article>
);

// --- Main Component ---

export default function OurAdvisoryAssociate() {
  return (
      <div className="bg-[#303030] min-h-auto py-15 px-4 sm:px-8 md:px-12 xl:px-24">
        <div className="max-w-350 mx-auto flex flex-col gap-24">

          {/* Advisory Section */}
          {/*<section aria-labelledby="advisory-heading">*/}
          {/*  <SectionHeader prefix="Our" highlight="Advisory (Honoriam)" />*/}

          {/*  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-x-6 gap-y-12 justify-items-center">*/}
          {/*    {advisoryData.map((member) => (*/}
          {/*        <TeamMemberCard key={`advisory-${member.id}`} {...member} />*/}
          {/*    ))}*/}
          {/*  </div>*/}
          {/*</section>*/}

          {/* Associate Partner Section */}
          <section aria-labelledby="associate-heading">
            <SectionHeader prefix="Associate" highlight="Partners" />

            <div className="flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-8 gap-y-10 md:gap-y-12">
              {associateData.map((member) => (
                  <TeamMemberCard key={`associate-${member.id}`} {...member} />
              ))}
            </div>
          </section>

        </div>
      </div>
  );
}