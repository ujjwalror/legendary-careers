'use client';

import React, { useState } from 'react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';

export default function PointCalculatorPage() {
  // State for each DHA Criteria
  const [subclass, setSubclass] = useState<'189' | '190' | '491'>('189');
  const [ageRange, setAgeRange] = useState<string>('25-32');
  const [englishLevel, setEnglishLevel] = useState<string>('superior');
  const [overseasExp, setOverseasExp] = useState<string>('0-2');
  const [australianExp, setAustralianExp] = useState<string>('0');
  const [education, setEducation] = useState<string>('bachelor_master');
  const [ausStudy, setAusStudy] = useState<boolean>(false);
  const [stemSpecialist, setStemSpecialist] = useState<boolean>(false);
  const [naatiCcl, setNaatiCcl] = useState<boolean>(false);
  const [regionalStudy, setRegionalStudy] = useState<boolean>(false);
  const [partnerStatus, setPartnerStatus] = useState<string>('single');
  const [professionalYear, setProfessionalYear] = useState<boolean>(false);

  // Score Calculation Logic (Official Australian DHA Points Table)
  
  // 1. Visa Nomination Points
  const visaPoints = subclass === '189' ? 0 : subclass === '190' ? 5 : 15;

  // 2. Age Points
  let agePoints = 0;
  if (ageRange === '18-24') agePoints = 25;
  else if (ageRange === '25-32') agePoints = 30;
  else if (ageRange === '33-39') agePoints = 25;
  else if (ageRange === '40-44') agePoints = 15;
  else if (ageRange === '45+') agePoints = 0; // Ineligible

  // 3. English Points
  let englishPoints = 0;
  if (englishLevel === 'superior') englishPoints = 20; // IELTS 8 / PTE 79
  else if (englishLevel === 'proficient') englishPoints = 10; // IELTS 7 / PTE 65
  else if (englishLevel === 'competent') englishPoints = 0; // IELTS 6 / PTE 50

  // 4. Overseas Work Points
  let overseasPoints = 0;
  if (overseasExp === '3-4') overseasPoints = 5;
  else if (overseasExp === '5-7') overseasPoints = 10;
  else if (overseasExp === '8-10') overseasPoints = 15;

  // 5. Australian Work Points
  let australianPoints = 0;
  if (australianExp === '1-2') australianPoints = 5;
  else if (australianExp === '3-4') australianPoints = 10;
  else if (australianExp === '5-7') australianPoints = 15;
  else if (australianExp === '8-10') australianPoints = 20;

  // Capped Work Experience Points (Max 20 pts combined for overseas + Australian work)
  const uncappedWorkPoints = overseasPoints + australianPoints;
  const workPoints = Math.min(20, uncappedWorkPoints);

  // 6. Educational Qualifications Points
  let educationPoints = 0;
  if (education === 'phd') educationPoints = 20;
  else if (education === 'bachelor_master') educationPoints = 15;
  else if (education === 'diploma_trade') educationPoints = 10;
  else if (education === 'skills_assessed') educationPoints = 10;

  // 7. Additional Extras Points
  const ausStudyPoints = ausStudy ? 5 : 0;
  const stemPoints = stemSpecialist ? 10 : 0;
  const naatiPoints = naatiCcl ? 5 : 0;
  const regionalPoints = regionalStudy ? 5 : 0;

  // 8. Partner Skills Points
  let partnerPoints = 0;
  if (partnerStatus === 'single' || partnerStatus === 'citizen_pr') partnerPoints = 10;
  else if (partnerStatus === 'partner_skill_english') partnerPoints = 10;
  else if (partnerStatus === 'partner_english_only') partnerPoints = 5;
  else if (partnerStatus === 'partner_ineligible') partnerPoints = 0;

  // 9. Professional Year Points
  const pyPoints = professionalYear ? 5 : 0;

  // TOTAL DHA SCORE
  const totalPoints =
    visaPoints +
    agePoints +
    englishPoints +
    workPoints +
    educationPoints +
    ausStudyPoints +
    stemPoints +
    naatiPoints +
    regionalPoints +
    partnerPoints +
    pyPoints;

  const isEligibleAge = ageRange !== '45+';
  const passMark = 65;

  const handleReset = () => {
    setSubclass('189');
    setAgeRange('25-32');
    setEnglishLevel('superior');
    setOverseasExp('0-2');
    setAustralianExp('0');
    setEducation('bachelor_master');
    setAusStudy(false);
    setStemSpecialist(false);
    setNaatiCcl(false);
    setRegionalStudy(false);
    setPartnerStatus('single');
    setProfessionalYear(false);
  };

  return (
    <div className="min-h-screen bg-[#F4F8FC] text-[#061D38] font-body selection:bg-[#96F189] selection:text-[#061D38] flex flex-col justify-between">
      <div>
        {/* Header Navigation */}
        <Navbar />

        {/* Hero Header */}
        <section className="relative bg-[#061D38] text-white pt-32 sm:pt-36 pb-12 sm:pb-16 px-6 overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#0163C8]/30 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#96F189]/10 rounded-full blur-3xl pointer-events-none" />

          <div className="max-w-7xl mx-auto relative z-10 text-center space-y-4">
            <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-[#0163C8]/30 border border-[#0163C8] text-[#96F189] text-xs font-semibold tracking-wide uppercase">
              <span>🇦🇺 Official DHA Criteria Guidelines</span>
            </div>

            <h1 className="font-heading text-3xl sm:text-5xl font-bold tracking-tight max-w-3xl mx-auto leading-tight">
              Australian Skilled Migration Points Calculator
            </h1>

            <p className="text-zinc-300 text-xs sm:text-base max-w-2xl mx-auto font-normal leading-relaxed">
              Calculate your exact score for General Skilled Migration (GSM) visas: <strong className="text-white">Subclass 189</strong>, <strong className="text-white">Subclass 190</strong>, and <strong className="text-white">Subclass 491</strong> according to official Department of Home Affairs rules.
            </p>
          </div>
        </section>

        {/* Main Content Layout: Left Form Criteria + Right Sticky Ticker */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 py-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left Column: Interactive Form Controls (8 cols) */}
            <div className="lg:col-span-8 space-y-8">
              {/* 1. Target Visa Subclass */}
              <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#C2DAF3] shadow-sm space-y-4">
                <div className="flex items-center justify-between border-b border-[#C2DAF3]/60 pb-3">
                  <h3 className="font-heading font-bold text-lg sm:text-xl text-[#061D38] flex items-center gap-2">
                    <span>1. Visa Subclass Selection</span>
                  </h3>
                  <span className="text-xs font-bold text-[#0163C8] bg-[#C2DAF3]/40 px-3 py-1 rounded-full">
                    +{visaPoints} Points
                  </span>
                </div>
                <p className="text-xs text-zinc-500">Select the Australian skilled visa category you intend to apply for:</p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {[
                    { id: '189', title: 'Subclass 189', desc: 'Skilled Independent (PR)', pts: '0 Pts' },
                    { id: '190', title: 'Subclass 190', desc: 'State Nominated (PR)', pts: '+5 Pts' },
                    { id: '491', title: 'Subclass 491', desc: 'Regional Nominated (5-Yr Visa)', pts: '+15 Pts' },
                  ].map((item) => (
                    <button
                      key={item.id}
                      onClick={() => setSubclass(item.id as '189' | '190' | '491')}
                      className={`p-4 rounded-2xl border text-left transition-all cursor-pointer flex flex-col justify-between ${
                        subclass === item.id
                          ? 'bg-[#0163C8] text-white border-[#0163C8] shadow-md shadow-[#0163C8]/20'
                          : 'bg-[#F4F8FC] text-[#061D38] border-[#C2DAF3] hover:bg-[#C2DAF3]/30'
                      }`}
                    >
                      <div>
                        <div className="font-bold text-sm">{item.title}</div>
                        <div className={`text-[11px] mt-1 ${subclass === item.id ? 'text-zinc-200' : 'text-zinc-500'}`}>
                          {item.desc}
                        </div>
                      </div>
                      <div className={`text-xs font-extrabold mt-3 ${subclass === item.id ? 'text-[#96F189]' : 'text-[#0163C8]'}`}>
                        {item.pts}
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* 2. Age Requirement */}
              <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#C2DAF3] shadow-sm space-y-4">
                <div className="flex items-center justify-between border-b border-[#C2DAF3]/60 pb-3">
                  <h3 className="font-heading font-bold text-lg sm:text-xl text-[#061D38] flex items-center gap-2">
                    <span>2. Age (At Invitation Time)</span>
                  </h3>
                  <span className="text-xs font-bold text-[#0163C8] bg-[#C2DAF3]/40 px-3 py-1 rounded-full">
                    +{agePoints} Points
                  </span>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-5 gap-2.5">
                  {[
                    { id: '18-24', label: '18 – 24 yrs', pts: '25 Pts' },
                    { id: '25-32', label: '25 – 32 yrs', pts: '30 Pts' },
                    { id: '33-39', label: '33 – 39 yrs', pts: '25 Pts' },
                    { id: '40-44', label: '40 – 44 yrs', pts: '15 Pts' },
                    { id: '45+', label: '45+ yrs', pts: '0 Pts (Ineligible)' },
                  ].map((item) => (
                    <button
                      key={item.id}
                      onClick={() => setAgeRange(item.id)}
                      className={`p-3.5 rounded-2xl border text-center transition-all cursor-pointer ${
                        ageRange === item.id
                          ? 'bg-[#0163C8] text-white border-[#0163C8] shadow-md shadow-[#0163C8]/20'
                          : 'bg-[#F4F8FC] text-[#061D38] border-[#C2DAF3] hover:bg-[#C2DAF3]/30'
                      }`}
                    >
                      <div className="font-bold text-xs">{item.label}</div>
                      <div className={`text-[10px] font-extrabold mt-1 ${ageRange === item.id ? 'text-[#96F189]' : 'text-[#0163C8]'}`}>
                        {item.pts}
                      </div>
                    </button>
                  ))}
                </div>
                {!isEligibleAge && (
                  <div className="p-3 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs font-semibold">
                    ⚠️ DHA Rule Notice: Applicants aged 45 or over at invitation cannot apply for General Skilled Migration.
                  </div>
                )}
              </div>

              {/* 3. English Language Ability */}
              <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#C2DAF3] shadow-sm space-y-4">
                <div className="flex items-center justify-between border-b border-[#C2DAF3]/60 pb-3">
                  <h3 className="font-heading font-bold text-lg sm:text-xl text-[#061D38]">
                    3. English Language Proficiency
                  </h3>
                  <span className="text-xs font-bold text-[#0163C8] bg-[#C2DAF3]/40 px-3 py-1 rounded-full">
                    +{englishPoints} Points
                  </span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {[
                    {
                      id: 'competent',
                      title: 'Competent English',
                      desc: 'IELTS 6.0 in each band / PTE 50 in each section',
                      pts: '0 Pts (Minimum Required)',
                    },
                    {
                      id: 'proficient',
                      title: 'Proficient English',
                      desc: 'IELTS 7.0 in each band / PTE 65 in each section',
                      pts: '+10 Pts',
                    },
                    {
                      id: 'superior',
                      title: 'Superior English',
                      desc: 'IELTS 8.0 in each band / PTE 79 in each section',
                      pts: '+20 Pts',
                    },
                  ].map((item) => (
                    <button
                      key={item.id}
                      onClick={() => setEnglishLevel(item.id)}
                      className={`p-4 rounded-2xl border text-left transition-all cursor-pointer flex flex-col justify-between ${
                        englishLevel === item.id
                          ? 'bg-[#0163C8] text-white border-[#0163C8] shadow-md shadow-[#0163C8]/20'
                          : 'bg-[#F4F8FC] text-[#061D38] border-[#C2DAF3] hover:bg-[#C2DAF3]/30'
                      }`}
                    >
                      <div>
                        <div className="font-bold text-sm">{item.title}</div>
                        <div className={`text-[11px] mt-1 ${englishLevel === item.id ? 'text-zinc-200' : 'text-zinc-500'}`}>
                          {item.desc}
                        </div>
                      </div>
                      <div className={`text-xs font-extrabold mt-3 ${englishLevel === item.id ? 'text-[#96F189]' : 'text-[#0163C8]'}`}>
                        {item.pts}
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* 4 & 5. Work Experience (Overseas & Australian) */}
              <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#C2DAF3] shadow-sm space-y-6">
                <div className="flex items-center justify-between border-b border-[#C2DAF3]/60 pb-3">
                  <div>
                    <h3 className="font-heading font-bold text-lg sm:text-xl text-[#061D38]">
                      4. Skilled Employment (Past 10 Years)
                    </h3>
                    <p className="text-[11px] text-zinc-500 mt-0.5">
                      Combined overseas + Australian work experience points capped at maximum 20 points.
                    </p>
                  </div>
                  <span className="text-xs font-bold text-[#0163C8] bg-[#C2DAF3]/40 px-3 py-1 rounded-full whitespace-nowrap">
                    +{workPoints} / 20 Pts
                  </span>
                </div>

                {/* Overseas Work Experience */}
                <div className="space-y-2">
                  <label className="block text-xs font-bold text-[#061D38] uppercase tracking-wider">
                    Overseas Skilled Experience (Outside Australia):
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                    {[
                      { id: '0-2', label: 'Less than 3 yrs', pts: '0 Pts' },
                      { id: '3-4', label: '3 – 4 yrs', pts: '+5 Pts' },
                      { id: '5-7', label: '5 – 7 yrs', pts: '+10 Pts' },
                      { id: '8-10', label: '8 – 10 yrs', pts: '+15 Pts' },
                    ].map((item) => (
                      <button
                        key={item.id}
                        onClick={() => setOverseasExp(item.id)}
                        className={`p-3 rounded-xl border text-center transition-all cursor-pointer ${
                          overseasExp === item.id
                            ? 'bg-[#0163C8] text-white border-[#0163C8]'
                            : 'bg-[#F4F8FC] text-[#061D38] border-[#C2DAF3]'
                        }`}
                      >
                        <div className="font-bold text-xs">{item.label}</div>
                        <div className={`text-[10px] font-extrabold mt-0.5 ${overseasExp === item.id ? 'text-[#96F189]' : 'text-[#0163C8]'}`}>
                          {item.pts}
                        </div>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Australian Work Experience */}
                <div className="space-y-2 pt-2">
                  <label className="block text-xs font-bold text-[#061D38] uppercase tracking-wider">
                    Australian Skilled Experience (In Australia):
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-5 gap-2">
                    {[
                      { id: '0', label: 'Less than 1 yr', pts: '0 Pts' },
                      { id: '1-2', label: '1 – 2 yrs', pts: '+5 Pts' },
                      { id: '3-4', label: '3 – 4 yrs', pts: '+10 Pts' },
                      { id: '5-7', label: '5 – 7 yrs', pts: '+15 Pts' },
                      { id: '8-10', label: '8 – 10 yrs', pts: '+20 Pts' },
                    ].map((item) => (
                      <button
                        key={item.id}
                        onClick={() => setAustralianExp(item.id)}
                        className={`p-3 rounded-xl border text-center transition-all cursor-pointer ${
                          australianExp === item.id
                            ? 'bg-[#0163C8] text-white border-[#0163C8]'
                            : 'bg-[#F4F8FC] text-[#061D38] border-[#C2DAF3]'
                        }`}
                      >
                        <div className="font-bold text-xs">{item.label}</div>
                        <div className={`text-[10px] font-extrabold mt-0.5 ${australianExp === item.id ? 'text-[#96F189]' : 'text-[#0163C8]'}`}>
                          {item.pts}
                        </div>
                      </button>
                    ))}
                  </div>
                </div>

                {uncappedWorkPoints > 20 && (
                  <div className="p-3 rounded-xl bg-amber-50 border border-amber-200 text-amber-800 text-xs font-medium">
                    💡 DHA Cap Applied: Your calculated work points ({uncappedWorkPoints} pts) reached the maximum DHA limit of 20 points.
                  </div>
                )}
              </div>

              {/* 6. Educational Qualifications */}
              <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#C2DAF3] shadow-sm space-y-4">
                <div className="flex items-center justify-between border-b border-[#C2DAF3]/60 pb-3">
                  <h3 className="font-heading font-bold text-lg sm:text-xl text-[#061D38]">
                    5. Educational Qualification
                  </h3>
                  <span className="text-xs font-bold text-[#0163C8] bg-[#C2DAF3]/40 px-3 py-1 rounded-full">
                    +{educationPoints} Points
                  </span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {[
                    {
                      id: 'phd',
                      title: 'Doctorate / PhD',
                      desc: 'From an Australian or recognized overseas institution',
                      pts: '+20 Pts',
                    },
                    {
                      id: 'bachelor_master',
                      title: 'Bachelor or Master Degree',
                      desc: 'From an Australian or recognized overseas university',
                      pts: '+15 Pts',
                    },
                    {
                      id: 'diploma_trade',
                      title: 'Australian Diploma or Trade Cert',
                      desc: 'Completed in Australia meeting CRICOS requirements',
                      pts: '+10 Pts',
                    },
                    {
                      id: 'skills_assessed',
                      title: 'Recognized Skill Assessment Cert',
                      desc: 'Assessed as suitable by relevant assessing authority',
                      pts: '+10 Pts',
                    },
                  ].map((item) => (
                    <button
                      key={item.id}
                      onClick={() => setEducation(item.id)}
                      className={`p-4 rounded-2xl border text-left transition-all cursor-pointer flex flex-col justify-between ${
                        education === item.id
                          ? 'bg-[#0163C8] text-white border-[#0163C8] shadow-md shadow-[#0163C8]/20'
                          : 'bg-[#F4F8FC] text-[#061D38] border-[#C2DAF3] hover:bg-[#C2DAF3]/30'
                      }`}
                    >
                      <div>
                        <div className="font-bold text-sm">{item.title}</div>
                        <div className={`text-[11px] mt-1 ${education === item.id ? 'text-zinc-200' : 'text-zinc-500'}`}>
                          {item.desc}
                        </div>
                      </div>
                      <div className={`text-xs font-extrabold mt-3 ${education === item.id ? 'text-[#96F189]' : 'text-[#0163C8]'}`}>
                        {item.pts}
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* 7. Additional Australian Qualification & Bonus Points */}
              <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#C2DAF3] shadow-sm space-y-4">
                <div className="flex items-center justify-between border-b border-[#C2DAF3]/60 pb-3">
                  <h3 className="font-heading font-bold text-lg sm:text-xl text-[#061D38]">
                    6. Australian & Specialist Qualifications
                  </h3>
                  <span className="text-xs font-bold text-[#0163C8] bg-[#C2DAF3]/40 px-3 py-1 rounded-full">
                    +{ausStudyPoints + stemPoints + naatiPoints + regionalPoints + pyPoints} Points
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {/* Australian Study Requirement */}
                  <div
                    onClick={() => setAusStudy(!ausStudy)}
                    className={`p-4 rounded-2xl border cursor-pointer transition-all flex items-start justify-between ${
                      ausStudy ? 'bg-[#0163C8] text-white border-[#0163C8]' : 'bg-[#F4F8FC] text-[#061D38] border-[#C2DAF3]'
                    }`}
                  >
                    <div>
                      <div className="font-bold text-xs">Australian Study Requirement</div>
                      <div className={`text-[10px] mt-1 ${ausStudy ? 'text-zinc-200' : 'text-zinc-500'}`}>
                        At least 2 academic years (16 months CRICOS registered study in Aus)
                      </div>
                    </div>
                    <div className={`text-xs font-extrabold whitespace-nowrap ml-2 ${ausStudy ? 'text-[#96F189]' : 'text-[#0163C8]'}`}>
                      +5 Pts
                    </div>
                  </div>

                  {/* STEM Specialist */}
                  <div
                    onClick={() => setStemSpecialist(!stemSpecialist)}
                    className={`p-4 rounded-2xl border cursor-pointer transition-all flex items-start justify-between ${
                      stemSpecialist ? 'bg-[#0163C8] text-white border-[#0163C8]' : 'bg-[#F4F8FC] text-[#061D38] border-[#C2DAF3]'
                    }`}
                  >
                    <div>
                      <div className="font-bold text-xs">STEM Specialist Qualification</div>
                      <div className={`text-[10px] mt-1 ${stemSpecialist ? 'text-zinc-200' : 'text-zinc-500'}`}>
                        Master by Research or PhD in STEM field in Australia
                      </div>
                    </div>
                    <div className={`text-xs font-extrabold whitespace-nowrap ml-2 ${stemSpecialist ? 'text-[#96F189]' : 'text-[#0163C8]'}`}>
                      +10 Pts
                    </div>
                  </div>

                  {/* NAATI CCL */}
                  <div
                    onClick={() => setNaatiCcl(!naatiCcl)}
                    className={`p-4 rounded-2xl border cursor-pointer transition-all flex items-start justify-between ${
                      naatiCcl ? 'bg-[#0163C8] text-white border-[#0163C8]' : 'bg-[#F4F8FC] text-[#061D38] border-[#C2DAF3]'
                    }`}
                  >
                    <div>
                      <div className="font-bold text-xs">Credentialed Community Language</div>
                      <div className={`text-[10px] mt-1 ${naatiCcl ? 'text-zinc-200' : 'text-zinc-500'}`}>
                        Passed NAATI CCL exam or accredited community language
                      </div>
                    </div>
                    <div className={`text-xs font-extrabold whitespace-nowrap ml-2 ${naatiCcl ? 'text-[#96F189]' : 'text-[#0163C8]'}`}>
                      +5 Pts
                    </div>
                  </div>

                  {/* Regional Study */}
                  <div
                    onClick={() => setRegionalStudy(!regionalStudy)}
                    className={`p-4 rounded-2xl border cursor-pointer transition-all flex items-start justify-between ${
                      regionalStudy ? 'bg-[#0163C8] text-white border-[#0163C8]' : 'bg-[#F4F8FC] text-[#061D38] border-[#C2DAF3]'
                    }`}
                  >
                    <div>
                      <div className="font-bold text-xs">Designated Regional Australia Study</div>
                      <div className={`text-[10px] mt-1 ${regionalStudy ? 'text-zinc-200' : 'text-zinc-500'}`}>
                        Lived and studied in designated regional Australia
                      </div>
                    </div>
                    <div className={`text-xs font-extrabold whitespace-nowrap ml-2 ${regionalStudy ? 'text-[#96F189]' : 'text-[#0163C8]'}`}>
                      +5 Pts
                    </div>
                  </div>

                  {/* Professional Year */}
                  <div
                    onClick={() => setProfessionalYear(!professionalYear)}
                    className={`p-4 rounded-2xl border cursor-pointer transition-all flex items-start justify-between sm:col-span-2 ${
                      professionalYear ? 'bg-[#0163C8] text-white border-[#0163C8]' : 'bg-[#F4F8FC] text-[#061D38] border-[#C2DAF3]'
                    }`}
                  >
                    <div>
                      <div className="font-bold text-xs">Professional Year (PY) Program</div>
                      <div className={`text-[10px] mt-1 ${professionalYear ? 'text-zinc-200' : 'text-zinc-500'}`}>
                        Completed approved Professional Year in Accounting, ICT, or Engineering in Australia
                      </div>
                    </div>
                    <div className={`text-xs font-extrabold whitespace-nowrap ml-2 ${professionalYear ? 'text-[#96F189]' : 'text-[#0163C8]'}`}>
                      +5 Pts
                    </div>
                  </div>
                </div>
              </div>

              {/* 8. Partner Skills */}
              <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#C2DAF3] shadow-sm space-y-4">
                <div className="flex items-center justify-between border-b border-[#C2DAF3]/60 pb-3">
                  <h3 className="font-heading font-bold text-lg sm:text-xl text-[#061D38]">
                    7. Partner Skill & Relationship Status
                  </h3>
                  <span className="text-xs font-bold text-[#0163C8] bg-[#C2DAF3]/40 px-3 py-1 rounded-full">
                    +{partnerPoints} Points
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {[
                    {
                      id: 'single',
                      title: 'Single / Unmarried',
                      desc: 'Applicant is single or partner is Australian Citizen/PR',
                      pts: '+10 Pts',
                    },
                    {
                      id: 'partner_skill_english',
                      title: 'Partner Skill Assessment + Competent English',
                      desc: 'Partner under 45, holds positive skill assessment & Competent English',
                      pts: '+10 Pts',
                    },
                    {
                      id: 'partner_english_only',
                      title: 'Partner Competent English Only',
                      desc: 'Partner holds Competent English (IELTS 6 / PTE 50)',
                      pts: '+5 Pts',
                    },
                    {
                      id: 'partner_ineligible',
                      title: 'Partner Ineligible / No English',
                      desc: 'Partner is not an Australian PR/Citizen and lacks English test',
                      pts: '0 Pts',
                    },
                  ].map((item) => (
                    <button
                      key={item.id}
                      onClick={() => setPartnerStatus(item.id)}
                      className={`p-4 rounded-2xl border text-left transition-all cursor-pointer flex flex-col justify-between ${
                        partnerStatus === item.id
                          ? 'bg-[#0163C8] text-white border-[#0163C8] shadow-md shadow-[#0163C8]/20'
                          : 'bg-[#F4F8FC] text-[#061D38] border-[#C2DAF3] hover:bg-[#C2DAF3]/30'
                      }`}
                    >
                      <div>
                        <div className="font-bold text-sm">{item.title}</div>
                        <div className={`text-[11px] mt-1 ${partnerStatus === item.id ? 'text-zinc-200' : 'text-zinc-500'}`}>
                          {item.desc}
                        </div>
                      </div>
                      <div className={`text-xs font-extrabold mt-3 ${partnerStatus === item.id ? 'text-[#96F189]' : 'text-[#0163C8]'}`}>
                        {item.pts}
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column: Sticky Live Score Audit Card (4 cols) */}
            <div className="lg:col-span-4 lg:sticky lg:top-24 space-y-6">
              <div className="bg-[#061D38] text-white rounded-3xl p-6 sm:p-8 border border-[#0163C8] shadow-2xl space-y-6">
                {/* Header Badge */}
                <div className="flex justify-between items-center border-b border-[#0163C8]/50 pb-4">
                  <span className="text-[10px] font-bold text-[#96F189] uppercase tracking-wider bg-[#0163C8]/40 px-3 py-1 rounded-full border border-[#0163C8]">
                    DHA Points Audit
                  </span>
                  <button
                    onClick={handleReset}
                    className="text-xs text-zinc-400 hover:text-white underline"
                  >
                    Reset Form
                  </button>
                </div>

                {/* Score Ticker Display */}
                <div className="text-center space-y-2 py-2">
                  <div className="text-xs font-semibold text-zinc-300 uppercase tracking-widest">
                    Your Total Score
                  </div>
                  <div className="text-5xl sm:text-6xl font-extrabold font-heading text-white flex items-center justify-center gap-1">
                    <span>{totalPoints}</span>
                    <span className="text-lg text-[#96F189] font-normal">pts</span>
                  </div>

                  {/* Pass Mark Status */}
                  <div className="pt-2">
                    {totalPoints >= passMark ? (
                      <span className="inline-flex items-center space-x-1 px-3 py-1 rounded-full bg-[#96F189] text-[#061D38] text-xs font-bold">
                        <span>✓ EOI Pass Mark (65 Pts) Met</span>
                      </span>
                    ) : (
                      <span className="inline-flex items-center space-x-1 px-3 py-1 rounded-full bg-amber-400 text-[#061D38] text-xs font-bold">
                        <span>⚠️ Needs {passMark - totalPoints} pts for 65 EOI Pass Mark</span>
                      </span>
                    )}
                  </div>
                </div>

                {/* Progress Meter Bar */}
                <div className="space-y-1.5">
                  <div className="flex justify-between text-[11px] text-zinc-300 font-medium">
                    <span>Pass Threshold (65)</span>
                    <span>{totalPoints} / 120 pts</span>
                  </div>
                  <div className="w-full h-3 rounded-full bg-white/10 overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-[#0163C8] to-[#96F189] transition-all duration-500"
                      style={{ width: `${Math.min(100, (totalPoints / 100) * 100)}%` }}
                    />
                  </div>
                </div>

                {/* Tier Analysis Card */}
                <div className="p-4 rounded-2xl bg-[#0b284c] border border-[#0163C8]/60 space-y-2">
                  <div className="text-xs font-bold text-[#96F189] uppercase tracking-wider">
                    Invitation Probability Tier:
                  </div>
                  <div className="text-sm font-bold text-white">
                    {totalPoints >= 85
                      ? '⭐ Top-Tier Competitive (High Subclass 189 Chance)'
                      : totalPoints >= 75
                      ? '🟢 Strong Score Range (Competitive 190 / 491)'
                      : totalPoints >= 65
                      ? '🟡 Meets Minimum EOI Threshold (State Nom Priority)'
                      : '🔴 Below Minimum EOI Pass Mark (65 Pts Required)'}
                  </div>
                </div>

                {/* Itemized Points Breakdown List */}
                <div className="space-y-2 text-xs border-t border-[#0163C8]/40 pt-4 text-zinc-300">
                  <div className="font-bold text-white uppercase text-[11px] mb-2">Itemized Category Summary:</div>
                  <div className="flex justify-between">
                    <span>Visa Nomination ({subclass}):</span>
                    <span className="font-bold text-white">+{visaPoints} pts</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Age ({ageRange}):</span>
                    <span className="font-bold text-white">+{agePoints} pts</span>
                  </div>
                  <div className="flex justify-between">
                    <span>English ({englishLevel}):</span>
                    <span className="font-bold text-white">+{englishPoints} pts</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Skilled Work Exp:</span>
                    <span className="font-bold text-white">+{workPoints} pts</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Education:</span>
                    <span className="font-bold text-white">+{educationPoints} pts</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Aus / STEM / NAATI / PY:</span>
                    <span className="font-bold text-white">
                      +{ausStudyPoints + stemPoints + naatiPoints + regionalPoints + pyPoints} pts
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span>Partner Status:</span>
                    <span className="font-bold text-white">+{partnerPoints} pts</span>
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
