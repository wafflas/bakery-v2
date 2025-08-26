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
    <div className="relative h-[250px] md:h-[250px] lg:h-[360px]">
      <Image
        src={backgroundImage}
        alt={title}
        fill
        className={`object-cover ${objectPosition || "object-center"}`}
        priority
      />
      <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-b from-black/60 via-black/50 to-black/60">
        <div className="w-1/2 max-w-7xl mx-auto px-4 md:px-6 lg:px-8 flex flex-col items-center mt-16">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white text-center">
            {title}
          </h1>
          <p className="text-white/90 text-xs md:text-sm lg:text-base">
            <Link href="/" className="hover:text-white hover:underline">
              Αρχική
            </Link>{" "}
            / {breadcrumbs}
          </p>
        </div>
      </div>
      {children}
    </div>
  );
};

export default Banner;
