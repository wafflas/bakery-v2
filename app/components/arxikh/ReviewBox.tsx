import React from "react";
import { FaStar } from "react-icons/fa";

interface Review {
  id: number;
  name: string;
  review: string;
  stars: number;
}

interface ReviewBoxProps {
  review: Review;
  stars: number;
}

const ReviewBox = ({ review, stars }: ReviewBoxProps) => {
  return (
    <div className="w-80 h-64 bg-white rounded-xl shadow-xl border-1 border-gray-200 p-6 flex flex-col justify-between">
      {/* Review Text */}
      <div className="flex-1">
        <p className="text-gray-700 text-sm leading-relaxed">
          &quot;{review.review}&quot;
        </p>
      </div>

      {/* Reviewer Name */}
      <div className="border-t pt-4 flex flex-row items-center justify-between">
        <p className="text-red-800 font-semibold text-sm">— {review.name}</p>
        {/* stars */}
        <div className="flex flex-row items-center">
          {Array.from({ length: stars }).map((_, index) => (
            <FaStar key={index} className="text-red-800" />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ReviewBox;
