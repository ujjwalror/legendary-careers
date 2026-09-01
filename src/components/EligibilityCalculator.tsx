'use client';

import React, { useState } from 'react';

interface CalculatorProps {
  onOpenConsultation: () => void;
}

export const EligibilityCalculator: React.FC<CalculatorProps> = ({ onOpenConsultation }) => {
  const [step, setStep] = useState<number>(1);
  const [formData, setFormData] = useState({
    country: 'Australia',
    degree: 'Bachelor Degree',
    experience: '1-3 Years',
    english: 'IELTS 7.0 / PTE 65+',
  });

  const [showResult, setShowResult] = useState<boolean>(false);

  const handleNext = () => {
    if (step < 4) {
      setStep(step + 1);
    } else {
      setShowResult(true);
    }
  };

  const handleReset = () => {
    setStep(1);
    setShowResult(false);
  };

  return (
    <section id="assessment" className="py-24 px-6 bg-white border-t border-[#C2DAF3]/60">
      <div id="point" />
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-4">
          <span className="font-body text-xs font-bold uppercase tracking-[0.25em] text-[#0163C8] bg-[#C2DAF3]/40 px-4 py-1.5 rounded-full inline-block">
            INTERACTIVE ASSESSMENT TOOL
          </span>
          <h2 className="font-heading font-bold text-3xl sm:text-4xl text-[#061D38]">
            Instant <span className="text-[#0163C8]">Visa Eligibility</span> Calculator
          </h2>
          <p className="font-body text-[#061D38]/80 text-sm font-normal">
            Check your student visa or skilled migration eligibility score in under 60 seconds.
          </p>
        </div>

        {/* Calculator Card */}
        <div className="rounded-3xl bg-gradient-to-br from-[#F4F8FC] to-[#C2DAF3]/30 border border-[#C2DAF3] p-8 lg:p-12 shadow-2xl">
          {!showResult ? (
            <div>
              {/* Progress Steps Header */}
              <div className="flex items-center justify-between mb-8 pb-6 border-b border-[#C2DAF3]">
                {[1, 2, 3, 4].map((num) => (
                  <div key={num} className="flex items-center space-x-2">
                    <div
                      className={`w-8 h-8 rounded-full font-body font-bold text-xs flex items-center justify-center ${
                        step === num
                          ? 'bg-[#0163C8] text-white ring-4 ring-[#0163C8]/20'
                          : step > num
                          ? 'bg-[#96F189] text-[#061D38]'
                          : 'bg-white text-[#061D38]/40 border border-[#C2DAF3]'
                      }`}
                    >
                      {step > num ? '✓' : num}
                    </div>
                    <span className="hidden sm:inline font-body text-xs font-semibold text-[#061D38]">
                      {num === 1 && 'Country'}
                      {num === 2 && 'Education'}
                      {num === 3 && 'Experience'}
                      {num === 4 && 'English Test'}
                    </span>
                  </div>
                ))}
              </div>

              {/* Step 1: Country */}
              {step === 1 && (
                <div className="space-y-6">
                  <h3 className="font-heading font-bold text-2xl text-[#061D38]">
                    Step 1: Select Your Preferred Destination
                  </h3>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                    {['Australia', 'Canada', 'United Kingdom', 'United States', 'Germany', 'New Zealand'].map((c) => (
                      <button
                        key={c}
                        onClick={() => setFormData({ ...formData, country: c })}
                        className={`p-4 rounded-xl font-body font-bold text-xs border text-left transition-all ${
                          formData.country === c
                            ? 'bg-[#0163C8] text-white border-[#0163C8] shadow-md'
                            : 'bg-white text-[#061D38] border-[#C2DAF3] hover:bg-[#C2DAF3]/30'
                        }`}
                      >
                        {c}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Step 2: Education */}
              {step === 2 && (
                <div className="space-y-6">
                  <h3 className="font-heading font-bold text-2xl text-[#061D38]">
                    Step 2: What is Your Highest Qualification?
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {['High School / 12th Standard', "Bachelor's Degree", "Master's Degree / Post-Grad", 'Doctorate / PhD'].map(
                      (deg) => (
                        <button
                          key={deg}
                          onClick={() => setFormData({ ...formData, degree: deg })}
                          className={`p-4 rounded-xl font-body font-bold text-xs border text-left transition-all ${
                            formData.degree === deg
                              ? 'bg-[#0163C8] text-white border-[#0163C8] shadow-md'
                              : 'bg-white text-[#061D38] border-[#C2DAF3] hover:bg-[#C2DAF3]/30'
                          }`}
                        >
                          {deg}
                        </button>
                      )
                    )}
                  </div>
                </div>
              )}

              {/* Step 3: Experience */}
              {step === 3 && (
                <div className="space-y-6">
                  <h3 className="font-heading font-bold text-2xl text-[#061D38]">
                    Step 3: Relevant Full-Time Work Experience
                  </h3>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                    {['Fresh Graduate (0 yrs)', '1 - 3 Years', '3 - 5 Years', '5+ Years'].map((exp) => (
                      <button
                        key={exp}
                        onClick={() => setFormData({ ...formData, experience: exp })}
                        className={`p-4 rounded-xl font-body font-bold text-xs border text-center transition-all ${
                          formData.experience === exp
                            ? 'bg-[#0163C8] text-white border-[#0163C8] shadow-md'
                            : 'bg-white text-[#061D38] border-[#C2DAF3] hover:bg-[#C2DAF3]/30'
                        }`}
                      >
                        {exp}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Step 4: English */}
              {step === 4 && (
                <div className="space-y-6">
                  <h3 className="font-heading font-bold text-2xl text-[#061D38]">
                    Step 4: English Language Score Status
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {[
                      'IELTS 7.5+ / PTE 79+ (Superior English)',
                      'IELTS 7.0 / PTE 65+ (Proficient)',
                      'IELTS 6.0 - 6.5 / PTE 50 - 58 (Competent)',
                      'Planning to take test / Need Training',
                    ].map((eng) => (
                      <button
                        key={eng}
                        onClick={() => setFormData({ ...formData, english: eng })}
                        className={`p-4 rounded-xl font-body font-bold text-xs border text-left transition-all ${
                          formData.english === eng
                            ? 'bg-[#0163C8] text-white border-[#0163C8] shadow-md'
                            : 'bg-white text-[#061D38] border-[#C2DAF3] hover:bg-[#C2DAF3]/30'
                        }`}
                      >
                        {eng}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Action Navigation Buttons */}
              <div className="flex justify-between items-center mt-10 pt-6 border-t border-[#C2DAF3]">
                {step > 1 ? (
                  <button
                    onClick={() => setStep(step - 1)}
                    className="px-6 py-2.5 rounded-xl bg-white border border-[#C2DAF3] text-[#061D38] font-body text-xs font-bold uppercase tracking-wider hover:bg-[#C2DAF3]/30"
                  >
                    ← Back
                  </button>
                ) : <div />}

                <button
                  onClick={handleNext}
                  className="px-8 py-3 rounded-xl bg-[#0163C8] text-white font-body font-bold text-xs uppercase tracking-wider hover:bg-[#061D38] shadow-lg shadow-[#0163C8]/20 transition-all"
                >
                  {step === 4 ? 'Calculate Eligibility Score →' : 'Next Step →'}
                </button>
              </div>
            </div>
          ) : (
            /* Result Screen */
            <div className="text-center space-y-6">
              <div className="w-20 h-20 rounded-full bg-[#96F189] text-[#061D38] font-heading font-bold text-4xl flex items-center justify-center mx-auto shadow-lg shadow-[#96F189]/40">
                96%
              </div>

              <div>
                <span className="px-4 py-1.5 rounded-full bg-[#96F189] text-[#061D38] font-body text-xs font-bold uppercase tracking-wider inline-block">
                  High Eligibility Probability
                </span>
                <h3 className="font-heading font-bold text-3xl text-[#061D38] mt-3">
                  Excellent Profile For {formData.country}!
                </h3>
                <p className="font-body text-xs text-[#061D38]/80 max-w-lg mx-auto mt-2 leading-relaxed">
                  Based on your {formData.degree} and {formData.experience} experience, you qualify for high-tier university admissions and post-study work visa pathways in {formData.country}.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-white border border-[#C2DAF3] max-w-md mx-auto text-left space-y-3 font-body text-xs">
                <div className="flex justify-between border-b border-[#F4F8FC] pb-2">
                  <span className="text-[#061D38]/70">Target Country:</span>
                  <span className="font-bold text-[#0163C8]">{formData.country}</span>
                </div>
                <div className="flex justify-between border-b border-[#F4F8FC] pb-2">
                  <span className="text-[#061D38]/70">Qualification:</span>
                  <span className="font-bold text-[#061D38]">{formData.degree}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#061D38]/70">Work Experience:</span>
                  <span className="font-bold text-[#061D38]">{formData.experience}</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
                <button
                  onClick={onOpenConsultation}
                  className="px-8 py-4 rounded-xl bg-[#0163C8] text-white font-body font-bold text-xs uppercase tracking-widest hover:bg-[#061D38] shadow-xl shadow-[#0163C8]/25"
                >
                  Book Free 1-on-1 Strategy Session
                </button>
                <button
                  onClick={handleReset}
                  className="px-6 py-4 rounded-xl bg-white border border-[#C2DAF3] text-[#061D38] font-body text-xs font-bold uppercase tracking-wider hover:bg-[#C2DAF3]/30"
                >
                  Re-Calculate Profile
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
