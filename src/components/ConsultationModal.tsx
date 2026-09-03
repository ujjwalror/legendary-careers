'use client';

import React, { useState } from 'react';
import { ZOHO_BOOKINGS_CONFIG } from '@/config/zoho-bookings';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedAgent?: string;
  calendarUrl?: string;
}

export const ConsultationModal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  selectedAgent,
  calendarUrl,
}) => {
  const [activeTab, setActiveTab] = useState<'zoho' | 'form'>('zoho');
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    country: 'Australia',
    service: 'Student Visa',
    message: '',
  });

  if (!isOpen) return null;

  // Determine active Zoho URL (Agent specific or main company portal)
  const activeZohoUrl = calendarUrl || ZOHO_BOOKINGS_CONFIG.mainPortalUrl;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-[#061D38]/70 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-2xl bg-white rounded-3xl border border-[#C2DAF3] p-5 sm:p-8 shadow-2xl overflow-hidden max-h-[92vh] flex flex-col justify-between">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 w-9 h-9 rounded-full bg-[#F4F8FC] text-[#061D38] flex items-center justify-center font-bold hover:bg-[#C2DAF3] cursor-pointer z-20 shadow-sm"
        >
          ✕
        </button>

        {!submitted ? (
          <div className="space-y-4 flex-1 flex flex-col overflow-hidden">
            {/* Header Title & Badges */}
            <div className="space-y-2 shrink-0">
              <div className="flex flex-wrap gap-2 items-center">
                {selectedAgent ? (
                  <span className="px-3 py-1 rounded-full bg-[#0163C8] text-white font-body text-[10px] font-bold uppercase tracking-wider">
                    👤 With {selectedAgent}
                  </span>
                ) : (
                  <span className="px-3 py-1 rounded-full bg-[#96F189] text-[#061D38] font-body text-[10px] font-bold uppercase tracking-wider">
                    📅 Official Booking Portal
                  </span>
                )}
              </div>
              <h3 className="font-heading font-bold text-2xl sm:text-3xl text-[#061D38]">
                {selectedAgent ? `Book Appointment with ${selectedAgent.split(' ')[0]}` : 'Book Consultation'}
              </h3>
              <p className="font-body text-xs text-[#061D38]/70">
                {selectedAgent 
                  ? `Select a date & time slot directly on ${selectedAgent}'s live calendar below.` 
                  : 'Select an available date & time slot on our live booking portal below.'}
              </p>

              {/* View Selector Tabs */}
              <div className="flex space-x-2 pt-2">
                <button
                  onClick={() => setActiveTab('zoho')}
                  className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                    activeTab === 'zoho'
                      ? 'bg-[#0163C8] text-white shadow-md'
                      : 'bg-[#F4F8FC] text-[#061D38] hover:bg-[#C2DAF3]/50'
                  }`}
                >
                  📅 Live Zoho Calendar Widget
                </button>
                <button
                  onClick={() => setActiveTab('form')}
                  className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                    activeTab === 'form'
                      ? 'bg-[#0163C8] text-white shadow-md'
                      : 'bg-[#F4F8FC] text-[#061D38] hover:bg-[#C2DAF3]/50'
                  }`}
                >
                  📝 Quick Contact Form
                </button>
              </div>
            </div>

            {/* Tab 1: Live Interactive Zoho Calendar Iframe */}
            {activeTab === 'zoho' ? (
              <div className="flex-1 min-h-[420px] rounded-2xl overflow-hidden border border-[#C2DAF3] bg-[#F4F8FC] relative shadow-inner">
                <iframe
                  src={activeZohoUrl}
                  title="Zoho Bookings Appointment Calendar"
                  className="w-full h-full min-h-[420px] border-0"
                  allow="microphone; camera; display-capture"
                />
              </div>
            ) : (
              /* Tab 2: Quick Form View */
              <form onSubmit={handleSubmit} className="space-y-3.5 font-body text-xs overflow-y-auto pr-1">
                <div>
                  <label className="block text-[#061D38] font-bold mb-1 uppercase tracking-wider text-[11px]">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Rahul Sharma"
                    className="w-full p-3 rounded-xl border border-[#C2DAF3] bg-[#F4F8FC] text-[#061D38] focus:outline-none focus:border-[#0163C8]"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[#061D38] font-bold mb-1 uppercase tracking-wider text-[11px]">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="rahul@example.com"
                      className="w-full p-3 rounded-xl border border-[#C2DAF3] bg-[#F4F8FC] text-[#061D38] focus:outline-none focus:border-[#0163C8]"
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
                      placeholder="+61 412 345 678"
                      className="w-full p-3 rounded-xl border border-[#C2DAF3] bg-[#F4F8FC] text-[#061D38] focus:outline-none focus:border-[#0163C8]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[#061D38] font-bold mb-1 uppercase tracking-wider text-[11px]">
                      Target Country
                    </label>
                    <select
                      value={formData.country}
                      onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                      className="w-full p-3 rounded-xl border border-[#C2DAF3] bg-[#F4F8FC] text-[#061D38] focus:outline-none focus:border-[#0163C8]"
                    >
                      <option value="Australia">Australia 🇦🇺</option>
                      <option value="Canada">Canada 🇨🇦</option>
                      <option value="United Kingdom">United Kingdom 🇬🇧</option>
                      <option value="United States">United States 🇺🇸</option>
                      <option value="Germany">Germany 🇩🇪</option>
                      <option value="New Zealand">New Zealand 🇳🇿</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-[#061D38] font-bold mb-1 uppercase tracking-wider text-[11px]">
                      Service Needed
                    </label>
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full p-3 rounded-xl border border-[#C2DAF3] bg-[#F4F8FC] text-[#061D38] focus:outline-none focus:border-[#0163C8]"
                    >
                      <option value="Student Visa">Student Visa & Admission</option>
                      <option value="Skilled Migration PR">Skilled PR Migration (189/190/491)</option>
                      <option value="Post-Study Work Permit">Post-Study Work (Subclass 485)</option>
                      <option value="Skill Assessment">Skills Assessment</option>
                      <option value="Partner & Family Visa">Partner & Family Visa</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-[#061D38] font-bold mb-1 uppercase tracking-wider text-[11px]">
                    Additional Details / Questions
                  </label>
                  <textarea
                    rows={2}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Mention your highest degree, current visa status, or preferred appointment topic..."
                    className="w-full p-3 rounded-xl border border-[#C2DAF3] bg-[#F4F8FC] text-[#061D38] focus:outline-none focus:border-[#0163C8]"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 rounded-xl bg-[#0163C8] text-white font-body font-bold text-xs uppercase tracking-widest hover:bg-[#061D38] shadow-xl shadow-[#0163C8]/20 transition-all duration-300"
                >
                  Submit Message Request →
                </button>
              </form>
            )}
          </div>
        ) : (
          /* Confirmation View */
          <div className="py-12 text-center space-y-4">
            <div className="w-16 h-16 rounded-full bg-[#96F189]/30 text-[#0163C8] flex items-center justify-center text-3xl mx-auto font-bold">
              ✓
            </div>
            <h3 className="font-heading font-bold text-2xl text-[#061D38]">
              Request Received!
            </h3>
            <p className="font-body text-xs text-zinc-600 max-w-sm mx-auto leading-relaxed">
              Thank you, <strong>{formData.name}</strong>. Our migration team will contact you shortly to finalize your appointment details.
            </p>
            <button
              onClick={() => setSubmitted(false)}
              className="px-6 py-2.5 rounded-full bg-[#0163C8] text-white font-body text-xs uppercase tracking-wider font-semibold"
            >
              Back to Booking
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
