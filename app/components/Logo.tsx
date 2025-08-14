import Image from "next/image";

interface LogoProps {
  size?: number;
  className?: string;
}

const Logo = ({ size = 80, className = "" }: LogoProps) => {
  return (
    <Image
      src="/logos/logo.png"
      alt="logo"
      width={size}
      height={size}
      className={`w-[${size}px] h-[${size}px] ${className}`}
    />
  );
};

export default Logo;
