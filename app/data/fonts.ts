import { Geist, Geist_Mono, Josefin_Sans, Source_Sans_3, Cantarell } from "next/font/google";

export const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
  });
  
export const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
  });
  
export const josefinSans = Josefin_Sans({
    variable: "--font-josefin-sans",
    subsets: ["latin"],
  });
  
export const sourceSans = Source_Sans_3({
    variable: "--font-source-sans",
    subsets: ["latin"],
    weight: ["400", "700"],
  });
  
export  const cantarell = Cantarell({
    variable: "--font-cantarell",
    subsets: ["latin"],
    weight: ["400", "700"],
  });
  