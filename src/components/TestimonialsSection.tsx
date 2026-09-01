'use client';

import React from 'react';
import AnimatedTestimonials from '@/components/ui/testimonial-v2';

export const TestimonialsSection: React.FC = () => {
  return (
    <section id="testimonials" className="bg-white border-t border-[#C2DAF3]/60">
      <div id="agent" />
      <AnimatedTestimonials />
    </section>
  );
};

