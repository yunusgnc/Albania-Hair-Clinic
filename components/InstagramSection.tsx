"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import { AnimatedSection } from "@/components/AnimatedSection";
import { useEffect } from "react";

export function InstagramSection() {
  useEffect(() => {
    // Elfsight script'i dinamik olarak yükle
    const script = document.createElement('script');
    script.src = 'https://elfsightcdn.com/platform.js';
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <section id="ig" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Instagram Header */}
        <AnimatedSection animation="fade-in-up">
          <div className="flex items-center justify-center gap-4 mb-8">
            <Image
              src="/img/icons/instagram-banner.jpeg"
              alt="Instagram Banner"
              width={64}
              height={64}
              className="w-16 h-16 rounded-full"
            />
            <div>
              <h3 className="font-bold text-lg text-gray-900">
                Albania Hair Clinic - Trapianto Capelli in Albania
              </h3>
              <p className="text-gray-600 text-sm">@albaniahairclinic</p>
            </div>
          </div>

          <div className="text-center mb-12">
            <Button 
              className="bg-blue-500 hover:bg-blue-600 text-white"
              onClick={() => window.open('https://instagram.com/albaniahairclinic', '_blank')}
            >
              Instagram'da Takip Et
            </Button>
          </div>
        </AnimatedSection>

        {/* Elfsight Instagram Feed Embed */}
        <AnimatedSection animation="fade-in-up" delay={100}>
          <div className="flex justify-center">
            <div className="elfsight-app-c7c8c914-fb1d-4f15-9466-492bb95cb480" data-elfsight-app-lazy></div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
