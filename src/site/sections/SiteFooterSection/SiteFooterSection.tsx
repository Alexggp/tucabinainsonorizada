import SocialLinks from "@/src/site/components/SocialLinks/SocialLinks";
import classes from "./SiteFooterSection.module.css";

export default function SiteFooterSection() {
  return (
    <footer className={classes.SiteFooterSection} id="legal">
      <SocialLinks />
    </footer>
  );
}
