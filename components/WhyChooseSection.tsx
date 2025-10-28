"use client";

import { AnimatedSection } from "@/components/AnimatedSection";
import { Card } from "@/components/ui/card";
import { Award, Shield, Users, Clock } from "lucide-react";

export function WhyChooseSection() {
  const reasons = [
    {
      icon: Award,
      title: "Oltre 10 anni di esperienza",
      description: "I nostri chirurghi hanno più di un decennio di esperienza nel trapianto di capelli.",
    },
    {
      icon: Users,
      title: "3000+ pazienti soddisfatti",
      description: "Migliaia di pazienti da tutto il mondo hanno scelto la nostra clinica.",
    },
    {
      icon: Shield,
      title: "Garanzia a vita",
      description: "Offriamo una garanzia a vita sui nostri trattamenti di trapianto di capelli.",
    },
    {
      icon: Clock,
      title: "Supporto 24/7",
      description: "Il nostro team è sempre disponibile per rispondere alle tue domande.",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <AnimatedSection animation="fade-in-up">
          <div className="text-center mb-12">
            <p className="text-[#E8B33F] font-medium text-sm uppercase tracking-wide mb-2">
              Perché sceglierci
            </p>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Perché scegliere i pazienti ci fidano preferire?
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              La tua salute e il tuo benessere sono la nostra priorità
            </p>
          </div>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map((reason, index) => (
            <AnimatedSection
              key={index}
              animation="scale-in"
              delay={index * 100}
            >
              <Card className="p-6 text-center hover:shadow-xl transition-shadow border-2 border-gray-100 h-full">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-[#E8B33F] to-[#D4A024] rounded-full flex items-center justify-center">
                  <reason.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {reason.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {reason.description}
                </p>
              </Card>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}

