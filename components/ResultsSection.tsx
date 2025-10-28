"use client";

import { Play } from "lucide-react";
import Image from "next/image";
import { AnimatedSection } from "@/components/AnimatedSection";

export function ResultsSection() {
  const videos = [
    "https://ext.same-assets.com/788506488/3950672441.jpeg",
    "https://ext.same-assets.com/788506488/2254249549.jpeg",
    "https://ext.same-assets.com/788506488/3849694556.jpeg",
    "https://ext.same-assets.com/788506488/3876965262.jpeg",
    "https://ext.same-assets.com/788506488/2650525230.png",
    "https://ext.same-assets.com/788506488/3715969103.jpeg",
  ];

  return (
    <section id="videos" className="py-20 lavender-bg">
      <div className="container mx-auto px-4">
        <AnimatedSection animation="fade-in-up">
          <div className="text-center mb-12">
            <p className="text-[#E8B33F] font-medium text-sm uppercase tracking-wide mb-2">
              Dai nostri pazienti...
            </p>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
              Risultati garantiti
            </h2>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {videos.map((video, index) => (
            <AnimatedSection
              key={index}
              animation="scale-in"
              delay={index * 50}
            >
              <div className="relative aspect-square rounded-2xl overflow-hidden group cursor-pointer">
                <Image
                  src={video}
                  alt={`Risultato ${index + 1}`}
                  fill
                  className="object-cover transition-transform group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors flex items-center justify-center">
                  <div className="w-14 h-14 bg-[#E8427D] rounded-full flex items-center justify-center">
                    <Play className="w-6 h-6 fill-white text-white ml-1" />
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
