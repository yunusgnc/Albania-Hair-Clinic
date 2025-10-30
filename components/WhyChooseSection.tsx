"use client";

import { AnimatedSection } from "@/components/AnimatedSection";
import { Check } from "lucide-react";

export function WhyChooseSection() {
  const reasons = [
    {
      text: "Utilizziamo la tecnologia più avanzata per un trapianto di capelli sicuro ed efficace.",
    },
    {
      text: "I nostri chirurghi esperti garantiscono risultati naturali e duraturi.",
    },
    {
      text: "Ti garantiamo un'esperienza confortevole e senza interruzioni, dall'inizio alla fine.",
    },
    {
      text: "La tua fiducia è la nostra priorità: un'assistenza di qualità in ogni fase del tuo percorso.",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Text */}
          <AnimatedSection animation="fade-in-left">
            <div>
              <p className="text-[#E8B33F] font-medium text-sm uppercase tracking-widest mb-3">
                Perché sceglierci noi
              </p>
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                Perché migliaia di pazienti ci hanno preferito?
              </h2>
              <p className="text-gray-600 text-base leading-relaxed">
                La nostra più grande referenza per i nostri pazienti è ancora una volta i nostri pazienti. La fiducia che ripongono in noi è il nostro migliore biglietto da visita.
              </p>
            </div>
          </AnimatedSection>

          {/* Right Side - Checkmark List */}
          <AnimatedSection animation="fade-in-right" delay={100}>
            <div className="space-y-4">
              {reasons.map((reason, index) => (
                <div
                  key={index}
                  className="flex gap-4 items-start group"
                >
                  <div className="flex-shrink-0 w-6 h-6 bg-gradient-to-br from-[#E8B33F] to-[#D4A024] rounded-full flex items-center justify-center mt-1">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                  <p className="text-gray-700 text-base leading-relaxed pt-0.5">
                    {reason.text}
                  </p>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}

