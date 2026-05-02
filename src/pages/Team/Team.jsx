/* eslint-disable no-unused-vars */
import React from "react";
import TeamHero from "./TeamHero";
import OurFounders from "./OurFounders";
import OurCoFounder from "./OurCoFounder";
import OurAdvisoryAssociate from "./OurAdvisoryAssociate";
import ContactFormSection from "../Home/ContactFormSection";
import Footer from "../../components/layout/Footer";

const Team = () => {
  return (
    <div>
      <TeamHero />
      <OurFounders />
      <OurCoFounder />
      <OurAdvisoryAssociate />
      <ContactFormSection />
      <Footer />
    </div>
  );
};

export default Team;
