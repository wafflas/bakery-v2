import Navbar from "./components/Navbar";
import Slideshow from "./components/Slideshow";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import ReviewSection from "./components/ReviewSection";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Slideshow />
      <div className="w-full h-[500px] bg-red-500"></div>
      <ReviewSection />
      <ScrollToTop />
      <br />
      e
      <br />
      <br />
      <br />
      <Footer />
    </div>
  );
}
