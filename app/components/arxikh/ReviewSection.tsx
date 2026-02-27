"use client";
import React, { useMemo } from "react";
import { motion } from "framer-motion";
import { reviews } from "@/app/data/reviews";
import ReviewBox from "../arxikh/ReviewBox";
import Image from "next/image";

const REVIEW_LOOP_COUNT = 3;

const ReviewSection = () => {
  const loopedReviews = useMemo(
    () =>
      Array.from({ length: REVIEW_LOOP_COUNT }, (_, loopIndex) =>
        reviews.map((review) => ({
          ...review,
          uniqueKey: `${review.id}-loop-${loopIndex}`,
        })),
      ).flat(),
    [],
  );

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
        <div className="relative flex overflow-x-hidden">
          <motion.div
            className="flex gap-6 py-4"
            animate={{
              x: [0, "-33.33%"],
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 30,
                ease: "linear",
              },
            }}
            style={{ width: "fit-content" }}
          >
            {loopedReviews.map((review) => (
              <div key={review.uniqueKey} className="flex-shrink-0">
                <ReviewBox review={review} stars={review.stars} />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ReviewSection;
