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
                  <svg className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
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