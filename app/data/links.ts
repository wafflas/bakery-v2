import { FaFacebook, FaInstagram } from "react-icons/fa";
import { IconType } from "react-icons";

export const links = [
  {
    label: "Αρχική",
    href: "/",
  },
  {
    label: "Φούρνος",
    href: "/bakery",
  },
  {
    label: "Προϊόντα",
    href: "/products",
  },
  {
    label: "Καταστήματα",
    href: "/stores",
  },
  {
    label: "Επικοινωνία",
    href: "/contact",
  },
];

export const socialLinks: Array<{
  label: string;
  href: string;
  icon: IconType;
}> = [
  {
    label: "Facebook",
    href: "https://www.facebook.com/p/%CE%91%CF%81%CF%84%CE%BF%CF%80%CE%BF%CE%B9%CE%AF%CE%B1-%CE%96%CE%B1%CF%87%CE%B1%CF%81%CE%BF%CF%80%CE%BB%CE%B1%CF%83%CF%84%CE%B9%CE%BA%CE%AE-%CE%9A%CE%BF%CF%85%CE%B3%CE%B9%CE%BF%CF%85%CE%BC%CE%BF%CF%85%CF%84%CE%B6%CE%AC%CE%BA%CE%B7%CF%82-100063572587813/",
    icon: FaFacebook,
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/bakery_coffee_kougioumoutzakis/",
    icon: FaInstagram,
  },
];
