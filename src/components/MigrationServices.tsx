'use client';

import React from 'react';

interface ServicesProps {
  onOpenConsultation: () => void;
}

const servicesList = [
  {
    icon: '🎓',
    title: 'Student Visa & Admissions',
    badge: '100% Guidance',
    description:
      'Complete assistance with course selection, university application lodging, SOP writing, financial proofing, and student visa filing.',
    features: ['Offer Letter in 48-72 hrs', 'Scholarship Assistance', 'GTE / Financial Verification'],
  },
  {
    icon: '🏆',
    title: 'Skilled Migration & PR Visas',
    badge: 'MARA Certified',
    description:
      'Fast-track Permanent Residency pathways via General Skilled Migration (GSM), Subclass 189/190/491, and Express Entry CEC/PNP.',
    features: ['Points Calculation & EOI Submission', 'State Nomination Lodgement', 'PR Invitation Strategy'],
  },
  {
    icon: '💼',
    title: 'Post-Study Work Permits (PSW)',
    badge: 'Extended Duration',
    description:
      'Seamless transition from student visa to graduate work visas (Subclass 485, PGWP, OPT) allowing full-time employment rights.',
    features: ['2 to 5 Year Work Rights', 'Unrestricted Employment', 'Bridging Visa Management'],
  },
  {
    icon: '📋',
    title: 'Skills Assessment Applications',
    badge: 'High Accuracy',
    description:
      'Formal assessment lodging with assessing bodies including ACS, Engineers Australia, VETASSESS, TRA, and CPA Australia.',
    features: ['CDR & RPL Report Writing', 'Document Certification', 'Fast-Track Processing Options'],
  },
  {
    icon: '❤️',
    title: 'Partner & Family Migration',
    badge: 'Family Reunion',
    description:
      'Reunite with your spouse or family members through Partner Visas, Dependent Visas, and Parent Sponsorship Programs.',
    features: ['Spousal Work Rights', 'De Facto Proof Structuring', 'Subclass 820/801 & 309/100'],
  },
  {
    icon: '⚖️',
    title: 'Visa Appeals & Refusal Review',
    badge: 'Legal Defense',
    description:
      'Expert representation for complex visa refusals, Section 56 requests, Notice of Intention to Consider Cancellation (NOICC), and Tribunal Reviews.',
    features: ['AAT Tribunal Appeal Support', 'Legal Submission Drafting', 'Character & Medical Waiver Help'],
  },
];

export const MigrationServices: React.FC<ServicesProps> = ({ onOpenConsultation }) => {
  return (
    <section id="services" className="py-24 px-6 bg-[#F4F8FC] border-t border-[#C2DAF3]/60">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="font-body text-xs font-bold uppercase tracking-[0.25em] text-[#0163C8] bg-[#C2DAF3]/40 px-4 py-1.5 rounded-full inline-block">
            OUR MIGRATION SERVICES
          </span>
          <h2 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl text-[#061D38]">
            Comprehensive <span className="text-[#0163C8]">Study & Migration</span> Solutions
          </h2>
          <p className="font-body text-[#061D38]/80 text-sm sm:text-base font-normal leading-relaxed">
            From initial career counseling to Permanent Residency grant, our licensed migration agents guide you through every step.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesList.map((s, index) => (
            <div
              key={index}
              className="rounded-2xl bg-white p-8 border border-[#C2DAF3] hover:border-[#0163C8] shadow-lg shadow-[#0163C8]/5 hover:shadow-xl hover:shadow-[#0163C8]/10 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Header Row */}
                <div className="flex justify-between items-start mb-6">
                  <div className="w-12 h-12 rounded-xl bg-[#0163C8]/10 text-[#0163C8] text-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                    {s.icon}
                  </div>
                  <span className="px-3 py-1 rounded-full bg-[#96F189] text-[#061D38] font-body text-[10px] font-bold uppercase tracking-wider">
                    {s.badge}
                  </span>
                </div>

                {/* Title & Description */}
                <h3 className="font-heading font-bold text-2xl text-[#061D38] mb-3 group-hover:text-[#0163C8] transition-colors">
                  {s.title}
                </h3>
                <p className="font-body text-xs text-[#061D38]/80 font-normal leading-relaxed mb-6">
                  {s.description}
                </p>

                {/* Features List */}
                <div className="space-y-2 mb-8 border-t border-[#F4F8FC] pt-4">
                  {s.features.map((feat, idx) => (
                    <div key={idx} className="flex items-center space-x-2 text-xs font-body text-[#061D38]">
                      <span className="text-[#0163C8] font-bold">✓</span>
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Card Action Button */}
              <button
                onClick={onOpenConsultation}
                className="w-full py-3 rounded-xl bg-[#F4F8FC] text-[#0163C8] font-body font-bold text-xs uppercase tracking-wider hover:bg-[#0163C8] hover:text-white transition-all duration-300 border border-[#C2DAF3]"
              >
                Inquire For This Service →
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
