import type { Metadata } from "next";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import Banner from "@/app/components/Banner";
import ScrollToTop from "@/app/components/ScrollToTop";
import StoresClient from "@/app/components/pages/StoresClient";

export const metadata: Metadata = {
  title: "Καταστήματα - Αρτοποιία Κουγιουμουτζάκης",
  description:
    "Επισκεφθείτε τα δύο μας καταστήματα στην Ιεράπετρα. Κεντρικό κατάστημα - Αρτοποιείο στην Κουτάντου 9 και Καφέ στη Δημοκρατίας 1. Παράδοση με Wolt.",
  keywords:
    "καταστήματα, φούρνος Ιεράπετρα, καφέ Ιεράπετρα, Wolt delivery, Κουτάντου, Δημοκρατίας",
  openGraph: {
    title: "Καταστήματα - Αρτοποιία Κουγιουμουτζάκης",
    description:
      "Επισκεφθείτε τα δύο μας καταστήματα στην Ιεράπετρα. Κεντρικό κατάστημα - Αρτοποιείο και Καφέ",
    type: "website",
    locale: "el_GR",
    url: "https://www.kougioumoutzakisbakery.gr/stores",
    siteName: "Αρτοποιία Κουγιουμουτζάκης",
    images: [
      {
        url: "/images/og.png",
        width: 1200,
        height: 630,
        alt: "Καταστήματα Αρτοποιίας Κουγιουμουτζάκης",
      },
    ],
  },
  alternates: {
    canonical: "/stores",
  },
};

export default function StoresPage() {
  return (
    <>
      <Navbar />
      <Banner
        title="Καταστήματα"
        backgroundImage="/images/banners/tampela.jpg"
        breadcrumbs="Καταστήματα"
        objectPosition="object-[center_0%] lg:object-[center_51%] md:object-[center_40%]"
      />
      <StoresClient />
      <Footer />
      <ScrollToTop />
    </>
  );
}
