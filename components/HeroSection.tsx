"use client";

import { Button } from "@/components/ui/button";
import { Star, Phone } from "lucide-react";
import Image from "next/image";
import { AnimatedSection } from "@/components/AnimatedSection";

export function HeroSection() {
  return (
    <section className="pt-24 pb-12 lavender-bg">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <AnimatedSection animation="fade-in-right" className="space-y-6">
            <div className="inline-block">
              <span className="text-[#E8B33F] font-medium text-sm uppercase tracking-wide">
                Trapianto di capelli in Albania
              </span>
            </div>

            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
              La migliore clinica per il trapianto di capelli in Albania
            </h1>

            <p className="text-lg text-gray-600 leading-relaxed">
              Prova la trasformazione con i nostri servizi avanzati di trapianto di capelli. Con oltre dieci anni di esperienza, i nostri medici altamente qualificati garantiscono risultati eccezionali.
            </p>

            <div className="flex items-center gap-2 text-gray-700">
              <Phone className="w-5 h-5 text-[#E8B33F]" />
              <a href="tel:+355685055556" className="text-lg font-medium hover:text-[#E8B33F]">
                +355685055556
              </a>
            </div>

            <div>
              <Button
                className="gold-button text-white font-semibold px-8 py-6 text-lg rounded-full"
                size="lg"
              >
                Prenota un appuntamento
              </Button>
            </div>

            {/* Google Rating */}
            <div className="flex items-center gap-3 pt-4">
              <div className="flex items-center gap-1">
                <span className="text-sm font-medium text-gray-600">Valutazione Google</span>
                <span className="text-xl font-bold text-gray-900">4.9</span>
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      className="w-4 h-4 fill-[#E8B33F] text-[#E8B33F]"
                    />
                  ))}
                </div>
              </div>
              <div className="h-6 w-px bg-gray-300" />
              <span className="text-sm text-gray-600">Basato su 498 recensioni</span>
            </div>
          </AnimatedSection>

          {/* Right Column - Image */}
          <AnimatedSection animation="fade-in-left" delay={200} className="relative">
            <div className="relative rounded-3xl overflow-hidden">
              <Image
                src="https://ext.same-assets.com/788506488/3433074581.jpeg"
                alt="Albania Hair Clinic Team"
                width={600}
                height={600}
                className="w-full h-auto"
              />

              {/* Badge - Medici */}
              <div className="absolute top-8 left-8 bg-white rounded-2xl shadow-lg p-4 flex items-center gap-3">
                <div className="flex -space-x-2">
                  <Image
                    src="https://ext.same-assets.com/788506488/2833373294.png"
                    alt="Doctor"
                    width={32}
                    height={32}
                    className="w-8 h-8 rounded-full border-2 border-white"
                  />
                  <Image
                    src="https://ext.same-assets.com/788506488/1136876025.png"
                    alt="Doctor"
                    width={32}
                    height={32}
                    className="w-8 h-8 rounded-full border-2 border-white"
                  />
                  <Image
                    src="https://ext.same-assets.com/788506488/3211944297.png"
                    alt="Doctor"
                    width={32}
                    height={32}
                    className="w-8 h-8 rounded-full border-2 border-white"
                  />
                  <Image
                    src="https://ext.same-assets.com/788506488/108712877.png"
                    alt="Doctor"
                    width={32}
                    height={32}
                    className="w-8 h-8 rounded-full border-2 border-white"
                  />
                </div>
                <p className="text-sm font-medium text-gray-900">
                  Parla con i nostri oltre 15 medici
                </p>
              </div>

              {/* Badge - Clienti */}
              <div className="absolute bottom-8 right-8 bg-white rounded-2xl shadow-lg p-4 flex items-center gap-3">
                <div className="w-12 h-12 bg-[#E8B33F] rounded-full flex items-center justify-center">
                  <Star className="w-6 h-6 fill-white text-white" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-gray-900">3,000 +</p>
                  <p className="text-sm text-gray-600">clienti soddisfatti</p>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
