/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Header = () => {
  const location = useLocation();
  const path = location.pathname;
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Our Team", path: "/team" },
    { name: "Practice Area", path: "/practice-areas" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-6 md:px-12 py-4 md:py-2 text-white bg-black backdrop-blur-md border-b border-[#c4a661]/20">
      <div className="flex items-center justify-between">
        {/* Logo Placeholder */}
        <div className="flex items-center space-x-2 md:space-x-3">
          <div className="w-12 h-12 md:w-16 md:h-16 rounded-full border-2 border-gray-500 flex items-center justify-center relative overflow-hidden">
            <img
              src="/favicon.svg"
              alt="Vedanta Legal Logo"
              className="w-full h-full object-cover"
            />
          </div>
          <h1 className="text-xl md:text-2xl font-bold tracking-wider  ">
            VEDANTA
          </h1>
        </div>

        {/* Navigation Desktop */}
        <nav className="hidden md:flex items-center space-x-8 text-sm">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => {
                if (path !== link.path) {
                  window.scrollTo({ top: 0, left: 0, behavior: "instant" });
                }
              }}
              className={`transition-colors duration-300  whitespace-nowrap ${
                path === link.path
                  ? "bg-[#2a2415] text-white px-4 py-2 border-b-2 border-[#c4a661]"
                  : "text-gray-300"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white hover:text-[#c4a661]"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle Menu"
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Navigation Dropdown */}
      {isMobileMenuOpen && (
        <nav className="absolute top-full left-0 right-0 bg-[#111] border-b border-[#c4a661]/30 shadow-[0_10px_25px_rgba(0,0,0,0.8)] flex flex-col md:hidden py-4 px-6 space-y-4 z-50">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => {
                if (path !== link.path) {
                  window.scrollTo({ top: 0, left: 0, behavior: "instant" });
                }
                setIsMobileMenuOpen(false);
              }}
              className={`text-base font-medium py-3 transition-colors duration-300 hover:text-[#c4a661] ${
                path === link.path
                  ? "text-[#c4a661] border-l-4 border-[#c4a661] pl-3 bg-[#1a1a1a]"
                  : "text-gray-300 pl-3"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
};

export default Header;
