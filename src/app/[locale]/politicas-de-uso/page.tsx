import Link from "next/link";
import type { ReactNode } from "react";
import { getLocaleOrDefault, locales } from "@/src/site/i18n/config";
import classes from "./page.module.css";

type LegalPageProps = {
  params: Promise<{
    locale: string;
  }>;
};

type LegalSectionProps = {
  title: string;
  children: ReactNode;
};

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

function LegalSection({ title, children }: LegalSectionProps) {
  return (
    <section className={classes.Section}>
      <h2>{title}</h2>
      {children}
    </section>
  );
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

        <h1>Política de privacidad del sitio web</h1>
        <p className={classes.SiteUrl}>www.tucabinainsonorizada.com</p>

        <LegalSection title="Política de privacidad y protección de datos">
          <p>
            Respetando lo establecido en la legislación vigente,
            tucabinainsonorizada.com se compromete a adoptar las medidas
            técnicas y organizativas necesarias, según el nivel de seguridad
            adecuado al riesgo de los datos recogidos.
          </p>
        </LegalSection>

        <LegalSection title="Leyes que incorpora esta política de privacidad">
          <p>
            Esta política de privacidad está adaptada a la normativa española y
            europea vigente en materia de protección de datos personales en
            internet. En concreto, respeta las siguientes normas:
          </p>
          <ul>
            <li>
              Reglamento (UE) 2016/679 del Parlamento Europeo y del Consejo, de
              27 de abril de 2016, relativo a la protección de las personas
              físicas en lo que respecta al tratamiento de datos personales y a
              la libre circulación de estos datos (RGPD).
            </li>
            <li>
              Ley Orgánica 3/2018, de 5 de diciembre, de Protección de Datos
              Personales y garantía de los derechos digitales (LOPD-GDD).
            </li>
            <li>
              Real Decreto 1720/2007, de 21 de diciembre, por el que se aprueba
              el Reglamento de desarrollo de la Ley Orgánica 15/1999, de 13 de
              diciembre, de Protección de Datos de Carácter Personal (RDLOPD).
            </li>
            <li>
              Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la
              Información y de Comercio Electrónico (LSSI-CE).
            </li>
          </ul>
        </LegalSection>

        <LegalSection title="Identidad del responsable del tratamiento">
          <p>
            El responsable del tratamiento de los datos personales recogidos en
            tucabinainsonorizada.com es Diego Miguel Cerrato García, con NIF
            60900895d.
          </p>
          <ul>
            <li>Dirección: paseo quince de mayo, 5, 6ºC.</li>
            <li>Teléfono de contacto: 679792719.</li>
            <li>Email de contacto: diego@tucabinainsonorizada.com.</li>
          </ul>
        </LegalSection>

        <LegalSection title="Registro de datos de carácter personal">
          <p>
            En cumplimiento de lo establecido en el RGPD y la LOPD-GDD, los
            datos personales recabados por tucabinainsonorizada.com mediante los
            formularios de sus páginas quedarán incorporados y serán tratados en
            nuestro fichero con el fin de facilitar, agilizar y cumplir los
            compromisos establecidos entre tucabinainsonorizada.com y el Usuario,
            mantener la relación que se establezca en los formularios o atender
            una solicitud o consulta.
          </p>
          <p>
            Asimismo, salvo que sea de aplicación la excepción prevista en el
            artículo 30.5 del RGPD, se mantiene un registro de actividades de
            tratamiento que especifica, según sus finalidades, las actividades de
            tratamiento llevadas a cabo y las demás circunstancias establecidas
            en el RGPD.
          </p>
        </LegalSection>

        <LegalSection title="Principios aplicables al tratamiento">
          <p>
            El tratamiento de los datos personales del Usuario se someterá a los
            principios recogidos en el artículo 5 del RGPD y en el artículo 4 y
            siguientes de la Ley Orgánica 3/2018:
          </p>
          <ul>
            <li>
              Licitud, lealtad y transparencia: se requerirá el consentimiento
              del Usuario previa información transparente de los fines para los
              cuales se recogen los datos personales.
            </li>
            <li>
              Limitación de la finalidad: los datos serán recogidos con fines
              determinados, explícitos y legítimos.
            </li>
            <li>
              Minimización de datos: solo se recogerán los datos estrictamente
              necesarios en relación con los fines del tratamiento.
            </li>
            <li>
              Exactitud: los datos personales deben ser exactos y estar
              actualizados.
            </li>
            <li>
              Limitación del plazo de conservación: los datos solo se mantendrán
              durante el tiempo necesario para los fines de su tratamiento.
            </li>
            <li>
              Integridad y confidencialidad: los datos serán tratados de forma
              que se garantice su seguridad y confidencialidad.
            </li>
            <li>
              Responsabilidad proactiva: el Responsable del tratamiento será
              responsable de asegurar el cumplimiento de estos principios.
            </li>
          </ul>
        </LegalSection>

        <LegalSection title="Categorías de datos personales">
          <p>
            Las categorías de datos que se tratan en tucabinainsonorizada.com son
            únicamente datos identificativos. En ningún caso se tratan categorías
            especiales de datos personales en el sentido del artículo 9 del RGPD.
          </p>
        </LegalSection>

        <LegalSection title="Base legal para el tratamiento">
          <p>
            La base legal para el tratamiento de los datos personales es el
            consentimiento. tucabinainsonorizada.com se compromete a recabar el
            consentimiento expreso y verificable del Usuario para el tratamiento
            de sus datos personales para uno o varios fines específicos.
          </p>
          <p>
            El Usuario tendrá derecho a retirar su consentimiento en cualquier
            momento. Como regla general, la retirada del consentimiento no
            condicionará el uso del Sitio Web.
          </p>
          <p>
            Cuando el Usuario deba o pueda facilitar sus datos a través de
            formularios para realizar consultas, solicitar información o por
            motivos relacionados con el contenido del Sitio Web, se le informará
            si la cumplimentación de alguno de ellos es obligatoria.
          </p>
        </LegalSection>

        <LegalSection title="Fines del tratamiento">
          <p>
            Los datos personales son recabados y gestionados por
            tucabinainsonorizada.com con la finalidad de facilitar, agilizar y
            cumplir los compromisos establecidos entre el Sitio Web y el Usuario,
            mantener la relación que se establezca en los formularios o atender
            una solicitud o consulta.
          </p>
          <p>
            Igualmente, los datos podrán ser utilizados con una finalidad
            comercial de personalización, operativa y estadística, así como para
            actividades propias del objeto social de tucabinainsonorizada.com,
            extracción, almacenamiento de datos y estudios de marketing para
            adecuar el contenido ofertado al Usuario y mejorar la calidad,
            funcionamiento y navegación por el Sitio Web.
          </p>
        </LegalSection>

        <LegalSection title="Períodos de retención">
          <p>
            Los datos personales solo serán retenidos durante el tiempo mínimo
            necesario para los fines de su tratamiento y, en todo caso, durante
            el plazo de 18 meses, o hasta que el Usuario solicite su supresión.
          </p>
        </LegalSection>

        <LegalSection title="Destinatarios de los datos personales">
          <p>Los datos personales del Usuario no serán compartidos con terceros.</p>
          <p>
            En cualquier caso, en el momento en que se obtengan los datos
            personales, se informará al Usuario acerca de los destinatarios o las
            categorías de destinatarios de los datos personales.
          </p>
        </LegalSection>

        <LegalSection title="Datos personales de menores de edad">
          <p>
            Solo los mayores de 14 años podrán otorgar su consentimiento para el
            tratamiento de sus datos personales de forma lícita por
            tucabinainsonorizada.com. Si se trata de un menor de 14 años, será
            necesario el consentimiento de los padres o tutores.
          </p>
        </LegalSection>

        <LegalSection title="Secreto y seguridad de los datos personales">
          <p>
            tucabinainsonorizada.com se compromete a adoptar las medidas técnicas
            y organizativas necesarias, según el nivel de seguridad adecuado al
            riesgo de los datos recogidos, para garantizar la seguridad de los
            datos personales y evitar su destrucción, pérdida, alteración
            accidental o ilícita, comunicación o acceso no autorizado.
          </p>
          <p>
            Los datos personales serán tratados como confidenciales por el
            Responsable del tratamiento, quien se compromete a garantizar que
            dicha confidencialidad sea respetada por sus empleados, asociados y
            toda persona a la cual le haga accesible la información.
          </p>
        </LegalSection>

        <LegalSection title="Derechos derivados del tratamiento">
          <p>
            El Usuario podrá ejercer frente al Responsable del tratamiento los
            siguientes derechos reconocidos en el RGPD y la Ley Orgánica 3/2018:
          </p>
          <ul>
            <li>Derecho de acceso.</li>
            <li>Derecho de rectificación.</li>
            <li>Derecho de supresión o derecho al olvido.</li>
            <li>Derecho a la limitación del tratamiento.</li>
            <li>Derecho a la portabilidad de los datos.</li>
            <li>Derecho de oposición.</li>
            <li>
              Derecho a no ser objeto de una decisión basada únicamente en el
              tratamiento automatizado, incluida la elaboración de perfiles.
            </li>
          </ul>
          <p>
            El Usuario podrá ejercitar sus derechos mediante comunicación escrita
            dirigida al Responsable del tratamiento con la referencia
            RGPD-www.tucabinainsonorizada.com.
          </p>
          <p>
            La solicitud deberá incluir nombre y apellidos del Usuario, copia del
            DNI o documento válido en derecho, petición con los motivos
            específicos, domicilio a efecto de notificaciones, fecha y firma del
            solicitante y, en su caso, documentos que acrediten la petición.
          </p>
          <ul>
            <li>Dirección postal: paseo quince de mayo, 5, 6ºC.</li>
            <li>Correo electrónico: diego@tucabinainsonorizada.com.</li>
          </ul>
        </LegalSection>

        <LegalSection title="Enlaces a sitios web de terceros">
          <p>
            El Sitio Web puede incluir hipervínculos o enlaces que permiten
            acceder a páginas web de terceros distintos de
            tucabinainsonorizada.com. Los titulares de dichos sitios web
            dispondrán de sus propias políticas de protección de datos y serán
            responsables de sus propios ficheros y prácticas de privacidad.
          </p>
        </LegalSection>

        <LegalSection title="Reclamaciones ante la autoridad de control">
          <p>
            Si el Usuario considera que existe un problema o infracción de la
            normativa vigente en la forma en que se están tratando sus datos
            personales, tendrá derecho a presentar una reclamación ante una
            autoridad de control. En España, la autoridad de control es la
            Agencia Española de Protección de Datos:
            <a href="https://www.aepd.es/" target="_blank" rel="noreferrer">
              {" "}
              https://www.aepd.es/
            </a>
            .
          </p>
        </LegalSection>

        <LegalSection title="Aceptación y cambios en esta política de privacidad">
          <p>
            Es necesario que el Usuario haya leído y esté conforme con las
            condiciones sobre protección de datos de carácter personal contenidas
            en esta Política de Privacidad, así como que acepte el tratamiento de
            sus datos personales para que el Responsable pueda proceder al mismo
            en la forma, durante los plazos y para las finalidades indicadas.
          </p>
          <p>
            tucabinainsonorizada.com se reserva el derecho a modificar su
            Política de Privacidad de acuerdo con su propio criterio o motivado
            por un cambio legislativo, jurisprudencial o doctrinal de la Agencia
            Española de Protección de Datos. Se recomienda al Usuario consultar
            esta página periódicamente.
          </p>
          <p>
            Este documento fue creado el día 10/05/2026 y adaptado al Reglamento
            (UE) 2016/679 y a la Ley Orgánica 3/2018.
          </p>
        </LegalSection>
      </article>
    </main>
  );
}
