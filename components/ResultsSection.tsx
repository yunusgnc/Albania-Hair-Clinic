"use client";

import { Play, X } from "lucide-react";
import Image from "next/image";
import { AnimatedSection } from "@/components/AnimatedSection";
import { useState } from "react";

export function ResultsSection() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const videos = [
    {
      url: "/img/wordpress/Adsiz-tasarim-3.png",
      icon: "play",
    },
    {
      url: "/img/wordpress/large-image.jpg",
      icon: "play",
    },
    {
      url: "/img/wordpress/pexels-photo.jpg",
      icon: "play",
    },
    {
      url: "/img/wordpress/header-3.jpg",
      icon: "play",
    },
    {
      url: "/img/wordpress/images.jpeg",
      icon: "play",
    },
    {
      url: "/img/wordpress/steptodown.jpg",
      icon: "play",
    },
  ];

  return (
    <section id="videos" className="py-20 lavender-bg">
      <div className="container mx-auto px-4">
        <AnimatedSection animation="fade-in-up">
          <div className="text-center mb-10 md:mb-12">
            <p className="text-[#E8B33F] font-medium text-xs sm:text-sm uppercase tracking-widest mb-3 md:mb-4">
              Dai nostri pazienti...
            </p>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900">
              Risultati garantiti
            </h2>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-4 w-full px-2 md:px-0">
          {videos.map((video, index) => (
            <AnimatedSection
              key={index}
              animation="scale-in"
              delay={index * 50}
            >
              <div
                className="relative aspect-[4/2] md:aspect-[4/3] overflow-hidden group cursor-pointer shadow-md md:shadow-lg hover:shadow-lg md:hover:shadow-xl transition-shadow rounded-lg md:rounded-xl"
                onClick={() => setSelectedImage(video.url)}
              >
                <Image
                  src={video.url}
                  alt={`Risultato ${index + 1}`}
                  fill
                  className="object-cover transition-transform group-hover:scale-110 duration-300"
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 33vw"
                />
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors flex items-center justify-center">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-[#E8427D] rounded-full flex items-center justify-center group-hover:scale-110 transition-transform shadow-xl">
                    <Play className="w-4 h-4 md:w-5 md:h-5 fill-white text-white ml-1" />
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4 animate-in fade-in duration-200"
          onClick={() => setSelectedImage(null)}
        >
          {/* Close Button */}
          <button
            className="absolute top-4 right-4 text-white hover:text-[#E8427D] transition-colors z-10"
            onClick={(e) => {
              e.stopPropagation();
              setSelectedImage(null);
            }}
          >
            <X className="w-8 h-8" />
          </button>

          {/* Image Container */}
          <div className="relative max-w-5xl max-h-[90vh] w-full h-[90vh]">
            <Image
              src={selectedImage}
              alt="Risultato"
              fill
              className="rounded-xl shadow-2xl object-contain"
              onClick={(e) => e.stopPropagation()}
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 80vw"
            />
          </div>
        </div>
      )}
    </section>
  );
}
