'use client';

import React, { useState } from 'react';

interface CountryData {
  id: string;
  name: string;
  flag: string;
  tagline: string;
  postStudyWork: string;
  avgTuition: string;
  prPathway: string;
  popularIntakes: string;
  highlights: string[];
}

const countries: CountryData[] = [
  {
    id: 'australia',
    name: 'Australia',
    flag: '🇦🇺',
    tagline: 'Subclass 500 & Temporary Graduate Subclass 485 Visa',
    postStudyWork: '2 to 5 Years PSW Visa',
    avgTuition: 'AUD $22,000 - $45,000 / year',
    prPathway: 'High PR potential via Skilled Independent (189) & State Nominated (190)',
    popularIntakes: 'February & July',
    highlights: [
      'Top 8 Go8 Group of Eight Universities worldwide',
      'Unrestricted part-time work during study breaks',
      'Regional study bonus points for Permanent Residency',
    ],
  },
  {
    id: 'canada',
    name: 'Canada',
    flag: '🇨🇦',
    tagline: 'Study Permit & PGWP Post-Graduation Work Permit',
    postStudyWork: 'Up to 3 Years Open PGWP',
    avgTuition: 'CAD $15,000 - $35,000 / year',
    prPathway: 'Express Entry (CEC) & Provincial Nominee Programs (PNP)',
    popularIntakes: 'September & January',
    highlights: [
      'Fast-track Permanent Residency via Express Entry CEC',
      'Spousal Open Work Permit available during studies',
      'Affordable tuition fees compared to US/UK',
    ],
  },
  {
    id: 'uk',
    name: 'United Kingdom',
    flag: '🇬🇧',
    tagline: 'Student Visa (Tier 4) & Graduate Route',
    postStudyWork: '2 Years (3 Years for PhD Graduates)',
    avgTuition: 'GBP £13,000 - £30,000 / year',
    prPathway: 'Skilled Worker Visa leading to Indefinite Leave to Remain (ILR)',
    popularIntakes: 'September & January',
    highlights: [
      '1-Year Master’s Degree options saving time & living costs',
      'World-famous Russell Group Universities (Oxford, Cambridge, Imperial)',
      '20 hours per week part-time work permitted',
    ],
  },
  {
    id: 'usa',
    name: 'United States',
    flag: '🇺🇸',
    tagline: 'F-1 Student Visa & OPT / STEM OPT Extension',
    postStudyWork: '1 Year OPT + 2 Year STEM Extension (3 Years Total)',
    avgTuition: 'USD $20,000 - $55,000 / year',
    prPathway: 'H-1B Specialty Occupation & EB-2 / EB-3 Employment Green Card',
    popularIntakes: 'Fall (August) & Spring (January)',
    highlights: [
      'Global leader in technology, innovation, and ivy league research',
      'Generous merit scholarships and Assistantships available',
      '3-Year STEM OPT extension for tech & engineering graduates',
    ],
  },
  {
    id: 'germany',
    name: 'Germany',
    flag: '🇩🇪',
    tagline: 'German National Student Visa & Job Seeker Permit',
    postStudyWork: '18 Months Job Seeker Visa',
    avgTuition: '€0 Free Tuition at Public Universities',
    prPathway: 'EU Blue Card leading to PR in 21-24 months',
    popularIntakes: 'Winter (October) & Summer (April)',
    highlights: [
      'Zero tuition fees at state-funded public universities',
      'Europe’s strongest economic engine with massive engineering demand',
      'Fast-track EU Blue Card and PR after graduation',
    ],
  },
  {
    id: 'nz',
    name: 'New Zealand',
    flag: '🇳🇿',
    tagline: 'Fee Paying Student Visa & Post-Study Work Visa',
    postStudyWork: 'Up to 3 Years Post-Study Work Visa',
    avgTuition: 'NZD $22,000 - $38,000 / year',
    prPathway: 'Skilled Migrant Category (SMC) Resident Visa',
    popularIntakes: 'February & July',
    highlights: [
      'High quality of living and safe student environment',
      'Post-study work rights for partners & free school for dependents',
      'Clear points system for Resident Visa application',
    ],
  },
];

interface DestinationProps {
  onOpenConsultation: () => void;
  selectedCountryCode?: string;
}

