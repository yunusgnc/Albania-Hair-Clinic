"use client";

import { AnimatedSection } from "@/components/AnimatedSection";
import { motion } from "framer-motion";

export function StatsSection() {
  const stats = [
    {
      number: "10+",
      label: "Anni di Esperienza",
    },
    {
      number: "3000+",
      label: "Pazienti Felici",
    },
    {
      number: "15+",
      label: "Medici Esperti",
    },
    {
      number: "98%",
      label: "Tasso di Successo",
    },
  ];

  return (
    <section className="py-16 bg-gradient-to-r from-[#1E293B] to-[#0F172A]">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <AnimatedSection
              key={index}
              animation="fade-in-up"
              delay={index * 100}
            >
              <div className="text-center">
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    type: "spring",
                    stiffness: 100,
                    delay: index * 0.1,
                  }}
                >
                  <h3 className="text-4xl md:text-5xl font-bold text-[#E8B33F] mb-2">
                    {stat.number}
                  </h3>
                  <p className="text-white text-sm md:text-base">
                    {stat.label}
                  </p>
                </motion.div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}

