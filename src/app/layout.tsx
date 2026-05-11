import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: "Cabinas insonorizadas para oficinas | tucabinainsonorizada.com",
  description:
    "Compara cabinas insonorizadas para oficinas con una propuesta adaptada a tu espacio, presupuesto y necesidades reales.",
  metadataBase: new URL("https://tucabinainsonorizada.com"),
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/images/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/images/favicon-16x16.png", sizes: "16x16", type: "image/png" }
    ],
    apple: [{ url: "/images/apple-touch-icon.png", sizes: "180x180", type: "image/png" }]
  },
  openGraph: {
    title: "Cabinas insonorizadas para oficinas",
    description:
      "Una forma sencilla de elegir cabinas insonorizadas sin perder tiempo ni comparar a ciegas.",
    images: [
      {
        url: "/images/logo_min.jpg",
        width: 1200,
        height: 630,
        type: "image/jpeg",
        alt: "tucabinainsonorizada.com"
      }
    ],
    locale: "es_ES",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Cabinas insonorizadas para oficinas",
    description:
      "Una forma sencilla de elegir cabinas insonorizadas sin perder tiempo ni comparar a ciegas.",
    images: ["/images/logo_min.jpg"]
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
