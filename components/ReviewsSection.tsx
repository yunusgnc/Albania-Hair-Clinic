"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Star } from "lucide-react";
import Image from "next/image";
import { AnimatedSection } from "@/components/AnimatedSection";

export function ReviewsSection() {
  const reviews = [
    {
      name: "AsʁƏxiv C⊙3D",
      date: "2 giorni fa",
      rating: 5,
      text: "Personale disponibile, accolliente e professionale, nulla da ridire. Ti accompagnano passo dopo passo, da quando ti contatti per informazioni fino all arrivo nella tua città. Struttura e stanze pulite e ben servite. Esperienza abbastanza positiva, consigliato vivamente.",
    },
  ];

  return (
    <section id="reviews" className="py-20 lavender-bg">
      <div className="container mx-auto px-4">
        <AnimatedSection animation="fade-in-up">
          <div className="text-center mb-12">
            <p className="text-[#E8B33F] font-medium text-sm uppercase tracking-wide mb-2">
              Testimonianze
            </p>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              I nostri commenti su Google
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Google non ha mai permesso le frodi nei commenti. Ecco i commenti di un paziente reale.
            </p>
          </div>
        </AnimatedSection>

        <div className="max-w-4xl mx-auto mb-8">
          <AnimatedSection animation="fade-in-up" delay={100}>
            <div className="bg-white rounded-2xl p-6 mb-6">
              <div className="flex items-center gap-3 mb-4">
                <Image
                  src="https://ext.same-assets.com/788506488/2890630330.svg"
                  alt="Google"
                  width={80}
                  height={32}
                  className="h-8 w-auto"
                />
                <span className="text-sm text-gray-600">Recensioni</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-5xl font-bold text-gray-900">4.9</span>
                <div>
                  <div className="flex">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star
                        key={star}
                        className="w-5 h-5 fill-[#E8B33F] text-[#E8B33F]"
                      />
                    ))}
                  </div>
                  <span className="text-sm text-gray-600">(498)</span>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {reviews.map((review, index) => (
            <AnimatedSection key={index} animation="fade-in-up" delay={200 + index * 100}>
              <Card className="p-6 mb-4">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold">
                    A
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-bold text-gray-900">{review.name}</h4>
                      <span className="text-sm text-gray-500">{review.date}</span>
                    </div>
                    <div className="flex mb-3">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star
                          key={star}
                          className="w-4 h-4 fill-[#E8B33F] text-[#E8B33F]"
                        />
                      ))}
                    </div>
                    <p className="text-gray-700 leading-relaxed">{review.text}</p>
                  </div>
                </div>
              </Card>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection animation="fade-in-up" delay={300}>
          <div className="text-center">
            <Button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-6 rounded-full">
              Lascia una recensione su Google
            </Button>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
