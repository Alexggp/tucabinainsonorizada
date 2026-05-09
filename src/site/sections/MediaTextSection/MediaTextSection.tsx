import Image from "next/image";
import type { ReactNode } from "react";
import SectionHeader from "@/src/site/components/SectionHeader/SectionHeader";
import classes from "./MediaTextSection.module.css";

type MediaTextSectionProps = {
  id?: string;
  titleId?: string;
  title: string;
  mediaSrc: string;
  mediaAlt: string;
  mediaMode?: "image" | "logo";
  heading?: string;
  children: ReactNode;
};

export default function MediaTextSection({
  id,
  titleId = "media-text-title",
  title,
  mediaSrc,
  mediaAlt,
  mediaMode = "image",
  heading,
  children
}: MediaTextSectionProps) {
  return (
    <section className={classes.MediaTextSection} id={id} aria-labelledby={titleId}>
      <SectionHeader title={title} id={titleId} />
      <div className={classes.Content}>
        <div className={`${classes.Media} ${mediaMode === "logo" ? classes.LogoMedia : ""}`}>
          <Image src={mediaSrc} alt={mediaAlt} fill />
        </div>
        <div className={classes.Copy}>
          {heading ? <h3>{heading}</h3> : null}
          {children}
        </div>
      </div>
    </section>
  );
}
