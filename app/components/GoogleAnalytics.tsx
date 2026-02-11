"use client";

import { useEffect, useState } from "react";
import Script from "next/script";
import { getCookieConsent } from "../../lib/cookies";
import { GA_TRACKING_ID } from "../../lib/gtag";

const GoogleAnalytics = () => {
  const [consent, setConsent] = useState(false);

  useEffect(() => {
    const stored = getCookieConsent();
    if (stored && stored.analytics) {
      setConsent(true);
    }
  }, []);

  if (!consent) return null;

  return (
    <>
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
      />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_TRACKING_ID}', {
              page_path: window.location.pathname,
            });
          `,
        }}
      />
    </>
  );
};

export default GoogleAnalytics;
