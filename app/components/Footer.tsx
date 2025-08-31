"use client";
import React from "react";
import Logo from "../components/Logo";
import Link from "next/link";
import { links, socialLinks } from "../data/links";

const Footer = () => {
  return (
    <footer
      className="bg-[#ddccaa] rounded-b-lg text-black"
      role="contentinfo"
      aria-label="Πληροφορίες ιστότοπου"
    >
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Column 1: About */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold">Αρτοποιία Κουγιουμουτζάκης</h2>
            <p className="text-sm text-[#545144] leading-relaxed">
              Η Αρτοποιία Κουγιουμουτζάκης είναι μια οικογενειακή επιχείρηση
              στην Ιεράπετρα της Κρήτης, που προσφέρει ποιοτικές υπηρεσίες στην
              αρτοποιία και ζαχαροπλαστική
              <br /> από το 1916.
            </p>
          </div>

          {/* Column 2: Navigation */}
          <nav className="space-y-4" aria-labelledby="footer-navigation">
            <h3 id="footer-navigation" className="text-lg font-bold text-black">
              Περιήγηση
            </h3>
            <ul className="space-y-2" role="list">
              {links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-[#545144] hover:text-red-800 transition-colors duration-200 focus:outline-none focus:ring-offset-2 focus:ring-offset-[#ddccaa] focus:rounded px-1 py-0.5"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Column 3: Store 1 */}
          <address className="space-y-4 not-italic">
            <h3 className="text-lg font-bold text-black">Καταστήμα 1</h3>
            <div className="text-sm text-[#545144] space-y-1">
              <p>Κουτάντου 9</p>
              <p>Ιεράπετρα</p>
              <p>ΤΚ 72200</p>
              <p>
                <a
                  href="tel:2842022463"
                  className="hover:text-red-800 transition-colors focus:outline-none focus:ring-2 focus:ring-red-600 focus:ring-offset-2 focus:ring-offset-[#ddccaa] focus:rounded px-1 py-0.5"
                  aria-label="Κλήση στο κεντρικό κατάστημα"
                >
                  2842 022463
                </a>
              </p>
            </div>
          </address>

          {/* Column 4: Store 2 */}
          <address className="space-y-4 not-italic">
            <h3 className="text-lg font-bold text-black">Καταστήμα 2</h3>
            <div className="text-sm text-[#545144] space-y-1">
              <p>Δημοκρατίας 1</p>
              <p>Ιεράπετρα</p>
              <p>ΤΚ 72200</p>
              <p>
                <a
                  href="tel:2842026410"
                  className="hover:text-red-800 transition-colors focus:outline-none focus:ring-2 focus:ring-red-600 focus:ring-offset-2 focus:ring-offset-[#ddccaa] focus:rounded px-1 py-0.5"
                  aria-label="Κλήση στο υποκατάστημα καφέ"
                >
                  2842 026410
                </a>
              </p>
            </div>
          </address>

          {/* Column 5: Social Media */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-black">
              Βρείτε μας στα Social Media
            </h3>
            <div className="text-sm text-[#545144] space-y-1 flex flex-row gap-2">
              {socialLinks.map((link) => {
                const IconComponent = link.icon;
                return (
                  <Link
                    href={link.href}
                    key={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:scale-105 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-red-600 focus:ring-offset-2 focus:ring-offset-[#ddccaa] focus:rounded p-1"
                    aria-label={`${link.label} σε νέα καρτέλα`}
                  >
                    <IconComponent
                      size={20}
                      className="text-red-800"
                      aria-hidden="true"
                    />
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-[#b0a181] md:w-[80%] mx-auto">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex flex-col justify-center items-center gap-4">
            {/* Left: Logo and Brand */}
            <div className="flex items-center gap-4">
              <Logo size={170} />
            </div>

            {/* Right: Copyright */}
            <div className="flex items-center gap-4">
              <p className="text-sm text-gray-600">
                © 2025|powered by <strong>wafflas</strong>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
