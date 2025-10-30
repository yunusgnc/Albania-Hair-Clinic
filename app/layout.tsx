import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ClientBody from "./ClientBody";

const inter = Inter({ subsets: ["latin"] });

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "Albania Hair Clinic - Miglior Trapianto Capelli in Albania",
  description: "Prova la trasformazione con i nostri servizi avanzati di trapianto di capelli. Con oltre dieci anni di esperienza, i nostri medici altamente qualificati garantiscono risultati eccezionali.",
  keywords: "trapianto capelli, trapianto capelli albania, hair transplant, DHI, FUE, clinica capelli, albania hair clinic",
  authors: [{ name: "Albania Hair Clinic" }],
  openGraph: {
    title: "Albania Hair Clinic - Miglior Trapianto Capelli in Albania",
    description: "Prova la trasformazione con i nostri servizi avanzati di trapianto di capelli. Con oltre dieci anni di esperienza.",
    type: "website",
    locale: "it_IT",
    url: "https://albaniahairclinic.com",
    images: [
      {
        url: "https://albaniahairclinic.com/img/logo.png",
        width: 1200,
        height: 630,
        alt: "Albania Hair Clinic",
      },
    ],
  },
  robots: "index, follow",
  alternates: {
    canonical: "https://albaniahairclinic.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="it">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "MedicalBusiness",
              name: "Albania Hair Clinic",
              image: "https://albaniahairclinic.com/img/logo.png",
              description: "Clinica specializzata in trapianto di capelli con tecniche DHI e FUE",
              url: "https://albaniahairclinic.com",
              telephone: "+355-68-505-5556",
              address: {
                "@type": "PostalAddress",
                addressCountry: "AL",
                addressLocality: "Tirana",
              },
              sameAs: [
                "https://www.instagram.com/albania.hair.clinic",
                "https://www.facebook.com/albaniahairclinic",
              ],
              areaServed: ["IT", "AL", "TR", "DE", "FR"],
              medicalSpecialty: "Hair Transplantation",
              knowsAbout: ["Hair Transplant", "DHI", "FUE", "Hair Loss Treatment"],
            }),
          }}
        />
      </head>
      <ClientBody className={inter.className}>{children}</ClientBody>
    </html>
  );
}
