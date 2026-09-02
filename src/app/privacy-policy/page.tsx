'use client';

import React from 'react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-[#F4F8FC] text-[#061D38] font-body selection:bg-[#96F189] selection:text-[#061D38] flex flex-col justify-between">
      <div>
        {/* Navigation Header */}
        <Navbar />

        {/* Hero Header */}
        <section className="relative bg-[#061D38] text-white pt-36 pb-16 px-6 overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#0163C8]/30 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#96F189]/10 rounded-full blur-3xl pointer-events-none" />

          <div className="max-w-4xl mx-auto relative z-10 text-center space-y-4">
            <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-[#0163C8]/30 border border-[#0163C8] text-[#96F189] text-xs font-semibold tracking-wide uppercase">
              <span>⚖️ Legal Notice & APPs Compliance</span>
            </div>

            <h1 className="font-heading text-3xl sm:text-5xl font-bold tracking-tight leading-tight">
              Privacy Policy
            </h1>

            <p className="text-zinc-300 text-xs sm:text-base max-w-xl mx-auto font-normal leading-relaxed">
              Legendary Careers Pty Ltd is committed to providing quality migration services and protecting your Personal Information under the Australian Privacy Principles (APPs).
            </p>
          </div>
        </section>

        {/* Policy Main Content Container */}
        <section className="max-w-4xl mx-auto px-6 py-12">
          <div className="bg-white rounded-3xl p-8 sm:p-12 border border-[#C2DAF3] shadow-lg space-y-8 text-sm sm:text-base text-zinc-700 leading-relaxed">
            {/* Introduction */}
            <div className="space-y-3">
              <h2 className="font-heading font-bold text-xl sm:text-2xl text-[#061D38]">
                1. Overview & Commitment
              </h2>
              <p>
                <strong>Legendary Careers Pty Ltd</strong> is committed to providing quality services to you and this policy outlines our ongoing obligations to you in respect of how we manage your Personal Information.
              </p>
              <p>
                We have adopted the <strong>Australian Privacy Principles (APPs)</strong> contained in the Privacy Act 1988 (Cth) (the Privacy Act). The APPs govern the way in which we collect, use, disclose, store, secure and dispose of your Personal Information.
              </p>
              <p className="text-xs text-zinc-500 bg-[#F4F8FC] p-3 rounded-xl border border-[#C2DAF3]/60">
                A copy of the Australian Privacy Principles may be obtained from the website of The Office of the Australian Information Commissioner at{' '}
                <a
                  href="https://www.oaic.gov.au/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#0163C8] font-bold underline hover:text-[#061D38]"
                >
                  www.oaic.gov.au
                </a>
                .
              </p>
            </div>

            {/* What is Personal Information */}
            <div className="space-y-3 pt-4 border-t border-[#C2DAF3]/60">
              <h2 className="font-heading font-bold text-xl sm:text-2xl text-[#061D38]">
                2. What is Personal Information and Why Do We Collect It?
              </h2>
              <p>
                Personal Information is information or an opinion that identifies an individual. Examples of Personal Information we collect include, but are not limited to:
              </p>
              <ul className="list-disc pl-6 space-y-1.5 text-xs sm:text-sm text-[#061D38] font-medium">
                <li>Names, postal addresses, and home/business addresses</li>
                <li>Email addresses and phone numbers</li>
                <li>Passport copies and national identity documents</li>
                <li>Visa grant notices, refusal notices, and immigration history letters</li>
                <li>Financial documents including bank statements, tax returns, and proof of funds</li>
              </ul>
              <p className="pt-2">
                This Personal Information is obtained in many ways including interviews over the phone/video conferencing, correspondence, by telephone and facsimile, by email, via our website{' '}
                <a
                  href="https://www.legendarycareers.com.au"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#0163C8] font-bold underline"
                >
                  www.legendarycareers.com.au
                </a>
                , from your website, from media and publications, from other publicly available sources, from cookies, and from third parties.
              </p>
            </div>

            {/* Sensitive Information */}
            <div className="space-y-3 pt-4 border-t border-[#C2DAF3]/60">
              <h2 className="font-heading font-bold text-xl sm:text-2xl text-[#061D38]">
                3. Sensitive Information
              </h2>
              <p>Sensitive information will be used by us only for:</p>
              <ul className="list-disc pl-6 space-y-1 text-xs sm:text-sm text-zinc-700">
                <li>The primary purpose for which it was obtained</li>
                <li>A secondary purpose that is directly related to the primary purpose</li>
                <li>With your consent; or where required or authorised by law</li>
              </ul>
            </div>

            {/* Disclosure of Personal Information */}
            <div className="space-y-3 pt-4 border-t border-[#C2DAF3]/60">
              <h2 className="font-heading font-bold text-xl sm:text-2xl text-[#061D38]">
                4. Disclosure of Personal Information
              </h2>
              <p>Your Personal Information may be disclosed in a number of circumstances including the following:</p>
              <ul className="list-disc pl-6 space-y-1 text-xs sm:text-sm text-zinc-700">
                <li>Third parties where you consent to the use or disclosure</li>
                <li>Where required or authorised by law (such as the Department of Home Affairs or official assessing authorities)</li>
              </ul>
            </div>

            {/* Security of Personal Information */}
            <div className="space-y-3 pt-4 border-t border-[#C2DAF3]/60">
              <h2 className="font-heading font-bold text-xl sm:text-2xl text-[#061D38]">
                5. Security of Personal Information
              </h2>
              <p>
                Your Personal Information is stored in a manner that reasonably protects it from misuse, loss, unauthorized access, modification, or disclosure.
              </p>
            </div>

            {/* Policy Updates */}
            <div className="space-y-3 pt-4 border-t border-[#C2DAF3]/60">
              <h2 className="font-heading font-bold text-xl sm:text-2xl text-[#061D38]">
                6. Policy Updates
              </h2>
              <p>
                This Policy may change from time to time and is available on our website.
              </p>
            </div>

            {/* Privacy Policy Complaints & Enquiries Card */}
            <div className="pt-6">
              <div className="bg-[#061D38] text-white rounded-3xl p-6 sm:p-8 border border-[#0163C8] space-y-4">
                <div className="inline-block px-3 py-1 rounded bg-[#0163C8]/40 text-[#96F189] text-[10px] font-bold uppercase tracking-wider">
                  Contact Us
                </div>
                <h3 className="font-heading font-bold text-xl sm:text-2xl">
                  Privacy Policy Complaints & Enquiries
                </h3>
                <p className="text-xs text-zinc-300">
                  If you have any queries or complaints about our Privacy Policy, please contact us directly:
                </p>
                <div className="pt-2 space-y-2 text-xs font-semibold">
                  <div className="flex items-center space-x-3 text-[#C2DAF3]">
                    <span>📧 Email:</span>
                    <a
                      href="mailto:connect@legendarycareers.com.au"
                      className="text-[#96F189] hover:underline"
                    >
                      connect@legendarycareers.com.au
                    </a>
                  </div>
                  <div className="flex items-center space-x-3 text-[#C2DAF3]">
                    <span>📞 Phone:</span>
                    <a
                      href="tel:+61412367020"
                      className="text-[#96F189] hover:underline"
                    >
                      +61 412 367 020
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}
