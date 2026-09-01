'use client';

import React, { useState } from 'react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { ConsultationModal } from '@/components/ConsultationModal';

export default function ContactPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'General Inquiry',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  // Google Maps embed link for Level 32/367 Collins St, Melbourne VIC 3000, Australia
  const googleMapsEmbedUrl =
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.83543450937!2d144.96090437678526!3d-37.81720973418579!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642b36e1c6bbd%3A0xb366b5b546b3f9b2!2s367%20Collins%20St%2C%20Melbourne%20VIC%203000%2C%20Australia!5e0!3m2!1sen!2sau!4v1700000000000!5m2!1sen!2sau';

  const businessHours = [
    { day: 'Monday', hours: '10:00 am – 6:00 pm', status: 'open' },
    { day: 'Tuesday', hours: '10:00 am – 6:00 pm', status: 'open' },
    { day: 'Wednesday', hours: '10:00 am – 6:00 pm', status: 'open' },
    { day: 'Thursday', hours: '10:00 am – 6:00 pm', status: 'open' },
    { day: 'Friday', hours: '10:00 am – 6:00 pm', status: 'open' },
    { day: 'Saturday', hours: 'Closed', status: 'closed' },
    { day: 'Sunday', hours: 'Closed', status: 'closed' },
  ];

  return (
    <div className="min-h-screen bg-[#F4F8FC] text-[#061D38] font-body selection:bg-[#96F189] selection:text-[#061D38] flex flex-col justify-between">
      <div>
        {/* Navigation Header */}
        <Navbar onOpenConsultation={() => setIsModalOpen(true)} />

        {/* Hero Section */}
        <section className="relative bg-[#061D38] text-white py-16 sm:py-20 px-6 overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#0163C8]/30 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#96F189]/10 rounded-full blur-3xl pointer-events-none" />

          <div className="max-w-7xl mx-auto relative z-10 text-center space-y-6">
            <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-[#0163C8]/30 border border-[#0163C8] text-[#96F189] text-xs font-semibold tracking-wide uppercase">
              <span>📍 Global Headquarters & Consultation Hub</span>
            </div>

            <h1 className="font-heading text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight max-w-4xl mx-auto leading-tight">
              Get in Touch with Our Migration Experts
            </h1>

            <p className="text-zinc-300 text-sm sm:text-base lg:text-lg max-w-2xl mx-auto font-normal leading-relaxed">
              Visit our Melbourne office or connect with our licensed migration agents and university advisors. We are here to guide your global journey.
            </p>
          </div>
        </section>

        {/* Main Content Layout */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 py-12 space-y-12">
          {/* Quick Contact Info Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Card 1: Address */}
            <div className="bg-white rounded-3xl p-6 border border-[#C2DAF3] shadow-md space-y-3 hover:border-[#0163C8] transition-all">
              <div className="w-12 h-12 rounded-2xl bg-[#0163C8]/10 text-[#0163C8] flex items-center justify-center text-2xl">
                🏢
              </div>
              <h3 className="font-heading font-bold text-lg text-[#061D38]">Head Office Address</h3>
              <p className="text-xs text-zinc-600 leading-relaxed">
                Level 32 / 367 Collins St,<br />
                Melbourne VIC 3000, Australia
              </p>
              <a
                href="https://maps.google.com/?q=367+Collins+St+Melbourne+VIC+3000"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-bold text-[#0163C8] hover:underline inline-flex items-center gap-1 pt-1"
              >
                <span>Open in Google Maps</span>
                <span>↗</span>
              </a>
            </div>

            {/* Card 2: Direct Phone */}
            <div className="bg-white rounded-3xl p-6 border border-[#C2DAF3] shadow-md space-y-3 hover:border-[#0163C8] transition-all">
              <div className="w-12 h-12 rounded-2xl bg-[#96F189]/20 text-[#061D38] flex items-center justify-center text-2xl">
                📞
              </div>
              <h3 className="font-heading font-bold text-lg text-[#061D38]">Phone Contact</h3>
              <div className="space-y-1 text-xs text-zinc-600">
                <p>
                  <span className="font-semibold text-[#061D38]">Office Line:</span>{' '}
                  <a href="tel:+61386127273" className="text-[#0163C8] font-bold hover:underline">
                    +61 3 8612 7273
                  </a>
                </p>
                <p>
                  <span className="font-semibold text-[#061D38]">Direct Mobile:</span>{' '}
                  <a href="tel:+61412367020" className="text-[#0163C8] font-bold hover:underline">
                    +61 412 367 020
                  </a>
                </p>
              </div>
              <p className="text-[11px] text-zinc-400">Lines open Monday – Friday, 10am – 6pm AEST</p>
            </div>

            {/* Card 3: Email & Online */}
            <div className="bg-white rounded-3xl p-6 border border-[#C2DAF3] shadow-md space-y-3 hover:border-[#0163C8] transition-all">
              <div className="w-12 h-12 rounded-2xl bg-[#0163C8]/10 text-[#0163C8] flex items-center justify-center text-2xl">
                ✉️
              </div>
              <h3 className="font-heading font-bold text-lg text-[#061D38]">Email & Inquiries</h3>
              <div className="space-y-1 text-xs">
                <p className="text-zinc-600">
                  General:{' '}
                  <a href="mailto:connect@legendarycareers.com.au" className="text-[#0163C8] font-bold hover:underline">
                    connect@legendarycareers.com.au
                  </a>
                </p>
                <p className="text-zinc-600">
                  Admissions:{' '}
                  <a href="mailto:info@legendarycareers.com" className="text-[#0163C8] font-bold hover:underline">
                    info@legendarycareers.com
                  </a>
                </p>
              </div>
              <div className="pt-1">
                <span className="px-2.5 py-0.5 rounded bg-[#96F189]/30 text-[#061D38] text-[10px] font-bold uppercase">
                  Response within 2 hours
                </span>
              </div>
            </div>
          </div>

          {/* Form & Business Hours Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left Column: Form Space (7 cols) */}
            <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-10 border border-[#C2DAF3] shadow-xl space-y-6">
              <div>
                <span className="px-3 py-1 rounded-full bg-[#C2DAF3]/40 text-[#0163C8] text-[11px] font-bold uppercase tracking-wider">
                  Send Us A Message
                </span>
                <h2 className="font-heading font-bold text-2xl sm:text-3xl text-[#061D38] mt-2">
                  How Can We Help You Today?
                </h2>
                <p className="text-xs text-zinc-500 mt-1">
                  Fill out the form below and our registered migration counselors will get back to you promptly.
                </p>
              </div>

              {!formSubmitted ? (
                <form onSubmit={handleSubmit} className="space-y-4 text-xs font-body">
                  <div>
                    <label className="block text-[#061D38] font-bold mb-1 uppercase tracking-wider text-[11px]">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. John Smith"
                      className="w-full p-3.5 rounded-xl border border-[#C2DAF3] bg-[#F4F8FC] text-[#061D38] focus:outline-none focus:border-[#0163C8]"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[#061D38] font-bold mb-1 uppercase tracking-wider text-[11px]">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="john@example.com"
                        className="w-full p-3.5 rounded-xl border border-[#C2DAF3] bg-[#F4F8FC] text-[#061D38] focus:outline-none focus:border-[#0163C8]"
                      />
                    </div>

                    <div>
                      <label className="block text-[#061D38] font-bold mb-1 uppercase tracking-wider text-[11px]">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+61 400 000 000"
                        className="w-full p-3.5 rounded-xl border border-[#C2DAF3] bg-[#F4F8FC] text-[#061D38] focus:outline-none focus:border-[#0163C8]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[#061D38] font-bold mb-1 uppercase tracking-wider text-[11px]">
                      Inquiry Topic
                    </label>
                    <select
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full p-3.5 rounded-xl border border-[#C2DAF3] bg-[#F4F8FC] text-[#061D38] focus:outline-none focus:border-[#0163C8]"
                    >
                      <option value="General Inquiry">General Inquiry</option>
                      <option value="Student Visa & Admission">Student Visa & Admission</option>
                      <option value="Skilled PR Migration">General Skilled Migration (189/190/491)</option>
                      <option value="Skills Assessment">ACS / VETASSESS Skills Assessment</option>
                      <option value="Visa Refusal Appeal">AAT Visa Refusal Appeal</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-[#061D38] font-bold mb-1 uppercase tracking-wider text-[11px]">
                      Message / Case Details
                    </label>
                    <textarea
                      rows={4}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Please briefly describe your query, current visa status, or target course..."
                      className="w-full p-3.5 rounded-xl border border-[#C2DAF3] bg-[#F4F8FC] text-[#061D38] focus:outline-none focus:border-[#0163C8]"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 rounded-xl bg-[#0163C8] text-white font-bold text-xs uppercase tracking-wider hover:bg-[#061D38] shadow-lg shadow-[#0163C8]/20 transition-all cursor-pointer"
                  >
                    Submit Message →
                  </button>
                </form>
              ) : (
                /* Confirmation Message */
                <div className="text-center py-10 space-y-4">
                  <div className="w-16 h-16 rounded-full bg-[#96F189] text-[#061D38] font-bold text-3xl flex items-center justify-center mx-auto shadow-lg shadow-[#96F189]/30">
                    ✓
                  </div>
                  <h3 className="font-heading font-bold text-2xl text-[#061D38]">Message Received!</h3>
                  <p className="text-xs text-zinc-600 max-w-sm mx-auto leading-relaxed">
                    Thank you, <span className="font-bold text-[#0163C8]">{formData.name}</span>. Our team at Collins St Melbourne will review your query and contact you within 2 business hours.
                  </p>
                  <button
                    onClick={() => setFormSubmitted(false)}
                    className="px-6 py-2.5 rounded-xl bg-[#0163C8] text-white text-xs font-bold uppercase cursor-pointer"
                  >
                    Send Another Message
                  </button>
                </div>
              )}
            </div>

            {/* Right Column: Business Hours Card (5 cols) */}
            <div className="lg:col-span-5 space-y-6">
              {/* Business Hours Card */}
              <div className="bg-[#061D38] text-white rounded-3xl p-6 sm:p-8 border border-[#0163C8] shadow-xl space-y-6">
                <div className="flex justify-between items-center border-b border-[#0163C8]/50 pb-4">
                  <div>
                    <span className="text-[10px] font-bold text-[#96F189] uppercase tracking-wider bg-[#0163C8]/40 px-3 py-1 rounded-full border border-[#0163C8]">
                      Office Hours
                    </span>
                    <h3 className="font-heading font-bold text-xl text-white mt-2">Business Hours</h3>
                  </div>
                  <span className="text-2xl">⏰</span>
                </div>

                <div className="space-y-3 text-xs">
                  {businessHours.map((item, idx) => (
                    <div
                      key={idx}
                      className="flex justify-between items-center py-2 border-b border-white/10 last:border-none"
                    >
                      <span className="font-semibold text-zinc-200">{item.day}</span>
                      <span
                        className={`font-bold ${
                          item.status === 'open' ? 'text-[#96F189]' : 'text-zinc-400'
                        }`}
                      >
                        {item.hours}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="pt-2 text-[11px] text-zinc-300 leading-relaxed border-t border-[#0163C8]/40">
                  💡 Appointments outside normal business hours available upon request for urgent visa deadlines.
                </div>
              </div>

              {/* Directly Book Consultation Button Card */}
              <div className="bg-white rounded-3xl p-6 border border-[#C2DAF3] shadow-md text-center space-y-3">
                <h4 className="font-heading font-bold text-lg text-[#061D38]">Need Urgent Migration Strategy?</h4>
                <p className="text-xs text-zinc-500">Book a 1-on-1 session directly with a registered MARA agent.</p>
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="w-full py-3 rounded-xl bg-[#0163C8] text-white font-bold text-xs uppercase tracking-wider hover:bg-[#061D38] transition-all cursor-pointer"
                >
                  Book 1-on-1 Strategy Session
                </button>
              </div>
            </div>
          </div>

          {/* Embedded Google Map Section */}
          <div className="bg-white rounded-3xl p-4 sm:p-6 border border-[#C2DAF3] shadow-xl space-y-4">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 px-2">
              <div>
                <h3 className="font-heading font-bold text-xl text-[#061D38]">
                  Our Melbourne Headquarters Location
                </h3>
                <p className="text-xs text-zinc-500">Level 32/367 Collins St, Melbourne VIC 3000, Australia</p>
              </div>
              <a
                href="https://maps.google.com/?q=367+Collins+St+Melbourne+VIC+3000"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-xl bg-[#0163C8] text-white text-xs font-semibold hover:bg-[#061D38] transition-colors"
              >
                Get Directions 🗺️
              </a>
            </div>

            <div className="w-full h-96 rounded-2xl overflow-hidden border border-[#C2DAF3]">
              <iframe
                src={googleMapsEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Legendary Careers Office Location Map"
              />
            </div>
          </div>
        </section>
      </div>

      {/* Footer */}
      <Footer />

      {/* Consultation Modal */}
      <ConsultationModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
}
