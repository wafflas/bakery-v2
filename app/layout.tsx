import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Fira_Sans } from "next/font/google";
import PageImageLoader from "./components/PageImageLoader";

export const metadata: Metadata = {
  title: "Αρτοποιία Κουγιουμουτζάκης - Παραδοσιακός φούρνος από το 1916",
  description:
    "Παραδοσιακός φούρνος στην Ιεράπετρα με τέσσερις γενιές εμπειρίας. Φρέσκο ψωμί, ζαχαροπλαστικά και καφές με αγάπη και φροντίδα.",
  keywords:
    "αρτοποιία, φούρνος, ψωμί, Ιεράπετρα, παραδοσιακός, ζαχαροπλαστείο, καφές, κουγιουμουτζάκης, Κρήτη",
  authors: [{ name: "Αρτοποιία Κουγιουμουτζάκης" }],
  robots: "index, follow",
  metadataBase: new URL("https://www.kougioumoutzakisbakery.gr"),
  alternates: { canonical: "/" },
  openGraph: {
    title: "Αρτοποιία Κουγιουμουτζάκης",
    description: "Παραδοσιακός φούρνος από το 1916",
    type: "website",
    locale: "el_GR",
    url: "https://www.kougioumoutzakisbakery.gr/",
    siteName: "Αρτοποιία Κουγιουμουτζάκης",
    images: [
      {
        url: "/images/og.png",
        width: 1200,
        height: 630,
        alt: "Αρτοποιία Κουγιουμουτζάκης",
      },
    ],
  },
  twitter: { card: "summary_large_image" },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

const firaSans = Fira_Sans({
  weight: ["500"],
  subsets: ["latin"],
  display: "swap",
});

import GoogleAnalytics from "./components/GoogleAnalytics";
import CookieConsentBanner from "./components/CookieConsentBanner";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="el" dir="ltr">
      <body className={`${firaSans.className} antialiased`}>
        <GoogleAnalytics />
        {/* Skip Navigation Link */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-red-800 focus:text-white focus:rounded focus:outline-none focus:ring-2 focus:ring-red-600 focus:ring-offset-2"
        >
          Πήγαινε στο κύριο περιεχόμενο
        </a>

        <PageImageLoader />
        <CookieConsentBanner />
        {children}

        {/* WebSite Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              url: "https://www.kougioumoutzakisbakery.gr",
              name: "Αρτοποιία Κουγιουμουτζάκης",
              description:
                "Παραδοσιακός φούρνος στην Ιεράπετρα με τέσσερις γενιές εμπειρίας από το 1916",
              inLanguage: "el",
            }),
          }}
        />

        {/* Organization Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Αρτοποιία Κουγιουμουτζάκης",
              url: "https://www.kougioumoutzakisbakery.gr",
              logo: "https://www.kougioumoutzakisbakery.gr/logos/logo.png",
              image: "https://www.kougioumoutzakisbakery.gr/images/og.png",
              description:
                "Παραδοσιακός φούρνος στην Ιεράπετρα με τέσσερις γενιές εμπειρίας. Φρέσκο ψωμί, ζαχαροπλαστικά και καφές με αγάπη και φροντίδα.",
              foundingDate: "1916",
              telephone: "+302842022463",
              email: "info@kougioumoutzakisbakery.gr",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Κουτάντου 9",
                addressLocality: "Ιεράπετρα",
                postalCode: "72200",
                addressCountry: "GR",
              },
              sameAs: [
                "https://www.facebook.com/kougioumoutzakisbakery",
                "https://www.instagram.com/kougioumoutzakisbakery",
              ],
            }),
          }}
        />

        {/* Main Bakery Location - Store 1 */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Bakery",
              "@id": "https://www.kougioumoutzakisbakery.gr/#bakery-store1",
              name: "Αρτοποιία Κουγιουμουτζάκης - Κεντρικό Κατάστημα",
              image: [
                "https://www.kougioumoutzakisbakery.gr/images/katasthma1.jpg",
                "https://www.kougioumoutzakisbakery.gr/images/pswmi2.jpg",
                "https://www.kougioumoutzakisbakery.gr/images/og.png",
              ],
              description:
                "Κεντρικό κατάστημα αρτοποιείο με παραδοσιακά ψωμιά, ζαχαροπλαστικά και φρέσκα προϊόντα φούρνου από το 1916",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Κουτάντου 9",
                addressLocality: "Ιεράπετρα",
                postalCode: "72200",
                addressCountry: "GR",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: 35.0091,
                longitude: 25.7392,
              },
              telephone: "+302842022463",
              url: "https://www.kougioumoutzakisbakery.gr",
              priceRange: "€",
              servesCuisine: "Greek",
              foundingDate: "1916",
              openingHoursSpecification: [
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: [
                    "Monday",
                    "Tuesday",
                    "Wednesday",
                    "Thursday",
                    "Friday",
                    "Saturday",
                  ],
                  opens: "06:00",
                  closes: "21:00",
                },
              ],
            }),
          }}
        />

        {/* Cafe Location - Store 2 */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": ["Bakery", "CafeOrCoffeeShop"],
              "@id": "https://www.kougioumoutzakisbakery.gr/#bakery-store2",
              name: "Αρτοποιία Κουγιουμουτζάκης - Υποκατάστημα Καφέ",
              image: [
                "https://www.kougioumoutzakisbakery.gr/images/katasthma2.jpg",
                "https://www.kougioumoutzakisbakery.gr/images/kafes1.jpg",
                "https://www.kougioumoutzakisbakery.gr/images/sandwich2.jpg",
              ],
              description:
                "Υποκατάστημα καφέ με φρέσκο ψωμί, καφέ, σάντουιτς και χώρο καθιστικού. Διαθέσιμη παράδοση μέσω Wolt.",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Δημοκρατίας 1",
                addressLocality: "Ιεράπετρα",
                postalCode: "72200",
                addressCountry: "GR",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: 35.0083,
                longitude: 25.7401,
              },
              telephone: "+302842026410",
              url: "https://www.kougioumoutzakisbakery.gr",
              priceRange: "€",
              servesCuisine: "Greek",
              openingHoursSpecification: [
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: [
                    "Monday",
                    "Tuesday",
                    "Wednesday",
                    "Thursday",
                    "Friday",
                    "Saturday",
                  ],
                  opens: "06:00",
                  closes: "21:00",
                },
              ],
              hasMenu: {
                "@type": "Menu",
                hasMenuSection: [
                  {
                    "@type": "MenuSection",
                    name: "Ψωμιά",
                    description: "Παραδοσιακά ψωμιά φτιαγμένα με φυσική ζύμωση",
                  },
                  {
                    "@type": "MenuSection",
                    name: "Καφές",
                    description: "Φρέσκος καφές και ροφήματα",
                  },
                  {
                    "@type": "MenuSection",
                    name: "Σάντουιτς",
                    description: "Φρέσκα σάντουιτς με ποιοτικά υλικά",
                  },
                ],
              },
            }),
          }}
        />
      </body>
    </html>
  );
}
