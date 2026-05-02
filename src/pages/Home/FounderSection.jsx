/* eslint-disable no-unused-vars */
import React from "react";

const FounderSection = () => {
  return (
    <section className="relative min-h-[90vh] bg-black text-white overflow-hidden py-24 md:py-32 px-5 sm:px-8 md:px-12 xl:px-24 flex items-center   bg-diamond-grid">
      {/* Light gradient mask to make grid fade out towards center */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_10%,#000000_85%)] pointer-events-none"></div>

      <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col lg:flex-row items-center lg:items-start gap-12 lg:gap-16 pt-16">
        {/* Left Column: Image & Name */}
        <div className="w-full lg:w-4/12 flex flex-col xl:pl-4 mt-8 lg:mt-0">
          <div className="relative inline-block self-center lg:self-start">
            {/* Gold accents */}
            <div className="absolute -top-3 -left-3 md:-top-4 md:-left-4 w-10 h-10 md:w-12 md:h-12 border-t-2 border-l-2 border-[#C4A661]"></div>
            <div className="absolute -bottom-3 -right-3 md:-bottom-4 md:-right-4 w-12 h-12 md:w-16 md:h-16 border-b-2 border-r-2 border-[#C4A661]"></div>

            {/* Photo */}
            <div
              className="relative z-10 w-60 h-80 sm:w-[320px] sm:h-105 shadow-[0_0_40px_rgba(0,0,0,1)] overflow-hidden bg-cover bg-center"
              style={{
                backgroundImage: `url('https://images.unsplash.com/photo-1556157382-97eda2d62296?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80')`,
              }}
            ></div>
          </div>

          <div className="mt-8 text-center lg:text-left pt-2 pb-6 lg:pl-2.5">
            <h2 className="text-[26px] sm:text-[32px]   font-bold tracking-wide text-white">
              B.S. Sarkar
            </h2>
            <div className="w-px h-1 bg-[#C4A661] my-2 sm:my-4 mx-auto lg:mx-0 opacity-0"></div>
            <p className="text-[34px] sm:text-[44px] text-white signature-font transform rotate-[-8deg] origin-left w-fit mx-auto lg:mx-0 ml-1">
              B.s. Sarkar
            </p>
          </div>
        </div>

        {/* Right Column: Text Content */}
        <div className="w-full lg:w-8/12 flex flex-col justify-center lg:pl-8 xl:pl-12">
          <h2 className="text-[28px] sm:text-[38px] md:text-[46px]   font-bold tracking-[0.03em] mb-4 uppercase text-white leading-tight">
            FROM THE FOUNDER'S DESK
          </h2>
          {/* Gold Bar underneath */}
          <div className="w-12 md:w-16 h-0.5 md:h-0.75 bg-[#C4A661] mb-8 md:mb-12"></div>

          <div className="space-y-[1.2rem] md:space-y-[1.8rem] text-[#e0e0e0] text-[14px] sm:text-[16px] md:text-[17px] leading-[1.7] md:leading-[1.8] tracking-[0.015em] font-light md:pr-10 xl:pr-16 mb-12">
            <p>
              As the Founder of Vedanta Legal Associates, I, Shri Bijoy Sarkar,
              have practiced for almost 50 years before the High Courts across
              India, the Supreme Court of India, various District Courts,
              Sessions Courts, and Tribunals.
            </p>
            <p>
              It is with great pride and humility that I reflect on nearly five
              decades of dedicated service to the noble profession of law.
            </p>
            <p>
              The formation of Vedanta Legal Associates stems from my sincere
              desire to share my knowledge and extensive experience with the new
              generation of junior lawyers, associates, and those who tirelessly
              fight for justice on behalf of the suffering members of society.
              This initiative is also driven by my strong belief in spreading
              legal awareness so that every citizen knows and understands their
              constitutional rights.
            </p>
            <p>
              This firm stands as a living testament to that vision — rooted in
              ethics, excellence, and an unwavering commitment to truth and
              justice.
            </p>
          </div>

          <div className="text-[28px] sm:text-[38px] md:text-[44px] lg:text-[50px]   tracking-wider sm:tracking-widest leading-[1.3] mt-2 lg:mt-4 text-center lg:text-left">
            <div>
              <span className="text-[#C4A661]">SMART</span>{" "}
              <span className="text-white">LAW ..</span>
            </div>
            <div className="mt-1 md:mt-2">
              <span className="text-white">BETTER</span>{" "}
              <span className="text-[#C4A661]">OUTCOMES ..</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FounderSection;
