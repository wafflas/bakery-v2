"use client";
import LandingPage from "./components/arxikh/LandingPage";
import ScrollToTop from "./components/ScrollToTop";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <LandingPage />
      <ScrollToTop />
      <Footer />
    </>
  );
}
