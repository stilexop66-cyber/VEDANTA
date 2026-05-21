/* eslint-disable no-unused-vars */
import React from "react";
import HeroHomeBG from "../../assets/HeroHomeBG.png";
import FounderPhoto from "../../assets/FounderPhoto.png";
import Signature from "../../assets/FounderSign.png";
// import Logo from "../../assets/Logo.png"; // Uncomment when you have the logo image

const FounderSection = () => {
    return (<section

        className="relative min-h-screen w-full text-white overflow-hidden py-16 md:py-24 px-5 sm:px-8 md:px-12 xl:px-24 flex flex-col items-center justify-start"
        // style={{
        //     backgroundImage: `url(${HeroHomeBG})`, backgroundSize: "cover", backgroundPosition: "center",
        // }}
        // aria-label="Vedanta Legal Associates Introduction"
    >
        {/* Optional: Dark overlay to ensure text readability over the background image */}
        <div className="absolute inset-0 bg-black/30 pointer-events-none"></div>

        {/* --- HERO / TOP SECTION --- */}
        <header
            className="relative z-10 w-full max-w-5xl mx-auto flex flex-col items-center text-center mt-4 mb-20 md:mb-26 space-y-8">
            {/* Logo Placeholder */}
            <div
                className="flex items-center justify-center w-48 h-48 md:w-64 md:h-64 lg:w-72 lg:h-72 bg-white/10 rounded-full border-none border-[#C4A661]/50 backdrop-blur-sm mb-6">
                <img src="/favicon.svg" alt="Vedanta Legal Associates Logo" className="w-full h-full object-contain"/>
                <span className="text-2xl md:text-3xl font-bold text-[#C4A661] tracking-widest uppercase">

          </span>
            </div>

            {/* Firm Name */}
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold tracking-wide text-white drop-shadow-lg">
                Vedanta Legal Associates
            </h1>

            {/* Tagline */}
            <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-medium italic text-gray-200 tracking-wide max-w-4xl drop-shadow-md">
                “Committed to Diligent and Time Bound Resolution of Matters”
            </p>
        </header>

        {/* --- FOUNDER SECTION / BOTTOM SECTION --- */}
        <article
            className="relative z-10 w-full max-w-7xl mx-auto flex flex-col lg:flex-row items-center lg:items-start gap-12 lg:gap-8">

            {/* Left Column: Image & Name */}
            <div className="w-full lg:w-4/12 flex flex-col items-center lg:items-start xl:pl-4">
                <div className="relative inline-block">
                    {/* Gold accents */}
                    <div
                        className="absolute -top-3 -left-3 md:-top-4 md:-left-4 w-10 h-10 md:w-12 md:h-12 border-t-2 border-l-2 border-[#C4A661]"></div>
                    <div
                        className="absolute -bottom-3 -right-3 md:-bottom-4 md:-right-4 w-12 h-12 md:w-16 md:h-16 border-b-2 border-r-2 border-[#C4A661]"></div>

                    {/* Photo */}
                    <div
                        className="relative z-10 w-[280px] h-[360px] sm:w-[320px] sm:h-[420px] md:w-[380px] md:h-[480px] rounded-[40px] shadow-[0_0_40px_rgba(0,0,0,0.6)] overflow-hidden bg-cover bg-center border border-white/10"
                        style={{
                            backgroundImage: `url(${FounderPhoto})`,
                        }}
                        role="img"
                        aria-label="Portrait of Founder B.S. Sarkar"
                    ></div>
                </div>

                <div
                    className="mt-8 text-center lg:text-left pt-2 pb-6 w-full flex flex-col items-center lg:items-start">
                    <h3 className="text-[26px] md:text-[32px] font-bold tracking-wide text-white">
                        B.S. Sarkar
                    </h3>
                    <div className="w-12 md:w-16 h-0.5 md:h-[3px] bg-[#C4A661] my-4"></div>
                    <img
                        src={Signature}
                        alt="B.S. Sarkar Signature"
                        className="w-32 sm:w-40 md:w-48 opacity-100"
                    />
                </div>
            </div>

            {/* Right Column: Text Content */}
            <div className="w-full lg:w-8/12 flex flex-col justify-center lg:pl-8 xl:pl-12">
                <h2 className="text-[28px] sm:text-[34px] md:text-[40px] font-bold tracking-[0.03em] mb-4 uppercase text-white leading-tight">
                    Founder's Desk
                </h2>
                {/* Gold Bar underneath */}
                <div className="w-12 md:w-16 h-0.5 md:h-0.75 bg-[#C4A661] mb-8 md:mb-10"></div>

                <div
                    className="space-y-4 md:space-y-5 text-[#e0e0e0] text-[15px] sm:text-[16px] md:text-[18px] leading-[1.4] md:leading-[1.4] tracking-[0.015em] font-light md:pr-10 xl:pr-16 mb-8 text-justify lg:text-left">
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

                {/* Slogan */}
                <div
                    className="text-[28px] sm:text-[38px] md:text-[44px] lg:text-[50px] tracking-wider sm:tracking-widest md:tracking-widest font-extrabold leading-[1.3] mt-2 lg:mt-4 text-center lg:text-left">
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

        </article>
    </section>);
};

export default FounderSection;