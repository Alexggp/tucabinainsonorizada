import LeadCaptureForm from "@/src/site/components/LeadCaptureForm/LeadCaptureForm";
import { ReactNode } from "react";
import classes from "./CenteredContentSection.module.css";

type CenteredContentSectionProps = {
  eyebrow?: string;
  title?: string;
  titleLines?: string[];
  children?: ReactNode;
  showLeadForm?: boolean;
};

export default function CenteredContentSection({
  eyebrow,
  title,
  titleLines,
  children,
  showLeadForm = false
}: CenteredContentSectionProps) {
  return (
    <section className={classes.CenteredContentSection}>
      <div className={classes.Content}>
        {titleLines?.length ? (
          <div className={classes.TitleLines}>
            {titleLines.map((titleLine) => (
              <h2 key={titleLine}>{titleLine}</h2>
            ))}
          </div>
        ) : title ? (
          <h2>{title}</h2>
        ) : null}
        {children ? <div className={classes.Body}>{children}</div> : null}
        {eyebrow ? <h1 className={classes.Eyebrow}>{eyebrow}</h1> : null}
        {showLeadForm ? (
          <LeadCaptureForm
            titleId="final-cta-title"
            heading=""
            eyebrow=""
          />
        ) : null}
      </div>
    </section>
  );
}
