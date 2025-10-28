"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card } from "@/components/ui/card";
import { Phone } from "lucide-react";
import { AnimatedSection } from "@/components/AnimatedSection";

export function FAQSection() {
  const faqs = [
    {
      question: "Perché l'Albania è una destinazione popolare per il trapianto di capelli?",
      answer:
        "L'Albania offre procedure di trapianto di capelli di alta qualità a prezzi accessibili, con chirurghi esperti e strutture all'avanguardia, che ne fanno una scelta privilegiata per i cittadini di tutto il mondo.",
    },
    {
      question: "Quanto costa un trapianto di capelli in Albania?",
      answer:
        "I costi variano in base alla tecnica e al numero di innesti, ma sono significativamente più convenienti rispetto ad altri paesi europei, mantenendo gli stessi standard di qualità.",
    },
    {
      question: "Quali sono le tecniche utilizzate per il trapianto di capelli in Albania?",
      answer:
        "Utilizziamo le tecniche più avanzate come DHI (Direct Hair Implantation), FUE (Follicular Unit Extraction) e tecnica Hybrit per garantire risultati naturali e duraturi.",
    },
    {
      question: "È sicuro sottoporsi a un trapianto di capelli in Albania?",
      answer:
        "Sì, le nostre cliniche sono certificate e i nostri medici sono altamente qualificati con anni di esperienza. Seguiamo tutti i protocolli di sicurezza internazionali.",
    },
    {
      question: "Quanto dura il periodo di recupero dopo un trapianto di capelli?",
      answer:
        "Il periodo di recupero iniziale è di 7-10 giorni. I risultati completi sono visibili dopo 12-18 mesi, con una crescita graduale dei capelli trapiantati.",
    },
    {
      question: "Le cliniche turche offrono assistenza ai pazienti internazionali?",
      answer:
        "Sì, offriamo assistenza completa ai pazienti internazionali, inclusi trasferimenti aeroporto-hotel-clinica, traduttori personali e supporto 24/7 durante tutto il processo.",
    },
  ];

  return (
    <section id="support" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Support Card */}
          <AnimatedSection animation="fade-in-up">
            <Card className="p-8 mb-12 bg-gradient-to-br from-[#F5F3FF] to-white">
              <div className="text-center mb-8">
                <p className="text-[#E8B33F] font-medium text-sm uppercase tracking-wide mb-2">
                  Domande frequenti
                </p>
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                  Siamo qui per te.
                </h2>
                <p className="text-gray-600 max-w-2xl mx-auto">
                  Siamo pronti a rispondere a tutte le tue domande che ti incuriosiscono. Contattaci subito. Ricevi le risposte a tutte le tue domande sul trapianto di capelli.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-6 max-w-md mx-auto">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 bg-[#E8B33F] rounded-full flex items-center justify-center">
                    <Phone className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 mb-1">
                      Contattaci ora per una consulenza gratuita
                    </p>
                    <p className="text-xl font-bold text-gray-900">24/7 Whatsapp</p>
                    <p className="text-sm text-gray-600">
                      Ora clicca, inizia a ricevere il servizio
                    </p>
                  </div>
                </div>
              </div>
            </Card>
          </AnimatedSection>

          {/* FAQ Accordion */}
          <AnimatedSection animation="fade-in-up" delay={100}>
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="border border-gray-200 rounded-lg px-6 bg-gray-50"
                >
                  <AccordionTrigger className="text-left font-semibold text-gray-900 hover:no-underline">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600 leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
