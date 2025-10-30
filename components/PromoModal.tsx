"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X } from "lucide-react";
import Image from "next/image";

export function PromoModal() {
  const [isOpen, setIsOpen] = useState(false);
  const whatsappLink = "https://wa.link/a7fuu7";

  useEffect(() => {
    // Modal'ı sayfa tamamen yüklendikten sonra aç
    const handlePageLoad = () => {
      const timer = setTimeout(() => {
        setIsOpen(true);
      }, 1500); // Sayfa yüklendikten 1.5 saniye sonra

      return () => clearTimeout(timer);
    };

    // Eğer sayfa zaten yüklenmişse (cached)
    if (document.readyState === "complete") {
      handlePageLoad();
    } else {
      // Sayfa yükleniyorsa
      window.addEventListener("load", handlePageLoad);
      return () => window.removeEventListener("load", handlePageLoad);
    }
  }, []);

  const handleWhatsAppClick = () => {
    setIsOpen(false);
    window.open(whatsappLink, "_blank");
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Overlay - tıklandığında kapat */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            className="fixed inset-0 bg-black/60 z-[60] backdrop-blur-sm"
          />

          {/* Modal */}
          <motion.div
            initial={{ scale: 0.92, opacity: 0, y: 50 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.92, opacity: 0, y: 50 }}
            transition={{ type: "spring", stiffness: 350, damping: 30 }}
            className="fixed inset-0 z-[70] flex items-center justify-center p-4 pointer-events-none overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="w-full max-w-[95vw] xs:max-w-[90vw] sm:max-w-md md:max-w-lg my-auto bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-2xl sm:rounded-3xl shadow-2xl overflow-hidden border border-slate-700/50 relative pointer-events-auto">
              <motion.button
                onClick={handleClose}
                whileHover={{ scale: 1.1, rotate: 90 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.2 }}
                className="absolute top-2 right-2 sm:top-3 sm:right-3 z-[80] p-1.5 sm:p-2 bg-gradient-to-br from-slate-700 to-slate-800 hover:from-slate-600 hover:to-slate-700 rounded-full transition-all shadow-lg border border-slate-600/50"
                aria-label="Kapat"
              >
                <X
                  className="w-4 h-4 sm:w-5 sm:h-5 text-white"
                  strokeWidth={3}
                />
              </motion.button>

              {/* Image */}
              <div className="relative h-32 xs:h-36 sm:h-44 md:h-52 overflow-hidden bg-gradient-to-br from-emerald-600 to-slate-900">
                <Image
                  src="/img/promo-modal.png"
                  alt="Trapianto di capelli"
                  fill
                  className="object-contain"
                  sizes="(max-width: 640px) 95vw, (max-width: 768px) 90vw, 28rem"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent" />
              </div>

              {/* Content */}
              <div className="px-3 xs:px-4 sm:px-5 md:px-6 py-3 xs:py-4 sm:py-5">
                <h2 className="text-lg xs:text-xl sm:text-2xl md:text-3xl font-bold bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent mb-1.5 sm:mb-2 text-center leading-tight">
                  Të gjitha përfshirë: 1150€
                </h2>

                <p className="text-[11px] xs:text-xs sm:text-sm text-gray-400 mb-3 sm:mb-4 text-center font-medium">
                  Planifiko transplantimin e flokëve me mjekët turq
                </p>

                <div className="space-y-1.5 sm:space-y-2 mb-3 sm:mb-4">
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 }}
                    className="flex items-start gap-1.5 sm:gap-2"
                  >
                    <span className="text-emerald-400 text-sm xs:text-base sm:text-lg flex-shrink-0 mt-0.5">
                      ✓
                    </span>
                    <span className="text-[11px] xs:text-xs sm:text-sm text-gray-300 leading-snug">
                      Operacioni me teknikën FUE Sapphire
                    </span>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.15 }}
                    className="flex items-start gap-1.5 sm:gap-2"
                  >
                    <span className="text-emerald-400 text-sm xs:text-base sm:text-lg flex-shrink-0 mt-0.5">
                      ✓
                    </span>
                    <span className="text-[11px] xs:text-xs sm:text-sm text-gray-300 leading-snug">
                      Testet e gjakut (Para operacionit)
                    </span>
                  </motion.div>
                </div>

                <motion.button
                  onClick={handleWhatsAppClick}
                  whileTap={{ scale: 0.95 }}
                  whileHover={{ scale: 1.02 }}
                  className="w-full bg-gradient-to-r from-emerald-500 via-emerald-400 to-emerald-500 hover:from-emerald-600 hover:via-emerald-500 hover:to-emerald-600 text-white font-bold py-2 xs:py-2.5 sm:py-3 px-3 xs:px-4 sm:px-6 rounded-lg sm:rounded-xl transition-all flex items-center justify-center gap-1.5 sm:gap-2 shadow-lg shadow-emerald-500/30 text-[11px] xs:text-xs sm:text-sm md:text-base mb-1.5 sm:mb-2 border border-emerald-400/30"
                >
                  <MessageCircle className="w-3.5 h-3.5 xs:w-4 xs:h-4 sm:w-5 sm:h-5 flex-shrink-0" />
                  <span className="leading-tight">FILLO CHAT NGA WHATSAPP</span>
                </motion.button>

                <motion.button
                  onClick={handleClose}
                  whileHover={{ opacity: 0.8 }}
                  className="w-full text-gray-500 hover:text-gray-400 text-[10px] xs:text-xs font-medium transition-colors py-1 sm:py-1.5"
                >
                  Më vonë
                </motion.button>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
