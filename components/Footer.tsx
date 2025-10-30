"use client";

import Image from "next/image";
import { Facebook, Instagram, Youtube, Mail, Phone, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="container mx-auto px-4 py-8 md:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-8">
          {/* Logo & Description */}
          <div className="col-span-1 sm:col-span-2 lg:col-span-1">
            <Image
              src="/img/icons/footer-logo.png"
              alt="Albania Hair Clinic"
              width={180}
              height={40}
              className="h-8 md:h-10 w-auto mb-3 md:mb-4"
              style={{ width: "auto", height: "auto" }}
            />
            <p className="text-gray-400 text-xs md:text-sm leading-relaxed">
              La migliore clinica per il trapianto di capelli in Albania. 
              Con oltre dieci anni di esperienza, garantiamo risultati eccezionali.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-base md:text-lg font-bold mb-3 md:mb-4 text-[#E8B33F]">Link Rapidi</h3>
            <ul className="space-y-1 md:space-y-2">
              <li>
                <a href="#aboutus" className="text-gray-400 hover:text-[#E8B33F] transition-colors text-xs md:text-sm">
                  Chi siamo
                </a>
              </li>
              <li>
                <a href="#pricing" className="text-gray-400 hover:text-[#E8B33F] transition-colors text-xs md:text-sm">
                  Prezzi
                </a>
              </li>
              <li>
                <a href="#videos" className="text-gray-400 hover:text-[#E8B33F] transition-colors text-xs md:text-sm">
                  I nostri video
                </a>
              </li>
              <li>
                <a href="#reviews" className="text-gray-400 hover:text-[#E8B33F] transition-colors text-xs md:text-sm">
                  Recensioni
                </a>
              </li>
              <li>
                <a href="#support" className="text-gray-400 hover:text-[#E8B33F] transition-colors text-xs md:text-sm">
                  Contatti
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-base md:text-lg font-bold mb-3 md:mb-4 text-[#E8B33F]">Servizi</h3>
            <ul className="space-y-1 md:space-y-2">
              <li className="text-gray-400 text-xs md:text-sm">Trapianto Capelli FUE</li>
              <li className="text-gray-400 text-xs md:text-sm">Trapianto Capelli DHI</li>
              <li className="text-gray-400 text-xs md:text-sm">Tecnica Hybrit</li>
              <li className="text-gray-400 text-xs md:text-sm">Trapianto Barba</li>
              <li className="text-gray-400 text-xs md:text-sm">Trapianto Sopracciglia</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-base md:text-lg font-bold mb-3 md:mb-4 text-[#E8B33F]">Contatti</h3>
            <ul className="space-y-2 md:space-y-3">
              <li className="flex items-start gap-2 text-xs md:text-sm">
                <Phone className="w-4 h-4 text-[#E8B33F] mt-0.5 flex-shrink-0" />
                <a href="tel:+355685055556" className="text-gray-400 hover:text-[#E8B33F] transition-colors break-all">
                  +355 685 055 556
                </a>
              </li>
              <li className="flex items-start gap-2 text-xs md:text-sm">
                <Mail className="w-4 h-4 text-[#E8B33F] mt-0.5 flex-shrink-0" />
                <a href="mailto:info@albaniahairclinic.com" className="text-gray-400 hover:text-[#E8B33F] transition-colors break-all">
                  info@albaniahairclinic.com
                </a>
              </li>
              <li className="flex items-start gap-2 text-xs md:text-sm">
                <MapPin className="w-4 h-4 text-[#E8B33F] mt-0.5 flex-shrink-0" />
                <span className="text-gray-400">
                  Tirana, Albania
                </span>
              </li>
            </ul>

            {/* Social Media */}
            <div className="flex gap-3 mt-4 md:mt-6">
              <a
                href="#"
                className="w-9 h-9 md:w-10 md:h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-[#E8B33F] transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4 md:w-5 md:h-5" />
              </a>
              <a
                href="#ig"
                className="w-9 h-9 md:w-10 md:h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-[#E8B33F] transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4 md:w-5 md:h-5" />
              </a>
              <a
                href="#"
                className="w-9 h-9 md:w-10 md:h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-[#E8B33F] transition-colors"
                aria-label="YouTube"
              >
                <Youtube className="w-4 h-4 md:w-5 md:h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-6 md:pt-8 mt-6 md:mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs md:text-sm">
            <p className="text-gray-400">
              © {new Date().getFullYear()} Albania Hair Clinic. Tutti i diritti riservati.
            </p>
            <div className="flex flex-wrap gap-3 md:gap-6 justify-center md:justify-end">
              <a href="#" className="text-gray-400 hover:text-[#E8B33F] transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-[#E8B33F] transition-colors">
                Termini e Condizioni
              </a>
              <a href="#" className="text-gray-400 hover:text-[#E8B33F] transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

