"use client";

import { AnimatedSection } from "@/components/AnimatedSection";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

declare global {
  interface Window {
    intlTelInput?: (
      el: HTMLInputElement,
      options: Record<string, unknown>
    ) => {
      getSelectedCountryData: () => { dialCode: string };
      destroy: () => void;
    };
  }
}

export function FormSection() {
  const bitrixContainerRef = useRef<HTMLDivElement>(null);
  const hasInitializedRef = useRef(false);
  const formLoadedRef = useRef(false);
  const [isFormLoaded, setIsFormLoaded] = useState(false);
  const [loadError, setLoadError] = useState<string | null>(null);

  useEffect(() => {
    if (hasInitializedRef.current) {
      return;
    }
    hasInitializedRef.current = true;

    const containerElement = bitrixContainerRef.current;

    if (!containerElement) {
      hasInitializedRef.current = false;
      return;
    }

    let isCancelled = false;
    const appendedNodes: HTMLElement[] = [];
    const cleanupFns: Array<() => void> = [];

    const addStyle = (css: string) => {
      const style = document.createElement("style");
      style.textContent = css;
      document.head.appendChild(style);
      appendedNodes.push(style);
    };

    addStyle(`
      .b24-form-sign {
        display: none !important;
      }
    `);

    const intlCss = document.createElement("link");
    intlCss.rel = "stylesheet";
    intlCss.href =
      "https://vps.genesis-system.site/cdn/intl/css/intlTelInput.css";
    document.head.appendChild(intlCss);
    appendedNodes.push(intlCss as HTMLElement);

    const loadScript = (src: string, target: HTMLElement = document.body) =>
      new Promise<void>((resolve, reject) => {
        const script = document.createElement("script");
        script.src = src;
        script.async = false;
        script.onload = () => resolve();
        script.onerror = () =>
          reject(new Error(`Failed to load external script: ${src}`));
        target.appendChild(script);
        appendedNodes.push(script);
      });

    const injectBitrixForm = (target: HTMLDivElement) => {
      const existingScript = target.querySelector("script[data-b24-form]");

      if (existingScript) {
        return;
      }

      target.innerHTML = "";

      const script = document.createElement("script");
      script.src = `https://cdn.bitrix24.com.tr/b26357199/crm/form/loader_1107.js?${
        Math.floor(Date.now() / 180000)
      }`;
      script.async = true;
      script.setAttribute("data-b24-form", "inline/1107/n9fgnb");
      script.setAttribute("data-skip-moving", "true");
      target.appendChild(script);

      let checkCount = 0;

      const intervalId = window.setInterval(() => {
        if (isCancelled) {
          window.clearInterval(intervalId);
          return;
        }

        if (!window.intlTelInput) {
          checkCount += 1;
          if (checkCount > 3) {
            window.clearInterval(intervalId);
            if (!formLoadedRef.current) {
              setLoadError(
                "Form kaynakları yüklenirken bir sorun oluştu. Lütfen sayfayı yenileyin."
              );
            }
          }
          return;
        }

        const inputs = document.querySelectorAll<HTMLInputElement>(
          ".b24-form input[name='phone']"
        );

        inputs.forEach((inputElement) => {
          if (inputElement.classList.contains("iti-initialized")) {
            return;
          }

          inputElement.classList.add("iti-initialized");

          const iti = window.intlTelInput?.(inputElement, {
          initialCountry: "auto",
            geoIpLookup: (callback: (code: string) => void) => {
            fetch("https://ipapi.co/json")
              .then((res) => res.json())
              .then((data) => callback(data.country_code))
              .catch(() => callback("us"));
          },
          utilsScript:
            "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/18.2.1/js/utils.js",
        });

          const handleInput = () => {
            if (!iti) {
              return;
            }

            const rawValue = inputElement.value.replace(/[^0-9]+/g, "");
            const dialCode = iti.getSelectedCountryData().dialCode;

            if (!rawValue.startsWith(dialCode)) {
              inputElement.value = `+${dialCode}${rawValue}`;
            } else {
              inputElement.value = `+${rawValue}`;
            }
          };

          inputElement.addEventListener("input", handleInput);
          cleanupFns.push(() =>
            inputElement.removeEventListener("input", handleInput)
          );
        });

        if (inputs.length > 0) {
          if (!formLoadedRef.current) {
            formLoadedRef.current = true;
            setLoadError(null);
            setIsFormLoaded(true);
          }
          window.clearInterval(intervalId);
          return;
        }

        checkCount += 1;
        if (checkCount > 3 && !formLoadedRef.current) {
          window.clearInterval(intervalId);
          setLoadError(
            "Form yüklenirken bir sorun oluştu. Lütfen daha sonra tekrar deneyin."
          );
        }
      }, 1000);

      cleanupFns.push(() => window.clearInterval(intervalId));
    };

    const init = async () => {
      try {
        await loadScript(
          "https://cdn.jsdelivr.net/npm/intl-tel-input@18.2.1/build/js/intlTelInput.min.js"
        );
        injectBitrixForm(containerElement);
      } catch (error) {
        console.error("Bitrix form initialization error:", error);
        if (!isCancelled) {
          setLoadError(
            "Form kaynakları yüklenemedi. Lütfen daha sonra tekrar deneyin."
          );
        }
      }
    };

    init();

    return () => {
      isCancelled = true;
      cleanupFns.forEach((fn) => fn());
      appendedNodes.forEach((node) => node.parentNode?.removeChild(node));
      containerElement.innerHTML = "";
      formLoadedRef.current = false;
      hasInitializedRef.current = false;
    };
  }, []);

  return (
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
            <style>{`
  .bitrix-form-wrapper {
    background: linear-gradient(135deg, rgba(255, 255, 255, 0.95) 0%, rgba(248, 250, 252, 0.98) 100%);
    border-radius: 24px;
    box-shadow: 0 20px 60px rgba(0, 0, 0, 0.15), 0 0 0 1px rgba(255, 255, 255, 0.1);
    padding: 0;
    min-height: 400px;
    position: relative;
                backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.2);
  }

  .bitrix-form-wrapper .b24-form {
    background: transparent !important;
    padding: 0 !important;
    box-shadow: none !important;
    border: none !important;
  }

  .bitrix-form-wrapper .b24-form-field {
    margin-bottom: 24px !important;
    position: relative !important;
  }

  /* Modern label styling - HER ZAMAN ÜSTTE GÖRÜNSÜN */
  .bitrix-form-wrapper .b24-form-control-label {
    display: block !important;
    visibility: visible !important;
    opacity: 1 !important;
    color: #1E293B !important;
    font-size: 13px !important;
    font-weight: 700 !important;
    margin-bottom: 8px !important;
    text-transform: uppercase !important;
    letter-spacing: 0.8px !important;
    position: relative !important;
    transform: none !important;
    top: 0 !important;
    left: 0 !important;
    z-index: 1 !important;
    line-height: 1.45 !important;
    pointer-events: auto !important;
  }

  /* Label için ek güçlendirme */
  .bitrix-form-wrapper .b24-form-field .b24-form-control-label,
  .bitrix-form-wrapper .b24-form-control-container .b24-form-control-label {
    display: block !important;
    visibility: visible !important;
    opacity: 1 !important;
    height: auto !important;
    max-height: none !important;
    overflow: visible !important;
  }

  .bitrix-form-wrapper .b24-form-control-label .b24-form-required {
    color: #EF4444 !important;
    margin-left: 4px !important;
    display: inline !important;
    font-size: 14px !important;
  }

  /* Placeholder'ları gizle - label'lar zaten üstte */
  .bitrix-form-wrapper .b24-form-control::placeholder,
  .bitrix-form-wrapper input.b24-form-control::placeholder,
  .bitrix-form-wrapper select.b24-form-control::placeholder,
  .bitrix-form-wrapper textarea.b24-form-control::placeholder {
    color: transparent !important;
    opacity: 0 !important;
  }

  /* Modern glassmorphic input fields */
  .bitrix-form-wrapper .b24-form-control,
  .bitrix-form-wrapper input.b24-form-control,
  .bitrix-form-wrapper select.b24-form-control,
  .bitrix-form-wrapper textarea.b24-form-control {
    width: 100% !important;
    padding: 16px 18px !important;
    border: 2px solid rgba(226, 232, 240, 0.6) !important;
    border-radius: 14px !important;
    font-size: 15px !important;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif !important;
    background: rgba(255, 255, 255, 0.9) !important;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1) !important;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04), inset 0 1px 2px rgba(255, 255, 255, 0.5) !important;
    color: #1E293B !important;
    min-height: 56px !important;
    line-height: 1.5 !important;
    box-sizing: border-box !important;
    backdrop-filter: blur(8px);
  }

  .bitrix-form-wrapper .b24-form-control:hover {
    border-color: #06B6D4 !important;
    box-shadow: 0 4px 12px rgba(6, 182, 212, 0.1), inset 0 1px 2px rgba(255, 255, 255, 0.5) !important;
    transform: translateY(-1px) !important;
  }

  .bitrix-form-wrapper .b24-form-control:focus,
  .bitrix-form-wrapper input.b24-form-control:focus,
  .bitrix-form-wrapper select.b24-form-control:focus {
    outline: none !important;
    border-color: #06B6D4 !important;
    background: rgba(255, 255, 255, 1) !important;
    box-shadow: 0 0 0 4px rgba(6, 182, 212, 0.15), 0 8px 24px rgba(6, 182, 212, 0.2) !important;
    transform: translateY(-2px) !important;
  }

  /* Modern select dropdown */
  .bitrix-form-wrapper select.b24-form-control {
    appearance: none !important;
    -webkit-appearance: none !important;
    -moz-appearance: none !important;
    background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%2306B6D4' stroke-width='3' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6 9 12 15 18 9'%3e%3c/polyline%3e%3c/svg%3e") !important;
    background-repeat: no-repeat !important;
    background-position: right 16px center !important;
    background-size: 20px !important;
    background-color: rgba(255, 255, 255, 0.9) !important;
    padding-right: 50px !important;
    cursor: pointer !important;
  }

  .bitrix-form-wrapper .b24-form-select-clear {
    display: none !important;
  }

  /* Modern gradient button with animation */
  .bitrix-form-wrapper .b24-form-btn,
  .bitrix-form-wrapper button[type="submit"] {
    width: 100% !important;
    padding: 18px 32px !important;
    background: linear-gradient(135deg, #06B6D4 0%, #0891B2 50%, #0E7490 100%) !important;
    background-size: 200% 100% !important;
    color: #FFFFFF !important;
    font-weight: 800 !important;
    font-size: 15px !important;
    border-radius: 14px !important;
    border: none !important;
    cursor: pointer !important;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1) !important;
    box-shadow: 0 8px 24px rgba(6, 182, 212, 0.4), 0 4px 12px rgba(0, 0, 0, 0.1) !important;
    text-transform: uppercase !important;
    letter-spacing: 1px !important;
    min-height: 58px !important;
    position: relative !important;
    overflow: hidden !important;
  }

  .bitrix-form-wrapper .b24-form-btn::before,
  .bitrix-form-wrapper button[type="submit"]::before {
    content: '' !important;
    position: absolute !important;
    top: 0 !important;
    left: -100% !important;
    width: 100% !important;
    height: 100% !important;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent) !important;
    transition: left 0.5s !important;
  }

  .bitrix-form-wrapper .b24-form-btn:hover:not(:disabled),
  .bitrix-form-wrapper button[type="submit"]:hover:not(:disabled) {
    background-position: -100% 0 !important;
    box-shadow: 0 12px 32px rgba(6, 182, 212, 0.5), 0 6px 16px rgba(0, 0, 0, 0.15) !important;
    transform: translateY(-3px) !important;
  }

  .bitrix-form-wrapper .b24-form-btn:hover::before,
  .bitrix-form-wrapper button[type="submit"]:hover::before {
    left: 100% !important;
  }

  .bitrix-form-wrapper .b24-form-btn:active:not(:disabled),
  .bitrix-form-wrapper button[type="submit"]:active:not(:disabled) {
    transform: translateY(-1px) !important;
    box-shadow: 0 6px 20px rgba(6, 182, 212, 0.4) !important;
  }

  .bitrix-form-wrapper .b24-form-btn:disabled,
  .bitrix-form-wrapper button[type="submit"]:disabled {
    opacity: 0.6 !important;
    cursor: not-allowed !important;
    box-shadow: 0 4px 12px rgba(6, 182, 212, 0.2) !important;
    transform: none !important;
  }

  /* Modern validation error messages */
  .bitrix-form-wrapper .b24-form-control-alert,
  .bitrix-form-wrapper .b24-form-control-string-error {
    background: rgba(254, 226, 226, 0.9) !important;
    color: #DC2626 !important;
    font-size: 12px !important;
    font-weight: 600 !important;
    padding: 8px 12px !important;
    margin: 8px 0 0 0 !important;
    border: none !important;
    border-left: 3px solid #EF4444 !important;
    text-align: left !important;
    display: block !important;
    border-radius: 8px !important;
  }

  .bitrix-form-wrapper .b24-form-control-alert::before {
    display: none !important;
  }

  /* Modern success/error messages */
  .bitrix-form-wrapper .b24-form-success-message {
    margin-top: 20px !important;
    padding: 16px 20px !important;
    border-radius: 14px !important;
    font-size: 14px !important;
    font-weight: 700 !important;
    text-align: center !important;
    background: linear-gradient(135deg, #D1FAE5 0%, #A7F3D0 100%) !important;
    color: #065F46 !important;
    border: 2px solid #86EFAC !important;
    box-shadow: 0 4px 12px rgba(16, 185, 129, 0.2) !important;
  }

  .bitrix-form-wrapper .b24-form-error-message {
    margin-top: 20px !important;
    padding: 16px 20px !important;
    border-radius: 14px !important;
    font-size: 14px !important;
    font-weight: 700 !important;
    text-align: center !important;
    background: linear-gradient(135deg, #FEE2E2 0%, #FECACA 100%) !important;
    color: #991B1B !important;
    border: 2px solid #FCA5A5 !important;
    box-shadow: 0 4px 12px rgba(239, 68, 68, 0.2) !important;
  }

  /* Modern phone input styling */
  .bitrix-form-wrapper .iti {
    width: 100% !important;
    display: block !important;
  }

  .bitrix-form-wrapper .iti input.b24-form-control {
    padding-left: 60px !important;
  }

  .bitrix-form-wrapper .iti__flag-container {
    z-index: 10 !important;
  }

  .bitrix-form-wrapper .iti__selected-flag {
    background: transparent !important;
    border: none !important;
    padding-left: 14px !important;
    transition: transform 0.2s !important;
  }

  .bitrix-form-wrapper .iti__selected-flag:hover {
    transform: scale(1.05) !important;
  }

  .bitrix-form-wrapper .iti__country-list {
    background: rgba(255, 255, 255, 0.98) !important;
    border: 2px solid rgba(226, 232, 240, 0.8) !important;
    border-radius: 14px !important;
    box-shadow: 0 16px 48px rgba(0, 0, 0, 0.2) !important;
    max-height: 220px !important;
    overflow-y: auto !important;
    backdrop-filter: blur(10px);
  }

  .bitrix-form-wrapper .iti__country {
    padding: 12px 14px !important;
    color: #1E293B !important;
    transition: all 0.2s !important;
  }

  .bitrix-form-wrapper .iti__country:hover {
    background: linear-gradient(90deg, #F1F5F9 0%, #E0F2FE 100%) !important;
    transform: translateX(4px) !important;
  }

  .bitrix-form-wrapper .iti__country.iti__highlight {
    background: linear-gradient(90deg, #E0F2FE 0%, #BAE6FD 100%) !important;
  }

  .bitrix-form-wrapper .iti__search-input {
    padding: 10px 14px !important;
    border: 2px solid #E2E8F0 !important;
    border-radius: 10px !important;
    margin: 10px !important;
    width: calc(100% - 20px) !important;
    transition: all 0.2s !important;
  }

  .bitrix-form-wrapper .iti__search-input:focus {
    border-color: #06B6D4 !important;
    box-shadow: 0 0 0 3px rgba(6, 182, 212, 0.1) !important;
    outline: none !important;
  }

  /* Responsive adjustments */
  @media (max-width: 640px) {
    .bitrix-form-wrapper {
      border-radius: 20px;
      min-height: 0 !important;
      padding: 12px !important;
    }
    
    .bitrix-form-wrapper .b24-form-control,
    .bitrix-form-wrapper input.b24-form-control,
    .bitrix-form-wrapper select.b24-form-control {
      font-size: 16px !important;
      min-height: 48px !important;
      padding: 12px 14px !important;
      border-radius: 12px !important;
    }

    .bitrix-form-wrapper .b24-form-btn,
    .bitrix-form-wrapper button[type="submit"] {
      font-size: 14px !important;
      padding: 14px 20px !important;
      min-height: 48px !important;
      border-radius: 12px !important;
    }

    .bitrix-form-wrapper .b24-form-field {
      margin-bottom: 16px !important;
    }

    .bitrix-form-wrapper .b24-form-control-label {
      font-size: 12px !important;
      margin-bottom: 4px !important;
    }
  }
            `}</style>
            <div className="bitrix-form-wrapper bg-white/5 p-3 sm:p-5 md:p-6">
              {!isFormLoaded && !loadError && (
                <div className="py-3 sm:py-4 text-center text-xs sm:text-sm text-gray-300">
                  Form yükleniyor...
                </div>
              )}
              {loadError && (
                <div className="py-3 sm:py-4 text-center text-xs sm:text-sm text-red-300">
                  {loadError}
                </div>
              )}
              <div
                ref={bitrixContainerRef}
                className={`transition-opacity duration-500 ${
                  isFormLoaded ? "opacity-100" : "opacity-0"
                }`}
              />
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
