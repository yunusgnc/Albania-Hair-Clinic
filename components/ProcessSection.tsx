"use client";

import { AnimatedSection } from "@/components/AnimatedSection";
import Image from "next/image";

export function ProcessSection() {
  const steps = [
    {
      image: "/img/unsplash/step-1.jpg",
      title: "Consulenza",
      description: "Primo incontro per valutare le tue esigenze",
    },
    {
      image: "/img/unsplash/step-2.jpg",
      title: "Pianificazione",
      description: "Progettazione dettagliata del trapianto",
    },
    {
      image: "/img/unsplash/step-3.jpg",
      title: "Intervento",
      description: "Procedura effettuata da esperti qualificati",
    },
    {
      image: "/img/unsplash/step-4.jpg",
      title: "Risultati",
      description: "Monitoraggio del recupero e risultati finali",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-purple-50 to-white w-full overflow-hidden">
      <div className="container mx-auto px-3 sm:px-4 max-w-7xl">
        <AnimatedSection animation="fade-in-up">
          <div className="text-center mb-16">
            <p className="text-[#E8B33F] font-medium text-sm uppercase tracking-widest mb-3">
              Come Funziona
            </p>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              La tua tabella di marcia per il trapianto di capelli
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto text-base">
              Ci impegniamo a migliorare i risultati di salute attraverso cure personalizzate, trattamenti innovativi e un'attenzione particolare alla prevenzione.
            </p>
          </div>
        </AnimatedSection>

        {/* 4 Column Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <AnimatedSection
              key={index}
              animation="scale-in"
              delay={index * 100}
            >
              <div className="flex flex-col items-center text-center">
                {/* Circular Image */}
                <div className="mb-6">
                  <div className="w-32 h-32 rounded-full overflow-hidden shadow-lg border-4 border-purple-100">
                    <Image
                      src={step.image}
                      alt={step.title}
                      width={128}
                      height={128}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                {/* Number Badge */}
                <div className="mb-4">
                  <span className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-[#E8B33F] to-[#D4A024] text-white font-bold text-lg rounded-full shadow-md">
                    {index + 1}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-gray-900 mb-3 leading-tight">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}

