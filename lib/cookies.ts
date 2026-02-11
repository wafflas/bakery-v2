export type CookieConsent = {
  necessary: boolean;
  analytics: boolean;
};

export const defaultConsent: CookieConsent = {
  necessary: true,
  analytics: false,
};

export const COOKIE_CONSENT_KEY = "cookie_consent_preferences";

export const getCookieConsent = (): CookieConsent | null => {
  if (typeof window === "undefined") return null;

  const stored = localStorage.getItem(COOKIE_CONSENT_KEY);
  if (!stored) return null;

  try {
    return JSON.parse(stored);
  } catch {
    return null;
  }
};

export const setCookieConsent = (consent: CookieConsent) => {
  if (typeof window === "undefined") return;
  localStorage.setItem(COOKIE_CONSENT_KEY, JSON.stringify(consent));
};
