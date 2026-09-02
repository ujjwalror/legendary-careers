'use client';

import React, { useState } from 'react';
import Link from 'next/link';

interface NavbarProps {
  onOpenConsultation?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenConsultation }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 w-full z-40 bg-white/95 backdrop-blur-md border-b border-[#C2DAF3]/60 shadow-sm">
      {/* Top Announcement Bar */}
      <div className="bg-[#061D38] text-white text-xs font-body py-2 px-4 sm:px-8 xl:px-12 flex justify-center sm:justify-between items-center">
        <div className="flex items-center space-x-6">
          <span className="flex items-center space-x-1.5">
            <span className="w-2 h-2 rounded-full bg-[#96F189] animate-pulse" />
            <span>2026/2027 Global Intakes Now Open for Admissions</span>
          </span>
          <span className="hidden md:inline text-zinc-400">|</span>
          <span className="hidden md:inline text-[#C2DAF3]">
            MARA Registered Migration Agents & QEAC Certified Counselors
          </span>
        </div>

        <div className="hidden sm:flex items-center space-x-4">
          <a href="tel:+61489085855" className="hover:text-[#96F189] transition-colors">
            📞 +61 489 085 855
          </a>
          <span className="hidden sm:inline text-zinc-600">|</span>
          <a href="mailto:info@legendarycareers.com" className="hidden sm:inline hover:text-[#96F189] transition-colors">
            ✉️ info@legendarycareers.com
          </a>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="max-w-[1536px] mx-auto px-4 sm:px-8 xl:px-12 py-4 flex items-center justify-between">
        {/* Brand Logo */}
        <Link href="/" className="flex items-center group shrink-0">
          <img
            src="/logo.png"
            alt="Legendary Careers Logo"
            className="h-10 sm:h-12 w-auto object-contain transition-transform group-hover:scale-105"
          />
        </Link>

        {/* Desktop Nav Links */}
        <div className="hidden lg:flex items-center space-x-5 xl:space-x-7 font-body font-medium text-xs xl:text-sm text-[#061D38]">
          <Link href="/#services" className="hover:text-[#0163C8] transition-colors">
            Our services
          </Link>
          <Link href="/about" className="hover:text-[#0163C8] transition-colors">
            About us
          </Link>
          <Link href="/agents" className="hover:text-[#0163C8] transition-colors">
            Our agents
          </Link>
          <Link href="/contact" className="hover:text-[#0163C8] transition-colors">
            Contact us
          </Link>
          <Link href="/calculator" className="hover:text-[#0163C8] transition-colors">
            Point Calculator
          </Link>
          <Link href="/financial-calculator" className="hover:text-[#0163C8] transition-colors">
            Financial Calculator
          </Link>
        </div>

        {/* CTA Buttons */}
        <div className="hidden sm:flex items-center space-x-3">
          <button
            onClick={onOpenConsultation}
            className="px-5 py-2.5 rounded-full bg-[#0163C8] text-white font-body font-semibold text-xs uppercase tracking-wider hover:bg-[#061D38] hover:shadow-lg hover:shadow-[#0163C8]/20 transition-all duration-300 cursor-pointer"
          >
            Book Consultation
          </button>
          <a
            href="https://wa.me/61348328472"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 rounded-full bg-[#25D366] text-white font-body font-semibold text-xs uppercase tracking-wider hover:bg-[#1ebd59] hover:shadow-lg hover:shadow-[#25D366]/20 transition-all duration-300 flex items-center space-x-1.5"
          >
            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
              <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
            </svg>
            <span>WhatsApp Us</span>
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 rounded-lg text-[#061D38] hover:bg-[#C2DAF3]/30"
          aria-label="Toggle Navigation Menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {mobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-[#C2DAF3] px-6 py-4 space-y-3 font-body text-sm font-medium">
          <Link
            href="/#services"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-[#061D38] hover:text-[#0163C8]"
          >
            Our services
          </Link>
          <Link
            href="/about"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-[#061D38] hover:text-[#0163C8]"
          >
            About us
          </Link>
          <Link
            href="/agents"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-[#061D38] hover:text-[#0163C8]"
          >
            Our agents
          </Link>
          <Link
            href="/contact"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-[#061D38] hover:text-[#0163C8]"
          >
            Contact us
          </Link>
          <Link
            href="/calculator"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-[#061D38] hover:text-[#0163C8]"
          >
            Point Calculator
          </Link>
          <Link
            href="/financial-calculator"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-[#061D38] hover:text-[#0163C8]"
          >
            Financial Calculator
          </Link>
          <div className="pt-2 space-y-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                if (onOpenConsultation) onOpenConsultation();
              }}
              className="w-full text-center py-3 rounded-xl bg-[#0163C8] text-white font-semibold text-xs uppercase tracking-wider cursor-pointer"
            >
              Book Consultation
            </button>
            <a
              href="https://wa.me/61348328472"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center space-x-2 text-center py-3 rounded-xl bg-[#25D366] text-white font-semibold text-xs uppercase tracking-wider"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
              </svg>
              <span>WhatsApp Us</span>
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

