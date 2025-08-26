"use client";
import LoadingSpinner from "@/app/components/LoadingSpinner";

export default function Loading() {
  return (
    <LoadingSpinner isLoading={true} fullscreen={true} label="Φόρτωση..." />
  );
}
