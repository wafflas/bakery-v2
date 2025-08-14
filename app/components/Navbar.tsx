"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Logo from "../components/Logo";
import { links, socialLinks } from "../data/links";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const isNotHomePage = pathname !== "/";
  useEffect(() => {
    if (isNotHomePage) {
      setIsScrolled(true);
    }
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
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
    // do it responsive
    <nav
      className={`fixed top-0 left-0 w-full p-3 z-50 rounded-t-lg   ${
        isScrolled
          ? "bg-white text-[#3d3b32] backdrop-blur-lg shadow-lg "
          : "bg-transparent"
      } ${
        isScrolled && !isNotHomePage ? "transition-colors duration-500" : ""
      }`}
    >
      <div className="flex h-[60px] w-full sticky top-0 z-50 items-center p-4">
        <div className="flex items-center justify-start gap-2 w-1/3">
          <Logo size={80} />
        </div>
        {/* Desktop Navigation Links - Hidden on mobile */}
        <div className="hidden lg:flex flex-row items-center gap-20 font-bold text-lg justify-center w-1/3 ">
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

        <div className="absolute right-6 flex items-center justify-end gap-5 ">
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
            className="lg:hidden p-2 rounded-md hover:bg-gray-100 hover:bg-opacity-20 transition-all duration-200 ml-2 "
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="fixed top-[84px] left-0 right-0 bg-white shadow-lg z-50 lg:hidden transform transition-all duration-300 ease-in-out">
          <div className="py-4">
            {links.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  href={link.href}
                  key={link.label}
                  className={`block px-6 py-4 text-lg font-bold transition-all duration-200 ${
                    isActive
                      ? "text-red-800 bg-red-50"
                      : "text-[#3d3b32] hover:text-red-800 hover:bg-gray-50"
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </nav>
  );
};
export default Navbar;
