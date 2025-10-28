"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Check } from "lucide-react";
import { AnimatedSection } from "@/components/AnimatedSection";

export function PricingSection() {
  const packages = [
    {
      name: "PACCHETTO FUE",
      price: "1150€",
      subtitle: "Pacchetti All Inclusive",
      features: [
        "Operazione Con Tecnica FUE Sapphire",
        "Esami Del Sangue (Prima Dell'intervento)",
        "Farmaci Dopo L'intervento",
        "Farmaci Dopo L'intervento",
        "Cuscino Medico Per Il Collo",
        "Farmaci Dopo L'intervento",
        "Lavaggio Dei Capelli (Dopo Il Trattamento)",
        "Pranzo Il Giorno Dell'operazione",
        "Hotel 5 Stelle 2 Notti (Colazione Inclusa)",
        "Trasferimenti VIP: Aeroporto-Hotel-Ospedale",
        "Certificato Di Garanzia A Vita",
        "Traduttore Personale",
        "Follow-Up E Assistenza Per 1 Anno",
        "TERAPIA DELLA LUCE ROSSA",
      ],
      bestSeller: false,
    },
    {
      name: "PACCHETTO DHI",
      price: "1350€",
      subtitle: "Pacchetti All Inclusive",
      features: [
        "Operazione Con Tecnica DHI",
        "Esami Del Sangue (Prima Dell'intervento)",
        "Farmaci Dopo L'intervento",
        "Farmaci Dopo L'intervento",
        "Cuscino Medico Per Il Collo",
        "Farmaci Dopo L'intervento",
        "Lavaggio Dei Capelli (Dopo Il Trattamento)",
        "Pranzo Il Giorno Dell'operazione",
        "Hotel 5 Stelle 2 Notti (Colazione Inclusa)",
        "Trasferimenti VIP: Aeroporto-Hotel-Ospedale",
        "Certificato Di Garanzia A Vita",
        "Traduttore Personale",
        "Follow-Up E Assistenza Per 1 Anno",
        "KIT Post Cura Di 1 Mese",
      ],
      bestSeller: true,
    },
  ];

  return (
    <section id="pricing" className="py-20 navy-bg">
      <div className="container mx-auto px-4">
        <AnimatedSection animation="fade-in-up">
          <div className="text-center mb-12">
            <p className="text-[#E8B33F] font-medium text-sm uppercase tracking-wide mb-2">
              Allenati con i migliori
            </p>
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              I NOSTRI PIANI TARIFFARI
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Esamina i nostri pacchetti completi di trapianto di capelli e scegli il migliore per te!
            </p>
          </div>
        </AnimatedSection>

        <AnimatedSection animation="fade-in-up" delay={200}>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {packages.map((pkg, index) => (
              <Card
                key={index}
                className="relative border-2 border-[#E8B33F] bg-transparent text-white overflow-hidden"
              >
                {pkg.bestSeller && (
                  <div className="absolute top-0 right-0 bg-[#E8B33F] text-black text-xs font-bold px-4 py-1 rotate-45 translate-x-8 translate-y-2">
                    BEST SELLER
                  </div>
                )}
                <div className="p-8">
                  <h3 className="text-xl font-bold mb-2">{pkg.name}</h3>
                  <div className="mb-4">
                    <span className="text-5xl font-bold">{pkg.price}</span>
                  </div>
                  <p className="text-gray-300 mb-6">{pkg.subtitle}</p>

                  <ul className="space-y-3 mb-8">
                    {pkg.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <Check className="w-5 h-5 text-[#E8B33F] mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Button className="w-full bg-white text-gray-900 hover:bg-gray-100 font-bold py-6">
                    CANDIDATI ORA!
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
