import { FaWhatsapp, FaYoutube } from "react-icons/fa6";
import classes from "./SocialLinks.module.css";

type SocialLink = {
  href?: string;
  label: string;
  icon: "youtube" | "whatsapp";
};

type SocialLinksProps = {
  links?: SocialLink[];
};

const defaultLinks: SocialLink[] = [
  {
    href: "https://www.youtube.com/watch?v=WDJ8unpIKDA",
    label: "YouTube",
    icon: "youtube"
  },
  {
    href: "https://wa.me/34679792719",
    label: "WhatsApp",
    icon: "whatsapp"
  }
];

const icons = {
  youtube: FaYoutube,
  whatsapp: FaWhatsapp
};

export default function SocialLinks({ links = defaultLinks }: SocialLinksProps) {
  if (links.length === 0) {
    return null;
  }

  return (
    <div className={classes.SocialLinks}>
      {links.map((link) => {
        const Icon = icons[link.icon];
        const icon = <Icon aria-hidden="true" />;

        return link.href ? (
          <a
            key={link.label}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={link.label}
          >
            {icon}
          </a>
        ) : (
          <span key={link.label} aria-label={link.label} role="img">
            {icon}
          </span>
        );
      })}
    </div>
  );
}
