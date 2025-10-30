"use client";

import { AnimatedSection } from "@/components/AnimatedSection";
import { useEffect } from "react";

export function ReviewsSection() {
  useEffect(() => {
    // Elfsight script'i dinamik olarak yükle
    const script = document.createElement('script');
    script.src = 'https://elfsightcdn.com/platform.js';
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <section id="reviews" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <AnimatedSection animation="fade-in-up">
          <div className="text-center mb-16">
            <p className="text-[#E8B33F] font-medium text-sm uppercase tracking-widest mb-3">
              Testimonianze
            </p>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              I nostri commenti su Google
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-base">
              Google non ha mai permesso le frodi nei commenti. Ecco i commenti di pazienti reali.
            </p>
          </div>
        </AnimatedSection>

        {/* Google Reviews Embed - 5 Column Layout */}
        <AnimatedSection animation="fade-in-up" delay={100}>
          <div className="flex justify-center">
            <div className="elfsight-app-0266f815-ea39-4da9-b60f-45b814d3e1aa" data-elfsight-app-lazy></div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
