"use client";

import React, { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import LoadingSpinner from "./LoadingSpinner";

const PageImageLoader = () => {
  const pathname = usePathname();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (pathname === "/") {
      setIsLoading(false);
      return;
    }

    setIsLoading(true);

    const checkImages = () => {
      const images = Array.from(document.images);

      if (images.length === 0) {
        setIsLoading(false);
        return;
      }

      const allLoaded = images.every((img) => img.complete);

      if (allLoaded) {
        setIsLoading(false);
      } else {
        const onImageEvent = () => {
          if (
            document.images.length > 0 &&
            Array.from(document.images).every((i) => i.complete)
          ) {
            setIsLoading(false);
          }
        };

        images.forEach((img) => {
          if (!img.complete) {
            img.addEventListener("load", onImageEvent);
            img.addEventListener("error", onImageEvent);
          }
        });
      }
    };

    // Check as soon as possible
    const startCheckTimer = setTimeout(() => {
      checkImages();
    }, 0);

    // Safety timeout: reduced to 0.5s
    const safetyTimer = setTimeout(() => {
      setIsLoading(false);
    }, 500);

    return () => {
      clearTimeout(startCheckTimer);
      clearTimeout(safetyTimer);
    };
  }, [pathname]);

  return <LoadingSpinner isLoading={isLoading} />;
};

export default PageImageLoader;
