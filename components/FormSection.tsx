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
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    $?: any;
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

    // Hide Bitrix24 branding
    addStyle(`
      .b24-form-sign {
        display: none !important;
      }
    `);

    // Load intl-tel-input CSS
    const intlCss = document.createElement("link");
    intlCss.rel = "stylesheet";
    intlCss.href =
      "https://cdn.jsdelivr.net/npm/intl-tel-input@18.2.1/build/css/intlTelInput.css";
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
      script.src = `https://cdn.bitrix24.com.tr/b26357199/crm/form/loader_1107.js?${Math.floor(
        Date.now() / 180000
      )}`;
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

        if (!window.intlTelInput || !window.$) {
          checkCount += 1;
          if (checkCount > 5) {
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

          // Remove label sibling if exists (as per original script)
          const siblings = inputElement.parentElement?.querySelector(
            ".b24-form-control-label"
          );
          if (siblings) {
            siblings.remove();
          }

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

          // Mobile dropdown close functionality
          const addMobileCloseHandler = () => {
            if (window.innerWidth <= 640) {
              const countryList = document.querySelector('.iti__country-list') as HTMLElement;
              if (countryList && !countryList.dataset.mobileHandlerAdded) {
                countryList.dataset.mobileHandlerAdded = 'true';
                
                // Lock body scroll
                document.body.classList.add('iti-mobile-open');
                
                // Create close button (not pseudo-element)
                const closeBtn = document.createElement('div');
                closeBtn.className = 'iti-mobile-close-btn';
                closeBtn.innerHTML = '✕ Kapat';
                closeBtn.style.cssText = `
                  position: sticky;
                  top: 0;
                  height: 54px;
                  display: flex;
                  align-items: center;
                  justify-content: center;
                  background: linear-gradient(180deg, rgba(255, 255, 255, 0.98) 0%, rgba(248, 250, 252, 0.95) 100%);
                  color: #EF4444;
                  font-size: 16px;
                  font-weight: 700;
                  cursor: pointer;
                  border-bottom: 2px solid rgba(226, 232, 240, 0.8);
                  border-radius: 16px 16px 0 0;
                  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
                  letter-spacing: 0.5px;
                  flex-shrink: 0;
                  z-index: 10;
                  -webkit-tap-highlight-color: transparent;
                `;
                
                // Create wrapper for scrollable content
                const scrollWrapper = document.createElement('div');
                scrollWrapper.className = 'iti-scroll-wrapper';
                scrollWrapper.style.cssText = `
                  flex: 1;
                  overflow-y: auto;
                  overflow-x: hidden;
                  -webkit-overflow-scrolling: touch;
                  overscroll-behavior: contain;
                `;
                
                // Move all children to scroll wrapper (except search input if exists)
                const children = Array.from(countryList.children);
                const searchInput = countryList.querySelector('.iti__search-input');
                
                children.forEach(child => {
                  if (child !== searchInput) {
                    scrollWrapper.appendChild(child);
                  }
                });
                
                // Rebuild structure
                countryList.innerHTML = '';
                countryList.appendChild(closeBtn);
                if (searchInput) {
                  countryList.appendChild(searchInput);
                }
                countryList.appendChild(scrollWrapper);
                
                // Close handlers
                const closeDropdown = () => {
                  document.body.classList.remove('iti-mobile-open');
                  inputElement.blur();
                  const selectedFlag = inputElement.parentElement?.querySelector('.iti__selected-flag') as HTMLElement;
                  if (selectedFlag) {
                    selectedFlag.click(); // Toggle close
                  }
                  delete countryList.dataset.mobileHandlerAdded;
                };
                
                closeBtn.addEventListener('click', (e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  closeDropdown();
                });
                
                // Backdrop click
                const backdropHandler = (e: MouseEvent) => {
                  const target = e.target as HTMLElement;
                  if (!countryList.contains(target) && !inputElement.contains(target)) {
                    e.preventDefault();
                    closeDropdown();
                  }
                };
                
                document.addEventListener('click', backdropHandler, true);
                
                cleanupFns.push(() => {
                  document.body.classList.remove('iti-mobile-open');
                  document.removeEventListener('click', backdropHandler, true);
                  delete countryList.dataset.mobileHandlerAdded;
                });
              }
            }
          };

          // Add mobile close handler after dropdown is opened
          inputElement.addEventListener('focus', () => {
            setTimeout(addMobileCloseHandler, 150);
          });

          // Clean up body scroll lock on blur
          inputElement.addEventListener('blur', () => {
            setTimeout(() => {
              document.body.classList.remove('iti-mobile-open');
            }, 300);
          });

          // jQuery event handler as per original script
          if (window.$ && iti) {
            window.$(inputElement).on("input", function (this: HTMLInputElement) {
              const val = this.value.replace(/[^0-9]+/g, "");
              const dialCode = iti.getSelectedCountryData().dialCode;
              if (!val.startsWith(dialCode)) {
                this.value = `+${dialCode}${val}`;
              } else {
                this.value = `+${val}`;
              }
            });

            cleanupFns.push(() => {
              if (window.$) {
                window.$(inputElement).off("input");
              }
            });
          }
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
        if (checkCount > 5 && !formLoadedRef.current) {
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
        // Load jQuery first (required by original script)
        await loadScript(
          "https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js"
        );
        // Load intl-tel-input
        await loadScript(
          "https://cdn.jsdelivr.net/npm/intl-tel-input@18.2.1/build/js/intlTelInput.min.js"
        );
        // Inject Bitrix form
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
      
      // Remove body scroll lock
      document.body.classList.remove('iti-mobile-open');
      
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
  /* ========================================
     MODERN BITRIX24 FORM STYLING
     ======================================== */

  /* Main Container - Glassmorphic Design */
  .bitrix-form-wrapper {
    background: linear-gradient(135deg, rgba(255, 255, 255, 0.97) 0%, rgba(248, 250, 252, 0.99) 100%);
    border-radius: 28px;
    box-shadow: 
      0 25px 70px rgba(0, 0, 0, 0.18), 
      0 10px 30px rgba(0, 0, 0, 0.12),
      0 0 0 1px rgba(255, 255, 255, 0.15);
    padding: 28px;
    min-height: 450px;
    position: relative;
    backdrop-filter: blur(16px);
    border: 1px solid rgba(255, 255, 255, 0.25);
    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  }

  .bitrix-form-wrapper:hover {
    box-shadow: 
      0 30px 80px rgba(0, 0, 0, 0.2), 
      0 15px 40px rgba(0, 0, 0, 0.14),
      0 0 0 1px rgba(255, 255, 255, 0.2);
    transform: translateY(-2px);
  }

  .bitrix-form-wrapper .b24-form {
    background: transparent !important;
    padding: 0 !important;
    box-shadow: none !important;
    border: none !important;
  }

  .bitrix-form-wrapper .b24-form-field {
    margin-bottom: 26px !important;
    position: relative !important;
  }

  /* Modern Label Styling */
  .bitrix-form-wrapper .b24-form-control-label {
    display: block !important;
    visibility: visible !important;
    opacity: 1 !important;
    color: #1E293B !important;
    font-size: 13px !important;
    font-weight: 700 !important;
    margin-bottom: 10px !important;
    text-transform: uppercase !important;
    letter-spacing: 0.9px !important;
    position: relative !important;
    transform: none !important;
    top: 0 !important;
    left: 0 !important;
    z-index: 2 !important;
    line-height: 1.5 !important;
    pointer-events: auto !important;
    transition: color 0.2s ease !important;
  }

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
    font-size: 15px !important;
    vertical-align: middle !important;
  }

  /* Hide Placeholders - Labels Are Always Visible */
  .bitrix-form-wrapper .b24-form-control::placeholder,
  .bitrix-form-wrapper input.b24-form-control::placeholder,
  .bitrix-form-wrapper select.b24-form-control::placeholder,
  .bitrix-form-wrapper textarea.b24-form-control::placeholder {
    color: transparent !important;
    opacity: 0 !important;
  }

  /* Modern Input Fields */
  .bitrix-form-wrapper .b24-form-control,
  .bitrix-form-wrapper input.b24-form-control,
  .bitrix-form-wrapper select.b24-form-control,
  .bitrix-form-wrapper textarea.b24-form-control {
    width: 100% !important;
    padding: 16px 20px !important;
    border: 2px solid rgba(226, 232, 240, 0.7) !important;
    border-radius: 16px !important;
    font-size: 15px !important;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif !important;
    background: rgba(255, 255, 255, 0.95) !important;
    transition: all 0.35s cubic-bezier(0.4, 0, 0.2, 1) !important;
    box-shadow: 
      0 2px 10px rgba(0, 0, 0, 0.05), 
      inset 0 1px 3px rgba(255, 255, 255, 0.6) !important;
    color: #1E293B !important;
    min-height: 58px !important;
    line-height: 1.6 !important;
    box-sizing: border-box !important;
    backdrop-filter: blur(10px);
    font-weight: 500 !important;
  }

  .bitrix-form-wrapper .b24-form-control:hover {
    border-color: #06B6D4 !important;
    box-shadow: 
      0 6px 16px rgba(6, 182, 212, 0.12), 
      inset 0 1px 3px rgba(255, 255, 255, 0.6) !important;
    transform: translateY(-2px) !important;
    background: rgba(255, 255, 255, 1) !important;
  }

  .bitrix-form-wrapper .b24-form-control:focus,
  .bitrix-form-wrapper input.b24-form-control:focus,
  .bitrix-form-wrapper select.b24-form-control:focus,
  .bitrix-form-wrapper textarea.b24-form-control:focus {
    outline: none !important;
    border-color: #06B6D4 !important;
    background: rgba(255, 255, 255, 1) !important;
    box-shadow: 
      0 0 0 4px rgba(6, 182, 212, 0.18), 
      0 10px 30px rgba(6, 182, 212, 0.25) !important;
    transform: translateY(-3px) scale(1.01) !important;
  }

  /* Modern Select Dropdown */
  .bitrix-form-wrapper select.b24-form-control {
    appearance: none !important;
    -webkit-appearance: none !important;
    -moz-appearance: none !important;
    background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%2306B6D4' stroke-width='3' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6 9 12 15 18 9'%3e%3c/polyline%3e%3c/svg%3e") !important;
    background-repeat: no-repeat !important;
    background-position: right 18px center !important;
    background-size: 22px !important;
    background-color: rgba(255, 255, 255, 0.95) !important;
    padding-right: 55px !important;
    cursor: pointer !important;
    transition: all 0.35s cubic-bezier(0.4, 0, 0.2, 1) !important;
  }

  .bitrix-form-wrapper select.b24-form-control:hover {
    background-position: right 16px center !important;
  }

  .bitrix-form-wrapper select.b24-form-control:focus {
    background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%230891B2' stroke-width='3.5' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6 9 12 15 18 9'%3e%3c/polyline%3e%3c/svg%3e") !important;
  }

  .bitrix-form-wrapper .b24-form-select-clear {
    display: none !important;
  }

  /* Textarea Specific Styling */
  .bitrix-form-wrapper textarea.b24-form-control {
    min-height: 120px !important;
    resize: vertical !important;
    padding: 16px 20px !important;
  }

  /* Modern Gradient Button with Animation */
  .bitrix-form-wrapper .b24-form-btn,
  .bitrix-form-wrapper button[type="submit"] {
    width: 100% !important;
    padding: 20px 36px !important;
    background: linear-gradient(135deg, #06B6D4 0%, #0891B2 50%, #0E7490 100%) !important;
    background-size: 200% 100% !important;
    color: #FFFFFF !important;
    font-weight: 800 !important;
    font-size: 16px !important;
    border-radius: 16px !important;
    border: none !important;
    cursor: pointer !important;
    transition: all 0.35s cubic-bezier(0.4, 0, 0.2, 1) !important;
    box-shadow: 
      0 10px 30px rgba(6, 182, 212, 0.45), 
      0 5px 15px rgba(0, 0, 0, 0.12) !important;
    text-transform: uppercase !important;
    letter-spacing: 1.2px !important;
    min-height: 62px !important;
    position: relative !important;
    overflow: hidden !important;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif !important;
  }

  .bitrix-form-wrapper .b24-form-btn::before,
  .bitrix-form-wrapper button[type="submit"]::before {
    content: '' !important;
    position: absolute !important;
    top: 0 !important;
    left: -100% !important;
    width: 100% !important;
    height: 100% !important;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.35), transparent) !important;
    transition: left 0.6s cubic-bezier(0.4, 0, 0.2, 1) !important;
  }

  .bitrix-form-wrapper .b24-form-btn:hover:not(:disabled),
  .bitrix-form-wrapper button[type="submit"]:hover:not(:disabled) {
    background-position: -100% 0 !important;
    box-shadow: 
      0 15px 40px rgba(6, 182, 212, 0.55), 
      0 8px 20px rgba(0, 0, 0, 0.18) !important;
    transform: translateY(-4px) scale(1.02) !important;
  }

  .bitrix-form-wrapper .b24-form-btn:hover::before,
  .bitrix-form-wrapper button[type="submit"]:hover::before {
    left: 100% !important;
  }

  .bitrix-form-wrapper .b24-form-btn:active:not(:disabled),
  .bitrix-form-wrapper button[type="submit"]:active:not(:disabled) {
    transform: translateY(-2px) scale(1.01) !important;
    box-shadow: 0 8px 25px rgba(6, 182, 212, 0.45) !important;
  }

  .bitrix-form-wrapper .b24-form-btn:disabled,
  .bitrix-form-wrapper button[type="submit"]:disabled {
    opacity: 0.65 !important;
    cursor: not-allowed !important;
    box-shadow: 0 5px 15px rgba(6, 182, 212, 0.25) !important;
    transform: none !important;
  }

  /* Modern Validation Error Messages */
  .bitrix-form-wrapper .b24-form-control-alert,
  .bitrix-form-wrapper .b24-form-control-string-error {
    background: linear-gradient(135deg, rgba(254, 226, 226, 0.95) 0%, rgba(254, 202, 202, 0.90) 100%) !important;
    color: #DC2626 !important;
    font-size: 13px !important;
    font-weight: 600 !important;
    padding: 10px 14px !important;
    margin: 10px 0 0 0 !important;
    border: none !important;
    border-left: 4px solid #EF4444 !important;
    text-align: left !important;
    display: block !important;
    border-radius: 10px !important;
    box-shadow: 0 2px 8px rgba(239, 68, 68, 0.15) !important;
    animation: slideDown 0.3s ease-out !important;
  }

  @keyframes slideDown {
    from {
      opacity: 0;
      transform: translateY(-10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  .bitrix-form-wrapper .b24-form-control-alert::before {
    display: none !important;
  }

  /* Modern Success/Error Messages */
  .bitrix-form-wrapper .b24-form-success-message {
    margin-top: 24px !important;
    padding: 18px 24px !important;
    border-radius: 16px !important;
    font-size: 15px !important;
    font-weight: 700 !important;
    text-align: center !important;
    background: linear-gradient(135deg, #D1FAE5 0%, #A7F3D0 100%) !important;
    color: #065F46 !important;
    border: 2px solid #86EFAC !important;
    box-shadow: 0 6px 18px rgba(16, 185, 129, 0.25) !important;
    animation: slideDown 0.4s ease-out !important;
  }

  .bitrix-form-wrapper .b24-form-error-message {
    margin-top: 24px !important;
    padding: 18px 24px !important;
    border-radius: 16px !important;
    font-size: 15px !important;
    font-weight: 700 !important;
    text-align: center !important;
    background: linear-gradient(135deg, #FEE2E2 0%, #FECACA 100%) !important;
    color: #991B1B !important;
    border: 2px solid #FCA5A5 !important;
    box-shadow: 0 6px 18px rgba(239, 68, 68, 0.25) !important;
    animation: slideDown 0.4s ease-out !important;
  }

  /* Modern Phone Input Styling with intl-tel-input */
  .bitrix-form-wrapper .iti {
    width: 100% !important;
    display: block !important;
  }

  .bitrix-form-wrapper .iti input.b24-form-control {
    padding-left: 68px !important;
  }

  .bitrix-form-wrapper .iti__flag-container {
    z-index: 10 !important;
  }

  .bitrix-form-wrapper .iti__selected-flag {
    background: transparent !important;
    border: none !important;
    padding-left: 16px !important;
    transition: transform 0.25s cubic-bezier(0.4, 0, 0.2, 1) !important;
    display: flex !important;
    align-items: center !important;
  }

  .bitrix-form-wrapper .iti__selected-flag:hover {
    transform: scale(1.08) !important;
  }

  .bitrix-form-wrapper .iti__selected-flag:focus {
    outline: 2px solid #06B6D4 !important;
    outline-offset: 2px !important;
    border-radius: 8px !important;
  }

  .bitrix-form-wrapper .iti__arrow {
    border-left: 4px solid transparent !important;
    border-right: 4px solid transparent !important;
    border-top: 5px solid #64748B !important;
    transition: all 0.2s !important;
  }

  .bitrix-form-wrapper .iti__selected-flag:hover .iti__arrow {
    border-top-color: #06B6D4 !important;
  }

  /* Modern Dropdown Menu */
  .bitrix-form-wrapper .iti__country-list {
    background: rgba(255, 255, 255, 0.99) !important;
    border: 2px solid rgba(226, 232, 240, 0.9) !important;
    border-radius: 16px !important;
    box-shadow: 
      0 20px 60px rgba(0, 0, 0, 0.25),
      0 10px 30px rgba(0, 0, 0, 0.15) !important;
    max-height: 240px !important;
    overflow-y: auto !important;
    overflow-x: hidden !important;
    backdrop-filter: blur(12px);
    margin-top: 8px !important;
    padding: 8px 0 60px 0 !important;
    position: absolute !important;
    z-index: 9999 !important;
    -webkit-overflow-scrolling: touch !important;
  }

  /* Custom Scrollbar for Dropdown */
  .bitrix-form-wrapper .iti__country-list::-webkit-scrollbar {
    width: 8px !important;
  }

  .bitrix-form-wrapper .iti__country-list::-webkit-scrollbar-track {
    background: rgba(241, 245, 249, 0.5) !important;
    border-radius: 10px !important;
  }

  .bitrix-form-wrapper .iti__country-list::-webkit-scrollbar-thumb {
    background: linear-gradient(180deg, #06B6D4 0%, #0891B2 100%) !important;
    border-radius: 10px !important;
    transition: background 0.2s !important;
  }

  .bitrix-form-wrapper .iti__country-list::-webkit-scrollbar-thumb:hover {
    background: linear-gradient(180deg, #0891B2 0%, #0E7490 100%) !important;
  }

  .bitrix-form-wrapper .iti__country {
    padding: 12px 16px !important;
    color: #1E293B !important;
    transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1) !important;
    border-radius: 8px !important;
    margin: 0 8px !important;
    font-weight: 500 !important;
  }

  .bitrix-form-wrapper .iti__country:hover {
    background: linear-gradient(90deg, #F1F5F9 0%, #E0F2FE 100%) !important;
    transform: translateX(6px) !important;
    box-shadow: 0 2px 8px rgba(6, 182, 212, 0.1) !important;
  }

  .bitrix-form-wrapper .iti__country.iti__highlight {
    background: linear-gradient(90deg, #E0F2FE 0%, #BAE6FD 100%) !important;
    box-shadow: 0 2px 10px rgba(6, 182, 212, 0.15) !important;
  }

  .bitrix-form-wrapper .iti__country.iti__active {
    background: linear-gradient(90deg, #BAE6FD 0%, #7DD3FC 100%) !important;
    color: #0C4A6E !important;
    font-weight: 600 !important;
  }

  .bitrix-form-wrapper .iti__divider {
    border-bottom: 1px solid rgba(226, 232, 240, 0.6) !important;
    margin: 8px 12px !important;
  }

  /* Search Input in Dropdown */
  .bitrix-form-wrapper .iti__search-input {
    padding: 12px 16px !important;
    border: 2px solid #E2E8F0 !important;
    border-radius: 12px !important;
    margin: 12px !important;
    width: calc(100% - 24px) !important;
    transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1) !important;
    font-size: 14px !important;
    font-weight: 500 !important;
    background: rgba(248, 250, 252, 0.9) !important;
  }

  .bitrix-form-wrapper .iti__search-input:focus {
    border-color: #06B6D4 !important;
    box-shadow: 0 0 0 3px rgba(6, 182, 212, 0.15) !important;
    outline: none !important;
    background: rgba(255, 255, 255, 1) !important;
  }

  .bitrix-form-wrapper .iti__search-input::placeholder {
    color: #94A3B8 !important;
  }

  /* ========================================
     RESPONSIVE DESIGN
     ======================================== */

  @media (max-width: 1024px) {
    .bitrix-form-wrapper {
      padding: 24px;
      border-radius: 24px;
    }
  }

  @media (max-width: 768px) {
    .bitrix-form-wrapper {
      padding: 20px;
      border-radius: 20px;
      min-height: 400px !important;
    }

    .bitrix-form-wrapper .b24-form-control,
    .bitrix-form-wrapper input.b24-form-control,
    .bitrix-form-wrapper select.b24-form-control,
    .bitrix-form-wrapper textarea.b24-form-control {
      font-size: 16px !important;
      min-height: 54px !important;
      padding: 14px 18px !important;
      border-radius: 14px !important;
    }

    .bitrix-form-wrapper select.b24-form-control {
      padding-right: 50px !important;
      background-size: 20px !important;
      background-position: right 16px center !important;
    }

    .bitrix-form-wrapper .b24-form-btn,
    .bitrix-form-wrapper button[type="submit"] {
      font-size: 15px !important;
      padding: 16px 24px !important;
      min-height: 56px !important;
      border-radius: 14px !important;
      letter-spacing: 1px !important;
    }

    .bitrix-form-wrapper .b24-form-field {
      margin-bottom: 22px !important;
    }

    .bitrix-form-wrapper .b24-form-control-label {
      font-size: 12px !important;
      margin-bottom: 8px !important;
      letter-spacing: 0.7px !important;
    }

    .bitrix-form-wrapper .iti input.b24-form-control {
      padding-left: 64px !important;
    }

    .bitrix-form-wrapper .iti__selected-flag {
      padding-left: 14px !important;
    }
  }

  @media (max-width: 640px) {
    .bitrix-form-wrapper {
      padding: 16px;
      border-radius: 18px;
      min-height: 0 !important;
    }

    .bitrix-form-wrapper .b24-form-control,
    .bitrix-form-wrapper input.b24-form-control,
    .bitrix-form-wrapper select.b24-form-control,
    .bitrix-form-wrapper textarea.b24-form-control {
      font-size: 16px !important;
      min-height: 50px !important;
      padding: 12px 16px !important;
      border-radius: 12px !important;
    }

    .bitrix-form-wrapper select.b24-form-control {
      padding-right: 45px !important;
      background-size: 18px !important;
      background-position: right 14px center !important;
    }

    .bitrix-form-wrapper .b24-form-btn,
    .bitrix-form-wrapper button[type="submit"] {
      font-size: 14px !important;
      padding: 14px 20px !important;
      min-height: 52px !important;
      border-radius: 12px !important;
      letter-spacing: 0.8px !important;
    }

    .bitrix-form-wrapper .b24-form-field {
      margin-bottom: 18px !important;
    }

    .bitrix-form-wrapper .b24-form-control-label {
      font-size: 11px !important;
      margin-bottom: 6px !important;
      letter-spacing: 0.6px !important;
    }

    .bitrix-form-wrapper .iti input.b24-form-control {
      padding-left: 60px !important;
    }

    .bitrix-form-wrapper .iti__selected-flag {
      padding-left: 12px !important;
    }

    /* Mobile dropdown container - CENTERED */
    .bitrix-form-wrapper .iti__country-list {
      position: fixed !important;
      left: 50% !important;
      top: 50% !important;
      transform: translate(-50%, -50%) !important;
      width: 92vw !important;
      max-width: 420px !important;
      max-height: 85vh !important;
      height: auto !important;
      margin: 0 !important;
      padding: 0 !important;
      border-radius: 20px !important;
      display: flex !important;
      flex-direction: column !important;
      z-index: 99999 !important;
      overflow: hidden !important;
      box-shadow: 
        0 25px 80px rgba(0, 0, 0, 0.5),
        0 15px 40px rgba(0, 0, 0, 0.4) !important;
      background: white !important;
    }
    
    /* Remove ::before pseudo-element */
    .bitrix-form-wrapper .iti__country-list::before {
      display: none !important;
      content: none !important;
    }
    
    /* Search input */
    .bitrix-form-wrapper .iti__country-list .iti__search-input {
      flex-shrink: 0 !important;
      margin: 12px 12px 8px 12px !important;
      order: 0 !important;
      padding: 14px 16px !important;
      font-size: 16px !important;
      background: #ffffff !important;
      width: calc(100% - 24px) !important;
      border-radius: 12px !important;
      border: 2px solid #E2E8F0 !important;
    }
    
    /* Scroll wrapper - added dynamically */
    .bitrix-form-wrapper .iti-scroll-wrapper {
      flex: 1 !important;
      overflow-y: auto !important;
      overflow-x: hidden !important;
      -webkit-overflow-scrolling: touch !important;
      overscroll-behavior: contain !important;
    }
    
    .bitrix-form-wrapper .iti-scroll-wrapper::-webkit-scrollbar {
      width: 6px !important;
    }
    
    .bitrix-form-wrapper .iti-scroll-wrapper::-webkit-scrollbar-thumb {
      background: linear-gradient(180deg, #06B6D4 0%, #0891B2 100%) !important;
      border-radius: 10px !important;
    }
    
    /* Country items */
    .bitrix-form-wrapper .iti__country {
      padding: 14px 16px !important;
      font-size: 15px !important;
      margin: 0 8px !important;
    }
    
    /* Backdrop - multiple selectors for better coverage */
    .bitrix-form-wrapper .iti--open::before,
    .bitrix-form-wrapper .iti__flag-container.iti--open::after {
      content: '' !important;
      position: fixed !important;
      inset: 0 !important;
      top: 0 !important;
      left: 0 !important;
      right: 0 !important;
      bottom: 0 !important;
      background: rgba(0, 0, 0, 0.65) !important;
      z-index: 99998 !important;
      backdrop-filter: blur(4px) !important;
      -webkit-backdrop-filter: blur(4px) !important;
      pointer-events: auto !important;
    }
    
    /* Alternative backdrop via container */
    body.iti-mobile-open::before {
      content: '' !important;
      position: fixed !important;
      inset: 0 !important;
      background: rgba(0, 0, 0, 0.65) !important;
      z-index: 99998 !important;
      backdrop-filter: blur(4px) !important;
      -webkit-backdrop-filter: blur(4px) !important;
      pointer-events: auto !important;
    }

    .bitrix-form-wrapper textarea.b24-form-control {
      min-height: 100px !important;
    }

    /* Smooth scrolling for mobile */
    .bitrix-form-wrapper .iti__country-list {
      scroll-behavior: smooth !important;
      overflow-y: auto !important;
    }

    /* Prevent body scroll when dropdown is open */
    body.iti-mobile-open {
      overflow: hidden !important;
      position: fixed !important;
      width: 100% !important;
      height: 100% !important;
    }
  }

  @media (max-width: 480px) {
    .bitrix-form-wrapper {
      padding: 14px;
    }

    .bitrix-form-wrapper .b24-form-control,
    .bitrix-form-wrapper input.b24-form-control,
    .bitrix-form-wrapper select.b24-form-control,
    .bitrix-form-wrapper textarea.b24-form-control {
      font-size: 15px !important;
      min-height: 48px !important;
      padding: 11px 14px !important;
    }

    .bitrix-form-wrapper .b24-form-btn,
    .bitrix-form-wrapper button[type="submit"] {
      font-size: 13px !important;
      padding: 13px 18px !important;
      min-height: 50px !important;
    }
  }
            `}</style>
            <div className="bitrix-form-wrapper bg-white/5 p-3 sm:p-5 md:p-6">
              {!isFormLoaded && !loadError && (
                <div className="py-8 text-center">
                  <div className="inline-block animate-spin rounded-full h-10 w-10 border-4 border-cyan-500 border-t-transparent"></div>
                  <p className="mt-4 text-sm text-gray-600 font-medium">
                    Form yükleniyor...
                  </p>
                </div>
              )}
              {loadError && (
                <div className="py-8 text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-red-100 mb-4">
                    <svg
                      className="w-8 h-8 text-red-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                      />
                    </svg>
                  </div>
                  <p className="text-sm text-red-600 font-semibold">
                    {loadError}
                  </p>
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