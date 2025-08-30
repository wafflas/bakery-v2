"use client";
import React, { useState, useEffect, useRef, useLayoutEffect } from "react";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import Logo from "@/app/components/Logo";
import { MapPin, Navigation2, PhoneCall, Send } from "lucide-react";
import LoadingSpinner from "@/app/components/LoadingSpinner";
import Banner from "@/app/components/Banner";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ScrollToTop from "@/app/components/ScrollToTop";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const ContactPage = () => {
  const locations = [
    {
      key: "central",
      title: "Χάρτης — Κεντρικό Κατάστημα",
      name: "Κεντρικό Κατάστημα",
      address: "Κουτάντου 9 , Ιεράπετρα",
      tel: "+302842022463",
      mapsQuery: "Κουτάντου 9 , Ιεράπετρα",
    },
    {
      key: "cafe",
      title: "Χάρτης — Υποκατάστημα Καφέ",
      name: "Υποκατάστημα Καφέ",
      address: "Δημοκρατίας 1 , Ιεράπετρα",
      tel: "+302842022463",
      mapsQuery: "Δημοκρατίας 1 , Ιεράπετρα",
    },
  ];

  // Defer map mount until page finishes initial load animation/spinner
  const [deferMaps, setDeferMaps] = useState(true);
  const [mapLoading, setMapLoading] = useState<boolean[]>([]);
  useEffect(() => {
    const id = setTimeout(() => {
      setDeferMaps(false);
      setMapLoading(Array(locations.length).fill(true));
    }, 500); // align with your page spinner/min delay
    return () => clearTimeout(id);
  }, [locations.length]);

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");
  const formRef = useRef<HTMLFormElement>(null);

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    const form = formRef.current;
    if (!form) return;

    const formData = new FormData(form);
    const data = {
      email: formData.get("email"),
      name: formData.get("name"),
      subject: formData.get("subject"),
      message: formData.get("message"),
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setSubmitStatus("success");
        form.reset();
      } else {
        setSubmitStatus("error");
      }
    } catch (error: unknown) {
      console.error("Error submitting form:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  // Animation refs
  const mapsRef = useRef<HTMLDivElement>(null);
  const contactFormRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);

  // GSAP animations
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Maps Section Animation
      if (mapsRef.current) {
        gsap.fromTo(
          mapsRef.current,
          { opacity: 0, y: 50, scale: 0.98 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: mapsRef.current,
              start: "top 85%",
              end: "top 15%",
              toggleActions: "play none none reverse",
            },
          }
        );
      }

      // Form Section Animation
      if (contactFormRef.current) {
        gsap.fromTo(
          contactFormRef.current,
          { opacity: 0, y: 50, scale: 0.98 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: contactFormRef.current,
              start: "top 85%",
              end: "top 15%",
              toggleActions: "play none none reverse",
            },
          }
        );
      }

      // Logo Animation
      if (logoRef.current) {
        gsap.fromTo(
          logoRef.current,
          { opacity: 0, scale: 0.8, rotation: -5 },
          {
            opacity: 1,
            scale: 1,
            rotation: 0,
            duration: 1.2,
            ease: "power3.out",
            scrollTrigger: {
              trigger: logoRef.current,
              start: "top 90%",
              end: "top 10%",
              toggleActions: "play none none reverse",
            },
          }
        );
      }
    });

    return () => ctx.revert();
  }, []);

  return (
    <>
      <Navbar />
      <Banner
        title="Επικοινωνία"
        backgroundImage="/images/banners/tzenh.jpg"
        breadcrumbs="Επικοινωνία"
        objectPosition="object-[center_0%] lg:object-[center_20%] md:object-[center_20%]"
      />

      <main className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 pt-6 py-6 md:py-10">
        <div className="grid lg:grid-cols-2 gap-6 md:gap-8">
          {/* Left side: maps */}
          <section
            ref={mapsRef}
            className="rounded-3xl bg-gradient-to-br from-[#fde8bf] via-[#fee2b1] to-[#f9dba5] p-5 md:p-6 lg:p-8 shadow-[0_12px_40px_rgba(0,0,0,0.12)] ring-1 ring-black/5"
          >
            <header className="mb-4 md:mb-6">
              <h2 className="text-[#3d3b32] text-xl md:text-2xl font-extrabold">
                Βρείτε μας στον χάρτη
              </h2>
              <p className="text-[#3d3b32]/70 text-sm">
                Δύο σημεία στην Ιεράπετρα — επιλέξτε για οδηγίες
              </p>
            </header>

            <div className="space-y-6">
              {locations.map((loc, index) => {
                const embed = `https://www.google.com/maps?q=${encodeURIComponent(
                  loc.mapsQuery
                )}&output=embed`;
                const dir = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
                  loc.mapsQuery
                )}`;
                return (
                  <div
                    key={loc.key}
                    className="rounded-2xl bg-white/70 ring-1 ring-black/5 p-4 shadow-sm"
                  >
                    <p className="flex items-center gap-2 text-[#3d3b32] font-semibold">
                      <MapPin size={16} className="text-red-800" />
                      {loc.title}
                    </p>

                    <div className="relative w-full h-48 md:h-44 lg:h-52 my-3 rounded-xl overflow-hidden bg-neutral-200">
                      {!deferMaps && (
                        <iframe
                          title={loc.title}
                          src={embed}
                          className="absolute inset-0 w-full h-full"
                          loading="lazy"
                          onLoad={() =>
                            setMapLoading((arr) => {
                              const next = [...arr];
                              next[index] = false;
                              return next;
                            })
                          }
                        />
                      )}
                      <LoadingSpinner
                        isLoading={!deferMaps ? mapLoading[index] : false}
                        fullscreen={false}
                      />
                    </div>

                    <div className="text-[#3d3b32]">
                      <p className="font-semibold">{loc.name}</p>
                      <p className="text-sm opacity-80">{loc.address}</p>
                    </div>

                    <div className="flex items-center gap-3 pt-3">
                      <a
                        href={dir}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 rounded-xl bg-red-800 text-white px-3 py-2 text-sm font-semibold hover:bg-red-900 transition-colors"
                      >
                        <Navigation2 size={16} />
                        Οδηγίες
                      </a>
                      <a
                        href={`tel:${loc.tel}`}
                        className="inline-flex items-center gap-2 rounded-xl bg-white text-[#3d3b32] ring-1 ring-black/10 px-3 py-2 text-sm font-semibold hover:bg-white/90 transition-colors"
                      >
                        <PhoneCall size={16} className="text-red-800" />
                        Κλήση
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>

          {/* Right: contact form */}
          <section
            ref={contactFormRef}
            className="rounded-3xl bg-gradient-to-br from-[#fde8bf] via-[#fee2b1] to-[#f9dba5] p-5 md:p-6 lg:p-8 shadow-[0_12px_40px_rgba(0,0,0,0.12)] ring-1 ring-black/5"
          >
            <header className="mb-4 md:mb-6">
              <h2 className="text-[#3d3b32] text-xl md:text-2xl font-extrabold">
                Φόρμα Επικοινωνίας
              </h2>
              <p className="text-[#3d3b32]/70 text-sm">
                Στείλτε μας μήνυμα — απαντάμε μέσα στην ημέρα
              </p>
            </header>

            <form ref={formRef} onSubmit={onSubmit} className="space-y-3">
              <div className="space-y-1">
                <label className="text-sm font-semibold text-[#3d3b32]">
                  Email
                </label>
                <input
                  name="email"
                  type="email"
                  required
                  placeholder="email@example.com"
                  className="w-full rounded-2xl bg-white/80 ring-1 ring-black/10 px-4 py-3 text-[#3d3b32] placeholder:text-[#3d3b32]/50 focus:outline-none focus:ring-2 focus:ring-red-800"
                ></input>
              </div>

              <div className="space-y-1">
                <label className="text-sm font-semibold text-[#3d3b32]">
                  Όνομα
                </label>
                <input
                  name="name"
                  type="text"
                  required
                  placeholder="Το όνομά σας"
                  className="w-full rounded-2xl bg-white/80 ring-1 ring-black/10 px-4 py-3 text-[#3d3b32] placeholder:text-[#3d3b32]/50 focus:outline-none focus:ring-2 focus:ring-red-800"
                />
              </div>

              <div className="space-y-1">
                <label className="text-sm font-semibold text-[#3d3b32]">
                  Θέμα
                </label>
                <input
                  type="text"
                  name="subject"
                  required
                  placeholder="Περί τίνος πρόκειται;"
                  className="w-full rounded-2xl bg-white/80 ring-1 ring-black/10 px-4 py-3 text-[#3d3b32] placeholder:text-[#3d3b32]/50 focus:outline-none focus:ring-2 focus:ring-red-800"
                />
              </div>

              <div className="space-y-1">
                <label className="text-sm font-semibold text-[#3d3b32]">
                  Μήνυμα
                </label>
                <textarea
                  name="message"
                  rows={5}
                  required
                  placeholder="Το μήνυμά σας…"
                  className="w-full rounded-2xl bg-white/80 ring-1 ring-black/10 px-4 py-3 text-[#3d3b32] placeholder:text-[#3d3b32]/50 focus:outline-none focus:ring-2 focus:ring-red-800"
                />
              </div>

              <div>
                <button
                  type="submit"
                  className="inline-flex cursor-pointer items-center gap-2 rounded-2xl bg-red-800 px-5 py-3 text-white font-semibold shadow-[0_8px_20px_rgba(153,27,27,0.35)] hover:bg-red-900 transition-colors"
                  disabled={isSubmitting}
                >
                  <Send size={16} />
                  <span>{isSubmitting ? "Αποστολή..." : "Αποστολή"}</span>
                </button>
              </div>
            </form>

            {submitStatus === "success" && (
              <div className="mt-4 p-4 bg-green-100 border border-green-300 rounded-2xl text-green-800">
                Το μήνυμα στάλθηκε επιτυχώς! Θα σας απαντήσουμε σύντομα.
              </div>
            )}

            {submitStatus === "error" && (
              <div className="mt-4 p-4 bg-red-100 border border-red-300 rounded-2xl text-red-800">
                Σφάλμα στην αποστολή. Παρακαλώ δοκιμάστε ξανά.
              </div>
            )}

            <div
              className="flex justify-center items-center mt-10"
              ref={logoRef}
            >
              <Logo className="pointer-events-none" size={250} />
            </div>
          </section>
        </div>
      </main>
      <Footer />
      <ScrollToTop />
    </>
  );
};

export default ContactPage;
