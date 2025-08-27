import Link from "next/link";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Image from "next/image";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-1 pt-37 p-40 flex items-center justify-center bg-gradient-to-b from-red-50 to-white px-4">
        <div className="max-w-md text-center space-y-8">
          {/* Bakery Logo */}
          <div className="flex justify-center">
            <Image
              src="/logos/logo.png"
              alt="Φούρνος Κουγιουμουτζάκης"
              width={150}
              height={150}
              className="opacity-60"
            />
          </div>
          {/* 404 Message */}
          <div className="space-y-4">
            <h1 className="text-6xl font-bold text-red-800">404</h1>
            <h2 className="text-2xl font-semibold text-[#3d3b32]">
              Η σελίδα δεν βρέθηκε
            </h2>
            <p className="text-gray-600 text-lg">
              Η σελίδα που ψάχνετε δεν υπάρχει ή έχει μετακινηθεί.
            </p>
          </div>

          {/* Call to Action Buttons */}
          <div className="space-y-4">
            <Link
              href="/"
              className="inline-block bg-red-800 text-white px-8 py-4 rounded-[20px] font-semibold text-lg hover:bg-red-900 transition-all duration-300 transform hover:scale-105"
            >
              Επιστροφή στην Αρχική
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
