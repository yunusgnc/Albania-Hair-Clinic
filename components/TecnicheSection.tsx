"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { AnimatedSection } from "@/components/AnimatedSection";

export function TecnicheSection() {
  const techniques = [
    {
      title: "Tecnica DHI",
      description:
        "Grazie al metodo di trapianto di capelli DHI di ultima generazione, nella nostra clinica potrai ottenere l'aspetto più comune e naturale.",
      image: "https://ext.same-assets.com/788506488/549451921.jpeg",
    },
    {
      title: "Tecnica FUE",
      description:
        "La scelta migliore per chi desidera un look più naturale. Grazie al nostro staff di esperti, potrai ottenere un look frequente anche per i tuoi capelli.",
      image: "https://ext.same-assets.com/788506488/2689147683.jpeg",
    },
    {
      title: "Tecnica Hybrit",
      description:
        "È uno dei metodi più efficaci utilizzati per il trapianto di capelli. Inoltre, ti permette di avere un trapianto di capelli sia frequente che naturale.",
      image: "https://ext.same-assets.com/788506488/2923085010.jpeg",
    },
  ];

  return (
    <section className="py-20 lavender-bg">
      <div className="container mx-auto px-4">
        <AnimatedSection animation="fade-in-up">
          <div className="text-center mb-12">
            <p className="text-[#E8B33F] font-medium text-sm uppercase tracking-wide mb-2">
              Quali tecniche utilizziamo?
            </p>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
              Tecniche di trapianto di capelli
            </h2>
          </div>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {techniques.map((technique, index) => (
            <AnimatedSection
              key={index}
              animation="fade-in-up"
              delay={index * 100}
            >
              <Card className="overflow-hidden hover:shadow-xl transition-shadow h-full">
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-[#E8B33F] rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-xl">⚡</span>
                    </div>
                    <h3 className="font-bold text-xl text-gray-900">
                      {technique.title}
                    </h3>
                    <ArrowRight className="w-5 h-5 text-gray-400 ml-auto" />
                  </div>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {technique.description}
                  </p>
                </div>
                <div className="relative h-64">
                  <Image
                    src={technique.image}
                    alt={technique.title}
                    fill
                    className="object-cover rounded-b-lg"
                  />
                </div>
              </Card>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection animation="fade-in-up" delay={300}>
          <div className="text-center">
            <p className="text-gray-700 mb-6 max-w-3xl mx-auto">
              Sei nel posto giusto per il trapianto di capelli. Piantiamo i tuoi capelli con la massima radice grazie alla selezione tecnica più accurata... Creiamo anche un'acconciatura eccellente con le tecniche tecnologiche più avanzate.
            </p>
            <Button className="gold-button text-white font-semibold px-8 py-6 rounded-full">
              Ottieni informazioni
            </Button>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
