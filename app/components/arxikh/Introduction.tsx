"use client";
import Image from "next/image";
import React, { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const Introduction = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const photoMainRef = useRef<HTMLDivElement>(null);
  const photoInsetRef = useRef<HTMLDivElement>(null);
  const mobilePhotoRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      const q = gsap.utils.selector(sectionRef);

      // initial
      gsap.set(cardRef.current, { opacity: 0, y: 40 });
      gsap.set(
        q(
          ".intro-eyebrow, .intro-title, .intro-sub, .intro-p, .intro-li, .intro-cta, .intro-stat",
        ),
        { opacity: 0, y: 16 },
      );
      gsap.set(
        [photoMainRef.current, photoInsetRef.current, mobilePhotoRef.current],
        { opacity: 0, y: 30, scale: 0.98, rotate: -2 },
      );

      // reveal on scroll
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          end: "top 20%",
          toggleActions: "play none none reverse",
        },
      });

      tl.to(cardRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.6,
        ease: "power2.out",
      })
        .to(
          ".intro-eyebrow",
          { opacity: 1, y: 0, duration: 0.4, ease: "power2.out" },
          "-=0.2",
        )
        .to(
          ".intro-title",
          { opacity: 1, y: 0, duration: 0.55, ease: "power2.out" },
          "-=0.1",
        )
        .to(
          ".intro-sub",
          { opacity: 1, y: 0, duration: 0.5, ease: "power2.out" },
          "-=0.3",
        )
        .to(
          ".intro-p",
          {
            opacity: 1,
            y: 0,
            duration: 0.5,
            ease: "power2.out",
            stagger: 0.06,
          },
          "-=0.3",
        )
        .to(
          ".intro-li",
          {
            opacity: 1,
            y: 0,
            duration: 0.45,
            ease: "power2.out",
            stagger: 0.05,
          },
          "-=0.35",
        )
        .to(
          ".intro-stat",
          {
            opacity: 1,
            y: 0,
            duration: 0.45,
            ease: "power2.out",
            stagger: 0.05,
          },
          "-=0.35",
        )
        .to(
          ".intro-cta",
          { opacity: 1, y: 0, duration: 0.5, ease: "power2.out" },
          "-=0.2",
        )
        .to(
          photoMainRef.current,
          {
            opacity: 1,
            y: 0,
            rotate: 0,
            scale: 1,
            duration: 0.7,
            ease: "power2.out",
          },
          "-=0.25",
        )
        .to(
          photoInsetRef.current,
          {
            opacity: 1,
            y: 0,
            rotate: 0,
            scale: 1,
            duration: 0.7,
            ease: "power2.out",
          },
          "-=0.5",
        )
        .to(
          mobilePhotoRef.current,
          {
            opacity: 1,
            y: 0,
            rotate: 0,
            scale: 1,
            duration: 0.6,
            ease: "power2.out",
          },
          "-=0.5",
        );

      // Desktop gentle float loop handled by CSS now (animate-float)

      // number counters (animate from 1 to data-target)
      q(".intro-stat-num").forEach((el) => {
        const node = el as HTMLElement;
        const targetAttr = node.getAttribute("data-target");
        const target = targetAttr ? parseInt(targetAttr, 10) : NaN;
        if (!Number.isFinite(target)) return;

        const obj = { val: 1 };
        gsap.to(obj, {
          val: target,
          duration: 1.2,
          ease: "power2.out",
          scrollTrigger: { trigger: node, start: "top 95%", once: true },
          onUpdate: () => {
            node.textContent = String(Math.floor(obj.val));
          },
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full px-6 sm:px-6 md:px-8 lg:px-10 py-14 md:py-14 lg:py-14 "
    >
      <div
        ref={cardRef}
        className="relative mx-auto w-full max-w-[100rem] xl:max-w-[110rem] overflow-hidden rounded-[28px] md:rounded-[40px] shadow-[0_24px_70px_rgba(0,0,0,0.12)] ring-1 ring-black/5 bg-gradient-to-br from-[#fde8bf] via-[#fee2b1] to-[#f9dba5] min-h-[72vh] md:min-h-[620px] lg:min-h-[760px] will-change-transform will-change-opacity"
      >
        {/* background pattern */}
        <div className="pointer-events-none absolute inset-0 opacity-[0.03] [background-image:radial-gradient(black_1px,transparent_1px)] [background-size:18px_18px]" />

        {/* mobile hero image */}
        <div className="relative lg:hidden">
          <div ref={mobilePhotoRef} className="relative w-full aspect-[13/10]">
            <Image
              src="/images/mizes.jpg"
              alt="Οικογενειακή επιχείρηση"
              fill
              sizes="100vw"
              className="object-cover"
              priority={false}
            />
          </div>
        </div>

        <div className="relative grid gap-10 md:gap-12 lg:grid-cols-2 p-6 sm:p-8 md:p-12 lg:p-16">
          {/* LEFT: Content */}
          <div className="relative z-10 max-w-2xl">
            <p className="intro-eyebrow text-sm md:text-base font-semibold tracking-widest uppercase text-red-800/90">
              Από το 1916
            </p>

            <h2 className="intro-title mt-2 text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#3d3b32] will-change-transform will-change-opacity">
              Αρτοποιία <span className="text-red-800">Κουγιουμουτζάκης</span>
            </h2>

            <p className="intro-sub mt-4 text-lg md:text-xl text-[#3d3b32]/90">
              Η Αρτοποιία Κουγιουμουτζάκης είναι ένας παραδοσιακός Κρητικός
              φούρνος στην <span className="font-extrabold">Ιεράπετρα</span> της
              Κρήτης απο το 1916. Συνεχίζουμε την οικογενειακή παράδοση για 4η
              γενιά και δημιουργούμε καθημερινά για εσάς χειροποίητα
              αρτοσκευάσματα συνδυάζοντας την παράδοση με μοντέρνες ιδέες!
            </p>

            <div className="mt-6 space-y-3">
              <p className="intro-p text-[#3d3b32]/90 text-base md:text-lg leading-7 md:leading-8">
                Με πρώτες ύλες κορυφαίας ποιότητας και συνταγές που εξελίσσονται
                διαρκώς, χωρίς να χάνουν την αυθεντική τους γεύση.
              </p>
              <p className="intro-p text-[#3d3b32]/90 text-base md:text-lg leading-7 md:leading-8">
                Από πρωινά και σφολιάτες, μέχρι παραδοσιακά ψωμιά και
                επιλεγμένες γλυκές δημιουργίες — όλα ψήνονται φρέσκα για εσάς.
              </p>
            </div>

            {/* Feature list */}
            <ul className="mt-6 space-y-3">
              <li className="intro-li relative pl-6 text-[#3d3b32] text-base md:text-lg leading-7">
                <span className="absolute left-0 top-2 block h-2 w-2 rounded-full bg-red-800" />
                Φρέσκα ψωμιά ημέρας με προζύμι
              </li>
              <li className="intro-li relative pl-6 text-[#3d3b32] text-base md:text-lg leading-7">
                <span className="absolute left-0 top-2 block h-2 w-2 rounded-full bg-red-800" />
                Ποικιλία σε σφολιάτες & γλυκά
              </li>
              <li className="intro-li relative pl-6 text-[#3d3b32] text-base md:text-lg leading-7">
                <span className="absolute left-0 top-2 block h-2 w-2 rounded-full bg-red-800" />
                Εκλεκτός καφές για κάθε στιγμή
              </li>
              <li className="intro-li relative pl-6 text-[#3d3b32] text-base md:text-lg leading-7">
                <span className="absolute left-0 top-2 block h-2 w-2 rounded-full bg-red-800" />
                Τοπικές πρώτες ύλες & σταθερή ποιότητα
              </li>
            </ul>

            {/* Stats with GSAP counters */}
            <div className="mt-8 grid grid-cols-3 gap-3 sm:gap-6 max-w-md">
              <div className="intro-stat">
                <p className="text-3xl md:text-4xl font-extrabold text-[#3d3b32] flex items-baseline">
                  <span
                    className="intro-stat-num inline-block w-[24px] text-center"
                    data-target="4"
                  >
                    1
                  </span>
                </p>
                <p className="text-sm md:text-base text-[#3d3b32]/70">Γενιές</p>
              </div>
              <div className="intro-stat">
                <p className="text-3xl md:text-4xl font-extrabold text-[#3d3b32] flex items-baseline">
                  <span
                    className="intro-stat-num inline-block w-[68px] text-center"
                    data-target="100"
                  >
                    1
                  </span>
                  <span>+</span>
                </p>
                <p className="text-sm md:text-base text-[#3d3b32]/70">Χρόνια</p>
              </div>
              <div className="intro-stat">
                <p className="text-3xl md:text-4xl font-extrabold text-[#3d3b32] flex items-baseline">
                  <span
                    className="intro-stat-num inline-block w-[68px] text-center"
                    data-target="100"
                  >
                    1
                  </span>
                  <span>+</span>
                </p>
                <p className="text-sm md:text-base text-[#3d3b32]/70">
                  Προϊόντα
                </p>
              </div>
            </div>

            {/* CTAs */}
            <div className="intro-cta mt-8 flex flex-row items-center gap-4">
              <a
                href="/products"
                className="inline-flex items-center justify-center rounded-2xl bg-red-800 px-4 py-3 text-white font-semibold shadow-[0_12px_28px_rgba(153,27,27,0.35)] hover:bg-red-900 transition-colors"
              >
                Δες τα προϊόντα
              </a>
              <a
                href="/stores"
                className="inline-flex items-center justify-center rounded-2xl bg-white/80 px-3 py-3 text-[#3d3b32] font-semibold ring-1 ring-black/10 hover:bg-white transition-colors"
              >
                Που θα μας βρείτε
              </a>
            </div>
          </div>

          {/* RIGHT: Desktop Photos */}
          <div className="relative hidden lg:block">
            <div
              ref={photoMainRef}
              className="absolute -right-2 top-2 w-[68%] aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl will-change-transform will-change-opacity"
            >
              <div className="w-full h-full animate-float">
                <Image
                  src="/images/mizes.jpg"
                  alt="Φρέσκο πρωινό"
                  fill
                  sizes="(min-width:1024px) 44vw"
                  className="object-cover"
                  priority={false}
                />
              </div>
            </div>

            <div
              ref={photoInsetRef}
              className="absolute left-0 bottom-0 w-[52%] aspect-square rounded-3xl overflow-hidden shadow-xl will-change-transform will-change-opacity"
            >
              <div className="w-full h-full animate-float-delayed">
                <Image
                  src="/images/giagia.jpg"
                  alt="Παράδοση από γενιά σε γενιά"
                  fill
                  sizes="(min-width:1024px) 32vw"
                  className="object-cover"
                  priority={false}
                />
              </div>
            </div>
          </div>
        </div>

        {/* mobile footer image (appears at bottom of section) */}
        <div className="relative lg:hidden">
          <div ref={mobilePhotoRef} className="relative w-full aspect-[16/10]">
            <Image
              src="/images/giagia.jpg"
              alt="Παράδοση από γενιά σε γενιά"
              fill
              sizes="100vw"
              className="object-cover"
              priority={false}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Introduction;
