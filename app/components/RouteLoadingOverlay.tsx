"use client";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import LoadingSpinner from "@/app/components/LoadingSpinner";

export default function RouteLoadingOverlay() {
  const pathname = usePathname();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const id = setTimeout(() => setLoading(false), 800); // minimum show time
    return () => clearTimeout(id);
  }, [pathname]);

  return <LoadingSpinner isLoading={loading} fullscreen label="Φόρτωση..." />;
}
