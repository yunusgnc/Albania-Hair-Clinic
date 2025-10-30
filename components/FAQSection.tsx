"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Phone } from "lucide-react";
import { AnimatedSection } from "@/components/AnimatedSection";

export function FAQSection() {
  const faqs = [
    {
      question: "Perché l' Albania è una destinazione popolare per il trapianto di capelli?",
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
    <section id="support" className="py-20 bg-gradient-to-b from-purple-50 to-white w-full overflow-hidden">
      <div className="container mx-auto px-3 sm:px-4 max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left Side - Title, Description & Contact */}
          <AnimatedSection animation="fade-in-left">
            <div>
              <p className="text-[#E8B33F] font-medium text-sm uppercase tracking-widest mb-3">
                Domande frequenti
              </p>
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                Siamo qui per te.
              </h2>
              <p className="text-gray-600 text-base leading-relaxed mb-12">
                Siamo pronti a rispondere a tutte le tue domande che ti incuriosiscono. Contattaci subito. Ricevi le risposte a tutte le tue domande sul trapianto di capelli.
              </p>

              {/* WhatsApp Contact Card */}
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                <a
                  href="https://wa.link/a7fuu7"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-4 hover:opacity-80 transition-opacity"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-[#E8B33F] to-[#D4A024] rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 mb-1">
                      Contattaci ora per una consulenza gratuita
                    </p>
                    <p className="text-lg font-bold text-gray-900 mb-1">24/7 Whatsapp</p>
                    <p className="text-sm text-gray-600">
                      Ora clicca, inizia a ricevere il servizio
                    </p>
                  </div>
                </a>
              </div>
            </div>
          </AnimatedSection>

          {/* Right Side - FAQ Accordion */}
          <AnimatedSection animation="fade-in-right" delay={100}>
            <Accordion type="single" collapsible className="space-y-3">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="border border-gray-200 rounded-lg px-6 py-4 bg-white hover:shadow-md transition-shadow"
                >
                  <AccordionTrigger className="text-left font-semibold text-gray-900 hover:no-underline text-base">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600 leading-relaxed text-sm">
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
