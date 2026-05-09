"use client";

import Link from "next/link";
import { FormEvent, useRef, useState } from "react";
import ConfirmationModal from "@/src/site/components/Downloader/ConfirmationModal";
import Modal from "@/src/site/components/Modal/Modal";
import classes from "./LeadForm.module.css";

declare global {
  interface Window {
    gtag?: (command: string, action: string, params?: Record<string, string>) => void;
    fbq?: (command: string, event: string) => void;
  }
}

const emailPattern = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;

export default function LeadForm() {
  const [email, setEmail] = useState("");
  const [modalEmail, setModalEmail] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [termsError, setTermsError] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const mlFormRef = useRef<HTMLFormElement>(null);
  const mlEmailRef = useRef<HTMLInputElement>(null);
  const mlTermsRef = useRef<HTMLInputElement>(null);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!emailPattern.test(email)) {
      window.gtag?.("event", "fallo_contacto", {
        event_category: "Error",
        event_label: "Email no valido"
      });
      setEmailError(true);
      return;
    }

    if (!termsAccepted) {
      setTermsError(true);
      return;
    }

    if (mlEmailRef.current) {
      mlEmailRef.current.value = email;
    }

    if (mlTermsRef.current) {
      mlTermsRef.current.value = "yes";
    }

    mlFormRef.current?.submit();

    try {
      await fetch("https://formsubmit.co/ajax/8e96a8af9af0a9a282d2b62e4fd3baca", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          subject: "Nuevo contacto desde tucabinainsonorizada.com",
          email,
          terms_accepted: "yes"
        })
      });

      window.gtag?.("event", "contacto_enviado", {
        event_category: "CTA",
        event_label: "Contacto enviado"
      });
      window.fbq?.("track", "Lead");
    } catch (error) {
      console.error("Error en el envío", error);
    }

    setModalEmail(email);
    setEmail("");
    setTermsAccepted(false);
    setShowModal(true);
  }

  return (
    <>
      <form className={classes.LeadForm} onSubmit={handleSubmit} noValidate>
        <div className={classes.Fields}>
          <input
            className={emailError ? classes.FieldError : ""}
            type="email"
            value={email}
            onChange={(event) => {
              setEmail(event.target.value);
              setEmailError(false);
            }}
            placeholder="Email"
            aria-label="Email"
            aria-invalid={emailError}
          />
          <button className={classes.DownloadButton} type="submit">
            Hablemos
          </button>
        </div>
        <label className={`${classes.Terms} ${termsError ? classes.TermsError : ""}`}>
          <input
            type="checkbox"
            checked={termsAccepted}
            onChange={(event) => {
              setTermsAccepted(event.target.checked);
              setTermsError(false);
            }}
            aria-invalid={termsError}
          />
          <span>
            He leído las <Link href="/es/politicas-de-uso">políticas de uso</Link>.
          </span>
        </label>
      </form>

      <iframe name="ml_hidden_iframe" title="ml_hidden_iframe" hidden />
      <form
        ref={mlFormRef}
        action="https://assets.mailerlite.com/jsonp/1751030/forms/163447082179363940/subscribe"
        method="post"
        target="ml_hidden_iframe"
        hidden
      >
        <input ref={mlEmailRef} type="email" name="fields[email]" />
        <input ref={mlTermsRef} type="hidden" name="fields[terms_accepted]" />
        <input type="hidden" name="ml-submit" value="1" />
        <input type="hidden" name="anticsrf" value="true" />
      </form>

      <Modal
        show={showModal}
        setShow={setShowModal}
        width="auto"
        height="60vh"
        square
      >
        <ConfirmationModal email={modalEmail} setShowModal={setShowModal} />
      </Modal>
    </>
  );
}
