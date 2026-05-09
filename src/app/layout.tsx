import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: "Cabinas insonorizadas para oficinas | tucabinainsonorizada.com",
  description:
    "Compara cabinas insonorizadas para oficinas con una propuesta adaptada a tu espacio, presupuesto y necesidades reales.",
  metadataBase: new URL("https://tucabinainsonorizada.com"),
  openGraph: {
    title: "Cabinas insonorizadas para oficinas",
    description:
      "Una forma sencilla de elegir cabinas insonorizadas sin perder tiempo ni comparar a ciegas.",
    images: ["/images/cabina-reuniones.png"],
    locale: "es_ES",
    type: "website"
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
