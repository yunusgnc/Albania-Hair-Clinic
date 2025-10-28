"use client";

import { AnimatedSection } from "@/components/AnimatedSection";
import { Card } from "@/components/ui/card";
import { CheckCircle2 } from "lucide-react";
import Image from "next/image";

export function HealthSection() {
  const benefits = [
    "Medici esperti con oltre 10 anni di esperienza",
    "Tecniche all'avanguardia (FUE, DHI, Hybrit)",
    "Garanzia a vita sui risultati",
    "Pacchetti all-inclusive con hotel 5 stelle",
    "Assistenza post-operatoria per 1 anno",
    "Supporto 24/7 in italiano",
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Checkmarks */}
          <AnimatedSection animation="fade-in-right">
            <div>
              <p className="text-[#E8B33F] font-medium text-sm uppercase tracking-wide mb-2">
                La salute e ricchezza
              </p>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                La salute è ricchezza
              </h2>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Investire nella tua salute e nel tuo benessere è la decisione migliore che puoi prendere. 
                I nostri trattamenti di trapianto di capelli ti aiuteranno a riacquistare fiducia e autostima.
              </p>
              
              <div className="space-y-4 mb-8">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                    <p className="text-gray-700">{benefit}</p>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>

          {/* Right - Images */}
          <AnimatedSection animation="fade-in-left" delay={200}>
            <div className="grid grid-cols-2 gap-4">
              <div className="relative aspect-square rounded-2xl overflow-hidden">
                <Image
                  src="https://ext.same-assets.com/788506488/3950672441.jpeg"
                  alt="Doctor consultation"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative aspect-square rounded-2xl overflow-hidden">
                <Image
                  src="https://ext.same-assets.com/788506488/2254249549.jpeg"
                  alt="Hair treatment"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative aspect-square rounded-2xl overflow-hidden col-span-2">
                <Image
                  src="https://ext.same-assets.com/788506488/3849694556.jpeg"
                  alt="Happy patient"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}

