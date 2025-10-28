"use client";

import Image from "next/image";
import { AnimatedSection } from "@/components/AnimatedSection";
import { Button } from "@/components/ui/button";

export function BeforeAfterSection() {
  const beforeAfterImages = [
    {
      before: "https://ext.same-assets.com/788506488/3950672441.jpeg",
      after: "https://ext.same-assets.com/788506488/2254249549.jpeg",
    },
    {
      before: "https://ext.same-assets.com/788506488/3849694556.jpeg",
      after: "https://ext.same-assets.com/788506488/3876965262.jpeg",
    },
    {
      before: "https://ext.same-assets.com/788506488/2650525230.png",
      after: "https://ext.same-assets.com/788506488/3715969103.jpeg",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <AnimatedSection animation="fade-in-up">
          <div className="text-center mb-12">
            <p className="text-[#E8B33F] font-medium text-sm uppercase tracking-wide mb-2">
              Trasformazioni Reali
            </p>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Risultati Prima e Dopo
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Guarda le incredibili trasformazioni dei nostri pazienti
            </p>
          </div>
        </AnimatedSection>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {beforeAfterImages.map((item, index) => (
            <AnimatedSection
              key={index}
              animation="scale-in"
              delay={index * 100}
            >
              <div className="relative group">
                <div className="grid grid-cols-2 gap-2">
                  <div className="relative aspect-square rounded-xl overflow-hidden">
                    <Image
                      src={item.before}
                      alt="Prima"
                      fill
                      className="object-cover"
                    />
                    <div className="absolute top-2 left-2 bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                      Prima
                    </div>
                  </div>
                  <div className="relative aspect-square rounded-xl overflow-hidden">
                    <Image
                      src={item.after}
                      alt="Dopo"
                      fill
                      className="object-cover"
                    />
                    <div className="absolute top-2 right-2 bg-green-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                      Dopo
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection animation="fade-in-up" delay={300}>
          <div className="text-center">
            <Button className="gold-button text-white font-semibold px-8 py-6 rounded-full">
              Vedi altri risultati
            </Button>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}

