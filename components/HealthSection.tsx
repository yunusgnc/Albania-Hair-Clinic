"use client";

import { AnimatedSection } from "@/components/AnimatedSection";
import { Button } from "@/components/ui/button";
import { CheckSquare, ArrowRight } from "lucide-react";
import Image from "next/image";

export function HealthSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <AnimatedSection animation="fade-in-up">
          <div className="text-center mb-16">
            <p className="text-[#E8B33F] font-medium text-sm uppercase tracking-widest mb-3">
              La salute è ricchezza
            </p>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              La salute è ricchezza
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto text-base">
              I trattamenti saranno effettuati presso strutture sanitarie convenzionate con certificati di autorizzazione al turismo sanitario
            </p>
          </div>
        </AnimatedSection>

        {/* Complex Grid Layout */}
        <div className="space-y-6">
          {/* Top Row - 2 Columns */}
          <div className="grid md:grid-cols-2 gap-6">
            {/* Top Left - Card with Button */}
            <AnimatedSection animation="scale-in" delay={0}>
              <div className="bg-gradient-to-br from-purple-50 to-white rounded-3xl p-8 h-full flex flex-col justify-between">
                <div className="mb-6">
                  <div className="w-12 h-12 bg-dark-blue rounded-lg flex items-center justify-center mb-4">
                    <CheckSquare className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    Fai domanda ora, ricevi il supporto gratuito dei nostri esperti
                  </h3>
                </div>
                <div className="flex items-end gap-4">
                  <Image
                    src="/img/unsplash/doctor-portrait.jpg"
                    alt="Doctors"
                    width={120}
                    height={120}
                    className="rounded-xl"
                  />
                  <Button className="bg-[#E8B33F] hover:bg-[#D4A024] text-white font-semibold px-6 py-3 rounded-full">
                    Candidati ora
                  </Button>
                </div>
              </div>
            </AnimatedSection>

            {/* Top Right - Large Image */}
            <AnimatedSection animation="scale-in" delay={100}>
              <div className="relative h-full rounded-3xl overflow-hidden min-h-96">
                <Image
                  src="/img/icons/stats-card.jpeg"
                  alt="Surgery"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            </AnimatedSection>
          </div>

          {/* Bottom Row - 3 Columns */}
          <div className="grid md:grid-cols-3 gap-6">
            {/* Bottom Left - Image */}
            <AnimatedSection animation="scale-in" delay={200}>
              <div className="relative rounded-3xl overflow-hidden">
                <Image
                  src="/img/icons/result-card.jpeg"
                  alt="Marking"
                  width={300}
                  height={300}
                  className="object-cover w-full h-full"
                />
              </div>
            </AnimatedSection>

            {/* Bottom Center - Google Reviews Stats */}
            <AnimatedSection animation="scale-in" delay={300}>
              <div className="bg-gradient-to-br from-purple-50 to-white rounded-3xl p-8 flex flex-col items-center justify-center h-full">
                <div className="mb-4">
                  <svg className="w-12 h-12" viewBox="0 0 48 48">
                    <text x="12" y="28" className="text-xl font-bold fill-blue-600">G</text>
                  </svg>
                </div>
                <p className="text-gray-600 text-sm mb-3">Google</p>
                <h3 className="text-3xl font-bold text-gray-900 mb-1">10k+</h3>
                <p className="text-gray-600 text-sm text-center">Clienti felici</p>
                <div className="flex gap-2 mt-4">
                  {[1, 2, 3, 4].map((i) => (
                    <Image
                      key={i}
                      src="/img/unsplash/avatar-120.jpg"
                      alt="Client"
                      width={32}
                      height={32}
                      className="rounded-full border-2 border-white"
                    />
                  ))}
                </div>
              </div>
            </AnimatedSection>

            {/* Bottom Right - Result Card */}
            <AnimatedSection animation="scale-in" delay={400}>
              <div className="bg-gradient-to-br from-purple-50 to-white rounded-3xl p-8 flex flex-col items-center justify-between h-full">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    Un'esperienza perfetta di trapianto di capelli
                  </h3>
                </div>
                <div className="mb-6">
                  <Image
                    src="/img/unsplash/avatar-120.jpg"
                    alt="Result"
                    width={120}
                    height={120}
                    className="rounded-full"
                  />
                </div>
                <Button className="bg-[#E8B33F] hover:bg-[#D4A024] text-white font-semibold px-6 py-2 rounded-full flex items-center gap-2">
                  Candidati ora
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  );
}

