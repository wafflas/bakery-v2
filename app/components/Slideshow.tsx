"use client";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { ChevronDown } from "lucide-react";
import Link from "next/link";

const slides = [
  {
    src: "/images/slideshow/isxsnika.jpg",
    alt: "logo",
  },
  {
    src: "/images/slideshow/zumwma.jpg",
    alt: "logo",
  },
  {
    src: "/images/slideshow/pswmi1slide.jpg",
    alt: "logo",
  },
  {
    src: "/images/slideshow/kalathi.jpg",
    alt: "logo",
  },
];

const Slideshow = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const titleRef = useRef<HTMLHeadingElement | null>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeout(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
      }, 1000);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // Split text into spans and trigger a one-time ripple wave animation on mount
  useEffect(() => {
    const element = titleRef.current;
    if (!element) return;

    if (typeof window !== "undefined") {
      const prefersReduced = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;
      if (prefersReduced) return;
    }

    const originalText = (element.textContent ?? "").trim();
    element.setAttribute("aria-label", originalText);

    const fragment = document.createDocumentFragment();
    const characters = Array.from(originalText);
    characters.forEach((char, index) => {
      const span = document.createElement("span");
      span.textContent = char === " " ? "\u00A0" : char;
      span.style.setProperty("--i", String(index));
      span.setAttribute("aria-hidden", "true");
      fragment.appendChild(span);
    });

    element.textContent = "";
    element.appendChild(fragment);

    element.style.setProperty("--ripple-duration", "600ms");
    element.style.setProperty("--ripple-delay", "80ms");
    element.style.setProperty("--ripple-amp", "1");

    element.setAttribute("data-animate", "true");
  }, []);

  return (
    <div className="relative w-full h-screen">
      <Image
        src={slides[currentSlide].src}
        alt={slides[currentSlide].alt}
        fill
        className="object-cover transition-all duration-1000 ease-in-out"
        priority
        sizes="100vw"
      />


      <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 sm:gap-4 text-white px-4 sm:px-6 lg:px-8">
        <Image
          src="/logos/white-logo2.png"
          alt="logo"
          width={200}
          height={67}
          className="pointer-events-none w-32 h-auto sm:w-48 md:w-56 lg:w-64 xl:w-72"
        />

        <h1
          ref={titleRef}
          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold ripple-once text-center leading-tight"
        >
          Φούρνος Κουγιουμουτζάκης
        </h1>

        <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-center max-w-4xl leading-relaxed px-4">
          Παραδοσιακός Κρητικός Φούρνος από το 1916
        </p>

        <Link
          href="/bakery"
          className="text-white text-sm sm:text-base md:text-lg lg:text-xl bg-red-800 px-4 py-2 sm:px-6 sm:py-3 md:px-8 md:py-4 rounded-[20px] mt-2 sm:mt-4 hover:bg-red-900 transition-all duration-300 hover:scale-105"
        >
          Ποιοι είμαστε;
        </Link>
      </div>

      {/* Scroll indicator - responsive positioning */}
      <div className="absolute bottom-4 right-4 sm:bottom-6 sm:right-6 md:bottom-8 md:right-8 z-20">
        <div className="flex flex-col items-center text-white animate-bounce-slow">
          <span className="text-xs sm:text-sm font-medium mb-1 sm:mb-2 opacity-75">
            Scroll
          </span>
          <ChevronDown size={20} className="opacity-75 sm:hidden" />
          <ChevronDown size={24} className="opacity-75 hidden sm:block" />
        </div>
      </div>
    </div>
  );
};

export default Slideshow;
