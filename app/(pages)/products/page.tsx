"use client";
import React, { useState, useRef, useLayoutEffect } from "react";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import Banner from "@/app/components/Banner";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ScrollToTop from "@/app/components/ScrollToTop";
import { MapPin, ShoppingCart } from "lucide-react";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

// Product categories and data
const productCategories = [
  {
    id: "pswmia",
    title: "Ψωμιά",
    subtitle: "Φρέσκα καθημερινά",
    description:
      "Παραδοσιακά ψωμιά φτιαγμένα με φυσική ζύμωση και ποιοτικά υλικά",
    products: [
      {
        name: "Άρτος Λευκός",
        image: "/images/products/pswmia/artosleykos.jpg",
        description: "Κλασικός λευκός άρτος",
      },
      {
        name: "Άρτος Σολιχάς",
        image: "/images/products/pswmia/artosolikhsaleshs.jpg",
        description: "Άρτος με σολιχά",
      },
      {
        name: "Άρτος Πολύσπορος",
        image: "/images/products/pswmia/artospolysporos.jpg",
        description: "Πολύσπορος άρτος",
      },
      {
        name: "Άρτος Προζυμένιος",
        image: "/images/products/pswmia/artosprozymenios.jpg",
        description: "Προζυμένιος άρτος",
      },
      {
        name: "Άρτος Προζυμένιος Αργυρομάντσας",
        image: "/images/products/pswmia/artosprozymeniosarghswrimanshs.jpg",
        description: "Προζυμένιος άρτος Αργυρομάντσας",
      },
      {
        name: "Άρτος Σικάλεως",
        image: "/images/products/pswmia/artossikalews.jpg",
        description: "Άρτος σικάλεως",
      },
      {
        name: "Άρτος Χωριάτικος",
        image: "/images/products/pswmia/artosxwriatikos.jpg",
        description: "Χωριάτικος άρτος",
      },
      {
        name: "Άρτος Χωριάτικος με Σουσάμι",
        image: "/images/products/pswmia/artosxwriatikosmesousami.jpg",
        description: "Χωριάτικος άρτος με σουσάμι",
      },
      {
        name: "Άρτος Ζέας",
        image: "/images/products/pswmia/artoszeas.jpg",
        description: "Άρτος ζέας",
      },
      {
        name: "Μοναστηριακό Ψωμί",
        image: "/images/products/pswmia/monasthriakopswmi.jpg",
        description: "Μοναστηριακό ψωμί",
      },
      {
        name: "Μπαγκέτα",
        image: "/images/products/pswmia/mpagketa.jpg",
        description: "Κλασική μπαγκέτα",
      },
      {
        name: "Τσιάπατα",
        image: "/images/products/pswmia/tsiapata.jpg",
        description: "Παραδοσιακή τσιάπατα",
      },
    ],
  },
  {
    id: "prwina",
    title: "Πρωινά",
    subtitle: "Για ένα υγιεινό ξεκίνημα",
    description: "Νόστιμα πρωινά που σας δίνουν ενέργεια για όλη την ημέρα",
    products: [
      {
        name: "Ελιόψωμο",
        image: "/images/products/prwina/eliopswmo.jpg",
        description: "Ψωμί με ελιές",
      },
      {
        name: "Κουλούρι Γλυκό",
        image: "/images/products/prwina/koulouriglyko.jpg",
        description: "Γλυκό κουλούρι",
      },
      {
        name: "Κουλούρι Θεσσαλονίκης",
        image: "/images/products/prwina/koulourithessalonikis.jpg",
        description: "Κλασικό κουλούρι Θεσσαλονίκης",
      },
      {
        name: "Κρουασάν Ζαμπόν",
        image: "/images/products/prwina/krouasanzampontyri.jpg",
        description: "Κρουασάν με ζαμπόν",
      },
      {
        name: "Μπουγάτσα Κρέμα",
        image: "/images/products/prwina/mpougatsakrema.jpg",
        description: "Μπουγάτσα με κρέμα",
      },
      {
        name: "Πίτα Χωριάτικη Σπανακοπιτά",
        image: "/images/products/prwina/pitaxwriatikhspanaki.jpg",
        description: "Χωριάτικη πίτα με σπανάκι",
      },
      {
        name: "Ψωμί Μερίγανη",
        image: "/images/products/prwina/pswmimeriganh.jpg",
        description: "Ψωμί με μέριγκα",
      },
      {
        name: "Τυροπίτα Κλασική",
        image: "/images/products/prwina/turopitaklassikh.jpg",
        description: "Κλασική τυροπίτα",
      },
    ],
  },
  {
    id: "kerasmata",
    title: "Κεράσματα",
    subtitle: "Γλυκά για κάθε περίσταση",
    description: "Παραδοσιακά κεράσματα φτιαγμένα με αγάπη και φυσικά υλικά",
    products: [
      {
        name: "Κουλουράκια",
        image: "/images/products/kerasmata/cookies.jpg",
        description: "Κλασικά κουλουράκια",
      },
      {
        name: "Κουλουράκια Προζύμια",
        image: "/images/products/kerasmata/koulourakiaprozumenia.jpg",
        description: "Κουλουράκια με προζύμι",
      },
      {
        name: "Μουστοκουλούρα",
        image: "/images/products/kerasmata/moustokouloura.jpg",
        description: "Μουστοκουλούρα",
      },
      {
        name: "Τσουρέκι",
        image: "/images/products/kerasmata/tsoureki.jpg",
        description: "Παραδοσιακό τσουρέκι",
      },
      {
        name: "Βουθμάτα Αμυγδάλου",
        image: "/images/products/kerasmata/vouthmataamugdalou.jpg",
        description: "Βουθμάτα με αμύγδαλα",
      },
      {
        name: "Βουθμάτα Κριθινάκια",
        image: "/images/products/kerasmata/vouthmatakrithinakia.jpg",
        description: "Βουθμάτα με κριθινάκια",
      },
      {
        name: "Βουθμάτα Πορτοκάλι",
        image: "/images/products/kerasmata/vouthmataportokaliou.jpg",
        description: "Βουθμάτα με πορτοκάλι",
      },
    ],
  },
  {
    id: "sfoliates",
    title: "Σφολιάτες",
    subtitle: "Γεμιστές πίτες",
    description: "Νόστιμες σφολιάτες με διάφορα γεμίσματα για κάθε γούστο",
    products: [
      {
        name: "Κρουασάν Σοκολάτα",
        image: "/images/products/sfoliates/krousansokolata.jpg",
        description: "Κρουασάν με σοκολάτα",
      },
      {
        name: "Λουκανικόπιτα",
        image: "/images/products/sfoliates/loukanikopita.jpg",
        description: "Πίτα με λουκάνικα",
      },
      {
        name: "Πίτα Χωριάτικη Κοτόπουλο",
        image: "/images/products/sfoliates/pitaxwriatikhkotopoulo.jpg",
        description: "Χωριάτικη πίτα με κοτόπουλο",
      },
      {
        name: "Πίτα Χωριάτικη Τυρί",
        image: "/images/products/sfoliates/pitaxwriatikhtyri.jpg",
        description: "Χωριάτικη πίτα με τυρί",
      },
      {
        name: "Πίτα Χωριάτικη Τυρί Σπανάκι",
        image: "/images/products/sfoliates/pitaxwriatikhtyrispanakii.jpg",
        description: "Χωριάτικη πίτα με τυρί και σπανάκι",
      },
      {
        name: "Τυροπίτα Στριφτή",
        image: "/images/products/sfoliates/turopitastrifth.jpg",
        description: "Στριφτή τυροπίτα",
      },
    ],
  },
  {
    id: "sandwich",
    title: "Σάντουιτς",
    subtitle: "Γρήγορα και νόστιμα",
    description: "Φρέσκα σάντουιτς με ποιοτικά υλικά για κάθε ώρα της ημέρας",
    products: [
      {
        name: "Σάντουιτς Γαλοπούλα Φουά Γκρα",
        image: "/images/products/sandwich/sandwichgalopoulafuantre.jpg",
        description: "Σάντουιτς με γαλοπούλα και φουά γκρα",
      },
      {
        name: "Σάντουιτς Μορταντέλα",
        image: "/images/products/sandwich/sandwichmortadela.jpg",
        description: "Σάντουιτς με μορταντέλα",
      },
      {
        name: "Σάντουιτς Πέστο Και Μοτσαρέλα",
        image: "/images/products/sandwich/sandwichpestokaimotsarela.jpg",
        description: "Σάντουιτς με πέστο και μοτσαρέλα",
      },
      {
        name: "Σάντουιτς Vegan",
        image: "/images/products/sandwich/sandwichvegan.jpg",
        description: "Vegan σάντουιτς",
      },
    ],
  },
  {
    id: "paksimadia",
    title: "Παξιμάδια",
    subtitle: "Για όλη την ημέρα",
    description:
      "Παξιμάδια φτιαγμένα με φυσικά υλικά και παραδοσιακές συνταγές",
    products: [
      {
        name: "Μπουκιές Επτά Ζύμης",
        image: "/images/products/paksimadia/mpoukieseptazumes.jpg",
        description: "Μπουκιές επτά ζύμης",
      },
      {
        name: "Παξιμάδι Επτάζυμο",
        image: "/images/products/paksimadia/paksimadieptazymo.jpg",
        description: "Παξιμάδι επτάζυμο",
      },
      {
        name: "Παξιμάδι Κριθινό",
        image: "/images/products/paksimadia/paksimadikrithino.jpg",
        description: "Παξιμάδι κριθινό",
      },
      {
        name: "Παξιμάδι Σικάλεως",
        image: "/images/products/paksimadia/paksimadisikalh.jpg",
        description: "Παξιμάδι σικάλεως",
      },
    ],
  },
  {
    id: "kritsinia",
    title: "Κριτσίνια",
    subtitle: "Κλασικά κριτσίνια",
    description: "Παραδοσιακά κριτσίνια με διάφορα γεύματα",
    products: [
      {
        name: "Κριτσίνια Καρούτου",
        image: "/images/products/kritsinia/kritsiniakaroutou.jpg",
        description: "Κριτσίνια με καρούτα",
      },
      {
        name: "Κριτσίνια Λαδιού",
        image: "/images/products/kritsinia/kritsinialadiou.jpg",
        description: "Κριτσίνια με λάδι",
      },
      {
        name: "Κριτσίνια Πολύσπορα",
        image: "/images/products/kritsinia/kritsiniapoluspora.jpg",
        description: "Πολύσπορα κριτσίνια",
      },
    ],
  },
  {
    id: "tokilo",
    title: "Το Κιλό",
    subtitle: "Γλυκά με το κιλό",
    description: "Παραδοσιακά γλυκά πουλιά με το κιλό",
    products: [
      {
        name: "Λουκουμάδες",
        image: "/images/products/tokilo/loukoumades.jpg",
        description: "Κλασικοί λουκουμάδες",
      },
      {
        name: "Τυροπιτάκια Χειροποίητα",
        image: "/images/products/tokilo/turopitakiaxeiropoihta.jpg",
        description: "Χειροποίητα τυροπιτάκια",
      },
    ],
  },
];

const ProductsPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");

  // Animation refs
  const categoriesRef = useRef<HTMLDivElement>(null);
  const productsRef = useRef<HTMLDivElement>(null);

  // GSAP animations
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Categories Animation
      if (categoriesRef.current) {
        gsap.fromTo(
          categoriesRef.current,
          { opacity: 0, y: 50, scale: 0.98 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: categoriesRef.current,
              start: "top 85%",
              end: "top 15%",
              toggleActions: "play none none reverse",
            },
          }
        );
      }

      // Products Animation
      if (productsRef.current) {
        gsap.fromTo(
          productsRef.current,
          { opacity: 0, y: 50, scale: 0.98 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: productsRef.current,
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

  // Filter products based on search and category
  const filteredProducts = productCategories
    .filter(
      (category) =>
        selectedCategory === "all" || category.id === selectedCategory
    )
    .flatMap((category) =>
      category.products
        .filter(
          (product) =>
            product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            product.description.toLowerCase().includes(searchTerm.toLowerCase())
        )
        .map((product) => ({ ...product, category: category.title }))
    );

  return (
    <>
      <Navbar />
      <Banner
        title="Προϊόντα"
        backgroundImage="/images/banners/pswmi4.jpg"
        breadcrumbs="Προϊόντα"
        objectPosition="object-[center_0%] lg:object-[center_40%] md:object-[center_40%]"
      />

      <main className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-12">
        {/* Search and Filter Section */}
        <section ref={categoriesRef} className="mb-12">
          <div className="bg-gradient-to-r from-red-50 to-red-100 rounded-3xl p-6 md:p-8 shadow-lg">
            {/* Search Bar */}
            <div className="mb-8">
              <div className="relative max-w-2xl mx-auto">
                <input
                  type="text"
                  placeholder="Αναζήτηση προϊόντων..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full px-6 py-4 text-lg rounded-2xl text-black border-2 border-red-200 focus:border-red-500 focus:outline-none transition-colors shadow-sm"
                />
                <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
                  <svg
                    className="w-6 h-6 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                </div>
              </div>
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-3 md:gap-4">
              <button
                onClick={() => setSelectedCategory("all")}
                className={`px-6 py-3 rounded-2xl font-semibold transition-all duration-300 ${
                  selectedCategory === "all"
                    ? "bg-red-800 text-white shadow-lg scale-105"
                    : "bg-white text-gray-700 hover:bg-red-50 hover:scale-105"
                }`}
              >
                Όλα
              </button>
              {productCategories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-6 py-3 rounded-2xl font-semibold transition-all duration-300 ${
                    selectedCategory === category.id
                      ? "bg-red-800 text-white shadow-lg scale-105"
                      : "bg-white text-gray-700 hover:bg-red-50 hover:scale-105"
                  }`}
                >
                  {category.title}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Products Grid */}
        <section ref={productsRef}>
          {selectedCategory === "all" ? (
            // Show all categories with their products (with search filtering)
            <div className="space-y-16">
              {(() => {
                // Filter all categories and check if any have products
                const categoriesWithProducts = productCategories
                  .map((category) => {
                    const categoryProducts = category.products.filter(
                      (product) =>
                        product.name
                          .toLowerCase()
                          .includes(searchTerm.toLowerCase()) ||
                        product.description
                          .toLowerCase()
                          .includes(searchTerm.toLowerCase())
                    );
                    return { ...category, filteredProducts: categoryProducts };
                  })
                  .filter((category) => category.filteredProducts.length > 0);

                // If no products found across all categories, show not found message
                if (categoriesWithProducts.length === 0) {
                  return (
                    <div className="text-center py-16">
                      <div className="max-w-md mx-auto">
                        <div className="w-24 h-24 mx-auto mb-6 bg-red-100 rounded-full flex items-center justify-center">
                          <svg
                            className="w-12 h-12 text-red-600"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                            />
                          </svg>
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-4">
                          Δεν βρέθηκαν προϊόντα
                        </h3>
                        <p className="text-gray-600 mb-6">
                          Δοκιμάστε να αλλάξετε τους όρους αναζήτησης ή επιλέξτε
                          διαφορετική κατηγορία
                        </p>
                        <div className="space-y-3">
                          <button
                            onClick={() => setSearchTerm("")}
                            className="inline-flex items-center gap-2 px-6 py-3 bg-red-800 text-white font-semibold rounded-xl hover:bg-red-900 transition-colors"
                          >
                            <svg
                              className="w-5 h-5"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M6 18L18 6M6 6l12 12"
                              />
                            </svg>
                            Καθαρισμός αναζήτησης
                          </button>
                          <button
                            onClick={() => setSelectedCategory("all")}
                            className="block w-full px-6 py-3 bg-gray-100 text-gray-700 font-semibold rounded-xl hover:bg-gray-200 transition-colors"
                          >
                            Προβολή όλων των προϊόντων
                          </button>
                        </div>
                      </div>
                    </div>
                  );
                }

                // Show categories with filtered products
                return categoriesWithProducts.map((category) => (
                  <div key={category.id} className="space-y-8">
                    <div className="text-center">
                      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        {category.title}
                      </h2>
                      <p className="text-xl text-gray-600 mb-2">
                        {category.subtitle}
                      </p>
                      <p className="text-gray-500 max-w-2xl mx-auto">
                        {category.description}
                      </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                      {category.filteredProducts.map((product, index) => (
                        <div
                          key={`${category.id}-${index}`}
                          className="group bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 overflow-hidden border border-gray-100"
                        >
                          <div className="relative overflow-hidden">
                            <Image
                              src={product.image}
                              alt={product.name}
                              width={400}
                              height={300}
                              className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                          </div>

                          <div className="p-6">
                            <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-red-800 transition-colors">
                              {product.name}
                            </h3>
                            <p className="text-gray-600 text-sm leading-relaxed">
                              {product.description}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ));
              })()}
            </div>
          ) : (
            // Show filtered products for specific category
            <div className="space-y-8">
              <div className="text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  {
                    productCategories.find((cat) => cat.id === selectedCategory)
                      ?.title
                  }
                </h2>
                <p className="text-xl text-gray-600">
                  {filteredProducts.length} προϊόντα βρέθηκαν
                </p>
              </div>

              {filteredProducts.length === 0 ? (
                // No products found in specific category
                <div className="text-center py-16">
                  <div className="max-w-md mx-auto">
                    <div className="w-24 h-24 mx-auto mb-6 bg-red-100 rounded-full flex items-center justify-center">
                      <svg
                        className="w-12 h-12 text-red-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                        />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                      Δεν βρέθηκαν προϊόντα
                    </h3>
                    <p className="text-gray-600 mb-6">
                      Δεν βρέθηκαν προϊόντα στην κατηγορία &ldquo;
                      {
                        productCategories.find(
                          (cat) => cat.id === selectedCategory
                        )?.title
                      }
                      &rdquo; που να ταιριάζουν με την αναζήτησή σας
                    </p>
                    <div className="space-y-3">
                      <button
                        onClick={() => setSearchTerm("")}
                        className="inline-flex items-center gap-2 px-6 py-3 bg-red-800 text-white font-semibold rounded-xl hover:bg-red-900 transition-colors"
                      >
                        <svg
                          className="w-5 h-5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M6 18L18 6M6 6l12 12"
                          />
                        </svg>
                        Καθαρισμός αναζήτησης
                      </button>
                    </div>
                  </div>
                </div>
              ) : (
                // Show filtered products
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                  {filteredProducts.map((product, index) => (
                    <div
                      key={`filtered-${index}`}
                      className="group bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 overflow-hidden border border-gray-100"
                    >
                      <div className="relative overflow-hidden">
                        <Image
                          src={product.image}
                          alt={product.name}
                          width={400}
                          height={300}
                          className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      </div>

                      <div className="p-6">
                        <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-red-800 transition-colors">
                          {product.name}
                        </h3>
                        <p className="text-gray-600 text-sm leading-relaxed">
                          {product.description}
                        </p>
                        <p className="text-red-600 text-sm font-medium mt-2">
                          {product.category}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}
        </section>

        {/* Call to Action */}
        <section className="mt-20 text-center">
          <div className="bg-gradient-to-r from-red-600 to-red-800 rounded-3xl p-8 md:p-12 text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Έρχεστε να δοκιμάσετε;
            </h2>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Επισκεφθείτε τα καταστήματά μας για να δοκιμάσετε τα φρέσκα
              προϊόντα μας ή παραγγείλετε μέσω Wolt για παράδοση στο σπίτι
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/stores"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-red-700 font-bold rounded-2xl hover:bg-red-100 transition-colors shadow-lg"
              >
                <MapPin className="h-5 w-5" />
                Βρείτε μας
              </a>
              <a
                href="https://wolt.com/el/grc/ierapetra/restaurant/kouyioumatzakis-bakery-coffee"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#00b5e2] text-white font-bold rounded-2xl hover:bg-[#00a2ca] transition-colors shadow-lg"
              >
                <ShoppingCart className="h-5 w-5" />
                Παραγγελία Wolt
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <ScrollToTop />
    </>
  );
};

export default ProductsPage;
