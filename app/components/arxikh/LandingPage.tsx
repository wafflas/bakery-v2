"use client";
import Slideshow from "./Slideshow";
import ReviewSection from "./ReviewSection";
import Introduction from "./Introduction";
import ProductsIntro from "./ProductsIntro";
import SectionDivider from "../SectionDivider";
const LandingPage = () => {
  return (
    <>
      <Slideshow />
      <Introduction />
      <SectionDivider variant="line" />
      <ProductsIntro />
      <ReviewSection />
    </>
  );
};

export default LandingPage;
