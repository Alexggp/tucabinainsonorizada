import Link from "next/link";
import classes from "./ContactButton.module.css";

export default function ContactButton() {
  return (
    <Link className={classes.ContactButton} href="#legal">
      ¡Contacta con nosotros!
    </Link>
  );
}
