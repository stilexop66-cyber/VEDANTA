/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import { Star } from "lucide-react";

const testimonialsData = [
  {
    id: 1,
    name: "Jordan Sash",
    role: "Travel Enthusiast",
    company: "ABC SOLUTIONS",
    quote:
      "The services of the lawyers were really awesome. Really loved the way how they helped me solve the problem & find a better way to the problem. Truly outstanding. highly recommand.",
    rating: 4,
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80",
    smallImage:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&q=80",
  },
  {
    id: 2,
    name: "Alex Morgan",
    role: "Business Owner",
    company: "ABC SOLUTIONS",
    quote:
      "An incredible experience from start to finish. The team was highly professional and deeply knowledgeable, taking the stress out of our legal issues. I couldn't be happier with the outcome.",
    rating: 5,
    image:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=200&q=80",
    smallImage:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=150&q=80",
  },
  {
    id: 3,
    name: "Sarah Williams",
    role: "Founder",
    company: "ABC SOLUTIONS",
    quote:
      "I highly appreciate their prompt response and strategic approach. They took the time to understand my case and provided clear, actionable advice that changed the trajectory of our business.",
    rating: 5,
    image:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80",
    smallImage:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80",
  },
  {
    id: 4,
    name: "Olivia Thompson",
    role: "Corporate Client",
    company: "ABC SOLUTIONS",
    quote:
      "Their attention to detail and dedication to client success is unmatched. I felt completely supported throughout the entire legal process. Would highly recommend their expert team to anyone.",
    rating: 5,
    image:
      "https://images.unsplash.com/photo-1531123897727-8f129e1bf98a?auto=format&fit=crop&w=200&q=80",
    smallImage:
      "https://images.unsplash.com/photo-1531123897727-8f129e1bf98a?auto=format&fit=crop&w=150&q=80",
  },
];

const StarRating = ({ rating }) => {
  return (
    <div className="flex gap-1.5 mt-8">
      {[1, 2, 3, 4, 5].map((star) => (
        <Star
          key={star}
          size={18}
          className={`${star <= rating ? "text-[#e5c158] fill-[#e5c158]" : "text-[#dcdcdc] fill-[#dcdcdc]"}`}
        />
      ))}
    </div>
  );
};

const SmallCard = ({ name, role, image, active, onClick }) => (
  <div
    onClick={onClick}
    className={`bg-white px-5 py-4 lg:py-5 flex items-center justify-start gap-4 cursor-pointer transition-all duration-300 shadow-md group ${active ? "border-b-4 border-[#a08552] pb-4 lg:pb-4" : "border-b-4 border-transparent hover:border-gray-200"}`}
  >
    <div className="w-11.25 h-11.25 rounded-full overflow-hidden shrink-0">
      <img
        src={image}
        alt={name}
        className={`w-full h-full object-cover filter transition-all duration-300 ${active ? "brightness-110" : "brightness-95 grayscale-20"}`}
      />
    </div>
    <div className="flex flex-col">
      <h5 className="text-[#111]   text-[15px] font-medium leading-tight mb-1">
        {name}
      </h5>
      <p className="text-gray-500   text-[11px] md:text-[12px] uppercase tracking-wider">
        {role}
      </p>
    </div>
  </div>
);

const ClientTestimonialsSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  // Auto-slide effect
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((current) => (current + 1) % testimonialsData.length);
    }, 6000); // Change testimonial every 6 seconds

    return () => clearInterval(timer);
  }, []);

  const activeTestimonial = testimonialsData[activeIndex];

  return (
    <section className="relative w-full py-20 lg:py-32 xl:py-36 overflow-visible mt-8">
      {/* Background Image with dark overlay */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{
          // An image evoking a dark academia / law library shelving
          backgroundImage:
            'url("https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&w=2000&q=80")',
        }}
      >
        <div className="absolute inset-0 bg-[#3a200a]/70 mix-blend-multiply transition-opacity duration-1000"></div>
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      <div className="relative z-10 max-w-350 mx-auto px-4 md:px-8">
        {/* Top Half Split Layout */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-12 lg:gap-8 mb-12">
          {/* Left Content - Title Area */}
          <div className="flex flex-col w-full lg:w-7/12 pt-4 z-10">
            <h2 className="  tracking-tight leading-none wrap-break-word">
              <span className="text-[#a08552] block text-[42px] sm:text-[50px] md:text-[64px] font-normal uppercase">
                CLIENT
              </span>
              <span className="text-white block text-[46px] sm:text-[54px] md:text-[70px] font-bold uppercase -mt-2">
                TESTIMONIALS
              </span>
            </h2>
            <div className="w-30 h-1 bg-[#a08552] mt-4 mb-8"></div>

            <p className="text-gray-200   text-[15px] md:text-[16px] font-light leading-[1.65] max-w-95">
              Real experiences, real memories—hear from travelers who found
              their perfect stay with Winzy.
            </p>
          </div>

          {/* Right Content - Large Testimonial Card */}
          <div className="w-full lg:w-5/12 shrink-0">
            <div className="bg-white p-8 md:p-12 shadow-2xl h-full flex flex-col justify-center min-h-75 relative transition-all duration-300 z-20">
              {/* User Meta Row */}
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12.5 h-12.5 rounded-full overflow-hidden shrink-0">
                  <img
                    key={activeTestimonial.id + "-img"}
                    src={activeTestimonial.image}
                    alt={activeTestimonial.name}
                    className="w-full h-full object-cover animate-fadeIn"
                  />
                </div>
                <div
                  className="flex flex-col flex-1 animate-fadeIn"
                  key={activeTestimonial.id + "-meta"}
                >
                  <h4 className="text-black   text-[18px] md:text-[20px] font-bold leading-tight mb-1">
                    {activeTestimonial.name}
                  </h4>
                  <p className="text-gray-600   text-[13px] md:text-[14px] font-light">
                    {activeTestimonial.role}
                  </p>
                </div>
              </div>

              {/* Quote Row */}
              <p
                key={activeTestimonial.id + "-quote"}
                className="text-gray-600   text-[13.5px] md:text-[14.5px] font-light leading-[1.8] tracking-wide m-0 animate-fadeIn"
              >
                {activeTestimonial.quote}
              </p>

              {/* Star Rating mapped down */}
              <div
                key={activeTestimonial.id + "-stars"}
                className="animate-fadeIn"
              >
                <StarRating rating={activeTestimonial.rating} />
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Half - Small Selection Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5 mt-24 md:mt-28 lg:mt-36">
          {testimonialsData.map((item, index) => (
            <SmallCard
              key={item.id}
              name={item.name}
              role={item.company}
              image={item.smallImage}
              active={activeIndex === index}
              onClick={() => setActiveIndex(index)}
            />
          ))}
        </div>
      </div>

      {/* Tailwind Custom Keyframes inserted locally for smooth crossfade transitions */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(5px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.4s ease-out forwards;
        }
      `,
        }}
      />
    </section>
  );
};

export default ClientTestimonialsSection;
