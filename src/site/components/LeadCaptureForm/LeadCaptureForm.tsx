import LeadForm from "@/src/site/components/LeadForm/LeadForm";
import classes from "./LeadCaptureForm.module.css";

type LeadCaptureFormProps = {
  id?: string;
  titleId?: string;
  heading?: string;
  eyebrow?: string;
  description?: string;
};

export default function LeadCaptureForm({
  id,
  titleId,
  heading = "",
  eyebrow = "",
  description
}: LeadCaptureFormProps) {
  return (
    <div className={classes.LeadCaptureForm} id={id} aria-label="Formulario de contacto">
      {eyebrow ? <p className={classes.Eyebrow}>{eyebrow}</p> : null}
      {heading ? <h2 id={titleId}>{heading}</h2> : null}
      {description ? <p className={classes.Description}>{description}</p> : null}
      <LeadForm />
    </div>
  );
}
