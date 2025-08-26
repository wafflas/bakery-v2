import type { Metadata } from "next";
import "./globals.css";
import { Fira_Sans } from "next/font/google";
import RouteLoadingOverlay from "./components/RouteLoadingOverlay";

export const metadata: Metadata = {
  title: "Φούρνος Κουγιουμουτζάκης",
  description: "Παραδοσιακός φούρνος απο το 1916",
};

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
      <body className={`${firaSans.className} antialiased`}>
        <RouteLoadingOverlay />
        {children}
      </body>
    </html>
  );
}
