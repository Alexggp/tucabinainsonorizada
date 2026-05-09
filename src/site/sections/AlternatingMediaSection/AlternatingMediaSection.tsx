import Image from "next/image";
import type { ReactNode } from "react";
import SectionHeader from "@/src/site/components/SectionHeader/SectionHeader";
import classes from "./AlternatingMediaSection.module.css";

type AlternatingMediaItem = {
  title?: string;
  imageSrc: string;
  imageAlt: string;
  content: ReactNode;
};

type AlternatingMediaSectionProps = {
  titleId?: string;
  title: string;
  items: AlternatingMediaItem[];
};

export default function AlternatingMediaSection({
  titleId = "alternating-title",
  title,
  items
}: AlternatingMediaSectionProps) {
  return (
    <section className={classes.AlternatingMediaSection} aria-labelledby={titleId}>
      <SectionHeader title={title} id={titleId} />
      {items.map((item, index) => (
        <div
          className={`${classes.Row} ${index % 2 === 1 ? classes.Reverse : ""}`}
          key={`${item.imageSrc}-${index}`}
        >
          <div className={classes.Media}>
            <Image
              src={item.imageSrc}
              alt={item.imageAlt}
              fill
              sizes="(max-width: 768px) 90vw, 30vw"
            />
          </div>
          <div className={classes.Copy}>
            {item.title ? <h3>{item.title}</h3> : null}
            {item.content}
          </div>
        </div>
      ))}
    </section>
  );
}
