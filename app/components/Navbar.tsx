"use client";
import Link from "next/link";
import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { gsap } from "gsap";
import Logo from "../components/Logo";
import { links, socialLinks } from "../data/links";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const isNotHomePage = pathname !== "/";

  // Mobile menu refs
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);

  // Mobile menu animation
  useLayoutEffect(() => {
    if (mobileMenuRef.current) {
      if (isMobileMenuOpen) {
        // Get menu items for staggered animation
        const menuItems = mobileMenuRef.current.querySelectorAll(".menu-item");
        const socialIcons =
          mobileMenuRef.current.querySelectorAll(".social-icon");

        const tl = gsap.timeline();

        // Show and slide in the menu panel
        tl.set(mobileMenuRef.current, { display: "block" })
          .fromTo(
            mobileMenuRef.current,
            { x: "100%" },
            { x: "0%", duration: 0.4, ease: "power2.out" }
          )
          // Animate menu items with stagger
          .fromTo(
            menuItems,
            { opacity: 0, x: 30 },
            {
              opacity: 1,
              x: 0,
              duration: 0.3,
              stagger: 0.1,
              ease: "power2.out",
            },
            "-=0.2"
          )
          // Animate social icons
          .fromTo(
            socialIcons,
            { opacity: 0, y: 20 },
            {
              opacity: 1,
              y: 0,
              duration: 0.3,
              stagger: 0.05,
              ease: "power2.out",
            },
            "-=0.1"
          );
      } else {
        // Slide out animation
        gsap.to(mobileMenuRef.current, {
          x: "100%",
          duration: 0.3,
          ease: "power2.in",
          onComplete: () => {
            if (mobileMenuRef.current) {
              gsap.set(mobileMenuRef.current, { display: "none" });
            }
          },
        });
      }
    }

    // Overlay animation
    if (overlayRef.current) {
      if (isMobileMenuOpen) {
        gsap.fromTo(
          overlayRef.current,
          { opacity: 0 },
          { opacity: 1, duration: 0.3, ease: "power2.out" }
        );
      }
    }
  }, [isMobileMenuOpen]);

  useEffect(() => {
    if (isNotHomePage) {
      setIsScrolled(true);
    } else {
      setIsScrolled(window.scrollY > 50);
    }

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    if (!isNotHomePage) {
      window.addEventListener("scroll", handleScroll);
    }

    return () => window.removeEventListener("scroll", handleScroll);
  }, [isNotHomePage]);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full p-3 z-70 rounded-t-lg ${
          !isNotHomePage && !isScrolled
            ? "bg-transparent text-white"
            : "bg-white text-[#3d3b32] backdrop-blur-lg shadow-lg "
        } ${!isNotHomePage ? "transition-colors duration-500" : ""}`}
        role="navigation"
        aria-label="Κύρια πλοήγηση"
      >
        <div className="flex h-[60px] w-full sticky top-0 z-70 items-center p-4">
          <Link
            href="/"
            className="flex items-center justify-start gap-2 w-1/3"
            aria-label="Αρχική σελίδα - Αρτοποιία Κουγιουμουτζάκης"
          >
            <Logo size={80} />
          </Link>

          {/* Desktop Navigation Links - Hidden on mobile */}
          <div className="hidden lg:flex flex-row items-center gap-20 font-bold text-lg justify-center w-1/3">
            {links.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  href={link.href}
                  key={link.label}
                  className={`relative group hover:text-red-800 hover:scale-105 transition-all duration-200 ${
                    isActive ? "text-red-800" : ""
                  }`}
                >
                  {link.label}
                  <span
                    className={`absolute -bottom-1 left-0 h-0.5 bg-red-800 transition-all duration-200 ${
                      isActive ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                  ></span>
                </Link>
              );
            })}
          </div>

          <div className="absolute right-6 flex items-center justify-end gap-5">
            {socialLinks.map((link) => {
              const IconComponent = link.icon;
              return (
                <Link
                  href={link.href}
                  key={link.label}
                  target="_blank"
                  className="text-2xl hover:scale-105 transition-all duration-300"
                >
                  <IconComponent />
                </Link>
              );
            })}

            {/* Hamburger Menu Button - Only visible on mobile */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 rounded-md cursor-pointer transition-all duration-200 ml-2"
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div
          ref={overlayRef}
          className="fixed inset-0  bg-opacity-20 z-70 lg:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      {/* Mobile Menu Slide Panel */}
      <div
        ref={mobileMenuRef}
        className="fixed top-0 right-0 h-full w-1/2 max-w-sm bg-white shadow-2xl z-70 lg:hidden"
        style={{ display: "none" }}
      >
        {/* Menu Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <Logo size={60} />
          <button
            onClick={() => setIsMobileMenuOpen(false)}
            className="p-2 rounded-md hover:bg-gray-100 transition-all duration-200"
            aria-label="Close menu"
          >
            <X size={24} className="text-[#3d3b32]" />
          </button>
        </div>

        {/* Menu Links */}
        <div className="py-6">
          {links.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                href={link.href}
                key={link.label}
                className={`menu-item block px-6 py-4 text-lg font-bold transition-all duration-200 ${
                  isActive
                    ? "text-red-800 bg-red-50 border-r-4 border-red-800"
                    : "text-[#3d3b32] hover:text-red-800 hover:bg-gray-50"
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            );
          })}
        </div>

        {/* Social Links in Mobile Menu */}
        <div className="absolute bottom-8 left-6 right-6">
          <div className="flex justify-center gap-6 pt-6 border-t border-gray-200">
            {socialLinks.map((link) => {
              const IconComponent = link.icon;
              return (
                <Link
                  href={link.href}
                  key={link.label}
                  target="_blank"
                  className="social-icon text-2xl text-[#3d3b32] hover:text-red-800 hover:scale-110 transition-all duration-300"
                >
                  <IconComponent />
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
