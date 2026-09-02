'use client';

import React, { useState } from 'react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { ConsultationModal } from '@/components/ConsultationModal';
import { StudentFinancialCalculator } from '@/components/StudentFinancialCalculator';

export default function FinancialCalculatorPage() {
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);
  const [selectedAgentName, setSelectedAgentName] = useState<string | undefined>(undefined);

  const handleOpenConsultation = (agentName?: string) => {
    setSelectedAgentName(agentName);
    setIsConsultationOpen(true);
  };

  const handleCloseConsultation = () => {
    setIsConsultationOpen(false);
  };

  const faqs = [
    {
      q: 'How much proof of funds is required for an Australian Student Visa (Subclass 500)?',
      a: 'Per official 2026 Department of Home Affairs (DHA) guidelines, primary student living expenses are AUD $29,710/year. In addition, you must demonstrate capacity for your 1st year net tuition fees, travel allowance ($2,000–$3,000), and any accompanying family members.',
    },
    {
      q: 'Who can be a financial sponsor for my student visa application?',
      a: 'DHA accepts financial sponsorship from immediate family members including parents, spouse, siblings, and grandparents. Sponsors must provide proof of income, tax returns (ITR), and relationship evidence.',
    },
    {
      q: 'Are education loans accepted by Home Affairs for financial capacity?',
      a: 'Yes! Official education loan sanction letters from recognized nationalized and commercial banks are 100% accepted as valid proof of financial capacity.',
    },
    {
      q: 'Can I show fixed deposits (FD) as proof of funds?',
      a: 'Yes, fixed deposits (FDs) held in approved financial institutions with a bank balance verification letter are valid for student visa financial capacity.',
    },
  ];

  return (
    <div className="min-h-screen bg-[#F4F8FC] text-[#061D38] font-body selection:bg-[#96F189] selection:text-[#061D38] flex flex-col justify-between">
      <div>
        {/* Navigation Header */}
        <Navbar onOpenConsultation={() => handleOpenConsultation()} />

        {/* Hero Section */}
        <section className="relative bg-[#061D38] text-white pt-36 pb-16 sm:pb-20 px-6 overflow-hidden">
          {/* Subtle Ambient Background Gradients */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#0163C8]/30 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#96F189]/10 rounded-full blur-3xl pointer-events-none" />

          <div className="max-w-4xl mx-auto relative z-10 text-center space-y-6">
            <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-[#0163C8]/30 border border-[#0163C8] text-[#96F189] text-xs font-semibold tracking-wide uppercase">
              <span>🎓 Australian Subclass 500 Financial Tool</span>
            </div>

            <h1 className="font-heading text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-tight">
              Student Visa Financial Capacity Calculator
            </h1>

            <p className="text-zinc-300 text-sm sm:text-base lg:text-lg max-w-2xl mx-auto font-normal leading-relaxed">
              Calculate your exact 1st-year proof of funds requirement in AUD and your local currency based on official 2026 Department of Home Affairs (DHA) criteria.
            </p>
          </div>
        </section>

        {/* Main Calculator Container */}
        <section className="py-12 sm:py-16 px-4 sm:px-6 max-w-7xl mx-auto">
          <StudentFinancialCalculator onOpenConsultation={handleOpenConsultation} />
        </section>

        {/* FAQ Section */}
        <section className="py-16 bg-white border-t border-[#C2DAF3]/60 px-6">
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="text-center space-y-2">
              <span className="px-3 py-1 rounded bg-[#C2DAF3]/40 text-[#0163C8] text-xs font-bold uppercase tracking-wider">
                Financial Compliance FAQs
              </span>
              <h2 className="font-heading text-2xl sm:text-3xl font-bold text-[#061D38]">
                Frequently Asked Questions About Subclass 500 Proof of Funds
              </h2>
            </div>

            <div className="grid grid-cols-1 gap-4">
              {faqs.map((faq, idx) => (
                <div key={idx} className="p-6 rounded-2xl bg-[#F4F8FC] border border-[#C2DAF3] space-y-2">
                  <h3 className="font-heading font-bold text-base text-[#061D38] flex items-center gap-2">
                    <span className="text-[#0163C8]">Q.</span>
                    <span>{faq.q}</span>
                  </h3>
                  <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed pl-6">
                    {faq.a}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>

      {/* Footer */}
      <Footer />

      {/* Booking Modal */}
      <ConsultationModal
        isOpen={isConsultationOpen}
        onClose={handleCloseConsultation}
        selectedAgent={selectedAgentName}
      />
    </div>
  );
}
