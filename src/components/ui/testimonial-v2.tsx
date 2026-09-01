'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Star, CheckCircle2 } from 'lucide-react';

export interface TestimonialItem {
  id?: string;
  text: string;
  image: string;
  name: string;
  role: string;
  countryFlag?: string;
  visaType?: string;
  rating?: number;
  isGoogleVerified?: boolean;
}

const defaultTestimonials: TestimonialItem[] = [
  {
    id: '1',
    name: 'Aarav Sharma',
    role: 'Master of Data Science Candidate',
    countryFlag: '🇦🇺',
    visaType: 'Subclass 500 Visa Granted',
    rating: 5,
    isGoogleVerified: true,
    text: 'Legendary Careers made my Australian study visa seamless! They helped me craft an outstanding SOP and guided my financial documentation step by step. Highly recommended for MARA expertise.',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200&h=200',
  },
  {
    id: '2',
    name: 'Priya Patel',
    role: 'Software Engineer (85 Pts)',
    countryFlag: '🇦🇺',
    visaType: 'Subclass 190 PR Approved',
    rating: 5,
    isGoogleVerified: true,
    text: 'I was worried about visa refusal due to a study gap, but Legendary Careers’ migration attorneys restructured my SOP and financial file. Got my PR nomination approved in record time!',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=200&h=200',
  },
  {
    id: '3',
    name: 'Rohan Deshmukh',
    role: 'BSc Computer Science Student',
    countryFlag: '🇬🇧',
    visaType: 'UK Student Visa (7-Day Grant)',
    rating: 5,
    isGoogleVerified: true,
    text: 'Outstanding service! They secured a £5,000 international scholarship for me and handled CAS issuing within 48 hours. Professional, transparent, and always available.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200&h=200',
  },
  {
    id: '4',
    name: 'Ananya Roy',
    role: 'Master of Public Health',
    countryFlag: '🇨🇦',
    visaType: 'Canada Study Permit & PGWP',
    rating: 5,
    isGoogleVerified: true,
    text: 'The team at Legendary Careers provided incredible end-to-end guidance. From course selection to visa filing, everything was handled with perfection!',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=200&h=200',
  },
  {
    id: '5',
    name: 'Vikramaditya Singh',
    role: 'Civil Engineer (CDR Approved)',
    countryFlag: '🇦🇺',
    visaType: 'Engineers Australia + 491 PR',
    rating: 5,
    isGoogleVerified: true,
    text: 'Engineers Australia CDR assessment was daunting, but Marcus and his team guided my career episodes flawlessly. Positive assessment outcome in just 3 weeks!',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200&h=200',
  },
  {
    id: '6',
    name: 'Simran Kaur',
    role: 'MSc International Business',
    countryFlag: '🇩🇪',
    visaType: 'Germany Student Visa & Blocked Account',
    rating: 5,
    isGoogleVerified: true,
    text: 'Got admission to a top public university in Germany with zero tuition fees! Legendary Careers assisted with VFS booking and APS certification seamlessly.',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200&h=200',
  },
  {
    id: '7',
    name: 'Devraj Menon',
    role: 'Senior System Architect',
    countryFlag: '🇦🇺',
    visaType: 'Subclass 189 Independent PR',
    rating: 5,
    isGoogleVerified: true,
    text: 'Alex Wright is the absolute best MARA agent in the industry. Clear points calculation, transparent contracts, and got my Subclass 189 invitation on the first round!',
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=200&h=200',
  },
  {
    id: '8',
    name: 'Neha Agarwal',
    role: 'Master of Finance Graduate',
    countryFlag: '🇳🇿',
    visaType: 'New Zealand Post-Study Work Visa',
    rating: 5,
    isGoogleVerified: true,
    text: 'Super efficient team! They answered all my parent’s queries patiently and ensured my visa application was 100% error-free.',
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=200&h=200',
  },
  {
    id: '9',
    name: 'Karan Malhotra',
    role: 'Cybersecurity Specialist',
    countryFlag: '🇺🇸',
    visaType: 'US F-1 STEM Student Visa',
    rating: 5,
    isGoogleVerified: true,
    text: 'Mock visa interviews conducted by Elena were a game changer! I went to the US consulate with total confidence and got my F-1 visa approved in 2 minutes.',
    image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=200&h=200',
  },
];

interface TestimonialsColumnProps {
  className?: string;
  testimonials: TestimonialItem[];
  duration?: number;
}

