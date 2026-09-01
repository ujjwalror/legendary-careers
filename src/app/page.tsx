'use client';

import React, { useState } from 'react';
import { Navbar } from '@/components/Navbar';
import { ImageSequenceHero } from '@/components/ImageSequenceHero';
import { CountryDestinations } from '@/components/CountryDestinations';
import { MigrationServices } from '@/components/MigrationServices';
import { EligibilityCalculator } from '@/components/EligibilityCalculator';
import { ProcessTimeline } from '@/components/ProcessTimeline';
import { TestimonialsSection } from '@/components/TestimonialsSection';
import { ConsultationModal } from '@/components/ConsultationModal';
import { Footer } from '@/components/Footer';

export default function Home() {
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState('australia');

  const handleOpenConsultation = () => setIsConsultationOpen(true);
  const handleCloseConsultation = () => setIsConsultationOpen(false);

  const handleSelectCountry = (countryCode: string) => {
    setSelectedCountry(countryCode);
    const destElement = document.getElementById('destinations');
    if (destElement) {
      destElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#F4F8FC] text-[#061D38] font-body selection:bg-[#96F189] selection:text-[#061D38]">
      {/* Navigation Header with Top-Left Logo & Contact Hotline */}
      <Navbar onOpenConsultation={handleOpenConsultation} />

      {/* Main Content Sections */}
      <main>
        {/* 3D Scroll-Bound Video Frame Sequence Hero */}
        <ImageSequenceHero
          onOpenConsultation={handleOpenConsultation}
          onSelectCountry={handleSelectCountry}
        />

        {/* Country Destinations Section (Australia, Canada, UK, USA, Germany, NZ) */}
        <CountryDestinations
          onOpenConsultation={handleOpenConsultation}
          selectedCountryCode={selectedCountry}
        />

        {/* Migration Services Section (Student Visa, Skilled Migration PR, Skill Assessment) */}
        <MigrationServices onOpenConsultation={handleOpenConsultation} />

        {/* Interactive Visa Eligibility Calculator */}
        <EligibilityCalculator onOpenConsultation={handleOpenConsultation} />

        {/* 5-Step Process Timeline */}
        <ProcessTimeline />

        {/* Student Success Stories & Testimonials */}
        <TestimonialsSection />
      </main>

      {/* Footer Section */}
      <Footer />

      {/* Free 1-on-1 Consultation Booking Modal */}
      <ConsultationModal
        isOpen={isConsultationOpen}
        onClose={handleCloseConsultation}
      />
    </div>
  );
}
