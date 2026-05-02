/* eslint-disable no-unused-vars */
import React from "react";
import ContactHero from "./ContactHero";
import ContactForm from "./ContactForm";
import Footer from "../../components/layout/Footer";

export default function Contact() {
  return (
    <div className="  text-gray-800 bg-[#FAFAFA] min-h-screen flex flex-col">
      {/* 1. HERO SECTION */}
      <ContactHero />

      {/* 2. CONTACT FORM SECTION */}
      <ContactForm />

      {/* FOOTER */}
      <Footer />
    </div>
  );
}
