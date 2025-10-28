"use client";

import { AnimatedSection } from "@/components/AnimatedSection";
import { Card } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";
import Image from "next/image";

export function TestimonialsSection() {
  const testimonials = [
    {
      name: "Marco R.",
      location: "Milano, Italia",
      image: "https://ext.same-assets.com/788506488/2833373294.png",
      rating: 5,
      text: "Esperienza fantastica! Il team è stato professionale e i risultati sono oltre le mie aspettative. Consiglio vivamente!",
    },
    {
      name: "Giuseppe T.",
      location: "Roma, Italia",
      image: "https://ext.same-assets.com/788506488/1136876025.png",
      rating: 5,
      text: "Ottimo servizio dall'inizio alla fine. L'assistenza post-operatoria è stata eccellente. Sono molto soddisfatto dei risultati.",
    },
    {
      name: "Andrea M.",
      location: "Napoli, Italia",
      image: "https://ext.same-assets.com/788506488/3211944297.png",
      rating: 5,
      text: "Clinica molto professionale con personale esperto. I risultati sono naturali e hanno superato le mie aspettative!",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <AnimatedSection animation="fade-in-up">
          <div className="text-center mb-12">
            <p className="text-[#E8B33F] font-medium text-sm uppercase tracking-wide mb-2">
              Testimonianze
            </p>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Cosa dicono i nostri pazienti
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Storie reali di trasformazione e fiducia
            </p>
          </div>
        </AnimatedSection>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <AnimatedSection
              key={index}
              animation="fade-in-up"
              delay={index * 100}
            >
              <Card className="p-6 hover:shadow-xl transition-shadow h-full relative">
                <Quote className="w-10 h-10 text-[#E8B33F] opacity-20 absolute top-4 right-4" />
                <div className="flex items-center gap-4 mb-4">
                  <div className="relative w-16 h-16 rounded-full overflow-hidden">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">
                      {testimonial.name}
                    </h4>
                    <p className="text-sm text-gray-500">
                      {testimonial.location}
                    </p>
                  </div>
                </div>
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 fill-[#E8B33F] text-[#E8B33F]"
                    />
                  ))}
                </div>
                <p className="text-gray-700 leading-relaxed italic">
                  "{testimonial.text}"
                </p>
              </Card>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}

