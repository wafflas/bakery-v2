"use client";

import React, { useState, useEffect } from "react";
import { X } from "lucide-react";
import {
  CookieConsent,
  defaultConsent,
  getCookieConsent,
  setCookieConsent,
} from "../../lib/cookies";
import { Switch } from "./ui/switch";

interface CookieSettingsProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (consent: CookieConsent) => void;
}

const CookieSettings = ({ isOpen, onClose, onSave }: CookieSettingsProps) => {
  const [consent, setConsent] = useState<CookieConsent>(defaultConsent);

  useEffect(() => {
    if (isOpen) {
      const stored = getCookieConsent();
      if (stored) {
        setConsent(stored);
      }
    }
  }, [isOpen]);

  const handleToggle = (key: keyof CookieConsent) => {
    if (key === "necessary") return; // Cannot toggle necessary
    setConsent((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const handleSave = () => {
    setCookieConsent(consent);
    onSave(consent);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
      <div
        className="bg-white rounded-lg shadow-xl w-full max-w-2xl max-h-[90vh] overflow-y-auto"
        role="dialog"
        aria-modal="true"
        aria-labelledby="cookie-settings-title"
      >
        <div className="flex items-center justify-between p-6 border-b border-gray-100">
          <h2
            id="cookie-settings-title"
            className="text-2xl font-bold text-gray-900"
          >
            Ρυθμίσεις Cookies
          </h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-300"
            aria-label="Κλείσιμο"
          >
            <X size={24} />
          </button>
        </div>

        <div className="p-6 space-y-6">
          <p className="text-gray-600">
            Χρησιμοποιούμε cookies για να βελτιώσουμε την εμπειρία σας στον
            ιστότοπό μας. Μπορείτε να επιλέξετε ποιες κατηγορίες cookies
            επιθυμείτε να ενεργοποιήσετε.
          </p>

          <div className="space-y-4">
            {/* Necessary Cookies */}
            <div className="flex items-start justify-between p-4 bg-gray-50 rounded-lg">
              <div className="flex-1 pr-4">
                <div className="flex items-center gap-2 mb-1">
                  <h3 className="font-bold text-gray-900">
                    Απαραίτητα Cookies
                  </h3>
                  <span className="text-xs font-medium text-red-800 bg-red-100 px-2 py-0.5 rounded">
                    Υποχρεωτικά
                  </span>
                </div>
                <p className="text-sm text-gray-600">
                  Αυτά τα cookies είναι απαραίτητα για τη λειτουργία του
                  ιστότοπου και δεν μπορούν να απενεργοποιηθούν.
                </p>
              </div>
              <div className="flex items-center space-x-2 opacity-50">
                <Switch checked={true} disabled />
              </div>
            </div>

            {/* Analytics Cookies */}
            <div className="flex items-start justify-between p-4 border border-gray-200 rounded-lg hover:border-red-200 transition-colors">
              <div className="flex-1 pr-4">
                <h3 className="font-bold text-gray-900 mb-1">
                  Cookies Στατιστικών
                </h3>
                <p className="text-sm text-gray-600">
                  Μας βοηθούν να κατανοήσουμε πώς χρησιμοποιείτε τον ιστότοπο
                  μας, ώστε να τον βελτιώσουμε.
                </p>
              </div>
              <div className="flex items-center space-x-2">
                <Switch
                  checked={consent.analytics}
                  onCheckedChange={() => handleToggle("analytics")}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-end gap-3 p-6 border-t border-gray-100 bg-gray-50 rounded-b-lg">
          <button
            onClick={onClose}
            className="px-4 py-2 text-gray-700 hover:text-gray-900 font-medium transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-300 rounded cursor-pointer"
          >
            Ακύρωση
          </button>
          <button
            onClick={handleSave}
            className="px-6 py-2 bg-red-800 text-white font-medium rounded hover:bg-red-900 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2 cursor-pointer"
          >
            Αποθήκευση Επιλογών
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieSettings;
