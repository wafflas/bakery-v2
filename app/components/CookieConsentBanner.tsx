"use client";

import React, { useEffect, useState } from "react";
import { Cookie } from "lucide-react";
import {
  CookieConsent,
  defaultConsent,
  getCookieConsent,
  setCookieConsent,
} from "../../lib/cookies";
import CookieSettings from "./CookieSettings";

const CookieConsentBanner = () => {
  const [showBanner, setShowBanner] = useState(false);
  const [showSettings, setShowSettings] = useState(false);

  useEffect(() => {
    // Check if consent is already stored
    const storedConsent = getCookieConsent();
    if (!storedConsent) {
      // Small delay for smooth appearance
      const timer = setTimeout(() => setShowBanner(true), 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAcceptAll = () => {
    const allConsent: CookieConsent = {
      necessary: true,
      analytics: true,
    };
    setCookieConsent(allConsent);
    setShowBanner(false);
    window.location.reload(); // Reload to activate scripts
  };

  const handleRejectAll = () => {
    setCookieConsent(defaultConsent);
    setShowBanner(false);
    window.location.reload();
  };

  const handleSaveSettings = () => {
    setShowBanner(false);
    window.location.reload();
  };

  if (!showBanner) return null;

  return (
    <>
      <div
        className="fixed bottom-0 left-0 w-full z-[90] bg-white border-t border-gray-200 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)] animate-slide-up"
        role="region"
        aria-label="Ειδοποίηση Cookies"
      >
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex-1 flex items-start md:items-center gap-3">
              <div className="text-red-800 hidden md:block">
                <Cookie size={20} />
              </div>
              <p className="text-sm text-gray-600 leading-snug">
                Χρησιμοποιούμε cookies για τη βελτίωση της εμπειρίας σας στον
                ιστότοπο.
                <a
                  href="/privacy"
                  className="underline hover:text-red-800 transition-colors ml-1 font-medium"
                >
                  Πολιτική Απορρήτου
                </a>
              </p>
            </div>

            <div className="flex items-center gap-2 w-full md:w-auto">
              <button
                onClick={() => setShowSettings(true)}
                className="flex-1 md:flex-none px-3 py-2 text-sm text-gray-600 hover:text-red-800 font-medium transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-300 border border-gray-200 rounded hover:bg-gray-50 cursor-pointer"
              >
                Ρυθμίσεις
              </button>

              <button
                onClick={handleRejectAll}
                className="flex-1 md:flex-none px-3 py-2 text-sm bg-white text-gray-700 border border-gray-300 font-bold rounded hover:bg-gray-50 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-300 focus-visible:ring-offset-2 cursor-pointer"
              >
                Απόρριψη
              </button>

              <button
                onClick={handleAcceptAll}
                className="flex-1 md:flex-none px-4 py-2 text-sm bg-red-800 text-white font-bold rounded hover:bg-red-900 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2 shadow-sm cursor-pointer"
              >
                Αποδοχή
              </button>
            </div>
          </div>
        </div>
      </div>

      <CookieSettings
        isOpen={showSettings}
        onClose={() => setShowSettings(false)}
        onSave={handleSaveSettings}
      />

      <style jsx global>{`
        @keyframes slide-up {
          from {
            transform: translateY(100%);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }
        .animate-slide-up {
          animation: slide-up 0.5s ease-out forwards;
        }
      `}</style>
    </>
  );
};

export default CookieConsentBanner;
