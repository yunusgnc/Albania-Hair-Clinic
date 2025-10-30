"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { label: "Prezzi", href: "#pricing" },
    { label: "Appuntamento", href: "#support" },
    { label: "I nostri video", href: "#videos" },
    { label: "Recensioni", href: "#reviews" },
    { label: "Instagram", href: "#ig" },
    { label: "Chi siamo", href: "#aboutus" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 bg-black shadow-lg z-50 w-full">
      <div className="container mx-auto px-3 sm:px-4 md:px-6 py-3 sm:py-4 flex items-center justify-between max-w-full overflow-hidden">
        <Link href="#hero" className="flex items-center flex-shrink-0" aria-label="Sayfanın başına dön">
          <Image
            src="/img/logo.png"
            alt="Albania Hair Clinic"
            width={200}
            height={45}
            className="h-8 sm:h-10 md:h-12 w-auto cursor-pointer"
            priority
          />
        </Link>

        <nav className="hidden lg:flex items-center gap-4 xl:gap-6 flex-shrink-0">
          {menuItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-xs xl:text-sm font-medium text-white hover:text-[#E8B33F] transition-colors relative group whitespace-nowrap"
            >
              {item.label}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#E8B33F] group-hover:w-full transition-all duration-300"></span>
            </a>
          ))}
        </nav>

        <div className="hidden lg:block flex-shrink-0">
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            <a href="https://wa.link/a7fuu7" target="_blank" rel="noopener noreferrer">
              <Button className="gold-button text-white font-semibold px-4 xl:px-6 py-4 xl:py-5 rounded-full text-xs xl:text-sm shadow-lg hover:shadow-xl transition-shadow relative overflow-hidden group whitespace-nowrap">
                <span className="relative z-10">Prenota un appuntamento</span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-[#F5C563] to-[#E8B33F]"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "0%" }}
                  transition={{ duration: 0.3 }}
                />
              </Button>
            </a>
          </motion.div>
        </div>

        <button
          className="lg:hidden p-2 text-white flex-shrink-0"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="lg:hidden bg-black border-t border-gray-800 w-full"
        >
          <nav className="container mx-auto px-3 sm:px-4 py-3 sm:py-4 flex flex-col gap-2 sm:gap-3 max-w-full">
            {menuItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-white hover:text-[#E8B33F] transition-colors py-2 px-2 hover:bg-gray-900 rounded-lg"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <a href="https://wa.link/a7fuu7" target="_blank" rel="noopener noreferrer" onClick={() => setIsMenuOpen(false)}>
              <Button className="gold-button text-white font-semibold w-full mt-2 py-4 sm:py-5 rounded-full text-sm">
                Prenota un appuntamento
              </Button>
            </a>
          </nav>
        </motion.div>
      )}
    </header>
  );
}
