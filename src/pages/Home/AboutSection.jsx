// /* eslint-disable no-unused-vars */
// import React from "react";
// import { ArrowUpRight } from "lucide-react";
// import Lawfirmdesks from "../../assets/HomeAbout1.png";
// import Courtroom1 from "../../assets/HomeAbout2.png";
// import Courtroom2 from "../../assets/HomeAbout3.png";
//
// const AboutSection = () => {
//   return (
//     <section className="relative w-full max-w-250 mx-auto py-1 px-1 md:px-1 mt-4 xl:mt-16 bg-[#FAFAFA] overflow-hidden">
//       {/* Title */}
//       <div className="mb-10">
//         <h2 className="text-[36px] sm:text-[44px] md:text-[48px]   tracking-normal uppercase leading-none text-[#a08552]">
//           ABOUT <span className="text-black font-bold">US</span>
//         </h2>
//         <div className="w-21.25 h-0.75 bg-[#a08552] mt-3"></div>
//       </div>
//
//       {/* Image Grid */}
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-4 h-auto md:h-100">
//         {/* Left Large Image */}
//         <div className="w-full h-70 md:h-full overflow-hidden">
//           <img
//             src={Lawfirmdesks}
//             alt="Law firm desks"
//             className="w-full h-full object-cover object-center"
//           />
//         </div>
//
//         {/* Right Stacked Images */}
//         <div className="flex flex-col gap-4 h-full">
//           <div className="w-full h-35 md:h-[calc(50%-8px)] overflow-hidden">
//             <img
//               src={Courtroom1}
//               alt="Courtroom 1"
//               className="w-full h-full object-cover object-center"
//             />
//           </div>
//           <div className="w-full h-35 md:h-[calc(50%-8px)] overflow-hidden">
//             <img
//               src={Courtroom2}
//               alt="Courtroom 2"
//               className="w-full h-full object-cover object-center"
//             />
//           </div>
//         </div>
//       </div>
//
//       {/* Text Context Box */}
//       <div className="mt-8 bg-white shadow-[0_8px_30px_rgba(0,0,0,0.06)] p-6 md:p-10 mb-8 relative z-10 w-full max-w-[95%] mx-auto lg:max-w-full lg:mx-0">
//         <div className="text-gray-900 text-[12.5px] md:text-[13.5px] leading-[1.8]   font-light tracking-wide flex flex-col gap-0">
//           <p className="mb-0">
//             Vedanta Legal Associates is a full-service law firm committed to
//             excellence, integrity, and justice. The firm was established with a
//             vision to provide high-quality legal services while promoting legal
//             awareness among the people.
//             <br className="hidden md:block" />
//             The firm has three Founders and two Co-Founders. The Founders are
//             Shri Bijoy Sarkar, Shri Debesh Chandra Ray, and Shri Jamiar Hossain
//             Khadim. The Co-Founders are Shri Kuntal Ghosh and Smti Sangita
//             Biswas.
//             <br className="hidden md:block" />
//             Shri Bijoy Sarkar, one of the principal Founders, brings nearly five
//             decades of rich and extensive legal experience. He has practiced for
//             almost 50 years before the High Courts across India, the Supreme
//             Court of India, various District Courts, Sessions Courts, and
//             Tribunals.
//             <br className="hidden md:block" />
//             With the combined strength and expertise of three Founders and two
//             Co-Founders, Vedanta Legal Associates brings together vast
//             knowledge, deep understanding of law, and a shared commitment to
//             justice. The firm blends traditional ethical values with modern
//             legal practices to effectively serve its clients.
//             <br className="hidden md:block" />
//             At Vedanta Legal Associates, we are dedicated to providing reliable
//             legal solutions to individuals, families, businesses, and
//             institutions. We are equally committed to mentoring the new
//             generation of junior lawyers and spreading legal awareness so that
//             every citizen understands and can exercise their constitutional
//             rights.
//             <br className="hidden md:block" />
//             Our practice is guided by the principles of honesty, dedication, and
//             an unwavering commitment to truth and justice. We strive to be a
//             trusted legal partner for clients in across India.
//           </p>
//         </div>
//
//         {/* Button */}
//         <div className="mt-8">
//           <button className="bg-[#a08552] text-white px-6 py-2.5 text-sm   flex items-center justify-center gap-2 hover:bg-[#8a7246] transition-colors group shadow-sm font-medium tracking-wide">
//             View More
//             <span className="bg-white rounded-full p-0.75 ml-1 flex items-center justify-center text-[#a08552] group-hover:text-[#8a7246]">
//               <ArrowUpRight size={14} strokeWidth={2.5} />
//             </span>
//           </button>
//         </div>
//       </div>
//     </section>
//   );
// };
//
// export default AboutSection;





