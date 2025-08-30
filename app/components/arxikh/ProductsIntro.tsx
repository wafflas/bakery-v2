"use client";
import React, { useRef, useLayoutEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const ProductsIntro = () => {
  // Animation refs
  const titleRef = useRef<HTMLHeadingElement>(null);
  const cardsRef = useRef<(HTMLAnchorElement | null)[]>([]);

  // GSAP animations
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Title Animation
      if (titleRef.current) {
        gsap.fromTo(
          titleRef.current,
          { opacity: 0, y: 30, scale: 0.95 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: titleRef.current,
              start: "top 85%",
              end: "top 15%",
              toggleActions: "play none none reverse",
            },
          }
        );
      }

      // Cards Animation - Left to Right sequence
      if (cardsRef.current.length > 0) {
        gsap.fromTo(
          cardsRef.current,
          {
            opacity: 0,
            x: -100,
            scale: 0.9,
            rotationY: -15,
          },
          {
            opacity: 1,
            x: 0,
            scale: 1,
            rotationY: 0,
            duration: 0.8,
            ease: "power3.out",
            stagger: 0.2, // 0.2 second delay between each card
            scrollTrigger: {
              trigger: cardsRef.current[0],
              start: "top 80%",
              end: "top 20%",
              toggleActions: "play none none reverse",
            },
          }
        );
      }
    });

    return () => ctx.revert();
  }, []);

  const products = [
    {
      title: "Το ψωμί μας",
      subtitle: "παραδοσιακή συνταγή 4 γενεών",
      image: "/images/banners/topswmi.jpg",
      alt: "Ψωμί",
      href: "/products/bread",
    },
    {
      title: "Ζαχαροπλαστική",
      subtitle: "γλυκά & εκλεκτά",
      image: "/images/gluka.jpg",
      alt: "Γλυκά",
      href: "/products/sweets",
    },
    {
      title: "Καφές & Αρτοσκευάσματα",
      subtitle: "άρτιος καφές",
      image: "/images/kafes1.jpg",
      alt: "Καφές",
      href: "/products/coffee",
    },
  ];

  return (
    <div className="w-full py-16 px-8">
      <div className="max-w-7xl mx-auto">
        <h1
          ref={titleRef}
          className="text-4xl md:text-5xl text-black font-bold mb-12 text-center"
        >
          Γιατί <span className="text-red-800">εμάς;</span>
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {products.map((product, index) => (
            <Link
              key={index}
              href={product.href}
              ref={(el) => {
                cardsRef.current[index] = el;
              }}
              className="group relative overflow-hidden rounded-2xl aspect-square hover:scale-105 transition-transform duration-300"
            >
              <Image
                src={product.image}
                alt={product.alt}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-opacity-40 group-hover:bg-opacity-30 transition-all duration-300" />
              <div className="absolute inset-0 flex flex-col justify-end p-6 text-white">
                <div className="space-y-2">
                  <h3 className="text-xl md:text-2xl font-bold leading-tight">
                    {product.title}
                  </h3>
                  {product.subtitle && (
                    <p className="text-sm md:text-base opacity-90 leading-relaxed">
                      {product.subtitle}
                    </p>
                  )}
                </div>
                <div className="mt-4 w-8 h-8 rounded-full border-2 border-white flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductsIntro;
