import LeadCaptureForm from "@/src/site/components/LeadCaptureForm/LeadCaptureForm";
import VideoEmbed from "@/src/site/components/VideoEmbed/VideoEmbed";
import type { ReactNode } from "react";
import classes from "./SplitHeroSection.module.css";

type SplitHeroSectionProps = {
  eyebrow?: string;
  title: string;
  intro: ReactNode;
  bullets?: string[];
  note?: ReactNode;
  mediaTitle: string;
  mediaSrc?: string;
  mediaPosterSrc?: string;
  mediaCaption?: ReactNode;
};

export default function SplitHeroSection({
  eyebrow,
  title,
  intro,
  bullets = [],
  note,
  mediaTitle,
  mediaSrc,
  mediaPosterSrc,
  mediaCaption
}: SplitHeroSectionProps) {
  return (
    <section className={classes.SplitHeroSection} id="main" aria-labelledby="hero-title">
      <div className={classes.Content}>
        <div className={classes.Primary}>
          <div className={classes.Copy}>
            {eyebrow ? <p className={classes.Eyebrow}>{eyebrow}</p> : null}
            <h1 id="hero-title">{title}</h1>
            <div className={classes.Intro}>{intro}</div>
            {bullets.length ? (
              <div className={classes.Bullets}>
                {bullets.map((bullet) => (
                  <span key={bullet}>{bullet}</span>
                ))}
              </div>
            ) : null}
          </div>
          <div className={classes.Media}>
            <VideoEmbed title={mediaTitle} src={mediaSrc} posterSrc={mediaPosterSrc} />
            {mediaCaption ? <p>{mediaCaption}</p> : null}
          </div>
        </div>
        {note ? <p className={classes.Note}>{note}</p> : null}
        <LeadCaptureForm id="contact" heading="" eyebrow="" />
      </div>
    </section>
  );
}
