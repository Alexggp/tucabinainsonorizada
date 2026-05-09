import Image from "next/image";
import classes from "./ConfirmationModal.module.css";

type ConfirmationModalProps = {
  email: string;
  setShowModal: (show: boolean) => void;
};

export default function ConfirmationModal({ email, setShowModal }: ConfirmationModalProps) {
  return (
    <div className={classes.ModalContent}>
      <div className={classes.LogoContainer}>
        <Image src="/logo-alt.png" alt="" fill />
      </div>
      <h3>Gracias por contactar</h3>
      <p>
        Hemos recibido tu email <strong>{email}</strong>. Te responderemos para
        entender tu caso y preparar una propuesta ajustada.
      </p>
      <p>
        <span className={classes.Highlight}>
          Si no ves nuestra respuesta, revisa la bandeja de Promociones u Otros.
        </span>
      </p>
      <p>
        <span className={classes.Italic}>
          El objetivo es que puedas decidir sin perder tiempo ni comparar a ciegas.
        </span>
      </p>
      <button className={classes.CloseButton} onClick={() => setShowModal(false)}>
        Cerrar
      </button>
    </div>
  );
}
