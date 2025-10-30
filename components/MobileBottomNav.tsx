"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Home, Tag, Star, Users, MessageCircle } from "lucide-react";

interface NavItem {
  label: string;
  href: `#${string}`;
  icon: typeof Home;
}

const navItems: NavItem[] = [
  { label: "Ana Sayfa", href: "#hero", icon: Home },
  { label: "Fiyatlar", href: "#pricing", icon: Tag },
  { label: "Yorumlar", href: "#reviews", icon: Star },
  { label: "Ekibimiz", href: "#aboutus", icon: Users },
];

export function MobileBottomNav() {
  const [activeSection, setActiveSection] = useState<`#${string}`>("#hero");
  const activeRef = useRef<`#${string}`>("#hero");
  const whatsappLink = "https://wa.link/a7fuu7";

  useEffect(() => {
    const handleScroll = () => {
      const threshold = window.innerHeight * 0.25;
      let current: `#${string}` = activeRef.current;

      navItems.forEach((item) => {
        const section = document.querySelector<HTMLElement>(item.href);
        if (!section) return;
        const rect = section.getBoundingClientRect();
        if (rect.top <= threshold && rect.bottom >= threshold) {
          current = item.href;
        }
      });

      if (current !== activeRef.current) {
        setActiveSection(current);
        activeRef.current = current;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="lg:hidden fixed inset-x-0 bottom-0 z-50">
      <div className="w-full px-1 pb-[env(safe-area-inset-bottom,0.5rem)]">
        <nav className="relative bg-white/95 backdrop-blur-2xl rounded-xl px-0 py-1 shadow-xl border border-white/60">
          <div className="grid grid-cols-5 items-center gap-1">
            {/* İlk 2 menü öğesi */}
            {navItems.slice(0, 2).map((item) => {
              const Icon = item.icon;
              const isActive = activeSection === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-label={item.label}
                  onClick={() => {
                    setActiveSection(item.href);
                    activeRef.current = item.href;
                  }}
                  className="flex flex-col items-center gap-1 py-1"
                >
                  <span
                    className={`rounded-full p-2 transition-colors duration-200 ${
                      isActive
                        ? "bg-[#06B6D4]/15 text-[#06B6D4]"
                        : "text-slate-500"
                    }`}
                  >
                    <Icon className="h-5 w-5" />
                  </span>
                  <span
                    className={`text-[11px] font-medium transition-colors duration-200 ${
                      isActive ? "text-[#0E7490]" : "text-slate-500"
                    }`}
                  >
                    {item.label}
                  </span>
                </Link>
              );
            })}

            {/* Ortadaki WhatsApp Butonu */}
            <motion.a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp ile iletişime geç"
              className="flex flex-col items-center gap-1 py-1"
              whileTap={{ scale: 0.92 }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="relative">
                <span className="absolute inset-0 rounded-full bg-emerald-400/30 blur-lg" aria-hidden="true" />
                <div className="relative bg-gradient-to-br from-emerald-500 via-emerald-400 to-emerald-500 text-white rounded-full p-3 shadow-xl border-2 border-white/80">
                  <MessageCircle className="h-6 w-6" />
                </div>
              </div>
              <span className="text-[11px] font-medium text-emerald-600">
                WhatsApp
              </span>
            </motion.a>

            {/* Son 2 menü öğesi */}
            {navItems.slice(2, 4).map((item) => {
              const Icon = item.icon;
              const isActive = activeSection === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-label={item.label}
                  onClick={() => {
                    setActiveSection(item.href);
                    activeRef.current = item.href;
                  }}
                  className="flex flex-col items-center gap-1 py-1"
                >
                  <span
                    className={`rounded-full p-2 transition-colors duration-200 ${
                      isActive
                        ? "bg-[#06B6D4]/15 text-[#06B6D4]"
                        : "text-slate-500"
                    }`}
                  >
                    <Icon className="h-5 w-5" />
                  </span>
                  <span
                    className={`text-[11px] font-medium transition-colors duration-200 ${
                      isActive ? "text-[#0E7490]" : "text-slate-500"
                    }`}
                  >
                    {item.label}
                  </span>
                </Link>
              );
            })}
          </div>
        </nav>
      </div>
    </div>
  );
}