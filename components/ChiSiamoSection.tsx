"use client";

import { Button } from "@/components/ui/button";
import { AnimatedSection } from "@/components/AnimatedSection";
import Image from "next/image";

export function ChiSiamoSection() {
  const features = [
    {
      icon: (
        <svg className="w-10 h-10" viewBox="0 0 48 48" fill="none">
          <circle cx="24" cy="24" r="22" fill="#F3E8FF" stroke="#E8B33F" strokeWidth="2"/>
          <rect x="14" y="14" width="8" height="20" rx="2" fill="#E8B33F"/>
          <rect x="26" y="14" width="8" height="20" rx="2" fill="#E8B33F"/>
        </svg>
      ),
      title: "Trapianto di capelli personalizzato",
      description:
        "Ti mettiamo al centro di tutto ciò che facciamo. Il nostro approccio personalizzato al trapianto di capelli garantisce i migliori risultati in base alle tue esigenze.",
    },
    {
      icon: (
        <svg className="w-10 h-10" viewBox="0 0 48 48" fill="none">
          <circle cx="24" cy="24" r="22" fill="#F3E8FF" stroke="#E8B33F" strokeWidth="2"/>
          <circle cx="24" cy="18" r="4" fill="#E8B33F"/>
          <path d="M16 30 C16 26 20 22 24 22 C28 22 32 26 32 30" stroke="#E8B33F" strokeWidth="2" fill="none"/>
        </svg>
      ),
      title: "Chirurghi esperti in trapianti di capelli",
      description:
        "I nostri chirurghi altamente qualificati ed esperti utilizzano le tecniche più recenti per ottenere risultati eccezionali e dall'aspetto naturale.",
    },
    {
      icon: (
        <svg className="w-10 h-10" viewBox="0 0 48 48" fill="none">
          <circle cx="24" cy="24" r="22" fill="#F3E8FF" stroke="#E8B33F" strokeWidth="2"/>
          <circle cx="24" cy="24" r="6" fill="#E8B33F"/>
          <circle cx="24" cy="24" r="10" stroke="#E8B33F" strokeWidth="2" fill="none"/>
          <path d="M24 12 L24 16 M24 32 L24 36 M12 24 L16 24 M32 24 L36 24" 
                stroke="#E8B33F" strokeWidth="3" strokeLinecap="round"/>
        </svg>
      ),
      title: "Assistenza medica 24/7",
      description:
        "Siamo al tuo fianco in ogni fase del percorso. Dalla consultazione pre-procedura all'assistenza post-trapianto, forniamo un supporto continuo per garantire un recupero senza problemi.",
    },
  ];

  return (
    <section id="aboutus" className="py-20 bg-white w-full overflow-hidden">
      <div className="container mx-auto px-3 sm:px-4 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-start lg:items-start">
          {/* Left Side - Text Content */}
          <div className="space-y-8 order-1 lg:order-1">
            <AnimatedSection animation="fade-in-up">
              <div>
                <p className="text-[#E8B33F] font-medium text-sm uppercase tracking-wide mb-4">
                  Chi siamo
                </p>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                  Sei nel posto giusto
                </h2>
                <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                  La missione di EsteMoon è quella di offrire ai nostri pazienti di tutto il mondo un'esperienza di viaggio medico straordinaria e speciale. Tutto questo, offerto a prezzi molto convenienti.
                </p>
              </div>
            </AnimatedSection>

            <div className="space-y-6">
              {features.map((feature, index) => (
                <AnimatedSection
                  key={index}
                  animation="fade-in-up"
                  delay={index * 100}
                >
                  <div className="flex gap-4 group hover:bg-gray-50 p-4 rounded-xl transition-all cursor-pointer">
                    <div className="flex-shrink-0 mt-1 group-hover:scale-110 transition-transform">
                      {feature.icon}
                    </div>
                    <div>
                      <h3 className="text-base md:text-lg font-bold text-gray-900 mb-2 group-hover:text-[#E8B33F] transition-colors">
                        {feature.title}
                      </h3>
                      <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>

            <AnimatedSection animation="fade-in-up" delay={300}>
              <a 
                href="https://wa.link/a7fuu7" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block gold-button text-white font-semibold px-8 py-6 rounded-lg hover:shadow-lg transition-all hover:scale-105 text-center"
                aria-label="Richiedi una consulenza gratuita per il trapianto di capelli"
              >
                Richiedi una consulenza gratuita
              </a>
            </AnimatedSection>
          </div>

          {/* Right Side - Image with Overlays */}
          <div className="relative w-full h-80 sm:h-96 md:h-[500px] lg:h-[600px] lg:min-h-[590px] order-2 lg:order-2">
            <AnimatedSection animation="fade-in" delay={200} className="h-full relative">
              {/* Main Background Image Container */}
              <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl">
                {/* Main Procedure Image */}
                <Image
                  src="/img/ChiSiamoSectionBig.jpg"
                  alt="DHI hair transplant procedure - Albania Hair Clinic"
                  fill
                  className="object-cover rounded-2xl"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent pointer-events-none"></div>

                {/* Overlay Card - WhatsApp Support (Positioned on left center) */}
                <a
                  href="https://wa.link/a7fuu7"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute left-1 sm:left-4 top-1/2 -translate-y-1/2 w-48 sm:w-56 lg:w-64 bg-white rounded-2xl sm:rounded-3xl shadow-lg sm:shadow-2xl p-3 sm:p-4 md:p-6 transform hover:scale-105 transition-all duration-300 z-10 block"
                >
                  {/* Image inside card - Doctor & Patient */}
                  <div className="w-full h-32 sm:h-40 md:h-48 rounded-xl sm:rounded-2xl mb-2 sm:mb-4 overflow-hidden shadow-md">
                    <Image
                      src="/img/ChiSiamoSectionmini.jpg"
                      alt="WhatsApp support - Albania Hair Clinic staff"
                      fill
                      className="object-cover rounded-xl sm:rounded-2xl"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 14rem, 16rem"
                    />
                  </div>
                  {/* WhatsApp CTA */}
                  <div className="bg-[#1E40AF] text-white px-3 sm:px-4 py-2 sm:py-3 rounded-lg sm:rounded-xl font-bold uppercase text-xs sm:text-sm text-center shadow-md hover:bg-[#1a3699] transition-colors">
                    SUPPORTO WHATSAPP
                  </div>
                </a>

                {/* Top Right Gold Badge - 100% Garantito */}
                <div className="absolute top-2 right-2 sm:top-6 sm:right-6 bg-gradient-to-r from-[#E8B33F] to-[#D4A024] text-white px-3 sm:px-6 py-1.5 sm:py-3 rounded-lg sm:rounded-xl text-xs sm:text-base font-bold shadow-lg sm:shadow-2xl z-20 hover:scale-105 transition-transform">
                  <span className="hidden sm:inline">100% Garantito</span>
                  <span className="sm:hidden">100%</span>
                </div>

                {/* Top Right Checkmark Circle with pulse animation */}
                <div className="absolute top-12 right-2 sm:top-20 sm:right-6 w-10 h-10 sm:w-12 md:w-14 bg-[#1E40AF] rounded-full flex items-center justify-center shadow-lg sm:shadow-2xl z-20 animate-pulse">
                  <svg className="w-5 h-5 sm:w-6 md:w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </div>

                {/* Bottom Right Gold Badge - I migliori risultati */}
                <div className="absolute bottom-12 sm:bottom-20 right-2 sm:right-6 bg-gradient-to-r from-[#E8B33F] to-[#D4A024] text-white px-3 sm:px-6 py-1.5 sm:py-3 rounded-lg sm:rounded-xl text-xs sm:text-base font-bold shadow-lg sm:shadow-2xl z-20 hover:scale-105 transition-transform">
                  <span className="hidden sm:inline">I migliori risultati</span>
                  <span className="sm:hidden">Risultati</span>
                </div>

                {/* Bottom brand text overlay */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-r from-black/95 via-black/90 to-black/95 text-white px-3 sm:px-6 py-2 sm:py-4 text-center font-bold text-xs sm:text-sm md:text-base tracking-wider">
                  ALBANIA HAIR CLINIC
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  );
}