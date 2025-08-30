"use client";
import Image from "next/image";
import React, {
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
  useCallback,
} from "react";
import { ChevronDown } from "lucide-react";
import Link from "next/link";
import { gsap } from "gsap";

const slides = [
  { src: "/images/slideshow/pswmi1slide.jpg", alt: "Ψωμί" },
  { src: "/images/slideshow/zumwma.jpg", alt: "Ζύμωμα" },
  { src: "/images/slideshow/isxsnika.jpg", alt: "Ισχυρώ Νίκα" },
  { src: "/images/slideshow/kalathi.jpg", alt: "Καλάθι" },
];

const Slideshow = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  // Refs
  const containerRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLImageElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const buttonRef = useRef<HTMLAnchorElement>(null);
  const imageRefs = useRef<(HTMLDivElement | null)[]>([]);
  const overlayRef = useRef<HTMLDivElement>(null);
  const rippleDoneRef = useRef(false);

  // Prepare title spans BEFORE reveal to avoid flicker
  const prepareTitleSpans = () => {
    if (!titleRef.current) return;
    const originalText = titleRef.current.textContent || "";
    const words = originalText.split(" ");

    let charIndex = 0;
    const wordElements = words.map((word) => {
      const chars = Array.from(word).map((char) => {
        const span = document.createElement("span");
        span.textContent = char === " " ? "\u00A0" : char;
        span.style.display = "inline-block";
        span.style.opacity = "0";
        span.style.transform = "translateY(10px)";
        span.dataset.char = "1"; // mark as a char
        span.setAttribute("data-char-index", String(charIndex++));
        return span;
      });

      const wordWrapper = document.createElement("span");
      wordWrapper.style.display = "inline-block";
      wordWrapper.style.marginRight = "0.25em";
      chars.forEach((char) => wordWrapper.appendChild(char));
      return wordWrapper;
    });

    titleRef.current.innerHTML = "";
    wordElements.forEach((el, i) => {
      titleRef.current!.appendChild(el);
      if (i < wordElements.length - 1) {
        titleRef.current!.appendChild(document.createTextNode("\u00A0")); // NBSP
      }
    });
    titleRef.current.style.whiteSpace = "pre-wrap";
  };

  // Ripple only once when title first shows
  const animateRippleOnce = () => {
    if (!titleRef.current || rippleDoneRef.current) return;
    rippleDoneRef.current = true;

    const chars = titleRef.current.querySelectorAll<HTMLElement>(
      'span[data-char="1"]'
    );
    const tl = gsap.timeline({ delay: 0.1 });

    tl.to(chars, {
      opacity: 1,
      y: 0,
      duration: 0.35,
      ease: "power2.out",
      stagger: 0.04,
    });
  };

  // Entrance animation
  useLayoutEffect(() => {
    prepareTitleSpans();

    const tl = gsap.timeline({ delay: 0.3 });

    gsap.set(
      [
        logoRef.current,
        titleRef.current,
        subtitleRef.current,
        buttonRef.current,
      ],
      {
        opacity: 0,
        y: 30,
      }
    );
    gsap.set(overlayRef.current, { opacity: 0 });

    tl.to(overlayRef.current, { opacity: 1, duration: 1, ease: "power2.out" })
      .to(
        logoRef.current,
        { opacity: 1, y: 0, duration: 0.9, ease: "power2.out" },
        "-=0.6"
      )
      .to(
        titleRef.current,
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          ease: "power2.out",
          onComplete: animateRippleOnce, // ripple starts now; title never disappears
        },
        "-=0.5"
      )
      .to(
        subtitleRef.current,
        { opacity: 1, y: 0, duration: 0.7, ease: "power2.out" },
        "-=0.4"
      )
      .to(
        buttonRef.current,
        { opacity: 1, y: 0, duration: 0.7, ease: "power2.out" },
        "-=0.4"
      );
  }, []);

  // Low-key crossfade between slides
  const animateSlideChange = useCallback(
    (newSlideIndex: number) => {
      if (isAnimating || newSlideIndex === currentSlide) return;

      setIsAnimating(true);

      const currentEl = imageRefs.current[currentSlide];
      const nextEl = imageRefs.current[newSlideIndex];

      if (currentEl && nextEl) {
        const tl = gsap.timeline({
          onComplete: () => {
            setCurrentSlide(newSlideIndex);
            setIsAnimating(false);
          },
        });

        tl.to(
          currentEl,
          { opacity: 0, duration: 1.0, ease: "sine.inOut" },
          0
        ).to(nextEl, { opacity: 1, duration: 1.0, ease: "sine.inOut" }, 0);
      } else {
        setCurrentSlide(newSlideIndex);
        setIsAnimating(false);
      }
    },
    [currentSlide, isAnimating]
  );

  // Auto slideshow
  useEffect(() => {
    const interval = setInterval(() => {
      if (!isAnimating) {
        const nextSlide = (currentSlide + 1) % slides.length;
        animateSlideChange(nextSlide);
      }
    }, 5000);
    return () => clearInterval(interval);
  }, [currentSlide, isAnimating, animateSlideChange]);

  const handleButtonHover = (isHover: boolean) => {
    if (!buttonRef.current) return;
    gsap.to(buttonRef.current, {
      scale: isHover ? 1.05 : 1,
      y: isHover ? -3 : 0,
      duration: 0.3,
      ease: "power2.out",
    });
  };

  const handleIndicatorClick = (index: number) => {
    if (!isAnimating && index !== currentSlide) animateSlideChange(index);
  };

  return (
    <div
      ref={containerRef}
      className="relative w-full h-screen overflow-hidden"
    >
      {/* Background Images */}
      {slides.map((slide, index) => (
        <div
          key={index}
          ref={(el) => {
            imageRefs.current[index] = el;
          }}
          className="absolute inset-0"
          style={{
            zIndex: index === currentSlide ? 2 : 1,
            opacity: index === currentSlide ? 1 : 0,
          }}
        >
          <Image
            src={slide.src}
            alt={slide.alt}
            fill
            className="object-cover"
            priority={index === 0}
            sizes="100vw"
          />
        </div>
      ))}

      {/* Overlay gradient */}
      <div
        ref={overlayRef}
        className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/50 z-10"
      />

      {/* Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 sm:gap-4 text-white px-4 sm:px-6 lg:px-8 z-20">
        <Image
          ref={logoRef}
          src="/logos/white-logo2.png"
          alt="Logo Κουγιουμουτζάκης"
          width={200}
          height={67}
          priority={true}
          className="pointer-events-none  h-auto w-60 md:w-60 lg:w-64 xl:w-72 drop-shadow-2xl"
        />
        <div className="flex flex-col items-center justify-center">
          <h1
            ref={titleRef}
            className="text-2xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-center leading-tight"
            style={{ textShadow: "0 4px 8px rgba(0, 0, 0, 0.3)" }}
          >
            Αρτοποιία Κουγιουμουτζάκης
          </h1>

          <p
            ref={subtitleRef}
            className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-center max-w-4xl leading-relaxed px-4 drop-shadow-md"
          >
            Παραδοσιακός Κρητικός Φούρνος από το 1916
          </p>
        </div>

        <Link
          ref={buttonRef}
          href="/bakery"
          className="text-white text-sm sm:text-base md:text-lg lg:text-xl bg-red-800 px-4 py-2 sm:px-6 sm:py-3 md:px-8 md:py-4 rounded-[20px] mt-2 sm:mt-4 hover:bg-red-900 transition-colors duration-300 shadow-lg cursor-pointer"
          onMouseEnter={() => handleButtonHover(true)}
          onMouseLeave={() => handleButtonHover(false)}
        >
          Ποιοι είμαστε;
        </Link>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-4 right-4 sm:bottom-6 sm:right-6 md:bottom-8 md:right-8 z-30">
        <div className="flex flex-col items-center text-white animate-bounce-slow">
          <span className="text-xs sm:text-sm font-medium mb-1 sm:mb-2 opacity-75 drop-shadow-md">
            Scroll
          </span>
          <ChevronDown
            size={20}
            className="opacity-75 sm:hidden drop-shadow-md"
          />
          <ChevronDown
            size={24}
            className="opacity-75 hidden sm:block drop-shadow-md"
          />
        </div>
      </div>

      {/* Slide indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-2 z-30">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => handleIndicatorClick(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 cursor-pointer ${
              index === currentSlide
                ? "bg-white scale-125 shadow-lg"
                : "bg-white/50 hover:bg-white/70 hover:scale-110"
            }`}
            aria-label={`Go to slide ${index + 1}`}
            onMouseEnter={(e) => {
              if (index !== currentSlide) {
                gsap.to(e.currentTarget, {
                  scale: 1.1,
                  duration: 0.2,
                  ease: "power2.out",
                });
              }
            }}
            onMouseLeave={(e) => {
              if (index !== currentSlide) {
                gsap.to(e.currentTarget, {
                  scale: 1,
                  duration: 0.2,
                  ease: "power2.out",
                });
              }
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default Slideshow;
