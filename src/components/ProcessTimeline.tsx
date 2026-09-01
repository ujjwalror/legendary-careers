'use client';

import React from 'react';

const steps = [
  {
    num: '01',
    title: 'Free Profile Counseling',
    description: '1-on-1 assessment with certified MARA/QEAC counselor to evaluate career goals, budget, and visa history.',
  },
  {
    num: '02',
    title: 'University & Course Shortlisting',
    description: 'Receive personalized shortlist of top universities with high visa success rate and scholarship opportunities.',
  },
  {
    num: '03',
    title: 'Application & Offer Letter',
    description: 'We lodge applications directly with partner universities and secure unconditional offer letters in 48-72 hours.',
  },
  {
    num: '04',
    title: 'GTE & Financial Proofing',
    description: 'Structured assistance for Genuine Temporary Entrant (GTE) statement, bank proofing, and COE / CAS issuance.',
  },
  {
    num: '05',
    title: 'Visa Filing & Pre-Departure',
    description: 'Error-free visa application filing by licensed migration attorneys, biometric booking, accommodation, and flight briefing.',
  },
];

export const ProcessTimeline: React.FC = () => {
  return (
    <section id="about" className="py-24 px-6 bg-[#F4F8FC] border-t border-[#C2DAF3]/60">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="font-body text-xs font-bold uppercase tracking-[0.25em] text-[#0163C8] bg-[#C2DAF3]/40 px-4 py-1.5 rounded-full inline-block">
            STEP-BY-STEP ROADMAP
          </span>
          <h2 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl text-[#061D38]">
            Your Seamless <span className="text-[#0163C8]">5-Step Journey</span> To Success
          </h2>
          <p className="font-body text-[#061D38]/80 text-sm sm:text-base font-normal">
            From your first inquiry to landing at your overseas university, we handle every detail.
          </p>
        </div>

        {/* Timeline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6 relative">
          {steps.map((s, index) => (
            <div
              key={index}
              className="rounded-2xl bg-white p-6 border border-[#C2DAF3] shadow-md hover:border-[#0163C8] hover:shadow-xl transition-all duration-300 relative group flex flex-col justify-between"
            >
              <div>
                {/* Step Number */}
                <div className="w-12 h-12 rounded-xl bg-[#0163C8] text-[#96F189] font-heading font-bold text-xl flex items-center justify-center mb-6 shadow-md shadow-[#0163C8]/20 group-hover:scale-110 transition-transform">
                  {s.num}
                </div>

                {/* Title */}
                <h3 className="font-heading font-bold text-xl text-[#061D38] mb-3 group-hover:text-[#0163C8] transition-colors">
                  {s.title}
                </h3>

                {/* Description */}
                <p className="font-body text-xs text-[#061D38]/80 leading-relaxed font-normal">
                  {s.description}
                </p>
              </div>

              {/* Bottom Step Indicator */}
              <div className="mt-6 pt-4 border-t border-[#F4F8FC] flex items-center justify-between font-body text-[11px] font-bold uppercase text-[#0163C8]">
                <span>Phase {s.num}</span>
                <span>✓ Verified</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
