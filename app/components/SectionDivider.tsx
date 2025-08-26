import React from "react";

type Variant = "wave" | "line" | "badge";

interface Props {
  variant?: Variant;
  label?: string;
}

const SectionDivider: React.FC<Props> = ({ variant = "wave", label }) => {
  if (variant === "wave") {
    return (
      <div className="w-full overflow-hidden">
        <svg
          viewBox="0 0 1440 120"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-[80px] text-[#fde2b3]"
          preserveAspectRatio="none"
        >
          <path
            fill="currentColor"
            d="M0,64L60,69.3C120,75,240,85,360,74.7C480,64,600,32,720,21.3C840,11,960,21,1080,48C1200,75,1320,117,1380,138.7L1440,160L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"
          />
        </svg>
      </div>
    );
  }

  if (variant === "badge") {
    return (
      <div className="relative my-12 md:my-16">
        <div className="h-px w-full bg-gradient-to-r from-transparent via-red-800/30 to-transparent" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="rounded-full bg-white shadow-md ring-1 ring-black/10 px-4 py-1">
            <span className="text-xs tracking-widest font-semibold text-[#3d3b32]/70 uppercase">
              {label ?? "Από το 1916"}
            </span>
          </div>
        </div>
      </div>
    );
  }

  // variant === "line"
  return (
    <div className="my-10 md:my-14">
      <div className="mx-auto max-w-7xl px-6">
        <div className="h-px w-full bg-gradient-to-r from-transparent via-[#3d3b32]/20 to-transparent" />
      </div>
    </div>
  );
};

export default SectionDivider;
