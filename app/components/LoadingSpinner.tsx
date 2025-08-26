"use client";
import React from "react";

interface LoadingSpinnerProps {
  isLoading: boolean;
  fullscreen?: boolean; // true = full-screen overlay, false = inline overlay
  label?: string;
}
  
const LoadingSpinner = ({
  isLoading,
  fullscreen = true,
  label = "Φόρτωση...",
}: LoadingSpinnerProps) => {
  if (!isLoading) return null;

  const overlayBase =
    "bg-white bg-opacity-90 flex items-center justify-center z-50 p-4";
  const overlayClass = fullscreen
    ? `fixed inset-0 ${overlayBase}`
    : `absolute inset-0 ${overlayBase} rounded-xl`;

  const spinnerClass = fullscreen ? "w-12 h-12 border-4" : "w-8 h-8 border-4";

  return (
    <div className={overlayClass} aria-live="polite" aria-busy="true">
      <div className="flex flex-col items-center gap-3">
        <div
          className={`${spinnerClass} border-red-200 border-t-red-800 rounded-full animate-spin`}
        />
        <p className="text-red-800 font-semibold text-sm">{label}</p>
      </div>
    </div>
  );
};

export default LoadingSpinner;
