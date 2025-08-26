"use client";
import React, { useRef, useEffect } from "react";
import { reviews } from "@/app/data/reviews";
import ReviewBox from "../arxikh/ReviewBox";
import Image from "next/image";

const ReviewSection = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let animationFrameId: number;
    let scrollAmount = 0;
    const speed = 1;

    const scroll = () => {
      if (!scrollContainer) return;
      scrollAmount += speed;
      // When scrolled the width of one set reset to 0
      const singleSetWidth = scrollContainer.scrollWidth / 2;
      if (scrollAmount >= singleSetWidth) {
        scrollAmount = 0;
      }
      scrollContainer.style.transform = `translateX(-${scrollAmount}px)`;
      animationFrameId = requestAnimationFrame(scroll);
    };

    animationFrameId = requestAnimationFrame(scroll);

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="w-full py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <h1 className="text-4xl text-black text-center mb-12">
          Τι λένε οι πελάτες για <span className="text-red-800">εμάς;</span>
        </h1>
        <div className="flex justify-center items-center mb-10">
          <Image
            src="/logos/Google-Review-Logo.png"
            alt="google-icon"
            width={150}
            height={150}
          />
        </div>
        <div className="overflow-hidden">
          <div
            ref={scrollRef}
            className="flex gap-6 will-change-transform"
            style={{ width: "max-content" }}
          >
            {[...Array(2)].map((_, setIndex) => (
              <div key={`set-${setIndex}`} className="flex gap-6">
                {reviews.map((review) => (
                  <div
                    key={`${setIndex}-${review.id}`}
                    className="flex-shrink-0"
                  >
                    <ReviewBox review={review} stars={review.stars} />
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewSection;
