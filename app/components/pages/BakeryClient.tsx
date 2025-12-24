"use client";
import React, { useLayoutEffect, useRef } from "react";
import { Flame, Heart, Users, Sparkles, MapPin, PhoneCall } from "lucide-react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function BakeryClient() {
  // GSAP ScrollTrigger registration
  if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
  }

  // Animation refs
  const heroRef = useRef<HTMLElement>(null);
  const timelineRef = useRef<HTMLElement>(null);
  const timelineItemsRef = useRef<(HTMLElement | null)[]>([]);
  const missionRef = useRef<HTMLElement>(null);
  const communityRef = useRef<HTMLElement>(null);
  const valuesRef = useRef<HTMLElement>(null);
  const ctaRef = useRef<HTMLElement>(null);

  const storyContent = {
    id: "story",
    hero: {
      title: "Ιστορία με άρωμα ψωμιού από το 1916",
      subtitle:
        "Τέσσερις γενιές αρτοποιών στην Ιεράπετρα — από τον Νικόλαο έως τον Ιάκωβο, τον Σπύρο και τον Νίκο.",
      lead: "Η Αρτοποιία Κουγιουμουτζάκης ξεκινά το 1916. Από το πρώτο ζύμωμα μέχρι σήμερα, ο στόχος είναι ίδιος: αληθινές γεύσεις, μεράκι και σεβασμός στην παράδοση.",
    },
    timeline: [
      {
        year: "1916",
        title: "Οι ρίζες",
        text: "Ο Νικόλαος Κουγιουμουτζάκης, έμπορος λαδιού και πρώτων υλών, ιδρύει τον φούρνο και φέρνει στην Ιεράπετρα νέες τεχνικές και αρώματα.",
        image: "/images/istoria1916.png",
        alt: "Παλιά φωτογραφία από τα πρώτα χρόνια του φούρνου",
      },
      {
        year: "1954",
        title: "Η δεύτερη γενιά",
        text: "Οι γιοι του, Ιάκωβος και Γιώργος, αναλαμβάνουν. Η γειτονιά αγκαλιάζει τον φούρνο, που γίνεται σημείο αναφοράς για την πόλη.",
        image: "/images/istoria1954.png",
        alt: "Φρέσκα ψωμιά στον πάγκο",
      },
      {
        year: "1984",
        title: "Μεγαλώνουμε με αγάπη",
        text: "Η τρίτη γενιά — Γιάννης, Γιώργος και Σπύρος — συνεχίζουν την παράδοση, ενισχύοντας το εργαστήριο και τη γκάμα προϊόντων.",
        image: "/images/giagia.jpg",
        alt: "Το εργαστήριο του αρτοποιείου",
      },
      {
        year: "Σήμερα",
        title: "Η τέταρτη γενιά",
        text: "Ο Ιάκωβος και ο Νίκος φέρνουν νέες ιδέες, καινοτομίες και τη φιλοσοφία του «καλύτερα κάθε μέρα».",
        image: "/images/mizes2.jpg",
        alt: "Σύγχρονος χώρος με καφέ και σνακ",
      },
    ],
    mission: {
      title: "Αποστολή",
      text: "Να προσφέρουμε αρτοσκευάσματα υψηλής ποιότητας, φτιαγμένα με αγάπη, φροντίδα και μεράκι. Θέλουμε να στηρίζουμε την τοπική κοινότητα και να καλλιεργούμε μια ζεστή κουλτούρα καφέ και φιλοξενίας.",
      bullets: [
        "Α' ύλες που εμπιστευόμαστε και γνωρίζουμε",
        "Σταθερή ποιότητα, καθημερινό ζύμωμα",
        "Σεβασμός στην παράδοση — ματιά στο αύριο",
        "Ειλικρινείς σχέσεις με πελάτες και συνεργάτες",
      ],
    },
    community: {
      title: "Ο δεσμός μας με την Ιεράπετρα",
      text: "Ο φούρνος είναι γειτονιά. Συνεργαζόμαστε με τοπικούς παραγωγούς, στηρίζουμε δράσεις σχολείων και συλλόγων και συμμετέχουμε σε γιορτές γεύσης.",
      highlights: [
        "Συνεργασίες με τοπικούς παραγωγούς ελαιολάδου, μελιού και αλευριού",
        "Χορηγίες σε πολιτιστικές και αθλητικές εκδηλώσεις",
        "Εκπαιδευτικές επισκέψεις — γνωριμία παιδιών με το ζύμωμα",
        "Περιβαλλοντικές πρακτικές: μείωση σπατάλης, υπεύθυνες συσκευασίες",
      ],
    },
    gallery: [
      { src: "/images/pswmia/artosprozymenios.jpg", alt: "Προζυμένιο ψωμί" },
      { src: "/images/sandwich2.jpg", alt: "Σάντουιτς ημέρας" },
      { src: "/images/mizes2.jpg", alt: "Μικρές λιχουδιές για τον καφέ" },
    ],
    cta: {
      label: "Δοκιμάστε τα σημερινά μας",
      href: "/products",
    },
  };

  const values = [
    {
      icon: Flame,
      title: "Υψηλή ποιότητα",
      text: "Καθαρές πρώτες ύλες, καθημερινή ζύμη.",
    },
    {
      icon: Heart,
      title: "Αγάπη & φροντίδα",
      text: "Σεβασμός στην τέχνη του ψωμιού.",
    },
    {
      icon: Users,
      title: "Κοινότητα",
      text: "Συνεργασία με τοπικούς παραγωγούς.",
    },
    { icon: Sparkles, title: "Καινοτομία", text: "Νέες τεχνικές με παράδοση." },
  ];

  // GSAP Scroll Reveal Animations
  useLayoutEffect(() => {
    if (!timelineRef.current) return;

    const ctx = gsap.context(() => {
      // Hero Section Animation
      if (heroRef.current) {
        gsap.fromTo(
          heroRef.current,
          { opacity: 0, y: 30, scale: 0.98 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 1.2,
            ease: "power3.out",
            scrollTrigger: {
              trigger: heroRef.current,
              start: "top 90%",
              end: "top 10%",
              toggleActions: "play none none reverse",
            },
          }
        );
      }

      // Set initial state for timeline items
      gsap.set(timelineItemsRef.current, {
        opacity: 0,
        y: 60,
        scale: 0.95,
      });

      // Animate timeline line
      gsap.to("#timeline-line", {
        opacity: 1,
        duration: 1.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: timelineRef.current,
          start: "top 80%",
          end: "top 20%",
          toggleActions: "play none none reverse",
        },
      });

      // Create timeline animation for each item
      timelineItemsRef.current.forEach((item, index) => {
        if (!item) return;

        gsap.to(item, {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: item,
            start: "top 85%",
            end: "top 15%",
            toggleActions: "play none none reverse",
            markers: false,
          },
          delay: index * 0.2, // Stagger effect
        });
      });

      // Mission Section Animation
      if (missionRef.current) {
        gsap.fromTo(
          missionRef.current,
          { opacity: 0, y: 50, scale: 0.98 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: missionRef.current,
              start: "top 85%",
              end: "top 15%",
              toggleActions: "play none none reverse",
            },
          }
        );
      }

      // Community Section Animation
      if (communityRef.current) {
        gsap.fromTo(
          communityRef.current,
          { opacity: 0, y: 50, scale: 0.98 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: communityRef.current,
              start: "top 85%",
              end: "top 15%",
              toggleActions: "play none none reverse",
            },
          }
        );
      }

      // Values Section Animation
      if (valuesRef.current) {
        gsap.fromTo(
          valuesRef.current,
          { opacity: 0, y: 50, scale: 0.98 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: valuesRef.current,
              start: "top 85%",
              end: "top 15%",
              toggleActions: "play none none reverse",
            },
          }
        );
      }

      // CTA Section Animation
      if (ctaRef.current) {
        gsap.fromTo(
          ctaRef.current,
          { opacity: 0, y: 50, scale: 0.98 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: ctaRef.current,
              start: "top 85%",
              end: "top 15%",
              toggleActions: "play none none reverse",
            },
          }
        );
      }
    }, timelineRef);

    return () => ctx.revert();
  }, []);

  return (
    <main id="main-content" className="mx-auto max-w-6xl px-4 py-20">
      <section className="relative text-center mb-20" ref={heroRef}>
        <div
          className="absolute inset-0 overflow-hidden pointer-events-none"
          aria-hidden="true"
        >
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-red-100 to-red-200 rounded-full opacity-20 blur-3xl"></div>
          <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-tr from-red-50 to-red-100 rounded-full opacity-30 blur-3xl"></div>
        </div>

        <div className="relative">
          <div className="flex justify-center mb-8">
            <div
              className="w-20 h-20 bg-gradient-to-br from-red-600 to-red-800 rounded-full flex items-center justify-center shadow-2xl"
              aria-hidden="true"
            >
              <svg
                className="w-10 h-10 text-white"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
              </svg>
            </div>
          </div>

          <h1 className="text-3xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-red-700 via-red-800 to-red-900 mb-8 leading-tight">
            {storyContent.hero.title}
          </h1>

          <div className="relative mb-8">
            <div
              className="absolute left-1/2 transform -translate-x-1/2 -top-3 w-24 h-1 bg-gradient-to-r from-red-400 to-red-600 rounded-full"
              aria-hidden="true"
            ></div>
            <p className="text-xl md:text-3xl font-bold text-gray-800 max-w-5xl mx-auto leading-relaxed">
              {storyContent.hero.subtitle}
            </p>
            <div
              className="absolute left-1/2 transform -translate-x-1/2 -bottom-3 w-24 h-1 bg-gradient-to-r from-red-400 to-red-600 rounded-full"
              aria-hidden="true"
            ></div>
          </div>

          <div className="relative">
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 md:p-10 shadow-2xl border border-red-100 max-w-4xl mx-auto">
              <p className="text-md md:text-xl text-gray-700 leading-relaxed font-medium">
                {storyContent.hero.lead}
              </p>
            </div>

            <div
              className="absolute -top-4 -left-4 w-8 h-8 bg-red-400 rounded-full opacity-60 animate-pulse"
              aria-hidden="true"
            ></div>
            <div
              className="absolute -bottom-4 -right-4 w-6 h-6 bg-red-500 rounded-full opacity-60 animate-pulse"
              style={{ animationDelay: "1s" }}
              aria-hidden="true"
            ></div>
            <div
              className="absolute top-1/2 -right-8 w-4 h-4 bg-red-300 rounded-full opacity-60 animate-pulse"
              style={{ animationDelay: "2s" }}
              aria-hidden="true"
            ></div>
          </div>

          {/* Scroll indicator */}
          <div className="flex flex-col items-center mt-12">
            <p className="text-gray-600 text-lg font-medium mb-4">
              Διαβάστε την ιστορία μας
            </p>
            <div
              className="w-6 h-10 border-2 border-red-400 rounded-full flex justify-center"
              aria-hidden="true"
            >
              <div className="w-1 h-3 bg-red-400 rounded-full mt-2 animate-bounce"></div>
            </div>
          </div>
        </div>

        {/* Timeline Section */}
        <section className="mb-20 mt-20" ref={timelineRef}>
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Η Ιστορία μας
          </h2>
          <div className="relative">
            {/* Timeline line - hidden on mobile, visible on desktop */}
            <div
              className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-gradient-to-b from-red-400 to-red-800 hidden lg:block opacity-0"
              id="timeline-line"
              aria-hidden="true"
            ></div>

            <div className="space-y-8 lg:space-y-12">
              {storyContent.timeline.map((item, index) => (
                <article
                  key={item.year}
                  ref={(el) => {
                    timelineItemsRef.current[index] = el;
                  }}
                  className="relative flex flex-col lg:items-center"
                >
                  {/* Timeline dot - mobile version */}
                  <div
                    className="absolute left-4 top-6 w-3 h-3 bg-red-600 rounded-full border-2 border-white shadow-md z-10 lg:hidden"
                    aria-hidden="true"
                  ></div>

                  {/* Timeline dot - desktop version */}
                  <div
                    className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-red-600 rounded-full border-4 border-white shadow-lg z-10 hidden lg:block"
                    aria-hidden="true"
                  ></div>

                  {/* Mobile layout: stacked vertically */}
                  <div className="lg:hidden pl-12">
                    <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 mb-4">
                      <time
                        className="text-red-700 font-bold text-lg mb-2"
                        dateTime={item.year === "Σήμερα" ? "2025" : item.year}
                      >
                        {item.year}
                      </time>
                      <h3 className="text-xl font-bold text-gray-900 mb-3">
                        {item.title}
                      </h3>
                      <p className="text-gray-700 leading-relaxed text-sm">
                        {item.text}
                      </p>
                    </div>
                    <div className="relative overflow-hidden rounded-2xl shadow-lg">
                      <Image
                        src={item.image}
                        alt={item.alt}
                        width={500}
                        height={300}
                        className="w-full h-48 object-cover transition-transform duration-500 hover:scale-105"
                      />
                    </div>
                  </div>

                  {/* Desktop layout: alternating left/right */}
                  <div
                    className={`hidden lg:flex items-center w-full ${
                      index % 2 === 0 ? "flex-row" : "flex-row-reverse"
                    }`}
                  >
                    {/* Content */}
                    <div
                      className={`w-1/2 ${
                        index % 2 === 0 ? "pr-12" : "pl-12"
                      }`}
                    >
                      <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                        <time
                          className="text-red-700 font-bold text-lg mb-2"
                          dateTime={
                            item.year === "Σήμερα" ? "2025" : item.year
                          }
                        >
                          {item.year}
                        </time>
                        <h3 className="text-2xl font-bold text-gray-900 mb-3">
                          {item.title}
                        </h3>
                        <p className="text-gray-700 leading-relaxed">
                          {item.text}
                        </p>
                      </div>
                    </div>

                    {/* Image */}
                    <div
                      className={`w-1/2 ${
                        index % 2 === 0 ? "pl-12" : "pr-12"
                      }`}
                    >
                      <div className="relative overflow-hidden rounded-2xl shadow-lg">
                        <Image
                          src={item.image}
                          alt={item.alt}
                          width={500}
                          height={300}
                          className="w-full h-64 object-cover transition-transform duration-500 hover:scale-105"
                        />
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="mb-20" ref={missionRef}>
          <div className="bg-gradient-to-br from-red-50 to-red-100 rounded-3xl p-8 md:p-12">
            <h2 className="text-3xl  font-bold text-gray-900 mb-6 text-center">
              {storyContent.mission.title}
            </h2>
            <p className="text-md md:text-lg text-gray-700 text-center mb-8 max-w-4xl mx-auto leading-relaxed">
              {storyContent.mission.text}
            </p>
            <ul
              className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto"
              role="list"
            >
              {storyContent.mission.bullets.map((bullet, index) => (
                <li key={index} className="flex items-start space-x-2">
                  <div
                    className="w-2 h-2 bg-red-600 rounded-full mt-2 flex-shrink-0"
                    aria-hidden="true"
                  ></div>
                  <p className="text-gray-700">{bullet}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Community Section */}
        <section
          className="mb-20 bg-gradient-to-br from-[#9b8862] via-[#fee2b1] to-[#f9dba5] rounded-xl p-6 shadow-md border border-gray-100"
          ref={communityRef}
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            {storyContent.community.title}
          </h2>
          <p className="text-lg text-gray-700 text-center mb-10 max-w-4xl mx-auto leading-relaxed">
            {storyContent.community.text}
          </p>
          <ul
            className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto"
            role="list"
          >
            {storyContent.community.highlights.map((highlight, index) => (
              <li
                key={index}
                className="bg-gray-100 rounded-xl p-6 shadow-md border border-gray-100"
              >
                <div className="flex items-start space-x-3">
                  <div
                    className="w-2 h-2 bg-red-600 rounded-full mt-2 flex-shrink-0"
                    aria-hidden="true"
                  ></div>
                  <p className="text-gray-700">{highlight}</p>
                </div>
              </li>
            ))}
          </ul>
        </section>

        {/* Values Section */}
        <section className="mb-20" ref={valuesRef}>
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Οι αξίες μας
          </h2>
          <ul
            className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
            role="list"
          >
            {values.map(({ icon: Icon, title, text }) => (
              <li
                key={title}
                className="bg-white rounded-2xl border border-gray-200 p-6 shadow-md text-center hover:shadow-lg transition-shadow duration-300"
              >
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon className="h-8 w-8 text-red-700" aria-hidden="true" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {title}
                </h3>
                <p className="text-gray-700 text-sm">{text}</p>
              </li>
            ))}
          </ul>
        </section>

        {/* Enhanced CTA Section */}
        <section
          className="bg-gradient-to-r bg-red-800 rounded-3xl p-8 md:p-12 text-white text-center"
          ref={ctaRef}
        >
          <h2 className="text-3xl font-bold mb-4">Έρχεστε να δοκιμάσετε;</h2>
          <p className="text-xl mb-8 opacity-90">
            Φρέσκο ψωμί, ζεστός καφές και φιλόξενη ατμόσφαιρα σας περιμένουν
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="/stores"
              className="inline-flex items-center gap-2 bg-white text-red-700  px-6 py-3 rounded-xl font-semibold hover:bg-gray-100 transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-red-800 focus:rounded-xl"
            >
              <MapPin className="h-5 w-5" aria-hidden="true" />
              Βρείτε μας
            </a>
            <a
              href="tel:2842022463"
              className="inline-flex items-center gap-2 bg-white text-red-700 px-5 py-3 rounded-xl font-semibold hover:bg-gray-100 transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-red-800 focus:rounded-xl"
              aria-label="Κλήση στο αρτοποιείο"
            >
              <PhoneCall className="h-5 w-5" aria-hidden="true" />
              Καλέστε μας
            </a>
            <a
              href="/products"
              className="inline-flex items-center gap-2 bg-white text-red-700 px-6 py-3 rounded-xl font-semibold hover:bg-gray-100 transition-colors focus:outline-none focus:ring-2 focus:ring-red-300 focus:ring-offset-2 focus:ring-offset-red-800 focus:rounded-xl"
            >
              Δείτε προϊόντα
            </a>
          </div>
        </section>
      </section>
    </main>
  );
}

