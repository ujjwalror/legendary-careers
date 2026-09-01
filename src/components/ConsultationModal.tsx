'use client';

import React, { useState } from 'react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedAgent?: string;
}

export const ConsultationModal: React.FC<ModalProps> = ({ isOpen, onClose, selectedAgent }) => {
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#061D38]/60 backdrop-blur-sm animate-fadeIn">
      <div className="relative w-full max-w-lg bg-white rounded-3xl border border-[#C2DAF3] p-8 shadow-2xl overflow-hidden max-h-[90vh] overflow-y-auto">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 w-8 h-8 rounded-full bg-[#F4F8FC] text-[#061D38] flex items-center justify-center font-bold hover:bg-[#C2DAF3] cursor-pointer z-10"
        >
          ✕
        </button>

        {!submitted ? (
          <div>
            <div className="space-y-2 mb-6">
              <div className="flex flex-wrap gap-2 items-center">
                <span className="px-3 py-1 rounded-full bg-[#96F189] text-[#061D38] font-body text-[10px] font-bold uppercase tracking-wider">
                  100% Free Counseling
                </span>
                {selectedAgent && (
                  <span className="px-3 py-1 rounded-full bg-[#0163C8] text-white font-body text-[10px] font-bold uppercase tracking-wider">
                    👤 With {selectedAgent}
                  </span>
                )}
              </div>
              <h3 className="font-heading font-bold text-2xl sm:text-3xl text-[#061D38]">
                {selectedAgent ? `Book Call with ${selectedAgent.split(' ')[0]}` : 'Book Free Consultation'}
              </h3>
              <p className="font-body text-xs text-[#061D38]/70">
                {selectedAgent 
                  ? `Your appointment will be directly routed to ${selectedAgent}.` 
                  : 'Speak directly with a licensed MARA migration counselor or university advisor.'}
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4 font-body text-xs">
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
                    placeholder="+91 98765 43210"
                    className="w-full p-3 rounded-xl border border-[#C2DAF3] bg-[#F4F8FC] text-[#061D38] focus:outline-none focus:border-[#0163C8]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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
                    <option value="Skilled Migration PR">Skilled PR Migration</option>
                    <option value="Post-Study Work Permit">Post-Study Work Permit</option>
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
                  rows={3}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Mention your highest degree, GPA, or any specific university preference..."
                  className="w-full p-3 rounded-xl border border-[#C2DAF3] bg-[#F4F8FC] text-[#061D38] focus:outline-none focus:border-[#0163C8]"
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 rounded-xl bg-[#0163C8] text-white font-body font-bold text-xs uppercase tracking-widest hover:bg-[#061D38] shadow-xl shadow-[#0163C8]/20 transition-all duration-300 mt-2"
              >
                Confirm Free Booking Request →
              </button>
            </form>
          </div>
        ) : (
          /* Confirmation Message */
          <div className="text-center py-8 space-y-4">
            <div className="w-16 h-16 rounded-full bg-[#96F189] text-[#061D38] font-bold text-3xl flex items-center justify-center mx-auto shadow-lg shadow-[#96F189]/30">
              ✓
            </div>
            <h3 className="font-heading font-bold text-3xl text-[#061D38]">
              Consultation Requested!
            </h3>
            <p className="font-body text-xs text-[#061D38]/80 max-w-sm mx-auto leading-relaxed">
              Thank you, <span className="font-bold text-[#0163C8]">{formData.name}</span>. A senior migration advisor for <span className="font-bold">{formData.country}</span> will reach out to you at <span className="font-bold">{formData.email}</span> within 2 business hours.
            </p>
            <button
              onClick={handleReset}
              className="mt-4 px-8 py-3 rounded-xl bg-[#0163C8] text-white font-body font-bold text-xs uppercase tracking-wider"
            >
              Done
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
