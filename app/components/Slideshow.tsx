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

    // Tune animation via CSS variables on the element itself

    element.style.setProperty("--ripple-duration", "600ms");
    element.style.setProperty("--ripple-delay", "80ms");
    element.style.setProperty("--ripple-amp", "1");

    // Trigger the animation once
    element.setAttribute("data-animate", "true");
  }, []);

  return (
    <div className="relative w-screen h-screen">
      <Image
        src={slides[currentSlide].src}
        alt={slides[currentSlide].alt}
        width={1000}
        height={1000}
        className="object-cover w-full h-full transition-all duration-1000 ease-in-out"
        priority
      />

      <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 text-white">
        <Image
          src="/logos/white-logo2.png"
          alt="logo"
          width={300}
          height={100}
          className="pointer-events-none"
        />
        <h1 ref={titleRef} className="text-[4rem] font-bold ripple-once">
          Φούρνος Κουγιουμουτζάκης
        </h1>
        <p className="text-[2rem]">Παραδοσιακός Κρητικός Φούρνος από το 1916</p>
        <Link
          href="/bakery"
          className="text-white text-[1.5rem] bg-red-800 p-4 rounded-[20px] mt-4 hover:bg-red-900 transition-all duration-300"
        >
          Ποιοι είμαστε
        </Link>
      </div>

      <div className="absolute bottom-8 right-8 z-20">
        <div className="flex flex-col items-center text-white animate-bounce-slow">
          <span className="text-sm font-medium mb-2 opacity-75">Scroll</span>
          <ChevronDown size={24} className="opacity-75" />
        </div>
      </div>
    </div>
  );
};

export default Slideshow;
