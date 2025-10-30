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
    if (document.readyState === 'complete') {
      handlePageLoad();
    } else {
      // Sayfa yükleniyorsa
      window.addEventListener('load', handlePageLoad);
      return () => window.removeEventListener('load', handlePageLoad);
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
            className="fixed inset-0 z-[70] flex items-center justify-center px-4 py-6 pointer-events-none"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="w-full max-w-sm bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-3xl shadow-2xl overflow-hidden border border-slate-700/50 relative pointer-events-auto">
              <motion.button
                onClick={handleClose}
                whileHover={{ scale: 1.1, rotate: 90 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.2 }}
                className="absolute top-5 right-5 z-[80] p-2.5 bg-gradient-to-br from-slate-700 to-slate-800 hover:from-slate-600 hover:to-slate-700 rounded-full transition-all shadow-lg border border-slate-600/50"
                aria-label="Kapat"
              >
                <X className="w-5 h-5 text-white" strokeWidth={3} />
              </motion.button>

              {/* Image */}
              <div className="relative h-56 sm:h-64 overflow-hidden bg-gradient-to-br from-emerald-600 to-slate-900">
                <Image
                  src="/img/promo-modal.png"
                  alt="Trapianto di capelli"
                  fill
                  className="object-contain"
                  sizes="(max-width: 640px) 100vw, 28rem"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent" />
              </div>

              {/* Content */}
              <div className="px-6 py-8 sm:py-10">
                <h2 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent mb-3 text-center">
                  Të gjitha përfshirë: 1150€
                </h2>

                <p className="text-sm sm:text-base text-gray-400 mb-8 text-center font-medium">
                  Planifiko transplantimin e flokëve me mjekët turq
                </p>

                <div className="space-y-3 mb-8">
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <span className="text-emerald-400 text-xl flex-shrink-0 mt-0.5">✓</span>
                    <span className="text-sm sm:text-base text-gray-300">
                      Operacioni me teknikën FUE Sapphire
                    </span>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.15 }}
                    className="flex items-start gap-3"
                  >
                    <span className="text-emerald-400 text-xl flex-shrink-0 mt-0.5">✓</span>
                    <span className="text-sm sm:text-base text-gray-300">
                      Testet e gjakut (Para operacionit)
                    </span>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 }}
                    className="flex items-start gap-3"
                  >
                    <span className="text-emerald-400 text-xl flex-shrink-0 mt-0.5">✓</span>
                    <span className="text-sm sm:text-base text-gray-300">
                      Ilaçet pas operacionit
                    </span>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.25 }}
                    className="flex items-start gap-3"
                  >
                    <span className="text-emerald-400 text-xl flex-shrink-0 mt-0.5">✓</span>
                    <span className="text-sm sm:text-base text-gray-300">
                      Hotel 5 Yllesh 2 Net (Mëngjes përfshirë)
                    </span>
                  </motion.div>
                </div>

                <motion.button
                  onClick={handleWhatsAppClick}
                  whileTap={{ scale: 0.95 }}
                  whileHover={{ scale: 1.02 }}
                  className="w-full bg-gradient-to-r from-emerald-500 via-emerald-400 to-emerald-500 hover:from-emerald-600 hover:via-emerald-500 hover:to-emerald-600 text-white font-bold py-4 px-6 rounded-xl transition-all flex items-center justify-center gap-3 shadow-lg shadow-emerald-500/30 text-base sm:text-lg mb-3 border border-emerald-400/30"
                >
                  <MessageCircle className="w-6 h-6" />
                  FILLO CHAT NGA WHATSAPP
                </motion.button>

                <motion.button
                  onClick={handleClose}
                  whileHover={{ opacity: 0.8 }}
                  className="w-full text-gray-500 hover:text-gray-400 text-sm font-medium transition-colors py-2"
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
