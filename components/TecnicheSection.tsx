"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle } from "lucide-react";
import Image from "next/image";
import { AnimatedSection } from "@/components/AnimatedSection";

export function TecnicheSection() {
  const techniques = [
    {
      image: "/img/wordpress/technique.jpg",
      title: "Tecnica DHI",
      description: "Massima precisione e naturalezza nei risultati",
    },
    {
      image: "/img/wordpress/header-3.jpg",
      title: "Tecnica FUE",
      description: "Metodo meno invasivo e cicatrici minime",
    },
    {
      image: "/img/wordpress/large-image.jpg",
      title: "Tecnica Ibrida",
      description: "Combinazione ottimale per risultati superiori",
    },
  ];

  return (
    <section className="py-10 bg-purple-50 w-full overflow-hidden">
      <div className="container mx-auto px-3 sm:px-4 max-w-7xl">
        {/* Header */}
        <AnimatedSection animation="fade-in-up">
          <div className="text-center mb-12">
            <p className="text-[#E8B33F] font-bold text-xs uppercase tracking-widest mb-4">
              Quali tecniche utilizziamo?
            </p>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">
              Tecniche di trapianto di capelli
            </h2>
          </div>
        </AnimatedSection>

        {/* Techniques Grid - Responsive */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-12">
          {techniques.map((technique, index) => (
            <AnimatedSection
              key={index}
              animation="fade-in-up"
              delay={index * 100}
            >
              <div className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl hover:scale-105 transition-all duration-300 h-full flex flex-col group cursor-pointer">
                {/* Card Header + Description */}
                <div className="p-4 md:p-6 flex-1">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-[#E8B33F] rounded-full flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="font-bold text-base md:text-lg text-gray-900 flex-1">
                      {technique.title}
                    </h3>
                    <ArrowRight className="w-5 h-5 text-gray-300 flex-shrink-0" />
                  </div>
                  <hr className="border-gray-200 my-4" />

                  {/* Description */}
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {technique.description}
                  </p>
                </div>
                <hr className="border-gray-200" />
                {/* Image */}
                <div className="relative h-40 md:h-56 w-full overflow-hidden">
                  <Image
                    src={technique.image}
                    alt={technique.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    quality={85}
                    priority={index === 0}
                  />
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* Bottom Section - Clean White Card */}
        <AnimatedSection animation="fade-in-up" delay={300}>
          <div className="bg-transparent p-6 md:p-10 max-w-3xl mx-auto">
            <div className="text-center">
              <p className="text-gray-700 text-sm md:text-base leading-relaxed mb-6">
                Sei nel posto giusto per il trapianto di capelli. Piantiamo i
                tuoi capelli con la massima radice grazie alla selezione tecnica
                più accurata... Creiamo anche un'acconciatura eccellente con le
                tecniche tecnologiche più avanzate.
              </p>
              <a
                href="https://wa.link/a7fuu7"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="bg-[#E8B33F] hover:bg-[#D4A024] text-white font-bold px-6 md:px-10 py-2 md:py-2.5 rounded-full text-xs md:text-sm transition-colors w-full md:w-auto">
                  Ottieni informazioni
                </Button>
              </a>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
