"use client";
import React, { useRef, useLayoutEffect } from "react";
import Image from "next/image";
import { PhoneCall, MapPin } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

export default function StoresClient() {
  // Animation refs
  const mainStoreRef = useRef<HTMLDivElement>(null);
  const cafeStoreRef = useRef<HTMLDivElement>(null);
  const woltPromoRef = useRef<HTMLDivElement>(null);
  const deliveryHoursRef = useRef<HTMLDivElement>(null);

  // GSAP animations
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Main Store Animation
      if (mainStoreRef.current) {
        gsap.fromTo(
          mainStoreRef.current,
          { opacity: 0, y: 50, scale: 0.98 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: mainStoreRef.current,
              start: "top 85%",
              end: "top 15%",
              toggleActions: "play none none reverse",
            },
          }
        );
      }

      // Cafe Store Animation
      if (cafeStoreRef.current) {
        gsap.fromTo(
          cafeStoreRef.current,
          { opacity: 0, y: 50, scale: 0.98 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: cafeStoreRef.current,
              start: "top 85%",
              end: "top 15%",
              toggleActions: "play none none reverse",
            },
          }
        );
      }

      // Wolt Promo Animation
      if (woltPromoRef.current) {
        gsap.fromTo(
          woltPromoRef.current,
          { opacity: 0, y: 40, scale: 0.98 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: woltPromoRef.current,
              start: "top 85%",
              end: "top 15%",
              toggleActions: "play none none reverse",
            },
          }
        );
      }

      // Delivery Hours Animation
      if (deliveryHoursRef.current) {
        gsap.fromTo(
          deliveryHoursRef.current,
          { opacity: 0, y: 40, scale: 0.98 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: deliveryHoursRef.current,
              start: "top 85%",
              end: "top 15%",
              toggleActions: "play none none reverse",
            },
          }
        );
      }
    });

    return () => ctx.revert();
  }, []);

  return (
    <main className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 pt-6 py-6 md:py-10">
      <div className="grid lg:grid-cols-2 gap-6 md:gap-8">
        {/*Left main store */}
        <section
          ref={mainStoreRef}
          className="rounded-3xl bg-gradient-to-br from-[#fde8bf] via-[#fee2b1] to-[#f9dba5] p-5 md:p-6 lg:p-8 shadow-[0_12px_40px_rgba(0,0,0,0.12)] ring-1 ring-black/5"
        >
          <header className="flex justify-center items-center mb-4 md:mb-6">
            <h1 className="text-[#3d3b32] text-xl md:text-2xl font-extrabold">
              Κεντρικό Κατάστημα - Αρτοποιείο
            </h1>
          </header>

          <div className="relative overflow-hidden rounded-3xl">
            <Image
              src="/images/katasthma1.jpg"
              alt="Κεντρικό κατάστημα - Αρτοποιείο"
              width={1200}
              height={900}
              className="w-full h-64 md:h-96 object-cover transition-transform duration-500 hover:scale-[1.02]"
              priority
            />
            <span className="absolute left-3 top-3 rounded-full bg-black/70 text-white text-xs font-semibold px-3 py-1 ring-1 ring-black/20">
              Φούρνος
            </span>
          </div>

          <div className="mt-4 flex flex-wrap gap-2 text-[#3d3b32]">
            <span className="px-3 py-1 rounded-full bg-white/80 backdrop-blur text-sm font-semibold ring-1 ring-black/10">
              Παραδοσιακός φούρνος
            </span>
            <span className="px-3 py-1 rounded-full bg-white/80 backdrop-blur text-sm font-semibold ring-1 ring-black/10">
              Καθημερινό ζύμωμα
            </span>
          </div>

          <div className="mt-4 space-y-2 text-[#3d3b32]">
            <div className="flex items-center gap-2 text-base md:text-lg font-medium">
              <PhoneCall size={18} className="text-[#8b1e1e]" />
              <span>2842 022463</span>
            </div>
            <div className="flex items-center gap-2 text-base md:text-lg font-medium">
              <MapPin size={18} className="text-[#3d3b32]" />
              <span>Κουτάντου 9, Ιεράπετρα</span>
            </div>
          </div>

          <div className="mt-5 flex flex-wrap gap-3">
            <a
              href="tel:2842022463"
              aria-label="Κλήση Κεντρικού Καταστήματος"
              className="inline-flex items-center gap-2 rounded-xl bg-red-800 text-white px-4 py-2 text-sm font-semibold shadow-sm hover:bg-red-900 transition-colors"
            >
              <PhoneCall size={16} className="text-white" />
              Κλήση
            </a>
          </div>
        </section>

        {/*Right secondary store */}
        <section
          ref={cafeStoreRef}
          className="rounded-3xl bg-gradient-to-br from-[#fde8bf] via-[#fee2b1] to-[#f9dba5] p-5 md:p-6 lg:p-8 shadow-[0_12px_40px_rgba(0,0,0,0.12)] ring-1 ring-black/5"
        >
          <header className="flex justify-center items-center mb-4 md:mb-6">
            <h1 className="text-[#3d3b32] text-xl md:text-2xl font-extrabold">
              Υποκατάστημα Καφέ
            </h1>
          </header>

          <div className="relative overflow-hidden rounded-3xl">
            <Image
              src="/images/katasthma2.jpg"
              alt="Υποκατάστημα Καφέ"
              width={1200}
              height={900}
              className="w-full h-64 md:h-96 object-cover transition-transform duration-500 hover:scale-[1.02]"
            />
            <span className="absolute left-3 top-3 rounded-full bg-black/70 text-white text-xs font-semibold px-3 py-1 ring-1 ring-black/20">
              Καφέ
            </span>
          </div>

          <div className="mt-4 flex flex-wrap gap-2 text-[#3d3b32]">
            <span className="px-3 py-1 rounded-full bg-white/80 backdrop-blur text-sm font-semibold ring-1 ring-black/10">
              Καφές &amp; σνακ
            </span>
            <span className="px-3 py-1 rounded-full bg-white/80 backdrop-blur text-sm font-semibold ring-1 ring-black/10">
              Καθιστικό
            </span>
            <span className="px-3 py-1 rounded-full bg-white/80 backdrop-blur text-sm font-semibold ring-1 ring-black/10">
              Παραλία κοντά
            </span>
          </div>

          <div className="mt-4 space-y-2 text-[#3d3b32]">
            <div className="flex items-center gap-2 text-base md:text-lg font-medium">
              <PhoneCall size={18} className="text-[#8b1e1e]" />
              <span>2842 026410</span>
            </div>
            <div className="flex items-center gap-2 text-base md:text-lg font-medium">
              <MapPin size={18} className="text-[#3d3b32]" />
              <span>Δημοκρατίας 1, Ιεράπετρα</span>
            </div>
          </div>

          <div className="mt-5 flex flex-wrap gap-3">
            <a
              href="tel:2842026410"
              aria-label="Κλήση Υποκαταστήματος Καφέ"
              className="inline-flex items-center gap-2 rounded-xl bg-red-800 text-white px-4 py-2 text-sm font-semibold shadow-sm hover:bg-red-900 transition-colors"
            >
              <PhoneCall size={16} className="text-white" />
              Κλήση
            </a>
            <a
              href="https://wolt.com/el/grc/ierapetra/restaurant/kouyioumatzakis-bakery-coffee"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-xl bg-[#00b5e2] px-4 py-2 text-white text-sm font-semibold shadow-sm hover:bg-[#00a2ca] transition-colors"
            >
              Παραγγελία Wolt
            </a>
          </div>
        </section>
      </div>

      {/* Wolt promo */}
      <section ref={woltPromoRef} className="mt-10 md:mt-14 gap-6">
        <div className="rounded-3xl w-full bg-gradient-to-br from-[#e7f9ff] to-[#d9f3ff] ring-1 ring-black/5 p-6 md:p-8">
          <h2 className="text-2xl font-extrabold text-[#3d3b32] lg:text-3xl">
            Παράδοση στο σπίτι με Wolt
          </h2>
          <p className="mt-2 text-[#5b5952] lg:text-xl">
            Άμα βρίσκεστε στην Ιεράπετρα, μπορείτε να παραγγείλετε τα
            αγαπημένα σας ψωμιά, σνακ και καφέδες απευθείας από την εφαρμογή
            Wolt.
          </p>

          <div className="mt-4 flex flex-row gap-6 items-center justify-between">
            <ul className="space-y-2 text-[#3d3b32] text-sm w-full lg:text-xl">
              <li className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-[#00b5e2]" />
                Γρήγορη παράδοση
              </li>
              <li className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-[#00b5e2]" />
                Live tracking
              </li>
              <li className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-[#00b5e2]" />
                Ασφαλείς πληρωμές
              </li>
            </ul>

            <div className="flex flex-col items-end gap-3">
              <div className="hidden sm:flex items-center justify-end">
                <Image
                  src="/logos/wolt-logo.png"
                  alt="Wolt"
                  width={260}
                  height={200}
                  className="rounded-full w-[160px] h-auto"
                />
              </div>
              <a
                href="https://wolt.com/el/grc/ierapetra/restaurant/kouyioumatzakis-bakery-coffee"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-xl bg-[#00b5e2] px-4 py-2 text-white text-sm font-semibold shadow-sm hover:bg-[#00a2ca] transition-colors"
              >
                Παραγγείλετε τώρα
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Delivery hours */}
      <section ref={deliveryHoursRef} className="mt-10 md:mt-14">
        <div className="rounded-3xl bg-gray-100 ring-1 ring-black/5 p-6 md:p-8">
          <h2 className="text-2xl font-extrabold text-[#3d3b32]">
            Ώρες διανομής
          </h2>
          <dl className="mt-4 divide-y divide-black/10">
            <div className="flex items-center justify-between py-2">
              <dt className="font-semibold text-[#3d3b32]">Δευτέρα</dt>
              <dd className="text-[#3d3b32]">08:00–13:30</dd>
            </div>
            <div className="flex items-center justify-between py-2">
              <dt className="font-semibold text-[#3d3b32]">Τρίτη</dt>
              <dd className="text-[#3d3b32]">08:00–13:30</dd>
            </div>
            <div className="flex items-center justify-between py-2">
              <dt className="font-semibold text-[#3d3b32]">Τετάρτη</dt>
              <dd className="text-[#3d3b32]">08:00–13:30</dd>
            </div>
            <div className="flex items-center justify-between py-2">
              <dt className="font-semibold text-[#3d3b32]">Πέμπτη</dt>
              <dd className="text-[#3d3b32]">08:00–13:30</dd>
            </div>
            <div className="flex items-center justify-between py-2">
              <dt className="font-semibold text-[#3d3b32]">Παρασκευή</dt>
              <dd className="text-[#3d3b32]">08:00–13:30</dd>
            </div>
            <div className="flex items-center justify-between py-2">
              <dt className="font-semibold text-[#3d3b32]">Σάββατο</dt>
              <dd className="text-[#3d3b32]">08:00–13:30</dd>
            </div>
            <div className="flex items-center justify-between py-2">
              <dt className="font-semibold text-[#3d3b32]">Κυριακή</dt>
              <dd className="text-[#3d3b32]">Κλειστό</dd>
            </div>
          </dl>
          <p className="mt-2 text-sm text-[#3d3b32]/70">
            Οι ώρες αφορούν διανομή κατ' οίκον.
          </p>
          <Image
            src="/logos/wolt-logo.png"
            alt="Wolt"
            width={260}
            height={200}
            className="rounded-2xl w-[120px] h-auto mt-4 mx-auto justify-center items-center md:hidden lg:hidden"
          />
        </div>
      </section>
    </main>
  );
}