/* eslint-disable no-unused-vars */
import React from "react";

const AboutSection = () => {
  // GEO/SEO: Injecting structured data for AI Overviews and Search Engines
  // const schemaData = {
  //   "@context": "https://schema.org",
  //   "@type": "LegalService",
  //   "name": "Vedanta Legal Associates",
  //   "description": "A full-service law firm committed to excellence, integrity, and justice. Founded by Shri Bijoy Sarkar with nearly five decades of legal experience.",
  //   "foundingDate": "2026",
  //   "founders": [
  //     { "@type": "Person", "name": "Shri Bijoy Sarkar" },
  //     { "@type": "Person", "name": "Shri Debesh Chandra Ray" },
  //     { "@type": "Person", "name": "Shri Jamiar Hossain Khadim" }
  //   ],
  //   "employee": [
  //     { "@type": "Person", "name": "Shri Kuntal Ghosh", "jobTitle": "Co-Founder" },
  //     { "@type": "Person", "name": "Smti Sangita Biswas", "jobTitle": "Co-Founder" }
  //   ]
  // };

  return (
      <section
          className="w-full max-w-7xl mx-auto py-12 md:py-5 md:mt-5 px-6 md:px-12 bg-[#FAFAFA]"
          aria-labelledby="about-heading"
      >
        {/* JSON-LD Schema for rich snippet and LLM context extraction */}
        {/*<script*/}
        {/*    type="application/ld+json"*/}
        {/*    dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}*/}
        {/*/>*/}

        <header className="mb-6 md:mb-8 text-center">
          <h2
              id="about-heading"
              className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-wide uppercase text-black"
          >
            ABOUT US
          </h2>
        </header>

        <article className="text-gray-900 text-[15px] sm:text-[16px] md:text-[18px] leading-[1.6] font-normal tracking-wide space-y-4 md:space-y-3">
          <p>
            Vedanta Legal Associates is a full-service law firm committed to excellence, integrity, and
            justice. The firm was established with a vision to provide high-quality legal services while
            promoting legal awareness among the people.
          </p>
          <p>
            The firm has three Founders and two Co-Founders. The Founders are Shri Bijoy Sarkar, Shri
            Debesh Chandra Ray, and Shri Jamiar Hossain Khadim. The Co-Founders are Shri Kuntal
            Ghosh and Smti Sangita Biswas.
          </p>
          <p>
            Shri Bijoy Sarkar, one of the principal Founders, brings nearly five decades of rich and
            extensive legal experience. He has practiced for almost 50 years before the High Courts
            across India, the Supreme Court of India, various District Courts, Sessions Courts, and
            Tribunals.
          </p>
          <p>
            With the combined strength and expertise of three Founders and two Co-Founders, Vedanta
            Legal Associates brings together vast knowledge, deep understanding of law, and a shared
            commitment to justice. The firm blends traditional ethical values with modern legal practices
            to effectively serve its clients.
          </p>
          <p>
            At Vedanta Legal Associates, we are dedicated to providing reliable legal solutions to
            individuals, families, businesses, and institutions. We are equally committed to mentoring the
            new generation of junior lawyers and spreading legal awareness so that every citizen
            understands and can exercise their constitutional rights.
          </p>
          <p>
            Our practice is guided by the principles of honesty, dedication, and an unwavering
            commitment to truth and justice. We strive to be a trusted legal partner for clients in across
            India.
          </p>
        </article>
      </section>
  );
};

export default AboutSection;
