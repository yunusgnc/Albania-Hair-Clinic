"use client";

import Image from "next/image";
import { Facebook, Instagram, Youtube, Mail, Phone, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Logo & Description */}
          <div>
            <Image
              src="https://ext.same-assets.com/788506488/2333292303.png"
              alt="Albania Hair Clinic"
              width={180}
              height={40}
              className="h-10 w-auto mb-4"
            />
            <p className="text-gray-400 text-sm leading-relaxed">
              La migliore clinica per il trapianto di capelli in Albania. 
              Con oltre dieci anni di esperienza, garantiamo risultati eccezionali.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-[#E8B33F]">Link Rapidi</h3>
            <ul className="space-y-2">
              <li>
                <a href="#aboutus" className="text-gray-400 hover:text-[#E8B33F] transition-colors text-sm">
                  Chi siamo
                </a>
              </li>
              <li>
                <a href="#pricing" className="text-gray-400 hover:text-[#E8B33F] transition-colors text-sm">
                  Prezzi
                </a>
              </li>
              <li>
                <a href="#videos" className="text-gray-400 hover:text-[#E8B33F] transition-colors text-sm">
                  I nostri video
                </a>
              </li>
              <li>
                <a href="#reviews" className="text-gray-400 hover:text-[#E8B33F] transition-colors text-sm">
                  Recensioni
                </a>
              </li>
              <li>
                <a href="#support" className="text-gray-400 hover:text-[#E8B33F] transition-colors text-sm">
                  Contatti
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-[#E8B33F]">Servizi</h3>
            <ul className="space-y-2">
              <li className="text-gray-400 text-sm">Trapianto Capelli FUE</li>
              <li className="text-gray-400 text-sm">Trapianto Capelli DHI</li>
              <li className="text-gray-400 text-sm">Tecnica Hybrit</li>
              <li className="text-gray-400 text-sm">Trapianto Barba</li>
              <li className="text-gray-400 text-sm">Trapianto Sopracciglia</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-[#E8B33F]">Contatti</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-sm">
                <Phone className="w-4 h-4 text-[#E8B33F] mt-1 flex-shrink-0" />
                <a href="tel:+355685055556" className="text-gray-400 hover:text-[#E8B33F] transition-colors">
                  +355 685 055 556
                </a>
              </li>
              <li className="flex items-start gap-2 text-sm">
                <Mail className="w-4 h-4 text-[#E8B33F] mt-1 flex-shrink-0" />
                <a href="mailto:info@albaniahairclinic.com" className="text-gray-400 hover:text-[#E8B33F] transition-colors">
                  info@albaniahairclinic.com
                </a>
              </li>
              <li className="flex items-start gap-2 text-sm">
                <MapPin className="w-4 h-4 text-[#E8B33F] mt-1 flex-shrink-0" />
                <span className="text-gray-400">
                  Tirana, Albania
                </span>
              </li>
            </ul>

            {/* Social Media */}
            <div className="flex gap-3 mt-6">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-[#E8B33F] transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#ig"
                className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-[#E8B33F] transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-[#E8B33F] transition-colors"
                aria-label="YouTube"
              >
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Albania Hair Clinic. Tutti i diritti riservati.
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-gray-400 hover:text-[#E8B33F] transition-colors text-sm">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-[#E8B33F] transition-colors text-sm">
                Termini e Condizioni
              </a>
              <a href="#" className="text-gray-400 hover:text-[#E8B33F] transition-colors text-sm">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

