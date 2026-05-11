import Image from "next/image";
import { CSSProperties, ReactNode } from "react";
import classes from "./MultiColumnSection.module.css";

type MultiColumnItem = {
  title?: string;
  label?: string;
  text?: ReactNode;
  imageSrc?: string;
  imageAlt?: string;
};

type MultiColumnSectionProps = {
  title?: ReactNode;
  eyebrow?: string;
  items: MultiColumnItem[];
  columns?: 2 | 3 | 4;
  variant?: "plain" | "outlined" | "filled";
};

export default function MultiColumnSection({
  title,
  eyebrow,
  items,
  columns = 4,
  variant = "plain"
}: MultiColumnSectionProps) {
  return (
    <section className={`${classes.MultiColumnSection} ${classes[variant]}`}>
      {eyebrow || title ? (
        <div className={classes.Header}>
          {eyebrow ? <p>{eyebrow}</p> : null}
          {title ? <h2>{title}</h2> : null}
        </div>
      ) : null}
      <div className={classes.Grid} style={{ "--columns": columns } as CSSProperties}>
        {items.map((item) => (
          <article className={classes.Item} key={`${item.title}-${item.label}`}>
            {item.label ? <span className={classes.Label}>{item.label}</span> : null}
            {item.title ? <h3>{item.title}</h3> : null}
            {item.imageSrc ? (
              <div className={classes.Image}>
                <Image src={item.imageSrc} alt={item.imageAlt || ""} fill sizes="(max-width: 900px) 90vw, 40vw" />
              </div>
            ) : null}
            {item.text ? <div className={classes.Text}>{item.text}</div> : null}
          </article>
        ))}
      </div>
    </section>
  );
}
