"use client";
import { useState, useEffect } from "react";
import LoadingSpinner from "./components/LoadingSpinner";
import LandingPage from "./components/arxikh/LandingPage";
import ScrollToTop from "./components/ScrollToTop";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import { Suspense } from "react";

export default function Home() {


  return (
    <>
      <Navbar />
        <Suspense fallback={<LoadingSpinner isLoading fullscreen />}>
          <LandingPage />
        </Suspense>
      <ScrollToTop />
      <Footer />
    </>
  );
}
