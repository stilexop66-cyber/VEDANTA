/* eslint-disable no-unused-vars */
import React from "react";

const SocialCommitmentSection = () => {
    // GEO/SEO: Injecting structured data for the Non-Profit Organization
    // const schemaData = {
    //     "@context": "https://schema.org",
    //     "@type": "NGO",
    //     "name": "IVS",
    //     "foundingDate": "1990",
    //     "description": "A non-profit organization associated with Vedanta Legal Associates, dedicated to social welfare, legal awareness, and providing free legal aid.",
    //     "parentOrganization": {
    //         "@type": "LegalService",
    //         "name": "Vedanta Legal Associates"
    //     },
    //     "knowsAbout": [
    //         "Free Legal Aid",
    //         "Women Empowerment",
    //         "Child Education",
    //         "Constitutional Rights"
    //     ]
    // };

    return (
        <section
            className="w-full max-w-7xl mx-auto py-12 md:py-5 px-6 md:px-12 bg-[#303030]"
            aria-labelledby="social-commitment-heading"
        >
            {/* JSON-LD Schema for rich snippet and LLM context extraction */}
            {/*<script*/}
            {/*    type="application/ld+json"*/}
            {/*    dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}*/}
            {/*/>*/}

            <header className="mb-8 md:mb-10 text-center flex flex-col items-center">
                <h2
                    id="social-commitment-heading"
                    className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-wide text-[#e0e0e0] mb-2"
                >
                    “Our Social Commitment”
                </h2>
                <h3 className="text-xl md:text-2xl font-bold text-[#e0e0e0] tracking-wide">
                    IVS (Since 1990)
                </h3>
                <div className="w-16 h-0.5 md:h-[3px] bg-[#C4A661] mt-6"></div>
            </header>

            <article className="text-[#e0e0e0] text-[15px] sm:text-[16px] md:text-[22px] leading-[1.8] font-normal tracking-wide space-y-4 md:space-y-3 text-justify ">
                <p>
                    IVS is a non-profit organisation associated with Vedanta Legal Associates.
                    Established in 1990, IVS has been dedicated to social welfare and empowerment activities for more than three decades.
                    The organisation works towards promoting social equality and making justice accessible to all sections of society.
                    Through various initiatives, IVS conducts legal awareness programmes, provides free legal aid to those in need, supports educational opportunities for children from weaker sections, and runs women empowerment awareness campaigns.
                    IVS functions independently as a charitable body and remains committed to community development and the upliftment of society in line with constitutional values of equality and justice.
                </p>
            </article>
        </section>
    );
};

export default SocialCommitmentSection;