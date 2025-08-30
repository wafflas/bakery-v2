import Image from "next/image";
import React from "react";
import Link from "next/link";

const Banner = ({
  title,
  backgroundImage,
  breadcrumbs,
  children,
  objectPosition,
}: {
  title: string;
  backgroundImage: string;
  breadcrumbs: string;
  children?: React.ReactNode;
  objectPosition?: string;
}) => {
  return (
    <header
      className="relative h-[250px] md:h-[250px] lg:h-[360px]"
      role="banner"
      aria-labelledby="page-title"
    >
      <Image
        src={backgroundImage}
        alt=""
        fill
        className={`object-cover ${objectPosition || "object-center"}`}
        priority
        aria-hidden="true"
        role="presentation"
      />
      <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-b from-black/60 via-black/50 to-black/60">
        <div className="w-1/2 max-w-7xl mx-auto px-4 md:px-6 lg:px-8 flex flex-col items-center mt-16">
          <h1
            id="page-title"
            className="text-2xl md:text-3xl lg:text-4xl font-bold text-white text-center"
          >
            {title}
          </h1>
          <nav
            aria-label="Breadcrumb"
            className="text-white/90 text-xs md:text-sm lg:text-base"
          >
            <ol className="flex items-center space-x-2" role="list">
              <li>
                <Link
                  href="/"
                  className="hover:text-white hover:underline focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black/60 focus:rounded px-1 py-0.5 transition-colors"
                  aria-label="Αρχική σελίδα"
                >
                  Αρχική
                </Link>
              </li>
              <li aria-hidden="true" className="text-white/70">
                /
              </li>
              <li aria-current="page" className="text-white font-medium">
                {breadcrumbs}
              </li>
            </ol>
          </nav>
        </div>
      </div>
      {children}
    </header>
  );
};

export default Banner;
