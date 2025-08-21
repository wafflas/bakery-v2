"use client";
import React from "react";
import Slideshow from "./Slideshow";
import ReviewSection from "./ReviewSection";
import Introduction from "./Introduction";   
import ProductsIntro from "./ProductsIntro";
const LandingPage = () => {
  return (
    <>
      <Slideshow />
      <Introduction />
      <ProductsIntro/>
      <ReviewSection />
    </>
  );
};

export default LandingPage;
