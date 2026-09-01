'use client';

import React from 'react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';

export default function MaraCodeOfConductPage() {
  const pdfUrl = 'https://www.mara.gov.au/tools-for-agents-subsite/Files/code-of-conduct-march-2022-guidance.pdf';

  return (
    <div className="min-h-screen bg-[#F4F8FC] text-[#061D38] font-body selection:bg-[#96F189] selection:text-[#061D38] flex flex-col justify-between">
      <div>
        {/* Navigation Header */}
        <Navbar />

        {/* Hero Header */}
        <section className="relative bg-[#061D38] text-white py-16 px-6 overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#0163C8]/30 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#96F189]/10 rounded-full blur-3xl pointer-events-none" />

          <div className="max-w-4xl mx-auto relative z-10 text-center space-y-4">
            <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-[#0163C8]/30 border border-[#0163C8] text-[#96F189] text-xs font-semibold tracking-wide uppercase">
              <span>🏛️ Australian Government Legal Compliance</span>
            </div>

            <h1 className="font-heading text-3xl sm:text-5xl font-bold tracking-tight leading-tight">
              MARA Code of Conduct
            </h1>

            <p className="text-zinc-300 text-xs sm:text-base max-w-2xl mx-auto font-normal leading-relaxed">
              Under Australian law, all Registered Migration Agents (RMAs) operating under the Office of the Migration Agents Registration Authority (OMARA) must comply with the Code of Conduct.
            </p>

            <div className="pt-2 flex justify-center gap-4">
              <a
                href={pdfUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-full bg-[#0163C8] text-white font-semibold text-xs uppercase tracking-wider hover:bg-[#96F189] hover:text-[#061D38] transition-all shadow-lg shadow-[#0163C8]/30 inline-flex items-center space-x-2"
              >
                <span>📄 Download Official PDF Guidance</span>
                <span>↗</span>
              </a>
            </div>
          </div>
        </section>

        {/* Content & Embedded PDF Viewer Section */}
        <section className="max-w-6xl mx-auto px-4 sm:px-6 py-12 space-y-8">
          {/* Summary Box */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#C2DAF3] shadow-md space-y-4">
            <div className="flex items-center space-x-3">
              <span className="px-3 py-1 rounded bg-[#0163C8]/10 text-[#0163C8] font-bold text-xs uppercase">
                OMARA Compliance Notice
              </span>
              <span className="text-xs text-zinc-500 font-semibold">March 2022 Revision</span>
            </div>
            <h2 className="font-heading font-bold text-xl sm:text-2xl text-[#061D38]">
              Registered Migration Agents (MARN) Legal Obligation
            </h2>
            <p className="text-xs sm:text-sm text-zinc-700 leading-relaxed">
              The Code of Conduct regulates the professional relationship between clients and Registered Migration Agents. It ensures ethical practice, financial transparency, duty of care, confidentiality, and accurate legal advice for all Australian visa applicants.
            </p>
          </div>

          {/* Embedded Interactive PDF Viewer */}
          <div className="bg-white rounded-3xl border border-[#C2DAF3] shadow-xl overflow-hidden">
            <div className="bg-[#061D38] text-white p-4 px-6 flex flex-col sm:flex-row justify-between items-center gap-3">
              <div className="flex items-center space-x-2 text-xs font-semibold">
                <span className="text-[#96F189]">🔴 Official Document:</span>
                <span>Code of Conduct for Registered Migration Agents (March 2022)</span>
              </div>
              <a
                href={pdfUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-bold text-[#96F189] hover:underline flex items-center space-x-1"
              >
                <span>Open Fullscreen PDF</span>
                <span>↗</span>
              </a>
            </div>

            <div className="w-full h-[700px] bg-zinc-100 relative">
              <iframe
                src={`${pdfUrl}#toolbar=1&navpanes=0`}
                className="w-full h-full border-none"
                title="MARA Code of Conduct Official PDF Document"
              />
            </div>
          </div>
        </section>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}
