import SocialLinks from "@/src/site/components/SocialLinks/SocialLinks";
import classes from "./SiteFooterSection.module.css";

export default function SiteFooterSection() {
  return (
    <footer className={classes.SiteFooterSection} id="legal">
      <SocialLinks />
      <div className={classes.Contact}>
        <a href="tel:+34679792719">+34679792719</a>
        <a href="mailto:diego@tucabinainsonorizada.com">
          diego@tucabinainsonorizada.com
        </a>
      </div>
    </footer>
  );
}
