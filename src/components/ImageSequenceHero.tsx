'use client';

import React, { useEffect, useState } from 'react';
import { ImageSequenceCanvas } from '@/components/ImageSequenceCanvas';

interface HeroProps {
  onOpenConsultation: () => void;
  onSelectCountry: (country: string) => void;
}

export const ImageSequenceHero: React.FC<HeroProps> = ({
  onOpenConsultation,
  onSelectCountry,
}) => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const heroSection = document.getElementById('hero-3d-section');
      if (!heroSection) return;

      const rect = heroSection.getBoundingClientRect();
      const totalScrollable = rect.height - window.innerHeight;
      if (totalScrollable <= 0) return;

      // Progress ratio from 0.0 to 1.0
      const currentProgress = Math.min(1, Math.max(0, -rect.top / totalScrollable));
      setScrollProgress(currentProgress);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Helper calculation for smooth opacity & transform ranges
  const getPhaseOpacity = (start: number, peakStart: number, peakEnd: number, end: number) => {
    if (scrollProgress < start || scrollProgress > end) return 0;
    if (scrollProgress >= peakStart && scrollProgress <= peakEnd) return 1;
    if (scrollProgress < peakStart) {
      return (scrollProgress - start) / (peakStart - start);
    }
    return 1 - (scrollProgress - peakEnd) / (end - peakEnd);
  };

  // Smooth, non-overlapping opacity curves
  const opacityPhase1 = getPhaseOpacity(0, 0, 0.18, 0.25);
  const opacityPhase2 = getPhaseOpacity(0.23, 0.30, 0.44, 0.50);
  const opacityPhase3 = getPhaseOpacity(0.48, 0.55, 0.69, 0.75);
  const opacityPhase4 = getPhaseOpacity(0.73, 0.80, 1.0, 1.0);

  return (
    <section
      id="hero-3d-section"
      className="relative h-[420vh] bg-[#061D38] text-white selection:bg-[#96F189] selection:text-[#061D38]"
    >
      {/* Sticky Fullscreen 3D Canvas Layer */}
      <div className="sticky top-0 h-screen w-full overflow-hidden bg-[#061D38]">
        {/* 812 Frames Canvas Renderer */}
        <ImageSequenceCanvas
          totalFrames={812}
          initialPreloadCount={120}
          className="w-full h-full object-cover"
        />

        {/* Ambient Dark Gradient Vignette for Text Contrast */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#061D38] via-[#061D38]/45 to-[#061D38]/70 pointer-events-none z-10" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#061D38]/80 via-transparent to-[#061D38]/80 pointer-events-none z-10" />

        {/* Scroll Progress Indicator Bar at Bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/10 z-30">
          <div
            className="h-full bg-gradient-to-r from-[#0163C8] via-[#96F189] to-[#0163C8] transition-all duration-75"
            style={{ width: `${Math.min(100, Math.max(0, scrollProgress * 100))}%` }}
          />
        </div>

        {/* Scroll Prompt Indicator */}
        <div
          className={`absolute bottom-6 left-1/2 -translate-x-1/2 z-30 flex flex-col items-center space-y-2 pointer-events-none transition-opacity duration-500 ${
            scrollProgress > 0.88 ? 'opacity-0' : 'opacity-100'
          }`}
        >
          <span className="text-[10px] font-bold uppercase tracking-widest text-[#96F189]">
            Scroll To Explore
          </span>
          <div className="w-5 h-9 rounded-full border-2 border-white/40 flex justify-center p-1">
            <div className="w-1.5 h-2.5 rounded-full bg-[#96F189] animate-bounce" />
          </div>
        </div>

        {/* Dynamic Text Cards Layer (Statically Positioned Fixed Overlays for 0 Glitch) */}
        <div className="absolute inset-0 z-20 flex items-center justify-center p-6 sm:p-10 pointer-events-none">
          <div className="max-w-4xl mx-auto text-center w-full h-full relative flex items-center justify-center">

            {/* ========================================================================= */}
            {/* MILESTONE 1 (0% - 22% Scroll Progress) */}
            {/* ========================================================================= */}
            <div
              className="absolute inset-0 flex flex-col items-center justify-center pt-24 sm:pt-6 p-4 sm:p-6 text-center space-y-3.5 sm:space-y-6 transition-all duration-700 ease-out will-change-[transform,opacity]"
              style={{
                opacity: opacityPhase1,
                transform: `translateY(${(1 - opacityPhase1) * 16}px) scale(${0.96 + opacityPhase1 * 0.04})`,
                pointerEvents: opacityPhase1 > 0.5 ? 'auto' : 'none',
              }}
            >

              {/* Primary Times New Roman Heading */}
              <h1 className="font-heading font-extrabold text-3xl sm:text-5xl lg:text-6xl text-white leading-tight tracking-tight drop-shadow-lg">
                Your Gateway to Global Education &{' '}
                <span className="text-[#96F189] underline decoration-[#0163C8] decoration-4 underline-offset-8">
                  Migration Pathways
                </span>
              </h1>

              {/* Body Subtitle */}
              <p className="font-body text-zinc-200 text-xs sm:text-lg leading-relaxed max-w-2xl mx-auto font-normal drop-shadow">
                Navigate university admissions, visa applications, and skilled migration pathways with end-to-end expert guidance.
              </p>

              {/* Popular Study Destination Chips */}
              <div className="space-y-1.5 sm:space-y-2 pt-1 sm:pt-2">
                <span className="block text-[10px] sm:text-[11px] font-bold uppercase tracking-widest text-[#96F189]/90">
                  Popular Study Destinations:
                </span>
                <div className="flex flex-wrap justify-center gap-1.5 sm:gap-2">
                  {[
                    { name: 'Australia 🇦🇺', code: 'australia' },
                    { name: 'Canada 🇨🇦', code: 'canada' },
                    { name: 'UK 🇬🇧', code: 'uk' },
                    { name: 'USA 🇺🇸', code: 'usa' },
                    { name: 'Germany 🇩🇪', code: 'germany' },
                    { name: 'New Zealand 🇳🇿', code: 'nz' },
                  ].map((c) => (
                    <button
                      key={c.code}
                      onClick={() => onSelectCountry(c.code)}
                      className="px-2.5 sm:px-3.5 py-1 sm:py-1.5 rounded-xl bg-white/10 hover:bg-[#0163C8] border border-white/20 hover:border-[#96F189] text-white text-[11px] sm:text-xs font-semibold backdrop-blur-md transition-all cursor-pointer hover:scale-105"
                    >
                      {c.name}
                    </button>
                  ))}
                </div>
              </div>

              {/* CTA Action Buttons */}
              <div className="pt-2 sm:pt-4 flex flex-col sm:flex-row items-center justify-center gap-2.5 sm:gap-4 w-full sm:w-auto">
                <button
                  onClick={onOpenConsultation}
                  className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 rounded-full bg-[#0163C8] text-white font-bold text-xs uppercase tracking-wider hover:bg-white hover:text-[#061D38] shadow-xl shadow-[#0163C8]/40 transition-all duration-300 transform hover:-translate-y-0.5 cursor-pointer"
                >
                  Book Visa Assessment
                </button>
                <a
                  href="#assessment"
                  className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 rounded-full bg-[#96F189] text-[#061D38] font-bold text-xs uppercase tracking-wider hover:bg-white border border-[#96F189] shadow-lg transition-all duration-300 cursor-pointer"
                >
                  Check Visa Eligibility →
                </a>
              </div>
            </div>

            {/* ========================================================================= */}
            {/* MILESTONE 2 (25% - 48% Scroll Progress) - A WINDOW TO UNBOUNDED OPPORTUNITIES */}
            {/* ========================================================================= */}
            <div
              className="absolute inset-0 flex flex-col items-center justify-center pt-24 sm:pt-6 p-4 sm:p-6 text-center space-y-3.5 sm:space-y-6 transition-all duration-700 ease-out will-change-[transform,opacity]"
              style={{
                opacity: opacityPhase2,
                transform: `translateY(${(1 - opacityPhase2) * 16}px) scale(${0.96 + opacityPhase2 * 0.04})`,
                pointerEvents: opacityPhase2 > 0.5 ? 'auto' : 'none',
              }}
            >
              <div className="inline-flex items-center space-x-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-[#0163C8]/40 border border-[#0163C8] text-[#96F189] text-[10px] sm:text-xs font-bold uppercase tracking-wider backdrop-blur-md">
                <span>🪟 YOUR GLOBAL HORIZON</span>
              </div>

              <h2 className="font-heading font-extrabold text-3xl sm:text-5xl lg:text-6xl text-white leading-tight drop-shadow-lg">
                A Window to Unbounded Opportunities
              </h2>

              <p className="text-zinc-200 text-xs sm:text-lg max-w-xl mx-auto leading-relaxed drop-shadow">
                Opening doors to world-class university placements, global career growth, and international residency pathways.
              </p>

              {/* 4 Feature Highlights */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3 pt-1 sm:pt-2 max-w-3xl mx-auto">
                <div className="p-2.5 sm:p-4 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 text-center">
                  <div className="text-lg sm:text-xl mb-0.5 sm:mb-1">🇦🇺</div>
                  <div className="font-bold text-[11px] sm:text-xs text-white">Australia</div>
                  <div className="text-[9px] sm:text-[10px] text-zinc-300 mt-0.5">Subclass 500 & PR</div>
                </div>
                <div className="p-2.5 sm:p-4 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 text-center">
                  <div className="text-lg sm:text-xl mb-0.5 sm:mb-1">🇨🇦</div>
                  <div className="font-bold text-[11px] sm:text-xs text-white">Canada</div>
                  <div className="text-[9px] sm:text-[10px] text-zinc-300 mt-0.5">PGWP & Express Entry</div>
                </div>
                <div className="p-2.5 sm:p-4 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 text-center">
                  <div className="text-lg sm:text-xl mb-0.5 sm:mb-1">🇬🇧</div>
                  <div className="font-bold text-[11px] sm:text-xs text-white">United Kingdom</div>
                  <div className="text-[9px] sm:text-[10px] text-zinc-300 mt-0.5">CAS & Scholarships</div>
                </div>
                <div className="p-2.5 sm:p-4 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 text-center">
                  <div className="text-lg sm:text-xl mb-0.5 sm:mb-1">🇩🇪</div>
                  <div className="font-bold text-[11px] sm:text-xs text-white">Germany</div>
                  <div className="text-[9px] sm:text-[10px] text-zinc-300 mt-0.5">Tuition-Free Master</div>
                </div>
              </div>
            </div>

            {/* ========================================================================= */}
            {/* MILESTONE 3 (50% - 73% Scroll Progress) - MARA COMPLIANT (NO PERCENTAGES) */}
            {/* ========================================================================= */}
            <div
              className="absolute inset-0 flex flex-col items-center justify-center pt-24 sm:pt-6 p-4 sm:p-6 text-center space-y-3.5 sm:space-y-6 transition-all duration-700 ease-out will-change-[transform,opacity]"
              style={{
                opacity: opacityPhase3,
                transform: `translateY(${(1 - opacityPhase3) * 16}px) scale(${0.96 + opacityPhase3 * 0.04})`,
                pointerEvents: opacityPhase3 > 0.5 ? 'auto' : 'none',
              }}
            >
              <div className="inline-flex items-center space-x-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-[#0163C8]/40 border border-[#0163C8] text-[#96F189] text-[10px] sm:text-xs font-bold uppercase tracking-wider backdrop-blur-md">
                <span>🛡️ TRUSTED MIGRATION ADVISORS</span>
              </div>

              <h2 className="font-heading font-extrabold text-3xl sm:text-5xl text-white leading-tight">
                End-to-End Migration & Overseas Admissions Support
              </h2>

              <p className="text-zinc-200 text-xs sm:text-base max-w-xl mx-auto leading-relaxed">
                Guided directly by MARA registered agents & QEAC certified counselors specializing in skills assessments, state nominations, and student visas.
              </p>

              {/* 3 Feature Highlights (Horizontal 3-Col Layout on Mobile to Prevent Scroll Prompt Collision) */}
              <div className="grid grid-cols-3 sm:grid-cols-3 gap-2 sm:gap-3 pt-1 sm:pt-2 max-w-2xl mx-auto w-full">
                <div className="p-2.5 sm:p-4 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 text-center">
                  <div className="text-amber-400 text-xs sm:text-sm mb-0.5 sm:mb-1 font-bold">★★★★★</div>
                  <div className="font-bold text-[10px] sm:text-xs text-white leading-tight">150+ 5-Star Reviews</div>
                  <div className="text-[9px] sm:text-[10px] text-zinc-300 mt-0.5 hidden sm:block">Verified Client Feedback</div>
                </div>
                <div className="p-2.5 sm:p-4 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 text-center">
                  <div className="text-lg sm:text-xl mb-0.5 sm:mb-1">👨‍⚖️</div>
                  <div className="font-bold text-[10px] sm:text-xs text-white leading-tight">MARA & QEAC</div>
                  <div className="text-[9px] sm:text-[10px] text-zinc-300 mt-0.5">Certified Advisors</div>
                </div>
                <div className="p-2.5 sm:p-4 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 text-center">
                  <div className="text-lg sm:text-xl mb-0.5 sm:mb-1">📋</div>
                  <div className="font-bold text-[10px] sm:text-xs text-white leading-tight">Personalized</div>
                  <div className="text-[9px] sm:text-[10px] text-zinc-300 mt-0.5">Migration Strategy</div>
                </div>
              </div>
            </div>

            {/* ========================================================================= */}
            {/* MILESTONE 4 (75% - 100% Scroll Progress) */}
            {/* ========================================================================= */}
            <div
              className="absolute inset-0 flex flex-col items-center justify-center pt-24 sm:pt-6 p-4 sm:p-6 text-center space-y-3.5 sm:space-y-6 transition-all duration-700 ease-out will-change-[transform,opacity]"
              style={{
                opacity: opacityPhase4,
                transform: `translateY(${(1 - opacityPhase4) * 16}px) scale(${0.96 + opacityPhase4 * 0.04})`,
                pointerEvents: opacityPhase4 > 0.5 ? 'auto' : 'none',
              }}
            >
              <div className="inline-flex items-center space-x-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-[#0163C8]/40 border border-[#0163C8] text-[#96F189] text-[10px] sm:text-xs font-bold uppercase tracking-wider backdrop-blur-md">
                <span>⚡ START YOUR JOURNEY TODAY</span>
              </div>

              <h2 className="font-heading font-extrabold text-3xl sm:text-5xl text-white leading-tight">
                Ready to Fast-Track Your Overseas Visa & PR?
              </h2>

              <p className="text-zinc-200 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
                Connect directly with certified migration agents and global admissions counselors for a confidential 1-on-1 consultation.
              </p>

              <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
                <button
                  onClick={onOpenConsultation}
                  className="w-full sm:w-auto px-8 py-4 rounded-full bg-[#96F189] text-[#061D38] font-bold text-xs uppercase tracking-wider hover:bg-white transition-all shadow-xl shadow-[#96F189]/30 cursor-pointer"
                >
                  Book 1-on-1 Consultation Now →
                </button>
                <a
                  href="https://wa.me/61348328472"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-8 py-4 rounded-full bg-[#25D366] text-white font-bold text-xs uppercase tracking-wider hover:bg-[#1ebd59] transition-all flex items-center justify-center space-x-2 shadow-lg"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                  </svg>
                  <span>Chat on WhatsApp (+61 348328472)</span>
                </a>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};
