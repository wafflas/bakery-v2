import type { Metadata } from "next";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import Banner from "@/app/components/Banner";
import ScrollToTop from "@/app/components/ScrollToTop";
import ContactClient from "@/app/components/pages/ContactClient";

export const metadata: Metadata = {
  title: "Επικοινωνία - Αρτοποιία Κουγιουμουτζάκης",
  description:
    "Επικοινωνήστε μαζί μας για παραγγελίες, ερωτήσεις ή σχόλια. Βρείτε τα καταστήματά μας στην Κουτάντου 9 και Δημοκρατίας 1, Ιεράπετρα. Τηλ: 2842022463",
  keywords:
    "επικοινωνία, τηλέφωνο, διεύθυνση, φούρνος Ιεράπετρα, χάρτης, παραγγελίες",
  openGraph: {
    title: "Επικοινωνία - Αρτοποιία Κουγιουμουτζάκης",
    description:
      "Επικοινωνήστε μαζί μας για παραγγελίες, ερωτήσεις ή σχόλια. Δύο καταστήματα στην Ιεράπετρα",
    type: "website",
    locale: "el_GR",
    url: "https://www.kougioumoutzakisbakery.gr/contact",
    siteName: "Αρτοποιία Κουγιουμουτζάκης",
    images: [
      {
        url: "/images/og.png",
        width: 1200,
        height: 630,
        alt: "Επικοινωνία - Αρτοποιία Κουγιουμουτζάκης",
      },
    ],
  },
  alternates: {
    canonical: "/contact",
  },
};

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <Banner
        title="Επικοινωνία"
        backgroundImage="/images/banners/tzenh.jpg"
        breadcrumbs="Επικοινωνία"
        objectPosition="object-[center_0%] lg:object-[center_20%] md:object-[center_20%]"
      />
      <ContactClient />
      <Footer />
      <ScrollToTop />
    </>
  );
}