export const CountryDestinations: React.FC<DestinationProps> = ({ onOpenConsultation, selectedCountryCode }) => {
  const [activeTab, setActiveTab] = useState<string>(selectedCountryCode || 'australia');
  const activeCountry = countries.find((c) => c.id === activeTab) || countries[0];

  return (
    <section id="destinations" className="py-24 px-6 bg-white border-t border-[#C2DAF3]/60">
      <div className="max-w-7xl mx-auto">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="font-body text-xs font-bold uppercase tracking-[0.25em] text-[#0163C8] bg-[#C2DAF3]/40 px-4 py-1.5 rounded-full inline-block">
            DESTINATION OVERVIEW
          </span>
          <h2 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl text-[#061D38]">
            Choose Your Ideal <span className="text-[#0163C8]">Study & Migration</span> Destination
          </h2>
          <p className="font-body text-[#061D38]/80 text-sm sm:text-base font-normal leading-relaxed">
            Compare tuition costs, post-study work rights, and permanent residency options across top international education destinations.
          </p>
        </div>

        {/* Destination Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {countries.map((c) => {
            const isActive = c.id === activeTab;
            return (
              <button
                key={c.id}
                onClick={() => setActiveTab(c.id)}
                className={`px-6 py-3 rounded-xl font-body font-bold text-xs uppercase tracking-wider transition-all duration-300 flex items-center space-x-2 ${
                  isActive
                    ? 'bg-[#0163C8] text-white shadow-lg shadow-[#0163C8]/20 scale-105'
                    : 'bg-[#F4F8FC] text-[#061D38] border border-[#C2DAF3] hover:bg-[#C2DAF3]/40'
                }`}
              >
                <span className="text-base">{c.flag}</span>
                <span>{c.name}</span>
              </button>
            );
          })}
        </div>

        {/* Selected Country Detailed Display Card */}
        <div className="rounded-3xl bg-gradient-to-br from-[#F4F8FC] to-[#C2DAF3]/20 border border-[#C2DAF3] p-8 lg:p-12 shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Country Info */}
            <div className="lg:col-span-7 space-y-6">
              <div className="flex items-center space-x-4">
                <span className="text-5xl sm:text-6xl">{activeCountry.flag}</span>
                <div>
                  <h3 className="font-heading font-bold text-3xl sm:text-4xl text-[#061D38]">
                    Study & Settle in {activeCountry.name}
                  </h3>
                  <p className="font-body text-xs font-semibold text-[#0163C8] uppercase tracking-wider mt-1">
                    {activeCountry.tagline}
                  </p>
                </div>
              </div>

              {/* Grid Metrics */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-xl bg-white border border-[#C2DAF3] shadow-sm">
                  <span className="font-body text-[11px] font-bold text-[#0163C8] uppercase tracking-wider block">
                    Post-Study Work Permit:
                  </span>
                  <span className="font-heading font-bold text-lg text-[#061D38] block mt-1">
                    {activeCountry.postStudyWork}
                  </span>
                </div>

                <div className="p-4 rounded-xl bg-white border border-[#C2DAF3] shadow-sm">
                  <span className="font-body text-[11px] font-bold text-[#0163C8] uppercase tracking-wider block">
                    Average Annual Tuition:
                  </span>
                  <span className="font-heading font-bold text-lg text-[#061D38] block mt-1">
                    {activeCountry.avgTuition}
                  </span>
                </div>
              </div>

              {/* PR Pathway highlight */}
              <div className="p-4 rounded-xl bg-[#96F189]/20 border border-[#96F189] flex items-start space-x-3">
                <span className="text-xl">🎯</span>
                <div>
                  <span className="font-body text-xs font-bold text-[#061D38] uppercase tracking-wider block">
                    Permanent Residency (PR) Pathway:
                  </span>
                  <p className="font-body text-xs text-[#061D38] font-medium mt-0.5 leading-relaxed">
                    {activeCountry.prPathway}
                  </p>
                </div>
              </div>

              {/* Key Highlights */}
              <div className="space-y-3 pt-2">
                <span className="font-body text-xs font-bold text-[#061D38] uppercase tracking-wider block">
                  Key Benefits & Work Rights:
                </span>
                {activeCountry.highlights.map((h, idx) => (
                  <div key={idx} className="flex items-center space-x-3 font-body text-xs text-[#061D38]">
                    <span className="w-4 h-4 rounded-full bg-[#0163C8] text-white flex items-center justify-center text-[10px] font-bold">
                      ✓
                    </span>
                    <span>{h}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Application Card */}
            <div className="lg:col-span-5">
              <div className="rounded-2xl bg-white p-8 border border-[#C2DAF3] shadow-xl text-center space-y-6">
                <div className="w-14 h-14 rounded-2xl bg-[#0163C8]/10 text-[#0163C8] flex items-center justify-center text-2xl font-bold mx-auto">
                  🎓
                </div>

                <div>
                  <h4 className="font-heading font-bold text-2xl text-[#061D38]">
                    Planning to Study in {activeCountry.name}?
                  </h4>
                  <p className="font-body text-xs text-[#061D38]/70 mt-2 leading-relaxed">
                    Get a free profile evaluation, university shortlist, and step-by-step visa checklist tailored for {activeCountry.name}.
                  </p>
                </div>

                <div className="p-3 rounded-xl bg-[#F4F8FC] border border-[#C2DAF3] font-body text-xs text-[#061D38] font-semibold">
                  Upcoming Intakes: {activeCountry.popularIntakes}
                </div>

                <button
                  onClick={onOpenConsultation}
                  className="w-full py-4 rounded-xl bg-[#0163C8] text-white font-body font-bold text-xs uppercase tracking-widest hover:bg-[#061D38] shadow-lg shadow-[#0163C8]/20 transition-all duration-300"
                >
                  Apply For {activeCountry.name} Assessment
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
