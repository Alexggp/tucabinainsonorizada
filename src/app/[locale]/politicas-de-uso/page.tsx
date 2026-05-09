import Link from "next/link";
import { getLocaleOrDefault, locales } from "@/src/site/i18n/config";
import classes from "./page.module.css";

type LegalPageProps = {
  params: Promise<{
    locale: string;
  }>;
};

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function LegalPage({ params }: LegalPageProps) {
  const { locale } = await params;
  const safeLocale = getLocaleOrDefault(locale);

  return (
    <main className={classes.LegalPage}>
      <article className={classes.Content}>
        <Link className={classes.BackLink} href={`/${safeLocale}`}>
          Volver
        </Link>
        <h1>Políticas de uso y tratamiento de datos</h1>
        <p>
          Esta política informa de manera provisional sobre el tratamiento de los datos
          personales facilitados a través de los formularios de contacto de
          tucabinainsonorizada.com.
        </p>

        <h2>Responsable del tratamiento</h2>
        <p>
          El responsable del tratamiento será el titular de este sitio web. Los datos de
          identificación completos se incorporarán en esta página cuando se cierre el texto
          legal definitivo.
        </p>

        <h2>Finalidad</h2>
        <p>
          Los datos se utilizarán para responder a solicitudes de información, preparar
          propuestas comerciales relacionadas con cabinas insonorizadas y mantener la
          comunicación necesaria con la persona interesada.
        </p>

        <h2>Base legal</h2>
        <p>
          La base legal del tratamiento es el consentimiento prestado al marcar la casilla
          de aceptación antes de enviar el formulario y, en su caso, la aplicación de medidas
          precontractuales solicitadas por la persona interesada.
        </p>

        <h2>Datos tratados</h2>
        <p>
          Se tratarán los datos facilitados en el formulario, principalmente dirección de
          correo electrónico y cualquier información adicional enviada voluntariamente durante
          la comunicación.
        </p>

        <h2>Conservación</h2>
        <p>
          Los datos se conservarán durante el tiempo necesario para atender la solicitud y
          gestionar la relación comercial, salvo que la persona interesada solicite su
          supresión o exista una obligación legal de conservación.
        </p>

        <h2>Comunicación de datos</h2>
        <p>
          No se cederán datos a terceros salvo obligación legal o cuando sea necesario para
          prestar el servicio solicitado, por ejemplo proveedores técnicos de formularios,
          correo electrónico o herramientas de gestión.
        </p>

        <h2>Derechos</h2>
        <p>
          La persona interesada podrá solicitar el acceso, rectificación, supresión,
          oposición, limitación del tratamiento y portabilidad de sus datos. También podrá
          retirar su consentimiento en cualquier momento.
        </p>

        <h2>Actualización</h2>
        <p>
          Este texto es una versión provisional y será sustituido por la política legal
          definitiva cuando estén disponibles todos los datos del responsable y las
          condiciones completas del servicio.
        </p>
      </article>
    </main>
  );
}
