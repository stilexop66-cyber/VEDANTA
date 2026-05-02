/* eslint-disable no-unused-vars */
import React from "react";
import Footer from "../../components/layout/Footer";
import FounderSection from "./FounderSection";
import Header from "../../components/layout/Header";
import AboutSection from "./AboutSection";
import ContactFormSection from "./ContactFormSection";
import OurServicesSection from "./OurServicesSection";
import OurTeamSection from "./OurTeamSection";
import ClientTestimonialsSection from "./ClientTestimonialsSection";
import ClientsAndContactSection from "./ClientsAndContactSection";

export default function Home() {
  return (
    <div className="  text-gray-800 bg-[#FAFAFA]">
      {/* HEADER & HERO SECTION */}
      <div className="relative bg-black">
        <Header />
        <FounderSection />
      </div>

      {/* 2. ABOUT US */}
      <AboutSection />

      <ContactFormSection />

      {/* 3. SERVICES */}
      <OurServicesSection />

      {/* 4. OUR TEAM */}
      <OurTeamSection />

      {/* 5. CLIENT TESTIMONIALS */}
      <ClientTestimonialsSection />

      {/* 6. OUR CLIENTS & CONTACT US FORM */}
      <ClientsAndContactSection />

      {/* FOOTER */}
      <Footer />
    </div>
  );
}
