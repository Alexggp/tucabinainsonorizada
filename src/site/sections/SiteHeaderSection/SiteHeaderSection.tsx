import SocialLinks from "@/src/site/components/SocialLinks/SocialLinks";
import classes from "./SiteHeaderSection.module.css";

export default function SiteHeaderSection() {
  return (
    <header className={classes.SiteHeaderSection}>
      <a className={classes.Domain} href="#main">
        tucabina<strong>insonorizada</strong>.com
      </a>
      <div className={classes.Social}>
        <SocialLinks />
      </div>
    </header>
  );
}
