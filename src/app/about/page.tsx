'use client';

import React, { useState } from 'react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { ConsultationModal } from '@/components/ConsultationModal';

export default function AboutPage() {
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);

  const handleOpenConsultation = () => setIsConsultationOpen(true);
  const handleCloseConsultation = () => setIsConsultationOpen(false);

  const pillars = [
    { title: 'MARA Registered', label: 'Registered Migration Counselors', icon: '⚖️' },
    { title: 'QEAC Certified', label: 'Qualified Education Counselors', icon: '🎓' },
    { title: 'Tailored Strategy', label: 'Custom PR & Student Visa Filing', icon: '🎯' },
    { title: 'Ethical Standards', label: 'Strict MARA Code of Conduct', icon: '🤝' },
  ];

  const coreValues = [
    {
      title: 'MARA Certified Integrity',
      description: 'Strict adherence to Australian Migration Agents Code of Conduct and global ethical compliance standards.',
      icon: '🛡️',
    },
    {
      title: 'Student-Centric Pathways',
      description: 'Tailored course selection aligned with long-term Permanent Residency (PR) and skill assessment goals.',
      icon: '🎯',
    },
    {
      title: 'End-to-End Execution',
      description: 'From SOP writing and GTE documentation to visa filing, health checks, and pre-departure briefings.',
      icon: '🚀',
    },
    {
      title: 'Transparent Flat Pricing',
      description: 'Zero hidden fees with clear contract terms so you know your entire financial commitment upfront.',
      icon: '💎',
    },
  ];

  const leadershipTeam = [
    {
      name: 'Mohit Kharbanda',
      role: 'Registered Migration Agent (MARN: 2318016)',
      bio: 'Registered Migration Agent specializing in Australian migration pathways, skilled migration, student visas, and strategic permanent residency planning.',
      image: '/images/mohit-kharbanda.jpg',
      badge: 'MARN 2318016',
    },
    {
      name: 'Eve (Gaurav Tyagi)',
      role: 'Registered Migration Agent (MARN: 2619403)',
      bio: 'Registered Migration Agent focusing on student visa admissions, Subclass 485 temporary graduate pathways, and strategic Australian permanent residency guidance.',
      image: '/images/eve-tyagi.jpg',
      badge: 'MARN 2619403',
    },
    {
      name: 'Randhir Dhundoo',
      role: 'ART & Complex Migration Specialist',
      bio: 'Experienced Migration Specialist focusing on Administrative Review Tribunal (ART) representation, complex employer-sponsored visa applications, and corporate labour agreements.',
      image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=400&q=80',
      badge: 'ART Specialist',
    },
    {
      name: 'Aradhana Sethi',
      role: 'Registered Migration Agent (MARN: 2318040)',
      bio: 'Dedicated Migration Advisor specializing in onshore and offshore parent visa categories, family reunion streams, and employer-sponsored visa pathways.',
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=400&q=80',
      badge: 'MARN 2318040',
    },
  ];

  return (
    <div className="min-h-screen bg-[#F4F8FC] text-[#061D38] font-body selection:bg-[#96F189] selection:text-[#061D38] flex flex-col justify-between">
      <div>
        {/* Navigation Header */}
        <Navbar onOpenConsultation={handleOpenConsultation} />

        {/* Hero Section */}
        <section className="relative bg-[#061D38] text-white pt-36 pb-20 px-6 overflow-hidden">
          {/* Subtle Ambient Background Gradients */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#0163C8]/30 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#96F189]/10 rounded-full blur-3xl pointer-events-none" />

          <div className="max-w-7xl mx-auto relative z-10 text-center space-y-6">
            <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-[#0163C8]/30 border border-[#0163C8] text-[#96F189] text-xs font-semibold tracking-wide uppercase">
              <span>🌟 Premier Migration & Student Placement Agency</span>
            </div>

            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight max-w-4xl mx-auto leading-tight">
              Empowering Global Ambitions with Trusted Migration Expertise
            </h1>

            <p className="text-zinc-300 text-base sm:text-lg max-w-2xl mx-auto font-normal leading-relaxed">
              Legendary Careers is an accredited migration firm dedicated to guiding students, professionals, and families through university admissions, visa applications, and global migration pathways.
            </p>

            <div className="pt-4 flex flex-wrap justify-center gap-4">
              <button
                onClick={handleOpenConsultation}
                className="px-8 py-3.5 rounded-full bg-[#0163C8] text-white font-semibold text-sm uppercase tracking-wider hover:bg-[#96F189] hover:text-[#061D38] transition-all duration-300 shadow-lg shadow-[#0163C8]/30 cursor-pointer"
              >
                Book Consultation
              </button>
            </div>
          </div>
        </section>

        {/* Professional Accreditation & Service Pillars Banner */}
        <section className="py-12 bg-white border-b border-[#C2DAF3]/50">
          <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
            {pillars.map((pillar, idx) => (
              <div key={idx} className="text-center space-y-1.5 p-4 rounded-2xl bg-[#F4F8FC] border border-[#C2DAF3]/60 shadow-xs">
                <div className="text-2xl sm:text-3xl font-extrabold text-[#0163C8] font-heading flex justify-center items-center gap-2">
                  <span>{pillar.icon}</span>
                </div>
                <div className="font-heading font-bold text-sm sm:text-base text-[#061D38]">{pillar.title}</div>
                <div className="text-[11px] sm:text-xs text-zinc-500 font-medium">{pillar.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Mission & Vision Section */}
        <section className="py-20 px-6 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-block px-3 py-1 rounded bg-[#C2DAF3]/40 text-[#0163C8] text-xs font-bold uppercase tracking-wider">
                Our Story & Purpose
              </div>
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-[#061D38]">
                Bridging Students to Top Global Universities & PR Pathways
              </h2>
              <p className="text-zinc-700 leading-relaxed text-sm sm:text-base">
                Legendary Careers was founded with a singular vision: to replace convoluted visa advice with transparent, outcome-oriented, and fully compliant migration solutions.
              </p>
              <p className="text-zinc-700 leading-relaxed text-sm sm:text-base">
                Our team consists of Registered Migration Agents (MARA), QEAC Certified Education Counselors, and admissions experts dedicated to navigating Australian, Canadian, UK, USA, German, and New Zealand education and visa pathways.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-2xl bg-white border border-[#C2DAF3] shadow-sm">
                  <h3 className="font-heading font-bold text-lg text-[#0163C8]">Our Mission</h3>
                  <p className="text-xs text-zinc-600 mt-1">To deliver transparent, compliant, and stress-free visa and education consulting to every applicant globally.</p>
                </div>
                <div className="p-4 rounded-2xl bg-white border border-[#C2DAF3] shadow-sm">
                  <h3 className="font-heading font-bold text-lg text-[#0163C8]">Our Vision</h3>
                  <p className="text-xs text-zinc-600 mt-1">To be the most trusted international education and migration agency recognized for 100% legal compliance and student success.</p>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1000&q=80"
                  alt="Legendary Careers Team Consulting"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-[#061D38] text-white p-6 rounded-2xl shadow-xl hidden sm:block max-w-xs">
                <p className="text-xs font-semibold text-[#96F189]">MARA Accredited Agency</p>
                <p className="text-sm font-bold mt-1">Direct representation with Immigration Departments worldwide.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Core Pillars / Values */}
        <section className="py-16 bg-[#061D38] text-white px-6">
          <div className="max-w-7xl mx-auto space-y-12">
            <div className="text-center max-w-2xl mx-auto space-y-6">
              <div>
                <span className="inline-block px-4 py-1.5 rounded-full bg-[#0163C8]/40 border border-[#0163C8] text-[#96F189] text-xs font-bold uppercase tracking-wider shadow-sm">
                  Why Choose Us
                </span>
              </div>
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-white pt-1">
                Built on Integrity, Accuracy & Academic Excellence
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {coreValues.map((value, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-2xl bg-[#0b284c] border border-[#0163C8]/40 hover:border-[#96F189] transition-all duration-300 space-y-3"
                >
                  <div className="text-3xl">{value.icon}</div>
                  <h3 className="font-heading font-bold text-lg text-white">{value.title}</h3>
                  <p className="text-xs text-zinc-300 leading-relaxed">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Leadership Team */}
        <section className="py-20 px-6 max-w-7xl mx-auto space-y-12">
          <div className="text-center space-y-4 max-w-2xl mx-auto">
            <span className="px-3 py-1 rounded bg-[#C2DAF3]/40 text-[#0163C8] text-xs font-bold uppercase tracking-wider">
              Leadership & Consultants
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-[#061D38]">
              Meet Our Senior Migration Experts
            </h2>
            <p className="text-zinc-600 text-sm">
              Our registered agents bring decades of direct industry experience to maximize your visa approval odds.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {leadershipTeam.map((member, idx) => (
              <div
                key={idx}
                className="bg-white rounded-3xl overflow-hidden border border-[#C2DAF3] shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                <div className="h-64 overflow-hidden relative">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover object-top transition-transform duration-500 hover:scale-105"
                  />
                  <span className="absolute top-4 right-4 bg-[#061D38] text-[#96F189] text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                    {member.badge}
                  </span>
                </div>
                <div className="p-6 space-y-3 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-heading font-bold text-xl text-[#061D38]">{member.name}</h3>
                    <p className="text-xs font-semibold text-[#0163C8] mt-1">{member.role}</p>
                    <p className="text-xs text-zinc-600 mt-3 leading-relaxed">{member.bio}</p>
                  </div>
                  <button
                    onClick={handleOpenConsultation}
                    className="w-full mt-4 py-2.5 rounded-xl border border-[#0163C8] text-[#0163C8] font-semibold text-xs uppercase tracking-wider hover:bg-[#0163C8] hover:text-white transition-colors cursor-pointer"
                  >
                    Book Call with {member.name.split(' ')[0]}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* Footer */}
      <Footer />

      {/* Consultation Modal */}
      <ConsultationModal
        isOpen={isConsultationOpen}
        onClose={handleCloseConsultation}
      />
    </div>
  );
}