const TestimonialsColumn: React.FC<TestimonialsColumnProps> = ({
  className,
  testimonials,
  duration = 16,
}) => {
  return (
    <div className={className}>
      <motion.ul
        animate={{
          translateY: '-50%',
        }}
        transition={{
          duration: duration,
          repeat: Infinity,
          ease: 'linear',
          repeatType: 'loop',
        }}
        className="flex flex-col gap-6 pb-6 bg-transparent transition-colors duration-300 list-none m-0 p-0"
      >
        {[
          ...new Array(2).fill(0).map((_, index) => (
            <React.Fragment key={index}>
              {testimonials.map((item, i) => (
                <motion.li
                  key={`${index}-${i}`}
                  aria-hidden={index === 1 ? 'true' : 'false'}
                  tabIndex={index === 1 ? -1 : 0}
                  whileHover={{
                    scale: 1.03,
                    y: -8,
                    boxShadow:
                      '0 25px 50px -12px rgba(1, 99, 200, 0.15), 0 10px 10px -5px rgba(6, 29, 56, 0.08), 0 0 0 1px rgba(1, 99, 200, 0.2)',
                    transition: { type: 'spring', stiffness: 400, damping: 17 },
                  }}
                  className="p-6 sm:p-8 rounded-3xl border border-[#C2DAF3] shadow-lg shadow-[#061D38]/5 max-w-sm w-full bg-white transition-all duration-300 cursor-default select-none group focus:outline-none focus:ring-2 focus:ring-[#0163C8]/30 flex flex-col justify-between"
                >
                  <blockquote className="m-0 p-0 space-y-4">
                    {/* Header: Rating & Google Badge */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-1 text-amber-400 text-xs">
                        {[...Array(item.rating || 5)].map((_, starIdx) => (
                          <Star key={starIdx} size={14} className="fill-amber-400 text-amber-400" />
                        ))}
                      </div>
                      {item.isGoogleVerified && (
                        <div className="flex items-center space-x-1 px-2.5 py-0.5 rounded-full bg-[#F4F8FC] border border-[#C2DAF3]/80 text-[10px] font-bold text-[#061D38]">
                          <CheckCircle2 size={12} className="text-[#0163C8]" />
                          <span>Google Review</span>
                        </div>
                      )}
                    </div>

                    {/* Visa Grant Tag */}
                    {item.visaType && (
                      <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-[#96F189]/20 text-[#061D38] text-[11px] font-bold">
                        <span>{item.countryFlag}</span>
                        <span>{item.visaType}</span>
                      </div>
                    )}

                    {/* Review Text */}
                    <p className="text-xs sm:text-sm text-zinc-700 leading-relaxed font-normal italic">
                      "{item.text}"
                    </p>

                    {/* Footer Author */}
                    <footer className="flex items-center gap-3 pt-3 border-t border-[#C2DAF3]/60">
                      <img
                        width={44}
                        height={44}
                        src={item.image}
                        alt={`Avatar of ${item.name}`}
                        className="h-11 w-11 rounded-full object-cover ring-2 ring-[#0163C8]/30 group-hover:ring-[#0163C8] transition-all duration-300 ease-in-out"
                      />
                      <div className="flex flex-col">
                        <cite className="font-heading font-bold not-italic tracking-tight text-sm text-[#061D38]">
                          {item.name}
                        </cite>
                        <span className="text-[11px] font-medium text-[#0163C8] mt-0.5">
                          {item.role}
                        </span>
                      </div>
                    </footer>
                  </blockquote>
                </motion.li>
              ))}
            </React.Fragment>
          )),
        ]}
      </motion.ul>
    </div>
  );
};

export interface AnimatedTestimonialsProps {
  customTestimonials?: TestimonialItem[];
  title?: string;
  subtitle?: string;
  badge?: string;
}

export default function AnimatedTestimonials({
  customTestimonials,
  title = 'Real Students, Real Visa Grants',
  subtitle = 'Discover how thousands of students and professionals achieved their university admissions and PR visas with Legendary Careers.',
  badge = 'VERIFIED GOOGLE REVIEWS',
}: AnimatedTestimonialsProps) {
  const items = customTestimonials && customTestimonials.length > 0 ? customTestimonials : defaultTestimonials;

  // Split into 3 columns
  const firstColumn = items.slice(0, Math.ceil(items.length / 3));
  const secondColumn = items.slice(Math.ceil(items.length / 3), Math.ceil((items.length * 2) / 3));
  const thirdColumn = items.slice(Math.ceil((items.length * 2) / 3));

  return (
    <section aria-labelledby="animated-testimonials-heading" className="bg-transparent py-16 sm:py-24 relative overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{
          duration: 1.0,
          ease: [0.16, 1, 0.3, 1],
        }}
        className="container px-4 z-10 mx-auto max-w-7xl"
      >
        {/* Section Header */}
        <div className="flex flex-col items-center justify-center max-w-[620px] mx-auto mb-14 text-center space-y-4">
          <div className="inline-flex items-center space-x-2 border border-[#0163C8]/40 py-1.5 px-4 rounded-full text-xs font-bold tracking-widest uppercase text-[#0163C8] bg-[#C2DAF3]/40">
            <span className="w-2 h-2 rounded-full bg-[#96F189] animate-pulse" />
            <span>{badge}</span>
          </div>

          <h2 id="animated-testimonials-heading" className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#061D38]">
            {title}
          </h2>

          <p className="text-center text-zinc-600 text-sm sm:text-base leading-relaxed max-w-lg">
            {subtitle}
          </p>

          {/* Google 5.0 Rating Badge */}
          <div className="pt-2 flex items-center space-x-3 bg-white px-5 py-2 rounded-2xl border border-[#C2DAF3] shadow-sm">
            <div className="flex text-amber-400 text-sm">
              {[...Array(5)].map((_, i) => (
                <span key={i}>★</span>
              ))}
            </div>
            <span className="text-xs font-extrabold text-[#061D38]">5.0 / 5.0 Rating</span>
            <span className="text-[11px] text-zinc-400">|</span>
            <span className="text-[11px] font-semibold text-[#0163C8]">150+ Google Reviews</span>
          </div>
        </div>

        {/* 3-Column Marquee Container with Gradient Mask */}
        <div
          className="flex justify-center gap-6 mt-6 [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent)] max-h-[740px] overflow-hidden"
          role="region"
          aria-label="Scrolling Client Testimonials"
        >
          <TestimonialsColumn testimonials={firstColumn} duration={18} />
          <TestimonialsColumn testimonials={secondColumn} className="hidden md:block" duration={22} />
          <TestimonialsColumn testimonials={thirdColumn} className="hidden lg:block" duration={20} />
        </div>
      </motion.div>
    </section>
  );
}
