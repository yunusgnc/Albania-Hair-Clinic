"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import Image from "next/image";
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
    <header className="fixed top-0 left-0 right-0 bg-black shadow-lg z-50">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <Image
            src="https://ext.same-assets.com/788506488/2333292303.png"
            alt="Albania Hair Clinic"
            width={200}
            height={45}
            className="h-12 w-auto"
            priority
          />
        </div>

        {/* Desktop Menu */}
        <nav className="hidden lg:flex items-center gap-8">
          {menuItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-white hover:text-[#E8B33F] transition-colors relative group"
            >
              {item.label}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#E8B33F] group-hover:w-full transition-all duration-300"></span>
            </a>
          ))}
        </nav>

        {/* Animated Button */}
        <div className="hidden lg:block">
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            <Button className="gold-button text-white font-semibold px-8 py-6 rounded-full text-base shadow-lg hover:shadow-xl transition-shadow relative overflow-hidden group">
              <span className="relative z-10">Prenota un appuntamento</span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-[#F5C563] to-[#E8B33F]"
                initial={{ x: "-100%" }}
                whileHover={{ x: "0%" }}
                transition={{ duration: 0.3 }}
              />
            </Button>
          </motion.div>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden p-2 text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="lg:hidden bg-black border-t border-gray-800"
        >
          <nav className="container mx-auto px-4 py-4 flex flex-col gap-4">
            {menuItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-white hover:text-[#E8B33F] transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <Button className="gold-button text-white font-semibold w-full mt-2 py-6 rounded-full">
              Prenota un appuntamento
            </Button>
          </nav>
        </motion.div>
      )}
    </header>
  );
}
