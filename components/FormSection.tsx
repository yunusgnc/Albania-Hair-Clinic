"use client";

import { AnimatedSection } from "@/components/AnimatedSection";
import Image from "next/image";
import { useState, useEffect } from "react";
import { PhoneInput } from "react-international-phone";
import { motion } from "framer-motion";
import axios from "axios";
import "react-international-phone/style.css";

export function FormSection() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    countryCode: "it",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  // Hidden fields - Backend only
  const HIDDEN_FIELDS = {
    languageId: 221, // Italiano
    serviceCategoryId: 117, // Hair Transplant
    brandId: 9465, // AHC
    sourceId: "UC_RUZYB5", // Google Ads
  };

  useEffect(() => {
    fetch("https://ipapi.co/json/")
      .then((res) => res.json())
      .then((data) => {
        if (data && data.country_code) {
          const lowerCode = data.country_code.toLowerCase();
          setFormData((prev) => ({ ...prev, countryCode: lowerCode }));
        }
      })
      .catch(() => console.warn("IP verisi alınamadı"));
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handlePhoneChange = (phone: string, meta: { country: { iso2: string } }) => {
    const cleanPhone = phone.replace(/\s+/g, "");
    const lowerCode = meta?.country?.iso2
      ? meta.country.iso2.toLowerCase()
      : formData.countryCode;
    setFormData((prev) => ({
      ...prev,
      phone: cleanPhone,
      countryCode: lowerCode,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess(false);

    const formattedPhone = formData.phone.startsWith("+")
      ? formData.phone
      : `+${formData.phone}`;

    const payload = {
      fields: {
        UF_CRM_1690810173903: formData.fullName, // Full Name
        EMAIL: [{ VALUE: formData.email, VALUE_TYPE: "WORK" }],
        PHONE: [{ VALUE: formattedPhone, VALUE_TYPE: "WORK" }],
        UF_CRM_1690811363903: HIDDEN_FIELDS.languageId, // Language ID (Hidden)
        UF_CRM_1692096041508: HIDDEN_FIELDS.serviceCategoryId, // Services Category ID (Hidden)
        UF_CRM_1697534152: HIDDEN_FIELDS.brandId, // Brand ID (Hidden)
        SOURCE_ID: HIDDEN_FIELDS.sourceId, // Source (Hidden)
      },
    };

    try {
      // Next.js API route'a istek at (CORS problemi yok)
      const response = await axios.post("/api/bitrix24/submit", payload);
      
      if (!response.data.success) {
        throw new Error(response.data.error || "Form gönderilemedi");
      }
      
      setSuccess(true);
      // Reset form
      setFormData({
        fullName: "",
        email: "",
        phone: "",
        countryCode: formData.countryCode,
      });

      // Hide success message after 3 seconds
      setTimeout(() => setSuccess(false), 3000);
    } catch (err) {
      console.error("Form gönderme hatası:", err);
      setError("Form gönderilemedi. Lütfen tekrar deneyin.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <section className="py-6 sm:py-12 md:py-20 bg-[#0A1628] rounded-2xl md:rounded-[40px] mx-3 sm:mx-4 md:mx-8 lg:mx-8">
        <div className="container mx-auto px-3 sm:px-4 md:px-6 max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-6 lg:gap-8 items-center">
            <AnimatedSection
              animation="fade-in-right"
              className="md:col-span-1 order-2 md:order-1"
            >
              <div className="relative rounded-2xl md:rounded-3xl overflow-hidden h-48 sm:h-64 md:h-80 lg:h-auto">
                <Image
                  src="/img/wordpress/Adsiz-tasarim-4.webp"
                  alt="Hair Analysis"
                  width={500}
                  height={600}
                  className="w-full h-full object-cover rounded-2xl md:rounded-3xl"
                />
              </div>
            </AnimatedSection>

            <AnimatedSection
              animation="fade-in-up"
              delay={100}
              className="md:col-span-1 order-1 md:order-2"
            >
              <div className="text-center md:text-center">
                <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white leading-tight mb-3 sm:mb-4 md:mb-8">
                  Invia le tue foto e ricevi un'analisi gratuita dei capelli!
                </h2>
                <p className="text-xs sm:text-sm text-gray-300 text-center">
                  Ci vogliono solo <strong>2 minuti</strong> per compilarlo
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection
              animation="fade-in-left"
              delay={200}
              className="md:col-span-1 lg:col-span-1 order-3"
            >
               <motion.form
                 onSubmit={handleSubmit}
                 initial={{ opacity: 0, scale: 0.95 }}
                 animate={{ opacity: 1, scale: 1 }}
                 transition={{ duration: 0.5, ease: "easeOut" }}
                 className="bg-white shadow-2xl rounded-3xl p-6 sm:p-8 space-y-5 border border-gray-100"
               >
                {/* Full Name */}
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.1 }}
                >
                  <label className="block text-xs font-bold text-gray-700 uppercase tracking-wide mb-2">
                    Nome Completo <span className="text-red-500">*</span>
                  </label>
                  <motion.input
                    whileFocus={{ scale: 1.01 }}
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="Il tuo nome e cognome"
                    required
                    className="w-full bg-white border-2 border-gray-200 rounded-xl px-4 py-3 focus:ring-4 focus:ring-cyan-500/20 focus:border-cyan-500 placeholder-gray-400 text-gray-900 transition-all"
                  />
                </motion.div>

                {/* Email */}
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  <label className="block text-xs font-bold text-gray-700 uppercase tracking-wide mb-2">
                    Email <span className="text-red-500">*</span>
                  </label>
                  <motion.input
                    whileFocus={{ scale: 1.01 }}
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="tua@email.com"
                    required
                    className="w-full bg-white border-2 border-gray-200 rounded-xl px-4 py-3 focus:ring-4 focus:ring-cyan-500/20 focus:border-cyan-500 placeholder-gray-400 text-gray-900 transition-all"
                  />
                </motion.div>

                 {/* Phone */}
                 <motion.div
                   initial={{ y: 20, opacity: 0 }}
                   animate={{ y: 0, opacity: 1 }}
                   transition={{ delay: 0.3 }}
                 >
                   <label className="block text-xs font-bold text-gray-700 uppercase tracking-wide mb-2">
                     Telefono <span className="text-red-500">*</span>
                   </label>
                   <motion.div
                     whileFocus={{ scale: 1.01 }}
                     className="relative w-full border-2 border-gray-200 rounded-xl bg-white focus-within:ring-4 focus-within:ring-cyan-500/20 focus-within:border-cyan-500 transition-all [&_.react-international-phone-input]:!bg-transparent [&_.react-international-phone-input]:!border-none [&_.react-international-phone-input]:!shadow-none [&_.react-international-phone-input]:text-gray-900 [&_.react-international-phone-input]:py-3 [&_.react-international-phone-country-selector-button]:!bg-transparent [&_.react-international-phone-country-selector-button]:!border-none"
                   >
                     <PhoneInput
                       defaultCountry={formData.countryCode}
                       value={formData.phone}
                       onChange={handlePhoneChange}
                       disableCountryGuess={false}
                       inputProps={{ required: true }}
                     />
                   </motion.div>
                 </motion.div>

                {/* Submit Button */}
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  disabled={loading}
                  className="w-full bg-gradient-to-r from-cyan-500 to-cyan-600 text-white rounded-xl py-4 font-bold text-base tracking-wide shadow-lg shadow-cyan-500/30 hover:shadow-xl hover:shadow-cyan-500/40 transition-all disabled:opacity-50 disabled:cursor-not-allowed uppercase"
                >
                  {loading ? (
                    <span className="flex items-center justify-center gap-2">
                      <svg
                        className="animate-spin h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        />
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        />
                      </svg>
                      Invio in corso...
                    </span>
                  ) : (
                    "Invia la Richiesta"
                  )}
                </motion.button>

                {/* Success Message */}
                {success && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-green-50 border-2 border-green-200 text-green-700 px-4 py-3 rounded-xl text-center font-semibold"
                  >
                    ✓ Inviato con successo!
                  </motion.div>
                )}

                {/* Error Message */}
                {error && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-red-50 border-2 border-red-200 text-red-700 px-4 py-3 rounded-xl text-center font-semibold"
                  >
                    {error}
                  </motion.div>
                )}
              </motion.form>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </>
  );
}
