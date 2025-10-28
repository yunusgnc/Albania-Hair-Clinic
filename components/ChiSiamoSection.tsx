"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { AnimatedSection } from "@/components/AnimatedSection";

export function ChiSiamoSection() {
  const features = [
    {
      icon: "💉",
      title: "Trapianto di capelli personalizzato",
      description:
        "Ti mettiamo al centro di tutto ciò che facciamo. Il nostro approccio personalizzato al trapianto di capelli garantisce i migliori risultati in base alle tue esigenze.",
    },
    {
      icon: "👨‍⚕️",
      title: "Chirurghi esperti in trapianti di capelli",
      description:
        "I nostri chirurghi altamente qualificati ed esperti utilizzano le tecniche più recenti per ottenere risultati eccezionali e dall'aspetto naturale.",
    },
    {
      icon: "🏥",
      title: "Assistenza medica 24/7",
      description:
        "Siamo al tuo fianco in ogni fase del percorso. Dalla consultazione pre-procedura all'assistenza post-trapianto, forniamo un supporto continuo per garantire un recupero senza problemi.",
    },
  ];

  return (
    <section id="aboutus" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <AnimatedSection animation="fade-in-up">
          <div className="text-center mb-12">
            <p className="text-[#E8B33F] font-medium text-sm uppercase tracking-wide mb-2">
              Chi siamo
            </p>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
              Sei nel posto giusto
            </h2>
            <p className="text-lg text-gray-600 mt-4 max-w-3xl mx-auto">
              La missione di EsteMoon è quella di offrire ai nostri pazienti di tutto il mondo un'esperienza di viaggio medico straordinaria e speciale. Tutto questo, offerto a prezzi molto convenienti.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {features.map((feature, index) => (
            <AnimatedSection
              key={index}
              animation="scale-in"
              delay={index * 100}
            >
              <Card className="p-6 hover:shadow-lg transition-shadow border-2 border-gray-100 h-full">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </Card>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection animation="fade-in-up" delay={300}>
          <div className="text-center">
            <Button className="gold-button text-white font-semibold px-8 py-6 rounded-full">
              Richiedi una consulenza gratuita
            </Button>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
