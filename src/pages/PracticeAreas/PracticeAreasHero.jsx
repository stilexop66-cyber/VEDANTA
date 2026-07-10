import Header from "../../components/layout/Header";

const PracticeAreasHero = () => {
  return (
    <div className="bg-black w-full">
      <Header />

      <div className="w-full pt-20 sm:pt-24 md:pt-20">
        <div className="w-full overflow-hidden">

          {/* Mobile Image */}
          <img
            src="/WhatsApp Image 2026-06-10 at 15.44.45.jpeg"
            alt="Practice Areas Mobile"
            className="block md:hidden w-full h-auto object-contain"
          />

          {/* Desktop / Tablet Image */}
          <img
            src="/WhatsApp Image 2026-07-10 at 12.54.01.jpeg"
            alt="Practice Areas Desktop"
            className="hidden md:block w-full h-auto object-contain"
          />

        </div>
      </div>
    </div>
  );
};

export default PracticeAreasHero;