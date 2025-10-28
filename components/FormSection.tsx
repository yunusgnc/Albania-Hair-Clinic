"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Image from "next/image";
import { AnimatedSection } from "@/components/AnimatedSection";

export function FormSection() {
  return (
    <section className="py-20 navy-bg">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Image */}
          <AnimatedSection animation="fade-in-right">
            <div className="relative">
              <Image
                src="https://ext.same-assets.com/788506488/4156855503.jpeg"
                alt="Hair Analysis"
                width={500}
                height={600}
                className="rounded-3xl w-full h-auto"
              />
            </div>
          </AnimatedSection>

          {/* Right Column - Form */}
          <AnimatedSection animation="fade-in-left" delay={200}>
            <div className="bg-white rounded-3xl p-8">
              <div className="mb-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  Invia le tue foto e ricevi un'analisi gratuita dei capelli!
                </h2>
                <Button className="gold-button text-white font-semibold w-full py-6 rounded-full mb-2">
                  Calcolo dell'innesto libero
                </Button>
                <p className="text-sm text-gray-600 text-center">
                  Ci vogliono solo 2 minuti per compilarlo
                </p>
              </div>

              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Nome e cognome: *
                  </label>
                  <Input
                    type="text"
                    placeholder="Il tuo nome"
                    className="w-full"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Telefono: *
                  </label>
                  <div className="flex gap-2">
                    <Input
                      type="tel"
                      placeholder="(201) 555-0123"
                      className="flex-1"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Lingua: *
                  </label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Italiano" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="it">Italiano</SelectItem>
                      <SelectItem value="en">English (Inglese)</SelectItem>
                      <SelectItem value="sq">Albanian (Albanese)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Categoria di servizi: *
                  </label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Hair Transplant" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="hair">Hair Transplant</SelectItem>
                      <SelectItem value="beard">Beard Transplant</SelectItem>
                      <SelectItem value="eyebrow">Eyebrow Transplant</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <Button className="bg-cyan-500 hover:bg-cyan-600 text-white font-semibold w-full py-6 rounded-lg">
                  Submit
                </Button>
              </form>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
