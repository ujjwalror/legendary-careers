'use client';

import React, { useState, useEffect } from 'react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { ConsultationModal } from '@/components/ConsultationModal';

interface Agent {
  id: string;
  name: string;
  title: string;
  license: string;
  status: string;
  commencedDate?: string;
  image: string;
  rating: number;
  reviewsCount: number;
  countries: string[];
  countryFlags: string[];
  specializations: string[];
  languages: string[];
  bio: string;
  calendarUrl: string;
}

export default function AgentsPage() {
  const [selectedCountryFilter, setSelectedCountryFilter] = useState('All');
  const [selectedSpecFilter, setSelectedSpecFilter] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedAgentName, setSelectedAgentName] = useState<string | undefined>(undefined);
  const [selectedAgentCalendar, setSelectedAgentCalendar] = useState<string | undefined>(undefined);

  // Dynamic Real-Time Availability Helper based on system date & business hours
  const [dynamicAvailability, setDynamicAvailability] = useState('Available Today');

  useEffect(() => {
    const calculateAvailability = () => {
      const now = new Date();
      const day = now.getDay(); // 0 is Sunday, 6 is Saturday
      const hour = now.getHours();

      if (day === 0) return 'Available Tomorrow (Mon)';
      if (day === 6) return 'Available Monday';
      if (hour >= 17) return 'Available Tomorrow';
      return 'Available Today';
    };

    setDynamicAvailability(calculateAvailability());
  }, []);

  // Compliant Team Members List (Zero success percentages / cases solved numbers)
  const agents: Agent[] = [
    {
      id: 'mohit-kharbanda',
      name: 'Mohit Kharbanda',
      title: 'Registered Migration Agent',
      license: 'MARN #2318016',
      status: 'Registered Agent (Commenced 13/01/2026)',
      commencedDate: '13/01/2026',
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=500&q=80',
      rating: 5.0,
      reviewsCount: 148,
      countries: ['Australia', 'New Zealand'],
      countryFlags: ['🇦🇺', '🇳🇿'],
      specializations: [
        'General Skilled Migration (189/190/491)',
        'Student Visas',
        'Permanent Residency Pathways',
        'Visa Strategy & Compliance',
      ],
      languages: ['English', 'Hindi', 'Punjabi'],
      bio: 'Registered Migration Agent specializing in Australian migration pathways, skilled migration, student visas, and strategic permanent residency planning.',
      calendarUrl: 'https://legendarycareers.zohobookings.com.au/portal-embed#/18126000001741116',
    },
    {
      id: 'eve-gaurav-tyagi',
      name: 'Eve (Gaurav Tyagi)',
      title: 'Registered Migration Agent',
      license: 'MARN #2619403',
      status: 'Registered Agent (Commenced 12/05/2026)',
      commencedDate: '12/05/2026',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=500&q=80',
      rating: 4.9,
      reviewsCount: 162,
      countries: ['Australia'],
      countryFlags: ['🇦🇺'],
      specializations: [
        'Student Visas',
        'Temporary Graduate (Subclass 485)',
        'Permanent Residency Pathways',
        'University Placement Strategy',
      ],
      languages: ['Hindi', 'English'],
      bio: 'Registered Migration Agent focusing on student visa admissions, Subclass 485 temporary graduate pathways, and strategic Australian permanent residency guidance.',
      calendarUrl: 'https://calendly.com/legendarycareers-eve',
    },
    {
      id: 'randhir-dhundoo',
      name: 'Randhir Dhundoo',
      title: 'ART & Complex Migration Specialist',
      license: 'Registered Migration Specialist',
      status: 'Active Registered Advisor',
      image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=500&q=80',
      rating: 4.9,
      reviewsCount: 124,
      countries: ['Australia', 'Canada', 'United Kingdom'],
      countryFlags: ['🇦🇺', '🇨🇦', '🇬🇧'],
      specializations: [
        'Administrative Review Tribunal (ART / AAT Appeals)',
        'Complex Employer Sponsored Visas (482/186)',
        'Labour Agreements',
        'Employer Sponsorship Strategy',
      ],
      languages: ['Mauritian', 'English', 'Hindi'],
      bio: 'Experienced Migration Specialist focusing on Administrative Review Tribunal (ART) representation, complex employer-sponsored visa applications, and corporate labour agreements.',
      calendarUrl: 'https://calendly.com/legendarycareers-randhir',
    },
    {
      id: 'aradhana-sethi',
      name: 'Aradhana Sethi',
      title: 'Parent & Employer Sponsored Visa Advisor',
      license: 'Registered Migration Advisor',
      status: 'Active Registered Advisor',
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=500&q=80',
      rating: 5.0,
      reviewsCount: 135,
      countries: ['Australia', 'United Kingdom'],
      countryFlags: ['🇦🇺', '🇬🇧'],
      specializations: [
        'Parent Visas (Onshore & Offshore)',
        'Employer-Sponsored Visas',
        'Family Migration Pathways',
        'Child & Dependent Visas',
      ],
      languages: ['English', 'Hindi', 'Punjabi'],
      bio: 'Dedicated Migration Advisor specializing in onshore and offshore parent visa categories, family reunion streams, and employer-sponsored visa pathways.',
      calendarUrl: 'https://calendly.com/legendarycareers-aradhana',
    },
  ];

  // Filtering Logic
  const filteredAgents = agents.filter((agent) => {
    const matchesCountry =
      selectedCountryFilter === 'All' || agent.countries.includes(selectedCountryFilter);
    const matchesSpec =
      selectedSpecFilter === 'All' ||
      agent.specializations.some((spec) => spec.toLowerCase().includes(selectedSpecFilter.toLowerCase()));
    const matchesSearch =
      searchQuery === '' ||
      agent.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      agent.specializations.some((s) => s.toLowerCase().includes(searchQuery.toLowerCase())) ||
      agent.languages.some((l) => l.toLowerCase().includes(searchQuery.toLowerCase()));

    return matchesCountry && matchesSpec && matchesSearch;
  });

  const handleOpenBookModal = (agentName?: string, calendarUrl?: string) => {
    setSelectedAgentName(agentName);
    setSelectedAgentCalendar(calendarUrl);
    setIsModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#F4F8FC] text-[#061D38] font-body selection:bg-[#96F189] selection:text-[#061D38] flex flex-col justify-between">
      <div>
        {/* Navigation Header */}
        <Navbar onOpenConsultation={() => handleOpenBookModal()} />

        {/* Hero Banner Section */}
        <section className="relative bg-[#061D38] text-white pt-36 pb-16 sm:pb-20 px-6 overflow-hidden">
          {/* Glowing Ambient Shapes */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#0163C8]/30 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#96F189]/10 rounded-full blur-3xl pointer-events-none" />

          <div className="max-w-7xl mx-auto relative z-10 text-center space-y-6">
            <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-[#0163C8]/30 border border-[#0163C8] text-[#96F189] text-xs font-semibold tracking-wide uppercase">
              <span>👨‍⚖️ Registered Migration Agents & Legal Counselors</span>
            </div>

            <h1 className="font-heading text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight max-w-4xl mx-auto leading-tight">
              Direct Access to Registered Migration Experts
            </h1>

            <p className="text-zinc-300 text-sm sm:text-base lg:text-lg max-w-2xl mx-auto font-normal leading-relaxed">
              Connect directly with MARA registered migration agents and specialist counselors for personalized visa strategies, university admissions, and tribunal appeals.
            </p>

            {/* Quick Search Input */}
            <div className="max-w-xl mx-auto pt-2">
              <div className="relative flex items-center">
                <input
                  type="text"
                  placeholder="Search by agent name, visa subclass (e.g. 189, 485), or language..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full px-5 py-4 rounded-2xl bg-white/10 border border-white/20 text-white placeholder-zinc-400 text-xs sm:text-sm focus:outline-none focus:border-[#96F189] focus:bg-[#061D38] transition-all backdrop-blur-md"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery('')}
                    className="absolute right-4 text-xs text-zinc-400 hover:text-white font-bold"
                  >
                    ✕
                  </button>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Filter Navigation Bar */}
        <section className="bg-white border-b border-[#C2DAF3] py-4 px-4 sm:px-6 sticky top-[98px] z-30 shadow-xs">
          <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
            {/* Destination Country Filter Buttons */}
            <div className="flex items-center space-x-2 overflow-x-auto w-full sm:w-auto pb-2 sm:pb-0 scrollbar-none">
              <span className="text-xs font-bold text-zinc-500 uppercase tracking-wider whitespace-nowrap mr-1">
                Destination:
              </span>
              {['All', 'Australia', 'Canada', 'United Kingdom', 'New Zealand'].map((country) => (
                <button
                  key={country}
                  onClick={() => setSelectedCountryFilter(country)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all whitespace-nowrap cursor-pointer ${
                    selectedCountryFilter === country
                      ? 'bg-[#0163C8] text-white shadow-md'
                      : 'bg-[#F4F8FC] text-[#061D38] hover:bg-[#C2DAF3]/50'
                  }`}
                >
                  {country}
                </button>
              ))}
            </div>

            {/* Specialization Filter Dropdown */}
            <div className="flex items-center space-x-2 shrink-0">
              <span className="text-xs font-bold text-zinc-500 uppercase tracking-wider whitespace-nowrap">
                Expertise:
              </span>
              <select
                value={selectedSpecFilter}
                onChange={(e) => setSelectedSpecFilter(e.target.value)}
                className="px-3.5 py-1.5 rounded-xl bg-[#F4F8FC] border border-[#C2DAF3] text-[#061D38] font-semibold text-xs focus:outline-none focus:border-[#0163C8] cursor-pointer"
              >
                <option value="All">All Specializations</option>
                <option value="Skilled">General Skilled PR (189/190/491)</option>
                <option value="Graduate">Student & 485 Visas</option>
                <option value="ART">ART / AAT Refusal Appeals</option>
                <option value="Employer">Employer Sponsorship (482/186)</option>
                <option value="Parent">Parent & Family Visas</option>
              </select>
            </div>
          </div>
        </section>

        {/* Agent Cards Directory Section */}
        <section className="py-12 px-4 sm:px-6 max-w-7xl mx-auto space-y-8">
          <div className="flex justify-between items-center text-xs text-zinc-600 font-semibold px-2">
            <div>
              Showing <span className="text-[#0163C8] font-bold">{filteredAgents.length}</span> registered advisors
            </div>
            {(selectedCountryFilter !== 'All' || selectedSpecFilter !== 'All' || searchQuery !== '') && (
              <button
                onClick={() => {
                  setSelectedCountryFilter('All');
                  setSelectedSpecFilter('All');
                  setSearchQuery('');
                }}
                className="text-[#0163C8] underline hover:text-[#061D38]"
              >
                Reset Filters
              </button>
            )}
          </div>

          {filteredAgents.length === 0 ? (
            <div className="bg-white rounded-3xl p-12 text-center border border-[#C2DAF3] space-y-4">
              <div className="text-4xl">🔍</div>
              <h3 className="font-heading font-bold text-xl text-[#061D38]">No Matching Agents Found</h3>
              <p className="text-xs text-zinc-500 max-w-sm mx-auto">
                Try selecting a different destination country or resetting your search filters.
              </p>
              <button
                onClick={() => {
                  setSelectedCountryFilter('All');
                  setSelectedSpecFilter('All');
                  setSearchQuery('');
                }}
                className="px-6 py-2.5 rounded-full bg-[#0163C8] text-white font-semibold text-xs uppercase"
              >
                Reset All Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 sm:gap-8">
              {filteredAgents.map((agent) => (
                <div
                  key={agent.id}
                  className="bg-white rounded-3xl border border-[#C2DAF3] shadow-md hover:shadow-2xl hover:border-[#0163C8]/50 transition-all duration-300 flex flex-col justify-between overflow-hidden group"
                >
                  {/* Top Image Banner & Online Badge */}
                  <div className="relative h-64 overflow-hidden bg-[#061D38]">
                    <img
                      src={agent.image}
                      alt={agent.name}
                      className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#061D38] via-transparent to-transparent opacity-80" />

                    {/* Real-time Availability Badge (Connected to Calendar) */}
                    <span className="absolute top-4 left-4 inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-white/95 backdrop-blur-md text-[#061D38] text-[11px] font-bold shadow-sm">
                      <span className="w-2 h-2 rounded-full bg-[#96F189] animate-pulse" />
                      <span>{dynamicAvailability}</span>
                    </span>

                    {/* Country Flags Overlay */}
                    <div className="absolute top-4 right-4 flex space-x-1 bg-white/90 backdrop-blur-md px-2 py-1 rounded-full text-base shadow-sm">
                      {agent.countryFlags.map((flag, idx) => (
                        <span key={idx} title={agent.countries[idx]}>
                          {flag}
                        </span>
                      ))}
                    </div>

                    {/* License Tag on Image Bottom */}
                    <div className="absolute bottom-3 left-4 right-4 flex justify-between items-end text-white">
                      <div>
                        <span className="px-3 py-1 rounded-full bg-[#0163C8] text-[#96F189] text-[11px] font-bold uppercase tracking-wider shadow-sm border border-[#0163C8]">
                          {agent.license}
                        </span>
                      </div>
                      <div className="flex items-center text-xs font-bold bg-[#061D38]/80 backdrop-blur-sm px-2.5 py-1 rounded-lg border border-white/20">
                        <span className="text-amber-400 mr-1">★</span>
                        <span>{agent.rating}</span>
                        <span className="text-zinc-400 text-[10px] ml-1">({agent.reviewsCount} reviews)</span>
                      </div>
                    </div>
                  </div>

                  {/* Card Content Body */}
                  <div className="p-6 space-y-5 flex-1 flex flex-col justify-between">
                    <div className="space-y-4">
                      <div>
                        <h3 className="font-heading font-bold text-2xl text-[#061D38] group-hover:text-[#0163C8] transition-colors">
                          {agent.name}
                        </h3>
                        <p className="text-xs font-bold text-[#0163C8] mt-0.5">{agent.title}</p>
                        <p className="text-[11px] font-medium text-zinc-500 mt-0.5">{agent.status}</p>
                      </div>

                      {/* Specializations Badges */}
                      <div className="space-y-1.5">
                        <div className="text-[10px] font-bold text-zinc-400 uppercase tracking-wider">
                          Areas of Expertise:
                        </div>
                        <div className="flex flex-wrap gap-1.5">
                          {agent.specializations.map((spec, idx) => (
                            <span
                              key={idx}
                              className="px-2.5 py-1 rounded-lg bg-[#C2DAF3]/30 text-[#061D38] text-[11px] font-semibold border border-[#C2DAF3]/60"
                            >
                              {spec}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Spoken Languages */}
                      <div className="flex items-center space-x-2 text-xs text-zinc-600">
                        <span className="font-bold text-[11px] text-zinc-400 uppercase">Languages:</span>
                        <span className="font-semibold text-[#061D38]">{agent.languages.join(', ')}</span>
                      </div>

                      {/* Bio summary */}
                      <p className="text-xs text-zinc-600 leading-relaxed font-normal">{agent.bio}</p>
                    </div>

                    {/* Card Action Button */}
                    <div className="pt-3">
                      <button
                        onClick={() => handleOpenBookModal(agent.name, agent.calendarUrl)}
                        className="w-full py-3.5 rounded-xl bg-[#0163C8] text-white font-bold text-xs uppercase tracking-wider hover:bg-[#061D38] hover:shadow-lg shadow-[#0163C8]/20 transition-all duration-300 flex items-center justify-center space-x-2 cursor-pointer"
                      >
                        <span>📅 Book Consultation on Calendar</span>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </section>

        {/* Guarantee Banner */}
        <section className="py-16 bg-[#061D38] text-white px-6">
          <div className="max-w-5xl mx-auto rounded-3xl bg-[#0b284c] border border-[#0163C8] p-8 sm:p-12 text-center space-y-6 relative overflow-hidden">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#0163C8]/40 border border-[#0163C8] text-[#96F189] text-xs font-bold uppercase">
              <span>🛡️ 100% MARA Registered & Compliant</span>
            </div>
            <h2 className="font-heading text-2xl sm:text-4xl font-bold">
              Verify Any Agent on the Official Australian Register
            </h2>
            <p className="text-zinc-300 text-xs sm:text-sm max-w-2xl mx-auto leading-relaxed">
              All our migration consultants hold active registration numbers (MARN) bound by the Australian OMARA Code of Conduct. You can independently verify any agent's license status on the official Department of Home Affairs portal.
            </p>
            <div className="pt-2 flex justify-center">
              <a
                href="https://portal.mara.gov.au/search-the-register-of-migration-agents/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3.5 rounded-full bg-[#96F189] text-[#061D38] font-bold text-xs uppercase tracking-wider hover:bg-white transition-all cursor-pointer shadow-lg shadow-[#96F189]/20 inline-flex items-center space-x-2"
              >
                <span>Verify Agent on Official MARA Register</span>
                <span>↗</span>
              </a>
            </div>
          </div>
        </section>
      </div>

      {/* Footer */}
      <Footer />

      {/* Dynamic Consultation Modal */}
      <ConsultationModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        selectedAgent={selectedAgentName}
        calendarUrl={selectedAgentCalendar}
      />
    </div>
  );
}
