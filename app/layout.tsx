import type { Metadata } from "next";
import "./globals.css";
import {Source_Sans_3, Fira_Sans } from "next/font/google";

export const metadata: Metadata = {
  title: "Φούρνος Κουγιουμουτζάκης",
  description: "Παραδοσιακός φούρνος απο το 1916",
};
const sourceSans3 = Source_Sans_3({
  weight: ["500"],
  subsets: ["latin"],
});
const firaSans = Fira_Sans({
  weight: ["500"],
  subsets: ["latin"],
});
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${firaSans.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
