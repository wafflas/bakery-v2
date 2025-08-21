"use client";
import { useState, useEffect } from "react";
import LoadingSpinner from "./components/LoadingSpinner";
import LandingPage from "./components/LandingPage";
import ScrollToTop from "./components/ScrollToTop";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000); 

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Navbar />
      <LoadingSpinner isLoading={isLoading} />
      <div
        className={`min-h-screen ${
          isLoading ? "opacity-0" : "opacity-100"
        } transition-opacity duration-500`}
      > 
        <LandingPage />
      </div>
      <ScrollToTop />
      <Footer />
    </>
  );
}
