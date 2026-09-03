'use client';

import React from 'react';
import Link from 'next/link';

export const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-[#061D38] text-white py-16 px-6 font-body border-t border-[#0163C8]/30">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center space-x-3">
              <div className="p-2 rounded-xl bg-white">
                <img
                  src="/logo.png"
                  alt="Legendary Careers Logo"
                  className="h-10 w-auto object-contain"
                />
              </div>
            </div>
            <p className="text-xs text-zinc-300 leading-relaxed font-normal max-w-sm">
              Legendary Careers is a premier registered migration and international student placement agency specializing in overseas education, visa filing, and Permanent Residency (PR) pathways.
            </p>

            {/* Accreditations & Socials */}
            <div className="flex flex-wrap gap-2 pt-2">
              <span className="px-3 py-1 rounded bg-[#0163C8]/40 border border-[#0163C8] text-[10px] font-bold text-[#96F189] uppercase tracking-wider">
                MARA Registered Migration Agents
              </span>
              <span className="px-3 py-1 rounded bg-[#0163C8]/40 border border-[#0163C8] text-[10px] font-bold text-[#C2DAF3] uppercase tracking-wider">
                QEAC Certified Counselor
              </span>
              <span className="px-3 py-1 rounded bg-[#0163C8]/40 border border-[#0163C8] text-[10px] font-bold text-[#96F189] uppercase tracking-wider">
                ICEF Agency Certified
              </span>
            </div>

            {/* Social Media Links */}
            <div className="flex items-center space-x-3 pt-2">
              <a
                href="https://www.instagram.com/legendarycareers/?hl=en"
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1.5 rounded-xl bg-[#0163C8]/30 border border-[#0163C8] text-xs font-semibold text-white hover:bg-[#0163C8] hover:text-[#96F189] transition-all flex items-center space-x-2"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
                <span>Instagram</span>
              </a>
              <a
                href="https://www.facebook.com/legendarycareers/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1.5 rounded-xl bg-[#0163C8]/30 border border-[#0163C8] text-xs font-semibold text-white hover:bg-[#0163C8] hover:text-[#96F189] transition-all flex items-center space-x-2"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
                <span>Facebook</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3 text-xs">
            <h4 className="font-heading font-bold text-base text-[#96F189] uppercase tracking-wider">
              Study Destinations
            </h4>
            <ul className="space-y-2 text-zinc-300">
              <li><a href="#destinations" className="hover:text-[#96F189]">Study in Australia 🇦🇺</a></li>
              <li><a href="#destinations" className="hover:text-[#96F189]">Study in Canada 🇨🇦</a></li>
              <li><a href="#destinations" className="hover:text-[#96F189]">Study in UK 🇬🇧</a></li>
              <li><a href="#destinations" className="hover:text-[#96F189]">Study in USA 🇺🇸</a></li>
              <li><a href="#destinations" className="hover:text-[#96F189]">Study in Germany 🇩🇪</a></li>
              <li><a href="#destinations" className="hover:text-[#96F189]">Study in New Zealand 🇳🇿</a></li>
            </ul>
          </div>

          {/* Migration Services */}
          <div className="space-y-3 text-xs">
            <h4 className="font-heading font-bold text-base text-[#96F189] uppercase tracking-wider">
              Migration Services
            </h4>
            <ul className="space-y-2 text-zinc-300">
              <li><a href="#services" className="hover:text-[#96F189]">Student Visa Subclass 500</a></li>
              <li><a href="#services" className="hover:text-[#96F189]">General Skilled Migration (189/190)</a></li>
              <li><a href="#services" className="hover:text-[#96F189]">Post-Study Work Permit (485/PGWP)</a></li>
              <li><a href="#services" className="hover:text-[#96F189]">ACS / VETASSESS Skills Assessment</a></li>
              <li><a href="#services" className="hover:text-[#96F189]">Partner & Family Sponsorship</a></li>
              <li><a href="#services" className="hover:text-[#96F189]">AAT Visa Refusal Appeals</a></li>
            </ul>
          </div>

          {/* Global Offices */}
          <div className="space-y-3 text-xs">
            <h4 className="font-heading font-bold text-base text-[#96F189] uppercase tracking-wider">
              Global Offices
            </h4>
            <div className="space-y-2 text-zinc-300">
              <div>
                <span className="font-bold text-white block">Sydney, Australia 🇦🇺</span>
                <span className="text-[11px]">Level 14, 201 Sussex St, Sydney NSW 2000</span>
              </div>
              <div>
                <span className="font-bold text-white block">Toronto, Canada 🇨🇦</span>
                <span className="text-[11px]">Suite 400, 100 King St W, Toronto ON M5X 1A9</span>
              </div>
              <div>
                <span className="font-bold text-white block">New Delhi, India 🇮🇳</span>
                <span className="text-[11px]">Barakhamba Road, Connaught Place, New Delhi</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Disclaimer */}
        <div className="pt-8 border-t border-zinc-800 flex flex-col md:flex-row justify-between items-center text-[11px] text-zinc-400 font-body gap-4">
          <div>
            © 2026 Legendary Careers Migration & Education Consultants. All Rights Reserved.
          </div>
          <div className="flex space-x-6">
            <Link href="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/mara-code-of-conduct" className="hover:text-white transition-colors">MARA Code of Conduct</Link>
            <a href="#" className="hover:text-white">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
