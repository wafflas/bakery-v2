import type { Metadata } from "next";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import Banner from "@/app/components/Banner";
import ScrollToTop from "@/app/components/ScrollToTop";
import BakeryClient from "@/app/components/pages/BakeryClient";

export const metadata: Metadata = {
  title: "Ο Φούρνος - Αρτοποιία Κουγιουμουτζάκης",
  description:
    "Η ιστορία μας από το 1916 - Τέσσερις γενιές αρτοποιών στην Ιεράπετρα. Παράδοση, ποιότητα και αγάπη για το ψωμί.",
  keywords:
    "αρτοποιία, ιστορία φούρνου, παραδοσιακός φούρνος, Ιεράπετρα, οικογενειακή επιχείρηση, 1916, Κουγιουμουτζάκης",
  openGraph: {
    title: "Ο Φούρνος - Αρτοποιία Κουγιουμουτζάκης",
    description:
      "Η ιστορία μας από το 1916 - Τέσσερις γενιές αρτοποιών στην Ιεράπετρα",
    type: "website",
    locale: "el_GR",
    url: "https://www.kougioumoutzakisbakery.gr/bakery",
    siteName: "Αρτοποιία Κουγιουμουτζάκης",
    images: [
      {
        url: "/images/og.png",
        width: 1200,
        height: 630,
        alt: "Αρτοποιία Κουγιουμουτζάκης - Η Ιστορία μας",
      },
    ],
  },
  alternates: {
    canonical: "/bakery",
  },
};

export default function BakeryPage() {
  return (
    <div className="overflow-hidden">
      <Navbar />
      <Banner
        title="Φούρνος"
        backgroundImage="/images/banners/topswmi.jpg"
        breadcrumbs="Φούρνος"
        objectPosition="object-[center_0%] lg:object-[center_51%] md:object-[center_40%]"
      />
      <BakeryClient />
      <Footer />
      <ScrollToTop />
    </div>
  );
}
