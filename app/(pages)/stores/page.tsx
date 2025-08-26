import React from "react";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import Banner from "@/app/components/Banner";

const page = () => {
  return (
    <>
      <Navbar />
      <Banner
        title="Καταστήματα"
        backgroundImage="/images/banners/tampela.jpg"
        breadcrumbs="Καταστήματα"
        objectPosition="object-[center_0%] lg:object-[center_51%] md:object-[center_40%]"
      />
      <div>stores</div>
      <Footer />
    </>
  );
};

export default page;
