"use client";

import { AnimatedSection } from "@/components/AnimatedSection";
import { CheckCircle2 } from "lucide-react";

export function ProcessSection() {
  const steps = [
    {
      number: "01",
      title: "Consulenza Gratuita",
      description: "Contattaci per una consulenza gratuita. I nostri esperti analizzeranno il tuo caso e risponderanno a tutte le tue domande.",
    },
    {
      number: "02",
      title: "Analisi dei Capelli",
      description: "Invia le tue foto per un'analisi dettagliata. Valuteremo il numero di innesti necessari e il piano di trattamento.",
    },
    {
      number: "03",
      title: "Pianificazione",
      description: "Creiamo un piano personalizzato per te. Organizziamo il tuo viaggio, alloggio e trasferimenti.",
    },
    {
      number: "04",
      title: "Giorno dell'Intervento",
      description: "Il giorno dell'intervento, il nostro team di esperti eseguirà il trapianto con la massima cura e professionalità.",
    },
    {
      number: "05",
      title: "Follow-up",
      description: "Assistenza post-operatoria completa. Ti seguiamo per un anno intero per garantire i migliori risultati.",
    },
  ];

  return (
    <section className="py-20 lavender-bg">
      <div className="container mx-auto px-4">
        <AnimatedSection animation="fade-in-up">
          <div className="text-center mb-12">
            <p className="text-[#E8B33F] font-medium text-sm uppercase tracking-wide mb-2">
              Come Funziona
            </p>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              La tua tabella di marcia per il trapianto di capelli
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Un processo semplice e trasparente in 5 passi
            </p>
          </div>
        </AnimatedSection>

        <div className="max-w-4xl mx-auto">
          {steps.map((step, index) => (
            <AnimatedSection
              key={index}
              animation="fade-in-right"
              delay={index * 100}
            >
              <div className="relative mb-8 last:mb-0">
                {index < steps.length - 1 && (
                  <div className="absolute left-8 top-20 w-0.5 h-full bg-[#E8B33F] opacity-20" />
                )}
                <div className="flex gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#E8B33F] to-[#D4A024] flex items-center justify-center text-white font-bold text-xl shadow-lg">
                      {step.number}
                    </div>
                  </div>
                  <div className="flex-1 bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-shadow">
                    <h3 className="text-xl font-bold text-gray-900 mb-2 flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5 text-green-500" />
                      {step.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}

