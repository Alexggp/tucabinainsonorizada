import Image from "next/image";
import Link from "next/link";
import classes from "./Logo.module.css";

type LogoProps = {
  alt?: boolean;
  priority?: boolean;
  label?: string;
};

export default function Logo({
  alt = false,
  priority = false,
  label = "tucabinainsonorizada.com"
}: LogoProps) {
  return (
    <Link className={classes.Logo} href="/" aria-label={label}>
      <Image
        src={alt ? "/logo-alt.png" : "/logo.png"}
        alt={label}
        width={alt ? 220 : 240}
        height={alt ? 220 : 110}
        priority={priority}
      />
    </Link>
  );
}
