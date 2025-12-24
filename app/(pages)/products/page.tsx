import type { Metadata } from "next";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import Banner from "@/app/components/Banner";
import ScrollToTop from "@/app/components/ScrollToTop";
import ProductsClient from "@/app/components/pages/ProductsClient";

export const metadata: Metadata = {
  title: "Προϊόντα - Αρτοποιία Κουγιουμουτζάκης",
  description:
    "Φρέσκα ψωμιά, ζαχαροπλαστικά, σφολιάτες, παξιμάδια και άλλα παραδοσιακά προϊόντα φούρνου. Ποιότητα και γεύση από το 1916.",
  keywords:
    "ψωμί, προϊόντα φούρνου, ζαχαροπλαστική, σφολιάτες, παξιμάδια, κριτσίνια, σάντουιτς, Ιεράπετρα",
  openGraph: {
    title: "Προϊόντα - Αρτοποιία Κουγιουμουτζάκης",
    description:
      "Φρέσκα ψωμιά, ζαχαροπλαστικά, σφολιάτες και άλλα παραδοσιακά προϊόντα φούρνου",
    type: "website",
    locale: "el_GR",
    url: "https://www.kougioumoutzakisbakery.gr/products",
    siteName: "Αρτοποιία Κουγιουμουτζάκης",
    images: [
      {
        url: "/images/og.png",
        width: 1200,
        height: 630,
        alt: "Προϊόντα Αρτοποιίας Κουγιουμουτζάκης",
      },
    ],
  },
  alternates: {
    canonical: "/products",
  },
};

export default function ProductsPage() {
  return (
    <>
      <Navbar />
      <Banner
        title="Προϊόντα"
        backgroundImage="/images/banners/pswmi4.jpg"
        breadcrumbs="Προϊόντα"
        objectPosition="object-[center_0%] lg:object-[center_40%] md:object-[center_40%]"
      />
      <ProductsClient />
      <Footer />
      <ScrollToTop />
    </>
  );
}
