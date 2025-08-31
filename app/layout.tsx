import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Fira_Sans } from "next/font/google";
import RouteLoadingOverlay from "./components/RouteLoadingOverlay";

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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="el" dir="ltr">
      <body className={`${firaSans.className} antialiased`}>
        {/* Skip Navigation Link */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-red-800 focus:text-white focus:rounded focus:outline-none focus:ring-2 focus:ring-red-600 focus:ring-offset-2"
        >
          Πήγαινε στο κύριο περιεχόμενο
        </a>

        <RouteLoadingOverlay />
        {children}

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              url: "https://www.kougioumoutzakisbakery.gr",
              name: "Αρτοποιία Κουγιουμουτζάκης",
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Αρτοποιία Κουγιουμουτζάκης",
              url: "https://www.kougioumoutzakisbakery.gr",
              logo: "https://www.kougioumoutzakisbakery.gr/logos/logo.png",
            }),
          }}
        />
      </body>
    </html>
  );
}
