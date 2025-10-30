"use client";

import { Button } from "@/components/ui/button";
import { Star, Phone } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";
import { AnimatedSection } from "@/components/AnimatedSection";

export function HeroSection() {
  return (
    <section
      id="hero"
      className="px-3 sm:px-4 md:px-6 lg:px-8 py-8 md:py-10 lavender-bg md:mx-3 lg:mx-4 md:my-10 md:border-2 md:rounded-3xl md:shadow-lg w-full max-w-full overflow-hidden"
    >
      <div className="container mx-auto px-2 sm:px-4 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Column - Text Content */}
          <AnimatedSection animation="fade-in-right" className="space-y-6">
            <div className="inline-block">
              <span className="text-[#E8B33F] font-medium text-xs sm:text-sm uppercase tracking-wide">
                Trapianto di capelli in Albania
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
              La migliore clinica per il trapianto di capelli in Albania
            </h1>

            <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
              Prova la trasformazione con i nostri servizi avanzati di trapianto
              di capelli. Con oltre dieci anni di esperienza, i nostri medici
              altamente qualificati garantiscono risultati eccezionali.
            </p>

            <div className="flex items-center gap-2 text-gray-700 text-sm sm:text-base">
              <Phone className="w-5 h-5 text-[#E8B33F]" />
              <a
                href="tel:+355685055556"
                className="font-medium hover:text-[#E8B33F]"
              >
                +355685055556
              </a>
            </div>

            <div>
              <a
                href="https://wa.link/a7fuu7"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gold-button text-white font-semibold px-6 sm:px-8 py-5 sm:py-6 text-base rounded-full w-full sm:w-auto hover:opacity-90 transition-opacity"
              >
                Prenota un appuntamento
              </a>
            </div>
            <hr className="my-4 border-gray-300" />
            {/* Google Rating */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-3 pt-4 text-sm sm:text-base">
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-sm font-medium text-gray-600">
                  Valutazione Google
                </span>
                <span className="text-lg sm:text-xl font-bold text-gray-900">
                  4.9
                </span>
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      className="w-3 sm:w-4 h-3 sm:h-4 fill-[#E8B33F] text-[#E8B33F]"
                    />
                  ))}
                </div>
              </div>
              <div className="hidden sm:block h-6 w-px bg-gray-300" />
              <span className="text-xs sm:text-sm text-gray-600">
                Basato su 498 recensioni
              </span>
            </div>
          </AnimatedSection>

          {/* Right Column - Image */}
          <AnimatedSection
            animation="fade-in-left"
            delay={200}
            className="relative"
          >
            <div className="relative rounded-2xl md:rounded-3xl overflow-hidden">
              <Image
                src="/img/hero-image.jpg"
                alt="Albania Hair Clinic Team"
                width={600}
                height={600}
                className="w-full h-auto"
                style={{ width: "auto", height: "auto" }}
                priority
              />

              {/* Badge - Medici - Hidden on mobile */}
              <motion.div
                className="hidden sm:flex absolute top-1/2 left-2 md:left-8 -translate-y-1/2 bg-white rounded-2xl shadow-lg p-3 md:p-4 flex-col items-center gap-2 md:gap-3"
                animate={{
                  x: [0, 10, -10, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                {/* Doctor Avatars */}
                <div className="flex -space-x-2">
                  <Image
                    src="/img/icons/logo-1.png"
                    alt="Doctor"
                    width={24}
                    height={24}
                  />
                  <Image
                    src="/img/icons/logo-2.png"
                    alt="Doctor"
                    width={24}
                    height={24}
                  />
                  <Image
                    src="/img/icons/logo-3.png"
                    alt="Doctor"
                    width={24}
                    height={24}
                  />
                  <Image
                    src="/img/icons/logo-4.png"
                    alt="Doctor"
                    width={24}
                    height={24}
                  />
                </div>

                {/* Separator Line */}
                <div className="w-full h-px bg-gray-300"></div>

                {/* Text */}
                <div className="text-center">
                  <p className="text-xs md:text-sm text-gray-600">
                    Parla con i nostri oltre
                  </p>
                  <p className="text-xs md:text-sm font-medium text-gray-900">
                    15 medici
                  </p>
                </div>
              </motion.div>

              {/* Badge - Clienti - Hidden on mobile */}
              <motion.div
                className="hidden sm:flex absolute bottom-6 md:bottom-8 right-2 md:right-8 bg-white rounded-2xl shadow-lg p-3 md:p-4 flex-col items-center gap-2 md:gap-3"
                animate={{
                  x: [0, -10, 10, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <div className="w-10 h-10 md:w-12 md:h-12 bg-[#E8B33F] rounded-full flex items-center justify-center">
                  <Star className="w-5 h-5 md:w-6 md:h-6 fill-white text-white" />
                </div>
                <div className="text-center">
                  <p className="text-lg md:text-2xl font-bold text-gray-900">
                    3,000 +
                  </p>
                  <p className="text-xs md:text-sm text-gray-600">
                    clienti soddisfatti
                  </p>
                </div>
              </motion.div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
