import SiteHeaderSection from "@/src/site/sections/SiteHeaderSection/SiteHeaderSection";
import SplitHeroSection from "@/src/site/sections/SplitHeroSection/SplitHeroSection";
import MultiColumnSection from "@/src/site/sections/MultiColumnSection/MultiColumnSection";
import CenteredContentSection from "@/src/site/sections/CenteredContentSection/CenteredContentSection";
import SiteFooterSection from "@/src/site/sections/SiteFooterSection/SiteFooterSection";
import type { Locale } from "@/src/site/i18n/config";
import classes from "./MainPage.module.css";

type MainPageProps = {
  locale: Locale;
};

export default function MainPage({ locale }: MainPageProps) {
  return (
    <main className={classes.MainPage} data-locale={locale}>
      <SiteHeaderSection />
      <SplitHeroSection
        title="Adapta tus oficinas a las necesidades de hoy"
        intro={
          <>
            <p>
              Vas a invertir en <strong>cabinas insonorizadas.</strong>
            </p>
            <p>
              <b>No elijas mal.</b>
            </p>
          </>
        }
        bullets={["Sin perder tiempo", "Sin comparar a ciegas"]}
        note={
          <>
            Trabajo con varias marcas. Cobro de <strong>fabricantes, no de ti.</strong>
          </>
        }
        mediaTitle="Video"
        mediaSrc="https://www.youtube.com/embed/jO17KYjZ56c"
        mediaCaption={
          <>
            +34679792719
            <br />
            <span className={classes.HeroEmail}>diego@tucabinainsonorizada.com</span>
          </>
        }
      />
      <MultiColumnSection
        variant="outlined"
        columns={3}
        items={[
          {
            label: "El 78%",
            text: <p>de los empleados echan en falta privacidad en la oficina.</p>
          },
          {
            label: "Un empleado pierde",
            text: <p>hasta <strong>86 min/día</strong> solo por ruido.</p>
          },
          {
            label: "Más del 70%",
            text: (
              <p>
                de las reuniones son de menos de <strong>4 personas</strong>; el{" "}
                <strong>50%</strong> son de <strong>1 persona.</strong>
              </p>
            )
          },
          {
            label: "Un 63%",
            text: <p>afirma que el ruido impacta negativamente en su motivación.</p>
          },
          {
            label: "74%",
            text: <p>de los trabajadores percibe el ruido en la oficina como mentalmente agotador.</p>
          },
          {
            label: "El ruido reduce",
            text: (
              <p>
                entre <strong>10%</strong> y un <strong>30%</strong> en la productividad de
                los empleados.
              </p>
            )
          }
        ]}
      />
      <MultiColumnSection
        columns={2}
        items={[
          {
            title: "Cabinas individuales",
            imageSrc: "/images/cabina-individual.png",
            imageAlt: "Cabinas individuales"
          },
          {
            title: "Salas de reuniones",
            imageSrc: "/images/cabina-reuniones.png",
            imageAlt: "Salas de reuniones"
          }
        ]}
      />
      <MultiColumnSection
        variant="filled"
        columns={4}
        items={[
          { label: "1", title: "Nos cuentas tu caso" },
          { label: "2", title: "Propuesta adaptada a presupuesto" },
          { label: "3", title: "Entrega y montaje" },
          { label: "4", title: "Atención post-venta" }
        ]}
      />
      <CenteredContentSection titleLines={["Ahorras tiempo", "No te equivocas"]} showLeadForm />
      <CenteredContentSection eyebrow="Silencio real para oficinas reales" showLeadForm>
        <h2>
          Las quieres por <strong>falta de espacio.</strong>
        </h2>
        <h2>
          Disfrutarás <strong>trabajar sin ruido.</strong>
        </h2>
        <h2>
          Te dará confianza <strong>recuperar la privacidad.</strong>
        </h2>
        <h2>
          Te enamorarás de <strong>poder concentrarte.</strong>
        </h2>
      </CenteredContentSection>
      <SiteFooterSection />
    </main>
  );
}
