'use client';

import React from 'react';

interface HeroProps {
  onOpenConsultation: () => void;
  onSelectCountry: (country: string) => void;
}

export const HeroSection: React.FC<HeroProps> = ({ onOpenConsultation, onSelectCountry }) => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#F4F8FC] via-[#C2DAF3]/30 to-[#F4F8FC] py-20 lg:py-28 px-6">
      {/* Background Decorative Blur Orbs */}
      <div className="absolute top-10 left-10 w-96 h-96 bg-[#0163C8]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#96F189]/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
        {/* Left Column: Headline & Action */}
        <div className="lg:col-span-7 space-y-8">
          {/* Trust Badge */}
          <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-[#C2DAF3]/50 border border-[#0163C8]/20 font-body text-xs font-semibold text-[#0163C8]">
            <span className="w-2 h-2 rounded-full bg-[#0163C8]" />
            <span>CERTIFIED MARA & QEAC MIGRATION SPECIALISTS</span>
          </div>

          {/* Primary Heading - Times New Roman Bold */}
          <h1 className="font-heading font-bold text-4xl sm:text-5xl lg:text-6xl text-[#061D38] leading-[1.12] tracking-tight">
            Your Gateway to Global Education & <span className="text-[#0163C8]">Permanent Residency</span>
          </h1>

          {/* Body Paragraph - Montserrat Legible */}
          <p className="font-body text-[#061D38]/80 text-base sm:text-lg leading-relaxed max-w-2xl font-normal">
            Navigate university admissions, visa applications, and skilled migration pathways with end-to-end expert guidance. Over 15,000+ students and professionals successfully placed worldwide.
          </p>

          {/* Quick Target Country Selector Chips */}
          <div className="space-y-3">
            <span className="block font-body text-xs font-bold uppercase tracking-wider text-[#061D38]/70">
              Popular Study Destinations:
            </span>
            <div className="flex flex-wrap gap-2.5">
              {[
                { name: 'Australia 🇦🇺', code: 'australia' },
                { name: 'Canada 🇨🇦', code: 'canada' },
                { name: 'United Kingdom 🇬🇧', code: 'uk' },
                { name: 'United States 🇺🇸', code: 'usa' },
                { name: 'Germany 🇩🇪', code: 'germany' },
                { name: 'New Zealand 🇳🇿', code: 'nz' },
              ].map((c) => (
                <button
                  key={c.code}
                  onClick={() => onSelectCountry(c.code)}
                  className="px-4 py-2 rounded-xl bg-white border border-[#C2DAF3] hover:border-[#0163C8] hover:bg-[#C2DAF3]/30 font-body text-xs font-medium text-[#061D38] shadow-sm transition-all hover:scale-105"
                >
                  {c.name}
                </button>
              ))}
            </div>
          </div>

          {/* Primary Call-to-Action Buttons */}
          <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
            <button
              onClick={onOpenConsultation}
              className="px-8 py-4 rounded-xl bg-[#0163C8] text-white font-body font-bold text-sm uppercase tracking-wider hover:bg-[#061D38] shadow-xl shadow-[#0163C8]/25 transition-all duration-300 transform hover:-translate-y-0.5 text-center"
            >
              Book Visa Assessment
            </button>
            <a
              href="#assessment"
              className="px-8 py-4 rounded-xl bg-[#96F189] text-[#061D38] font-body font-bold text-sm uppercase tracking-wider hover:bg-[#96F189]/90 border border-[#061D38]/10 shadow-md transition-all duration-300 text-center"
            >
              Check Visa Eligibility →
            </a>
          </div>

          {/* Live Key Metrics */}
          <div className="pt-6 grid grid-cols-3 gap-6 border-t border-[#C2DAF3]">
            <div>
              <div className="font-heading font-bold text-3xl sm:text-4xl text-[#0163C8]">
                98.4%
              </div>
              <div className="font-body text-xs font-medium text-[#061D38]/70 uppercase tracking-wider mt-1">
                Visa Success Rate
              </div>
            </div>
            <div>
              <div className="font-heading font-bold text-3xl sm:text-4xl text-[#061D38]">
                500+
              </div>
              <div className="font-body text-xs font-medium text-[#061D38]/70 uppercase tracking-wider mt-1">
                Partner Universities
              </div>
            </div>
            <div>
              <div className="font-heading font-bold text-3xl sm:text-4xl text-[#0163C8]">
                15,000+
              </div>
              <div className="font-body text-xs font-medium text-[#061D38]/70 uppercase tracking-wider mt-1">
                Students Placed
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Hero Visual Card */}
        <div className="lg:col-span-5">
          <div className="relative rounded-3xl bg-white p-8 border border-[#C2DAF3] shadow-2xl shadow-[#0163C8]/10">
            {/* Top Badge */}
            <div className="flex justify-between items-center mb-6">
              <span className="px-3.5 py-1.5 rounded-full bg-[#96F189] text-[#061D38] font-body font-bold text-[11px] uppercase tracking-wider">
                ✓ Guaranteed Counsel
              </span>
              <span className="font-body text-xs font-semibold text-[#0163C8]">
                MARA #1804921
              </span>
            </div>

            {/* Title inside card */}
            <h3 className="font-heading font-bold text-2xl text-[#061D38] mb-3">
              Fast-Track Your Study & PR Pathway
            </h3>
            <p className="font-body text-xs text-[#061D38]/70 leading-relaxed mb-6">
              Get personalized course selection, scholarship application assistance, and visa filing prepared by licensed immigration attorneys.
            </p>

            {/* Feature Bullet List */}
            <div className="space-y-4 mb-8">
              {[
                '100% Transparent Fee Structure & Zero Hidden Charges',
                'Scholarship Grants Up To $25,000 AUD / USD Available',
                'Post-Study Work Visa Guidance Up To 5 Years',
                'PR Points & Skilled Occupation Assessment Help',
              ].map((item, idx) => (
                <div key={idx} className="flex items-start space-x-3">
                  <div className="w-5 h-5 rounded-full bg-[#0163C8]/10 text-[#0163C8] flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                    ✓
                  </div>
                  <span className="font-body text-xs text-[#061D38] font-medium">
                    {item}
                  </span>
                </div>
              ))}
            </div>

            {/* Card Footer Button */}
            <button
              onClick={onOpenConsultation}
              className="w-full py-3.5 rounded-xl bg-[#061D38] text-white font-body font-bold text-xs uppercase tracking-widest hover:bg-[#0163C8] transition-colors shadow-lg"
            >
              Request Call Back From Counselor
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
